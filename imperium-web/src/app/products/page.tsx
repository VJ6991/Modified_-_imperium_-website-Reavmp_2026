import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, CtaBand } from "@/components/blocks";
import { Section } from "@/components/ui";
import { AgentDesktop } from "@/components/AgentDesktop";
import { products } from "@/content/products";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products",
  description:
    "Platforms for connected customer engagement and communications: iConnect omnichannel contact centre for Avaya IP Office, Inaipi AI-native cloud CX platform, and Listen IQ social listening.",
  path: "/products/",
});

export default function ProductsPage() {
  const [iconnect, ...others] = products;
  return (
    <>
      <PageHero
        crumbs={[{ name: "Products", path: "/products/" }]}
        title="Products for connected customer engagement and communications."
        lede="Each platform below solves a defined problem. We help you choose between them, deploy them alongside what you already run, and support them after go-live."
      />
      <Section>
        <div className="grid gap-12 border-b border-rule pb-16 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-[0.92rem] font-semibold text-ink-3">{iconnect.relationship}</span>
            <h2 className="text-h1">{iconnect.name}</h2>
            <p className="text-[1.2rem] font-semibold leading-snug">{iconnect.promise}</p>
            <p className="text-ink-2">{iconnect.summary}</p>
            <Link href={`/products/${iconnect.slug}/`} className="group mt-2 inline-flex items-center gap-1.5 font-bold">
              Explore iConnect <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <AgentDesktop compact />
        </div>
        <ul className="grid gap-12 pt-16 md:grid-cols-2">
          {others.map((p) => (
            <li key={p.slug}>
              <Link href={`/products/${p.slug}/`} className="group flex h-full flex-col gap-4 border-t-2 border-ink pt-6 hover:border-orange">
                <span className="text-[0.92rem] font-semibold text-ink-3">{p.relationship}</span>
                <h2 className="text-h2">{p.name}</h2>
                <p className="text-[1.1rem] font-semibold leading-snug">{p.promise}</p>
                <p className="text-ink-2">{p.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-bold">
                  Explore {p.name} <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="mist" labelledBy="supporting">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <h2 id="supporting" className="text-h2">Connectors and supporting modules</h2>
          <div className="flex flex-col gap-4 text-ink-2">
            <p>
              Alongside these platforms we maintain integration and communications modules for existing customers, including
              CRM connectors, call reporting and call management tools. Availability depends on your telephony platform and
              version.
            </p>
            <p>Ask us about a specific connector or module and we will confirm whether it fits your environment.</p>
          </div>
        </div>
      </Section>
      <CtaBand title="See a platform working with your own scenarios." body="We run demos on real environments, configured with your queue names, channels and call flows." secondary={{ label: "Request a demo", href: "/contact/?type=demo" }} />
    </>
  );
}
