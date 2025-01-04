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

### Why Use LangSwarm-Synapse Workflows?

1. **Flexibility**: Choose workflows based on the specific needs of your application.
2. **Scalability**: Handle multiple agents and complex queries efficiently.
3. **Customizability**: Fine-tune thresholds, routing logic, and aggregation methods.
4. **Collaboration**: Combine the strengths of multiple agents to achieve better results.

## Tools and Chains: Extending LangChain with LangSwarm Workflows

LangSwarm-Synapse introduces **tools** and **chains** that seamlessly integrate into LangChain workflows. By subclassing LangChain’s core abstractions, these components enable advanced multi-agent workflows like consensus-building, voting, and aggregation within native LangChain pipelines.

### Tools: Modular Workflow Components for LangChain

LangSwarm tools provide single-purpose functionality, such as consensus-building, that can be integrated into LangChain workflows as part of a broader pipeline.

#### Example: Using a Tool in a LangChain Workflow

```python
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from synapse.tools.consensus_tool import LangSwarmConsensusTool

# Step 1: Create a LangChain LLMChain to preprocess the query
prompt = PromptTemplate(
    input_variables=["topic"],
    template="What are the main benefits of {topic}?",
)
llm_chain = LLMChain(prompt=prompt, llm=llm)

# Step 2: Initialize the LangSwarm consensus tool
agents = [agent1, agent2, agent3]
consensus_tool = LangSwarmConsensusTool(agents=agents)

# Step 3: Run the pipeline
query = "renewable energy"
preprocessed_query = llm_chain.run(topic=query)  # Generates a refined query
result = consensus_tool.run(preprocessed_query)  # Agents generate responses and agree on a consensus

print(result)  # Unified response from agents
```

**Explanation of `.run`:**
- **LLMChain**: Generates a refined query using the input topic and a prompt.
- **Consensus Tool**: Processes the refined query:
  - Each agent generates a response.
  - Responses are grouped into clusters based on similarity.
  - The best response is selected as the consensus result.

### Chains: Predefined Pipelines for LangChain

LangSwarm chains combine multiple steps, such as querying agents and consolidating their outputs, into reusable LangChain pipelines.

#### Example: Using a Chain in a LangChain Workflow

```python
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain, SimpleSequentialChain
from synapse.chains.consensus_chain import ConsensusChain

# Step 1: Create a LangChain LLMChain for query preparation
prompt = PromptTemplate(
    input_variables=["topic"],
    template="Explain the key advantages of {topic}.",
)
llm_chain = LLMChain(prompt=prompt, llm=llm)

# Step 2: Initialize the LangSwarm consensus chain
agents = [agent1, agent2, agent3]
consensus_chain = ConsensusChain(agents=agents)

# Step 3: Combine them into a SequentialChain
pipeline = SimpleSequentialChain(chains=[llm_chain, consensus_chain])

# Step 4: Run the pipeline
query = "solar energy"
result = pipeline.run({"topic": query})

print(result["consensus_result"])  # Outputs the unified response
```

**Explanation of `.run`:**
- **LLMChain**: Generates a query based on the input topic using a prompt.
- **Consensus Chain**: Processes the query:
  - Agents generate responses independently.
  - Responses are grouped into clusters by similarity.
  - A unified result is derived from the best cluster.

### Key Benefits of Tools and Chains

1. **Seamless Integration**: Tools and chains subclass LangChain’s abstractions, fitting naturally into pipelines.
2. **Modularity**: Use tools and chains as standalone components or combine them into complex workflows.
3. **Multi-Agent Collaboration**: Enable advanced workflows like consensus-building, voting, and aggregation with minimal effort.

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
