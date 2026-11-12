import Link from "next/link";
import { Logo } from "./Logo";
import { Dot } from "./ui";
import { site } from "@/content/site";
import { menus, flatLinks } from "@/content/nav";

export function SiteFooter() {
  const year = 2026;
  return (
    <footer className="bg-night text-on-night">
      <div className="wrap py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="flex flex-col gap-5">
            <Logo tone="white" />
            <p className="max-w-[34ch] text-on-night-2">{site.shortDescription}</p>
            <div className="mt-2 flex flex-col gap-1">
              <span className="text-[0.92rem] font-semibold text-on-night-2">24×7 support for existing customers</span>
              <a href={`tel:${site.supportPhone.replace(/\s/g, "")}`} className="text-xl font-extrabold tabular hover:text-orange">
                {site.supportPhone}
              </a>
              <a href={`mailto:${site.email.support}`} className="text-on-night-2 hover:text-on-night">
                {site.email.support}
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {menus.map((m) => (
              <div key={m.key}>
                <Link href={m.href} className="font-bold hover:text-orange">
                  {m.label}
                </Link>
                <ul className="mt-4 flex flex-col gap-2.5 text-[0.94rem] text-on-night-2">
                  {m.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="hover:text-on-night">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <span className="font-bold">Company</span>
              <ul className="mt-4 flex flex-col gap-2.5 text-[0.94rem] text-on-night-2">
                {flatLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-on-night">
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact/" className="hover:text-on-night">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-16 grid gap-6 border-t border-night-rule pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {site.offices.map((o) => (
            <div key={o.city} className="flex flex-col gap-1">
              <span className="font-bold">
                {o.city}<Dot /><span className="font-normal text-on-night-2">{o.role}</span>
              </span>
              {o.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="tabular text-on-night-2 hover:text-on-night">
                  {p}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-night-rule pt-8 text-[0.88rem] text-on-night-2 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. Sales: <a className="hover:text-on-night" href={`mailto:${site.email.sales}`}>{site.email.sales}</a>
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/privacy/" className="hover:text-on-night">Privacy</Link></li>
            <li><a href={site.linkedin} target="_blank" rel="noopener" className="hover:text-on-night">LinkedIn</a></li>
            <li><Link href="/sitemap.xml" prefetch={false} className="hover:text-on-night">Sitemap</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
