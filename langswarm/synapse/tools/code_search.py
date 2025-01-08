class CodeSearchTool:
    def __init__(self, collection):
        self.name = "CodeSearch"
        self.description = "Search the agent's source code."
        self.collection = collection

    def use(self, query):
        return search_code(query, self.collection)
