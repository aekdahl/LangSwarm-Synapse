from ..tools.base import BaseTool
from langswarm.memory import ChromaDBAdapter
from typing import List

class ToolRegistry:
    def __init__(self, collection_name="tools_registry", persist_directory=None):
        """
        Initialize the ToolRegistry with ChromaDBAdapter for scalable storage.
        
        :param collection_name: Name of the ChromaDB collection for tools.
        :param persist_directory: Directory for persisting data (optional).
        """
        self.db_adapter = ChromaDBAdapter(collection_name=collection_name, persist_directory=persist_directory)

    def register_tool(self, tool: BaseTool):
        """
        Register a tool in the ChromaDB collection.
        
        :param tool: BaseTool instance with attributes `name`, `description`, and optional `metadata`.
        """
        self.db_adapter.add_documents([{
            "key": tool.name,
            "text": tool.description,
            "metadata": tool.metadata or {}
        }])
        print(f"Tool '{tool.name}' registered successfully.")

    def get_tool(self, tool_name: str):
        """
        Retrieve a tool by its name.

        :param tool_name: Name of the tool to retrieve.
        :return: Tool details if found, otherwise None.
        """
        results = self.db_adapter.query(query=tool_name, filters={"key": tool_name}, top_k=1)
        return results[0] if results else None

    def list_tools(self) -> List[str]:
        """
        List all tool names in the registry.
        
        :return: List of tool names.
        """
        tools = self.db_adapter.query(query="", top_k=100)
        return [tool["key"] for tool in tools]

    def query_tools(self, query: str, filters=None, top_k=5):
        """
        Query tools based on a description or metadata filters.
        
        :param query: Query string to match tool descriptions.
        :param filters: Metadata filters (optional).
        :param top_k: Number of results to retrieve.
        :return: List of matching tools.
        """
        return self.db_adapter.query(query=query, filters=filters, top_k=top_k)

    def delete_tool(self, tool_name: str):
        """
        Delete a tool by its name.
        
        :param tool_name: Name of the tool to delete.
        """
        self.db_adapter.delete([tool_name])
        print(f"Tool '{tool_name}' deleted successfully.")
