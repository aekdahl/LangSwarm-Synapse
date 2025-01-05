"""
LangSwarmVotingTool: A LangChain-compatible tool that uses the LLMVoting
class to enable voting-based decision-making among multiple agents.

Purpose:
- Integrates LLMVoting into LangChain workflows as a voting tool.
- Facilitates collaborative decision-making by tallying agent responses.
"""
from langchain.tools import Tool
from langchain.pydantic_v1 import Extra
from langswarm.synapse.swarm.voting import LLMVoting

class LangSwarmVotingTool(Tool):
    class Config:
      extra = Extra.allow
        
    def __init__(self, agents, **kwargs):
        """
        Initializes the LangSwarmVotingTool.

        Parameters:
        - agents (list): List of agents to use in the voting process.
        - kwargs: Additional parameters for the LLMVoting class.
        """
        super().__init__(
            name="LangSwarm Voting",
            func=self.run,
            description="A tool to enable voting-based decision-making among agents.",
            voting = LLMVoting(clients=agents, **kwargs)
        )

    def run(self, query):
        """
        Executes the voting workflow with the given query.

        Parameters:
        - query (str): The query to process.

        Returns:
        - tuple: The consensus result, group size, and list of responses.
        """
        self.voting.query = query
        return self.voting.run()
