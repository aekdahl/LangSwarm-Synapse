class BaseWrapper:
    """
    Base class for wrapping agents, providing initialization and validation.
    """

    def __init__(self, name: str, agent: Any, **kwargs):
        self.name = name
        self.agent = agent
        self.kwargs = kwargs

    def _validate_agent(self):
        if not callable(self.agent) and not hasattr(self.agent, "run"):
            raise ValueError(f"Unsupported agent type: {type(self.agent)}")
