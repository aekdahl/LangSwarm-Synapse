from langswarm.synapse.interface.templates import Templates
from langswarm.synapse.tools.aggregation_tool import LangSwarmAggregationTool
from langswarm.synapse.chains.aggregation_chain import AggregationChain
from unittest.mock import MagicMock
import pytest

@pytest.fixture
def mock_agents():
    return [MagicMock() for _ in range(3)]

def test_aggregation_workflow(mock_agents):
    mock_pipeline = MagicMock()
    mock_pipeline.run = MagicMock(return_value="Aggregated Result")
    Templates.aggregation = MagicMock(return_value=mock_pipeline)

    result = Templates.aggregation(mock_agents, query="Summarize the effects of global warming.")
    assert result.run("Summarize the effects of global warming.") == "Aggregated Result"

def test_aggregation_tool(mock_agents):
    tool = LangSwarmAggregationTool(agents=mock_agents)
    tool.aggregation.run = MagicMock(return_value="Aggregated Result")

    result = tool.run(query="What are the benefits of sustainable farming?", hb=None)
    assert result == "Aggregated Result"

def test_aggregation_chain(mock_agents):
    chain = AggregationChain(agents=mock_agents)
    chain.aggregation.run = MagicMock(return_value="Aggregated Summary")

    result = chain({"query": "Summarize the advancements in renewable energy."})
    assert "aggregated_result" in result
    assert result["aggregated_result"] == "Aggregated Summary"
