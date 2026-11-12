import { notFound } from "next/navigation";
import Link from "next/link";
import { Button, Section, ArrowLink, Station } from "@/components/ui";
import { PageHero, FaqList, PlatformList, CaseTeaser, CtaBand, SectionHead, LogoRow } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { HeroRoute } from "@/components/HeroRoute";
import { industries, industryBySlug } from "@/content/industries";
import { clientsForSector } from "@/content/clients";
import { pillars } from "@/content/site";
import { pageMetadata, serviceLd } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const i = industryBySlug((await params).slug)!;
  return pageMetadata({ title: `${i.name}: customer experience and contact centres`, description: i.metaDescription, path: `/industries/${i.slug}/` });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const i = industryBySlug((await params).slug);
  if (!i) notFound();
  const path = `/industries/${i.slug}/`;
  const logos = clientsForSector(i.slug).map((c) => c.slug);
  return (
    <>
      <JsonLd data={serviceLd(`Customer experience and contact centre solutions for ${i.name}`, i.intro, path)} />
      <PageHero
        crumbs={[{ name: "Industries", path: "/industries/" }, { name: i.name, path }]}
        title={i.headline}
        lede={i.intro}
        actions={<Button href="/contact/">Talk to an Expert</Button>}
        asideMobile={false}
        aside={<HeroRoute {...i.route} colors={i.lines.map((l) => pillars[l].color)} label={`${i.route.inputs.join(", ")} converge on ${i.route.hub}, leading to: ${i.route.stops.join(", ")}.`} />}
      />

      <Section tone="mist" labelledBy="pressure-title">
        <SectionHead id="pressure-title" title={`What is different in ${i.name.toLowerCase()}`} />
        <dl className="grid gap-10 md:grid-cols-3">
          {i.pressures.map((p) => (
            <div key={p.title} className="flex flex-col gap-2 border-t-2 border-ink pt-5">
              <dt className="text-h3 font-extrabold">{p.title}</dt>
              <dd className="text-ink-2">{p.detail}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section labelledBy="usecases-title">
        <SectionHead id="usecases-title" title="Where we usually start" />
        <ol className="border-t border-ink">
          {i.useCases.map((u) => (
            <li key={u.title} className="grid gap-3 border-b border-rule py-7 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.2fr)] md:gap-10">
              <span className="pt-1.5"><Station size="sm" /></span>
              <h3 className="text-h3">{u.title}</h3>
              <p className="text-ink-2">{u.detail}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="font-semibold text-ink-2">Relevant solutions:</span>
          {i.lines.map((l) => (
            <Link key={l} href={pillars[l].solution} className="inline-flex items-center gap-2 font-bold hover:text-orange-ink">
              <span aria-hidden className="h-[5px] w-5 rounded-full" style={{ background: pillars[l].color }} />
              {pillars[l].name}
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="mist" labelledBy="platforms-title">
        <SectionHead id="platforms-title" title="Platforms that fit" />
        <PlatformList slugs={i.platforms} />
      </Section>

      {(logos.length > 0 || i.caseStudies.length > 0) && (
        <Section labelledBy="proof-title">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 id="proof-title" className="text-h2">Organisations we work with in this sector</h2>
            <ArrowLink href="/case-studies/">All case studies</ArrowLink>
          </div>
          {logos.length > 0 && <LogoRow slugs={logos} />}
          {i.caseStudies.length > 0 && (
            <div className={`grid gap-10 md:grid-cols-2 ${logos.length ? "mt-16" : ""}`}>
              {i.caseStudies.map((c) => <CaseTeaser key={c} slug={c} />)}
            </div>
          )}
        </Section>
      )}

      <Section tone="mist" labelledBy="faq">
        <FaqList faqs={i.faqs} />
      </Section>

      <CtaBand title={`Talk to someone who has worked in ${i.name.toLowerCase()}.`} body="Tell us how your customers reach you today and what has to change. A specialist will reply within one business day." />
    </>
  );
}
