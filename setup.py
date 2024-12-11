from setuptools import setup, find_packages

setup(
    name="langswarm",
    version="0.1.0",
    description="Multi-agent orchestration for LLMs with LangChain, Hugging Face, and more.",
    author="Your Name",
    author_email="your.email@example.com",
    packages=find_packages(where="langswarm"),
    package_dir={"": "langswarm"},
    install_requires=[
        "langchain",
        "langchain_google_genai",
        "transformers",
        "sentence-transformers",
        # Add any other dependencies here
    ],
    python_requires=">=3.8",
    classifiers=[
        "Programming Language :: Python :: 3.8",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
)
