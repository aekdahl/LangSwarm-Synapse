import pytest
from synapse.swarm.swarm import Swarm
from sentence_transformers import SentenceTransformer
from unittest.mock import MagicMock

@pytest.fixture
def swarm_instance():
    return Swarm(
        query="What is renewable energy?",
        requirements=["Define renewable energy."],
        verbose=True
    )

def test_check_initialization(swarm_instance):
    assert swarm_instance.check_initialization() == True

def test_dynamic_threshold_valid(swarm_instance):
    result = swarm_instance.dynamic_threshold(0.7, 0.85, 0.6)
    assert 0.0 <= result <= 1.0
    assert result == pytest.approx(0.79, 0.01)

def test_dynamic_threshold_invalid_inputs(swarm_instance):
    with pytest.raises(ValueError):
        swarm_instance.dynamic_threshold(1.2, 0.85, 0.6)  # Invalid similarity

    with pytest.raises(ValueError):
        swarm_instance.dynamic_threshold(0.7, 1.2, 0.6)  # Invalid threshold

    with pytest.raises(ValueError):
        swarm_instance.dynamic_threshold(0.7, 0.85, -0.1)  # Invalid adjustment factor

def test_get_consensus_valid(swarm_instance):
    paraphrase_groups = [["paragraph1", "paragraph2"], ["paragraph3"]]
    compliant_embeddings = [MagicMock() for _ in paraphrase_groups]
    compliant_paragraphs = ["paragraph1", "paragraph2", "paragraph3"]
    mock_model = MagicMock()
    mock_model.encode.return_value = MagicMock()

    swarm_instance.model = mock_model
    best, similarity, size = swarm_instance.get_consensus(paraphrase_groups, compliant_paragraphs, compliant_embeddings)

    assert best is not None
    assert 0 <= similarity <= 1
    assert size >= 0

def test_get_consensus_edge_cases(swarm_instance):
    # Empty paraphrase groups
    paraphrase_groups = []
    compliant_paragraphs = []
    compliant_embeddings = []
    best, similarity, size = swarm_instance.get_consensus(paraphrase_groups, compliant_paragraphs, compliant_embeddings)
    assert best == "No consensus could be determined."
    assert similarity == 0
    assert size == 0
