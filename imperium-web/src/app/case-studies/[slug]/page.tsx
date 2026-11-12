import { notFound } from "next/navigation";
import Link from "next/link";
import { FileDown, Quote } from "lucide-react";
import { Button, Section, Station } from "@/components/ui";
import { CaseTeaser, CtaBand, PageHero } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { caseStudies, caseBySlug } from "@/content/caseStudies";
import { solutionBySlug } from "@/content/solutions";
import { absolute, pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const c = caseBySlug((await params).slug)!;
  return pageMetadata({ title: `${c.client}: ${c.title}`, description: c.summary, path: `/case-studies/${c.slug}/`, type: "article" });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const c = caseBySlug((await params).slug);
  if (!c) notFound();
  const path = `/case-studies/${c.slug}/`;
  const sol = solutionBySlug(c.solution);
  const others = caseStudies.filter((x) => x.slug !== c.slug).slice(0, 2);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${c.client}: ${c.title}`,
          description: c.summary,
          url: absolute(path),
          datePublished: `${c.year}-01-01`,
          about: { "@type": "Organization", name: c.client },
          author: { "@type": "Organization", name: "Imperium Software Technologies", url: site.url },
          publisher: { "@id": `${site.url}/#organization` },
        }}
      />
      <PageHero
        crumbs={[{ name: "Case studies", path: "/case-studies/" }, { name: c.client, path }]}
        title={c.title}
        lede={c.summary}
        aside={
          <dl className="flex flex-col border-t-2 border-ink">
            <div className="flex justify-between gap-4 border-b border-rule py-3"><dt className="text-ink-3">Customer</dt><dd className="text-right font-bold">{c.client}</dd></div>
            <div className="flex justify-between gap-4 border-b border-rule py-3"><dt className="text-ink-3">Sector</dt><dd className="text-right font-bold">{c.sectorLabel}</dd></div>
            <div className="flex justify-between gap-4 border-b border-rule py-3"><dt className="text-ink-3">Location</dt><dd className="text-right font-bold">{c.location}</dd></div>
            <div className="flex justify-between gap-4 border-b border-rule py-3"><dt className="text-ink-3">Published</dt><dd className="text-right font-bold tabular">{c.year}</dd></div>
            <div className="flex flex-col gap-2 py-3"><dt className="text-ink-3">Technology</dt><dd className="font-semibold">{c.stack.join(", ")}</dd></div>
          </dl>
        }
      />

      <Section tone="mist" labelledBy="facts">
        <h2 id="facts" className="mb-8 text-[1rem] font-bold text-ink-2">Scope of the project</h2>
        <dl className={`grid gap-8 ${c.facts.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {c.facts.map((f) => (
            <div key={f.label} className="flex flex-col-reverse gap-2 border-t-2 border-ink pt-5">
              <dt className="text-ink-2">{f.label}</dt>
              <dd className="font-mono text-[clamp(2rem,1.4rem+2vw,3rem)] font-semibold leading-none tabular">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[14rem_1fr] lg:gap-16">
          <nav aria-label="On this page" className="hidden lg:block">
            <ul className="sticky top-28 flex flex-col gap-2 text-[0.95rem] text-ink-3">
              <li><a href="#challenge" className="hover:text-ink">The challenge</a></li>
              <li><a href="#delivered" className="hover:text-ink">What we delivered</a></li>
              <li><a href="#result" className="hover:text-ink">The result</a></li>
            </ul>
          </nav>
          <article className="flex max-w-[46rem] flex-col gap-16">
            <section aria-labelledby="challenge" className="flex flex-col gap-5">
              <h2 id="challenge" className="text-h2">The challenge</h2>
              {c.challenge.map((p) => <p key={p} className="text-[1.1rem] text-ink-2">{p}</p>)}
            </section>
            <section aria-labelledby="delivered" className="flex flex-col gap-6">
              <h2 id="delivered" className="text-h2">What we delivered</h2>
              <ol className="relative flex flex-col gap-8 pl-9">
                <span aria-hidden className="absolute bottom-3 left-[6px] top-3 w-[5px] rounded-full bg-orange" />
                {c.delivered.map((d) => (
                  <li key={d.title} className="relative">
                    <span className="absolute -left-9 top-1"><Station color="var(--color-orange)" /></span>
                    <h3 className="text-h3">{d.title}</h3>
                    <p className="mt-2 text-ink-2">{d.detail}</p>
                  </li>
                ))}
              </ol>
            </section>
            <section aria-labelledby="result" className="flex flex-col gap-5">
              <h2 id="result" className="text-h2">The result</h2>
              {c.result.map((p) => <p key={p} className="text-[1.1rem] text-ink-2">{p}</p>)}
            </section>
            {c.quote && (
              <figure className="flex flex-col gap-5 border-t-2 border-ink pt-8">
                <Quote aria-hidden className="size-7 text-orange" />
                <blockquote className="text-[clamp(1.3rem,1.1rem+0.8vw,1.75rem)] font-bold leading-snug">“{c.quote.text}”</blockquote>
                <figcaption className="text-ink-3">{c.quote.by}</figcaption>
              </figure>
            )}
            <div className="flex flex-col gap-4 border-t border-rule pt-8 sm:flex-row sm:items-center sm:justify-between">
              {c.pdf ? (
                <a href={c.pdf} className="inline-flex items-center gap-2 font-bold hover:text-orange-ink" target="_blank" rel="noopener">
                  <FileDown aria-hidden className="size-5" /> Original case study (PDF)
                </a>
              ) : <span />}
              {sol && (
                <span className="text-ink-2">
                  Related solution: <Link href={`/solutions/${sol.slug}/`} className="font-bold text-ink underline decoration-rule underline-offset-4 hover:decoration-orange">{sol.name}</Link>
                </span>
              )}
            </div>
          </article>
        </div>
      </Section>

      <Section tone="mist" labelledBy="more">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 id="more" className="text-h2">More customer work</h2>
          <Button href="/case-studies/" variant="secondary">All case studies</Button>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {others.map((o) => <CaseTeaser key={o.slug} slug={o.slug} />)}
        </div>
      </Section>
      <CtaBand title="Have a similar challenge?" />
    </>
  );
}
