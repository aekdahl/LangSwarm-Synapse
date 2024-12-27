"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[437],{705:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"llm-voting","title":"Multi-Agent Voting","description":"Overview","source":"@site/docs/llm-voting.md","sourceDirName":".","slug":"/llm-voting","permalink":"/LangSwarm/llm-voting","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Multi-Agent Voting","sidebar_position":5},"sidebar":"defaultSidebar","previous":{"title":"Dynamic Routing","permalink":"/LangSwarm/llm-routing"},"next":{"title":"AggregationChain","permalink":"/LangSwarm/Chains/aggregation-chain"}}');var t=s(4848),i=s(8453);const o={title:"Multi-Agent Voting",sidebar_position:5},l="Multi-Agent Voting",a={},d=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"<strong>Key Features</strong>",id:"key-features",level:2},{value:"<strong>API Reference</strong>",id:"api-reference",level:2},{value:"<strong>Class: <code>LLMVoting</code></strong>",id:"class-llmvoting",level:3},{value:"<strong>Initialization</strong>",id:"initialization",level:4},{value:"<strong>Methods</strong>",id:"methods",level:3},{value:"<strong><code>run()</code></strong>",id:"run",level:4},{value:"<strong>Examples</strong>",id:"examples",level:2},{value:"<strong>Basic Example</strong>",id:"basic-example",level:3},{value:"<strong>Advanced Example: Custom Thresholds</strong>",id:"advanced-example-custom-thresholds",level:3},{value:"<strong>How It Works</strong>",id:"how-it-works",level:2},{value:"<strong>Best Practices</strong>",id:"best-practices",level:2},{value:"<strong>Use Cases</strong>",id:"use-cases",level:2},{value:"<strong>Key Advantages</strong>",id:"key-advantages",level:2},{value:"<strong>Future Enhancements</strong>",id:"future-enhancements",level:2}];function c(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"multi-agent-voting",children:"Multi-Agent Voting"})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:(0,t.jsx)(n.strong,{children:"Overview"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"LLMVoting"})," class in LangSwarm enables decision-making by evaluating outputs from multiple agents and selecting the most popular or agreed-upon response through a voting mechanism. It is ideal for scenarios requiring collaborative validation, such as content moderation, consensus-building, or opinion polling."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"key-features",children:(0,t.jsx)(n.strong,{children:"Key Features"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Collaborative Decision-Making"}),":",(0,t.jsx)(n.br,{}),"\n","Aggregates outputs from multiple agents and determines the best response based on a voting mechanism."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Flexible Voting Logic"}),":",(0,t.jsx)(n.br,{}),"\n","Supports customization of voting thresholds and scoring criteria."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Multi-Agent Support"}),":",(0,t.jsx)(n.br,{}),"\n","Works seamlessly with agents from LangChain, Hugging Face, OpenAI, or custom implementations via the ",(0,t.jsx)(n.code,{children:"AgentWrapper"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LangChain-Compatible"}),":",(0,t.jsx)(n.br,{}),"\n","Can be integrated into LangChain workflows for pre- and post-processing."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"api-reference",children:(0,t.jsx)(n.strong,{children:"API Reference"})}),"\n",(0,t.jsx)(n.h3,{id:"class-llmvoting",children:(0,t.jsxs)(n.strong,{children:["Class: ",(0,t.jsx)(n.code,{children:"LLMVoting"})]})}),"\n",(0,t.jsx)(n.p,{children:"Facilitates voting-based decision-making among multiple agents."}),"\n",(0,t.jsx)(n.h4,{id:"initialization",children:(0,t.jsx)(n.strong,{children:"Initialization"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"LLMVoting(query, clients, threshold=0.75, verbose=False)\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"query"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"str"})}),(0,t.jsx)(n.td,{children:"The input query to be processed by the agents."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"clients"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"list"})}),(0,t.jsx)(n.td,{children:"A list of agents participating in the voting process."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"threshold"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"float"})}),(0,t.jsxs)(n.td,{children:["The similarity threshold for determining agreement. Default is ",(0,t.jsx)(n.code,{children:"0.75"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"verbose"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"bool"})}),(0,t.jsxs)(n.td,{children:["If ",(0,t.jsx)(n.code,{children:"True"}),", enables detailed logging. Default is ",(0,t.jsx)(n.code,{children:"False"}),"."]})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"methods",children:(0,t.jsx)(n.strong,{children:"Methods"})}),"\n",(0,t.jsx)(n.h4,{id:"run",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"run()"})})}),"\n",(0,t.jsx)(n.p,{children:"Executes the voting workflow, querying all agents, evaluating their outputs, and selecting the most agreed-upon response."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tuple"}),": The winning response, its agreement score, and the total number of votes received."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:(0,t.jsx)(n.strong,{children:"Examples"})}),"\n",(0,t.jsx)(n.h3,{id:"basic-example",children:(0,t.jsx)(n.strong,{children:"Basic Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from langswarm.swarm import LLMVoting\nfrom langswarm.wrappers import AgentWrapper\nfrom langchain.llms import OpenAI\n\n# Step 1: Create and wrap agents\nagent1 = AgentWrapper(agent=OpenAI(model="gpt-4"), is_conversational=True)\nagent2 = AgentWrapper(agent=OpenAI(model="gpt-3.5-turbo"), is_conversational=True)\nagent3 = AgentWrapper(agent=OpenAI(model="gpt-3.5-turbo-instruct"), is_conversational=True)\n\n# Step 2: Initialize LLMVoting with the agents\nquery = "What are the benefits of renewable energy?"\nvoting_swarm = LLMVoting(query=query, clients=[agent1, agent2, agent3])\n\n# Step 3: Run the voting workflow\nwinning_response, agreement_score, votes = voting_swarm.run()\n\n# Display the results\nprint("Winning Response:", winning_response)\nprint("Agreement Score:", agreement_score)\nprint("Total Votes:", votes)\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"advanced-example-custom-thresholds",children:(0,t.jsx)(n.strong,{children:"Advanced Example: Custom Thresholds"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from langswarm.swarm import LLMVoting\nfrom langswarm.wrappers import AgentWrapper\nfrom transformers import pipeline\n\n# Step 1: Create and wrap agents\nhuggingface_agent = AgentWrapper(agent=pipeline("text-generation", model="gpt2"), is_conversational=False)\n\nopenai_agent = AgentWrapper(agent="openai_gpt3", is_conversational=True)  # Assuming an OpenAI agent wrapper\n\n# Step 2: Initialize LLMVoting with a custom threshold\nquery = "What are the challenges of remote work?"\nvoting_swarm = LLMVoting(query=query, clients=[huggingface_agent, openai_agent], threshold=0.8, verbose=True)\n\n# Step 3: Run the voting workflow\nwinning_response, agreement_score, votes = voting_swarm.run()\n\n# Display the results\nprint("Winning Response:", winning_response)\nprint("Agreement Score:", agreement_score)\nprint("Total Votes:", votes)\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works",children:(0,t.jsx)(n.strong,{children:"How It Works"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Querying Agents"}),":",(0,t.jsx)(n.br,{}),"\n","All agents in the ",(0,t.jsx)(n.code,{children:"clients"})," list are queried with the provided input."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Evaluating Responses"}),":",(0,t.jsx)(n.br,{}),"\n","Responses are compared to calculate agreement scores based on cosine similarity or other metrics."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Selecting the Winner"}),":",(0,t.jsx)(n.br,{}),"\n","The response with the highest votes or agreement score is selected as the winning output."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returning Results"}),":",(0,t.jsx)(n.br,{}),"\n","The winning response, its agreement score, and the total number of votes are returned."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"best-practices",children:(0,t.jsx)(n.strong,{children:"Best Practices"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Diverse Agents"}),":",(0,t.jsx)(n.br,{}),"\n","Use a mix of agents to ensure a range of perspectives during the voting process."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Adjust Thresholds"}),":",(0,t.jsx)(n.br,{}),"\n","Tailor the similarity threshold to balance strictness and flexibility for agreement."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Enable Verbose Mode"}),":",(0,t.jsx)(n.br,{}),"\n","Use ",(0,t.jsx)(n.code,{children:"verbose=True"})," during development to understand the voting process in detail."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"use-cases",children:(0,t.jsx)(n.strong,{children:"Use Cases"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Content Moderation"}),":",(0,t.jsx)(n.br,{}),"\n","Validate and approve content collaboratively using multiple AI models."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Consensus Building"}),":",(0,t.jsx)(n.br,{}),"\n","Aggregate responses to select the most agreed-upon output for decision-making."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Opinion Polling"}),":",(0,t.jsx)(n.br,{}),"\n","Use multiple agents to simulate polling or collect opinions on specific topics."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"key-advantages",children:(0,t.jsx)(n.strong,{children:"Key Advantages"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Democratic Decision-Making"}),":",(0,t.jsx)(n.br,{}),"\n","Uses a voting mechanism to ensure the most agreed-upon response is selected."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Multi-Agent Collaboration"}),":",(0,t.jsx)(n.br,{}),"\n","Leverages the strengths of multiple agents for balanced decision-making."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Flexible and Configurable"}),":",(0,t.jsx)(n.br,{}),"\n","Supports customization of voting thresholds and evaluation metrics."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"future-enhancements",children:(0,t.jsx)(n.strong,{children:"Future Enhancements"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Weighted Voting"}),":",(0,t.jsx)(n.br,{}),"\n","Assign different weights to agents based on reliability or relevance."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Dynamic Threshold Adjustment"}),":",(0,t.jsx)(n.br,{}),"\n","Automatically adjust thresholds based on query type or agent performance."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Enhanced Metrics"}),":",(0,t.jsx)(n.br,{}),"\n","Incorporate additional evaluation metrics such as diversity or sentiment scoring."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"LLMVoting"})," class is a robust tool for decision-making in multi-agent workflows. By leveraging collaborative voting mechanisms, LangSwarm ensures the selection of high-quality, consensus-driven outputs."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(6540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);