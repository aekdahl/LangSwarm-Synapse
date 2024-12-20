import logging
from typing import Any, Optional

try:
    from langchain.memory import BaseMemory
    from langchain.memory import ConversationBufferMemory, RedisChatMessageHistory
except ImportError:
    BaseMemory = None  # Fallback if BaseMemory is not available
    ConversationBufferMemory = None
    RedisChatMessageHistory = None

try:
    from langsmith.tracers.helpers import traceable, log_error
    from langsmith.wrappers import wrap_openai
    from langsmith import LangSmithTracer
except ImportError:
    traceable = None
    log_error = None
    wrap_openai = None
    LangSmithTracer = None

from ..bot import LLM


class AgentWrapper(LLM):
    """
    A unified wrapper for LLM agents, LangChain chains, Hugging Face models, and OpenAI LLMs.
    Supports LangSmith logging, shared memory, and error handling.
    """

    def __init__(self, name, agent, memory=None, is_conversational=False, langsmith_api_key=None, **kwargs):
        """
        Initialize the AgentWrapper.

        Parameters:
        - name (str): The agent's name.
        - agent: The LLM agent to wrap (e.g., LangChain chain, Hugging Face pipeline, OpenAI model).
        - memory (optional): Memory class for the agent (e.g., ConversationBufferMemory or shared memory).
        - is_conversational (bool): For Hugging Face models, determines if the full context 
                                    or only the latest query should be sent to the model.
        - langsmith_api_key (str, optional): API key for LangSmith. Enables LangSmith logging if provided.
        - kwargs: Additional parameters for the base LLM class.
        """
        kwargs["name"] = name
        kwargs["provider"] = "wrapper"
        super().__init__(**kwargs)

        self.name = name
        self.in_memory = []
        self.agent = self._wrap_agent(agent, langsmith_api_key)
        self.memory = self._initialize_memory(memory)
        self.is_conversational = is_conversational
        self.logger = self._initialize_logger(name)
        self.langsmith_enabled = langsmith_api_key is not None and traceable is not None

        # Initialize LangSmith tracer if enabled
        self.langsmith_tracer = None
        if self.langsmith_enabled:
            self.langsmith_tracer = LangSmithTracer(api_key=langsmith_api_key)

    def _initialize_memory(self, memory: Optional[Any]) -> Optional[Any]:
        """
        Initialize or validate the memory configuration.

        Parameters:
        - memory: The provided memory instance.

        Returns:
        - A valid memory instance or None.
        """
        # Check if the agent already has memory
        if hasattr(self.agent, "memory") and self.agent.memory is not None:
            return self.agent.memory

        # Use the provided memory if available
        if memory:
            if BaseMemory and isinstance(memory, BaseMemory):
                return memory
            else:
                raise ValueError("Invalid memory instance provided. Ensure compatibility with LangChain memory classes.")

        # Default to internal in-memory storage
        return self.in_memory

    def _wrap_agent(self, agent: Any, langsmith_api_key: Optional[str]) -> Any:
        """
        Wrap the agent with LangSmith or custom tracing if applicable.

        Parameters:
        - agent: The agent to wrap.
        - langsmith_api_key (str): API key for LangSmith (if enabled).

        Returns:
        - The wrapped agent or the original agent.
        """
        if langsmith_api_key:
            if wrap_openai and self._is_openai_llm(agent):
                # Special handling for OpenAI LLMs
                return wrap_openai(agent, api_key=langsmith_api_key)
            elif traceable:
                # General tracing for other callable agents
                run_type = "chain" if hasattr(agent, "run") else "llm"
                return traceable(run_type=run_type, name=self._get_module_path(agent))(agent)
        return agent

    @staticmethod
    def _get_module_path(module_class: Any) -> str:
        """
        Returns the full module path of a given class or callable.

        :param module_class: The class or callable to get the module path for.
        :type module_class: Any
        :return: The module path
        :rtype: str
        """
        return (
            getattr(module_class, "__module__", "")
            + "."
            + getattr(module_class, "__name__", "")
        ).strip(".")

    @staticmethod
    def _is_openai_llm(agent: Any) -> bool:
        """
        Determine if the agent is an OpenAI LLM.

        Parameters:
        - agent: The agent to check.

        Returns:
        - bool: True if the agent is an OpenAI LLM, False otherwise.
        """
        return hasattr(agent, "model") and "openai" in str(type(agent)).lower()

    def _initialize_logger(self, name: str) -> logging.Logger:
        """
        Initialize the fallback logger.

        Parameters:
        - name (str): The name of the logger.

        Returns:
        - Logger instance.
        """
        logger = logging.getLogger(name)
        if not logger.hasHandlers():
            handler = logging.StreamHandler()
            formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
            handler.setFormatter(formatter)
            logger.addHandler(handler)
            logger.setLevel(logging.INFO)
        return logger

    def run(self, *args, **kwargs):
        """
        Override the `run` method to ensure LangSwarm features are applied.

        Returns:
        - The agent's response after applying LangSwarm features.
        """
        return self.chat(*args, **kwargs)

    def invoke(self, *args, **kwargs):
        """
        Override the `invoke` method for LangChain agents.

        Returns:
        - The agent's response after invoking LangSwarm features.
        """
        return self.chat(*args, **kwargs)

    def chat(self, q=None, reset=False, erase_query=False, remove_linebreaks=False):
        """
        Process the query using the wrapped agent.

        Parameters:
        - q (str): The query string.
        - reset (bool): If True, reset the memory before processing.
        - erase_query (bool): If True, erase the query after processing.
        - remove_linebreaks (bool): Remove line breaks from the query.

        Returns:
        - str: The agent's response.
        """
        if reset:
            self.reset()

        if q:
            self.add_message(q, role="user", remove_linebreaks=remove_linebreaks)
            if not self.langsmith_enabled:
                self.logger.info(f"Query sent to agent {self.name}: {q}")

        try:
            # Handle different agent types
            if hasattr(self.agent, "run"):
                # LangChain chains
                if self.memory and BaseMemory and isinstance(self.memory, BaseMemory):
                    response = self.agent.run(q)
                else:
                    response = self.agent.invoke(self.in_memory)
            elif callable(self.agent):
                # Hugging Face or callable agents
                context = (
                    " ".join([message["content"] for message in self.in_memory])
                    if self.is_conversational
                    else q
                )
                response = self.agent(context)
            else:
                raise ValueError(f"Unsupported agent type: {type(self.agent)}")

            # Parse response
            response = self._parse_response(response)

            # Log response
            if not self.langsmith_enabled:
                self.logger.info(f"Agent {self.name} response: {response}")

            if q and erase_query:
                self.remove()

            return response

        except Exception as e:
            # Log error to LangSmith if enabled, else to the fallback logger
            if self.langsmith_enabled and self.langsmith_tracer and log_error:
                self.langsmith_tracer.log_error(str(e), name=self.name, run_type="error")
            else:
                self.logger.error(f"Error processing query in agent {self.name}: {e}")
            raise

    def _parse_response(self, response: Any) -> str:
        """
        Parse the response from the wrapped agent.

        Parameters:
        - response: The agent's raw response.

        Returns:
        - str: The parsed response.
        """
        if hasattr(response, "content"):
            return response.content
        elif isinstance(response, dict):
            return response.get("generated_text", "")
        return str(response)

    def __getattr__(self, name: str) -> Any:
        """
        Delegate attribute access to the wrapped agent.

        Parameters:
        - name (str): The attribute name.

        Returns:
        - The attribute from the wrapped agent.
        """
        return getattr(self.agent, name)
