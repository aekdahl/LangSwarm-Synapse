from .base import MemoryBaseClass
from langchain.memory import ConversationBufferMemory

class LangChainMemoryWrapper(MemoryBaseClass):
    """
    Wraps LangChain's native memory functionality.
    Adds support for cross-agent memory sharing and integration with LangSwarm's memory system.
    """

    def __init__(self, memory_instance=None):
        self.memory = memory_instance or ConversationBufferMemory()

    def add_message(self, role, content):
        if role == "user":
            self.memory.chat_memory.add_user_message(content)
        elif role == "assistant":
            self.memory.chat_memory.add_ai_message(content)

    def get_memory(self):
        return self.memory.chat_memory.messages

    def clear_memory(self):
        self.memory.clear()
