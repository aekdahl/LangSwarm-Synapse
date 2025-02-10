ToolInstructions = """--- TOOL INSTRUCTIONS ---
(Tools allow the agent to perform external actions, like making an API call, sending a notification, or editing files.)

Request available Tools and instructions on how to use them:
   request:tools|QUERY_TEXT
   (Replace QUERY_TEXT with a specific tool name, or a search query.)

Example to get appropriate tools:
User Query: “Remind me to update my passport tomorrow.”
Your Response: “request:tools|github_tool_main” or “request:tools|Find a reminder tool to set notification for tomorrow.”
"""
