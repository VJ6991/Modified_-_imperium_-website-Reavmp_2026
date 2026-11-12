// Insights articles. CONFIRM before launch: named author and reviewer for each (E-E-A-T),
// and technical review by the product owner.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string; // ISO date
  readMinutes: number;
  author: string;
  answer: string; // short direct answer shown first (AEO)
  body: Block[];
  related: { label: string; href: string }[];
};

export const articles: Article[] = [
  {
    slug: "add-a-contact-centre-to-avaya-ip-office",
    title: "Adding a contact centre to Avaya IP Office without replacing it",
    description:
      "What Avaya IP Office already gives you, what a contact centre needs on top, and how to add omnichannel routing, supervision and reporting without changing the phone system.",
    category: "Contact Centre Modernization",
    published: "2026-11-11",
    readMinutes: 6,
    author: "Imperium Solutions Team",
    answer:
      "You can. Avaya IP Office already provides extensions, hunt groups, call control and call records. A contact centre layer connects to it through its CTI and management interfaces and adds what IP Office lacks on its own: an agent desktop, omnichannel routing, live supervision and contact centre reporting. The phone system, numbers and handsets stay as they are.",
    body: [
      { type: "h2", text: "What IP Office already does" },
      { type: "p", text: "Avaya IP Office is a widely deployed business phone system. It handles extensions, hunt groups, voicemail, basic call distribution and call detail records. Many organisations use it as their contact centre simply by pointing a hunt group at a set of phones." },
      { type: "p", text: "That works until the team needs to know what is happening. Hunt groups distribute calls, but they do not give agents customer context, give supervisors a live view of queues and service levels, or produce the reports a contact centre manager is measured on." },
      { type: "h2", text: "What a contact centre needs on top" },
      { type: "ul", items: [
        "An agent desktop that shows the caller's record and history when the call connects, with call controls and wrap-up on the same screen.",
        "Routing by queue, skill and priority, and for digital channels such as web chat and email as well as voice.",
        "Supervisor tools: live agent states, queue volumes and service level, and the ability to listen in, coach privately or join a conversation.",
        "Reporting: agent performance, service level, abandoned calls, dispositions and a full history of each interaction.",
      ] },
      { type: "h2", text: "Replace or extend?" },
      { type: "p", text: "One option is to replace IP Office with a larger contact centre platform. That brings new telephony, new licences, new handsets or softphones, and a migration of numbering and call flows. It makes sense when the phone system itself is at end of life." },
      { type: "p", text: "The other option is to extend it. A contact centre application connects to IP Office through its interfaces and leaves the telephony in place. The investment already made in IP Office keeps working, and the change for agents is mostly a new desktop." },
      { type: "h2", text: "What to check before extending" },
      { type: "ul", items: [
        "Interfaces: the application should use IP Office's supported CTI and management APIs, not screen-scraping or middleware that breaks on upgrade.",
        "Resilience: if IP Office runs as a primary and secondary pair, the contact centre should fail over with it, and should itself support a high-availability deployment.",
        "Where it runs: decide whether the contact centre must sit on your own servers or can run in the cloud. This affects data residency and network design.",
        "CRM connection: confirm how customer records will open, whether through a native connector or a URL screen pop.",
        "Channels: confirm which channels are handled natively and which through connected services.",
      ] },
      { type: "h2", text: "How iConnect does it" },
      { type: "p", text: "iConnect, built by Imperium, connects to IP Office through MTCTI and the Web Management API. It uses existing extensions and hunt groups, synchronises users and groups, and adds a single desktop for voice and web chat, live supervision on both, 14 standard reports and a no-code report builder. It runs on your own servers, as a single server or a three-node high-availability cluster that follows IP Office primary and secondary failover." },
    ],
    related: [
      { label: "iConnect", href: "/products/iconnect/" },
      { label: "Integration & Modernization", href: "/solutions/integration-modernization/" },
    ],
  },
  {
    slug: "keeping-contact-centre-data-in-country",
    title: "Keeping contact centre data in-country: the hosting options",
    description:
      "On-premise, private data centre, telco-hosted cloud or public cloud: how each option affects where customer conversations are stored, and the questions to ask before choosing.",
    category: "Integration & Architecture",
    published: "2026-11-11",
    readMinutes: 5,
    author: "Imperium Solutions Team",
    answer:
      "There are four common ways to host a contact centre when customer data must stay in the country: on your own servers, in a private data centre in the country, on a cloud platform hosted in-country by a telecom operator, or in a public cloud region inside the country where one exists. Which one fits depends on your regulator's requirements, your IT team's capacity and how quickly you need to scale.",
    body: [
      { type: "h2", text: "Why it matters for contact centres" },
      { type: "p", text: "A contact centre stores more personal data than most systems: call recordings, chat transcripts, emails, customer identifiers and notes. Banks, insurers, healthcare providers and public bodies in many countries have to keep that data within national borders, or on infrastructure they control." },
      { type: "h2", text: "The four options" },
      { type: "ul", items: [
        "On-premise: the platform runs on your own servers. You keep full control and full responsibility for operation, patching and resilience.",
        "Private data centre: the platform runs on dedicated infrastructure in a data centre inside the country, operated by you or a provider.",
        "Telco-hosted cloud: a telecom operator hosts the platform in its in-country data centre and offers it as a service, often bundled with connectivity and SIP trunks.",
        "In-country public cloud region: where a hyperscale cloud provider has a region in the country, a cloud platform can be deployed there.",
      ] },
      { type: "h2", text: "Questions to ask before choosing" },
      { type: "ul", items: [
        "Which data must stay in-country: recordings and transcripts only, or also metadata, logs and backups?",
        "Where does AI processing happen? If the platform calls an external AI service, check where that processing runs.",
        "Who operates the platform day to day, and is that support team allowed to access the data?",
        "How does the platform fail over, and does the failover site sit in the same country?",
        "Can you move between options later, for example from on-premise to telco-hosted, without changing platform?",
      ] },
      { type: "h2", text: "What Imperium offers" },
      { type: "p", text: "iConnect is designed for on-premise deployment, including a high-availability cluster. Inaipi can be used as a hosted service, or hosted in-country in a telecom operator's data centre; SLT-Mobitel in Sri Lanka, for example, launched an enterprise contact centre service powered by Inaipi in 2023. We help you match the option to your policy and operating model." },
    ],
    related: [
      { label: "Integration & Modernization", href: "/solutions/integration-modernization/" },
      { label: "Government & Public Services", href: "/industries/government/" },
    ],
  },
];

export const articleBySlug = (s: string) => articles.find((a) => a.slug === s);
