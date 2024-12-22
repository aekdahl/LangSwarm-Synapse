try:
    from llama_index import GPTSimpleVectorIndex, Document
except ImportError:
    GPTSimpleVectorIndex = None
    Document = None

class BaseWrapper:
    """
    Base class for wrapping agents, providing initialization and validation.
    """

    def __init__(self, name: str, agent: Any, **kwargs):
        self.name = name
        self.agent = self._initialize_agent(agent, kwargs.get('documents', None))
        # self.agent = agent
        self.kwargs = kwargs

    def _initialize_agent(self, agent: Any, documents: Optional[list]) -> Any:
        """
        Initialize the wrapped agent, including LlamaIndex if applicable.

        Parameters:
        - agent: The agent to wrap.
        - documents: Optional documents for LlamaIndex initialization.

        Returns:
        - The initialized agent.
        """
        if isinstance(agent, str) and agent.lower() == "llamaindex":
            if GPTSimpleVectorIndex is None or Document is None:
                raise ImportError("LlamaIndex is not installed. Install it with 'pip install llama-index'.")
            if not documents:
                raise ValueError("Documents must be provided to initialize LlamaIndex.")
            doc_objects = [Document(text=doc) for doc in documents]
            return GPTSimpleVectorIndex(doc_objects)
        return agent

    def _validate_agent(self):
        if not callable(self.agent) and not hasattr(self.agent, "run"):
            raise ValueError(f"Unsupported agent type: {type(self.agent)}")
