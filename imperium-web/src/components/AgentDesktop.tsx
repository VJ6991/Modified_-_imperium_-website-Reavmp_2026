import { Headphones, MessageSquare, Phone, Mic, Eye, Hand } from "lucide-react";

// Illustrative rendition of the iConnect supervisor view, drawn in code from the product
// screenshots in the iConnect deck. Sample data only; labelled on screen.
// Replace with high-resolution product screenshots when supplied.

const agents = [
  { name: "Rania Haddad", ext: "713", queue: "Sales", state: "On call", channel: "voice", time: "02:14", tone: "teal" },
  { name: "Sunil Perera", ext: "714", queue: "Billing", state: "Chatting", channel: "chat", time: "05:41", tone: "blue" },
  { name: "Meron Tesfaye", ext: "716", queue: "Support", state: "Available", channel: null, time: "", tone: "ink" },
  { name: "Arjun Menon", ext: "719", queue: "Sales", state: "Wrap-up", channel: null, time: "00:38", tone: "orange" },
] as const;

const kpis = [
  { label: "Interactions today", value: "106" },
  { label: "Answered", value: "68" },
  { label: "Abandoned", value: "1" },
  { label: "Service level", value: "83.0%" },
];

const toneClass = {
  teal: "bg-teal/10 text-teal",
  blue: "bg-blue/10 text-blue",
  ink: "bg-mist-2 text-ink-2",
  orange: "bg-orange/12 text-orange-ink",
};

export function AgentDesktop({ compact = false }: { compact?: boolean }) {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden rounded-[6px] border border-rule bg-paper text-ink shadow-[0_24px_60px_-30px_rgba(17,20,24,0.45),0_2px_6px_-2px_rgba(17,20,24,0.12)]"
        aria-hidden="true"
      >
        {/* window bar */}
        <div className="flex items-center justify-between border-b border-rule bg-mist px-4 py-2.5">
          <span className="text-[0.8rem] font-bold">iConnect Supervisor</span>
          <span className="font-mono text-[0.72rem] text-ink-3">Live: Sales, Billing, Support</span>
        </div>

        <div className="grid grid-cols-2 gap-px bg-rule sm:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.label} className="bg-paper px-4 py-3">
              <div className="text-[0.72rem] font-semibold text-ink-3">{k.label}</div>
              <div className="font-mono text-[1.35rem] font-semibold tabular leading-tight">{k.value}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-rule">
          <div className="grid grid-cols-[1fr_auto] items-center gap-2 bg-mist/60 px-4 py-2 text-[0.72rem] font-semibold text-ink-3 sm:grid-cols-[1.4fr_0.8fr_1fr_auto]">
            <span>Agent</span>
            <span className="hidden sm:block">Queue</span>
            <span className="hidden sm:block">State</span>
            <span className="text-right">Monitor</span>
          </div>
          <ul>
            {(compact ? agents.slice(0, 3) : agents).map((a) => (
              <li key={a.ext} className="grid grid-cols-[1fr_auto] items-center gap-2 border-t border-rule px-4 py-2.5 text-[0.82rem] sm:grid-cols-[1.4fr_0.8fr_1fr_auto]">
                <span className="flex min-w-0 items-center gap-2.5">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-ink text-[0.7rem] font-bold text-paper">
                    {a.name.split(" ").map((p) => p[0]).join("")}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-bold">{a.name}</span>
                    <span className="block font-mono text-[0.68rem] text-ink-3">Ext {a.ext}</span>
                    <span className={`mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.7rem] font-bold sm:hidden ${toneClass[a.tone]}`}>{a.state}{a.time && ` ${a.time}`}</span>
                  </span>
                </span>
                <span className="hidden text-ink-2 sm:block">{a.queue}</span>
                <span className="hidden items-center gap-1.5 sm:flex">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.72rem] font-bold ${toneClass[a.tone]}`}>
                    {a.channel === "voice" && <Phone className="size-3" />}
                    {a.channel === "chat" && <MessageSquare className="size-3" />}
                    {a.state}
                  </span>
                  {a.time && <span className="font-mono text-[0.7rem] text-ink-3 tabular">{a.time}</span>}
                </span>
                <span className="flex justify-end gap-1 text-ink-3">
                  {a.channel ? (
                    <>
                      <span className="grid size-7 place-items-center rounded-[3px] border border-rule" title="Observe"><Eye className="size-3.5" /></span>
                      <span className="grid size-7 place-items-center rounded-[3px] border border-rule" title="Whisper"><Headphones className="size-3.5" /></span>
                      <span className="grid size-7 place-items-center rounded-[3px] border border-rule" title="Barge in"><Mic className="size-3.5" /></span>
                    </>
                  ) : a.state === "Wrap-up" ? (
                    <span className="grid size-7 place-items-center rounded-[3px] border border-orange/50 text-orange-ink" title="Hand raised"><Hand className="size-3.5" /></span>
                  ) : (
                    <span className="h-7" />
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="mt-3 text-[0.82rem] text-ink-3">
        Illustration of the iConnect supervisor view. Names and figures are sample data.
      </figcaption>
    </figure>
  );
}
