"""
LangSwarmRoutingTool: A LangChain-compatible tool that uses the LLMRouting
class to dynamically route tasks to the appropriate agents or workflows.

Purpose:
- Integrates LLMRouting into LangChain workflows as a dynamic routing tool.
- Allows tasks to be routed based on predefined logic.
"""

from langchain.tools import Tool
from langswarm.synapse.swarm.routing import LLMRouting

class LangSwarmRoutingTool(Tool):
    def __init__(self, route, bots, main_bot, **kwargs):
        """
        Initializes the LangSwarmRoutingTool.

        Parameters:
        - route (int): The routing logic to apply.
        - bots (dict): Dictionary of bots to route tasks.
        - main_bot: The primary bot for routing decisions.
        - kwargs: Additional parameters for the LLMRouting class.
        """
        self._route = route
        self._bots = bots
        self._main_bot = main_bot
        self._kwargs = kwargs
        super().__init__(
            name="LangSwarm Routing",
            func=self.run,
            description="A tool to dynamically route tasks to the appropriate agents."
        )

    @property
    def routing(self):
        """
        Lazy-loads and returns an instance.
        """
        if not hasattr(self, "_routing"):
            self._routing = LLMRouting(route=self._route, bots=self._bots, main_bot=self._main_bot, **self._kwargs)
        return self._routing

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
