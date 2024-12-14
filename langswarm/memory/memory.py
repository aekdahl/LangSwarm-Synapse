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
        - memory (ConversationBufferMemory): LangChain memory object.
        - kwargs: Additional parameters for the LLM class.
        """
        super().__init__(**kwargs)
        self.memory = memory or ConversationBufferMemory()

    def chat(self, q=None, json=False, reset=False, erase_query=False, remove_linebreaks=False):
        """
        Process a query and store it in memory.

        Parameters:
        - q (str): Query string.
        - Other parameters inherited from LLM.

        Returns:
        - str: Model response.
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

# Example Usage
# if __name__ == "__main__":
#     memory_llm = LangSwarmMemoryLLM(memory=ConversationBufferMemory())
#     response = memory_llm.chat("What is the capital of France?")
#     print("Response:", response)
