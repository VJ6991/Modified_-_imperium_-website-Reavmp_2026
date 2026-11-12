import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type BtnProps = { href: string; children: ReactNode; variant?: "primary" | "secondary" | "onNight" | "ghostNight"; className?: string };

export function Button({ href, children, variant = "primary", className = "" }: BtnProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-5 py-3 text-[0.95rem] font-bold leading-none transition-colors duration-200 min-h-11";
  const styles = {
    primary: "bg-action text-white hover:bg-action-hover",
    secondary: "border border-ink text-ink hover:bg-ink hover:text-paper",
    onNight: "bg-paper text-ink hover:bg-orange hover:text-white",
    ghostNight: "border border-on-night-2 text-on-night hover:border-on-night hover:bg-night-2",
  }[variant];
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
    >
      {children}
    </Link>
  );
}

export function ArrowLink({ href, children, className = "", tone = "ink" }: { href: string; children: ReactNode; className?: string; tone?: "ink" | "night" }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 font-bold ${tone === "ink" ? "text-ink" : "text-on-night"} ${className}`}
    >
      <span className="underline decoration-1 underline-offset-[0.25em] decoration-rule group-hover:decoration-orange">{children}</span>
      <ArrowRight aria-hidden className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" strokeWidth={2.25} />
    </Link>
  );
}

export function Section({
  children,
  tone = "paper",
  className = "",
  id,
  labelledBy,
}: {
  children: ReactNode;
  tone?: "paper" | "mist" | "night";
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  const t = { paper: "bg-paper text-ink", mist: "bg-mist text-ink", night: "bg-night text-on-night" }[tone];
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${t} py-20 md:py-28 ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

/** A short coloured line segment ending in a station dot: the legend marker of the line system. */
export function LineMark({ color, className = "", long = false }: { color: string; className?: string; long?: boolean }) {
  return (
    <span aria-hidden className={`inline-flex items-center ${className}`}>
      <span className={`h-[5px] rounded-full ${long ? "w-10" : "w-6"}`} style={{ background: color }} />
      <span className="-ml-1 size-3 rounded-full border-[3px] bg-paper" style={{ borderColor: color }} />
    </span>
  );
}

export function Station({ color = "var(--color-ink)", size = "md" }: { color?: string; size?: "sm" | "md" }) {
  return (
    <span
      aria-hidden
      className={`inline-block shrink-0 rounded-full border-[3px] bg-paper ${size === "sm" ? "size-3" : "size-4"}`}
      style={{ borderColor: color }}
    />
  );
}

/** Inline separator dot (Overpass's middle-dot glyph sits off-centre, so it is drawn). */
export function Dot() {
  return <span aria-hidden className="mx-2 inline-block size-[3px] rounded-full bg-current align-middle opacity-70" />;
}
