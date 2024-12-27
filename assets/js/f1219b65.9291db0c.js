"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[161],{8223:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"Interface/templates","title":"LangSwarmTemplates","description":"---","source":"@site/docs/Interface/templates.md","sourceDirName":"Interface","slug":"/Interface/templates","permalink":"/LangSwarm/Interface/templates","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":800,"frontMatter":{"title":"LangSwarmTemplates","sidebar_position":800},"sidebar":"defaultSidebar","previous":{"title":"AgentWrapper","permalink":"/LangSwarm/Features/agent-wrapper"},"next":{"title":"LlamaIndex","permalink":"/LangSwarm/Intergrations/llama_index_integration"}}');var t=s(4848),i=s(8453);const l={title:"LangSwarmTemplates",sidebar_position:800},a="LangSwarmTemplates",o={},c=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"<strong>Class Definition</strong>",id:"class-definition",level:2},{value:"<strong>Templates</strong>",id:"templates",level:2},{value:"<strong>1. Consensus Template</strong>",id:"1-consensus-template",level:3},{value:"<strong>2. Voting Template</strong>",id:"2-voting-template",level:3},{value:"<strong>3. Branching Template</strong>",id:"3-branching-template",level:3},{value:"<strong>4. Aggregation Template</strong>",id:"4-aggregation-template",level:3},{value:"<strong>Benefits of Using Templates</strong>",id:"benefits-of-using-templates",level:2},{value:"<strong>Extensibility</strong>",id:"extensibility",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"langswarmtemplates",children:"LangSwarmTemplates"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:(0,t.jsx)(n.strong,{children:"Overview"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"LangSwarmTemplates"})," class provides predefined templates for common workflows within LangSwarm, such as ",(0,t.jsx)(n.strong,{children:"consensus"}),", ",(0,t.jsx)(n.strong,{children:"voting"}),", ",(0,t.jsx)(n.strong,{children:"branching"}),", and ",(0,t.jsx)(n.strong,{children:"aggregation"}),". These templates simplify the implementation of workflows by abstracting boilerplate code and offering a high-level interface for interacting with LangSwarm modules."]}),"\n",(0,t.jsx)(n.p,{children:"Each template initializes the appropriate pipeline and processes the input query to produce the desired result, enabling plug-and-play functionality for developers."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"class-definition",children:(0,t.jsx)(n.strong,{children:"Class Definition"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class LangSwarmTemplates:\n    """\n    Predefined templates for common LangSwarm workflows.\n    """\n\n    @staticmethod\n    def consensus_template(agents, query):\n        """\n        Predefined template for consensus workflow.\n\n        Parameters:\n        - agents (list): List of agents.\n        - query (str): Query string.\n\n        Returns:\n        - str: Consensus result.\n        """\n        pipeline = LangSwarm.create_pipeline(workflow="consensus", agents=agents)\n        return pipeline.run(query)\n\n    @staticmethod\n    def voting_template(agents, query):\n        """\n        Predefined template for voting workflow.\n\n        Parameters:\n        - agents (list): List of agents.\n        - query (str): Query string.\n\n        Returns:\n        - tuple: Voting result, group size, and list of responses.\n        """\n        pipeline = LangSwarm.create_pipeline(workflow="voting", agents=agents)\n        return pipeline.run(query)\n\n    @staticmethod\n    def branching_template(agents, query):\n        """\n        Predefined template for branching workflow.\n\n        Parameters:\n        - agents (list): List of agents.\n        - query (str): Query string.\n\n        Returns:\n        - list: List of responses from the agents.\n        """\n        pipeline = LangSwarm.create_pipeline(workflow="branching", agents=agents)\n        return pipeline.run(query)\n\n    @staticmethod\n    def aggregation_template(agents, query):\n        """\n        Predefined template for aggregation workflow.\n\n        Parameters:\n        - agents (list): List of agents.\n        - query (str): Query string.\n\n        Returns:\n        - str: Aggregated result.\n        """\n        pipeline = LangSwarm.create_pipeline(workflow="aggregation", agents=agents)\n        return pipeline.run(query)\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"templates",children:(0,t.jsx)(n.strong,{children:"Templates"})}),"\n",(0,t.jsx)(n.h3,{id:"1-consensus-template",children:(0,t.jsx)(n.strong,{children:"1. Consensus Template"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"consensus template"})," achieves consensus among multiple agents by aggregating their responses into a unified output."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Parameters"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"agents (list)"}),": List of agents contributing to the consensus process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"query (str)"}),": The query string to be processed."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"str"}),": The consensus result."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from mymodule import LangSwarmTemplates\n\nagents = [AgentA(), AgentB(), AgentC()]\nresult = LangSwarmTemplates.consensus_template(agents, "What are the benefits of AI?")\nprint("Consensus Result:", result)\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"2-voting-template",children:(0,t.jsx)(n.strong,{children:"2. Voting Template"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"voting template"})," enables decision-making by tallying responses from multiple agents and determining the most popular response."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Parameters"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"agents (list)"}),": List of agents participating in the voting process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"query (str)"}),": The query string to be processed."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tuple"}),": A tuple containing:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"voting_result (str)"}),": The most popular response."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"group_size (int)"}),": The number of agents involved."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"responses (list)"}),": A list of all responses from the agents."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from mymodule import LangSwarmTemplates\n\nagents = [AgentA(), AgentB(), AgentC()]\nvoting_result, group_size, responses = LangSwarmTemplates.voting_template(\n    agents, "What is the best renewable energy source?"\n)\nprint("Voting Result:", voting_result)\nprint("Group Size:", group_size)\nprint("Responses:", responses)\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"3-branching-template",children:(0,t.jsx)(n.strong,{children:"3. Branching Template"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"branching template"})," generates diverse responses from multiple agents for a single query, enabling exploration of varied perspectives or ideas."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Parameters"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"agents (list)"}),": List of agents contributing to the branching process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"query (str)"}),": The query string to be processed."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"list"}),": A list of responses from the agents."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from mymodule import LangSwarmTemplates\n\nagents = [AgentA(), AgentB(), AgentC()]\nbranching_results = LangSwarmTemplates.branching_template(\n    agents, "Suggest creative business ideas in the tech industry."\n)\nprint("Branching Results:", branching_results)\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"4-aggregation-template",children:(0,t.jsx)(n.strong,{children:"4. Aggregation Template"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"aggregation template"})," merges responses from multiple agents into a single, cohesive result, synthesizing diverse inputs into a unified output."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Parameters"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"agents (list)"}),": List of agents contributing to the aggregation process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"query (str)"}),": The query string to be processed."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"str"}),": The aggregated result."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from mymodule import LangSwarmTemplates\n\nagents = [AgentA(), AgentB(), AgentC()]\naggregated_result = LangSwarmTemplates.aggregation_template(\n    agents, "Summarize the benefits of renewable energy."\n)\nprint("Aggregated Result:", aggregated_result)\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"benefits-of-using-templates",children:(0,t.jsx)(n.strong,{children:"Benefits of Using Templates"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Simplicity"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reduces boilerplate code and setup complexity by providing ready-to-use workflows."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Reusability"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Encourages modularity by abstracting common workflows into reusable templates."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Customizability"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Easily extended or modified for specific use cases by adding parameters or altering the workflow logic."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Time-Saving"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Developers can quickly integrate LangSwarm workflows into projects without needing in-depth knowledge of underlying modules."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"extensibility",children:(0,t.jsx)(n.strong,{children:"Extensibility"})}),"\n",(0,t.jsx)(n.p,{children:"To add a new workflow template:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Implement the desired workflow in ",(0,t.jsx)(n.code,{children:"LangSwarm.create_pipeline"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Define a new static method in ",(0,t.jsx)(n.code,{children:"LangSwarmTemplates"})," that calls ",(0,t.jsx)(n.code,{children:"create_pipeline"})," with the appropriate parameters."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'@staticmethod\ndef new_template(agents, query, **kwargs):\n    pipeline = LangSwarm.create_pipeline(workflow="new_workflow", agents=agents, **kwargs)\n    return pipeline.run(query)\n'})})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var r=s(6540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);