---
title: LangSwarmMemoryLLM
sidebar_position: 70
---

# LangSwarmMemoryLLM
---

## **Overview**
The `LangSwarmMemoryLLM` class extends the base `LLM` class by integrating LangChain-compatible memory, specifically `ConversationBufferMemory`. This allows the model to retain conversational context across queries, enabling more coherent and context-aware interactions.

---

## **Purpose**
The primary purpose of the `LangSwarmMemoryLLM` class is to:
- **Enhance Conversational Context**: Maintain and utilize a history of queries and responses for multi-turn conversations.
- **Integrate Memory Management**: Seamlessly manage memory with LangChain's `ConversationBufferMemory`.
- **Dynamic Query Processing**: Allow dynamic query handling with options for resetting, modifying, or erasing memory.

---

## **Class Definition**

```python
from langchain.memory import ConversationBufferMemory
from langswarm.llm import LLM

class LangSwarmMemoryLLM(LLM):
    """
    A LangSwarm LLM with LangChain-compatible memory.
    """
    def __init__(self, memory=None, **kwargs):
        """
        Initialize the LLM with memory.

        Parameters:
        - memory (ConversationBufferMemory, optional): LangChain memory object to manage conversational history.
        - kwargs: Additional parameters for the LLM class.
        """
        super().__init__(**kwargs)
        self.memory = memory or ConversationBufferMemory()

    def chat(self, q=None, json=False, reset=False, erase_query=False, remove_linebreaks=False):
        """
        Process a query and store it in memory.

        Parameters:
        - q (str, optional): The input query string.
        - json (bool, optional): Placeholder for future use (not utilized in this implementation).
        - reset (bool, optional): If True, resets the memory before processing the query.
        - erase_query (bool, optional): If True, excludes the query from being stored in memory.
        - remove_linebreaks (bool, optional): If True, removes line breaks from the query string.

        Returns:
        - str: The model's response to the input query.
        """
        if reset:
            self.reset()

        if q is not None:
            self.set_query(q, remove_linebreaks=remove_linebreaks)

        # Retrieve memory context and append it to the query
        context = self.memory.load_memory_variables({})
        extended_query = f"{context['history']}\n{q}" if context else q

        # Generate response
        response = super().chat(q=extended_query, erase_query=erase_query, remove_linebreaks=remove_linebreaks)

        # Update memory with query and response
        self.memory.save_context({"input": q}, {"output": response})
        return response
```

---

## **Key Features**

1. **Memory Integration**:
   - Utilizes `ConversationBufferMemory` to store and retrieve conversational history.
   - Automatically updates memory with each query-response pair.

2. **Dynamic Memory Management**:
   - Options to reset or modify memory during interactions.
   - Flexible query handling, including removing line breaks or excluding queries from memory.

3. **Extended Context**:
   - Appends the stored conversation history to new queries, enhancing context awareness.

---

## **Parameters**

1. **Initialization Parameters**:
   - `memory (ConversationBufferMemory, optional)`: An optional memory object to manage conversational context. If not provided, a new `ConversationBufferMemory` instance is created.
   - `kwargs`: Additional parameters inherited from the parent `LLM` class.

2. **`chat` Method Parameters**:
   - `q (str, optional)`: The input query to process.
   - `json (bool, optional)`: Placeholder parameter for future use.
   - `reset (bool, optional)`: If `True`, clears the memory before processing the query.
   - `erase_query (bool, optional)`: If `True`, excludes the query from being stored in memory.
   - `remove_linebreaks (bool, optional)`: If `True`, removes line breaks from the input query.

---

## **Usage**

1. **Basic Usage**:
   ```python
   from langchain.memory import ConversationBufferMemory
   from mymodule import LangSwarmMemoryLLM

   # Initialize LangSwarmMemoryLLM with memory
   memory_llm = LangSwarmMemoryLLM(memory=ConversationBufferMemory())

   # Chat with the model
   response1 = memory_llm.chat("What is the capital of France?")
   print("Response:", response1)  # Expected: "Paris"

   # Follow-up query using stored context
   response2 = memory_llm.chat("And what is its population?")
   print("Response:", response2)  # Builds on previous context.
   ```

2. **Resetting Memory**:
   ```python
   memory_llm.chat("Start a new conversation.", reset=True)
   ```

3. **Erasing Query from Memory**:
   ```python
   memory_llm.chat("Forget this query.", erase_query=True)
   ```

---

## **Customization**

1. **Custom Memory Object**:
   - Replace `ConversationBufferMemory` with a custom memory implementation compatible with LangChain's interface.
   ```python
   class CustomMemory(ConversationBufferMemory):
       # Implement additional functionality
       pass

   memory_llm = LangSwarmMemoryLLM(memory=CustomMemory())
   ```

2. **Enhanced Context Handling**:
   - Modify how historical context is appended to new queries by overriding the `chat` method.

3. **Persistent Memory**:
   - Extend `ConversationBufferMemory` to persist data in a database or file system.

---

## **Use Cases**

1. **Chatbots**:
   - Maintain coherent, multi-turn conversations with context awareness.

2. **Customer Support Systems**:
   - Retain user history for personalized responses.

3. **Task-Oriented Dialogues**:
   - Enable complex task flows that depend on prior exchanges.

---

## **Example Implementation**
```python
if __name__ == "__main__":
    from langchain.memory import ConversationBufferMemory

    # Initialize memory-enhanced LLM
    memory_llm = LangSwarmMemoryLLM(memory=ConversationBufferMemory())

    # Sample interaction
    print(memory_llm.chat("Who is the president of the United States?"))
    print(memory_llm.chat("What is their political party?"))
```

---

## **Potential Enhancements**
1. **Memory Limits**:
   - Add a mechanism to truncate memory when exceeding token limits.

2. **Searchable Memory**:
   - Integrate vector-based memory for semantic search capabilities.

3. **Memory Insights**:
   - Add methods to visualize or export stored memory for debugging or analysis.
