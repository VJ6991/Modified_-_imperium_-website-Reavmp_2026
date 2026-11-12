import { PageHero, CtaBand, SectionHead } from "@/components/blocks";
import { Button, Section, Station } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { services, deliverySteps } from "@/content/services";
import { pageMetadata, serviceLd, faqLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Consulting, implementation, integration, cloud migration, modernization and 24×7 managed services for contact centres and enterprise communications.",
  path: "/services/",
});

const faqs = [
  { q: "Do you support systems you did not install?", a: "Yes. Many engagements start with an assessment of an environment another partner installed. We review configuration, fix what is wrong and then agree a support scope." },
  { q: "What support hours do you offer?", a: "Existing customers can reach our support line 24 hours a day, 7 days a week. Coverage, response times and service reviews are agreed per contract." },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[...services.map((s) => serviceLd(s.name, s.summary, `/services/#${s.id}`)), faqLd(faqs)]} />
      <PageHero
        crumbs={[{ name: "Services", path: "/services/" }]}
        title="Expertise from strategy through ongoing operations."
        lede="The right technology needs the right operating model. We support you from the first assessment to the day-to-day running of the environment, with the same team throughout."
        actions={<Button href="/contact/">Talk to an Expert</Button>}
      />

      <Section tone="mist" labelledBy="path-title">
        <SectionHead id="path-title" title="How an engagement runs" />
        <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <span aria-hidden className="absolute left-2 right-2 top-[7px] hidden h-[5px] rounded-full bg-ink lg:block" />
          {deliverySteps.map((s, i) => (
            <li key={s.name} className="relative flex flex-col gap-3">
              <Station />
              <span className="font-mono text-[0.8rem] text-ink-3">Stage {i + 1}</span>
              <h3 className="text-h3">{s.name}</h3>
              <p className="text-ink-2">{s.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="services-title">
        <h2 id="services-title" className="sr-only">Our services</h2>
        <div className="flex flex-col">
          {services.map((s) => (
            <article key={s.id} id={s.id} className="grid scroll-mt-28 gap-6 border-t border-ink py-12 first:border-t-2 lg:grid-cols-[1fr_1.15fr_1fr] lg:gap-12">
              <h3 className="text-h2">{s.name}</h3>
              <p className="text-lede text-ink-2">{s.summary}</p>
              <div>
                <p className="mb-3 text-[0.92rem] font-bold text-ink-3">What you get</p>
                <ul className="flex flex-col gap-2.5">
                  {s.youGet.map((y) => (
                    <li key={y} className="flex gap-3">
                      <span aria-hidden className="mt-[0.7rem] h-[2px] w-3 shrink-0 bg-orange" />
                      {y}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="mist" labelledBy="svc-faq">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <h2 id="svc-faq" className="text-h2">Support questions</h2>
          <dl className="border-t border-ink">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-rule py-6">
                <dt className="text-[1.12rem] font-bold">{f.q}</dt>
                <dd className="measure mt-2 text-ink-2">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
