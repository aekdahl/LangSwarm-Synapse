"""
LangSwarmRoutingTool: A LangChain-compatible tool that uses the LLMRouting
class to dynamically route tasks to the appropriate agents or workflows.

Purpose:
- Integrates LLMRouting into LangChain workflows as a dynamic routing tool.
- Allows tasks to be routed based on predefined logic.
"""
from langchain.tools import Tool
from langchain.pydantic_v1 import Extra
from langswarm.synapse.swarm.routing import LLMRouting

class LangSwarmRoutingTool(Tool):
    class Config:
      extra = Extra.allow
        
    def __init__(self, route, bots, main_bot, **kwargs):
        """
        Initializes the LangSwarmRoutingTool.

        Parameters:
        - route (int): The routing logic to apply.
        - bots (dict): Dictionary of bots to route tasks.
        - main_bot: The primary bot for routing decisions.
        - kwargs: Additional parameters for the LLMRouting class.
        """
        super().__init__(
            name="LangSwarm Routing",
            func=self.run,
            description="A tool to dynamically route tasks to the appropriate agents.",
            routing = LLMRouting(route=route, bots=bots, main_bot=main_bot, **kwargs)
        )

    def run(self, query):
        """
        Executes the routing workflow with the given query.

        Parameters:
        - query (str): The query to process.

        Returns:
        - str: The result from the routed agent.
        """
        self.routing.query = query
        return self.routing.run()
