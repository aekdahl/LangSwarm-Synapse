from .base import BaseTool

class TaskListTool(BaseTool):
    """
    A quick in-memory task list that optionally stores tasks in a vector database.
    """

    def __init__(self, identifier, adapter=None):
        self.identifier = identifier
        self.adapter = adapter  # Optional adapter for storing tasks in a vector database
        super().__init__(
            name="TaskListTool",
            description="""Use the TaskListTool to manage tasks in a simple in-memory list. It is useful for breaking down projects into small tasks, tracking progress, or coordinating multiple subtasks in a structured manner.""",
            instruction="""
- **Actions and Parameters**:
    - `create_task`: Create a new task.
      - Parameters:
        - `description` (str): The text describing what needs to be done.
        - `priority` (int): The priority of the task (lower numbers indicate higher priority).
        
    - `update_task`: Update the status or the description of the task.
      - Parameters:
        - `task_id` (str): The identifier of the task to update.
        - `description` (str | optional): A new description if you want to change it.
        - `completed` (bool | optional): Set to true or false to mark a task as finished or not.
        - `priority` (int | optional): Update the task's priority.

    - `delete_task`: Delete a task.
      - Parameters:
        - `task_id` (str): The identifier of the task to delete.

    - `list_tasks`: List all tasks.
      - No parameters required
        
- **Agent query format**:
  ```
  use tool:name|action|{"param1": "value1", "param2": "value2"}
  ```
  Replace `name`, `action` and parameters as needed.

Example:
- To create a new task:
  ```
  use tool:task_list|create_task|{"description": "Add docstring to function xyz", "priority": 1}
  ```
        """
        )
        self.tasks = {}  # in-memory store, {task_id: {"description": str, "completed": bool, "priority": int, ...}}
        self.next_id = 1
        
        # Load existing tasks from the adapter if available
        if self.adapter:
            self.load_existing_tasks()

    def load_existing_tasks(self):
        """
        Load existing tasks from the adapter using the identifier as the key.
        """
        existing_tasks = self.adapter.query(query=self.identifier)
        for task in existing_tasks:
            self.tasks[task["key"]] = {
                "description": task["text"],
                "completed": task.get("completed", False),
                "priority": task.get("priority", 1)  # Default priority if not set
            }
            self.next_id = max(self.next_id, int(task["key"].split("-")[1]) + 1)

    def run(self, payload={}, action="list_tasks"):
        """
        Execute the tool's actions.
        :param payload: str or dict - The input query or tool details.
        :param action: str - The action to perform.
        :return: str or List[str] - The result of the action.
        """
        if action == "create_task":
            return self.create_task(**payload)
        elif action == "update_task":
            return self.update_task(**payload)
        elif action == "list_tasks":
            return self.list_tasks(**payload)
        elif action == "delete_task":
            return self.delete_task(**payload)
        else:
            return (
                f"Unsupported action: {action}. Available actions are:  "
                f"{self.instruction}"
            )

    def create_task(self, description, priority=1):
        """
        Create a new task.
        Returns a dictionary with task_id, description, completed, and priority.
        """
        task_id = f"task-{self.next_id}"
        self.next_id += 1

        task_data = {
            "task_id": task_id,
            "description": description,
            "completed": False,
            "priority": priority
        }
        self.tasks[task_id] = task_data

        # Store the task in the adapter if provided
        if self.adapter:
            self.adapter.add_documents([{
                "key": task_id,
                "text": description,
                "metadata": {
                    "completed": False,
                    "priority": priority,
                    "identifier": self.identifier
                }
            }])

        return f"New task created:   {task_data}"

    def update_task(self, task_id, **kwargs):
        """
        Update fields in a task, e.g. 'completed': True or 'description': 'New text'.
        Returns the updated task dict, or None if not found.
        """
        task = self.tasks.get(task_id)
        if not task:
            return None

        for key, value in kwargs.items():
            if key in ["description", "completed", "priority"]:
                task[key] = value

        # Update the task in the adapter if provided
        if self.adapter:
            self.adapter.update({
                "key": task_id,
                "text": task["description"],
                "metadata": {
                    "completed": task["completed"],
                    "priority": task["priority"],
                    "identifier": self.identifier
                }
            })

        return f"Updated task: {task}"

    def list_tasks(self):
        """
        Return all tasks in memory.
        If using the vector DB, you could query there too for consistency.
        """
        return f"All tasks in list:\n\n {list(self.tasks.values())}"

    def delete_task(self, task_id):
        """
        Delete a task from memory and optionally from the vector DB.
        Returns True if deleted, False if not found.
        """
        if task_id in self.tasks:
            del self.tasks[task_id]
            return "Task deleted."
        return "The task was not found."
