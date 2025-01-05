from langswarm.synapse.interface.templates import Templates
from unittest.mock import MagicMock
import pytest

@pytest.fixture
def mock_agents():
    return [MagicMock() for _ in range(3)]

def test_consensus_workflow(mock_agents):
    mock_pipeline = MagicMock()
    mock_pipeline.run = MagicMock(return_value="Consensus Result")
    Templates.consensus = MagicMock(return_value=mock_pipeline)
    result = Templates.consensus(mock_agents, query="What is renewable energy?")
    assert result.run("What is renewable energy?") == "Consensus Result"

def test_voting_workflow(mock_agents):
    mock_pipeline = MagicMock()
    mock_pipeline.run = MagicMock(return_value=("Voting Result", 3, ["response1", "response2"]))
    Templates.voting = MagicMock(return_value=mock_pipeline)
    result = Templates.voting(mock_agents, query="What is renewable energy?")
    assert isinstance(result.run("What is renewable energy?"), tuple)
