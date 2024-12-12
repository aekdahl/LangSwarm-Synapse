from ..wrappers.generic import AgentWrapper

class AgentFactory:
    """
    A factory to create wrapped agents compatible with LangSwarm workflows.
    Dynamically wraps agents based on their type.
    """
    @staticmethod
    def wrap_agent(name, agent, memory=None, is_conversational=False, **kwargs):
        """
        Create a compatible LangSwarm agent.

        Parameters:
        - agent: The agent to wrap (e.g., LangChain, Hugging Face, Google Gemini).
        - kwargs: Additional parameters for the wrapper.

        Returns:
        - LLM-compatible wrapped agent.
        """
        # Use the GenericAgentWrapper for most agents
        return AgentWrapper(name, agent, memory=memory, is_conversational=is_conversational, **kwargs)
