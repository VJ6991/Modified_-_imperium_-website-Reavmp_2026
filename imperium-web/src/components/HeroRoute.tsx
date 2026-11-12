// Page-specific fragment of the route map: this page's inputs converge on one hub and
// leave toward what changes. Same grammar as the homepage NetworkMap, at hero-aside scale.

type Props = { inputs: string[]; hub: string; stops: string[]; colors: string[]; label: string };

export function HeroRoute({ inputs, hub, stops, colors, label }: Props) {
  const W = 680;
  const H = 360;
  const n = inputs.length;
  const cy = 180;
  const gap = 26;
  const capX = 300;
  const capW = 44;
  const capH = n * gap + 22;
  const top = 34;
  const span = H - 70;
  const ys = inputs.map((_, i) => top + (n === 1 ? span / 2 : (i * span) / (n - 1)));
  const ty = (i: number) => cy + (i - (n - 1) / 2) * gap;
  const ins = ys.map((y, i) => {
    const dy = Math.abs(ty(i) - y);
    return `M 2 ${y} H ${capX - 28 - dy} L ${capX - 28} ${ty(i)} H ${capX + 4}`;
  });
  const sx = 452;
  const outYs = stops.map((_, j) => cy + (j - (stops.length - 1) / 2) * 96);
  const outs = outYs.map((y, j) => {
    const sy = cy + (j - (stops.length - 1) / 2) * gap;
    const dy = Math.abs(y - sy);
    return `M ${capX + capW - 4} ${sy} H ${capX + capW + 22} L ${capX + capW + 22 + dy} ${y} H ${sx}`;
  });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={label}>
      {ins.map((d, i) => (
        <path key={i} d={d} fill="none" stroke={colors[i % colors.length]} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      ))}
      {outs.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="var(--color-ink)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      ))}
      {ys.map((y, i) => (
        <text key={i} x="2" y={y - 12} fontSize="16" fontWeight="700" fill="var(--color-ink)" stroke="var(--color-paper)" strokeWidth="6" strokeLinejoin="round" paintOrder="stroke">{inputs[i]}</text>
      ))}
      <rect x={capX} y={cy - capH / 2} width={capW} height={capH} rx={22} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="5" />
      <text x={capX + capW / 2} y={cy + capH / 2 + 30} textAnchor="middle" fontSize="17" fontWeight="800" fill="var(--color-ink)" stroke="var(--color-paper)" strokeWidth="6" strokeLinejoin="round" paintOrder="stroke">{hub}</text>
      {outYs.map((y, j) => (
        <g key={j}>
          <circle cx={sx} cy={y} r="10" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="5" />
          <text x={sx + 22} y={y + 6} fontSize="17" fontWeight="700" fill="var(--color-ink)" stroke="var(--color-paper)" strokeWidth="6" strokeLinejoin="round" paintOrder="stroke">{stops[j]}</text>
        </g>
      ))}
    </svg>
  );
}
