import { PageHero } from "@/components/blocks";
import { Dot, Section } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Imperium",
  description:
    "Talk to an expert about contact centre, enterprise communications or AI projects, or request a product demo. Offices in Dubai, Singapore, Chennai and Bengaluru. 24×7 support for customers.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", path: "/contact/" }]}
        title="Let's discuss what you need to connect, improve or modernize."
        lede="Tell us about your customer experience or enterprise communications priorities. Share a few details and the right member of our team will reply within one business day."
        aside={
          <dl className="grid gap-5 border-t-2 border-ink pt-5 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <dt className="text-ink-3">Sales</dt>
              <dd className="flex flex-col font-bold">
                <a href={`tel:${site.offices[0].phones[0].replace(/\s/g, "")}`} className="tabular hover:text-orange-ink">{site.offices[0].phones[0]}</a>
                <a href={`mailto:${site.email.sales}`} className="hover:text-orange-ink">{site.email.sales}</a>
              </dd>
            </div>
            <div>
              <dt className="text-ink-3">24×7 support for customers</dt>
              <dd className="flex flex-col font-bold">
                <a href={`tel:${site.supportPhone.replace(/\s/g, "")}`} className="tabular hover:text-orange-ink">{site.supportPhone}</a>
                <a href={`mailto:${site.email.support}`} className="hover:text-orange-ink">{site.email.support}</a>
              </dd>
            </div>
          </dl>
        }
      />
      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <h2 className="mb-8 text-h2">Send an enquiry</h2>
            <ContactForm />
          </div>
          <aside className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 border-t-2 border-ink pt-5">
              <h2 className="text-h3">Offices</h2>
              <ul className="flex flex-col gap-4">
                {site.offices.map((o) => (
                  <li key={o.city}>
                    <span className="font-bold">{o.city}</span>
                    <span className="text-ink-3"><Dot />{o.role}</span>
                    {o.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block tabular text-ink-2 hover:text-ink">{p}</a>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
