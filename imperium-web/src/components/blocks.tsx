import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import type { Faq, Outcome } from "@/content/solutions";
import { clientBySlug } from "@/content/clients";
import { caseBySlug } from "@/content/caseStudies";
import { productBySlug } from "@/content/products";
import { Button, Dot, LineMark, Station } from "./ui";
import { JsonLd } from "./JsonLd";
import { breadcrumbLd, faqLd } from "@/lib/seo";

/* ---------- Interior page hero ---------- */
export function PageHero({
  crumbs,
  title,
  lede,
  actions,
  aside,
  asideMobile = true,
}: {
  crumbs: { name: string; path: string }[];
  title: string;
  lede?: string;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
  asideMobile?: boolean;
}) {
  return (
    <div className="border-b border-rule bg-paper">
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, ...crumbs])} />
      <div className="wrap pb-14 pt-10 md:pb-20 md:pt-14">
        <nav aria-label="Breadcrumb" className="mb-8 md:mb-12">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.88rem] text-ink-3">
            <li><Link href="/" className="hover:text-ink">Home</Link></li>
            {crumbs.map((c, i) => (
              <li key={c.path} className="flex items-center gap-2">
                <span aria-hidden>/</span>
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="text-ink-2">{c.name}</span>
                ) : (
                  <Link href={c.path} className="hover:text-ink">{c.name}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className={aside ? "grid items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16" : ""}>
          <div className="flex flex-col gap-6">
            <h1 className="max-w-[22ch] text-h1">{title}</h1>
            {lede && <p className="measure text-lede text-ink-2">{lede}</p>}
            {actions && <div className="mt-2 flex flex-wrap gap-3">{actions}</div>}
          </div>
          {aside && <div className={`min-w-0 ${asideMobile ? "" : "hidden md:block"}`}>{aside}</div>}
        </div>
      </div>
    </div>
  );
}

/* ---------- Section heading ---------- */
export function SectionHead({ id, title, intro, className = "" }: { id?: string; title: string; intro?: string; className?: string }) {
  return (
    <div className={`mb-12 flex max-w-[48rem] flex-col gap-4 md:mb-14 ${className}`}>
      <h2 id={id} className="text-h2">{title}</h2>
      {intro && <p className="text-lede text-ink-2">{intro}</p>}
    </div>
  );
}

/* ---------- Outcome rows: outcome headline, then how it happens ---------- */
export function OutcomeRows({ outcomes, color = "var(--color-orange)" }: { outcomes: Outcome[]; color?: string }) {
  return (
    <ol className="border-t border-ink">
      {outcomes.map((o) => (
        <li key={o.title} className="grid gap-3 border-b border-rule py-7 md:grid-cols-[2.5rem_minmax(0,1fr)_minmax(0,1.15fr)] md:gap-10 md:py-9">
          <span className="pt-2.5"><LineMark color={color} /></span>
          <h3 className="text-h3">{o.title}</h3>
          <p className="text-ink-2">{o.how}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Symptoms list ---------- */
export function Symptoms({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col">
      {items.map((s) => (
        <li key={s} className="flex gap-4 border-b border-rule py-4 last:border-b-0">
          <span aria-hidden className="mt-[0.7rem] flex shrink-0 items-center gap-[3px] self-start">
            <span className="h-[3px] w-3 bg-ink-3" />
            <span className="h-[3px] w-1.5 bg-ink-3" />
          </span>
          <span className="text-ink">{s}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Line with stations (pillar, delivery steps) ---------- */
export function StationLine({ color, stops, vertical = false }: { color: string; stops: string[]; vertical?: boolean }) {
  if (vertical) {
    return (
      <ul className="relative flex flex-col gap-5">
        <span aria-hidden className="absolute bottom-2 left-[7px] top-2 w-[5px] rounded-full" style={{ background: color }} />
        {stops.map((s) => (
          <li key={s} className="relative flex items-center gap-4">
            <Station color={color} />
            <span className="text-[1.05rem] font-semibold">{s}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="relative">
      <div aria-hidden className="absolute left-[7px] top-2 bottom-2 w-[5px] rounded-full md:left-2 md:right-2 md:top-[7px] md:bottom-auto md:h-[5px] md:w-auto" style={{ background: color }} />
      <ul className="relative flex flex-col gap-4 md:flex-row md:justify-between md:gap-4">
        {stops.map((s) => (
          <li key={s} className="flex items-start gap-3 md:max-w-[11rem] md:flex-col md:gap-3">
            <Station color={color} />
            <span className="text-[0.95rem] font-semibold leading-snug">{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- FAQ (renders FAQPage schema) ---------- */
export function FaqList({ faqs, title = "Questions we are often asked", id = "faq" }: { faqs: Faq[]; title?: string; id?: string }) {
  if (!faqs.length) return null;
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
      <JsonLd data={faqLd(faqs)} />
      <h2 id={id} className="text-h2">{title}</h2>
      <div className="border-t border-ink">
        {faqs.map((f) => (
          <details key={f.q} className="group border-b border-rule">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-[1.12rem] font-bold [&::-webkit-details-marker]:hidden">
              <h3 className="font-bold">{f.q}</h3>
              <Plus aria-hidden className="mt-1 size-5 shrink-0 transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <p className="measure pb-7 text-ink-2">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

/* ---------- Client logos ---------- */
export function LogoRow({ slugs, label }: { slugs: string[]; label?: string }) {
  const items = slugs.map(clientBySlug).filter(Boolean);
  if (!items.length) return null;
  return (
    <div className="flex flex-col gap-6">
      {label && <p className="text-[0.95rem] font-semibold text-ink-2">{label}</p>}
      <ul className="grid grid-cols-3 items-center gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
        {items.map((c, i) => (
          <li key={c!.slug} className={`h-12 items-center justify-center ${i >= 9 ? "hidden sm:flex" : "flex"}`}>
            <Image
              src={`/clients/${c!.slug}.webp`}
              alt={c!.name}
              width={c!.w}
              height={c!.h}
              className="max-h-12 w-auto max-w-full object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Case study teaser ---------- */
export function CaseTeaser({ slug, tone = "paper" }: { slug: string; tone?: "paper" | "night" }) {
  const c = caseBySlug(slug);
  if (!c) return null;
  const night = tone === "night";
  return (
    <Link
      href={`/case-studies/${c.slug}/`}
      className={`group flex h-full flex-col gap-4 border-t-2 pt-6 ${night ? "border-on-night-2 hover:border-orange" : "border-ink hover:border-orange"} transition-colors`}
    >
      <span className={`text-[0.88rem] font-semibold ${night ? "text-on-night-2" : "text-ink-3"}`}>
        {c.client}<Dot />{c.sectorLabel}
      </span>
      <h3 className="text-h3">{c.title}</h3>
      <span className={`mt-auto inline-flex items-center gap-1.5 font-bold ${night ? "text-on-night" : "text-ink"}`}>
        Read the case study <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}

/* ---------- Platform cards ---------- */
export function PlatformList({ slugs }: { slugs: string[] }) {
  return (
    <ul className="border-t-2 border-ink">
      {slugs.map(productBySlug).filter(Boolean).map((p) => (
        <li key={p!.slug} className="border-b border-rule">
          <Link href={`/products/${p!.slug}/`} className="group grid gap-2 py-6 md:grid-cols-[12rem_minmax(0,1.4fr)_minmax(0,1fr)_1.5rem] md:items-baseline md:gap-8">
            <span className="text-[1.45rem] font-extrabold group-hover:text-orange-ink">{p!.name}</span>
            <span className="text-ink-2">{p!.promise}</span>
            <span className="text-[0.9rem] text-ink-3">{p!.relationship}</span>
            <ArrowRight aria-hidden className="hidden size-5 text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:text-ink md:block" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Closing call to action ---------- */
export function CtaBand({
  title = "Start with the challenge you need to solve.",
  body = "Tell us what is changing in your customer experience or communications environment. The right specialist will reply within one business day.",
  primary = { label: "Talk to an Expert", href: "/contact/" },
  secondary = { label: "See our work", href: "/case-studies/" },
}: {
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-night text-on-night" aria-labelledby="cta-title">
      <div className="wrap grid gap-10 py-20 md:py-24 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div className="flex flex-col gap-5">
          <h2 id="cta-title" className="max-w-[18ch] text-h2">{title}</h2>
          <p className="measure text-lede text-on-night-2">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Button href={primary.href} variant="onNight">{primary.label}</Button>
          <Button href={secondary.href} variant="ghostNight">{secondary.label}</Button>
        </div>
      </div>
    </section>
  );
}
