class BaseTool:
    def __init__(self, name, description, instruction):
        self.name = name
        self.description = description
        self.instruction = instruction

    def use(self, *args, **kwargs):
        """Override this method to define the tool's behavior."""
        raise NotImplementedError("This method should be implemented in a subclass.")

    def run(self, *args, **kwargs):
        """Redirects to the `use` method for compatibility with LangChain tools."""
        return self.use(*args, **kwargs)
