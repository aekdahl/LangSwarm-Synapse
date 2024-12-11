from ..bot import LLM

class AgentWrapper(LLM):
    """
    A generic wrapper for various LLM agents (LangChain, Hugging Face, Google Gemini, etc.).
    Detects the type of agent and adapts behavior dynamically.
    """

    def __init__(self, agent, **kwargs):
        """
        Initialize the wrapper with any compatible LLM agent.

        Parameters:
        - agent: The LLM agent to wrap (e.g., LangChain, Hugging Face, Google Gemini).
        - kwargs: Additional parameters for the LLM base class.
        """
        super().__init__(**kwargs)
        self.agent = agent

    def chat(self, q=None, json=False, reset=False, erase_query=False, remove_linebreaks=False):
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
        """
        if reset:
            self.reset()

        if q is not None:
            self.set_query(q, remove_linebreaks=remove_linebreaks)

        # Dynamically handle the wrapped agent's behavior
        if hasattr(self.agent, "run"):
            # LangChain agent
            response = self.agent.run(q)
        elif hasattr(self.agent, "__call__"):
            # Hugging Face pipeline or Google Gemini (via langchain_google_genai)
            response = self.agent(q)
        else:
            raise ValueError(f"Unsupported agent type: {type(self.agent)}")

        # Handle the response format
        response_text = (
            response.content if hasattr(response, "content") else str(response)
        )

        # Add response to memory
        self.add_response(response_text)

        # Optionally erase the query from memory
        if erase_query:
            self.remove()

        return response_text

    def __getattr__(self, name):
        """
        Delegate attribute access to the wrapped agent.
        """
        return getattr(self.agent, name)
