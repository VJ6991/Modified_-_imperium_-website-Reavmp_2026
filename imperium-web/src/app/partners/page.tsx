import { PageHero, CtaBand, SectionHead } from "@/components/blocks";
import { Button, Section, Station } from "@/components/ui";
import { HeroRoute } from "@/components/HeroRoute";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { operators } from "@/content/operators";
import { site } from "@/content/site";
import { pageMetadata, serviceLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Partners: telecom operators and channel partners",
  description:
    "Partner with Imperium to offer contact centre, customer experience and social intelligence services to your enterprise customers, hosted in your own data centre and supported by our team.",
  path: "/partners/",
});

const challenges = [
  { title: "Selling dial tone", detail: "Connectivity alone is a commodity; the customer relationship ends at the line." },
  { title: "Low margins", detail: "Voice and data prices keep falling while costs do not." },
  { title: "Competing on price", detail: "Without something different to offer, every renewal becomes a discount negotiation." },
  { title: "Transactional relationships", detail: "Customers buy a service, not an outcome, and switch when someone is cheaper." },
  { title: "Low revenue per customer", detail: "Few ways to grow the account after the first sale." },
];

const needs = [
  { title: "Productivity", detail: "Contact centre, collaboration and social tools that make their teams faster." },
  { title: "A service that fits them", detail: "Configured to their channels, CRM and industry, not a generic bundle." },
  { title: "Speed to market", detail: "Live in weeks on a platform you already host, not a year-long project." },
  { title: "Room to grow", detail: "Start with one capability and add more as they expand." },
  { title: "Business continuity", detail: "Hosted in-country, with high availability and local support." },
];

const model = [
  { name: "Choose the offer", detail: "Pick the platforms to bring to market: contact centre, CX engagement suite, social intelligence, AI agents." },
  { name: "Host and package", detail: "Run the platform in your data centre and package it with connectivity, under your brand or co-branded." },
  { name: "Launch and sell", detail: "Joint go-to-market, sales enablement and pre-sales support from our team." },
  { name: "Deliver and support", detail: "Implementation and managed services by Imperium, by your teams, or by trained partners." },
];

export default function PartnersPage() {
  return (
    <>
      <JsonLd data={serviceLd("Contact centre and CX platforms for telecom operators and channel partners", "Imperium platforms hosted by operators and channel partners and offered to their enterprise customers.", "/partners/")} />
      <PageHero
        crumbs={[{ name: "Partners", path: "/partners/" }]}
        title="Add customer experience services to what you already sell."
        lede="Telecom operators and channel partners use Imperium platforms to offer contact centre, CX and social intelligence services to their enterprise customers, hosted in their own data centres and supported by our team."
        actions={<Button href="/contact/">Become a partner</Button>}
        asideMobile={false}
        aside={
          <HeroRoute
            inputs={["Connectivity", "Voice and SIP", "Enterprise accounts"]}
            hub="Imperium CX services"
            stops={["Recurring CX revenue", "Longer relationships", "Faster launches"]}
            colors={["var(--color-blue)", "var(--color-blue)", "var(--color-orange)"]}
            label="Connectivity, voice and enterprise accounts converge on Imperium CX services, leading to recurring CX revenue, longer customer relationships and faster launches."
          />
        }
      />

      <Section tone="mist" labelledBy="why-title">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="why-title" className="mb-8 text-h2">What partners are up against</h2>
            <dl className="border-t-2 border-ink">
              {challenges.map((c) => (
                <div key={c.title} className="border-b border-rule py-4">
                  <dt className="font-extrabold">{c.title}</dt>
                  <dd className="mt-1 text-ink-2">{c.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="mb-8 text-h2">What their customers ask for</h2>
            <dl className="border-t-2 border-ink">
              {needs.map((c) => (
                <div key={c.title} className="border-b border-rule py-4">
                  <dt className="font-extrabold">{c.title}</dt>
                  <dd className="mt-1 text-ink-2">{c.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section labelledBy="model-title">
        <SectionHead id="model-title" title="How the partnership works" intro="Imperium brings the platforms, the engineering and the delivery experience. You bring the customers, the network and the local presence." />
        <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <span aria-hidden className="absolute left-2 right-2 top-[7px] hidden h-[5px] rounded-full bg-orange lg:block" />
          {model.map((s, i) => (
            <li key={s.name} className="relative flex flex-col gap-3">
              <Station color="var(--color-orange)" />
              <span className="font-mono text-[0.8rem] text-ink-3">Step {i + 1}</span>
              <h3 className="text-h3">{s.name}</h3>
              <p className="text-ink-2">{s.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="mist" labelledBy="proof-title">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-end lg:gap-20">
          <h2 id="proof-title" className="text-h2">Six operators already run it</h2>
          <p className="text-lede text-ink-2">
            Each hosts the platform in its own country, or on its customers&apos; premises, and sells it to enterprises and
            government under its own name.
          </p>
        </div>
        <ul className="border-t-2 border-ink">
          {operators.map((o) => (
            <li key={o.name} className="grid gap-5 border-b border-rule py-8 lg:grid-cols-[13rem_1fr_1fr_1.2fr] lg:gap-8">
              <div className="flex items-start gap-3">
                <span className="pt-1.5"><Station color="var(--color-orange)" /></span>
                <div>
                  <h3 className="text-[1.35rem] font-extrabold leading-tight">{o.name}</h3>
                  <p className="text-ink-3">{o.country}</p>
                </div>
              </div>
              <dl className="contents">
                <div>
                  <dt className="text-[0.85rem] font-bold text-ink-3">Offer and segments</dt>
                  <dd className="mt-1">{o.offer.join(", ")}</dd>
                  <dd className="text-[0.95rem] text-ink-2">{o.segments.join(", ")}</dd>
                </div>
                <div>
                  <dt className="text-[0.85rem] font-bold text-ink-3">Setup</dt>
                  {o.hosting.map((h) => <dd key={h} className="mt-1 text-[0.97rem]">{h}</dd>)}
                </div>
                <div>
                  <dt className="text-[0.85rem] font-bold text-ink-3">Customers include</dt>
                  <dd className="mt-1 text-[0.97rem] text-ink-2">{o.references.join(", ")}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-8">
          <Link href="/case-studies/ethio-telecom/" className="font-bold underline decoration-rule underline-offset-4 hover:decoration-orange">
            Ethio telecom case study
          </Link>
          <a
            href="https://slt.lk/en/news/slt-mobitel-enterprises-premium-contact-centre-solution-powered-avaya-inaipi-cloud-boosts"
            target="_blank"
            rel="noopener"
            className="font-bold underline decoration-rule underline-offset-4 hover:decoration-orange"
          >
            SLT-Mobitel launch announcement (2023)
          </a>
        </div>
      </Section>

      <Section labelledBy="team-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <h2 id="team-title" className="text-h2">Your partnership team</h2>
          <ul className="grid gap-6 sm:grid-cols-2">
            {site.leadership.filter((p) => p.partners).map((p) => (
              <li key={p.name} className="flex flex-col gap-1 border-t-2 border-ink pt-4">
                <span className="text-[1.1rem] font-extrabold">{p.name}</span>
                <span className="text-ink-2">{p.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand title="Talk to us about a partnership." body="Tell us about your market, your customers and the services you offer today. Our partnerships team will reply within one business day." primary={{ label: "Become a partner", href: "/contact/" }} secondary={{ label: "See our platforms", href: "/products/" }} />
    </>
  );
}
