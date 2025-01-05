"""
LangSwarmAggregationTool: A LangChain-compatible tool that uses the LLMAggregation
class to merge and aggregate responses from multiple LLM agents.

Purpose:
- Integrates LLMAggregation into LangChain workflows as a reusable tool.
- Enables aggregation of diverse responses into a unified output.
"""

from langchain.tools import Tool
from langswarm.synapse.swarm.aggregation import LLMAggregation

class LangSwarmAggregationTool(Tool):
    def __init__(self, agents, **kwargs):
        """
        Initializes the LangSwarmAggregationTool.

        Parameters:
        - agents (list): List of agents to use in the aggregation process.
        - kwargs: Additional parameters for the LLMAggregation class.
        """
        super().__init__(
            name="LangSwarm Aggregation",
            func=self.run,
            description="A tool to merge and aggregate responses from multiple agents."
        )
        self.aggregation = LLMAggregation(clients=agents, **kwargs)

    def run(self, query, hb):
        """
        Executes the aggregation workflow with the given query.

        Parameters:
        - query (str): The query to process.
        - hb: Additional aggregation handler, if required.

        Returns:
        - str: The aggregated result.
        """
        self.aggregation.query = query
        return self.aggregation.run(hb)
