"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[618],{7031:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>g});const a=JSON.parse('{"id":"tutorials/aggregation","title":"Using LangSwarm LLMAggregation with a LangChain Pipeline","description":"This tutorial demonstrates how to use LangSwarm\'s LLMAggregation with LangChain in a complete pipeline. By leveraging LangSwarm\u2019s LangChain-compatible tools, we can integrate pre- and post-processing steps seamlessly into LangChain\u2019s infrastructure while aggregating outputs from multiple agents.","source":"@site/docs/tutorials/aggregation.md","sourceDirName":"tutorials","slug":"/tutorials/aggregation","permalink":"/LangSwarm/tutorials/aggregation","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Using LangSwarm LLMAggregation with a LangChain Pipeline"},"sidebar":"defaultSidebar","previous":{"title":"Bring Your Own Agent","permalink":"/LangSwarm/bring-your-own-agent"},"next":{"title":"Using LangSwarm LLMConsensus with LangChain for Multi-LLM Collaboration","permalink":"/LangSwarm/tutorials/consensus"}}');var t=i(4848),s=i(8453);const r={title:"Using LangSwarm LLMAggregation with a LangChain Pipeline"},o="Tutorial: Using LangSwarm LLMAggregation with a LangChain Pipeline",l={},g=[{value:"<strong>Prerequisites</strong>",id:"prerequisites",level:2},{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"<strong>Full Code</strong>",id:"full-code",level:2},{value:"<strong>Code Walkthrough</strong>",id:"code-walkthrough",level:2},{value:"<strong>Step 1: Pre-processing Chain</strong>",id:"step-1-pre-processing-chain",level:3},{value:"<strong>Step 2: Aggregation Chain</strong>",id:"step-2-aggregation-chain",level:3},{value:"<strong>Step 3: Post-processing Chain</strong>",id:"step-3-post-processing-chain",level:3},{value:"<strong>Step 4: Build the LangChain Pipeline</strong>",id:"step-4-build-the-langchain-pipeline",level:3},{value:"<strong>Step 5: Run the Pipeline</strong>",id:"step-5-run-the-pipeline",level:3},{value:"<strong>Expected Output</strong>",id:"expected-output",level:2},{value:"<strong>Why This is Powerful</strong>",id:"why-this-is-powerful",level:2}];function p(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"tutorial-using-langswarm-llmaggregation-with-a-langchain-pipeline",children:"Tutorial: Using LangSwarm LLMAggregation with a LangChain Pipeline"})}),"\n",(0,t.jsxs)(e.p,{children:["This tutorial demonstrates how to use ",(0,t.jsx)(e.strong,{children:"LangSwarm's LLMAggregation"})," with LangChain in a complete pipeline. By leveraging LangSwarm\u2019s LangChain-compatible tools, we can integrate pre- and post-processing steps seamlessly into LangChain\u2019s infrastructure while aggregating outputs from multiple agents."]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"prerequisites",children:(0,t.jsx)(e.strong,{children:"Prerequisites"})}),"\n",(0,t.jsx)(e.p,{children:"Ensure you have the necessary libraries installed:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"pip install langswarm langchain langchain-openai transformers\n"})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"overview",children:(0,t.jsx)(e.strong,{children:"Overview"})}),"\n",(0,t.jsx)(e.p,{children:"We will:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Use LangChain\u2019s ",(0,t.jsx)(e.code,{children:"LLMChain"})," for pre-processing input."]}),"\n",(0,t.jsxs)(e.li,{children:["Utilize LangSwarm\u2019s ",(0,t.jsx)(e.code,{children:"LLMAggregationChain"})," to aggregate responses from multiple agents."]}),"\n",(0,t.jsx)(e.li,{children:"Integrate a post-processing step with LangChain to refine the aggregated output."}),"\n",(0,t.jsxs)(e.li,{children:["Combine all steps into a LangChain ",(0,t.jsx)(e.code,{children:"SequentialChain"})," pipeline for a unified workflow."]}),"\n"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"full-code",children:(0,t.jsx)(e.strong,{children:"Full Code"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'"""\nLangSwarm + LangChain Pipeline Tutorial: Aggregation Swarm\n\nThis tutorial demonstrates how to use LangSwarm\'s LangChain-compatible tools\nto include `LLMAggregation` directly in a LangChain pipeline with pre- and post-processing steps.\n\nKey Features:\n- Use LangSwarm\u2019s built-in LangChain-compatible aggregation chain.\n- Pre-processing and post-processing steps in the pipeline.\n"""\n\n# Import necessary libraries\nfrom langswarm.chains import LLMAggregationChain  # LangSwarm\'s LangChain-compatible aggregation chain\nfrom langchain.prompts import PromptTemplate  # LangChain prompt templates\nfrom langchain.chains import SequentialChain, LLMChain  # LangChain pipeline framework\nfrom langchain.llms import OpenAI  # LangChain OpenAI LLM\n\n# Step 1: Pre-processing Chain\n"""\nThe pre-processing chain ensures the input is clean and formatted before aggregation.\n"""\npre_prompt = PromptTemplate(\n    input_variables=["raw_input"],\n    template="Clean and standardize the following input for analysis:\\n\\n{raw_input}"\n)\npre_chain = LLMChain(llm=OpenAI(model="gpt-3.5-turbo"), prompt=pre_prompt)\n\n# Step 2: Aggregation Chain\n"""\nUse LangSwarm\'s LangChain-compatible `LLMAggregationChain` to aggregate outputs\nfrom multiple agents.\n"""\naggregation_chain = LLMAggregationChain(\n    agents=[\n        {"model": "gpt-4", "api_key": "your_openai_api_key"},\n        {"model": "gpt-3.5-turbo", "api_key": "your_openai_api_key"},\n        {"model": "gpt-3.5-turbo-instruct", "api_key": "your_openai_api_key"},\n    ]\n)\n\n# Step 3: Post-processing Chain\n"""\nThe post-processing chain refines the aggregated output and generates actionable insights.\n"""\npost_prompt = PromptTemplate(\n    input_variables=["aggregated_response"],\n    template=(\n        "Based on the following aggregated data:\\n\\n"\n        "{aggregated_response}\\n\\n"\n        "Provide three actionable insights."\n    )\n)\npost_chain = LLMChain(llm=OpenAI(model="gpt-3.5-turbo"), prompt=post_prompt)\n\n# Step 4: Build the LangChain Pipeline\n"""\nCombine the pre-processing, aggregation, and post-processing steps into a LangChain pipeline.\n"""\npipeline = SequentialChain(\n    chains=[pre_chain, aggregation_chain, post_chain],\n    input_variables=["raw_input"],\n    output_variables=["aggregated_response", "insights"],\n)\n\n# Step 5: Run the Pipeline\n"""\nRun the pipeline on a query, demonstrating the complete multi-agent workflow.\n"""\nquery = "What are the main causes and solutions for climate change?"\nresults = pipeline.run({"raw_input": query})\n\n# Display the results\nprint("\\nAggregated Response:", results["aggregated_response"])\nprint("\\nActionable Insights:", results["insights"])\n'})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"code-walkthrough",children:(0,t.jsx)(e.strong,{children:"Code Walkthrough"})}),"\n",(0,t.jsx)(e.h3,{id:"step-1-pre-processing-chain",children:(0,t.jsx)(e.strong,{children:"Step 1: Pre-processing Chain"})}),"\n",(0,t.jsxs)(e.p,{children:["The pre-processing chain ensures the input is clean and formatted before aggregation. This step uses LangChain\u2019s ",(0,t.jsx)(e.code,{children:"LLMChain"})," to process the raw query."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'pre_prompt = PromptTemplate(\n    input_variables=["raw_input"],\n    template="Clean and standardize the following input for analysis:\\n\\n{raw_input}"\n)\npre_chain = LLMChain(llm=OpenAI(model="gpt-3.5-turbo"), prompt=pre_prompt)\n'})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"step-2-aggregation-chain",children:(0,t.jsx)(e.strong,{children:"Step 2: Aggregation Chain"})}),"\n",(0,t.jsxs)(e.p,{children:["LangSwarm\u2019s ",(0,t.jsx)(e.code,{children:"LLMAggregationChain"})," aggregates responses from multiple agents. The chain is built-in and LangChain-compatible, simplifying the integration process."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'aggregation_chain = LLMAggregationChain(\n    agents=[\n        {"model": "gpt-4", "api_key": "your_openai_api_key"},\n        {"model": "gpt-3.5-turbo", "api_key": "your_openai_api_key"},\n        {"model": "gpt-3.5-turbo-instruct", "api_key": "your_openai_api_key"},\n    ]\n)\n'})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"step-3-post-processing-chain",children:(0,t.jsx)(e.strong,{children:"Step 3: Post-processing Chain"})}),"\n",(0,t.jsxs)(e.p,{children:["The post-processing chain refines the aggregated output. Here, actionable insights are generated from the aggregated response using LangChain\u2019s ",(0,t.jsx)(e.code,{children:"LLMChain"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'post_prompt = PromptTemplate(\n    input_variables=["aggregated_response"],\n    template=(\n        "Based on the following aggregated data:\\n\\n"\n        "{aggregated_response}\\n\\n"\n        "Provide three actionable insights."\n    )\n)\npost_chain = LLMChain(llm=OpenAI(model="gpt-3.5-turbo"), prompt=post_prompt)\n'})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"step-4-build-the-langchain-pipeline",children:(0,t.jsx)(e.strong,{children:"Step 4: Build the LangChain Pipeline"})}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.code,{children:"SequentialChain"})," combines all steps\u2014pre-processing, aggregation, and post-processing\u2014into a unified pipeline."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'pipeline = SequentialChain(\n    chains=[pre_chain, aggregation_chain, post_chain],\n    input_variables=["raw_input"],\n    output_variables=["aggregated_response", "insights"],\n)\n'})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"step-5-run-the-pipeline",children:(0,t.jsx)(e.strong,{children:"Step 5: Run the Pipeline"})}),"\n",(0,t.jsx)(e.p,{children:"The pipeline is executed with a query. The pre-processing step cleans the query, the aggregation step combines responses from agents, and the post-processing step refines the output."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'query = "What are the main causes and solutions for climate change?"\nresults = pipeline.run({"raw_input": query})\n\n# Display the results\nprint("\\nAggregated Response:", results["aggregated_response"])\nprint("\\nActionable Insights:", results["insights"])\n'})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"expected-output",children:(0,t.jsx)(e.strong,{children:"Expected Output"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-plaintext",children:"Aggregated Response:\nClimate change is caused by greenhouse gas emissions, deforestation, and industrial pollution. It leads to global warming, rising sea levels, and extreme weather events.\n\nActionable Insights:\n1. Transition to renewable energy sources.\n2. Implement reforestation programs and protect natural habitats.\n3. Enforce stricter regulations on industrial emissions.\n"})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"why-this-is-powerful",children:(0,t.jsx)(e.strong,{children:"Why This is Powerful"})}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Seamless Integration"}),":"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"LangSwarm integrates naturally into LangChain pipelines without requiring custom wrappers."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Collaborative AI"}),":"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Aggregates diverse outputs from multiple agents for a comprehensive response."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Scalability"}),":"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Easily extend the pipeline by adding more agents or additional steps."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"With LangSwarm\u2019s LangChain-compatible chains, you can effortlessly integrate multi-agent collaboration into your existing LangChain workflows. This tutorial demonstrates how to create advanced pipelines for powerful and scalable AI solutions."})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>o});var a=i(6540);const t={},s=a.createContext(t);function r(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);