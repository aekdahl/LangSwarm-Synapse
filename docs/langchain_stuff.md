### **Using LangSwarm with LangChain**

LangSwarm seamlessly integrates with LangChain, enabling developers to combine the strengths of LangSwarm's multi-agent orchestration with LangChain's tools, memory, and pipelines. This documentation provides examples of how LangSwarm components can be used in LangChain workflows.

---

### **1. Tool Integration**

LangSwarm modules like `LLMConsensus` can be wrapped as LangChain-compatible `Tool` objects, allowing easy inclusion in workflows.

#### Example: LangSwarm Consensus Tool
```python
from langchain.tools import Tool
from langswarm.consensus import LLMConsensus

class LangSwarmConsensusTool(Tool):
    def __init__(self, agents, **kwargs):
        self.consensus = LLMConsensus(clients=agents, **kwargs)
        super().__init__(
            name="LangSwarm Consensus",
            func=self.run,
            description="A tool to reach consensus among multiple agents for a given query."
        )

    def run(self, query):
        self.consensus.query = query
        return self.consensus.run()

# Usage
agents = [...]  # Define your LLM agents
consensus_tool = LangSwarmConsensusTool(agents=agents)
response = consensus_tool.run("What is the capital of France?")
print("Consensus Result:", response)
```

- **Use Case:** Quickly integrate LangSwarm modules into LangChain workflows as reusable tools.
- **Benefit:** Simplifies multi-agent consensus workflows.

---

### **2. Memory Integration**

Enhance LangSwarm agents with LangChain’s memory systems, such as `ConversationBufferMemory`, for context-aware interactions.

#### Example: Memory-Enabled LangSwarm LLM
```python
from langchain.memory import ConversationBufferMemory
from langswarm.llm import LLM

class LangSwarmMemoryLLM(LLM):
    def __init__(self, memory=None, **kwargs):
        super().__init__(**kwargs)
        self.memory = memory or ConversationBufferMemory()

    def chat(self, q=None, json=False, reset=False, erase_query=False, remove_linebreaks=False):
        if reset:
            self.reset()

        context = self.memory.load_memory_variables({})
        extended_query = f"{context.get('history', '')}\n{q}" if context else q
        response = super().chat(q=extended_query, erase_query=erase_query, remove_linebreaks=remove_linebreaks)
        self.memory.save_context({"input": q}, {"output": response})
        return response

# Usage
memory_llm = LangSwarmMemoryLLM(memory=ConversationBufferMemory())
print(memory_llm.chat("What is the capital of France?"))
print(memory_llm.chat("And what is its population?"))
```

- **Use Case:** Maintain context across multiple queries.
- **Benefit:** Enables context-aware workflows for complex conversational tasks.

---

### **3. Pipeline Integration**

LangSwarm modules can be used as steps in LangChain pipelines, combining preprocessing, multi-agent orchestration, and postprocessing.

#### Example: LangChain Pipeline with LangSwarm
```python
from langchain.chains import SequentialChain
from langchain.prompts import PromptTemplate
from langswarm.consensus import LLMConsensus

# Define LangSwarm Consensus Module
class ConsensusChain:
    def __init__(self, agents, **kwargs):
        self.consensus = LLMConsensus(clients=agents, **kwargs)

    def run(self, input_text):
        self.consensus.query = input_text
        return self.consensus.run()

# Define pipeline
preprocessing_prompt = PromptTemplate(input_variables=["input"], template="Summarize: {input}")
postprocessing_prompt = PromptTemplate(input_variables=["summary"], template="Make bullet points: {summary}")
agents = [...]  # Define your LLM agents
consensus_chain = ConsensusChain(agents=agents)

pipeline = SequentialChain(
    chains=[preprocessing_prompt, consensus_chain.run, postprocessing_prompt],
    input_variables=["input"],
    output_variables=["output"],
)

# Usage
input_text = "LangSwarm is a Python package for orchestrating multiple LLMs."
output = pipeline.run({"input": input_text})
print("Pipeline Result:", output)
```

- **Use Case:** Integrate LangSwarm consensus into preprocessing and postprocessing workflows.
- **Benefit:** Enables complex, end-to-end pipelines for text processing.

---

### **4. Dynamic Routing**

LangSwarm’s `LLMRouting` dynamically routes tasks to appropriate workflows, such as regular queries, branching, or consensus-based decision-making.

#### Example: Dynamic Routing
```python
from langswarm.routing import LLMRouting
from langswarm.llm import LLM

# Define routing
routing = LLMRouting(
    route=0,  # Example: Route 0 for regular processing
    bots={"main_bot": LLM(name="MainBot")},
    main_bot=LLM(name="MainBot"),
    query="What is the capital of France?",
)

# Usage
response = routing.run()
print("Routing Result:", response)
```

- **Use Case:** Dynamically adapt workflows based on task type.
- **Benefit:** Flexibility to handle diverse tasks within a single framework.

---

### Summary

LangSwarm’s integration with LangChain enhances workflows by:
1. Providing LangSwarm modules as LangChain tools for easy reuse.
2. Leveraging LangChain’s memory systems for context-aware interactions.
3. Combining LangSwarm modules with LangChain pipelines for complex workflows.
4. Enabling dynamic routing for flexible task management.

This integration empowers developers to build powerful and adaptable multi-agent systems while leveraging the best features of both LangSwarm and LangChain.

---

Why Chains are Useful
Deeper Integration: Chains enable LangSwarm workflows to fit seamlessly into LangChain pipelines.
Customization: Users can combine LangSwarm classes with LangChain tools, memory, and agents in complex workflows.
Reusability: Chains are reusable across multiple pipelines, reducing redundant setup.
This design ensures that LangSwarm integrates fully with LangChain, offering both modular tools and customizable chains.
