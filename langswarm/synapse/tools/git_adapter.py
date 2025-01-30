from langchain_community.utilities.github import GitHubAPIWrapper
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings
from abc import ABC, abstractmethod


class GitAdapter(ABC):
    """
    A base class for general Git operations.
    """

    @abstractmethod
    def clone_repo(self, repo_url, local_path):
        """Clone a Git repository."""
        pass

    @abstractmethod
    def fetch_file(self, repo_path, file_path, branch="main"):
        """Fetch a file from a local Git repository."""
        pass

    @abstractmethod
    def list_files(self, repo_path, branch="main"):
        """List all files in a repository."""
        pass


class GitHubAdapter(GitAdapter):
    """
    A GitHub-specific adapter that extends Git functionality with GitHub integration.
    """

    def __init__(self, github_token, db_path="code_snippets"):
        """
        Initialize the GitHub adapter.
        Args:
            github_token (str): GitHub API token for authentication.
            db_path (str): Path to the vector database for code storage.
        """
        self.github_tool = GitHubAPIWrapper(github_access_token=github_token)
        self.text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
        self.embeddings = OpenAIEmbeddings()
        self.vectorstore = Chroma(persist_directory=db_path, embedding_function=self.embeddings)

    # Overriding GitAdapter methods
    def clone_repo(self, repo_url, local_path):
        """
        Clone a GitHub repository locally.
        Args:
            repo_url (str): The URL of the repository to clone.
            local_path (str): The local directory to clone the repository into.
        """
        import git
        try:
            git.Repo.clone_from(repo_url, local_path)
            print(f"Repository cloned to {local_path}")
        except Exception as e:
            raise RuntimeError(f"Failed to clone repository: {e}")

    def fetch_file(self, repo_path, file_path, branch="main"):
        """
        Fetch a file from a GitHub repository.
        Args:
            repo_path (str): The GitHub repository name (e.g., 'owner/repo').
            file_path (str): The path to the file in the repository.
            branch (str): The branch to fetch the file from (default: 'main').
        Returns:
            dict: File content and metadata.
        """
        file_content = self.github_tool.get_repo_content(repo_name=repo_path, path=file_path, branch=branch)
        if file_content["type"] != "file":
            raise ValueError("The specified path is not a file.")
        return file_content

    def list_files(self, repo_path, branch="main"):
        """
        List all files in a GitHub repository.
        Args:
            repo_path (str): The GitHub repository name (e.g., 'owner/repo').
            branch (str): The branch to list files from (default: 'main').
        Returns:
            List[str]: List of file paths in the repository.
        """
        files = self.github_tool.get_repo_content(repo_name=repo_path, path="", branch=branch)
        return [file["path"] for file in files if file["type"] == "file"]

    # Additional GitHub-specific methods
    def fetch_and_store_code(self, repo_name, file_path, branch="main"):
        """
        Fetch code from GitHub and store it in the vector database.
        Args:
            repo_name (str): The GitHub repository name (e.g., 'owner/repo').
            file_path (str): The path to the file in the repository.
            branch (str): The branch to fetch from (default: 'main').
        Returns:
            str: Success message.
        """
        file_content = self.fetch_file(repo_name, file_path, branch)
        code = file_content["content"]
        metadata = {"repo": repo_name, "path": file_path, "branch": branch}
        chunks = self.text_splitter.split_text(code)
        self.vectorstore.add_texts(chunks, metadatas=[metadata] * len(chunks))
        return f"Code from {file_path} in {repo_name} (branch: {branch}) has been processed and stored."

    def search_code(self, query, top_k=5):
        """
        Search stored code snippets for relevant matches.
        Args:
            query (str): The search query.
            top_k (int): Number of results to return (default: 5).
        Returns:
            List[str]: Relevant code snippets.
        """
        results = self.vectorstore.similarity_search(query, k=top_k)
        return [result.page_content for result in results]

"""
# Initialize GitHubAdapter
github_adapter = GitHubAdapter(github_token="your_github_token")

# Clone a repository
github_adapter.clone_repo(repo_url="https://github.com/owner/repo", local_path="./repo")

# Fetch and store a file's content
github_adapter.fetch_and_store_code(
    repo_name="owner/repo",
    file_path="src/main.py",
    branch="main"
)

# Search for code snippets
results = github_adapter.search_code(query="function to fetch data")
print(results)

# List files in a repository
files = github_adapter.list_files(repo_path="owner/repo", branch="main")
print(files)

"""
