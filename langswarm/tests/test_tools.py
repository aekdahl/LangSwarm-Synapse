from langswarm.synapse.tools.consensus_tool import LangSwarmConsensusTool
from langswarm.synapse.tools.voting_tool import LangSwarmVotingTool
import pytest

@pytest.fixture
def mock_agents():
    return [MagicMock() for _ in range(3)]

def test_consensus_tool(mock_agents):
    tool = LangSwarmConsensusTool(mock_agents)
    tool.consensus.run = MagicMock(return_value="Consensus Result")
    result = tool.run(query="What is renewable energy?")
    assert result == "Consensus Result"

def test_voting_tool(mock_agents):
    tool = LangSwarmVotingTool(mock_agents)
    tool.voting.run = MagicMock(return_value=("Voting Result", 3, ["response1", "response2"]))
    result = tool.run(query="What is renewable energy?")
    assert isinstance(result, tuple)
    assert result[0] == "Voting Result"
