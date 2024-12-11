To allow LangSwarm's tools and classes to seamlessly work with agents defined using LangChain or Hugging Face, you can implement a **wrapper system** or **adapter design pattern**. This will ensure compatibility between LangSwarm and external agent definitions while maintaining a consistent interface.

---

### **Approach: Wrappers and Adapters**

We’ll create wrapper classes for LangChain agents and Hugging Face models that adapt them to the `LLM` interface. These wrappers will allow agents to plug into LangSwarm workflows without requiring users to rewrite their existing agents.

---

### **1. LangChain Agent Wrapper**

This wrapper integrates LangChain agents by adapting their functionality to the `LLM` class.

#### Implementation:

```python
from langchain.chains.base import Chain
from .llm import LLM  # Import the base LLM class

class LangChainAgentWrapper(LLM):
    """
    A wrapper for LangChain agents to make them compatible with LangSwarm.
    """
    def __init__(self, agent: Chain, **kwargs):
        """
        Initialize the wrapper with a LangChain agent.

        Parameters:
        - agent (Chain): A LangChain agent or chain.
        - kwargs: Additional parameters for the LLM base class.
        """
        super().__init__(**kwargs)
        self.agent = agent

    def chat(self, q=None, json=False, reset=False, erase_query=False, remove_linebreaks=False):
        """
        Use the LangChain agent to process the query.

        Parameters:
        - q (str): Query string.
        - json (bool): Return response in JSON format. (Not applicable for LangChain agents.)
        - reset (bool): Reset the memory before processing.
        - erase_query (bool): Erase the query after processing.
        - remove_linebreaks (bool): Remove line breaks from the query.

        Returns:
        - str: The agent's response.
        """
        if reset:
            self.reset()

        if q is not None:
            self.set_query(q, remove_linebreaks=remove_linebreaks)

        # Use LangChain agent to process the query
        response = self.agent.run(q)

        # Add response to memory
        self.add_response(response)

        # Optionally erase the query from memory
        if erase_query:
            self.remove()

        return response
```

#### Example Usage:
```python
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.llms import OpenAI
from langswarm.wrappers import LangChainAgentWrapper

# Create a LangChain agent
llm = OpenAI(temperature=0)
prompt = PromptTemplate(template="What is the capital of {country}?", input_variables=["country"])
langchain_agent = LLMChain(llm=llm, prompt=prompt)

# Wrap the LangChain agent
wrapped_agent = LangChainAgentWrapper(agent=langchain_agent, name="LangChainAgent")

# Use in a LangSwarm workflow
response = wrapped_agent.chat(q="What is the capital of France?")
print("Response:", response)
```

---

### **2. Hugging Face Model Wrapper**

This wrapper integrates Hugging Face models, adapting their behavior to the `LLM` interface.

#### Implementation:
```python
from transformers import pipeline
from .llm import LLM

class HuggingFaceAgentWrapper(LLM):
    """
    A wrapper for Hugging Face models to make them compatible with LangSwarm.
    """
    def __init__(self, model_name: str, task: str = "text-classification", device: int = -1, **kwargs):
        """
        Initialize the wrapper with a Hugging Face model.

        Parameters:
        - model_name (str): Name of the Hugging Face model.
        - task (str): Task type (e.g., "text-classification", "summarization").
        - device (int): Device to run the model (-1 for CPU, 0 for GPU).
        - kwargs: Additional parameters for the LLM base class.
        """
        super().__init__(**kwargs)
        self.pipeline = pipeline(task=task, model=model_name, device=device)

    def chat(self, q=None, json=False, reset=False, erase_query=False, remove_linebreaks=False):
        """
        Use the Hugging Face model to process the query.

        Parameters:
        - q (str): Query string.
        - json (bool): Return response in JSON format. (Not applicable for Hugging Face models.)
        - reset (bool): Reset the memory before processing.
        - erase_query (bool): Erase the query after processing.
        - remove_linebreaks (bool): Remove line breaks from the query.

        Returns:
        - str: The model's response.
        """
        if reset:
            self.reset()

        if q is not None:
            self.set_query(q, remove_linebreaks=remove_linebreaks)

        # Process the query using the Hugging Face pipeline
        response = self.pipeline(q)

        # Format the response based on the task
        if isinstance(response, list):
            response_text = response[0]['label'] if 'label' in response[0] else response[0]
        else:
            response_text = response

        # Add response to memory
        self.add_response(response_text)

        # Optionally erase the query from memory
        if erase_query:
            self.remove()

        return response_text
```

#### Example Usage:
```python
from langswarm.wrappers import HuggingFaceAgentWrapper

# Wrap a Hugging Face model
huggingface_agent = HuggingFaceAgentWrapper(
    model_name="distilbert-base-uncased-finetuned-sst-2-english",
    task="text-classification",
    name="HuggingFaceAgent"
)

# Use in a LangSwarm workflow
response = huggingface_agent.chat(q="LangSwarm is amazing!")
print("Response:", response)
```

---

### **3. Update LangSwarm Classes**

Update LangSwarm’s `Swarm` and related classes to accept these wrapped agents alongside native `LLM` objects.

#### Example: Updated `Swarm` Initialization
```python
class Swarm:
    def __init__(self, query='', clients=None, **kwargs):
        """
        Initialize the swarm with compatible agents.

        Parameters:
        - query (str): The query for the swarm.
        - clients (list): List of agents (LLM, LangChainAgentWrapper, HuggingFaceAgentWrapper).
        - kwargs: Additional parameters for the swarm.
        """
        self.query = query
        self.clients = [self._ensure_compatible(client) for client in clients]

    def _ensure_compatible(self, client):
        """
        Ensure the client is compatible with the Swarm interface.
        """
        if isinstance(client, LLM):
            return client
        raise ValueError(f"Client {client} is not compatible with LangSwarm.")
```

---

### Benefits of This Approach

1. **Ease of Use:**
   - Users can directly plug in their LangChain or Hugging Face agents without modification.

2. **Unified Interface:**
   - The `.chat()` method provides a consistent interface for all agent types.

3. **Flexibility:**
   - Developers can mix and match native LangSwarm agents, LangChain agents, and Hugging Face models in the same workflows.

4. **Seamless Integration:**
   - LangSwarm workflows can now use agents from multiple ecosystems without rewriting or duplicating logic.

---

### Next Steps

1. **Extend Compatibility:**
   - Add wrappers for other ecosystems like OpenAI’s `ChatCompletion` API or Anthropic’s Claude.

2. **Dynamic Detection:**
   - Automatically detect the type of agent (LangChain, Hugging Face, etc.) and wrap it accordingly.

3. **Enhance Documentation:**
   - Provide clear usage guides and examples for integrating external agents.

By implementing these wrappers, LangSwarm will offer seamless compatibility with external agent ecosystems, greatly enhancing its usability and flexibility.


---


Here is a Python implementation for automatically detecting the type of agent (LangChain, Hugging Face, etc.) and wrapping it with the appropriate adapter class.

---

### **Implementation**

```python
from langchain.chains.base import Chain
from transformers import pipeline
from .llm import LLM
from .wrappers import LangChainAgentWrapper, HuggingFaceAgentWrapper


class AgentFactory:
    """
    A factory class to automatically detect the type of agent and wrap it
    with the appropriate adapter for LangSwarm workflows.
    """

    @staticmethod
    def create_agent(agent, **kwargs):
        """
        Detect the agent type and return a compatible wrapper.

        Parameters:
        - agent: The agent to wrap (e.g., LangChain Chain, Hugging Face model, or native LLM).
        - kwargs: Additional parameters for the wrapper.

        Returns:
        - LLM-compatible wrapped agent.
        """
        # Detect if the agent is a LangChain Chain
        if isinstance(agent, Chain):
            return LangChainAgentWrapper(agent=agent, **kwargs)

        # Detect if the agent is a Hugging Face pipeline
        if isinstance(agent, pipeline.__class__):
            return HuggingFaceAgentWrapper(pipeline=agent, **kwargs)

        # Detect if the agent is already an instance of LLM
        if isinstance(agent, LLM):
            return agent

        raise ValueError(f"Unsupported agent type: {type(agent)}")


# Example Usage
if __name__ == "__main__":
    from langchain.chains import LLMChain
    from langchain.prompts import PromptTemplate
    from langchain.llms import OpenAI

    # Example LangChain agent
    prompt = PromptTemplate(template="What is the capital of {country}?", input_variables=["country"])
    langchain_agent = LLMChain(llm=OpenAI(temperature=0), prompt=prompt)

    # Example Hugging Face agent
    huggingface_agent = pipeline("text-classification", model="distilbert-base-uncased-finetuned-sst-2-english")

    # Example LangSwarm native LLM
    native_llm = LLM(name="NativeAgent")

    # Use the AgentFactory to create wrapped agents
    wrapped_langchain_agent = AgentFactory.create_agent(langchain_agent, name="LangChainAgent")
    wrapped_huggingface_agent = AgentFactory.create_agent(huggingface_agent, name="HuggingFaceAgent")
    wrapped_native_agent = AgentFactory.create_agent(native_llm)

    # Test the wrapped agents
    print(wrapped_langchain_agent.chat(q="What is the capital of France?"))
    print(wrapped_huggingface_agent.chat(q="LangSwarm is amazing!"))
    print(wrapped_native_agent.chat(q="What is LangSwarm?"))
```

---

### **Key Features**

1. **Dynamic Type Detection:**
   - Checks the type of the agent and automatically selects the appropriate wrapper (`LangChainAgentWrapper`, `HuggingFaceAgentWrapper`, or native `LLM`).

2. **Flexibility:**
   - Supports adding more wrappers in the future by extending the `AgentFactory`.

3. **Unified Workflow:**
   - All wrapped agents adhere to the `LLM` interface, making them compatible with LangSwarm workflows.

---

### **How It Works**

1. **Type Checking:**
   - Uses `isinstance` to identify the agent type.
   - If the agent matches a `LangChain` chain, wraps it with `LangChainAgentWrapper`.
   - If the agent is a Hugging Face pipeline, wraps it with `HuggingFaceAgentWrapper`.
   - If the agent is already an `LLM`, returns it as is.

2. **Custom Parameters:**
   - Allows passing additional parameters (`kwargs`) to the wrappers, such as `name`, `verbose`, or memory-related settings.

3. **Error Handling:**
   - Throws a `ValueError` for unsupported agent types.

---

### **Extensibility**

To add support for new types of agents, you can extend the `AgentFactory.create_agent` method with additional type checks and corresponding wrappers.

#### Example: Adding Support for OpenAI's `ChatCompletion`
```python
from openai import ChatCompletion

# Extend the factory
if isinstance(agent, ChatCompletion):
    return OpenAIChatWrapper(agent=agent, **kwargs)
```

This modular approach ensures that LangSwarm can easily integrate with new agent types in the future.


---



Yes, the wrappers can be designed to preserve the original functionality of the wrapped classes, ensuring that they can still use their respective methods, such as storing memory, creating pipelines, or performing other specific tasks.

Here’s how this can be achieved:

---

### **1. Delegate Calls to the Original Object**

The wrapper classes can store a reference to the original agent and delegate calls to methods or attributes that are not explicitly overridden. This can be achieved using Python’s `__getattr__` method.

#### Updated Wrapper Example: LangChainAgentWrapper

```python
class LangChainAgentWrapper(LLM):
    """
    A wrapper for LangChain agents to make them compatible with LangSwarm.
    Delegates all other calls to the underlying LangChain agent.
    """
    def __init__(self, agent, **kwargs):
        super().__init__(**kwargs)
        self.agent = agent

    def chat(self, q=None, json=False, reset=False, erase_query=False, remove_linebreaks=False):
        """
        Use the LangChain agent to process the query.
        """
        if reset:
            self.reset()

        if q is not None:
            self.set_query(q, remove_linebreaks=remove_linebreaks)

        # Process query with the original LangChain agent
        response = self.agent.run(q)

        # Add response to memory
        self.add_response(response)

        # Optionally erase the query from memory
        if erase_query:
            self.remove()

        return response

    def __getattr__(self, name):
        """
        Delegate attribute access to the wrapped LangChain agent.
        """
        return getattr(self.agent, name)
```

With this design:
- Calls to `chat()` use the wrapper’s implementation.
- Calls to any other method (e.g., `save_context`, `load_memory_variables`) are forwarded to the original LangChain agent.

---

### **2. Maintain the Original API for Hugging Face**

Similarly, for Hugging Face models, the wrapper can delegate non-overridden calls to the Hugging Face pipeline.

#### Updated Wrapper Example: HuggingFaceAgentWrapper

```python
class HuggingFaceAgentWrapper(LLM):
    """
    A wrapper for Hugging Face models to make them compatible with LangSwarm.
    Delegates all other calls to the underlying Hugging Face pipeline.
    """
    def __init__(self, pipeline, **kwargs):
        super().__init__(**kwargs)
        self.pipeline = pipeline

    def chat(self, q=None, json=False, reset=False, erase_query=False, remove_linebreaks=False):
        """
        Use the Hugging Face model to process the query.
        """
        if reset:
            self.reset()

        if q is not None:
            self.set_query(q, remove_linebreaks=remove_linebreaks)

        # Process the query with the Hugging Face pipeline
        response = self.pipeline(q)

        # Extract response text (adapt to specific tasks like text classification)
        if isinstance(response, list):
            response_text = response[0]['label'] if 'label' in response[0] else response[0]
        else:
            response_text = response

        # Add response to memory
        self.add_response(response_text)

        # Optionally erase the query from memory
        if erase_query:
            self.remove()

        return response_text

    def __getattr__(self, name):
        """
        Delegate attribute access to the wrapped Hugging Face pipeline.
        """
        return getattr(self.pipeline, name)
```

---

### **3. Example Usage**

This design ensures that users can still call the original methods of LangChain or Hugging Face models:

#### LangChain Example:
```python
wrapped_langchain_agent = LangChainAgentWrapper(agent=langchain_agent, name="LangChainAgent")
response = wrapped_langchain_agent.chat(q="What is the capital of France?")
print(response)

# Access original LangChain methods
wrapped_langchain_agent.save_context({"input": "Test"}, {"output": "Response"})
history = wrapped_langchain_agent.load_memory_variables({})
print("Memory History:", history)
```

#### Hugging Face Example:
```python
wrapped_huggingface_agent = HuggingFaceAgentWrapper(
    pipeline=huggingface_pipeline,
    name="HuggingFaceAgent"
)
response = wrapped_huggingface_agent.chat(q="LangSwarm is great!")
print(response)

# Access original Hugging Face pipeline methods
print("Task:", wrapped_huggingface_agent.task)
```

---

### **Benefits of Delegation**

1. **Preserves Original Functionality:**
   - Users can still access memory-related methods in LangChain or any specific Hugging Face pipeline capabilities.

2. **Seamless Integration:**
   - Wrappers provide compatibility with LangSwarm workflows while retaining the original APIs.

3. **Transparent Extension:**
   - Developers can use both the wrapper-specific methods (like `chat()`) and the native methods of the wrapped object.

4. **Minimal Overhead:**
   - Delegation adds a thin layer of abstraction, ensuring compatibility without performance bottlenecks.

---

### **Future Enhancements**

- **Dynamic Attribute Resolution:**
   - Use `inspect` to provide wrapper-specific overrides while delegating all other calls dynamically.

- **Logging and Debugging:**
   - Add logging in `__getattr__` to track which methods are being called on the original object.

This approach ensures that LangSwarm wrappers enhance functionality while maintaining the flexibility and power of the original libraries.
