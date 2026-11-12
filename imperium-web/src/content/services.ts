export type Service = { id: string; name: string; summary: string; youGet: string[] };

// Copy from the content audit, section 9. CONFIRM: managed-service hours and SLAs (audit section 15).
export const services: Service[] = [
  {
    id: "consulting",
    name: "Consulting & Advisory",
    summary:
      "We study your current environment, customer journeys and operational priorities, then define the target experience, the gaps and a practical roadmap.",
    youGet: ["Current-state assessment of channels, telephony and systems", "Customer journey and contact-reason analysis", "Target operating model and staged roadmap"],
  },
  {
    id: "implementation",
    name: "Implementation & Deployment",
    summary:
      "We turn the agreed design into a working environment: configuration, integration, testing and go-live, around agreed scope, dependencies and acceptance criteria.",
    youGet: ["Technical project management", "Configuration, testing and user acceptance support", "Training and handover documentation"],
  },
  {
    id: "integration",
    name: "Integration",
    summary:
      "We connect communications platforms, customer engagement tools and business applications so information and workflows move across the systems your teams use.",
    youGet: ["CTI and CRM integration (Salesforce, Zoho and others)", "REST API and screen-pop configuration", "Data and reporting integration"],
  },
  {
    id: "cloud",
    name: "Cloud Deployment & Migration",
    summary:
      "We plan and run cloud adoption or migration around the selected platform, your security requirements and your operating model, including in-country hosting where required.",
    youGet: ["Hosting option assessment: on-premise, private, in-country or public cloud", "Migration plan with cut-over windows", "Post-migration verification"],
  },
  {
    id: "modernization",
    name: "Modernization & Optimization",
    summary:
      "We improve existing environments through upgrades, workflow changes, integration and targeted automation, prioritised by operational impact and risk.",
    youGet: ["Configuration and performance review", "Reporting and routing improvements", "Staged upgrade plan"],
  },
  {
    id: "managed",
    name: "Managed Services & Support",
    summary:
      "After go-live we maintain and improve the environment with agreed support coverage, monitoring, incident handling and regular service reviews.",
    youGet: ["24×7 support line for existing customers", "Incident and change management", "Service reviews and optimization recommendations"],
  },
];

export const deliverySteps = [
  { name: "Assess", detail: "Your environment, customer journeys and priorities." },
  { name: "Design", detail: "The target experience, integrations and a staged roadmap." },
  { name: "Deploy", detail: "Configure, integrate, test and go live against agreed criteria." },
  { name: "Run & improve", detail: "24×7 support, service reviews and ongoing optimization." },
];
