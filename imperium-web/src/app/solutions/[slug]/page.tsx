import { notFound } from "next/navigation";
import { Button, Section, ArrowLink } from "@/components/ui";
import { PageHero, OutcomeRows, Symptoms, FaqList, PlatformList, CaseTeaser, CtaBand, SectionHead, StationLine } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { HeroRoute } from "@/components/HeroRoute";
import { solutions, solutionBySlug } from "@/content/solutions";
import { pillars } from "@/content/site";
import { pageMetadata, serviceLd } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const s = solutionBySlug((await params).slug)!;
  return pageMetadata({ title: `${s.name} solutions`, description: s.metaDescription, path: `/solutions/${s.slug}/` });
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const s = solutionBySlug((await params).slug);
  if (!s) notFound();
  const color = pillars[s.pillar].color;
  const path = `/solutions/${s.slug}/`;
  return (
    <>
      <JsonLd data={serviceLd(s.name, s.summary, path)} />
      <PageHero
        crumbs={[{ name: "Solutions", path: "/solutions/" }, { name: s.name, path }]}
        title={s.headline}
        lede={s.summary}
        asideMobile={false}
        aside={<HeroRoute {...s.route} colors={[color]} label={`${s.route.inputs.join(", ")} converge on ${s.route.hub}, leading to: ${s.route.stops.join(", ")}.`} />}
        actions={
          <>
            <Button href="/contact/">Talk to an Expert</Button>
            <Button href="#outcomes" variant="secondary">What changes</Button>
          </>
        }
      />

      <Section tone="mist" labelledBy="sound-familiar">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <h2 id="sound-familiar" className="text-h2">{s.problemTitle}</h2>
          <Symptoms items={s.symptoms} />
        </div>
      </Section>

      <Section id="outcomes" labelledBy="outcomes-title">
        <SectionHead id="outcomes-title" title="What changes" intro="Each outcome below names the mechanism that produces it, so you can judge whether it applies to your operation." />
        <OutcomeRows outcomes={s.outcomes} color={color} />
      </Section>

      <Section tone="mist" labelledBy="areas-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="flex flex-col gap-5">
            <h2 id="areas-title" className="text-h2">How it fits your environment</h2>
            <p className="text-lede text-ink-2">{s.fit}</p>
          </div>
          <div className="flex flex-col gap-6 lg:pt-3">
            <h3 className="text-[1rem] font-bold text-ink-2">What this work usually covers</h3>
            <StationLine color={color} stops={s.areas} vertical />
          </div>
        </div>
      </Section>

      <Section labelledBy="platforms-title">
        <SectionHead id="platforms-title" title="Platforms that deliver it" />
        <PlatformList slugs={s.platforms} />
      </Section>

      {s.caseStudies.length > 0 && (
        <Section tone="mist" labelledBy="proof-title">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 id="proof-title" className="text-h2">Where we have done this</h2>
            <ArrowLink href="/case-studies/">All case studies</ArrowLink>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {s.caseStudies.map((c) => <CaseTeaser key={c} slug={c} />)}
          </div>
        </Section>
      )}

      <Section labelledBy="faq">
        <FaqList faqs={s.faqs} />
      </Section>

      <CtaBand title="Discuss your requirements" body={`Tell us about your ${s.name.toLowerCase()} priorities. A specialist will reply within one business day.`} />
    </>
  );
}
