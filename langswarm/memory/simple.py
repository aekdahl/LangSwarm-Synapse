from .base import MemoryBaseClass

class SimpleMemory(MemoryBaseClass):
    """
    Basic memory system for single agents.
    """

    def __init__(self):
        self.memory = []

    def add_message(self, role, content):
        self.memory.append({"role": role, "content": content})

    def get_memory(self):
        return self.memory

    def clear_memory(self):
        self.memory = []


class SharedMemory(SimpleMemory):
    """
    Shared memory system for multi-agent workflows.
    Extends SimpleMemory to enable centralized state sharing.
    """

    _shared_state = []

    def __init__(self):
        super().__init__()
        self.memory = self._shared_state  # Reference shared state
