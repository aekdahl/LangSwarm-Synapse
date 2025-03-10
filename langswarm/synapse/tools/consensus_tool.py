"""
LangSwarmConsensusTool: A LangChain-compatible tool that uses the LLMConsensus
class to achieve consensus among multiple LLM agents for a given query.

Purpose:
- Integrates LLMConsensus into LangChain workflows as a reusable tool.
- Allows developers to use consensus-building as a modular step in pipelines.
"""
from langchain.tools import Tool
from langchain.pydantic_v1 import Extra
from langswarm.synapse.swarm.consensus import LLMConsensus

class LangSwarmConsensusTool(Tool):
    class Config:
        extra = Extra.allow
        
    def __init__(self, agents, **kwargs):
        """
        Initializes the LangSwarmConsensusTool.

        Parameters:
        - agents (list): List of agents to use in the consensus process.
        - kwargs: Additional parameters for the LLMConsensus class.
        """
        super().__init__(
            name="LangSwarm Consensus",
            func=self.run,
            description="A tool to reach consensus among multiple agents for a given query.",
            consensus = LLMConsensus(clients=agents, **kwargs)
        )

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
