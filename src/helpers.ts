
export interface users {
    username : string;
    password : string;
}

export interface dataOfQuestion{
    firstQuestion : string;
}
export interface reponse{
    rep1 : string;
    repChoix : string;
}

export interface dataToSave{
    first : number;
    commentaire : string;
    email : string;
    questions : dataOfQuestion[];
    reponse : reponse[];
}


export const dataToSave: dataToSave[] = [
  {
    commentaire: "",
    first: 1,
    email: "",
    questions: [
      {
        firstQuestion: "I. At which level is your network change process?",
      },
      {
        firstQuestion:
          "II.  What level of  transformation has been initiated or done  regading the : design, integration, change & monitoring,",
      },
      {
        firstQuestion: "III.At what level is your DevOps organization/approach",
      },
    ],
    reponse: [
      {
        rep1: "Mostly manual process based on chaining works from siloed entities (suppliers, planning, acceptance (test, integration), software change, readiness management with operation). No mutualization",
        repChoix: "",
      },
      {
        rep1: "1 Set up Devops approach (design/engineering and operation works together) with security by design approach This assumes maturity at data governance level, in particular for security aspects",
        repChoix: "",
      },
      {
        rep1: "2 Setup automation process internally and with vendors. No more manual exchanges with vendors.",
        repChoix: "",
      },
      {
        rep1: "3 Setup automation process for testing and deployments",
        repChoix: "",
      },
      {
        rep1: "1 Devops Team organized, and security process set up ",
        repChoix: "",
      },
      {
        rep1: "2 DevSecOps approach used in some place (with 'basic'* necessary security) *'basic' is rather reactive while 'advanced' (next level) is proactive and assisted by AI",
        repChoix: "",
      },
      {
        rep1: "2 DevSecOps approach used in some place (with 'basic'* necessary security) *'basic' is rather reactive while 'advanced' (next level) is proactive and assisted by AI",
        repChoix: "",
      },
      {
        rep1: "2 Industrial DevSecOps ('advanced' security) for all non-legacy technologies with full shiftleft* (design, engineering, change, operation monitoring)     *This assumes maturity on the 'People&Skills' domain",
        repChoix: "",
      },
    ],
  },
  {
    commentaire: "",
    first: 2,
    email: "",
    questions: [
      {
        firstQuestion:
          "Regarding Network configuration and sofware-change/release and LLD, what enablers/tools do you use to manage your activity:",
      },
      {
        firstQuestion: "I.  for Ci/Cd pipeline",
      },
      {
        firstQuestion:
          "II.  for configuration (link with fullfillment / provisionning)",
      },
      {
        firstQuestion: "III.  for sofware-changes/releases",
      },
    ],
    reponse: [
      {
        rep1: "Manual, tool-assisted by Vendor tools for both configuration and sofware-change activities",
        repChoix: "",
      },
      {
        rep1: "qertqeeqer",
        repChoix: "",
      },
      {
        rep1: "Defined integration teams to either manage the function inyternally or with  the partner following Orange defined way & integration tools guidlines",
        repChoix: "",
      },
      {
        rep1: "Start to use some Ci/Cd/Ct tools as wellas security tools such as IAM",
        repChoix: "",
      },
      {
        rep1: " Introduce some work flow tools to automate onfiguration (such as NSO, or Ansible/Camunda) from remote",
        repChoix: "",
      },
      {
        rep1: "Introduce some work flow tools to automate all sofware-changes/releases from remote (working with suppliers)",
        repChoix: "",
      },
      {
        rep1: "Operation team (NOC) have ability to use automated deployment pipe (including test and integration) to introduce their policies / rules from NOC (monitoring) for simple closed loops, in the framework of DevOps process",
        repChoix: "",
      },
      {
        rep1: "Integratio teams are  operationnal with Ci/Cd/Ct pipeline available for end to end with suppliers and with production",
        repChoix: "",
      },
      {
        rep1: "Enablers to support any kind of infrastructure for network workloads (agnosticity) and 'basic' security",
        repChoix: "",
      },
      {
        rep1: "Tools for automated Fullfilment (provisionning) for xNFs and connectivity,  first step of Zero Touch Fulfillment. All conf / softchange-release done with scripts, some scripts are intent driven ",
        repChoix: "",
      },
      {
        rep1: "There are tools to test Readiness (first step of Zero Touch readiness)",
        repChoix: "",
      },
      {
        rep1: "Operation team (NOC) have ability to use automated deployment pipe (including test and integration) to introduce their policies / rules from NOC (monitoring) to introduce  dynamic rules for more advanced dynamic loops including some non-standard configuration use cases, in the framework of DevOps process",
        repChoix: "",
      },
      {
        rep1: "Integration teams are fully operational with Ci/Cd/Ct pipeline that can be used every day, and using  advanced  AI based tools",
        repChoix: "",
      },
      {
        rep1: "Enablers to support 'advanced' security (proactive, AI assisted)",
        repChoix: "",
      },
      {
        rep1: "Use of collected data and AI to predict relevant network behaviour for Fullfillment (for instance predicting an increase of traffic in a B2B slice and automatically provisionning the slice)* *This implies the operational use of AI and the maturity on the 'Data' domain",
        repChoix: "",
      },
      {
        rep1: "Use of collected data and AI to predict network behaviour for Readiness (for instance predicting an increase of traffic in some network areas)* *This implies the operational use of AI and the maturity on the 'Data' domain",
        repChoix: "",
      },
      {
        rep1: "Operation team (NOC) does systematic deployment of active closed loops including all non-standard configuration use cases, useing automated deployment pipes (including test and integration)",
        repChoix: "",
      },
    ],
  },
  {
    commentaire: "",
    first: 3,
    email: "",
    questions: [
      {
        firstQuestion: "What describes best, the level of Automation coverage:",
      },
      {
        firstQuestion: "I.   On integration",
      },
      {
        firstQuestion: "II.  On configuration",
      },
      {
        firstQuestion: "III. On sofware-changes/releases",
      },
    ],
    reponse: [
      {
        rep1: "Manual with some assistance from vendors and with vendor tools",
        repChoix: "",
      },
      {
        rep1: "1 LCM automation chain setup for every xNFs for test and deployment ",
        repChoix: "",
      },
      {
        rep1: "2 Integration tests fully automated and triggered by CI/CD pipelines and with artifacts received automatically from vendors",
        repChoix: "",
      },
      {
        rep1: "3 Configuration update all done remotely (with the use of preconfigured templates that can be filled manually or sometimes with manual commandes)",
        repChoix: "",
      },
      {
        rep1: "4 Software-change/Release update done remotely without physical presence on the site",
        repChoix: "",
      },
      {
        rep1: "1 LCM automation is fully operationnal, with end to end Ci/Cd pipeline including deployment",
        repChoix: "",
      },
      {
        rep1: "2 Security patches automatically updated",
        repChoix: "",
      },
      {
        rep1: "3 LCM soft-change automatically applied for all control functions with Tooling Zone",
        repChoix: "",
      },
      {
        rep1: "4 Configuration update all done with scripts with some network awareness (adapting to network state and local conditions)",
        repChoix: "",
      },
      {
        rep1: "5 Zero touch readiness started (tools used operationnally)",
        repChoix: "",
      },
      {
        rep1: "1 LCM automation is fully operational with agile (one day) Ci/Cd pipelines and unique at group level",
        repChoix: "",
      },
      {
        rep1: "2 Implement safeguards to control configuration changes made with AI",
        repChoix: "",
      },
      {
        rep1: "3 Configuration update automated with prediction on network behaviour (ability to react automatically on predicted events for instance with autoscaling): true Zero Touch Fullfilment",
        repChoix: "",
      },
      {
        rep1: "4 True Zero Touch readiness",
        repChoix: "",
      },
    ],
  },
  {
    commentaire: "",
    first: 4,
    email: "",
    questions: [
      {
        firstQuestion: "Regarding Fault monitoring & Management, what stage best describes your activity process ?",
      },
      {
        firstQuestion: "What process transformation has been initiated or done to mananage equipments ?",
      },
      
    ],
    reponse: [
      {
        rep1: "Existence of service management centers and technical support centers",
        repChoix: "",
      },
      {
        rep1: "1 Design / Engineering start to work on fault handling (shiftleft with operation working on design / engineering).",
        repChoix: "",
      },
      {
        rep1: "2 Knowledge of equipment NBI (North Bound Interface) management capabilities or Service level alarms (for SMC): this is necessary to perform closed loops, knowing what management actions are possible",
        repChoix: "",
      },
      {
        rep1: "1 SRE and NRE implementation started (specific teams working on network reliability with development)",
        repChoix: "",
      },
      {
        rep1: "2 All fault aspects worked with Design / Engineering, start some AI (this is the shiftleft effect). AI is used to look at information related to fault to understand them (diagnostic), to propose policies with ML",
        repChoix: "",
      },
      {
        rep1: "1 Full SRE and NRE efficiency: operationnal for recent or new technologies",
        repChoix: "",
      },
      {
        rep1: "2 Industrial and global approach using data and AI to work on prediction (data collection organized, AI environment available…) across all network activities (Design, Planning, Engineering, Change, Operations, Monitoring)",
        repChoix: "",
      },
      
    ],
  },

  {
    commentaire: "",
    first: 5,
    email: "",
    questions: [
      {
        firstQuestion: "What enablers/tools do you use to achieve your activity ?",
      },
         ],
    reponse: [
      {
        rep1: "",
        repChoix: "Inventory tools exist",
      },
      {
        rep1: "Service assurance tools (alarms from equipments, or customer related) provided by corresponding vendors",
        repChoix: "",
      },
      {
        rep1: "1 Some closed loops (interconnecting to NBIs) and synchronized with inventory introducing dynamicity in Inventory (inventory quality should be acceptable)",
        repChoix: "",
      },
      {
        rep1: "2 Service assurance with some alarm correlation done operating at agreed performance levels",
        repChoix: "",
      },
      {
        rep1: "3 Diagnostic tools to help RCA (Root Cause Analysis)",
        repChoix: "",
      },
      {
        rep1: "1 Use of advanced suite tools (such as E// Operation Engine, AUTIN or Advanced NSSX) with full service assurance (correlation accross several domains)",
        repChoix: "",
      },
      {
        rep1: "2 First step of intent-based approach (automation of some intents to detailed scripts of orders)",
        repChoix: "",
      },
      {
        rep1: "3 Inventory (reliable and dynamic) sufficient for plugging data analysis with awareness of network information (inventory is dynamic and reflects network situation)",
        repChoix: "",
      },
      {
        rep1: "1 Full AI and data infrastructure available",
        repChoix: "",
      },
      {
        rep1: "2 Data democracy fully implemented allowing predictive approach",
        repChoix: "",
      },
      {
        rep1: "3 Inventory is adapted to allow making decision based on prediction / active closed loops",
        repChoix: "",
      },
      
    ],
  },
  {
    commentaire: "",
    first : 6,
    email: "",
    questions: [
      {
        firstQuestion: "What best describes the Automation coverage: ",
      },
      {
        firstQuestion: "I.On fault detection & identification",
      },
      {
        firstQuestion: "II.On problem analysis & root cause identification ",
      },
      {
        firstQuestion: "III.On automatic Work Orders creation",
      },
      {
        firstQuestion: "IV.On closed loops",
      },
    ],
    reponse: [
      {
        rep1: "Front Office 24/7 assisted by preconfigured rules (simple scripts with simple workarounds)",
        repChoix: "",
      },
      {
        rep1: "Back office for some Problem Management",
        repChoix: "",
      },
      {
        rep1: "1 Sufficient filtering of alarms (so that it can be handled by few persons)",
        repChoix: "",
      },
      {
        rep1: "2 Some automation UC with simple closed loops (with data collection to generate action): static rules, policies",
        repChoix: "",
      },
      {
        rep1: "3 Some work order auto created (for Customer or Network intervention)",
        repChoix: "",
      },
      {
        rep1: "4 Some automation for helping diagnostic for RCA (Root Cause Analysis)",
        repChoix: "",
      },
      {
        rep1: "1 Ability to define specific faults (identified with the use of AI/ML on some collected data: e.g., OSP sleeping cells Use Case e.g., customer experience index). Some alarm may be security related",
        repChoix: "",
      },
      {
        rep1: "2 Advanced and dynamic rules with the ability to self react to environment change to match SLA",
        repChoix: "",
      },
      {
        rep1: "3 Work order auto created (in an end-to-end Fault Managment closed loop) and Correlation/filtering to prevent redundant Tickets /Work orders",
        repChoix: "",
      },
      {
        rep1: "4  Start of Zero touch assurance (by reducing number of 24/7 positions)",
        repChoix: "",
      },
      {
        rep1: "1 Fault prediction, across networks, working in synch with advanced Security Operation Centers for cyberresilience",
        repChoix: "",
      },
      {
        rep1: "2 Predictive approach with active closed loops",
        repChoix: "",
      },
      {
        rep1: "3 Proactive operation (rectify before fault occur)",
        repChoix: "",
      },
      {
        rep1: "4 Full zero touch assurance (no 24/7)",
        repChoix: "",
      },
    ],
  }
  ];