import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Button, ArrowLink, Dot, LineMark, Section, Station } from "@/components/ui";
import { NetworkMap } from "@/components/NetworkMap";
import { AgentDesktop } from "@/components/AgentDesktop";
import { CaseTeaser, CtaBand, FaqList, LogoRow, Symptoms, StationLine } from "@/components/blocks";
import { homeClients } from "@/content/clients";
import { pillars, site } from "@/content/site";
import { industries } from "@/content/industries";
import { deliverySteps } from "@/content/services";
import { caseBySlug } from "@/content/caseStudies";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Imperium | Contact centre, communications and applied AI",
  description:
    "Imperium connects contact centres, enterprise communications and applied AI for enterprises across the Middle East, Africa and Asia. Dubai, since 2005. Talk to an expert.",
  path: "/",
});

const outcomes = [
  {
    title: "Customers stop repeating themselves",
    how: "Calls, chats, WhatsApp messages, emails and social posts reach one agent desktop, with the customer's history beside them.",
    pillar: pillars.cx,
    href: "/solutions/customer-experience/",
  },
  {
    title: "Problems are fixed during the shift, not in next week's report",
    how: "Supervisors see live queues and service levels, and can listen in, coach privately or join a call or chat.",
    pillar: pillars.cx,
    href: "/solutions/customer-experience/",
  },
  {
    title: "You modernize without replacing your phone system",
    how: "A full contact centre added to the Avaya IP Office you already own, using your extensions, hunt groups and licences.",
    pillar: pillars.comms,
    href: "/solutions/integration-modernization/",
  },
  {
    title: "Customer data stays where regulation needs it",
    how: "Run on your own servers with failover, or on a cloud platform hosted in-country by a telecom operator.",
    pillar: pillars.comms,
    href: "/solutions/integration-modernization/",
  },
  {
    title: "Routine questions are answered at any hour",
    how: "AI chat agents handle common requests on WhatsApp and the web, and hand over to a person with the full conversation.",
    pillar: pillars.ai,
    href: "/solutions/ai-automation/",
  },
];

const pillarRows = [
  {
    p: pillars.cx,
    text: "Conversations and service workflows across every channel your customers use.",
    stops: ["Contact centre", "Omnichannel", "Agent workspace", "Cases & tickets", "Surveys"],
  },
  {
    p: pillars.comms,
    text: "The telephony, CTI and integration foundation the customer experience runs on.",
    stops: ["Avaya IP Office", "CTI & CRM", "Unified comms", "Call reporting", "Cloud migration"],
  },
  {
    p: pillars.ai,
    text: "Automation and insight applied to defined jobs, always with a human handoff.",
    stops: ["AI chat agents", "Smart routing", "Sentiment", "Social listening", "Agent assist"],
  },
];

const homeFaqs = [
  {
    q: "What does Imperium do?",
    a: "Imperium Software Technologies helps enterprises connect customer engagement, communications infrastructure and applied AI. We build and deploy contact centre and communications platforms, integrate them with business systems such as CRMs, and support them with 24×7 managed services. We have been based in Dubai since 2005 and work with more than 200 enterprise customers.",
  },
  {
    q: "Can we add a contact centre to our existing Avaya IP Office?",
    a: "Yes. iConnect, built by Imperium, connects to Avaya IP Office and adds an omnichannel agent desktop, live supervision and contact centre reporting while keeping your existing extensions, hunt groups and licences.",
  },
  {
    q: "Can our customer data stay in the UAE or in our own country?",
    a: "Yes. Platforms can be deployed on your own servers, in a private data centre, or on a cloud platform hosted in-country by a telecom operator. We match the option to your regulatory and policy requirements.",
  },
  {
    q: "Do we have to replace our CRM?",
    a: "No. We connect the contact centre to the CRM you already use, such as Salesforce or Zoho, so the customer's record opens when a call or chat connects.",
  },
  {
    q: "Does Imperium work with Zoom?",
    a: "Yes. Imperium works with Zoom to extend its platform for enterprise customer experience. We add social listening with Listen IQ, case management, intelligent automation, custom integrations and industry solutions, and deliver and support them with our own team.",
  },
  {
    q: "Which industries do you work with?",
    a: "Banking and financial services, government, telecommunications, healthcare, hospitality, insurance, and retail and real estate, mainly across the Gulf, Africa and South Asia.",
  },
];

export default function Home() {
  const featured = caseBySlug("orange")!;
  return (
    <>
      {/* 1 · Hero */}
      <section aria-labelledby="hero-title" className="overflow-hidden border-b border-rule bg-paper">
        <div className="wrap pt-12 md:pt-20">
          <h1 id="hero-title" className="max-w-[17ch] text-display font-extrabold">
            Connect every interaction. Make every experience count.
          </h1>
          <div className="mt-8 flex max-w-[42rem] flex-col gap-8 md:mt-10">
            <p className="text-lede text-ink-2">
              Imperium connects contact centres, communications infrastructure and applied AI for enterprises across the
              Middle East, Africa and Asia. We build and deploy the platforms, connect them to the systems you already run,
              then support them with you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact/">Talk to an Expert</Button>
              <Button href="/solutions/" variant="secondary">Explore solutions</Button>
            </div>
          </div>
          <div className="mt-14 md:mt-16">
            <NetworkMap />
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-rule py-7 sm:grid-cols-3 md:mt-12 lg:grid-cols-5">
            {site.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse gap-1">
                <dt className="text-[0.9rem] leading-snug text-ink-2">{s.label}</dt>
                <dd className="font-mono text-[1.6rem] font-semibold leading-none tabular">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 2 · Clients */}
      <section aria-label="Clients" className="bg-paper py-14 md:py-16">
        <div className="wrap">
          <LogoRow slugs={homeClients} label="Organisations running on platforms we have deployed and support" />
        </div>
      </section>

      {/* 3 · Problem */}
      <Section tone="mist" labelledBy="problem-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-6">
            <h2 id="problem-title" className="text-h2">Your customers see one business. Your systems often tell a different story.</h2>
            <p className="measure text-lede text-ink-2">
              Conversations move between the contact centre, digital channels, business applications and the phone system.
              When those run separately, agents lose context, customers repeat themselves and managers find out what went
              wrong after it has happened.
            </p>
          </div>
          <div className="lg:pt-3">
            <Symptoms
              items={[
                "Each channel has its own team, tool and customer history.",
                "Legacy systems make every change slow and costly.",
                "Nobody can see the whole customer journey in one place.",
                "Manual steps add work for customers, agents and operations.",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* 4 · Outcomes */}
      <Section labelledBy="outcomes-title">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <h2 id="outcomes-title" className="max-w-[20ch] text-h2">What changes when it is connected</h2>
          <ArrowLink href="/solutions/">All solutions</ArrowLink>
        </div>
        <ol className="border-t border-ink">
          {outcomes.map((o) => (
            <li key={o.title} className="border-b border-rule">
              <Link href={o.href} className="group grid gap-3 py-7 md:grid-cols-[2.5rem_minmax(0,1.1fr)_minmax(0,1fr)_14rem] md:items-start md:gap-10 md:py-9">
                <span className="pt-2.5"><LineMark color={o.pillar.color} /></span>
                <h3 className="text-h3 group-hover:text-orange-ink">{o.title}</h3>
                <p className="text-ink-2">{o.how}</p>
                <span className="flex items-center gap-1.5 text-[0.9rem] font-semibold text-ink-3 group-hover:text-ink md:justify-end md:pt-1">
                  {o.pillar.name} <ArrowRight aria-hidden className="size-4 shrink-0" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      {/* 5 · Approach: three lines */}
      <Section tone="mist" labelledBy="approach-title">
        <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
          <h2 id="approach-title" className="text-h2">Connect the experience. Modernize the operation. Apply intelligence where it matters.</h2>
          <p className="text-lede text-ink-2">
            Three lines of work, one network. Most of our projects run on more than one of them, and every one connects to
            what you already have.
          </p>
        </div>
        <div className="flex flex-col gap-14">
          {pillarRows.map(({ p, text, stops }) => (
            <div key={p.id} className="grid gap-6 lg:grid-cols-[17rem_1fr] lg:gap-12">
              <div className="flex flex-col gap-2">
                <h3 className="text-h3">
                  <Link href={p.solution} className="hover:text-orange-ink">{p.name}</Link>
                </h3>
                <p className="text-[0.98rem] text-ink-2">{text}</p>
              </div>
              <div className="lg:pt-4">
                <StationLine color={p.color} stops={stops} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 6 · Platforms */}
      <Section labelledBy="platforms-title">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <h2 id="platforms-title" className="max-w-[22ch] text-h2">Platforms we build, deploy and run with you</h2>
          <ArrowLink href="/products/">All products</ArrowLink>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <AgentDesktop />
          </div>
          <div className="flex flex-col">
            <Link href="/products/iconnect/" className="group flex flex-col gap-3 border-t-2 border-ink pb-8 pt-6">
              <span className="text-[0.88rem] font-semibold text-ink-3">Built by Imperium</span>
              <span className="text-h2 font-extrabold">iConnect</span>
              <span className="text-ink-2">
                Turns the Avaya IP Office you already own into an omnichannel contact centre: one desktop for voice and
                chat, live supervision, 14 standard reports. Runs on your own servers.
              </span>
              <span className="inline-flex items-center gap-1.5 font-bold">
                Explore iConnect <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
            <Link href="/products/inaipi/" className="group flex flex-col gap-2 border-t border-rule py-6">
              <span className="text-[1.3rem] font-extrabold">Inaipi</span>
              <span className="text-[0.88rem] font-semibold text-ink-3">Part of the Imperium group</span>
              <span className="text-ink-2">AI-native cloud CX platform: contact centre, tickets, surveys and AI agents, hosted in-country where required.</span>
              <span className="inline-flex items-center gap-1.5 text-[0.95rem] font-bold">
                Explore Inaipi <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
            <Link href="/products/listen-iq/" className="group flex flex-col gap-2 border-y border-rule py-6">
              <span className="text-[1.3rem] font-extrabold">Listen IQ</span>
              <span className="text-[0.88rem] font-semibold text-ink-3">Part of the Imperium group</span>
              <span className="text-ink-2">Social listening and conversation intelligence: sentiment, topics and one inbox for every comment and message.</span>
              <span className="inline-flex items-center gap-1.5 text-[0.95rem] font-bold">
                Explore Listen IQ <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* 7 · Proof */}
      <Section tone="night" labelledBy="proof-title">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <h2 id="proof-title" className="max-w-[20ch] text-h2">Experience matters. Evidence matters more.</h2>
          <ArrowLink href="/case-studies/" tone="night">All case studies</ArrowLink>
        </div>
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Link href={`/case-studies/${featured.slug}/`} className="group flex flex-col gap-8 rounded-[var(--radius-md)] border border-night-rule bg-night-2 p-7 transition-colors hover:border-on-night-2 md:p-10">
            <span className="text-[0.9rem] font-semibold text-on-night-2">{featured.client}<Dot />{featured.sectorLabel}<Dot />{featured.location}</span>
            <h3 className="max-w-[24ch] text-[clamp(1.6rem,1.2rem+1.4vw,2.3rem)] font-extrabold leading-[1.12] tracking-[-0.015em]">{featured.title}</h3>
            <dl className="grid grid-cols-3 gap-6 border-t border-night-rule pt-7" aria-label="Scope of the project">
              {featured.facts.map((f) => (
                <div key={f.label} className="flex flex-col-reverse gap-1">
                  <dt className="text-[0.85rem] leading-snug text-on-night-2">{f.label}</dt>
                  <dd className="font-mono text-[clamp(1.5rem,1.1rem+1.4vw,2.2rem)] font-semibold tabular">{f.value}</dd>
                </div>
              ))}
            </dl>
            <span className="inline-flex items-center gap-1.5 font-bold">
              Read the case study <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </span>
          </Link>
          <div className="flex flex-col gap-10">
            <CaseTeaser slug="ethio-telecom" tone="night" />
            <figure className="flex flex-col gap-4 border-t-2 border-on-night-2 pt-6">
              <Quote aria-hidden className="size-6 text-orange" />
              <blockquote className="text-[1.2rem] font-semibold leading-snug">
                “The experience was wonderful, the engineers did a great job. The migration was completed in a couple of days.”
              </blockquote>
              <figcaption className="text-[0.9rem] text-on-night-2">
                Randhir, IT Specialist, Growthgate Capital<Dot />
                <Link href="/case-studies/growthgate/" className="underline underline-offset-4 hover:text-on-night">Case study</Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </Section>

      {/* 8 · Industries */}
      <Section labelledBy="industries-title">
        <div className="mb-12 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-[44rem] flex-col gap-4">
            <h2 id="industries-title" className="text-h2">Designed around the realities of your industry</h2>
            <p className="text-lede text-ink-2">Each sector has its own regulation, volumes and channels. The coloured lines show which kinds of work we most often do there.</p>
          </div>
          <ArrowLink href="/industries/">All industries</ArrowLink>
        </div>
        <ul className="border-t border-ink">
          {industries.map((ind) => (
            <li key={ind.slug} className="border-b border-rule">
              <Link href={`/industries/${ind.slug}/`} className="group grid items-center gap-2 py-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)_8rem_1.5rem] md:gap-8">
                <span className="text-[1.2rem] font-extrabold group-hover:text-orange-ink">{ind.name}</span>
                <span className="text-ink-2">{ind.short}</span>
                <span className="flex items-center gap-1.5" aria-label={`Served by: ${ind.lines.map((l) => pillars[l].name).join(", ")}`}>
                  {ind.lines.map((l) => (
                    <span key={l} className="h-[5px] w-6 rounded-full" style={{ background: pillars[l].color }} />
                  ))}
                </span>
                <ArrowRight aria-hidden className="hidden size-5 text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:text-ink md:block" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.88rem] text-ink-3">
          {Object.values(pillars).map((p) => (
            <span key={p.id} className="inline-flex items-center gap-2">
              <span className="h-[5px] w-5 rounded-full" style={{ background: p.color }} /> {p.name}
            </span>
          ))}
        </div>
      </Section>

      {/* 9 · How we deliver */}
      <Section tone="mist" labelledBy="deliver-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 id="deliver-title" className="text-h2">From first assessment to the day after go-live</h2>
            <p className="text-ink-2">The same team that designs the solution deploys it and supports it, so nothing is lost between stages.</p>
            <ArrowLink href="/services/">Our services</ArrowLink>
          </div>
          <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <span aria-hidden className="absolute left-2 right-2 top-[7px] hidden h-[5px] rounded-full bg-ink lg:block" />
            {deliverySteps.map((s, i) => (
              <li key={s.name} className="relative flex flex-col gap-3">
                <Station />
                <span className="font-mono text-[0.8rem] text-ink-3">Stage {i + 1}</span>
                <h3 className="text-h3">{s.name}</h3>
                <p className="text-[0.98rem] text-ink-2">{s.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 10 · Why Imperium */}
      <Section labelledBy="why-title">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <h2 id="why-title" className="text-h2">
            Two decades of telephony sit underneath every customer experience we build.
          </h2>
          <dl className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {[
              ["Technology and delivery", "Our own platforms, deployed and supported by our own engineers."],
              ["Integration heritage", "CTI and Avaya integration since 2005, so new channels work with the systems you run."],
              ["Practical AI", "Applied to defined jobs, with what is automated and what stays with people stated plainly."],
              ["Beyond go-live", "Managed services and a 24×7 support line for customers once the project is live."],
            ].map(([t, d]) => (
              <div key={t} className="flex flex-col gap-2 border-t border-ink pt-4">
                <dt className="text-[1.1rem] font-extrabold">{t}</dt>
                <dd className="text-ink-2">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* 11 · FAQ */}
      <Section tone="mist" labelledBy="faq">
        <FaqList faqs={homeFaqs} />
      </Section>

      <CtaBand />
    </>
  );
}
