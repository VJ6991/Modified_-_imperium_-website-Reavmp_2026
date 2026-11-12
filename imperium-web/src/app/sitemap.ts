import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { solutions } from "@/content/solutions";
import { products } from "@/content/products";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/caseStudies";
import { articles } from "@/content/insights";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-11");
  const u = (path: string, priority: number) => ({ url: `${site.url}${path}`, lastModified, priority });
  return [
    u("/", 1),
    u("/solutions/", 0.9),
    ...solutions.map((s) => u(`/solutions/${s.slug}/`, 0.9)),
    u("/products/", 0.9),
    ...products.map((p) => u(`/products/${p.slug}/`, 0.9)),
    u("/industries/", 0.8),
    ...industries.map((i) => u(`/industries/${i.slug}/`, 0.8)),
    u("/services/", 0.8),
    u("/case-studies/", 0.8),
    ...caseStudies.map((c) => u(`/case-studies/${c.slug}/`, 0.7)),
    u("/partners/", 0.7),
    u("/about/", 0.7),
    u("/insights/", 0.6),
    ...articles.map((a) => ({ url: `${site.url}/insights/${a.slug}/`, lastModified: new Date(a.published), priority: 0.6 })),
    u("/contact/", 0.8),
    u("/privacy/", 0.2),
  ];
}
