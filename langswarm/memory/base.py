from abc import ABC, abstractmethod

class MemoryBaseClass(ABC):
    """
    Abstract base class for memory systems.
    Defines a standard interface for memory management.
    """

    @abstractmethod
    def add_message(self, role, content):
        """Add a message to memory."""
        pass

    @abstractmethod
    def get_memory(self):
        """Retrieve stored messages."""
        pass

    @abstractmethod
    def clear_memory(self):
        """Clear all stored memory."""
        pass
