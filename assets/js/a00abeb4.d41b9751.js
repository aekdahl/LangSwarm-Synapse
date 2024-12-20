"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[792],{3997:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>g,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"Logging/logging","title":"Logging in LangSwarm","description":"Overview","source":"@site/docs/Logging/logging.md","sourceDirName":"Logging","slug":"/Logging/","permalink":"/LangSwarm/Logging/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Logging in LangSwarm"},"sidebar":"defaultSidebar","previous":{"title":"LangSwarmTemplates","permalink":"/LangSwarm/Interface/templates"},"next":{"title":"LangSwarmMemoryLLM","permalink":"/LangSwarm/Memory/memory-llm"}}');var l=s(4848),o=s(8453);const i={title:"Logging in LangSwarm"},g="Logging in LangSwarm",t={},a=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"<strong>Key Features</strong>",id:"key-features",level:2},{value:"<strong>How Logging Works in LangSwarm</strong>",id:"how-logging-works-in-langswarm",level:2},{value:"<strong>API Reference</strong>",id:"api-reference",level:2},{value:"<strong>Default Logger Initialization</strong>",id:"default-logger-initialization",level:3},{value:"<strong>Custom Logger Support</strong>",id:"custom-logger-support",level:3},{value:"<strong>Examples</strong>",id:"examples",level:2},{value:"<strong>Using the Default Logger</strong>",id:"using-the-default-logger",level:3},{value:"<strong>Using a Custom Logger</strong>",id:"using-a-custom-logger",level:3},{value:"<strong>Customizing Logging Levels</strong>",id:"customizing-logging-levels",level:3},{value:"<strong>Best Practices</strong>",id:"best-practices",level:2},{value:"<strong>Key Advantages</strong>",id:"key-advantages",level:2},{value:"<strong>Future Enhancements</strong>",id:"future-enhancements",level:2}];function c(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"logging-in-langswarm",children:(0,l.jsx)(n.strong,{children:"Logging in LangSwarm"})})}),"\n",(0,l.jsx)(n.h2,{id:"overview",children:(0,l.jsx)(n.strong,{children:"Overview"})}),"\n",(0,l.jsxs)(n.p,{children:["LangSwarm provides a flexible and user-friendly logging mechanism to track the behavior of workflows and agents. It integrates seamlessly with Python's built-in ",(0,l.jsx)(n.code,{children:"logging"})," module and supports both centralized logging and custom loggers. This ensures that developers can debug, monitor, and evaluate LangSwarm workflows efficiently."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"key-features",children:(0,l.jsx)(n.strong,{children:"Key Features"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Centralized Logging"}),":",(0,l.jsx)(n.br,{}),"\n","A global logger is automatically available across all LangSwarm workflows."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Customizable Loggers"}),":",(0,l.jsx)(n.br,{}),"\n","Users can override the default logger with their own custom logger for advanced use cases."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Consistent Logging"}),":",(0,l.jsx)(n.br,{}),"\n","All LangSwarm classes, such as ",(0,l.jsx)(n.code,{children:"LLMConsensus"}),", ",(0,l.jsx)(n.code,{children:"LLMAggregation"}),", and ",(0,l.jsx)(n.code,{children:"LLMBranching"}),", integrate with the centralized logging mechanism."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Minimal Boilerplate"}),":",(0,l.jsx)(n.br,{}),"\n","No need to explicitly pass a logger unless customization is required."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"how-logging-works-in-langswarm",children:(0,l.jsx)(n.strong,{children:"How Logging Works in LangSwarm"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Default Logger"}),":",(0,l.jsx)(n.br,{}),"\n","LangSwarm initializes a global logger (",(0,l.jsx)(n.code,{children:"LangSwarmLogger"}),") that is used by default in all workflows."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Custom Logger Support"}),":",(0,l.jsx)(n.br,{}),"\n","Users can pass their own logger to any workflow or class if custom behavior is desired."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Fallback Mechanism"}),":",(0,l.jsx)(n.br,{}),"\n","If no logger is provided, the default logger is used automatically."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"api-reference",children:(0,l.jsx)(n.strong,{children:"API Reference"})}),"\n",(0,l.jsx)(n.h3,{id:"default-logger-initialization",children:(0,l.jsx)(n.strong,{children:"Default Logger Initialization"})}),"\n",(0,l.jsx)(n.p,{children:"LangSwarm automatically initializes a global logger during setup:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'import logging\n\n# Initialize the default logger\ndef initialize_logger():\n    logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")\n    return logging.getLogger("LangSwarmLogger")\n\nglobal_logger = initialize_logger()\n'})}),"\n",(0,l.jsx)(n.p,{children:"This logger is available globally within LangSwarm workflows."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"custom-logger-support",children:(0,l.jsx)(n.strong,{children:"Custom Logger Support"})}),"\n",(0,l.jsxs)(n.p,{children:["All LangSwarm workflows accept an optional ",(0,l.jsx)(n.code,{children:"logger"})," parameter for custom logging."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"class LLMConsensus:\n    def __init__(self, query, clients, logger=None):\n        self.query = query\n        self.clients = clients\n        self.logger = logger or global_logger  # Fallback to the global logger\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:(0,l.jsx)(n.strong,{children:"Examples"})}),"\n",(0,l.jsx)(n.h3,{id:"using-the-default-logger",children:(0,l.jsx)(n.strong,{children:"Using the Default Logger"})}),"\n",(0,l.jsx)(n.p,{children:"LangSwarm workflows automatically log to the default logger without requiring user intervention."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'from langswarm.swarm import LLMConsensus\n\n# Create and run a consensus workflow\nconsensus = LLMConsensus(query="What are the benefits of AI?", clients=[agent1, agent2])\nresponse = consensus.run()\n\n# Logs will automatically appear in the console\n# Example Log Output:\n# 2024-12-20 14:35:12 - INFO - Running consensus for query: What are the benefits of AI?\n# 2024-12-20 14:35:13 - INFO - Consensus response: Increased efficiency and productivity.\n'})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"using-a-custom-logger",children:(0,l.jsx)(n.strong,{children:"Using a Custom Logger"})}),"\n",(0,l.jsx)(n.p,{children:"You can create and pass a custom logger for advanced use cases, such as debugging or logging to a file."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'import logging\nfrom langswarm.swarm import LLMConsensus\n\n# Initialize a custom logger\ncustom_logger = logging.getLogger("CustomLogger")\ncustom_logger.setLevel(logging.DEBUG)\nhandler = logging.FileHandler("custom_logs.log")\nformatter = logging.Formatter("%(asctime)s - %(levelname)s - %(message)s")\nhandler.setFormatter(formatter)\ncustom_logger.addHandler(handler)\n\n# Use the custom logger in a workflow\nconsensus = LLMConsensus(query="What are the challenges of AI?", clients=[agent1, agent2], logger=custom_logger)\nresponse = consensus.run()\n\n# Logs will be written to the file "custom_logs.log"\n'})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"customizing-logging-levels",children:(0,l.jsx)(n.strong,{children:"Customizing Logging Levels"})}),"\n",(0,l.jsx)(n.p,{children:"You can customize the logging level (e.g., DEBUG, INFO, WARNING) globally or for individual loggers."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"# Set the global logger to debug level\nglobal_logger.setLevel(logging.DEBUG)\n\n# Adjust the logging level of the custom logger\ncustom_logger.setLevel(logging.WARNING)\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"best-practices",children:(0,l.jsx)(n.strong,{children:"Best Practices"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Leverage the Default Logger"}),":",(0,l.jsx)(n.br,{}),"\n","Use the default logger for simplicity and consistent logging across LangSwarm."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Use Custom Loggers for Advanced Use Cases"}),":",(0,l.jsx)(n.br,{}),"\n","Create custom loggers for scenarios requiring specific logging levels, destinations, or formats."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Enable Verbose Mode for Development"}),":",(0,l.jsx)(n.br,{}),"\n","Use verbose workflows and detailed logging during testing to identify issues."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Centralized Configuration"}),":",(0,l.jsx)(n.br,{}),"\n","Configure logging centrally to maintain consistency across the application."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"key-advantages",children:(0,l.jsx)(n.strong,{children:"Key Advantages"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Minimal Setup"}),":",(0,l.jsx)(n.br,{}),"\n","Automatic fallback to a global logger reduces boilerplate code."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Customizable"}),":",(0,l.jsx)(n.br,{}),"\n","Easily override the default logger for specific workflows or use cases."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Debug-Friendly"}),":",(0,l.jsx)(n.br,{}),"\n","Supports detailed logging to facilitate debugging and monitoring."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"future-enhancements",children:(0,l.jsx)(n.strong,{children:"Future Enhancements"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Integration with LangSmith"}),":",(0,l.jsx)(n.br,{}),"\n","Expand logging to include structured evaluations and analytics via LangSmith."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Visualization"}),":",(0,l.jsx)(n.br,{}),"\n","Add support for visualizing logs in dashboards or external tools like ELK Stack."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Custom Handlers"}),":",(0,l.jsx)(n.br,{}),"\n","Allow users to specify custom log handlers for more advanced logging destinations (e.g., cloud services, databases)."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>g});var r=s(6540);const l={},o=r.createContext(l);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function g(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);