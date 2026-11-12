import { PageHero, CtaBand, SectionHead, LogoRow } from "@/components/blocks";
import { Button, Dot, Section, Station } from "@/components/ui";
import { site } from "@/content/site";
import { homeClients } from "@/content/clients";
import { ClientIndex } from "@/components/ClientIndex";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Imperium",
  description:
    "Imperium Software Technologies was founded in Dubai in 2005. From telephony and computer telephony integration, it grew into contact centre platforms, enterprise communications and applied AI for enterprises across the Middle East, Africa and Asia.",
  path: "/about/",
});

const story = [
  { year: "2005", title: "Founded in Dubai", detail: "Imperium starts as a telephony and computer telephony integration (CTI) specialist, connecting enterprise phone systems to business applications." },
  { year: "Avaya", title: "Deep Avaya expertise", detail: "Long association with Avaya as a technology partner and integrator: contact centres, IP Office, reporting and CTI for organisations across the Gulf." },
  { year: "Software", title: "From implementation to products", detail: "The business moves from implementing telephony to building its own software: CRM connectors, call reporting, callback and quality monitoring modules." },
  { year: "Today", title: "Customer experience, communications and AI", detail: "iConnect, our omnichannel contact centre for Avaya IP Office, sits alongside cloud and AI platforms we deploy and support for enterprises across the region." },
];

const principles = [
  { title: "Understand the environment", detail: "We start with your operating context, existing technology and business priorities." },
  { title: "Connect what matters", detail: "We design around the systems, channels and workflows that need to work together." },
  { title: "Deliver with accountability", detail: "Scope, responsibilities, testing and acceptance are agreed before deployment." },
  { title: "Improve over time", detail: "We keep optimizing after go-live, based on operational needs and agreed service commitments." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about/" }]}
        title="Connecting enterprise technology to better business experiences."
        lede="Imperium Software Technologies works with organisations to improve how they communicate, engage customers and connect business systems. Our work brings together customer experience platforms, enterprise communications, integration expertise and applied technology."
        actions={<Button href="/contact/">Talk to us</Button>}
      />

      <Section tone="mist" labelledBy="facts-title">
        <h2 id="facts-title" className="sr-only">Company facts</h2>
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Founded", "2005, Dubai"],
            ["Customers", "200+ enterprises"],
            ["Team", "75+ specialists"],
            ["Head office", "Dubai, United Arab Emirates"],
            ["Offices", "Dubai, Singapore, Chennai, Bengaluru"],
            ["Support", "24×7 for existing customers"],
          ].map(([k, v]) => (
            <div key={k} className="flex flex-col gap-2 border-t-2 border-ink pt-4">
              <dt className="text-ink-3">{k}</dt>
              <dd className="text-[1.2rem] font-extrabold leading-snug">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section labelledBy="story-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="flex flex-col gap-5">
            <h2 id="story-title" className="text-h2">Our story</h2>
            <p className="text-lede text-ink-2">
              Our background in telephony and CTI gives us a practical understanding of enterprise communications. Today our
              focus is helping enterprises modernize customer experience and communications environments.
            </p>
          </div>
          <ol className="relative flex flex-col gap-10 pl-10">
            <span aria-hidden className="absolute bottom-4 left-[6px] top-3 w-[5px] rounded-full bg-ink" />
            {story.map((s) => (
              <li key={s.title} className="relative">
                <span className="absolute -left-10 top-1"><Station /></span>
                <span className="font-mono text-[0.85rem] text-ink-3">{s.year}</span>
                <h3 className="mt-1 text-h3">{s.title}</h3>
                <p className="mt-2 text-ink-2">{s.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="mist" labelledBy="lead-title">
        <SectionHead id="lead-title" title="Leadership" />
        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {site.leadership.map((p) => (
            <li key={p.name} className="flex flex-col gap-1 border-t-2 border-ink pt-4">
              <span className="text-[1.15rem] font-extrabold">{p.name}</span>
              <span className="text-ink-2">{p.title}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="clients-title">
        <SectionHead id="clients-title" title="Who we work with" intro="Some of the organisations running platforms we have deployed and support, by sector." />
        <ClientIndex />
      </Section>

      <Section tone="mist" labelledBy="how-title">
        <SectionHead id="how-title" title="How we work" />
        <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <div key={p.title} className="flex flex-col gap-2 border-t-2 border-ink pt-5">
              <dt className="text-h3 font-extrabold">{p.title}</dt>
              <dd className="text-ink-2">{p.detail}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section labelledBy="eco-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="flex flex-col gap-5">
            <h2 id="eco-title" className="text-h2">Heritage and ecosystem</h2>
            <p className="text-ink-2">
              We work with technology providers and platforms to deliver solutions suited to each customer, including Avaya,
              Microsoft, Google Cloud, AWS, Zoom and UnifyApps. Platform names refer to the technologies we integrate and deploy; they
              do not imply that a partner&apos;s technology is Imperium&apos;s own.
            </p>
          </div>
          <div>
            <LogoRow slugs={homeClients} label="Some of the organisations running on platforms we have deployed" />
          </div>
        </div>
      </Section>

      <Section tone="mist" labelledBy="offices-title">
        <SectionHead id="offices-title" title="Where we are" />
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {site.offices.map((o) => (
            <li key={o.city} className="flex flex-col gap-1 border-t-2 border-ink pt-4">
              <span className="text-h3">{o.city}</span>
              <span className="text-ink-3">{o.country}<Dot />{o.role}</span>
              {o.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="tabular font-semibold hover:text-orange-ink">{p}</a>
              ))}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
