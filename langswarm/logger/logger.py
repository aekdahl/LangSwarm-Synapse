try:
    from langsmith import LangSmith
except ImportError:
    LangSmith = None  # Fallback if LangSmith is not installed


class LangSwarmLogger:
    """
    A logger for LangSwarm workflows. If LangSmith is installed, it logs interactions
    to LangSmith. If not, it performs no logging (no-op).
    """

    def __init__(self, api_key=None):
        if LangSmith:
            self.smith = LangSmith(api_key=api_key)
        else:
            self.smith = None

    def log_interaction(self, swarm_name, input_data, output_data, metadata=None):
        """
        Logs an interaction if LangSmith is available. Otherwise, it does nothing.

        Parameters:
        - swarm_name (str): The name of the swarm workflow (e.g., "LLMConsensus").
        - input_data (dict): The input data for the workflow.
        - output_data (dict): The output data from the workflow.
        - metadata (dict, optional): Additional metadata for the interaction.
        """
        if self.smith:
            self.smith.log_chain_interaction(
                chain_name=swarm_name,
                input_data=input_data,
                output_data=output_data,
                metadata=metadata or {}
            )
        else:
            # No-op if LangSmith is not installed
            pass
