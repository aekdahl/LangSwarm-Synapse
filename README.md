# LangSwarm-Synapse

LangSwarm-Synapse is a framework designed for multi-agent LLM ecosystems. It enables seamless orchestration of AI agents through workflows such as consensus-building, voting, branching, and aggregation, making it an ideal choice for developers looking to enhance AI collaboration and decision-making.

## Features

- **Consensus**: Reach agreement among multiple LLMs for a given query.
- **Voting**: Facilitate collaborative decision-making by tallying responses.
- **Branching**: Generate diverse outputs from multiple agents.
- **Aggregation**: Merge and unify responses into a coherent output.
- **Routing**: Dynamically direct tasks to the most appropriate workflows or agents.

## Installation

```bash
pip install langswarm-synapse
```

## Quick Start

Here’s how you can use LangSwarm-Synapse to enable consensus among agents:

```python
from langswarm.core.factory.agents import AgentFactory
from langswarm.synapse.interface import Templates

# Set environment variables
os.environ['OPENAI_API_KEY'] = 'your-openai-api-key'

# Create a LangChain agent
agent1 = AgentFactory.create(name="agent1", agent_type="langchain-openai",model="gpt-4")

# Create a OpenAI agent
agent2 = AgentFactory.create(name="agent2", agent_type="openai",model="gpt-4")

agents = [agent1, agent2]  # List of initialized LLM agents
query = "What are the benefits of renewable energy?"

# Use the consensus workflow
result = Templates.consensus(agents, query)
print(result)
```

### Bring your own agents

Here’s how you can use LangSwarm-Synapse to enable consensus among your own agents:

```python
from langswarm.core.wrappers.generic import AgentWrapper
from langswarm.synapse.interface import Templates

# Set environment variables
os.environ['OPENAI_API_KEY'] = 'your-openai-api-key'

# Wrap your LangChain agents using LangSwarm's AgentWrapper
agent1 = AgentWrapper(name="langchain_agent", agent=llm_chain)
agent2 = AgentWrapper(name="langchain_agent2", agent=llm_chain2)

agents = [agent1, agent2]  # List of initialized LLM agents
query = "What are the benefits of renewable energy?"

# Use the consensus workflow
result = Templates.consensus(agents, query)
print(result)
```

## Workflows

### 1. Consensus
Enable agreement among agents using shared similarity measures and thresholds.

### 2. Voting
Aggregate responses and determine consensus through voting-based decision-making.

### 3. Branching
Generate diverse outputs from multiple agents to explore varied perspectives.

### 4. Aggregation
Merge responses into a single, deduplicated, and unified result.

### 5. Routing
Dynamically assign tasks to workflows or agents based on predefined logic.

## Development

### Requirements
- Python 3.8 or higher
- Dependencies specified in `requirements.txt`

### Install for Development

```bash
git clone https://github.com/aekdahl/langswarm-synapse.git
cd langswarm-synapse
pip install -e ".[dev]"
```

### Run Tests

```bash
pytest tests/
```

## Contributing

We welcome contributions! Please fork the repository, make your changes, and open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding with LangSwarm-Synapse!
