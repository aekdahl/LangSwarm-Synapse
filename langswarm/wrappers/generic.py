from ..bot import LLM

class AgentWrapper(LLM):
    """
    A unified wrapper for various LLM agents (LangChain, Hugging Face, etc.).
    Includes optional memory support.
    """

    def __init__(self, agent, memory=None, **kwargs):
        super().__init__(**kwargs)
        self.agent = agent
        self.memory = memory

    def chat(self, query, **kwargs):
        # Store query in memory
        if self.memory:
            self.memory.add_message("user", query)

        # Handle agent interactions
        if hasattr(self.agent, "run"):
            response = self.agent.run(query)
        elif callable(self.agent):
            response = self.agent(query)
        else:
            raise ValueError(f"Unsupported agent type: {type(self.agent)}")

        # Store response in memory
        response_text = (
            response.content if hasattr(response, "content") else str(response)
        )
        if self.memory:
            self.memory.add_message("assistant", response_text)

        return response_text
