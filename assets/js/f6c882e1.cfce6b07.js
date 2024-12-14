"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[958],{773:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"Tools/consensus-tool","title":"LangSwarmConsensusTool","description":"---","source":"@site/docs/Tools/consensus-tool.md","sourceDirName":"Tools","slug":"/Tools/consensus-tool","permalink":"/LangSwarm/Tools/consensus-tool","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":92,"frontMatter":{"title":"LangSwarmConsensusTool","sidebar_position":92},"sidebar":"defaultSidebar","previous":{"title":"LangSwarmBranchingTool","permalink":"/LangSwarm/Tools/branching-tool"},"next":{"title":"LangSwarmRoutingTool","permalink":"/LangSwarm/Tools/routing-tool"}}');var r=e(4848),i=e(8453);const l={title:"LangSwarmConsensusTool",sidebar_position:92},t="LangSwarmConsensusTool",a={},c=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"<strong>Purpose</strong>",id:"purpose",level:2},{value:"<strong>Class Definition</strong>",id:"class-definition",level:2},{value:"<strong>Key Components</strong>",id:"key-components",level:2},{value:"<strong>Usage</strong>",id:"usage",level:2},{value:"<strong>Customization</strong>",id:"customization",level:2},{value:"<strong>Use Cases</strong>",id:"use-cases",level:2},{value:"<strong>Comparison with Other Tools</strong>",id:"comparison-with-other-tools",level:2}];function d(n){const s={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"langswarmconsensustool",children:"LangSwarmConsensusTool"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"overview",children:(0,r.jsx)(s.strong,{children:"Overview"})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"LangSwarmConsensusTool"})," is a LangChain-compatible tool designed to achieve consensus among multiple Large Language Model (LLM) agents for a given query. It uses the ",(0,r.jsx)(s.code,{children:"LLMConsensus"})," class to aggregate opinions, reconcile differences, and produce a unified, consensus-driven result."]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"purpose",children:(0,r.jsx)(s.strong,{children:"Purpose"})}),"\n",(0,r.jsxs)(s.p,{children:["The primary purpose of the ",(0,r.jsx)(s.code,{children:"LangSwarmConsensusTool"})," is:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Consensus Building"}),": To enable developers to use consensus-building as a modular step in LangChain workflows."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Pipeline Integration"}),": To seamlessly integrate consensus mechanisms into broader LangChain pipelines."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Flexibility"}),": To allow configuration of the consensus-building process through additional parameters."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"class-definition",children:(0,r.jsx)(s.strong,{children:"Class Definition"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:'class LangSwarmConsensusTool(Tool):\n    def __init__(self, agents, **kwargs):\n        """\n        Initializes the LangSwarmConsensusTool.\n\n        Parameters:\n        - agents (list): List of agents to use in the consensus process.\n        - kwargs: Additional parameters for the LLMConsensus class.\n        """\n        self.consensus = LLMConsensus(clients=agents, **kwargs)\n        super().__init__(\n            name="LangSwarm Consensus",\n            func=self.run,\n            description="A tool to reach consensus among multiple agents for a given query."\n        )\n\n    def run(self, query):\n        """\n        Executes the consensus workflow with the given query.\n\n        Parameters:\n        - query (str): The query to process.\n\n        Returns:\n        - str: The consensus result.\n        """\n        self.consensus.query = query\n        return self.consensus.run()\n'})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"key-components",children:(0,r.jsx)(s.strong,{children:"Key Components"})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:[(0,r.jsx)(s.code,{children:"__init__"})," Method"]})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Initializes the tool with a list of agents and additional parameters."}),"\n",(0,r.jsxs)(s.li,{children:["Creates an instance of the ",(0,r.jsx)(s.code,{children:"LLMConsensus"})," class to manage the consensus-building process."]}),"\n",(0,r.jsxs)(s.li,{children:["Parameters:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"agents"}),": A list of LLM agents contributing to the consensus process."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"kwargs"}),": Optional parameters passed to configure the ",(0,r.jsx)(s.code,{children:"LLMConsensus"})," class."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Inherits from the ",(0,r.jsx)(s.code,{children:"Tool"})," class, defining the tool's name and description."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:[(0,r.jsx)(s.code,{children:"run"})," Method"]})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Executes the consensus workflow."}),"\n",(0,r.jsxs)(s.li,{children:["Parameters:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"query"}),": The query string to be processed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Workflow:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Assigns the query to the ",(0,r.jsx)(s.code,{children:"LLMConsensus"})," instance."]}),"\n",(0,r.jsxs)(s.li,{children:["Calls the ",(0,r.jsx)(s.code,{children:"run"})," method of ",(0,r.jsx)(s.code,{children:"LLMConsensus"})," to generate a consensus result."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.li,{children:"Returns the consensus result as a string."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"usage",children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Initialization"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"from langswarm.swarm.consensus import LLMConsensus\nfrom mymodule import LangSwarmConsensusTool\n\n# Example list of agents (LLM clients)\nagents = [agent1, agent2, agent3]\n\n# Initialize the LangSwarmConsensusTool\ntool = LangSwarmConsensusTool(agents=agents, param1=value1, param2=value2)\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Execution"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:'# Input query\nquery = "What is the most important factor for economic growth?"\n\n# Get the consensus result\nresult = tool.run(query)\nprint("Consensus Result:", result)\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Integration with LangChain Workflows"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["The ",(0,r.jsx)(s.code,{children:"LangSwarmConsensusTool"})," can be directly used as a tool in LangChain workflows."]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:'from langchain.agents import initialize_agent\n\ntools = [tool]\nagent = initialize_agent(tools, llm, agent="zero-shot-react-description")\n\n# Run the agent with the tool\nresult = agent.run("How should we prioritize renewable energy policies?")\nprint(result)\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"customization",children:(0,r.jsx)(s.strong,{children:"Customization"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Adding Custom Parameters"}),": Additional parameters can be passed to ",(0,r.jsx)(s.code,{children:"LLMConsensus"})," during initialization to customize the consensus logic."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Extending the Tool"}),": Subclass ",(0,r.jsx)(s.code,{children:"LangSwarmConsensusTool"})," to add functionality such as pre- or post-processing of results or adapting the consensus logic for specific use cases."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"use-cases",children:(0,r.jsx)(s.strong,{children:"Use Cases"})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Decision Making"}),":","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Use consensus to determine the most supported solution among multiple agents."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Validation"}),":","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Verify the accuracy or agreement of responses from multiple agents before presenting a result."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Conflict Resolution"}),":","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Resolve differing outputs by finding the most consistent or agreed-upon response."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Collaborative Problem-Solving"}),":","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Aggregate insights from diverse agents to tackle complex problems."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"comparison-with-other-tools",children:(0,r.jsx)(s.strong,{children:"Comparison with Other Tools"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"LangSwarmConsensusTool"}),": Focuses on achieving a unified result through consensus among agents."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"LangSwarmBranchingTool"}),": Generates diverse responses without necessarily reconciling them into a single output."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"LangSwarmAggregationTool"}),": Merges responses into a cohesive output, but without requiring strict agreement or consensus."]}),"\n"]})]})}function h(n={}){const{wrapper:s}={...(0,i.R)(),...n.components};return s?(0,r.jsx)(s,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,s,e)=>{e.d(s,{R:()=>l,x:()=>t});var o=e(6540);const r={},i=o.createContext(r);function l(n){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function t(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),o.createElement(i.Provider,{value:s},n.children)}}}]);