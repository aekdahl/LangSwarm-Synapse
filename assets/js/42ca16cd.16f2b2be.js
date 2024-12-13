"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[405],{2696:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"bring-your-own-agent","title":"Bring Your Own Agent","description":"LangSwarm empowers users to seamlessly integrate their own agents or models into LangSwarm\u2019s ecosystem, leveraging its powerful orchestration features such as consensus, aggregation, and voting. After using LangSwarm, you can continue processing results in your platform of choice, such as LangChain, Hugging Face, or OpenAI.","source":"@site/docs/bring-your-own-agent.md","sourceDirName":".","slug":"/bring-your-own-agent","permalink":"/LangSwarm/bring-your-own-agent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Bring Your Own Agent"},"sidebar":"defaultSidebar","next":{"title":"Getting Started with LangSwarm","permalink":"/LangSwarm/"}}');var s=r(4848),t=r(8453);const o={title:"Bring Your Own Agent"},i="Bring Your Own Agent with LangSwarm",g={},l=[{value:"<strong>Why Bring Your Own Agent?</strong>",id:"why-bring-your-own-agent",level:2},{value:"<strong>Steps to Bring Your Own Agent</strong>",id:"steps-to-bring-your-own-agent",level:2},{value:"<strong>Step 1: Wrap Your Agent</strong>",id:"step-1-wrap-your-agent",level:3},{value:"<strong>Example: Wrapping a LangChain Agent</strong>",id:"example-wrapping-a-langchain-agent",level:4},{value:"<strong>Example: Wrapping a Hugging Face Model</strong>",id:"example-wrapping-a-hugging-face-model",level:4},{value:"<strong>Step 2: Use LangSwarm Features</strong>",id:"step-2-use-langswarm-features",level:3},{value:"<strong>Example: Aggregation with Custom Agents</strong>",id:"example-aggregation-with-custom-agents",level:4},{value:"<strong>Step 3: Seamlessly Continue in Your Platform</strong>",id:"step-3-seamlessly-continue-in-your-platform",level:3},{value:"<strong>Example: Using Aggregated Response in LangChain</strong>",id:"example-using-aggregated-response-in-langchain",level:4},{value:"<strong>Full Workflow Example</strong>",id:"full-workflow-example",level:2},{value:"<strong>Advanced Use Cases</strong>",id:"advanced-use-cases",level:2},{value:"<strong>Best Practices</strong>",id:"best-practices",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"bring-your-own-agent-with-langswarm",children:(0,s.jsx)(n.strong,{children:"Bring Your Own Agent with LangSwarm"})})}),"\n",(0,s.jsx)(n.p,{children:"LangSwarm empowers users to seamlessly integrate their own agents or models into LangSwarm\u2019s ecosystem, leveraging its powerful orchestration features such as consensus, aggregation, and voting. After using LangSwarm, you can continue processing results in your platform of choice, such as LangChain, Hugging Face, or OpenAI."}),"\n",(0,s.jsx)(n.p,{children:"This guide explains how to bring your own agents into LangSwarm, use our features, and seamlessly integrate back into your workflow."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"why-bring-your-own-agent",children:(0,s.jsx)(n.strong,{children:"Why Bring Your Own Agent?"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Flexibility"}),": Use your custom models or agents built on LangChain, Hugging Face, OpenAI, or other frameworks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Powerful Orchestration"}),": Leverage LangSwarm\u2019s multi-agent collaboration tools like ",(0,s.jsx)(n.code,{children:"LLMConsensus"}),", ",(0,s.jsx)(n.code,{children:"LLMAggregation"}),", and more."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Seamless Integration"}),": Output results in a format that can be passed back to your native platform or extended workflows."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"steps-to-bring-your-own-agent",children:(0,s.jsx)(n.strong,{children:"Steps to Bring Your Own Agent"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Wrap your agent using LangSwarm\u2019s ",(0,s.jsx)(n.code,{children:"AgentWrapper"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Use LangSwarm\u2019s features (e.g., swarms like ",(0,s.jsx)(n.code,{children:"LLMConsensus"})," or ",(0,s.jsx)(n.code,{children:"LLMAggregation"}),")."]}),"\n",(0,s.jsx)(n.li,{children:"Process the output in your platform (e.g., LangChain)."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"step-1-wrap-your-agent",children:(0,s.jsx)(n.strong,{children:"Step 1: Wrap Your Agent"})}),"\n",(0,s.jsxs)(n.p,{children:["LangSwarm provides the ",(0,s.jsx)(n.code,{children:"AgentWrapper"})," to make any agent compatible with its features. Wrap your agent with this class, specifying its behavior (e.g., conversational or not)."]}),"\n",(0,s.jsx)(n.h4,{id:"example-wrapping-a-langchain-agent",children:(0,s.jsx)(n.strong,{children:"Example: Wrapping a LangChain Agent"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from langchain.llms import OpenAI\nfrom langchain.memory import ConversationBufferMemory\nfrom langswarm.wrappers import AgentWrapper\n\n# Create a LangChain agent\nmemory = ConversationBufferMemory()\nlangchain_agent = OpenAI(model="gpt-4", memory=memory)\n\n# Wrap the agent for LangSwarm compatibility\nwrapped_agent = AgentWrapper(agent=langchain_agent, is_conversational=True)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-wrapping-a-hugging-face-model",children:(0,s.jsx)(n.strong,{children:"Example: Wrapping a Hugging Face Model"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from transformers import pipeline\nfrom langswarm.wrappers import AgentWrapper\n\n# Load a Hugging Face QA pipeline\nqa_pipeline = pipeline("question-answering", model="distilbert-base-cased-distilled-squad")\n\n# Wrap the pipeline for LangSwarm compatibility\nwrapped_agent = AgentWrapper(agent=qa_pipeline, is_conversational=False)\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"step-2-use-langswarm-features",children:(0,s.jsx)(n.strong,{children:"Step 2: Use LangSwarm Features"})}),"\n",(0,s.jsx)(n.p,{children:"Now that your agents are wrapped, you can use LangSwarm\u2019s orchestration tools to process queries collaboratively."}),"\n",(0,s.jsx)(n.h4,{id:"example-aggregation-with-custom-agents",children:(0,s.jsx)(n.strong,{children:"Example: Aggregation with Custom Agents"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from langswarm.swarm import LLMAggregation\n\n# Define a query\nquery = "What are the main causes of climate change?"\n\n# Use LangSwarm aggregation to combine outputs\naggregation_swarm = LLMAggregation(query=query, clients=[wrapped_agent])\naggregated_response = aggregation_swarm.run()\n\n# Print the aggregated response\nprint("Aggregated Response:", aggregated_response)\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"step-3-seamlessly-continue-in-your-platform",children:(0,s.jsx)(n.strong,{children:"Step 3: Seamlessly Continue in Your Platform"})}),"\n",(0,s.jsx)(n.p,{children:"LangSwarm outputs results in standard formats (e.g., strings or JSON), making it easy to continue processing in your native platform."}),"\n",(0,s.jsx)(n.h4,{id:"example-using-aggregated-response-in-langchain",children:(0,s.jsx)(n.strong,{children:"Example: Using Aggregated Response in LangChain"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from langchain.prompts import PromptTemplate\nfrom langchain.chains import LLMChain\n\n# Define a LangChain prompt template\nprompt = PromptTemplate(\n    input_variables=["aggregated_response"],\n    template=(\n        "Based on the following aggregated data:\\n\\n"\n        "{aggregated_response}\\n\\n"\n        "Propose three solutions to mitigate climate change."\n    )\n)\n\n# Create a LangChain chain\nchain = LLMChain(llm=OpenAI(model="gpt-3.5-turbo"), prompt=prompt)\n\n# Use the aggregated response as input\nsolutions = chain.run({"aggregated_response": aggregated_response})\n\n# Print the solutions\nprint("\\nProposed Solutions:")\nprint(solutions)\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"full-workflow-example",children:(0,s.jsx)(n.strong,{children:"Full Workflow Example"})}),"\n",(0,s.jsx)(n.p,{children:"Here\u2019s a complete workflow showcasing how to bring your own agent, use LangSwarm features, and continue in LangChain."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'"""\nComplete Workflow: Bring Your Own Agent with LangSwarm and LangChain\n\n1. Wrap your agent for LangSwarm compatibility.\n2. Use LangSwarm\u2019s orchestration tools (e.g., LLMAggregation).\n3. Continue processing results in LangChain.\n"""\n\n# Import necessary libraries\nfrom langswarm.wrappers import AgentWrapper\nfrom langswarm.swarm import LLMAggregation\nfrom langchain.prompts import PromptTemplate\nfrom langchain.chains import LLMChain\nfrom transformers import pipeline\n\n# Step 1: Wrap your agent\nqa_pipeline = pipeline("question-answering", model="distilbert-base-cased-distilled-squad")\nwrapped_agent = AgentWrapper(agent=qa_pipeline, is_conversational=False)\n\n# Step 2: Use LangSwarm features\nquery = "What are the main causes of deforestation?"\naggregation_swarm = LLMAggregation(query=query, clients=[wrapped_agent])\naggregated_response = aggregation_swarm.run()\nprint("Aggregated Response:", aggregated_response)\n\n# Step 3: Process the results in LangChain\nprompt = PromptTemplate(\n    input_variables=["aggregated_response"],\n    template=(\n        "Based on the following aggregated data:\\n\\n"\n        "{aggregated_response}\\n\\n"\n        "Suggest three ways to prevent deforestation."\n    )\n)\nchain = LLMChain(llm=OpenAI(model="gpt-3.5-turbo"), prompt=prompt)\nsolutions = chain.run({"aggregated_response": aggregated_response})\nprint("\\nProposed Solutions:", solutions)\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"advanced-use-cases",children:(0,s.jsx)(n.strong,{children:"Advanced Use Cases"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Cross-Agent Memory Sharing"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use LangSwarm\u2019s shared memory system to enable memory sharing between wrapped agents."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Dynamic Routing"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Combine multiple agents with LangSwarm\u2019s routing capabilities to dynamically choose the best agent for a query."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Integration with Custom Pipelines"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Integrate LangSwarm features into your custom LangChain pipelines with pre- and post-processing steps."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:(0,s.jsx)(n.strong,{children:"Best Practices"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Select the Right Wrapper"}),": Ensure your agent is wrapped using ",(0,s.jsx)(n.code,{children:"AgentWrapper"})," to make it compatible with LangSwarm features."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Optimize Query Structure"}),": For best results, standardize your queries during pre-processing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Leverage LangSwarm Features"}),": Use LangSwarm's orchestration tools to aggregate, validate, or route outputs before feeding them into your native workflows."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["LangSwarm\u2019s ",(0,s.jsx)(n.code,{children:"Bring Your Own Agent"})," capability gives you the flexibility to use custom models or agents while leveraging its orchestration power. Combine the best of LangSwarm and LangChain to build intelligent, multi-agent workflows tailored to your needs!"]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var a=r(6540);const s={},t=a.createContext(s);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);