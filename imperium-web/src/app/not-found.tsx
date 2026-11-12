import Link from "next/link";
import { Button, LineMark } from "@/components/ui";
import { menus } from "@/content/nav";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="wrap grid gap-14 py-20 md:py-28 lg:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-6">
          <LineMark color="var(--color-orange)" long />
          <h1 className="text-h1">This line does not go anywhere.</h1>
          <p className="measure text-lede text-ink-2">
            The page you were looking for has moved or no longer exists. Our site was rebuilt in 2026, so older links may point to pages that are now organised differently.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/">Go to the homepage</Button>
            <Button href="/contact/" variant="secondary">Contact us</Button>
          </div>
        </div>
        <nav aria-label="Popular pages" className="flex flex-col gap-6">
          {menus.map((m) => (
            <div key={m.key}>
              <Link href={m.href} className="font-extrabold hover:text-orange-ink">{m.label}</Link>
              <ul className="mt-2 flex flex-col gap-1 text-ink-2">
                {m.links.slice(0, 4).map((l) => <li key={l.href}><Link href={l.href} className="hover:text-ink">{l.label}</Link></li>)}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}
