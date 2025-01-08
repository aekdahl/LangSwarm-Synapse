class ToolRegistry:
    def __init__(self):
        self.tools = {}

    def register_tool(self, tool: BaseTool):
        self.tools[tool.name] = tool

    def get_tool(self, tool_name: str):
        return self.tools.get(tool_name, None)

    def list_tools(self):
        return list(self.tools.keys())
