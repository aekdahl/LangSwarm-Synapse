"""
LangSwarmBranchingTool: A LangChain-compatible tool that uses the LLMBranching
class to generate multiple responses from a set of LLM agents for a given query.

Purpose:
- Integrates LLMBranching into LangChain workflows as a modular tool.
- Enables generation of diverse outputs from multiple agents.
"""

from langchain.tools import Tool
from langswarm.swarm.branching import LLMBranching

class LangSwarmBranchingTool(Tool):
    def __init__(self, agents, **kwargs):
        """
        Initializes the LangSwarmBranchingTool.

        Parameters:
        - agents (list): List of agents to use in the branching process.
        - kwargs: Additional parameters for the LLMBranching class.
        """
        self.branching = LLMBranching(clients=agents, **kwargs)
        super().__init__(
            name="LangSwarm Branching",
            func=self.run,
            description="A tool to generate multiple responses from a set of agents."
        )

    def run(self, query):
        """
        Executes the branching workflow with the given query.

        Parameters:
        - query (str): The query to process.

        Returns:
        - list: A list of responses from the agents.
        """
        self.branching.query = query
        return self.branching.run()
