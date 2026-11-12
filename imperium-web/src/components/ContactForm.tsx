"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

const interests = [
  "Customer experience / contact centre",
  "Enterprise communications / telephony",
  "AI & automation",
  "Integration & modernization",
  "Product demo: iConnect",
  "Product demo: Inaipi",
  "Product demo: Listen IQ",
  "Support for an existing system",
  "Partnership",
  "Something else",
];

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-[var(--radius-sm)] border border-rule bg-paper px-3.5 py-3 text-[1rem] text-ink placeholder:text-ink-3 transition-colors hover:border-ink-3 focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-orange";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const interestRef = useRef<HTMLSelectElement>(null);

  // /contact/?type=demo pre-selects a demo request
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("type");
    if (t === "demo" && interestRef.current) interestRef.current.value = "Product demo: iConnect";
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) next.name = "Enter your name.";
    const email = String(data.get("email") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a business email address, like name@company.com.";
    if (!String(data.get("company") || "").trim()) next.company = "Enter your company name.";
    if (!String(data.get("message") || "").trim()) next.message = "Tell us briefly what you need.";
    if (!data.get("consent")) next.consent = "Tick the box so we can reply to you.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`);
      first?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/contact.php", { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-teal/40 bg-teal/5 p-8">
        <p className="text-h3">Thank you. Your enquiry has been sent.</p>
        <p className="text-ink-2">A specialist will reply within one business day. For urgent support on an existing system, call {site.supportPhone}.</p>
      </div>
    );
  }

  const err = (k: string) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1.5 text-[0.9rem] font-semibold text-[#b3261e]">{errors[k]}</p>
    ) : null;
  const describe = (k: string) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `${k}-error` } : {});

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div>
        <label htmlFor="cf-name" className="mb-1.5 block font-bold">Name</label>
        <input id="cf-name" name="name" autoComplete="name" className={field} {...describe("name")} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="cf-email" className="mb-1.5 block font-bold">Business email</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" className={field} {...describe("email")} />
        {err("email")}
      </div>
      <div>
        <label htmlFor="cf-company" className="mb-1.5 block font-bold">Company</label>
        <input id="cf-company" name="company" autoComplete="organization" className={field} {...describe("company")} />
        {err("company")}
      </div>
      <div>
        <label htmlFor="cf-country" className="mb-1.5 block font-bold">Country or region</label>
        <input id="cf-country" name="country" autoComplete="country-name" className={field} />
      </div>
      <div>
        <label htmlFor="cf-role" className="mb-1.5 block font-bold">Role <span className="font-normal text-ink-3">(optional)</span></label>
        <input id="cf-role" name="role" autoComplete="organization-title" className={field} />
      </div>
      <div>
        <label htmlFor="cf-interest" className="mb-1.5 block font-bold">Area of interest</label>
        <select id="cf-interest" name="interest" ref={interestRef} defaultValue="" className={`${field} appearance-none bg-[length:1rem] bg-[right_0.9rem_center] bg-no-repeat pr-10`} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23111418' stroke-width='2.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")" }}>
          <option value="">Choose one</option>
          {interests.map((i) => <option key={i}>{i}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className="mb-1.5 block font-bold">What would you like to discuss?</label>
        <textarea id="cf-message" name="message" rows={5} className={field} placeholder="For example: we run Avaya IP Office with 30 agents and want to add web chat and live supervision." {...describe("message")} />
        {err("message")}
      </div>
      <div className="sm:col-span-2">
        <label className="flex items-start gap-3">
          <input type="checkbox" name="consent" value="yes" className="mt-1 size-5 shrink-0 accent-[var(--color-action)]" {...describe("consent")} />
          <span className="text-[0.95rem] text-ink-2">I agree that Imperium may contact me about this enquiry. See our <a href="/privacy/" className="underline underline-offset-4">privacy notice</a>.</span>
        </label>
        {err("consent")}
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "sending"} className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-md)] bg-action px-6 font-bold text-white transition-colors hover:bg-action-hover disabled:cursor-wait disabled:opacity-70">
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-[0.95rem] font-semibold text-[#b3261e]">
            Your enquiry could not be sent. Please email {site.email.sales} or call {site.offices[0].phones[0]}.
          </p>
        )}
      </div>
    </form>
  );
}
