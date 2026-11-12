import type { Faq, Outcome } from "./solutions";

export type CapabilityGroup = { role: string; items: { name: string; detail: string }[] };

export type Product = {
  slug: string;
  name: string;
  kind: string; // one-line category
  // CONFIRM: relationship wording for Inaipi and Listen IQ needs owner sign-off (plan section 04)
  relationship: string;
  promise: string;
  summary: string;
  metaDescription: string;
  forWho: string[];
  outcomes: Outcome[];
  capabilities: CapabilityGroup[];
  integrations: { group: string; items: string[] }[];
  deployment: { name: string; detail: string }[];
  steps?: { name: string; detail: string }[];
  stepsTitle?: string;
  useCases?: { title: string; detail: string }[];
  roadmap?: string[];
  externalLinks: { label: string; href: string }[];
  faqs: Faq[];
  caseStudies: string[];
  solutions: string[];
};

export const products: Product[] = [
  {
    slug: "iconnect",
    name: "iConnect",
    kind: "Omnichannel contact centre for Avaya IP Office",
    relationship: "Built and supported by Imperium",
    promise: "Turn the Avaya IP Office you already own into a full omnichannel contact centre.",
    summary:
      "iConnect adds a contact centre layer to Avaya IP Office: one desktop for voice and chat, live supervision, 14 standard reports and a no-code report builder. It uses your existing extensions, hunt groups and licences, and runs on your own servers.",
    metaDescription:
      "iConnect is an omnichannel contact centre for Avaya IP Office: unified agent desktop, inbound ACD, web chat, live supervisor monitoring, 14 reports, Salesforce integration, on-premise and high-availability deployment.",
    forWho: [
      "Organisations running Avaya IP Office that need a real contact centre, not basic hunt groups",
      "Teams that handle both phone calls and web chat and want one agent desktop",
      "IT teams that need the system on their own infrastructure, with failover",
    ],
    outcomes: [
      {
        title: "One screen for every conversation",
        how: "Calls, web chats, customer history, CRM screen pop and wrap-up are handled from a single desktop. Agents no longer switch applications mid-call.",
      },
      {
        title: "Supervisors act during the shift",
        how: "A live view of agents, queues and service level, with observe, whisper and barge-in on both voice and chat.",
      },
      {
        title: "Reports without spreadsheets",
        how: "Fourteen standard reports, from agent performance to cradle-to-grave interaction history, plus a no-code report builder. Export to CSV or Excel.",
      },
      {
        title: "Your data stays on your infrastructure",
        how: "Deployed in containers on your servers, with an optional three-node high-availability cluster and IP Office primary/secondary failover.",
      },
    ],
    capabilities: [
      {
        role: "Agent",
        items: [
          { name: "Inbound ACD routing", detail: "Calls from IP Office hunt groups are routed to available agents by queue and priority." },
          { name: "Outbound click-to-dial", detail: "Agents dial from the desktop; every outbound call is tracked and reported." },
          { name: "Transfer and conference", detail: "Blind or consultative transfer to an agent, queue or external number, and three-way conferencing." },
          { name: "Concurrent web chats", detail: "Several chats at once, up to a configured limit, with typing indicators, attachments and canned responses." },
          { name: "Customer journey panel", detail: "Previous contacts, outcomes and the CRM record appear when the interaction connects." },
          { name: "After-call work", detail: "A configurable wrap-up timer with mandatory disposition codes and notes." },
        ],
      },
      {
        role: "Supervisor",
        items: [
          { name: "Observe, whisper, barge-in", detail: "Listen silently, coach the agent privately, or join the conversation, on voice and chat." },
          { name: "Queue management", detail: "Queue depth, longest wait, available agents and service level, updated in real time." },
          { name: "Campaign and callback oversight", detail: "Progress of outbound campaigns and pending, scheduled or failed callbacks." },
          { name: "Hand-raise alerts", detail: "Agents can signal for help; supervisors get a priority notification." },
          { name: "Custom wallboard designer", detail: "Supervisors build their own KPI, volume, availability and SLA views for floor screens." },
          { name: "Force logout", detail: "End an unattended or unresponsive agent session remotely." },
        ],
      },
      {
        role: "Administration and reporting",
        items: [
          { name: "14 standard reports", detail: "Agent performance, service level, cradle-to-grave, dispositions, not-ready, workforce utilisation, abandoned calls, outbound and more." },
          { name: "Custom report builder", detail: "Pick fields, join tables, filter, group and sort without SQL. Schedule reports or export to CSV and Excel." },
          { name: "Self-service onboarding", detail: "Queues, teams, agents, disposition codes, not-ready reasons and wrap-up rules configured from the admin console." },
          { name: "User and group sync", detail: "Users and hunt groups are synchronised from IP Office." },
        ],
      },
    ],
    integrations: [
      { group: "Telephony", items: ["Avaya IP Office (MTCTI and Web Management API)", "SMDR call records", "Primary and secondary IP Office failover"] },
      { group: "CRM", items: ["Salesforce (native, OAuth)", "Any web CRM via URL screen pop with {CLI}, {CustomerID}, {QueueName}", "REST API builder"] },
      { group: "Channels", items: ["Voice", "Web chat (JavaScript snippet)", "Email (IMAP, POP3, SMTP)", "WhatsApp, social media, ticketing and surveys through connected services"] },
    ],
    deployment: [
      { name: "Single server", detail: "All modules on one server alongside your IP Office. Suited to a single site." },
      { name: "High availability", detail: "Three-node cluster with automatic failover: Redis Sentinel and a MongoDB replica set, with a virtual IP for agents." },
      { name: "On your infrastructure", detail: "Docker-based deployment on your own servers. No mandatory cloud dependency." },
    ],
    roadmap: [
      "AI assistance and custom layouts on the agent desktop",
      "IVR, outbound campaigns, skill-based routing and richer self-service",
      "Quality management, automated quality scoring and workforce management",
      "Native CTI inside Salesforce, followed by Microsoft Dynamics 365",
      "Agent and supervisor mobile app for iOS and Android",
      "Natural-language reporting and controlled data APIs",
    ],
    steps: [
      { name: "Live demo", detail: "We show iConnect on a real IP Office, configured with your queue names and scenarios." },
      { name: "Proof of concept", detail: "iConnect runs in your environment on your own traffic, measured against your own metrics." },
      { name: "Proposal", detail: "Licensing, implementation, training and support, scoped to your team and requirements." },
    ],
    externalLinks: [
      { label: "iConnect documentation", href: "https://iconnect.imperiumapp.com/docs" },
      { label: "iconnectcx.com", href: "https://iconnectcx.com/" },
    ],
    faqs: [
      {
        q: "Do we need to replace our Avaya IP Office to use iConnect?",
        a: "No. iConnect connects to your existing IP Office through its CTI and management interfaces and uses your current extensions, hunt groups and licences. Nothing in the telephony layer is replaced.",
      },
      {
        q: "Can iConnect run without the cloud?",
        a: "Yes. iConnect is designed for on-premise deployment on your own servers, either on a single server or as a three-node high-availability cluster.",
      },
      {
        q: "Which CRMs does iConnect work with?",
        a: "Salesforce through a native connector. Other web-based CRMs open automatically through URL screen pop with caller and queue parameters, and the REST API builder connects other business systems.",
      },
      {
        q: "Which channels does iConnect support?",
        a: "Voice and web chat are handled natively on the agent desktop, along with email. WhatsApp, social media, ticketing and surveys are connected through integrated services.",
      },
    ],
    caseStudies: ["omniyat", "concordia"],
    solutions: ["customer-experience", "integration-modernization"],
  },
  {
    slug: "inaipi",
    name: "Inaipi",
    kind: "AI-native cloud customer experience platform",
    // CONFIRM wording: Inaipi was founded by Imperium's founder; presented in Imperium's 2026 deck as part of its CX portfolio.
    relationship: "Part of the Imperium group",
    promise: "Run voice, digital channels, cases and surveys on one cloud platform, hosted where your data needs to live.",
    summary:
      "Inaipi brings the contact centre, ticketing, surveys, outbound campaigns and AI agents into one cloud platform. It can be hosted as a service, in-country by a telecom operator, or alongside existing contact centre infrastructure.",
    metaDescription:
      "Inaipi is an AI-native cloud customer experience platform: omnichannel contact centre, native ticketing, CSAT and NPS surveys, AI chat and voice agents, with in-country hosting options. Deployed and supported by Imperium.",
    forWho: [
      "Mid-sized and large organisations replacing several separate customer service tools",
      "Operations that need cloud speed but must keep data in-country",
      "Teams starting with one capability and adding more over time",
    ],
    outcomes: [
      {
        title: "One platform instead of five tools",
        how: "Voice, WhatsApp, email, web chat, social, SMS and video share one agent workspace, with ticketing and surveys built in.",
      },
      {
        title: "Every request becomes accountable work",
        how: "Conversations create tickets automatically, classified and prioritised, routed by skill or rule, and tracked against service-level targets.",
      },
      {
        title: "Low satisfaction triggers action",
        how: "Post-interaction CSAT and NPS surveys run on every channel. A low score can open a case, escalate or schedule a callback.",
      },
      {
        title: "Routine work is handled by AI agents",
        how: "AI chat and voice agents answer common questions and complete simple tasks, then hand over to a person with the context.",
      },
    ],
    capabilities: [
      {
        role: "Engagement",
        items: [
          { name: "Omnichannel contact centre", detail: "Voice, WhatsApp, email, web and in-app chat, social, SMS and video in one workspace." },
          { name: "AI chat agents", detail: "Self-service across WhatsApp, website, mobile and social, with escalation to an agent." },
          { name: "AI voice agents", detail: "Inbound and outbound calls for verification, information and follow-ups, with a human option." },
          { name: "Proactive outreach", detail: "Campaigns, reminders, notifications and follow-ups across channels." },
        ],
      },
      {
        role: "Operations",
        items: [
          { name: "Ticketing and case management", detail: "End-to-end case lifecycle with SLA tracking, escalations, approvals and audit trails." },
          { name: "Skill and rule-based routing", detail: "Requests reach the right team on arrival." },
          { name: "Agent assistant", detail: "Conversation context, reply suggestions and next-best action for the agent." },
        ],
      },
      {
        role: "Insight",
        items: [
          { name: "Surveys", detail: "CSAT, NPS and relationship surveys over IVR, SMS, email, social and digital channels." },
          { name: "Conversation intelligence", detail: "Sentiment and trends drawn from customer conversations." },
          { name: "Unified dashboards", detail: "Feedback linked to agents, tickets and outcomes." },
        ],
      },
    ],
    integrations: [
      { group: "Communications", items: ["Avaya", "Cisco", "Zoom", "Ribbon", "AudioCodes", "SIP, PBX and UCaaS"] },
      { group: "CRM and service", items: ["Salesforce", "Microsoft Dynamics", "Zoho CRM", "Freshworks", "SugarCRM"] },
      { group: "AI", items: ["OpenAI", "Google Dialogflow"] },
    ],
    deployment: [
      { name: "Software as a service", detail: "Hosted on AWS and fully managed." },
      { name: "In-country, telco-hosted", detail: "Hosted in a telecom operator's in-country data centre for data residency, with local managed services." },
      { name: "Hybrid", detail: "Runs alongside existing contact centre infrastructure, so legacy systems can be modernized without a rip-and-replace." },
    ],
    externalLinks: [
      { label: "inaipi.ai", href: "https://inaipi.ai/" },
      { label: "SLT-Mobitel announcement (2023)", href: "https://slt.lk/en/news/slt-mobitel-enterprises-premium-contact-centre-solution-powered-avaya-inaipi-cloud-boosts" },
    ],
    faqs: [
      {
        q: "Can Inaipi be hosted inside our country?",
        a: "Yes. Besides the hosted service, Inaipi runs in telecom operators' in-country data centres. Operators including Ethio telecom, du, Batelco, SLT-Mobitel and Mauritius Telecom host it locally and offer it to their enterprise and government customers.",
      },
      {
        q: "Do we have to adopt every module at once?",
        a: "No. Each capability, such as the contact centre, ticketing or surveys, can be adopted on its own and others added later.",
      },
      {
        q: "What is Imperium's role with Inaipi?",
        a: "Imperium designs, deploys, integrates and supports Inaipi for its customers, including connections to existing telephony and CRM systems.",
      },
    ],
    caseStudies: ["ethio-telecom"],
    solutions: ["customer-experience", "ai-automation", "integration-modernization"],
  },
  {
    slug: "listen-iq",
    name: "Listen IQ",
    kind: "Social listening and conversation intelligence",
    // CONFIRM wording: presented in Imperium's 2026 deck as part of its CX portfolio.
    relationship: "Part of the Imperium group",
    promise: "Know not just what customers say about you, but what they mean, and act on it from one place.",
    summary:
      "Listen IQ connects every social channel, reads each conversation for intent, emotion and urgency, and gives customer care, marketing and leadership one place to respond, track and decide.",
    metaDescription:
      "Listen IQ is an AI-powered social listening and conversation intelligence platform: sentiment analysis, topic clustering, unified social inbox, AI-assisted replies and competitor benchmarking.",
    forWho: [
      "Brands and public bodies that need to track reputation and sentiment",
      "Customer care teams answering large volumes of comments and direct messages",
      "Marketing and communications teams that report on campaigns and competitors",
    ],
    outcomes: [
      {
        title: "Every conversation in one place, answered consistently",
        how: "Comments, direct messages and mentions from every connected account arrive in one inbox, classified as leads, support, enquiries or complaints, and answered with AI-drafted replies the agent approves.",
      },
      {
        title: "Complaints and misinformation caught before they spread",
        how: "Real-time alerts flag viral complaints, misinformation and brand risks, and high-intent leads are routed to sales the moment they appear.",
      },
      {
        title: "Leadership decides from evidence, not anecdotes",
        how: "A leadership view turns sentiment, topics and risk signals across teams, locations and markets into a plain-language summary with recommended actions.",
      },
      {
        title: "Fewer tools to run",
        how: "Listening, engagement, publishing and analytics sit on one platform, replacing separate monitoring, inbox and reporting tools.",
      },
    ],
    capabilities: [
      {
        role: "Listening",
        items: [
          { name: "Brand and keyword monitoring", detail: "Real-time tracking of mentions and keywords across channels." },
          { name: "Sentiment and emotion", detail: "AI classification of each conversation's sentiment." },
          { name: "Topic clustering", detail: "Similar issues are grouped automatically, such as billing, network or service." },
        ],
      },
      {
        role: "Engagement",
        items: [
          { name: "Unified inbox", detail: "Comments and direct messages from every connected account in one queue." },
          { name: "Routing and assignment", detail: "Conversations assigned to team members, with escalation of high-risk cases." },
          { name: "AI-assisted replies", detail: "Suggested responses the agent can edit before sending." },
        ],
      },
      {
        role: "AI that acts",
        items: [
          { name: "Intent, emotion, sarcasm and urgency", detail: "Each conversation is read for what the customer wants, how they feel and how urgently." },
          { name: "Churn triggers", detail: "Predicts which conversations signal a customer about to leave." },
          { name: "Viral trend detection", detail: "Spots emerging trends and complaints before competitors react." },
          { name: "Forecasts and next actions", detail: "Forecasts audience behaviour and engagement, and suggests the next best content." },
          { name: "Drafts and next steps", detail: "Drafts a contextual reply and recommends the next action for the agent." },
          { name: "Leadership summaries", detail: "Turns sentiment and trends into a plain-language story for management." },
        ],
      },
      {
        role: "Analytics",
        items: [
          { name: "Performance analytics", detail: "Reach, engagement, followers and campaign results by account and period." },
          { name: "Competitor benchmarking", detail: "Track competitors' activity and audience response." },
          { name: "Publishing", detail: "Schedule posts across channels from a content calendar." },
        ],
      },
    ],
    integrations: [
      { group: "Channels", items: ["Facebook", "Instagram", "X", "LinkedIn", "YouTube", "WhatsApp", "Telegram", "Viber", "Snapchat", "TikTok", "Reddit", "Google reviews"] },
      { group: "Business systems", items: ["Meta Business integration", "CRM integration (including Zoho CRM)", "API access"] },
    ],
    deployment: [
      { name: "Cloud subscription", detail: "Priced by users, connected channels and AI features." },
      { name: "Enterprise plan", detail: "Custom dashboards and reports, API and CRM integrations, data hosting and compliance options." },
      { name: "Multi-entity and operator", detail: "Built for groups with several brands or markets, and for telecom operators offering it to their own customers." },
    ],
    stepsTitle: "Listen, engage, analyse",
    steps: [
      { name: "Listen", detail: "Every mention, comment and message from connected channels, classified by sentiment, intent and topic." },
      { name: "Engage", detail: "Answer from one inbox with AI-drafted replies, assignment and instant escalation." },
      { name: "Analyse", detail: "Track sentiment, engagement and campaigns, and feed what you learn back into the next response." },
    ],
    useCases: [
      { title: "Lead intelligence", detail: "Find high-intent buyers in comments, DMs and enquiries, and route them to sales immediately." },
      { title: "Brand and location sentiment", detail: "Track how people feel about each brand, branch, property or launch, in real time." },
      { title: "Campaign and launch performance", detail: "Measure engagement and response quality for launches and campaigns across platforms." },
      { title: "Reputation and risk", detail: "Detect negative reviews, complaints and misinformation early and escalate them." },
      { title: "Customer experience insight", detail: "Find the friction points customers talk about and fix them at the source." },
    ],
    externalLinks: [{ label: "Listen IQ", href: "https://listeniq.edayaapp.com/" }],
    faqs: [
      {
        q: "What is social listening?",
        a: "Social listening means monitoring public conversations about your organisation, products or topics across social media and review sites, then analysing them for sentiment and trends so you can respond and plan.",
      },
      {
        q: "Can the team reply from Listen IQ?",
        a: "Yes. Comments and direct messages from connected accounts arrive in a shared inbox where they can be assigned, answered with AI-suggested replies and escalated.",
      },
      {
        q: "Does Listen IQ connect to our contact centre?",
        a: "Yes. Listen IQ integrates with CRM systems and with the Inaipi platform, so social conversations can become cases handled by the contact centre.",
      },
    ],
    caseStudies: ["orange"],
    solutions: ["customer-experience", "ai-automation"],
  },
];

export const productBySlug = (s: string) => products.find((p) => p.slug === s);
