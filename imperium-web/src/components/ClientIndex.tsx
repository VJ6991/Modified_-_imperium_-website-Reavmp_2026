import { clientIndex } from "@/content/clients";

// Clients by sector, drawn as lines with stations (one line per sector).
export function ClientIndex() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
      {clientIndex.map((s) => (
        <div key={s.sector} className="min-w-0">
          <h3 className="mb-4 border-b-2 border-ink pb-3 text-[1.05rem] font-extrabold leading-snug">{s.sector}</h3>
          <ul className="relative flex flex-col gap-2.5 pl-6">
            <span aria-hidden className="absolute bottom-1.5 left-[5px] top-1.5 w-[3px] rounded-full bg-ink" />
            {s.clients.map((c) => (
              <li key={c} className="relative text-[0.95rem] leading-snug">
                <span aria-hidden className="absolute -left-6 top-[0.25rem] size-[13px] rounded-full border-[3px] border-ink bg-paper" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
