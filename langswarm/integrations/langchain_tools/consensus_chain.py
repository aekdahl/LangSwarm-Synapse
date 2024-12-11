from langchain.chains import SequentialChain
from langchain.prompts import PromptTemplate
from langswarm.consensus import LLMConsensus

# Define Prompt Templates
preprocessing_prompt = PromptTemplate(input_variables=["input"], template="Please summarize: {input}")
postprocessing_prompt = PromptTemplate(input_variables=["summary"], template="Reformat as a bullet list: {summary}")

# Define LangSwarm Consensus Module
class ConsensusChain:
    def __init__(self, agents, **kwargs):
        self.consensus = LLMConsensus(clients=agents, **kwargs)

    def run(self, input_text):
        self.consensus.query = input_text
        return self.consensus.run()

# Integrate into LangChain Pipeline
if __name__ == "__main__":
    agents = [...]  # Define agents
    consensus_chain = ConsensusChain(agents=agents)

    # Define the pipeline
    pipeline = SequentialChain(
        chains=[
            preprocessing_prompt,
            consensus_chain.run,
            postprocessing_prompt,
        ],
        input_variables=["input"],
        output_variables=["output"],
    )

    # Run the pipeline
    input_text = "LangSwarm orchestrates multiple LLMs effectively."
    result = pipeline.run({"input": input_text})
    print("Pipeline Result:", result)
