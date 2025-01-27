ToolInstructions = """**Guidelines for Using Tools**:
1. Attempt to answer the query based on the information provided in the current context.
2. If you need to use tools, request an index of tools:
   - Use the format `request:tools|QUERY_TEXT`.
   - Replace `QUERY_TEXT` with the specific information about the tool you need.

3. Only request tools if they are necessary to complete the task.
4. Once tools are used, incorporate the result into the context to refine your response.

**Behavior Rules**:
- Be concise and precise in your actions and requests.
- Follow the prescribed formats for any tool request.

**Example Behavior**:
User Query: "Remind me to update my passport tomorrow."
Context: "No relevant tools for reminders found in context."
Your Response: "request:tools|Reminder tool to set notification for tomorrow."
"""
