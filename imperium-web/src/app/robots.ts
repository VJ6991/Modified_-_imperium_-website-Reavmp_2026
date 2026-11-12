import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

// Answer engines and AI assistants are allowed: being cited by them is a goal (GEO).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/contact.php"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
