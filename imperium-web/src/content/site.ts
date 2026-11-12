// Company facts. Items marked CONFIRM are carried over from the current live site
// and must be re-confirmed by operations/legal before launch (audit section 11.5).

export const site = {
  name: "Imperium",
  legalName: "Imperium Software Technologies DMCC", // CONFIRM: DMCC vs FZCO
  url: "https://www.imperiumapp.com",
  founded: 2005,
  tagline: "Technology that connects. Intelligence that transforms.", // CONFIRM: approved public line
  description:
    "Imperium Software Technologies helps enterprises connect customer engagement, communications infrastructure and applied AI. Founded in Dubai in 2005, Imperium builds and deploys contact centre and communications platforms and supports them with consulting, integration and 24×7 managed services.",
  shortDescription:
    "Contact centre, enterprise communications and applied AI for enterprises in the Middle East, Africa and Asia. Dubai, since 2005.",
  email: {
    sales: "sales@imperiumapp.com",
    support: "support@imperiumapp.com",
  },
  supportPhone: "+971 4 244 3417",
  linkedin: "https://www.linkedin.com/company/13718810/", // CONFIRM: public company page URL
  // From Imperium's 2026 partner presentations (Batelco, Zoom). CONFIRM before launch: the decks say
  // "17+ years" and the Zoom deck's timeline starts in 2009, while the live site says founded 2005.
  // "1M+ AI-based CX interactions" is from the Zoom deck: confirm what is counted.
  stats: [
    { value: "2005", label: "founded in Dubai" },
    { value: "200+", label: "enterprise customers" },
    { value: "75+", label: "specialists" },
    { value: "1.8M+", label: "conversations handled on our platforms" },
    { value: "1M+", label: "AI-based customer interactions" },
  ],
  leadership: [
    { name: "Manikandan Karunakaran", title: "Founder & CEO", partners: false },
    { name: "Sanju Sambasivan", title: "Director, Sales & Partnerships", partners: true },
    { name: "Savio Tovar Dias", title: "Chief Strategist", partners: false },
    { name: "Candice Rasool", title: "Regional Channel Director", partners: true },
    { name: "Mayank Mittal", title: "Regional Channel Sales", partners: true },
    { name: "Sajith Thrimavithana", title: "Head of CX Technology", partners: false },
  ],
  offices: [
    { city: "Dubai", country: "United Arab Emirates", role: "Head office", phones: ["+971 4 244 3417", "+971 4 244 3419"] },
    { city: "Singapore", country: "Singapore", role: "Regional office", phones: ["+65 6773 0274"] },
    { city: "Chennai", country: "India", role: "Delivery centre", phones: ["+91 44 421 22440"] },
    { city: "Bengaluru", country: "India", role: "Delivery centre", phones: ["+91 80 416 22894"] },
  ],
} as const;

export type NavItem = { label: string; href: string; note?: string };

export const pillars = {
  cx: { id: "cx", name: "Customer Experience", color: "var(--color-orange)", solution: "/solutions/customer-experience/" },
  comms: { id: "comms", name: "Enterprise Communications", color: "var(--color-blue)", solution: "/solutions/enterprise-communications/" },
  ai: { id: "ai", name: "AI & Automation", color: "var(--color-teal)", solution: "/solutions/ai-automation/" },
} as const;
export type PillarId = keyof typeof pillars;
