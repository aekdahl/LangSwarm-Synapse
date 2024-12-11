# LangSwarm

LangSwarm is a Python package for orchestrating **multiple Large Language Models (LLMs)** to collaborate effectively. It provides out-of-the-box frameworks for consensus-building, voting, aggregation, branching, and routing, enabling developers to harness the collective power of LLMs for robust and reliable results.

## Why LangSwarm?

- **Plug-and-Play Multi-Agent Orchestration**: Quickly build workflows where LLMs collaborate to refine outputs or solve tasks.
- **Consensus Mechanisms**: Ensure outputs meet quality standards through voting and agreement processes.
- **Dynamic Workflows**: Route tasks dynamically to specialized agents based on the requirements.
- **Built for Scalability**: Handles multiple LLMs seamlessly, enabling use cases from simple aggregation to complex branching.
- **Integration Ready**: Designed to integrate with LangChain, Hugging Face, and other LLM ecosystems.
- **Developer-Friendly API**: Simplifies building and extending multi-agent systems.

## Features

- **Multi-Agent Collaboration**: Coordinate multiple LLMs to produce high-quality outputs.
- **Consensus and Voting**: Automate decision-making with built-in voting and consensus mechanisms.
- **Dynamic Routing**: Assign tasks to specific LLMs or workflows dynamically.
- **Aggregation**: Merge and deduplicate outputs from multiple agents.
- **Branching and Parallelism**: Execute parallel workflows and consolidate results.
- **Semantic Similarity and Validation**: Use state-of-the-art embeddings for validation and paraphrase detection.

## Installation

LangSwarm is available on PyPI. Install it with pip:

```bash
pip install langswarm
```

## Getting Started

```python
# Example: Consensus Workflow with LangSwarm

from langswarm import LLMConsensus, LLMVoting

# Mock LLM agents
class AgentA:
    def evaluate(self, query):
        return f"AgentA thinks the answer is: Paris"

class AgentB:
    def evaluate(self, query):
        return f"AgentB thinks the answer is: Paris"

class AgentC:
    def evaluate(self, query):
        return f"AgentC thinks the answer is: London"

# Define a consensus system
agents = [AgentA(), AgentB(), AgentC()]
swarm = LLMConsensus(query="What is the capital of France?", clients=agents)

# Run the consensus process
result = swarm.run()
print("Consensus Result:", result[0])  # Output: Consensus Result: Paris
```

## Use Cases

- **Content Validation**: Ensure outputs comply with predefined standards and requirements.
- **Research and Summarization**: Aggregate perspectives from multiple LLMs to produce well-rounded summaries.
- **Collaborative AI Systems**: Build systems where LLMs critique and improve each other's outputs.
- **Decision Making**: Leverage voting and consensus to make robust decisions from diverse agent opinions.
- **Routing and Workflow Automation**: Dynamically route tasks to appropriate workflows for better results.

## Advanced Features

- **Dynamic Thresholding**: Adjust similarity thresholds based on global averages for enhanced flexibility.
- **Semantic Validation**: Use cosine similarity to validate outputs against requirements.
- **Paraphrase Detection**: Identify and group semantically similar responses to reduce redundancy.
- **Extensibility**: Easily add custom workflows and integrate new agents.

## Contributing

LangSwarm is an open-source project, and we welcome contributions! To contribute:

1. Fork the repository.
2. Create a feature branch: <code>git checkout -b feature-name</code>.
3. Commit your changes: <code>git commit -m "Add feature"</code>.
4. Push your branch: <code>git push origin feature-name</code>.
5. Open a pull request.

## License

LangSwarm is released under the MIT License. See LICENSE for details.

## Acknowledgments

- **LangChain**: For inspiring seamless LLM integrations.
- **OpenAI**: For advancing the LLM ecosystem.

## Stay Connected

- **Issues**: Found a bug or need a feature? Open an issue!
- **Discussions**: Join the conversation and share your ideas.
