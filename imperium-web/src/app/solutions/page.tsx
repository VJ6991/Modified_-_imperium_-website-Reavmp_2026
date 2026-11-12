import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, CtaBand } from "@/components/blocks";
import { Section, Station } from "@/components/ui";
import { solutions } from "@/content/solutions";
import { pillars } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solutions",
  description:
    "Enterprise solutions for connected customer and business operations: customer experience transformation, enterprise communications, AI and automation, integration and modernization.",
  path: "/solutions/",
});

// The enterprise CX ecosystem, from Imperium's 2026 Zoom partnership deck.
const layers = [
  { name: "Business systems", items: "CRM, ERP, helpdesk, business apps, BI", detail: "The records and workflows your teams already depend on.", key: false },
  { name: "Customer data", items: "Unify, normalise, enrich", detail: "One view of each customer, built from the systems above.", key: false },
  { name: "Channels", items: "Voice, email, chat, WhatsApp, social, video", detail: "Every conversation arrives with that context attached.", key: false },
  { name: "Orchestration", items: "Workflow, AI automation, outreach, surveys", detail: "Routing, automation and follow-up, with people in charge of the outcome.", key: true },
  { name: "Deployment", items: "On-premise, cloud, sovereign, multi-cloud", detail: "Where it runs is decided by your regulation and policy, not by the platform.", key: false },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Solutions", path: "/solutions/" }]}
        title="Customer experience change is about outcomes, not technology alone."
        lede="Connected experiences for customers, greater efficiency for the business. Start from the problem that sounds most like yours."
      />
      <Section>
        <ul className="grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-rule bg-rule md:grid-cols-2">
          {solutions.map((s) => (
            <li key={s.slug} className="bg-paper">
              <Link href={`/solutions/${s.slug}/`} className="group flex h-full flex-col gap-5 p-8 hover:bg-mist md:p-10">
                <span aria-hidden className="h-[5px] w-12 rounded-full" style={{ background: pillars[s.pillar].color }} />
                <h2 className="text-h3 md:text-[1.6rem]">{s.name}</h2>
                <p className="text-[1.15rem] font-semibold leading-snug">{s.headline}</p>
                <ul className="flex flex-col gap-2 text-ink-2">
                  {s.outcomes.slice(0, 3).map((o) => (
                    <li key={o.title} className="flex gap-3">
                      <span aria-hidden className="mt-[0.7rem] h-[2px] w-3 shrink-0" style={{ background: pillars[s.pillar].color }} />
                      {o.title}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-bold">
                  Explore {s.name} <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="mist" labelledBy="stack-title">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-end lg:gap-20">
          <h2 id="stack-title" className="text-h2">How the pieces fit together</h2>
          <p className="text-lede text-ink-2">
            Every solution draws on the same five layers. Most projects change one or two of them and connect to the rest as
            they are.
          </p>
        </div>
        <ol className="relative border-t-2 border-ink">
          {layers.map((l) => (
            <li key={l.name} className="grid gap-2 border-b border-rule py-6 md:grid-cols-[16rem_1fr_1.2fr] md:items-baseline md:gap-8">
              <span className="flex items-center gap-3">
                <Station color={l.key ? "var(--color-orange)" : undefined} />
                <span className="text-[1.2rem] font-extrabold">{l.name}</span>
              </span>
              <span className="font-semibold">{l.items}</span>
              <span className="text-ink-2">{l.detail}</span>
            </li>
          ))}
        </ol>
      </Section>
      <CtaBand title="Not sure where your problem fits?" body="Describe what is changing in your operation. We will tell you which approach fits, including when the answer is a smaller change than you expected." />
    </>
  );
}
