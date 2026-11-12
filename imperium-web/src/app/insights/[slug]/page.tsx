import { notFound } from "next/navigation";
import Link from "next/link";
import { Dot, Section } from "@/components/ui";
import { CtaBand, PageHero } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { articles, articleBySlug } from "@/content/insights";
import { articleLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const a = articleBySlug((await params).slug)!;
  return pageMetadata({ title: a.title, description: a.description, path: `/insights/${a.slug}/`, type: "article" });
}

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const a = articleBySlug((await params).slug);
  if (!a) notFound();
  const path = `/insights/${a.slug}/`;
  return (
    <>
      <JsonLd data={articleLd({ title: a.title, description: a.description, path, published: a.published, author: a.author })} />
      <PageHero crumbs={[{ name: "Insights", path: "/insights/" }, { name: a.title, path }]} title={a.title} />
      <Section className="!pt-12 md:!pt-16">
        <div className="grid gap-12 lg:grid-cols-[14rem_1fr] lg:gap-16">
          <aside className="flex flex-col gap-1 text-[0.92rem] text-ink-3 lg:sticky lg:top-28 lg:self-start">
            <span className="font-semibold text-ink-2">{a.category}</span>
            <time dateTime={a.published}>{fmt(a.published)}</time>
            <span>{a.readMinutes} min read<Dot />{a.author}</span>
          </aside>
          <article className="prose-imp">
            <div className="!mt-0 rounded-[var(--radius-md)] bg-mist p-6 md:p-8">
              <p className="mb-2 text-[0.92rem] font-bold text-ink-3">The short answer</p>
              <p className="text-[1.12rem] leading-relaxed">{a.answer}</p>
            </div>
            {a.body.map((b, i) =>
              b.type === "h2" ? <h2 key={i}>{b.text}</h2> : b.type === "p" ? <p key={i} className="text-ink-2">{b.text}</p> : (
                <ul key={i} className="text-ink-2">{b.items.map((it) => <li key={it}>{it}</li>)}</ul>
              ),
            )}
            <div className="!mt-12 border-t border-rule pt-6">
              <p className="font-bold">Related</p>
              <ul>
                {a.related.map((r) => <li key={r.href}><Link href={r.href}>{r.label}</Link></li>)}
              </ul>
            </div>
          </article>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
