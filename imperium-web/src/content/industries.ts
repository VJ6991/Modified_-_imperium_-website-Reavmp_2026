import type { PillarId } from "./site";
import type { Faq } from "./solutions";

export type Industry = {
  slug: string;
  name: string;
  short: string; // one-line challenge for tiles
  headline: string;
  intro: string;
  metaDescription: string;
  pressures: { title: string; detail: string }[];
  useCases: { title: string; detail: string }[];
  route: { inputs: string[]; hub: string; stops: string[] }; // hero route-map fragment
  lines: PillarId[]; // which pillars serve this sector
  platforms: string[];
  caseStudies: string[];
  faqs: Faq[];
};

export const industries: Industry[] = [
  {
    slug: "banking-financial-services",
    name: "Banking & Financial Services",
    short: "Secure, verified service across every channel",
    headline: "Responsive service that still meets the standard for sensitive conversations.",
    intro:
      "Customers expect fast answers about accounts, cards and loans on whichever channel they choose, while every interaction has to be verified, recorded and auditable. We help banks and finance companies connect contact centre operations, communications and customer systems without loosening control.",
    metaDescription:
      "Contact centre and customer engagement for banks and financial services: authenticated IVR, call recording, core-banking integration, collections and audit-ready reporting.",
    pressures: [
      { title: "Verification on every channel", detail: "Callers and chat users must be identified before account details are discussed." },
      { title: "Complete audit trails", detail: "Recordings, interaction history and login records must be available on request." },
      { title: "Collections at scale", detail: "Outbound campaigns need dialling efficiency and accurate promise-to-pay tracking." },
    ],
    useCases: [
      { title: "Authenticated self-service IVR", detail: "Balance, card and loan queries answered after verification, with a route to an agent when needed." },
      { title: "Core-banking and CRM integration", detail: "The customer's profile opens for the agent when the call connects, so verification and history are on screen." },
      { title: "Collections operations", detail: "Predictive and preview dialling, promise-to-pay tracking and compliance reporting for collection teams." },
    ],
    route: { inputs: ["Branches", "Mobile app", "Call centre"], hub: "Verified service", stops: ["Caller verified", "Every call recorded", "Audit-ready reports"] },
    lines: ["cx", "comms", "ai"],
    platforms: ["iconnect", "inaipi"],
    caseStudies: [],
    faqs: [
      { q: "Can calls and chats be recorded and retained for audit?", a: "Yes. Interactions can be recorded and linked to the customer record, with cradle-to-grave history and login and logout tracking for audit purposes. Retention periods are configured to your policy." },
      { q: "Can the contact centre be hosted in-country?", a: "Yes. On-premise and in-country hosting options are available so customer data stays within the required jurisdiction." },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    short: "One front door for patients across every branch",
    headline: "Patients get through the first time, whichever branch they call.",
    intro:
      "Patients and families call to book, change and ask, often across several clinics and hospitals in a group. We help healthcare providers centralise that demand into one contact centre connected to their patient systems.",
    metaDescription:
      "Healthcare contact centres for hospitals and clinic groups: centralised multi-branch contact centre, appointment IVR, patient-record CTI, missed-call callback.",
    pressures: [
      { title: "Calls spread across branches", detail: "Each clinic answering its own phones means long waits and no shared view." },
      { title: "Records in a separate system", detail: "Staff look up the hospital information system by hand while the patient waits." },
      { title: "Missed calls are missed patients", detail: "A caller who gives up may not call back." },
    ],
    useCases: [
      { title: "Centralised multi-branch contact centre", detail: "One number and one team for every branch, with skill-based routing by department or language." },
      { title: "Patient-record screen pop", detail: "The patient's record from the hospital system opens when the call connects." },
      { title: "Automatic callback", detail: "Callers who hang up after waiting are called back and routed to an available agent." },
    ],
    route: { inputs: ["Appointments", "Results", "Billing", "Branch calls"], hub: "One number", stops: ["Patient record on screen", "Dropped calls returned", "One report for the group"] },
    lines: ["cx", "comms"],
    platforms: ["iconnect", "inaipi"],
    caseStudies: ["emirates-hospital"],
    faqs: [
      { q: "Can a contact centre serve several hospitals and clinics?", a: "Yes. A centralised contact centre can answer for every branch through one number, routing calls by branch, department or language, as we set up for Emirates Hospital's seven branches." },
    ],
  },
  {
    slug: "government",
    name: "Government & Public Services",
    short: "Accessible citizen service, data kept in-country",
    headline: "Consistent citizen service on every channel, with data that stays in-country.",
    intro:
      "Citizens expect to reach public services by phone, web and messaging, and to get the same answer each time. We help public bodies connect citizen-facing channels with the systems and case workflows their service teams use, on infrastructure that meets residency requirements.",
    metaDescription:
      "Citizen contact centres for government and public services: omnichannel service, case tracking with SLAs, public sentiment monitoring, in-country and on-premise hosting.",
    pressures: [
      { title: "Data residency", detail: "Citizen data often has to remain on national or on-premise infrastructure." },
      { title: "Accountability", detail: "Requests must be tracked from first contact to resolution against service targets." },
      { title: "Public perception", detail: "Sentiment on social media shapes trust and needs to be understood quickly." },
    ],
    useCases: [
      { title: "Citizen contact centre", detail: "Phone, web chat, WhatsApp and email answered by one team with shared history." },
      { title: "Case tracking with service levels", detail: "Requests become cases with owners, escalations and audit trails." },
      { title: "Public sentiment monitoring", detail: "Track mentions and sentiment about services and campaigns across social channels." },
    ],
    route: { inputs: ["Phone", "Web chat", "WhatsApp", "Social"], hub: "Citizen service", stops: ["Case with an owner", "Data in-country", "Sentiment tracked"] },
    lines: ["cx", "ai"],
    platforms: ["inaipi", "listen-iq", "iconnect"],
    caseStudies: ["ethio-telecom"],
    faqs: [
      { q: "Can the platform run on government infrastructure?", a: "Yes. Deployment options include on-premise installation and hosting in an in-country telecom operator data centre." },
    ],
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    short: "High volumes across sales, service and social",
    headline: "Handle telecom-scale service volumes, and offer contact centre services to your own customers.",
    intro:
      "Telecom operators manage very high interaction volumes across sales, service and support, much of it now on social channels. They are also well placed to sell cloud contact centre services to their enterprise customers. We work with operators on both.",
    metaDescription:
      "Contact centre and social customer care for telecom operators, and white-label cloud contact centre services hosted in the operator's data centre.",
    pressures: [
      { title: "Volume on social channels", detail: "Network, billing and outage complaints arrive as comments and messages, at scale." },
      { title: "Many channels, many teams", detail: "Sales, service and technical support each need their own routing and reporting." },
      { title: "New enterprise revenue", detail: "Enterprise customers want contact centre services bundled with connectivity." },
    ],
    useCases: [
      { title: "Social customer care", detail: "Comments and messages from every account in one inbox, with sentiment, topic grouping and escalation." },
      { title: "Operator-hosted contact centre service", detail: "A cloud contact centre platform hosted in the operator's data centre and sold to its enterprise and government customers, as Ethio telecom, du, Batelco, SLT-Mobitel and Mauritius Telecom do today." },
      { title: "Large internal contact centres", detail: "Omnichannel routing and supervision for the operator's own customer service. Ethio telecom runs 2,000 agents on the platform." },
    ],
    route: { inputs: ["Network issues", "Billing", "Sales", "Social"], hub: "One care team", stops: ["Grouped by topic", "Urgent cases flagged", "Resold to enterprises"] },
    lines: ["cx", "ai", "comms"],
    platforms: ["inaipi", "listen-iq"],
    caseStudies: ["ethio-telecom", "orange"],
    faqs: [
      { q: "Can we resell a contact centre service under our own brand?", a: "Yes. The Inaipi platform can be hosted in an operator's data centre and offered to enterprise customers as a contact centre service, with managed services by the operator, Imperium or a local partner." },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    short: "Guest conversations from booking to checkout",
    headline: "Every guest conversation answered, from the first enquiry to the review.",
    intro:
      "Guests ask, book and complain by phone, WhatsApp, email and social media, and they leave reviews. We help hotels and resort groups connect reservations, guest services and online reputation in one operation.",
    metaDescription:
      "Guest engagement for hotels and resorts: central reservations contact centre, WhatsApp guest messaging, review and social monitoring.",
    pressures: [
      { title: "Enquiries on every channel", detail: "Booking requests arrive by phone, WhatsApp, email and social direct messages." },
      { title: "Reviews shape demand", detail: "One unanswered complaint online is read by future guests." },
      { title: "Several properties", detail: "Groups need a shared view across hotels without losing each property's identity." },
    ],
    useCases: [
      { title: "Central reservations", detail: "Calls and messages for several properties handled by one team, routed by property and language." },
      { title: "WhatsApp guest messaging", detail: "Pre-arrival, in-stay and post-stay conversations on the guest's preferred channel." },
      { title: "Review and social monitoring", detail: "Reviews and mentions tracked and answered from one place, with sentiment by property." },
      { title: "Operator-hosted hospitality solution", detail: "Mauritius Telecom offers a hospitality contact centre solution on our platform; LUX* Resorts Group is among its customers." },
    ],
    route: { inputs: ["Reservations", "WhatsApp", "Reviews", "Social"], hub: "Guest desk", stops: ["Bookings answered", "Guests on WhatsApp", "Reviews answered"] },
    lines: ["cx", "ai"],
    platforms: ["inaipi", "listen-iq"],
    caseStudies: [],
    faqs: [
      { q: "Can we monitor reviews for several hotels separately?", a: "Yes. Listening and analytics can be set up per property and rolled up for the group." },
    ],
  },
  {
    slug: "insurance",
    name: "Insurance",
    short: "Clear updates through long claims journeys",
    headline: "Keep policyholders informed through every step of a claim.",
    intro:
      "Policyholders and claimants call most when they are uncertain: during a claim, at renewal, after a rejection. We help insurers connect contact centre interactions with the policy and claims workflows behind them.",
    metaDescription:
      "Insurance contact centres: claims-status IVR, policy-aware routing for renewals and claims, CSAT surveys and case management.",
    pressures: [
      { title: "Status calls", detail: "A large share of calls ask where a claim stands." },
      { title: "Renewal windows", detail: "Outbound reminders and inbound renewal calls peak at predictable times." },
      { title: "Complaints handling", detail: "Unhappy claimants need a tracked, timely response." },
    ],
    useCases: [
      { title: "Claims-status self-service", detail: "IVR and chat answer status questions from the claims system, with a route to an adjuster." },
      { title: "Policy-aware routing", detail: "Calls are routed by policy type and stage, so renewals and claims reach the right team." },
      { title: "Feedback that opens a case", detail: "A low satisfaction score after an interaction can open a case or trigger a callback." },
    ],
    route: { inputs: ["Claims", "Renewals", "Complaints"], hub: "Policy-aware routing", stops: ["Status without waiting", "Right team first time", "Low scores followed up"] },
    lines: ["cx", "comms"],
    platforms: ["inaipi", "iconnect"],
    caseStudies: [],
    faqs: [
      { q: "Can claim status be given without an agent?", a: "Yes, when the claims system exposes status data. Self-service IVR or chat can read it after verifying the caller, and hand over to an agent when needed." },
    ],
  },
  {
    slug: "retail-real-estate",
    name: "Retail & Real Estate",
    short: "No enquiry lost between channels",
    headline: "Respond to every enquiry fast enough to win it.",
    intro:
      "In retail and property, the first organisation to respond often wins the customer. We help retailers, developers and brokerages connect enquiries, service conversations and the CRM, so no lead waits.",
    metaDescription:
      "Contact centre and CRM integration for retail and real estate: lead routing, Salesforce integration, missed-enquiry callback, order-status self-service.",
    pressures: [
      { title: "Leads go cold quickly", detail: "An enquiry answered tomorrow may already have gone to a competitor." },
      { title: "CRM and phones apart", detail: "Sales teams log calls by hand, or not at all." },
      { title: "Agents in the field", detail: "Property consultants and site staff need the same tools as the office." },
    ],
    useCases: [
      { title: "Lead routing with CRM integration", detail: "Calls open the lead in Salesforce or your CRM, and are logged against it automatically." },
      { title: "Missed-enquiry callback", detail: "Missed and abandoned calls are queued for callback so no enquiry is lost." },
      { title: "Order and booking status", detail: "Self-service answers for order or viewing status, with handover to an agent." },
    ],
    route: { inputs: ["Calls", "Web enquiries", "Field staff"], hub: "Lead desk", stops: ["Lead opens in CRM", "Missed calls returned", "No enquiry lost"] },
    lines: ["cx", "comms"],
    platforms: ["iconnect", "inaipi"],
    caseStudies: ["omniyat"],
    faqs: [
      { q: "Can calls be logged in Salesforce automatically?", a: "Yes. With CRM integration, the caller's record opens when the call connects and the call is logged against it, as we set up for Omniyat with Salesforce." },
    ],
  },
];

export const industryBySlug = (s: string) => industries.find((x) => x.slug === s);
