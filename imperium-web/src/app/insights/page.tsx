import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, CtaBand } from "@/components/blocks";
import { Dot, Section } from "@/components/ui";
import { articles } from "@/content/insights";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights",
  description: "Practical perspectives on contact centre modernization, enterprise communications, applied AI and integration architecture.",
  path: "/insights/",
});

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function InsightsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Insights", path: "/insights/" }]}
        title="Perspectives on customer experience and enterprise technology."
        lede="Practical notes on the technologies, operating models and decisions shaping customer engagement and enterprise communications."
      />
      <Section>
        <ul className="border-t border-ink">
          {articles.map((a) => (
            <li key={a.slug} className="border-b border-rule">
              <Link href={`/insights/${a.slug}/`} className="group grid gap-3 py-9 md:grid-cols-[14rem_minmax(0,1fr)_1.5rem] md:gap-10">
                <span className="text-[0.92rem] text-ink-3">
                  <time dateTime={a.published}>{fmt(a.published)}</time>
                  <span className="block font-semibold text-ink-2">{a.category}</span>
                </span>
                <div className="flex flex-col gap-3">
                  <h2 className="text-h3 md:text-[1.6rem] group-hover:text-orange-ink">{a.title}</h2>
                  <p className="measure text-ink-2">{a.description}</p>
                  <span className="text-[0.88rem] text-ink-3">{a.readMinutes} min read<Dot />{a.author}</span>
                </div>
                <ArrowRight aria-hidden className="hidden size-5 text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:text-ink md:block" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </>
  );
}
