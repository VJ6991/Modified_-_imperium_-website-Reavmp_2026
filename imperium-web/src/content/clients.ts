// Client logos. All of these already appear on the current live imperiumapp.com.
// CONFIRM before launch: written permission and relationship type for each (audit section 15).
export type Client = { slug: string; name: string; w: number; h: number; sector: string };

export const clients: Client[] = [
  { slug: "dubai-courts", name: "Dubai Courts", w: 360, h: 93, sector: "government" },
  { slug: "dubai-police", name: "Dubai Police", w: 111, h: 39, sector: "government" },
  { slug: "protocol-dubai", name: "Protocol Department – Dubai", w: 190, h: 120, sector: "government" },
  { slug: "nssf", name: "NSSF", w: 269, h: 120, sector: "government" },
  { slug: "ethio-telecom", name: "Ethio telecom", w: 186, h: 48, sector: "telecommunications" },
  { slug: "slt-mobitel", name: "SLT-Mobitel", w: 144, h: 54, sector: "telecommunications" },
  { slug: "mauritius-telecom", name: "Mauritius Telecom", w: 106, h: 28, sector: "telecommunications" },
  { slug: "coca-cola", name: "Coca-Cola", w: 56, h: 56, sector: "other" },
  { slug: "ritz-carlton", name: "The Ritz-Carlton", w: 61, h: 50, sector: "hospitality" },
  { slug: "minor-hotels", name: "Minor Hotels", w: 98, h: 33, sector: "hospitality" },
  { slug: "anantara", name: "Anantara Hotels, Resorts & Spas", w: 230, h: 116, sector: "hospitality" },
  { slug: "cinnamon", name: "Cinnamon Hotels & Resorts", w: 360, h: 106, sector: "hospitality" },
  { slug: "bmw-agmc", name: "AGMC (BMW)", w: 92, h: 120, sector: "other" },
  { slug: "dubai-national-insurance", name: "Dubai National Insurance", w: 360, h: 84, sector: "insurance" },
  { slug: "fairfirst-insurance", name: "Fairfirst Insurance", w: 127, h: 120, sector: "insurance" },
  { slug: "neuron", name: "Neuron Health Services", w: 266, h: 104, sector: "healthcare" },
  { slug: "pure-cs", name: "Pure CS", w: 360, h: 109, sector: "other" },
  { slug: "aafaq", name: "Aafaq Islamic Finance", w: 120, h: 120, sector: "banking-financial-services" },
  { slug: "emax", name: "Emax", w: 360, h: 116, sector: "retail-real-estate" },
  { slug: "al-batha", name: "Al Batha", w: 360, h: 57, sector: "other" },
  { slug: "ss-lootah", name: "S.S. Lootah", w: 282, h: 88, sector: "other" },
  { slug: "skyward", name: "Skyward Real Estate", w: 183, h: 115, sector: "retail-real-estate" },
  { slug: "efs", name: "EFS Facilities Services", w: 346, h: 120, sector: "other" },
  { slug: "ncc-group", name: "NCC Group", w: 360, h: 108, sector: "other" },
  { slug: "galadari", name: "Galadari Motor Driving Centre", w: 360, h: 85, sector: "other" },
  { slug: "inaya", name: "Inaya Facilities Management", w: 254, h: 120, sector: "other" },
];

export const homeClients = [
  "dubai-courts", "ethio-telecom", "ritz-carlton", "coca-cola", "dubai-police", "slt-mobitel",
  "anantara", "bmw-agmc", "dubai-national-insurance", "minor-hotels", "mauritius-telecom", "cinnamon",
];

export const clientBySlug = (s: string) => clients.find((c) => c.slug === s);
export const clientsForSector = (sector: string) => clients.filter((c) => c.sector === sector);

// Clients by sector, as listed in Imperium's 2026 partner presentation.
// CONFIRM before launch: publication permission for each name (audit section 15).
export const clientIndex: { sector: string; clients: string[] }[] = [
  {
    sector: "Government & Public Sector",
    clients: ["Presidential Court", "Department of Finance", "Protocol Department, Dubai", "Public Services Department", "Dubai Courts", "Dubai Police", "Ministry of Peace, Ethiopia", "Ministry of Revenue, Ethiopia", "Addis Ababa City Administration", "Oromia Health Bureau", "ZETDC", "ICESCO"],
  },
  {
    sector: "Healthcare & Insurance",
    clients: ["Emirates Hospitals Group", "Novomed", "Cure Medical Centers", "PureHealth", "Damas Medical Center", "Daman", "Al Salam Hospital", "The View Hospital", "Aman Hospital", "St. Peter Specialized Hospital", "Neuron", "Dubai National Insurance", "Inayah Insurance", "PSMAS"],
  },
  {
    sector: "Real Estate & Hospitality",
    clients: ["Omniyat", "Ezdan", "Massar", "Khidmah", "Al Majid Holding Group", "Alef", "Anantara", "The Ritz-Carlton", "Minor Hotels", "LUX* Resorts", "Cinnamon Group", "The Khyber"],
  },
  {
    sector: "Automotive & Services",
    clients: ["AGMC (BMW)", "Zayani Motors", "P&O Maritime Services", "World Security", "Rivoli Group", "Eco Drive", "Galadari Motor Driving Centre", "Coca-Cola", "Emax", "S.S. Lootah", "Skynet", "Gulf Drug", "Mace"],
  },
  {
    sector: "Banks & Telcos",
    clients: ["Aafaq", "Absa", "Commercial Bank of Ethiopia", "Dashen Bank", "Coop Bank of Oromia", "ARM Pensions", "Housing Bank", "ABC Bank", "Ethio telecom", "du", "Batelco", "Vodafone Qatar", "Orange", "SLT-Mobitel", "Mauritius Telecom", "Sudatel"],
  },
];
