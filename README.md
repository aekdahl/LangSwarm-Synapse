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

# Wrap your LangChain agents using LangSwarm's AgentWrapper
agent1 = AgentWrapper(name="langchain_agent", agent=llm_chain)
agent2 = AgentWrapper(name="langchain_agent2", agent=llm_chain2)

agents = [agent1, agent2]  # List of initialized LLM agents
query = "What are the benefits of renewable energy?"

# Use the consensus workflow
result = Templates.consensus(agents, query)
print(result)
```

### Use the AgentRegistry

Here’s how you can use the agent registry to select agents to use:

```python
from langswarm.core.registry.agents import AgentRegistry
from langswarm.synapse.interface import Templates

# Pick the agents you need from the LangSwarm's AgentRegistry
agents = AgentRegistry.get_agents_by_names(["agent1", "agent3", "agent2"])
query = "What are the benefits of renewable energy?"

# Use the consensus workflow
result = Templates.consensus(agents, query)
print(result)
```

## Workflows

LangSwarm-Synapse provides powerful workflows for multi-agent systems, enabling agents to collaborate and make decisions efficiently. Below are the details of each workflow and the methodology used:

### 1. **Consensus**
**Purpose**: To reach agreement among multiple agents on a given query by identifying a response that represents the most common or best-aligned viewpoint.

**How it Works**:
1. Each agent generates a response to the query independently.
2. Responses are encoded into embeddings using a language model (e.g., SentenceTransformer).
3. The similarity between all responses is calculated using cosine similarity.
4. Responses are grouped into clusters of similar responses (paraphrase groups) based on a similarity threshold.
5. The cluster with the highest similarity score is selected as the consensus group.
6. Within the consensus group, the response most similar to all others (highest average similarity) is chosen as the final consensus.

**Example**:
```python
from synapse.interface.templates import Templates

agents = [agent1, agent2, agent3]  # List of initialized LLM agents
query = "What are the benefits of renewable energy?"

# Use the consensus workflow
result = Templates.consensus(agents, query)
print(result)
```

---

### 2. **Voting**
**Purpose**: To enable collaborative decision-making by allowing agents to vote on their preferred response.

**How it Works**:
1. Agents generate responses to the query.
2. Each response is treated as a "vote."
3. The votes are tallied, and the response with the most votes is selected as the outcome.
4. Additional metadata, such as the total number of votes and group size, is returned.

**Use Case**: Ideal for scenarios where explicit preferences or majority opinion is required.

**Example**:
```python
from synapse.interface.templates import Templates

agents = [agent1, agent2, agent3]
query = "What is the most important principle of democracy?"

# Use the voting workflow
result, group_size, responses = Templates.voting(agents, query)
print(f"Result: {result}, Group Size: {group_size}")
```

---

### 3. **Branching**
**Purpose**: To explore diverse perspectives by generating multiple responses from agents without attempting to unify them.

**How it Works**:
1. Each agent independently generates a response to the query.
2. All responses are returned as a list, allowing users to examine varied viewpoints or solutions.

**Use Case**: Best for brainstorming, creative writing, or scenarios requiring diversity in responses.

**Example**:
```python
from synapse.interface.templates import Templates

agents = [agent1, agent2, agent3]
query = "Suggest some innovative ideas for renewable energy."

# Use the branching workflow
responses = Templates.branching(agents, query)
print(f"Responses: {responses}")
```

---

### 4. **Aggregation**
**Purpose**: To merge and unify responses from multiple agents into a single coherent output.

**How it Works**:
1. Each agent generates a response to the query.
2. The responses are aggregated into a single output by deduplicating and consolidating overlapping ideas.
3. A helper bot (if configured) can assist in combining the responses meaningfully.

**Use Case**: Useful for creating summaries, extracting common themes, or consolidating information.

**Example**:
```python
from synapse.interface.templates import Templates

agents = [agent1, agent2, agent3]
query = "Summarize the current advancements in AI."

# Use the aggregation workflow
aggregated_result = Templates.aggregation(agents, query)
print(f"Aggregated Result: {aggregated_result}")
```

---

### 5. **Routing**
**Purpose**: To dynamically assign tasks to the most appropriate workflows or agents based on predefined logic.

**How it Works**:
1. A routing strategy is defined (e.g., consensus, branching, prompt reformulation).
2. The input query is analyzed, and the appropriate workflow or agent is selected dynamically.
3. The task is executed based on the selected strategy.

**Use Case**: Ideal for complex tasks where different parts of a query require different workflows or specialized agents.

**Example**:
```python
from synapse.tools.routing_tool import LangSwarmRoutingTool

agents = {"bot1": agent1, "bot2": agent2}
main_bot = agent1  # Define the main bot for routing decisions
query = "Explain the differences between AI and ML."
route = 2  # Use the consensus route

# Use the routing workflow
routing_tool = LangSwarmRoutingTool(route=route, bots=agents, main_bot=main_bot, query=query)
result = routing_tool.run()
print(f"Routed Result: {result}")
```

---

### Why Use LangSwarm-Synapse Workflows?

1. **Flexibility**: Choose workflows based on the specific needs of your application.
2. **Scalability**: Handle multiple agents and complex queries efficiently.
3. **Customizability**: Fine-tune thresholds, routing logic, and aggregation methods.
4. **Collaboration**: Combine the strengths of multiple agents to achieve better results.

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
