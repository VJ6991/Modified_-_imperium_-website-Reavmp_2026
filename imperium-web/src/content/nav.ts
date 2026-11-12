import { solutions } from "./solutions";
import { products } from "./products";
import { industries } from "./industries";
import { pillars } from "./site";

export type MenuLink = { label: string; href: string; note?: string; color?: string };
export type MenuGroup = { key: string; label: string; href: string; intro: string; links: MenuLink[] };

export const menus: MenuGroup[] = [
  {
    key: "solutions",
    label: "Solutions",
    href: "/solutions/",
    intro: "Start from the problem you need to solve.",
    links: solutions.map((s) => ({ label: s.name, href: `/solutions/${s.slug}/`, note: s.navNote, color: pillars[s.pillar].color })),
  },
  {
    key: "products",
    label: "Products",
    href: "/products/",
    intro: "Platforms we build, deploy and support.",
    links: products.map((p) => ({ label: p.name, href: `/products/${p.slug}/`, note: p.kind })),
  },
  {
    key: "industries",
    label: "Industries",
    href: "/industries/",
    intro: "Shaped around the way your sector works.",
    links: industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}/`, note: i.short })),
  },
];

export const flatLinks: MenuLink[] = [
  { label: "Services", href: "/services/" },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Partners", href: "/partners/" },
  { label: "About", href: "/about/" },
  { label: "Insights", href: "/insights/" },
];
