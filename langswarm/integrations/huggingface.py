from .llm import LLM  # Import your base LLM class
from transformers import AutoModelForSequenceClassification, AutoTokenizer, pipeline


class HuggingFaceLLM(LLM):
    """
    A Hugging Face-based implementation of the LLM class.
    Allows easy integration of Hugging Face models into LangSwarm workflows.
    """

    def __init__(self, model_name: str, task: str = "text-classification", device: int = -1, **kwargs):
        """
        Initialize the Hugging Face model and tokenizer.

        Parameters:
        - model_name (str): The name of the model to load from the Hugging Face Hub.
        - task (str): The task for which the model is used. Defaults to "text-classification".
        - device (int): Device to run the model on (-1 for CPU, 0 for GPU). Defaults to CPU.
        - kwargs: Additional parameters for the LLM base class.
        """
        super().__init__(**kwargs)
        self.model_name = model_name
        self.task = task
        self.device = device

        # Load model and tokenizer
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model = AutoModelForSequenceClassification.from_pretrained(model_name)
        self.pipeline = pipeline(task=task, model=self.model, tokenizer=self.tokenizer, device=device)

    def chat(self, q=None, json=False, reset=False, erase_query=False, remove_linebreaks=False):
        """
        Process the query using the Hugging Face model pipeline.

        Parameters:
        - q (str): The input query.
        - json (bool): Whether to return the response as a JSON object. Not applicable for Hugging Face models.
        - reset (bool): Whether to reset the memory before processing. Inherited from the LLM base class.
        - erase_query (bool): Whether to erase the query from memory after processing.
        - remove_linebreaks (bool): Whether to remove line breaks from the input query. Inherited from the LLM base class.

        Returns:
        - str: The model's response.
        """
        if reset:
            self.reset()

        if q is not None:
            self.set_query(q, remove_linebreaks=remove_linebreaks)

        # Process the query using the Hugging Face pipeline
        response = self.pipeline(self.last_in_memory if self.last_in_memory else q)

        # Handle response format based on task
        if self.task == "text-classification":
            response_text = f"{response[0]['label']} ({response[0]['score']:.2f})"
        else:
            response_text = response[0] if isinstance(response, list) else response

        # Add response to memory
        self.add_response(response_text)

        # Optionally erase the query from memory
        if erase_query:
            self.remove()

        return response_text
