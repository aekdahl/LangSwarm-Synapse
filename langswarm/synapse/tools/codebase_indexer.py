import os
from typing import Dict, List
import json


class CodebaseIndexer(BaseTool):
    """
    Tool for indexing a codebase by querying the database for metadata and creating a file/folder structure.
    """
    def __init__(self, name="Codebase Indexer", description="Indexes file and folder structures from a database query."):
        super().__init__(name, description)

    def use(self, adapter, query: Dict = None, output_format: str = "dict") -> Dict:
        """
        Indexes the codebase by fetching metadata from the database and building a file/folder structure.

        Args:
            adapter (DatabaseAdapter): The adapter used to query the database.
            query (Dict, optional): Pre-written query to fetch metadata.
            output_format (str): Output format of the index. Options: "dict", "json". Defaults to "dict".

        Returns:
            Dict: A nested dictionary representing the file/folder structure.
        """
        if not isinstance(adapter, DatabaseAdapter):
            raise ValueError("The adapter must be an instance of DatabaseAdapter.")

        # Step 1: Query the database for metadata
        try:
            metadata_results = adapter.query(query=query)
        except Exception as e:
            raise RuntimeError(f"Failed to fetch metadata from the database: {e}")

        if not metadata_results:
            raise ValueError("No metadata retrieved from the database.")

        # Step 2: Build the file/folder structure
        file_structure = self._build_file_structure(metadata_results)

        # Step 3: Output the index
        if output_format == "json":
            return json.dumps(file_structure, indent=2)
        elif output_format == "dict":
            return file_structure
        else:
            raise ValueError("Invalid output_format. Choose 'dict' or 'json'.")

    def _build_file_structure(self, metadata_results: List[Dict]) -> Dict:
        """
        Builds a nested file/folder structure from metadata results.

        Args:
            metadata_results (List[Dict]): Metadata results from the database query.

        Returns:
            Dict: A nested dictionary representing the file/folder structure.
        """
        file_structure = {}

        for record in metadata_results:
            # Extract the file path from metadata
            file_path = record.get("metadata", {}).get("path", "")
            if not file_path:
                continue

            # Break the path into components
            path_parts = file_path.split(os.sep)

            # Recursively build the nested dictionary structure
            current_level = file_structure
            for part in path_parts:
                if part not in current_level:
                    current_level[part] = {}
                current_level = current_level[part]

        return file_structure

"""
from adapters.pinecone_adapter import PineconeAdapter

# Initialize the adapter
adapter = PineconeAdapter(api_key="your_api_key", environment="your_env", index_name="your_index_name")

# Initialize the indexer tool
indexer = CodebaseIndexer()

# Define the pre-written query to fetch only metadata
query = {"file_type": "code"}  # Adjust this query as per the database schema

# Run the tool to generate the file and folder structure
file_structure = indexer.use(adapter=adapter, query=query, output_format="dict")

# Print the file structure
print("File Structure:")
for folder, sub_structure in file_structure.items():
    print(f"{folder}: {sub_structure}")

"""
