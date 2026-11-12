import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, CtaBand, SectionHead } from "@/components/blocks";
import { Section } from "@/components/ui";
import { industries } from "@/content/industries";
import { pillars } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "Contact centre, communications and AI solutions for banking, healthcare, government, telecommunications, hospitality, insurance, retail and real estate across the Middle East, Africa and Asia.",
  path: "/industries/",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Industries", path: "/industries/" }]}
        title="Technology aligned to the demands of your industry."
        lede="Every industry has its own customer expectations, service processes and operating constraints. We connect customer engagement and communications to the way your sector actually works."
      />
      <Section>
        <ul className="grid gap-x-12 gap-y-14 md:grid-cols-2">
          {industries.map((i) => (
            <li key={i.slug}>
              <Link href={`/industries/${i.slug}/`} className="group flex h-full flex-col gap-4 border-t-2 border-ink pt-6 hover:border-orange">
                <span className="flex items-center gap-1.5" aria-hidden>
                  {i.lines.map((l) => <span key={l} className="h-[5px] w-6 rounded-full" style={{ background: pillars[l].color }} />)}
                </span>
                <h2 className="text-h3 md:text-[1.6rem]">{i.name}</h2>
                <p className="text-[1.08rem] font-semibold leading-snug">{i.headline}</p>
                <ul className="flex flex-col gap-1.5 text-[0.97rem] text-ink-2">
                  {i.useCases.map((u) => <li key={u.title}>{u.title}</li>)}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-bold">
                  {i.name} <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="mist" labelledBy="common-title">
        <SectionHead id="common-title" title="Four questions we answer in every sector" />
        <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Regulation", "Which rules govern recording, retention, consent and audit of customer conversations."],
            ["Data residency", "Where recordings, transcripts and backups are stored, and where AI processing runs."],
            ["Sovereignty", "Who operates the platform and who can access the data, including support teams."],
            ["Legacy", "Which existing telephony, CRM and core systems must keep working through the change."],
          ].map(([t, d]) => (
            <div key={t} className="flex flex-col gap-2 border-t-2 border-ink pt-5">
              <dt className="text-h3 font-extrabold">{t}</dt>
              <dd className="text-ink-2">{d}</dd>
            </div>
          ))}
        </dl>
      </Section>
      <Section>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <h2 className="text-h2">Working in another sector?</h2>
          <p className="text-lede text-ink-2">
            We also support logistics, education, facilities management, automotive and business centres. If customers
            contact your organisation by phone, chat or messaging, the same building blocks apply.
          </p>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
