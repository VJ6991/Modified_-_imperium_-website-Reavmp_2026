import type { Metadata } from "next";
import { site } from "@/content/site";
import type { Faq } from "@/content/solutions";

export const absolute = (path: string) => new URL(path, site.url).toString();

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Imperium Software Technologies",
      type,
      locale: "en_GB",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Imperium Software Technologies" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

// ---------- JSON-LD builders ----------
const orgId = `${site.url}/#organization`;

export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": orgId,
  name: "Imperium Software Technologies",
  legalName: site.legalName,
  alternateName: "Imperium",
  url: site.url,
  logo: absolute("/brand/imperium-logo-orange.png"),
  description: site.description,
  foundingDate: String(site.founded),
  founder: { "@type": "Person", name: site.leadership[0].name, jobTitle: site.leadership[0].title },
  email: site.email.sales,
  sameAs: [site.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  areaServed: ["AE", "SA", "BH", "QA", "OM", "KW", "SG", "IN", "LK", "ET", "MU"],
  knowsAbout: [
    "Contact centre software",
    "Omnichannel customer service",
    "Computer telephony integration",
    "Avaya IP Office",
    "Unified communications",
    "Conversational AI",
    "Social listening",
  ],
  contactPoint: [
    { "@type": "ContactPoint", contactType: "sales", email: site.email.sales, telephone: site.offices[0].phones[0], areaServed: "AE" },
    { "@type": "ContactPoint", contactType: "technical support", email: site.email.support, telephone: site.supportPhone, hoursAvailable: "Mo-Su 00:00-23:59" },
  ],
});

export const websiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: "Imperium Software Technologies",
  publisher: { "@id": orgId },
  inLanguage: "en",
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absolute(it.path) })),
});

export const faqLd = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const serviceLd = (name: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: absolute(path),
  provider: { "@id": orgId },
  areaServed: "Middle East, Africa and Asia",
});

export const softwareLd = (p: { name: string; description: string; path: string; category: string; byImperium: boolean }) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: p.name,
  description: p.description,
  url: absolute(p.path),
  applicationCategory: "BusinessApplication",
  applicationSubCategory: p.category,
  operatingSystem: "Web",
  ...(p.byImperium ? { publisher: { "@id": orgId }, author: { "@id": orgId } } : { provider: { "@id": orgId } }),
});

export const articleLd = (a: { title: string; description: string; path: string; published: string; author: string }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: a.title,
  description: a.description,
  url: absolute(a.path),
  datePublished: a.published,
  dateModified: a.published,
  author: { "@type": "Organization", name: a.author, url: site.url },
  publisher: { "@id": orgId },
  mainEntityOfPage: absolute(a.path),
  image: absolute("/og.png"),
});
