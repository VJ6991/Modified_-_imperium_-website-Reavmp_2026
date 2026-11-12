import { PageHero } from "@/components/blocks";
import { Section } from "@/components/ui";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

// DRAFT: must be reviewed by legal before launch (audit section 15, "Security, privacy and compliance statements").
export const metadata = pageMetadata({
  title: "Privacy notice",
  description: "How Imperium Software Technologies handles personal information submitted through this website.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Privacy", path: "/privacy/" }]} title="Privacy notice" lede="How we handle the information you send us through this website." />
      <Section>
        <div className="prose-imp">
          <p className="text-ink-2">This notice applies to imperiumapp.com, operated by {site.legalName}.</p>
          <h2>What we collect</h2>
          <p className="text-ink-2">When you send an enquiry, we collect the details you enter: your name, business email, company, country or region, role, area of interest and message.</p>
          <h2>Why we use it</h2>
          <p className="text-ink-2">We use these details only to reply to your enquiry and, where relevant, to discuss the products or services you asked about. We do not sell your information.</p>
          <h2>Who sees it</h2>
          <p className="text-ink-2">Your enquiry is delivered to our sales or support team by email. It may be shared with the Imperium team member or partner best placed to answer it.</p>
          <h2>How long we keep it</h2>
          <p className="text-ink-2">We keep enquiry details for as long as needed to respond and to maintain a record of our correspondence, unless you ask us to delete them.</p>
          <h2>Your choices</h2>
          <p className="text-ink-2">You can ask to see, correct or delete the information you sent us by writing to <a href={`mailto:${site.email.sales}`}>{site.email.sales}</a>.</p>
          <h2>Cookies</h2>
          <p className="text-ink-2">This website does not set advertising or tracking cookies.</p>
        </div>
      </Section>
    </>
  );
}
