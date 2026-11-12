import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, CtaBand } from "@/components/blocks";
import { Dot, Section } from "@/components/ui";
import { caseStudies } from "@/content/caseStudies";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case studies",
  description:
    "Customer work from Imperium: centralised hospital contact centre, Salesforce-integrated real estate contact centre, contact centre reporting, cloud migrations. The challenge, what we delivered and the result.",
  path: "/case-studies/",
});

export default function CaseStudiesPage() {
  const [first, ...rest] = caseStudies;
  return (
    <>
      <PageHero
        crumbs={[{ name: "Case studies", path: "/case-studies/" }]}
        title="Outcomes built on real customer work."
        lede="Every organisation starts from a different operating context. Each case study sets out the challenge, what we delivered and what changed, using the customer's own words where we have them."
      />
      <Section>
        <Link href={`/case-studies/${first.slug}/`} className="group grid gap-10 border-b border-rule pb-16 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-[0.92rem] font-semibold text-ink-3">{first.client}<Dot />{first.sectorLabel}<Dot />{first.year}</span>
            <h2 className="text-h1 group-hover:text-orange-ink">{first.title}</h2>
            <p className="measure text-lede text-ink-2">{first.summary}</p>
            <span className="inline-flex items-center gap-1.5 font-bold">
              Read the case study <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
          <dl className="grid content-start gap-6 border-t-2 border-ink pt-6">
            {first.facts.map((f) => (
              <div key={f.label} className="flex flex-row-reverse items-baseline justify-end gap-5 border-b border-rule pb-5">
                <dt className="text-ink-2">{f.label}</dt>
                <dd className="min-w-[6rem] font-mono text-[2rem] font-semibold tabular">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Link>
        <ul className="grid gap-x-12 gap-y-14 pt-16 md:grid-cols-2">
          {rest.map((c) => (
            <li key={c.slug}>
              <Link href={`/case-studies/${c.slug}/`} className="group flex h-full flex-col gap-4 border-t-2 border-ink pt-6 hover:border-orange">
                <span className="text-[0.92rem] font-semibold text-ink-3">{c.client}<Dot />{c.sectorLabel}<Dot />{c.year}</span>
                <h2 className="text-h3 md:text-[1.6rem]">{c.title}</h2>
                <p className="text-ink-2">{c.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-bold">
                  Read the case study <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand title="Have a similar challenge?" />
    </>
  );
}
