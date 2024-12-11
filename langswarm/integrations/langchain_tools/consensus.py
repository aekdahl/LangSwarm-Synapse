from langchain.tools import Tool
from langswarm.consensus import LLMConsensus

class LangSwarmConsensusTool(Tool):
    """
    A LangChain-compatible Tool for LangSwarm's consensus module.
    """
    def __init__(self, agents, **kwargs):
        """
        Initialize the consensus tool.

        Parameters:
        - agents (list): List of LLM agents for consensus.
        - kwargs: Additional parameters for the LLMConsensus class.
        """
        self.consensus = LLMConsensus(clients=agents, **kwargs)
        super().__init__(name="LangSwarm Consensus", func=self.run, description="Run consensus workflow")

    def run(self, query: str):
        """
        Execute the consensus process.

        Parameters:
        - query (str): The query to evaluate using consensus.

        Returns:
        - str: Consensus result.
        """
        self.consensus.query = query
        result = self.consensus.run()
        return result

# Example Usage in a LangChain Workflow
# if __name__ == "__main__":
#     agents = [...]  # Define agents
#     consensus_tool = LangSwarmConsensusTool(agents=agents)
#     response = consensus_tool.run("What is the capital of France?")
#     print("Consensus Response:", response)
