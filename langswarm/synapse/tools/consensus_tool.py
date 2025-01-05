"""
LangSwarmConsensusTool: A LangChain-compatible tool that uses the LLMConsensus
class to achieve consensus among multiple LLM agents for a given query.

Purpose:
- Integrates LLMConsensus into LangChain workflows as a reusable tool.
- Allows developers to use consensus-building as a modular step in pipelines.
"""

from langchain.tools import Tool
from langswarm.synapse.swarm.consensus import LLMConsensus

class LangSwarmConsensusTool(Tool):
    def __init__(self, agents, **kwargs):
        """
        Initializes the LangSwarmConsensusTool.

        Parameters:
        - agents (list): List of agents to use in the consensus process.
        - kwargs: Additional parameters for the LLMConsensus class.
        """
        self._agents = agents
        self._kwargs = kwargs
        super().__init__(
            name="LangSwarm Consensus",
            func=self.run,
            description="A tool to reach consensus among multiple agents for a given query."
        )

    @property
    def consensus(self):
        """
        Lazy-loads and returns an instance.
        """
        if not hasattr(self, "_consensus"):
            self._consensus = LLMConsensus(clients=self._agents, **self._kwargs)
        return self._consensus

    def run(self, query):
        """
        Executes the consensus workflow with the given query.

        Parameters:
        - query (str): The query to process.

        Returns:
        - str: The consensus result.
        """
        self.consensus.query = query
        return self.consensus.run()
