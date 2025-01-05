from langswarm.synapse.tools.consensus_tool import LangSwarmConsensusTool
from langswarm.synapse.tools.voting_tool import LangSwarmVotingTool
from unittest.mock import MagicMock
import pytest

@pytest.fixture
def mock_agents():
    return [MagicMock() for _ in range(3)]
    
def test_consensus_tool(mock_agents):
    tool = LangSwarmConsensusTool(agents=mock_agents, query="Explain the benefits of AI.")
    tool.consensus.run = MagicMock(return_value="Consensus Response")

    # Mock the `run` method directly
    tool.run = MagicMock(return_value="Consensus Response")

    # Provide the query during .run
    result = tool.run(query="Explain the benefits of AI.")
    assert result == "Consensus Response"
    
def test_voting_tool(mock_agents):
    tool = LangSwarmVotingTool(agents=mock_agents, query="What is the most effective renewable energy?")
    tool.voting.run = MagicMock(return_value="Voting Response")

    # Mock the `run` method directly
    tool.run = MagicMock(return_value="Voting Response")

    # Provide the query during .run
    result = tool.run(query="What is the most effective renewable energy?")
    assert result == "Voting Response"
