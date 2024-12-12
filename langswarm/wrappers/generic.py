try:
    from langchain.memory import BaseMemory
except ImportError:
    BaseMemory = None  # Fallback if BaseMemory is not available

from ..bot import LLM

class AgentWrapper(LLM):
    """
    A generic wrapper for various LLM agents (LangChain, Hugging Face, Google Gemini, etc.).
    Detects the type of agent and adapts behavior dynamically.
    """

    def __init__(self, name, agent, memory=None, is_conversational=False, **kwargs):
        """
        A unified wrapper for various LLM agents (LangChain, Hugging Face, etc.).

        Includes optional memory support.

        Parameters:
        - agent: The LLM agent to wrap (e.g., LangChain, Hugging Face, Google Gemini).
        - memory: Optional memory class
        - kwargs: Additional parameters for the LLM base class.
        - is_conversational: 
            Applies only to Hugging Fave models. Determine if the full context, 
            or only the latest query should be sent to the model.

        Fixed parameters:
        - name: Set to the current agents name.
        - provider: Set to 'wrapper' for all wrapped agents.
        """

        kwargs['name'] = name
        kwargs['provider'] = 'wrapper'
        
        super().__init__(**kwargs)
        self.name = name
        self.agent = agent
        self.memory = memory
        self.is_conversational = is_conversational

    def chat(self, q=None, reset=False, erase_query=False, remove_linebreaks=False):
        """
        Use the wrapped agent to process the query.

        Parameters:
        - q (str): Query string.
        - json (bool): Return response in JSON format if supported by the agent.
        - reset (bool): Reset the memory before processing.
        - erase_query (bool): Erase the query after processing.
        - remove_linebreaks (bool): Remove line breaks from the query.

        Returns:
        - str: The agent's response.

        ToDo: 
            - Add JSON as response format.
        """
        if reset:
            self.reset()

        if q:
            self.add_message(q, role='user', remove_linebreaks=remove_linebreaks)

        # Dynamically handle the wrapped agent's behavior
        if hasattr(self.agent, "run"):
            # LangChain agent
            if self.memory and BaseMemory is not None and isinstance(self.memory, BaseMemory):
                response = self.agent.run(q)
            else:
                response = self.agent.invoke(self.in_memory)
        elif hasattr(self.agent, "__call__"):
            # Hugging Face pipeline
            if self.is_conversational:
                context = " ".join([message["content"] for message in self.in_memory])
                response = self.agent(context) # Send full context
            else:
                response = self.agent(q) # Send only the query
        else:
            raise ValueError(f"Unsupported agent type: {type(self.agent)}")

        # Handle the response format
        if hasattr(response, "content"):
            response = response.content
        elif isinstance(response, dict):
            response = response.get("generated_text", "")
        else:
            response = str(response)

        if q and erase_query:
            self.remove()

        self.utils.bot_log(self.name, response)

        if self.utils:
            self.utils.update_price_tokens_use_estimates(str(self.in_memory) + response, model=self.model, verbose=False)

        return response

    def __getattr__(self, name):
        """
        Delegate attribute access to the wrapped agent.
        """
        return getattr(self.agent, name)
