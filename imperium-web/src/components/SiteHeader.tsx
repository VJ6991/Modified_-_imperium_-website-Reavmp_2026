"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { menus, flatLinks } from "@/content/nav";

export function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null); // desktop mega menu key
  const [sheet, setSheet] = useState(false); // mobile menu
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close everything on navigation (adjusting state during render, not in an effect)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
    setSheet(false);
  }

  // Escape and outside click close the mega menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setSheet(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = sheet ? "hidden" : "";
  }, [sheet]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href);
  const enter = (key: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpen(key), 90);
  };
  const leave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpen(null), 160);
  };

  const active = menus.find((m) => m.key === open);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-[6px] supports-[backdrop-filter]:bg-paper/90"
      onMouseLeave={leave}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        Skip to content
      </a>
      <div className="wrap flex h-16 items-center gap-8 md:h-[4.5rem]">
        <Logo />

        <nav aria-label="Main" className="hidden flex-1 xl:block">
          <ul className="flex items-center gap-1">
            {menus.map((m) => (
              <li key={m.key} onMouseEnter={() => enter(m.key)}>
                <button
                  type="button"
                  aria-expanded={open === m.key}
                  aria-controls="mega-panel"
                  onClick={() => setOpen(open === m.key ? null : m.key)}
                  className={`flex items-center gap-1 rounded-[var(--radius-sm)] px-3 py-2 text-[0.95rem] font-semibold transition-colors hover:bg-mist ${
                    isActive(m.href) ? "text-orange-ink" : "text-ink"
                  }`}
                >
                  {m.label}
                  <ChevronDown aria-hidden className={`size-4 transition-transform duration-200 ${open === m.key ? "rotate-180" : ""}`} />
                </button>
              </li>
            ))}
            {flatLinks.map((l) => (
              <li key={l.href} onMouseEnter={leave}>
                <Link
                  href={l.href}
                  className={`block rounded-[var(--radius-sm)] px-3 py-2 text-[0.95rem] font-semibold transition-colors hover:bg-mist ${
                    isActive(l.href) ? "text-orange-ink" : "text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/contact/"
            className="hidden min-h-11 items-center rounded-[var(--radius-md)] bg-action px-4 text-[0.92rem] font-bold text-white transition-colors hover:bg-action-hover sm:inline-flex"
          >
            Talk to an Expert
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-[var(--radius-sm)] text-ink hover:bg-mist xl:hidden"
            aria-expanded={sheet}
            aria-controls="mobile-menu"
            aria-label={sheet ? "Close menu" : "Open menu"}
            onClick={() => setSheet(!sheet)}
          >
            {sheet ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Desktop mega panel */}
      <div
        id="mega-panel"
        hidden={!active}
        onMouseEnter={() => active && enter(active.key)}
        className="absolute inset-x-0 top-full hidden border-b border-rule bg-paper shadow-[0_18px_40px_-24px_rgba(17,20,24,0.35)] xl:block"
      >
        {active && (
          <div className="wrap grid grid-cols-[17rem_1fr] gap-12 py-9">
            <div className="flex flex-col gap-3 border-r border-rule pr-10">
              <p className="text-2xl font-extrabold tracking-tight">{active.label}</p>
              <p className="text-ink-2">{active.intro}</p>
              <Link href={active.href} className="mt-2 inline-flex items-center gap-1.5 font-bold text-orange-ink hover:underline">
                All {active.label.toLowerCase()} <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <ul className={`grid gap-x-10 gap-y-1 ${active.links.length > 4 ? "grid-cols-3" : "grid-cols-2"}`}>
              {active.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group flex gap-3 rounded-[var(--radius-sm)] p-3 hover:bg-mist">
                    {l.color && <span aria-hidden className="mt-2 h-[5px] w-5 shrink-0 rounded-full" style={{ background: l.color }} />}
                    <span>
                      <span className="block font-bold text-ink group-hover:text-orange-ink">{l.label}</span>
                      {l.note && <span className="mt-0.5 block text-[0.92rem] leading-snug text-ink-3">{l.note}</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        hidden={!sheet}
        className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto overscroll-contain bg-paper md:top-[4.5rem] xl:hidden"
      >
        <nav aria-label="Main" className="wrap flex flex-col pb-[calc(2rem+env(safe-area-inset-bottom,0px))] pt-4">
          {menus.map((m) => (
            <details key={m.key} className="group border-b border-rule">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-xl font-extrabold [&::-webkit-details-marker]:hidden">
                {m.label}
                <ChevronDown aria-hidden className="size-5 transition-transform group-open:rotate-180" />
              </summary>
              <ul className="flex flex-col gap-1 pb-4">
                {m.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="flex items-start gap-3 py-2">
                      {l.color && <span aria-hidden className="mt-2.5 h-[5px] w-5 shrink-0 rounded-full" style={{ background: l.color }} />}
                      <span>
                        <span className="block font-bold">{l.label}</span>
                        {l.note && <span className="block text-[0.92rem] text-ink-3">{l.note}</span>}
                      </span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href={m.href} className="inline-flex items-center gap-1.5 py-2 font-bold text-orange-ink">
                    All {m.label.toLowerCase()} <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </li>
              </ul>
            </details>
          ))}
          {flatLinks.map((l) => (
            <Link key={l.href} href={l.href} className="border-b border-rule py-4 text-xl font-extrabold">
              {l.label}
            </Link>
          ))}
          <Link href="/contact/" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-[var(--radius-md)] bg-action px-5 font-bold text-white">
            Talk to an Expert
          </Link>
        </nav>
      </div>
    </header>
  );
}
