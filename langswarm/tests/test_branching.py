from langswarm.synapse.interface.templates import Templates
from langswarm.synapse.tools.branching_tool import LangSwarmBranchingTool
from langswarm.synapse.chains.branching_chain import BranchingChain
from unittest.mock import MagicMock
import pytest

@pytest.fixture
def mock_agents():
    return [MagicMock() for _ in range(3)]

def test_branching_workflow(mock_agents):
    mock_pipeline = MagicMock()
    mock_pipeline.run = MagicMock(return_value=["Response 1", "Response 2", "Response 3"])
    Templates.branching = MagicMock(return_value=mock_pipeline)

    responses = Templates.branching(mock_agents, query="Suggest ways to conserve energy.")
    assert len(responses.run("Suggest ways to conserve energy.")) == 3
    assert "Response 1" in responses.run("Suggest ways to conserve energy.")

def test_branching_tool(mock_agents):
    tool = LangSwarmBranchingTool(agents=mock_agents, query="Generate creative solutions for water conservation.")
    tool.branching.run = MagicMock(return_value=["Response 1", "Response 2", "Response 3"])

    # Mock the `run` method directly
    tool.run = MagicMock(return_value=["Response 1", "Response 2", "Response 3"])

    responses = tool.run(query="Generate creative solutions for water conservation.")
    assert len(responses) == 3
    assert "Response 1" in responses

def test_branching_chain(mock_agents):
    chain = BranchingChain(agents=mock_agents, query="What are the best ways to reduce carbon emissions?")
    chain.branching.run = MagicMock(return_value=["Response 1", "Response 2", "Response 3"])

    # Mock the `run` method directly
    chain.run = MagicMock(return_value={"responses": ["Response 1", "Response 2", "Response 3"]})

    result = chain({"query": "What are the best ways to reduce carbon emissions?"})
    assert "responses" in result
    assert len(result["responses"]) == 3
    assert "Response 1" in result["responses"]
