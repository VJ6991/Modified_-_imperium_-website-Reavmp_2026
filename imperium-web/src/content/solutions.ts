import type { PillarId } from "./site";

export type Outcome = { title: string; how: string };
export type Faq = { q: string; a: string };

export type Solution = {
  slug: string;
  pillar: PillarId;
  name: string;
  navNote: string;
  headline: string;
  summary: string;
  metaDescription: string;
  problemTitle: string;
  route: { inputs: string[]; hub: string; stops: string[] }; // hero route-map fragment
  symptoms: string[];
  outcomes: Outcome[];
  areas: string[];
  fit: string; // how it fits the existing environment
  platforms: string[]; // product slugs
  caseStudies: string[]; // case study slugs
  faqs: Faq[];
};

export const solutions: Solution[] = [
  {
    slug: "customer-experience",
    pillar: "cx",
    name: "Customer Experience",
    navNote: "Contact centre and omnichannel service",
    headline: "Make every customer interaction part of one connected experience.",
    summary:
      "Customers move between phone calls, web chat, WhatsApp, email and social media. We bring those conversations into one operating model, so agents have the context, supervisors have the visibility and customers stop starting over.",
    metaDescription:
      "Contact centre modernization and omnichannel customer service for enterprises in the GCC, Africa and Asia. One agent desktop for voice, chat, WhatsApp, email and social.",
    problemTitle: "Where customer service breaks down today",
    route: { inputs: ["Voice", "Web chat", "WhatsApp", "Email"], hub: "One agent desktop", stops: ["History on screen", "Live supervision", "Callback, not lost"] },
    symptoms: [
      "A customer explains the same problem on the phone that they already wrote in a chat.",
      "Agents switch between the phone, the CRM, a ticketing tool and a spreadsheet on every call.",
      "Supervisors find out about missed service levels from last week's report.",
    ],
    outcomes: [
      {
        title: "Customers stop repeating themselves",
        how: "Voice, web chat, WhatsApp, email and social conversations arrive in one agent desktop, with the customer's previous contacts beside them.",
      },
      {
        title: "Agents start every conversation prepared",
        how: "When a call or chat connects, the customer's CRM record opens on screen, matched on phone number or email.",
      },
      {
        title: "Fewer callers are lost in the queue",
        how: "Callers who hang up after waiting can be called back automatically and routed to the next free agent. Every abandoned call appears in reporting.",
      },
      {
        title: "Problems are fixed while the shift is still running",
        how: "Supervisors watch live queues and service levels, and can listen in, coach an agent privately or join a call or chat.",
      },
    ],
    areas: [
      "Contact centre modernization",
      "Omnichannel engagement",
      "Agent and supervisor workspace",
      "Case and ticket management",
      "Surveys and customer feedback",
      "Interaction analytics",
    ],
    fit:
      "We start from what you run today. If you have an Avaya IP Office, iConnect adds the contact centre layer on top of it. If you want to move the operation to the cloud, Inaipi can be hosted by us or in-country by a telecom operator. Either way your CRM stays where it is and is connected, not replaced.",
    platforms: ["iconnect", "inaipi", "listen-iq"],
    caseStudies: ["emirates-hospital", "omniyat"],
    faqs: [
      {
        q: "What does an omnichannel contact centre mean in practice?",
        a: "It means one agent can handle a phone call, a web chat, a WhatsApp message or an email from the same screen, and see every earlier conversation with that customer regardless of channel. Routing, reporting and supervision work the same way across all of them.",
      },
      {
        q: "Do we have to replace our CRM?",
        a: "No. We connect the contact centre to the CRM you already use. Salesforce has a native connector; other web-based CRMs are connected through screen-pop URLs or the REST API builder.",
      },
      {
        q: "How long does a contact centre modernization take?",
        a: "It depends on the channels, integrations and number of sites involved. We agree scope, dependencies and acceptance criteria before any work starts, and phase the rollout so the contact centre keeps running throughout.",
      },
    ],
  },
  {
    slug: "enterprise-communications",
    pillar: "comms",
    name: "Enterprise Communications",
    navNote: "Telephony, CTI and unified communications",
    headline: "Build a communications environment that works with your business.",
    summary:
      "Telephony is still where many important customer conversations happen. We have integrated it with business applications since 2005: connecting phone systems to CRMs, giving managers reports they can trust, and letting teams work from anywhere on the same system.",
    metaDescription:
      "Enterprise telephony integration, CTI, CRM connectivity, call reporting and unified communications from Imperium, an Avaya integration specialist since 2005.",
    problemTitle: "When the phone system works on its own",
    route: { inputs: ["Phone system", "CRM", "Remote staff"], hub: "Connected telephony", stops: ["Record opens on call", "Reports you trust", "Same extension anywhere"] },
    symptoms: [
      "The phone system and the CRM do not know about each other.",
      "Call reports are incomplete, late, or nobody trusts them.",
      "Staff outside the office lose their extension, their queue and their call history.",
    ],
    outcomes: [
      {
        title: "Your phone system talks to your business applications",
        how: "Computer telephony integration (CTI) opens the right record when a call arrives and logs the call against it afterwards. Salesforce and Zoho CRM are supported directly.",
      },
      {
        title: "Reports managers can rely on",
        how: "Call summaries, abandoned and answered calls, agent occupancy and hourly statistics are produced from the phone system's own data and sent on a schedule.",
      },
      {
        title: "People work from anywhere on the same system",
        how: "Softphones and remote desk phones keep each person's extension, queues and reporting when they are away from the office or in another country.",
      },
      {
        title: "Call costs stay under control",
        how: "Call management tools show usage by user, department and destination, and flag unusual outbound calling patterns that can indicate toll fraud.",
      },
    ],
    areas: [
      "Avaya IP Office and Aura integration",
      "CTI and CRM connectivity",
      "Unified communications and collaboration",
      "Call reporting and management",
      "Toll-fraud monitoring and cost control",
    ],
    fit:
      "Most of our communications work extends an investment the customer has already made. We assess the current telephony environment, fix configuration problems first, and then add integration, reporting or cloud capacity in stages.",
    platforms: ["iconnect"],
    caseStudies: ["concordia", "growthgate"],
    faqs: [
      {
        q: "What is CTI?",
        a: "Computer telephony integration connects a phone system to business software. When a call arrives, the caller's record opens automatically; agents can dial, transfer and log calls from the application instead of the handset.",
      },
      {
        q: "Which phone systems do you work with?",
        a: "Our deepest expertise is Avaya, including IP Office, IP Office Contact Center and Avaya's cloud offerings. We also integrate with other enterprise communications platforms through standard interfaces such as SIP.",
      },
      {
        q: "Can you fix reporting on a contact centre we already run?",
        a: "Yes. A common first engagement is a gap analysis of an existing system, correcting configuration and then adding custom reports through a secure API. This is what we did for Concordia's Avaya call reporting.",
      },
    ],
  },
  {
    slug: "ai-automation",
    pillar: "ai",
    name: "AI & Automation",
    navNote: "Conversational AI, routing and insight",
    headline: "Put AI to work on the interactions and workflows that matter.",
    summary:
      "AI is useful when it takes a defined job off someone's desk. We help you find those jobs in customer service: answering routine questions, sorting and routing requests, spotting a rise in complaints early. Every design states what is automated, what stays with a person and how it is measured.",
    metaDescription:
      "Applied AI for customer service: AI chat and voice agents with human handoff, automatic ticket classification and routing, sentiment and trend detection, agent assistance.",
    problemTitle: "Where people do work a system could do",
    route: { inputs: ["Routine questions", "Incoming requests", "Social mentions"], hub: "AI, then a person", stops: ["Answered any hour", "Routed on arrival", "Early warning"] },
    symptoms: [
      "Agents spend much of the day answering the same handful of questions.",
      "Requests sit in a shared inbox until someone reads and forwards them.",
      "A spike in complaints on social media is noticed after it has spread.",
    ],
    outcomes: [
      {
        title: "Routine questions are answered at any hour",
        how: "AI chat agents on WhatsApp, the website and other messaging channels answer common questions and hand the conversation, with its history, to a person when needed.",
      },
      {
        title: "Every request is sorted and routed on arrival",
        how: "Incoming messages and emails are classified, prioritised and turned into tickets with service-level timers, then routed by skill or business rule.",
      },
      {
        title: "You see a shift in sentiment before it escalates",
        how: "Mentions, comments and reviews are analysed for sentiment and grouped into topics, with alerts when a topic suddenly grows.",
      },
      {
        title: "Agents get the next step suggested",
        how: "During a conversation, an assistant summarises the history and suggests a reply or action. The agent decides what is sent.",
      },
    ],
    areas: [
      "Conversational assistants",
      "Workflow automation",
      "Intelligent routing",
      "Interaction and social intelligence",
      "Analytics and decision support",
    ],
    fit:
      "We introduce AI one use case at a time, inside the channels and tools your team already uses, with a human handoff on every automated path. Capabilities depend on the platform selected and are confirmed during design.",
    platforms: ["inaipi", "listen-iq"],
    caseStudies: ["orange"],
    faqs: [
      {
        q: "Will AI replace our agents?",
        a: "That is not how we design it. AI handles defined, repetitive work such as answering common questions or sorting requests. Conversations that need judgement are handed to a person with the full context.",
      },
      {
        q: "Which AI models do the platforms use?",
        a: "The platforms we deploy use established foundation models and services, such as OpenAI models and Google Dialogflow, alongside their own classification and routing logic. Model choice and data handling are agreed during design.",
      },
      {
        q: "How do we measure whether automation is working?",
        a: "Before launch we agree the measures: how many conversations are resolved without a handoff, how many are handed over, customer satisfaction on automated paths, and time saved for agents. These are reported from the platform.",
      },
    ],
  },
  {
    slug: "integration-modernization",
    pillar: "comms",
    name: "Integration & Modernization",
    navNote: "Modernize in stages, keep data in-country",
    headline: "Modernize without losing the value of the systems you already use.",
    summary:
      "Most enterprises cannot stop the operation to rebuild it. We connect business applications, communications platforms and customer workflows, then move to new technology in stages that keep the service running.",
    metaDescription:
      "Contact centre and communications modernization in stages: add capability to Avaya IP Office, migrate to cloud, host in-country for data residency, and integrate CRM and business systems.",
    problemTitle: "Why modernization projects stall",
    route: { inputs: ["Avaya IP Office", "Branch sites", "Legacy reports"], hub: "One platform", stops: ["No rip-and-replace", "Sites run as one", "Data in-country"] },
    symptoms: [
      "The phone system works, but adding channels or reporting seems to require replacing it.",
      "Several sites each run their own contact centre setup.",
      "Regulation or policy requires customer data to stay in the country.",
    ],
    outcomes: [
      {
        title: "Add a contact centre without replacing the phone system",
        how: "iConnect uses your Avaya IP Office extensions, hunt groups and licences, and adds omnichannel routing, supervision and reporting on top.",
      },
      {
        title: "Several contact centres run as one",
        how: "Sites move onto a single shared platform, so agents in different locations work from the same queues, rules and reports.",
      },
      {
        title: "Customer data stays where it has to",
        how: "Deploy on your own servers with high availability, in our data centre, or on a cloud platform hosted in-country by a telecom operator.",
      },
      {
        title: "Move to the cloud with little downtime",
        how: "Migrations are planned around cut-over windows, with numbering, users and reporting prepared in advance.",
      },
    ],
    areas: [
      "Avaya IP Office modernization",
      "Cloud migration",
      "In-country and on-premise hosting",
      "CRM and business application integration",
      "Multi-site consolidation",
    ],
    fit:
      "Every modernization starts with an assessment of the current environment and a staged plan ranked by operational impact and risk. Each stage has its own acceptance criteria and rollback plan.",
    platforms: ["iconnect", "inaipi"],
    caseStudies: ["ethio-telecom", "macemacro"],
    faqs: [
      {
        q: "Can we keep customer data in the UAE?",
        a: "Yes. Options include on-premise deployment on your own infrastructure, hosting in our data centre, a cloud platform hosted in-country by a telecom operator, or a sovereign or multi-cloud set-up. We confirm the right option for each platform and your policy requirements.",
      },
      {
        q: "Do we have to move everything to the cloud at once?",
        a: "No. Many customers keep telephony on-premise and add cloud capabilities around it, or move one site or channel at a time.",
      },
      {
        q: "How much downtime does a migration involve?",
        a: "We plan migrations around agreed cut-over windows. For Growthgate, moving from an on-premise PBX to Avaya's cloud unified communications was completed in a couple of days.",
      },
    ],
  },
];

export const solutionBySlug = (s: string) => solutions.find((x) => x.slug === s);
