import os
from typing import List, Dict
from adapters import DatabaseAdapter  # Assuming we already have adapters implemented
from abc import ABC


class CodebaseIndexer(BaseTool, ABC):
    def __init__(self, name="Codebase Indexer", description="Extracts all files in a directory and indexes them."):
        super().__init__(name, description)

    def use(self, base_path: str, adapter: DatabaseAdapter, file_extensions: List[str] = None) -> List[Dict]:
        """
        Indexes the codebase, extracting file details and processing them with the given adapter.

        Args:
            base_path (str): The base directory to start indexing.
            adapter (DatabaseAdapter): The adapter used to retrieve and process file data.
            file_extensions (List[str], optional): List of file extensions to include. If None, includes all files.

        Returns:
            List[Dict]: A list of indexed file details.
        """
        if not os.path.isdir(base_path):
            raise ValueError(f"Provided path '{base_path}' is not a valid directory.")

        indexed_files = []
        for root, _, files in os.walk(base_path):
            for file in files:
                if file_extensions and not file.endswith(tuple(file_extensions)):
                    continue

                file_path = os.path.join(root, file)
                try:
                    # Retrieve file content
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()

                    # Use the adapter to process the file content
                    file_data = adapter.add_documents([{"text": content, "metadata": {"path": file_path}}])

                    # Add to the index
                    indexed_files.append({
                        "file_path": file_path,
                        "content": content,
                        "metadata": adapter.query_by_metadata({"path": file_path}),
                    })
                except Exception as e:
                    print(f"Error processing file '{file_path}': {e}")

        return indexed_files
