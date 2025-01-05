from langswarm.synapse.tools.routing_tool import LangSwarmRoutingTool
from langswarm.synapse.chains.routing_chain import RoutingChain
from unittest.mock import MagicMock
import pytest

@pytest.fixture
def mock_agents():
    return {"bot1": MagicMock(), "bot2": MagicMock()}

def test_routing_workflow(mock_agents):
    main_bot = MagicMock()
    tool = LangSwarmRoutingTool(route=2, bots=mock_agents, main_bot=main_bot, query="Define AI.")
    tool.routing.run = MagicMock(return_value="Consensus Result")

    result = tool.run("Define AI.")
    assert result == "Consensus Result"

def test_routing_chain(mock_agents):
    main_bot = MagicMock()
    chain = RoutingChain(route=1, bots=mock_agents, main_bot=main_bot, query="What are the ethical considerations of AI?")
    chain.routing.run = MagicMock(return_value="Branching Result")

    result = chain({"query": "What are the ethical considerations of AI?"})
    assert "routed_result" in result
    assert result["routed_result"] == "Branching Result"
