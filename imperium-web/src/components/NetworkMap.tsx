// Hero diagram: customer channels drawn as transit lines converging on one interchange
// (the agent desktop), then leaving toward what the business gets. Dots travel the lines
// to show conversations arriving; they are hidden under prefers-reduced-motion.

// Every channel is a Customer Experience line, so all five run in Imperium orange;
// what they reach is drawn in ink. (Pillar colours keep one meaning site-wide.)
const channels = [
  { name: "Voice", color: "var(--color-orange)" },
  { name: "WhatsApp", color: "var(--color-orange)" },
  { name: "Web chat", color: "var(--color-orange)" },
  { name: "Email", color: "var(--color-orange)" },
  { name: "Social", color: "var(--color-orange)" },
];

const outcomes = ["Customer record on screen", "Supervisor sees it live", "Every contact reported"];

function Desktop() {
  const W = 1200;
  const ys = [56, 128, 200, 272, 344];
  const capX = 560;
  const capW = 48;
  const ty = (i: number) => 200 + (i - 2) * 30; // where each line meets the interchange
  const paths = ys.map((y, i) => {
    const dy = Math.abs(ty(i) - y);
    const bend = capX - 44 - dy;
    return `M 0 ${y} H ${bend} L ${capX - 44} ${ty(i)} H ${capX + 4}`;
  });
  const outYs = [96, 200, 304];
  const outStart = capX + capW;
  const outPaths = outYs.map((y, i) => {
    const sy = 200 + (i - 1) * 30;
    const dy = Math.abs(y - sy);
    return `M ${outStart - 4} ${sy} H ${outStart + 40} L ${outStart + 40 + dy} ${y} H 900`;
  });

  return (
    <svg viewBox={`0 0 ${W} 400`} className="h-auto w-full" role="img" aria-labelledby="map-title map-desc">
      <title id="map-title">How Imperium connects customer conversations</title>
      <desc id="map-desc">
        Voice, WhatsApp, web chat, email and social conversations converge on one agent desktop. From there the customer record opens on screen, supervisors see the conversation live, and every contact is reported.
      </desc>

      {paths.map((d, i) => (
        <path key={i} id={`ch-${i}`} d={d} fill="none" stroke={channels[i].color} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      ))}
      {outPaths.map((d, i) => (
        <path key={i} id={`out-${i}`} d={d} fill="none" stroke="var(--color-ink)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      ))}

      {/* channel labels sit above the start of each line */}
      {ys.map((y, i) => (
        <text key={i} x="2" y={y - 14} fontSize="17" fontWeight="700" fill="var(--color-ink)">
          {channels[i].name}
        </text>
      ))}

      {/* interchange */}
      <rect x={capX} y={128} width={capW} height={144} rx={24} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="5" />
      <text x={capX + capW / 2} y={306} textAnchor="middle" fontSize="18" fontWeight="800" fill="var(--color-ink)">
        One agent desktop
      </text>
      <text x={capX + capW / 2} y={330} textAnchor="middle" fontSize="14" fill="var(--color-ink-3)" fontFamily="var(--font-mono)">
        iConnect · Inaipi
      </text>

      {/* destination stations */}
      {outYs.map((y, i) => (
        <g key={i}>
          <circle cx="900" cy={y} r="11" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="5" />
          <text x="926" y={y + 6} fontSize="18" fontWeight="700" fill="var(--color-ink)">
            {outcomes[i]}
          </text>
        </g>
      ))}

      {/* travelling conversations */}
      <g className="map-dots">
        {paths.map((_, i) => (
          <circle key={i} r="6" fill="var(--color-paper)" stroke={channels[i].color} strokeWidth="3.5">
            <animateMotion dur={`${4.2 + i * 0.35}s`} begin={`${i * 0.7}s`} repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.45 0 0.2 1">
              <mpath href={`#ch-${i}`} />
            </animateMotion>
          </circle>
        ))}
        {outPaths.map((_, i) => (
          <circle key={i} r="5" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="3">
            <animateMotion dur="3.4s" begin={`${1.6 + i * 0.9}s`} repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.45 0 0.2 1">
              <mpath href={`#out-${i}`} />
            </animateMotion>
          </circle>
        ))}
      </g>
    </svg>
  );
}

function Mobile() {
  // Channels stacked on the left, interchange on the right, outcomes running down.
  const ys = [40, 92, 144, 196, 248];
  const capX = 262;
  const ty = (i: number) => 144 + (i - 2) * 22;
  const paths = ys.map((y, i) => {
    const dy = Math.abs(ty(i) - y);
    const bend = capX - 30 - dy;
    return `M 0 ${y} H ${bend} L ${capX - 30} ${ty(i)} H ${capX + 4}`;
  });
  const cx = capX + 20;
  const lx = 12;
  const out = `M ${cx} 200 V 272 L ${cx - 22} 294 H ${lx + 22} L ${lx} 316 V 476`;
  const stops = [360, 418, 476];
  return (
    <svg viewBox="0 0 360 500" className="h-auto w-full" role="img" aria-labelledby="mmap-title">
      <title id="mmap-title">Voice, WhatsApp, web chat, email and social conversations converge on one agent desktop, which opens the customer record, shows supervisors the conversation live and reports every contact.</title>
      {paths.map((d, i) => (
        <path key={i} id={`mch-${i}`} d={d} fill="none" stroke={channels[i].color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      ))}
      <path id="mout" d={out} fill="none" stroke="var(--color-ink)" strokeWidth="6" strokeLinecap="round" />
      {ys.map((y, i) => (
        <text key={i} x="0" y={y - 11} fontSize="15" fontWeight="700" fill="var(--color-ink)">
          {channels[i].name}
        </text>
      ))}
      <rect x={capX} y={88} width="40" height="112" rx="20" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="4.5" />
      <text x={cx - 12} y={278} textAnchor="end" fontSize="15" fontWeight="800" fill="var(--color-ink)" stroke="var(--color-paper)" strokeWidth="6" paintOrder="stroke">One agent desktop</text>
      {stops.map((y, i) => (
        <g key={i}>
          <circle cx={lx} cy={y} r="9" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="4.5" />
          <text x={lx + 24} y={y + 5} fontSize="15" fontWeight="700" fill="var(--color-ink)">
            {outcomes[i]}
          </text>
        </g>
      ))}
      <g className="map-dots">
        {paths.map((_, i) => (
          <circle key={i} r="5" fill="var(--color-paper)" stroke={channels[i].color} strokeWidth="3">
            <animateMotion dur={`${3.8 + i * 0.3}s`} begin={`${i * 0.6}s`} repeatCount="indefinite">
              <mpath href={`#mch-${i}`} />
            </animateMotion>
          </circle>
        ))}
      </g>
    </svg>
  );
}

export function NetworkMap() {
  return (
    <figure className="m-0">
      <div className="hidden md:block">
        <Desktop />
      </div>
      <div className="mx-auto max-w-[26rem] md:hidden">
        <Mobile />
      </div>
    </figure>
  );
}
