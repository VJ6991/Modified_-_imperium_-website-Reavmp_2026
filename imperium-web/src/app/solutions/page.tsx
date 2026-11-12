import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, CtaBand } from "@/components/blocks";
import { Section } from "@/components/ui";
import { solutions } from "@/content/solutions";
import { pillars } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solutions",
  description:
    "Enterprise solutions for connected customer and business operations: customer experience transformation, enterprise communications, AI and automation, integration and modernization.",
  path: "/solutions/",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Solutions", path: "/solutions/" }]}
        title="Enterprise solutions for connected customer and business operations."
        lede="Technology creates value when it solves a real operating problem. Start from the problem that sounds most like yours."
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
      <CtaBand title="Not sure where your problem fits?" body="Describe what is changing in your operation. We will tell you which approach fits, including when the answer is a smaller change than you expected." />
    </>
  );
}
