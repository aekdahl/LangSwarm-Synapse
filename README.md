# LangSwarm

LangSwarm is a Python package for orchestrating **multiple Large Language Models (LLMs)** to work collaboratively. Use it for consensus-building, voting, reviewing, and refining outputs among LLMs.

## Features

- **Multi-Agent Collaboration**: Aggregate results from multiple LLMs for better decision-making.
- **Consensus and Voting**: Let LLMs vote and agree on the best results.
- **Feedback Loops**: Collect and integrate feedback for iterative refinement.
- **Flexible Workflows**: Define custom tasks and combine them with multi-agent orchestration.

## Installation

LangSwarm is available on PyPI. Install it using pip:

```bash
pip install langswarm
```

## Getting Started

```python
# Define a Collaborative Swarm

from langswarm import LLMConsensus

# Example LLM agents
class AgentA:
    def evaluate(self, query):
        return f"AgentA thinks the answer is: Paris"

class AgentB:
    def evaluate(self, query):
        return f"AgentB thinks the answer is: Paris"

class AgentC:
    def evaluate(self, query):
        return f"AgentC thinks the answer is: London"

# Create a consensus system with agents
agents = [AgentA(), AgentB(), AgentC()]
swarm = LLMConsensus(agents)

# Run a query through the swarm
query = "What is the capital of France?"
result = swarm.run(query)
print(result)

# Output:
Consensus Result: Paris
```

## Use Cases
- **Content Moderation**: Use multiple LLMs to review and refine content collaboratively.
- **Research and Summarization**: Enable multi-agent systems to critique, summarize, and refine research findings.
- **Decision Systems**: Build workflows that aggregate diverse perspectives to make informed decisions.

## Contributing
LangSwarm is open source, and we welcome contributions! To get started:

1. Fork the repository.
2. Create a feature branch: <code>git checkout -b feature-name</code>.
3. Commit your changes: <code>git commit -m "Add feature"</code>.
4. Push to your branch: <code>git push origin feature-name</code>.
5. Open a pull request.

## License
LangSwarm is released under the MIT License. See LICENSE for details.

## Acknowledgments
- LangChain
- OpenAI

## Stay Connected
- **Issues**: Report bugs or request features in the issue tracker.
- **Discussions**: Join the conversation in the discussions tab.

