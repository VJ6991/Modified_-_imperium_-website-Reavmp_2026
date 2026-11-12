// Telecom operators running Imperium contact centre platforms, from Imperium's 2026
// operator presentations (Batelco and Ethio telecom decks).
// CONFIRM before launch: each operator approves being named, and each listed reference.

export type Operator = {
  name: string;
  country: string;
  offer: string[];
  segments: string[];
  hosting: string[];
  references: string[];
};

export const operators: Operator[] = [
  {
    name: "Ethio telecom",
    country: "Ethiopia",
    offer: ["Contact centre as a service"],
    segments: ["Enterprises", "Government", "SMB"],
    hosting: ["In-country, Ethio telecom data centre", "Runs Ethio telecom's own 2,000-agent omnichannel contact centre", "Resold as CCaaS to end customers"],
    references: ["Prime Minister's Office", "Dashen Bank", "Amhara Bank", "Ministry of Peace", "Oromia Bank", "Addis Ababa City Administration"],
  },
  {
    name: "du",
    country: "United Arab Emirates",
    offer: ["Contact centre cloud service"],
    segments: ["Enterprises", "Government"],
    hosting: ["In-country, du data centre"],
    references: ["Pure CS", "AGMC – Al Batha", "EFS Facility Management", "Inayah Insurance", "Ezdan Holdings"],
  },
  {
    name: "Batelco",
    country: "Bahrain",
    offer: ["Contact centre cloud services", "On-premise contact centre"],
    segments: ["SMEs", "Enterprises", "Government"],
    hosting: ["In-country, Batelco data centres", "Customer-premise deployment"],
    references: ["Al Zayani Motors", "Housing Bank", "Batelco ISP"],
  },
  {
    name: "SLT-Mobitel",
    country: "Sri Lanka",
    offer: ["Contact centre cloud services"],
    segments: ["SMEs", "Corporate", "Enterprises", "Government"],
    hosting: ["In-country, SLT data centres", "Managed services"],
    references: ["Fairfirst Insurance", "Cinnamon Group", "SIT"],
  },
  {
    name: "Mauritius Telecom",
    country: "Mauritius",
    offer: ["Contact centre services", "Hospitality solution"],
    segments: ["SMEs", "Enterprises"],
    hosting: ["In-country, Mauritius data centres"],
    references: ["LUX* Resorts Group", "ABC Bank"],
  },
  {
    name: "Vodafone Qatar",
    country: "Qatar",
    offer: ["On-premise contact centre", "Managed service"],
    segments: ["SMEs", "Enterprises", "Government", "Partner channels", "BPO"],
    hosting: ["On-premise"],
    references: ["Aman Hospital"],
  },
];
