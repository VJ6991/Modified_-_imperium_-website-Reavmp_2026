import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button, Section, ArrowLink, Station } from "@/components/ui";
import { PageHero, OutcomeRows, FaqList, CaseTeaser, CtaBand, SectionHead } from "@/components/blocks";
import { AgentDesktop } from "@/components/AgentDesktop";
import { JsonLd } from "@/components/JsonLd";
import { products, productBySlug } from "@/content/products";
import { solutionBySlug } from "@/content/solutions";
import { pageMetadata, softwareLd } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = productBySlug((await params).slug)!;
  return pageMetadata({ title: `${p.name}: ${p.kind}`, description: p.metaDescription, path: `/products/${p.slug}/` });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = productBySlug((await params).slug);
  if (!p) notFound();
  const path = `/products/${p.slug}/`;
  const isIconnect = p.slug === "iconnect";
  return (
    <>
      <JsonLd data={softwareLd({ name: p.name, description: p.summary, path, category: p.kind, byImperium: isIconnect })} />
      <PageHero
        crumbs={[{ name: "Products", path: "/products/" }, { name: p.name, path }]}
        title={p.promise}
        lede={p.summary}
        actions={
          <>
            <Button href="/contact/">Talk to an Expert</Button>
            <Button href="/contact/?type=demo" variant="secondary">Request a demo</Button>
          </>
        }
        aside={
          isIconnect ? (
            <AgentDesktop />
          ) : (
            <div className="flex flex-col gap-5 rounded-[var(--radius-md)] border border-rule bg-mist p-7">
              <span className="text-[2rem] font-extrabold leading-none">{p.name}</span>
              <span className="font-semibold text-ink-2">{p.kind}</span>
              <span className="border-t border-rule pt-4 text-[0.95rem] text-ink-3">{p.relationship}</span>
            </div>
          )
        }
      />

      <Section tone="mist" labelledBy="for-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <h2 id="for-title" className="text-h2">Who {p.name} is for</h2>
          <ul className="flex flex-col">
            {p.forWho.map((w) => (
              <li key={w} className="flex gap-4 border-b border-rule py-4 last:border-b-0">
                <span className="pt-1"><Station size="sm" /></span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section labelledBy="outcomes-title">
        <SectionHead id="outcomes-title" title="What it changes" />
        <OutcomeRows outcomes={p.outcomes} color={isIconnect ? "var(--color-orange)" : p.slug === "inaipi" ? "var(--color-blue)" : "var(--color-teal)"} />
      </Section>

      <Section tone="mist" labelledBy="caps-title">
        <SectionHead id="caps-title" title="Capabilities" intro={`What ${p.name} does, grouped by the people who use it.`} />
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {p.capabilities.map((g) => (
            <div key={g.role} className="flex flex-col">
              <h3 className="border-b-2 border-ink pb-3 text-h3">{g.role}</h3>
              <dl className="flex flex-col">
                {g.items.map((it) => (
                  <div key={it.name} className="border-b border-rule py-4">
                    <dt className="font-bold">{it.name}</dt>
                    <dd className="mt-1 text-[0.97rem] text-ink-2">{it.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Section>

      <Section labelledBy="integrate-title">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="integrate-title" className="mb-8 text-h2">Integrations</h2>
            <dl className="flex flex-col gap-7">
              {p.integrations.map((g) => (
                <div key={g.group}>
                  <dt className="mb-3 font-bold">{g.group}</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {g.items.map((i) => (
                        <li key={i} className="rounded-[var(--radius-sm)] border border-rule px-3 py-1.5 text-[0.92rem]">{i}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="mb-8 text-h2">Deployment</h2>
            <dl className="border-t border-ink">
              {p.deployment.map((d) => (
                <div key={d.name} className="border-b border-rule py-5">
                  <dt className="text-[1.1rem] font-extrabold">{d.name}</dt>
                  <dd className="mt-1 text-ink-2">{d.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {p.useCases && (
        <Section labelledBy="usecases-title">
          <SectionHead id="usecases-title" title="Where teams use it" />
          <ol className="border-t-2 border-ink">
            {p.useCases.map((u) => (
              <li key={u.title} className="grid gap-2 border-b border-rule py-6 md:grid-cols-[2.5rem_minmax(0,1fr)_minmax(0,1.3fr)] md:gap-10">
                <span className="pt-1.5"><Station size="sm" color="var(--color-teal)" /></span>
                <h3 className="text-h3">{u.title}</h3>
                <p className="text-ink-2">{u.detail}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {p.roadmap && (
        <Section labelledBy="roadmap-title">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div className="flex flex-col gap-4">
              <h2 id="roadmap-title" className="text-h2">On the roadmap</h2>
              <p className="text-ink-2">Planned capabilities, listed so you can plan around them. We confirm timing for each one in the proposal.</p>
            </div>
            <ul className="relative flex flex-col gap-5 pl-9">
              <span aria-hidden className="absolute bottom-2 left-[7px] top-2 w-[5px] rounded-full [background:repeating-linear-gradient(to_bottom,var(--color-ink-3)_0_10px,transparent_10px_16px)]" />
              {p.roadmap.map((r) => (
                <li key={r} className="relative">
                  <span className="absolute -left-9 top-1"><Station color="var(--color-ink-3)" /></span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {p.steps && (
        <Section tone="mist" labelledBy="steps-title">
          <SectionHead id="steps-title" title={p.stepsTitle ?? "How to evaluate it"} />
          <ol className="relative grid gap-8 md:grid-cols-3">
            <span aria-hidden className="absolute left-2 right-2 top-[7px] hidden h-[5px] rounded-full bg-orange md:block" />
            {p.steps.map((s, i) => (
              <li key={s.name} className="relative flex flex-col gap-3">
                <Station color="var(--color-orange)" />
                <span className="font-mono text-[0.8rem] text-ink-3">Step {i + 1}</span>
                <h3 className="text-h3">{s.name}</h3>
                <p className="text-ink-2">{s.detail}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {p.caseStudies.length > 0 && (
        <Section labelledBy="proof-title">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 id="proof-title" className="text-h2">Related work</h2>
            <ArrowLink href="/case-studies/">All case studies</ArrowLink>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {p.caseStudies.map((c) => <CaseTeaser key={c} slug={c} />)}
          </div>
        </Section>
      )}

      <Section tone="mist" labelledBy="faq">
        <FaqList faqs={p.faqs} title={`${p.name} questions`} />
        <div className="mt-14 flex flex-col gap-4 border-t border-rule pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="font-semibold text-ink-2">Related solutions:</span>
            {p.solutions.map((sl) => {
              const s = solutionBySlug(sl)!;
              return <Link key={sl} href={`/solutions/${sl}/`} className="font-bold underline decoration-rule underline-offset-4 hover:decoration-orange">{s.name}</Link>;
            })}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {p.externalLinks.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener" className="inline-flex items-center gap-1 font-semibold text-ink-2 hover:text-ink">
                {l.label} <ArrowUpRight aria-hidden className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand title={`See ${p.name} with your own scenarios.`} body="We configure the demo around your queues, channels and integrations, then scope a proof of concept if it fits." secondary={{ label: "Request a demo", href: "/contact/?type=demo" }} />
    </>
  );
}
