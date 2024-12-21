import logging

class LoggingMixin:
    """
    Mixin for logging functionality, including LangSmith integration.
    """

    def _initialize_logger(self, name: str) -> logging.Logger:
        """
        Initialize a logger for the agent.
        """
        logger = logging.getLogger(name)
        if not logger.hasHandlers():
            handler = logging.StreamHandler()
            formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
            handler.setFormatter(formatter)
            logger.addHandler(handler)
            logger.setLevel(logging.INFO)
        return logger
