// Rewritten from Imperium's published case studies (PDFs on the current site, 2017–2018).
// Facts and quotes are taken from those documents only. CONFIRM before launch: each
// customer still approves publication (audit section 10).

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  sector: string; // industry slug or "other"
  sectorLabel: string;
  location: string;
  year: string;
  facts: { value: string; label: string }[];
  challenge: string[];
  delivered: { title: string; detail: string }[];
  result: string[];
  quote?: { text: string; by: string };
  stack: string[];
  solution: string; // solution slug
  pdf?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    // From Imperium's 2026 operator presentations. CONFIRM: Ethio telecom approval to publish.
    slug: "ethio-telecom",
    client: "Ethio telecom",
    title: "One platform for the operator's 2,000 agents and the customers it sells to",
    summary:
      "Ethio telecom hosts the Inaipi contact centre platform in its own data centre in Ethiopia. It runs the operator's own 2,000-agent omnichannel contact centre, and Ethio telecom sells the same platform as a contact centre service to government bodies, banks and enterprises.",
    sector: "telecommunications",
    sectorLabel: "Telecommunications",
    location: "Ethiopia",
    year: "2026",
    facts: [
      { value: "2,000", label: "omnichannel agents in Ethio telecom's own contact centre" },
      { value: "35+", label: "government bodies, banks and enterprises on the resold service" },
    ],
    challenge: [
      "Ethio telecom is Ethiopia's leading provider of mobile, fixed and internet services to consumers, businesses and government. It needed a contact centre platform for its own very large customer service operation.",
      "It also wanted to offer contact centre services to Ethiopian organisations, which required a platform it could host inside the country, operate itself and sell to many customers at once.",
    ],
    delivered: [
      { title: "In-country hosting", detail: "The platform runs in Ethio telecom's own data centre, so customer conversations stay in Ethiopia." },
      { title: "Ethio telecom's own contact centre", detail: "2,000 agents handle customers across voice and digital channels from one omnichannel workspace." },
      { title: "Contact centre as a service", detail: "The same platform is sold through Ethio telecom to enterprises, government and SMBs, each with its own contact centre." },
      { title: "Social intelligence", detail: "Listen IQ adds social listening, sentiment and a unified social inbox to the portfolio." },
    ],
    result: [
      "Ethio telecom runs one of the region's largest contact centres on the platform and has built a contact centre service business on it.",
      "Customers of the service include the Prime Minister's Office, the Ministry of Peace, the Ministry of Revenue, Dashen Bank, Amhara Bank, Oromia Bank, Addis Ababa City Administration and St. Peter Specialized Hospital.",
    ],
    stack: ["Inaipi", "Listen IQ"],
    solution: "integration-modernization",
  },
  {
    // From Imperium's 2026 partner presentation. CONFIRM: Orange approval to publish.
    slug: "orange",
    client: "Orange",
    title: "One social care desk for seven brand accounts and 10,000+ daily conversations",
    summary:
      "Orange's digital care team runs its social channels from Listen IQ. Every comment and direct message from its Facebook, Instagram, X and LinkedIn accounts reaches one dashboard, sorted by sentiment, urgency and topic, and a team of 10 agents answers from one screen.",
    sector: "telecommunications",
    sectorLabel: "Telecommunications",
    location: "Telecom operator",
    year: "2026",
    facts: [
      { value: "10,000+", label: "public comments and private messages a day" },
      { value: "≈35M", label: "combined followers and customers" },
      { value: "10", label: "digital and CX agents" },
    ],
    challenge: [
      "Orange's digital and CX team manages seven brand accounts: three Facebook pages, two Instagram accounts, one X account and one LinkedIn page, followed by around 35 million people and customers combined.",
      "More than 10,000 public comments and private messages arrive every day, about the network, billing, outages, roaming and more. Spread across separate accounts, urgent cases were hard to spot and replies were hard to keep consistent.",
    ],
    delivered: [
      { title: "One dashboard for every account", detail: "All Facebook, Instagram, X and LinkedIn comments and messages flow into a single Listen IQ inbox." },
      { title: "Automatic sentiment and urgency", detail: "AI marks each conversation as angry, frustrated, neutral or positive, and flags urgent and high-risk conversations." },
      { title: "Issues grouped by topic", detail: "Similar conversations are grouped into topics such as network, billing, outages and roaming, so trends are visible as they form." },
      { title: "Answer and escalate from one screen", detail: "Agents reply with AI-assisted drafts, see the conversation history and escalate critical cases instantly." },
    ],
    result: [
      "A team of 10 agents handles the full daily volume from one screen, with the most urgent and highest-risk conversations surfaced first and recurring issues visible by topic.",
    ],
    stack: ["Listen IQ"],
    solution: "ai-automation",
  },
  {
    slug: "emirates-hospital",
    client: "Emirates Hospital Group",
    title: "One number and one contact centre for seven hospital branches",
    summary:
      "Emirates Hospital's branches each answered their own calls at reception. Imperium set up a centralised Avaya contact centre with a single 800 number, connected it to the hospital management system and added automatic callback for dropped calls.",
    sector: "healthcare",
    sectorLabel: "Healthcare",
    location: "Dubai, UAE",
    year: "2018",
    facts: [
      { value: "7", label: "branches served by one contact centre" },
      { value: "≈1,000", label: "calls a day before centralisation" },
      { value: "20 s", label: "wait after which dropped callers are called back" },
    ],
    challenge: [
      "Emirates Hospital, part of Emirates Healthcare, runs seven branches in the UAE. Each branch handled patient calls as a reception-desk task, on its own systems, with no shared view for management.",
      "Call volumes had reached about 1,000 a day. Staff looked up the hospital management system by hand during calls, queues grew, and calls were dropped. Adding reception staff at every branch would have been costly and still left no single reporting system.",
    ],
    delivered: [
      { title: "Centralised contact centre", detail: "A single Avaya Contact Center in Al Quoz, Dubai, reached through one 800 toll-free number for all branches, handling voice, email and web chat. Softphone licences let agents log in from anywhere." },
      { title: "Patient-record screen pop", detail: "Imperium CRM Connect links the contact centre to the hospital's database. When a call arrives, the caller's record and history appear on the agent's screen; agents can create records, add notes and raise complaint tickets that are emailed to the responsible team." },
      { title: "Automatic callback", detail: "The Imperium Callback Assist module lists callers who hung up after waiting 20 seconds or more, calls them back automatically after a set interval and routes answered calls to an available agent." },
      { title: "Feedback and messaging", detail: "Post-call surveys, SMS and social media functions were added to the contact centre." },
    ],
    result: [
      "Patients now reach every branch through one number and one trained team, and management has one reporting system across the group.",
      "Agents start calls with the patient's history on screen instead of searching for it, and dropped callers are contacted again without a separate outbound team.",
    ],
    stack: ["Avaya Contact Center", "Imperium CRM Connect", "Imperium Callback Assist", "Surveys, SMS and social channels"],
    solution: "customer-experience",
    pdf: "/case-studies/pdf/emirates-hospital.pdf",
  },
  {
    slug: "concordia",
    client: "Concordia",
    title: "Contact centre reports a 200-calls-an-hour helpdesk can trust",
    summary:
      "A fault in Concordia's Avaya call reporting was corrupting data. Imperium reconfigured the system, built a custom reporting module on a secure API and added IVR routing to the right department.",
    sector: "other",
    sectorLabel: "Facilities management",
    location: "Dubai, UAE",
    year: "2018",
    facts: [
      { value: "≈200", label: "calls an hour into the helpdesk" },
      { value: "7", label: "report types designed and scheduled" },
      { value: "≈2,000", label: "Concordia employees" },
    ],
    challenge: [
      "Concordia provides integrated facility management to commercial and residential properties across Dubai. Its in-house Avaya contact centre handles about 200 helpdesk calls an hour, around the clock.",
      "A fault in the Avaya Customer Call Reporter had been distorting call reports for some time, so management had no reliable real-time or historical view of performance. Calls were also transferred to technical departments by hand.",
    ],
    delivered: [
      { title: "Gap analysis and reconfiguration", detail: "Imperium studied Concordia's environment and workflow, found the flaw in the call reporter and reconfigured it so accurate data could be retrieved." },
      { title: "Imperium CMS reporting module", detail: "A module on top of the call reporter exposes data through a secure custom API and produces reports in Concordia's own formats: call summary, abandoned and answered calls, agent averages, agent occupancy, hourly, non-staff and lost calls." },
      { title: "Scheduled email reports", detail: "Reports are emailed automatically daily, weekly and monthly." },
      { title: "IVR routing", detail: "An Imperium IVR directs callers to the right technical department, so agents no longer transfer calls by hand." },
    ],
    result: [
      "Management has accurate real-time and historical reporting again, and the helpdesk spends less agent time on routing calls.",
    ],
    quote: {
      text: "We chose them because they are well versed with Avaya contact center solutions and provide top notch systems to leverage and maintain the product in good stride. Their approach has been to understand our plight first and then implement steps which ensured best possible outcomes, just as we required.",
      by: "Concordia",
    },
    stack: ["Avaya Customer Call Reporter", "Imperium CMS", "Imperium IVR"],
    solution: "enterprise-communications",
    pdf: "/case-studies/pdf/concordia.pdf",
  },
  {
    slug: "omniyat",
    client: "Omniyat",
    title: "Salesforce and the contact centre on one screen",
    summary:
      "Omniyat's sales and service team needed fast, well-documented responses to high-value property clients. Imperium implemented Avaya IP Office Contact Center, integrated it with Salesforce and archived call recordings to each customer's record.",
    sector: "retail-real-estate",
    sectorLabel: "Real estate",
    location: "Dubai, UAE",
    year: "2017",
    facts: [
      { value: "1", label: "screen for CRM and contact centre" },
      { value: "2017", label: "contact centre launched" },
    ],
    challenge: [
      "Omniyat designs and develops landmark residential, commercial, hospitality and retail properties in Dubai. In real estate a slow response can mean a lost sale, so the team needed a contact centre that matched the level of its clients.",
    ],
    delivered: [
      { title: "Avaya IP Office Contact Center", detail: "Implemented on-premise with voice, video, chat and conferencing, skill-based IVR routing with self-help and callback, and a supervisor role for quality audits." },
      { title: "Remote working", detail: "Engineers and staff away from the office stay connected through Avaya's remote worker setup, including WebRTC." },
      { title: "CRM Connect for Salesforce", detail: "The contact centre is integrated with Omniyat's Salesforce, including an Avaya dialler inside the Salesforce portal, so agents work from one screen." },
      { title: "Quality monitoring", detail: "Calls are recorded and archived in Salesforce, so agents can play back previous conversations from the customer's record during a call." },
    ],
    result: [
      "Agents handle calls and customer records from one screen, supervisors audit quality from recordings, and every conversation is kept with the client's record.",
    ],
    stack: ["Avaya IP Office Contact Center", "Imperium CRM Connect for Salesforce", "Imperium Quality Monitoring"],
    solution: "customer-experience",
    pdf: "/case-studies/pdf/omniyat.pdf",
  },
  {
    slug: "macemacro",
    client: "Macemacro",
    title: "Several contact centres moved onto one cloud platform",
    summary:
      "After ten years on an on-premise Avaya setup, Macemacro moved to a cloud contact centre where agents in any location work from one shared platform across voice, email and chat.",
    sector: "other",
    sectorLabel: "Construction and facilities consultancy",
    location: "Middle East, Europe, Canada",
    year: "2018",
    facts: [
      { value: "10 yrs", label: "on the previous on-premise system" },
      { value: "3", label: "channels on one platform: call, email, chat" },
    ],
    challenge: [
      "Macemacro is an international consultancy and construction company with projects in the Middle East, Europe and Canada, and clients who need support in every region. It had run Avaya call reporting on-premise for ten years and wanted its separate contact centres on one platform.",
    ],
    delivered: [
      { title: "Cloud contact centre", detail: "Migration to an Avaya contact centre on cloud, with multiple contact centres managed from a single shared platform." },
      { title: "Work from anywhere", detail: "Agents in different locations work virtually as one team." },
      { title: "One platform for every channel", detail: "Calls, email and chat handled in a single platform." },
      { title: "Subscription model", detail: "Monthly or yearly payments and upgrades without large capital investment." },
    ],
    result: ["Separate contact centres now run as one, with less dependence on physical infrastructure and minimal downtime during the move."],
    quote: {
      text: "Cloud with a call centre, as an IT manager, makes my life easier, as everything is on one screen and I can manage it from anywhere.",
      by: "Sandeep, IT Manager, Macemacro",
    },
    stack: ["Avaya contact centre on cloud"],
    solution: "integration-modernization",
    pdf: "/case-studies/pdf/macemacro.pdf",
  },
  {
    slug: "growthgate",
    client: "Growthgate Capital",
    title: "From an office PBX to cloud communications in a couple of days",
    summary:
      "Growthgate moved its Dubai head office and Bahrain branch from an on-premise PBX to Avaya unified communications on cloud, with softphones for travelling staff and a secure link to Imperium's data centre.",
    sector: "banking-financial-services",
    sectorLabel: "Private investment",
    location: "Dubai, UAE and Bahrain",
    year: "2018",
    facts: [
      { value: "15", label: "users migrated" },
      { value: "2", label: "offices: Dubai and Bahrain" },
    ],
    challenge: [
      "Growthgate Capital is a private investment firm established in Bahrain in 2007. It ran a 15-user PBX at its Dubai head office, connected to its Bahrain office, and wanted mobility and lower cost.",
    ],
    delivered: [
      { title: "Cloud unified communications", detail: "Migration from IP Office on-premise to Avaya Powered by IP Office on cloud." },
      { title: "Mobility", detail: "Softphones for the sales team and internet desk phones at the remote office, with no infrastructure dependency." },
      { title: "Secure connectivity", detail: "A secure tunnel between Growthgate's firewall and Imperium's data centre." },
      { title: "Call reporting", detail: "Cloud call activity reports through the Inaipi Cloud CMS." },
    ],
    result: ["The migration was completed in a couple of days, and staff keep their extensions wherever they work."],
    quote: {
      text: "The experience was wonderful, the engineers did a great job. The migration was completed in a couple of days.",
      by: "Randhir, IT Specialist, Growthgate",
    },
    stack: ["Avaya Powered by IP Office (cloud)", "Softphones", "Inaipi Cloud CMS"],
    solution: "integration-modernization",
    pdf: "/case-studies/pdf/growthgate.pdf",
  },
];

export const caseBySlug = (s: string) => caseStudies.find((c) => c.slug === s);
