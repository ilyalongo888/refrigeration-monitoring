"use client";

import { useLanguage } from "@/context/LanguageContext";

const WIDTH = 400;
const HEIGHT = 220;
const PAD_X = 8;
const TOP = 16;
const BOTTOM = 190;
const MIN_T = -2;
const MAX_T = 10;

const data: { t: number; temp: number; label?: string }[] = [
  { t: 0, temp: 3.4, label: "00:00" },
  { t: 2, temp: 3.7 },
  { t: 3.23, temp: 7.8, label: "03:14" },
  { t: 4, temp: 4.0 },
  { t: 6, temp: 3.9, label: "06:00" },
  { t: 8, temp: 3.3 },
  { t: 10, temp: 3.6 },
  { t: 12, temp: 4.1, label: "12:00" },
  { t: 14, temp: 3.8 },
  { t: 16, temp: 3.4 },
  { t: 18, temp: 3.7, label: "18:00" },
  { t: 20, temp: 4.0 },
  { t: 22, temp: 3.5 },
  { t: 24, temp: 3.6, label: "24:00" },
];

function x(t: number) {
  return PAD_X + (t / 24) * (WIDTH - PAD_X * 2);
}

function y(temp: number) {
  return BOTTOM - ((temp - MIN_T) / (MAX_T - MIN_T)) * (BOTTOM - TOP);
}

export function TemperatureChart() {
  const { t } = useLanguage();
  const dx = t.diagnostics;

  const linePoints = data.map((p) => `${x(p.t)},${y(p.temp)}`).join(" ");
  const spike = data.find((p) => p.temp === 7.8)!;
  const spikeX = x(spike.t);
  const spikeY = y(spike.temp);
  const tickLabels = data.filter((p) => p.label);

  return (
    <div className="w-full rounded-panel border border-line bg-white/[0.03] p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
          {dx.chartTitle}
        </span>
        <span className="flex items-center gap-1.5 text-[11px] text-status-normal">
          <span className="h-1.5 w-1.5 rounded-full bg-status-normal" />
          {dx.chartNormalZone}
        </span>
      </div>

      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full" role="img" aria-label={dx.chartTitle}>
        {/* normal zone band: +2 to +5 */}
        <rect
          x={0}
          y={y(5)}
          width={WIDTH}
          height={y(2) - y(5)}
          fill="#22C55E"
          opacity={0.08}
        />
        <line x1={0} x2={WIDTH} y1={y(5)} y2={y(5)} stroke="#22C55E" strokeOpacity={0.25} strokeDasharray="4 4" />
        <line x1={0} x2={WIDTH} y1={y(2)} y2={y(2)} stroke="#22C55E" strokeOpacity={0.25} strokeDasharray="4 4" />

        {/* temperature line */}
        <polyline
          points={linePoints}
          fill="none"
          stroke="#22D3EE"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* spike marker */}
        <line x1={spikeX} x2={spikeX} y1={spikeY} y2={BOTTOM} stroke="#EF4444" strokeOpacity={0.35} strokeDasharray="3 3" />
        <circle cx={spikeX} cy={spikeY} r={4.5} fill="#EF4444" />
        <circle cx={spikeX} cy={spikeY} r={9} fill="#EF4444" opacity={0.18} />

        {/* tooltip */}
        <g transform={`translate(${Math.min(spikeX - 46, WIDTH - 100)}, ${Math.max(spikeY - 34, 4)})`}>
          <rect width="98" height="24" rx="6" fill="#0B1728" stroke="#EF4444" strokeOpacity={0.4} />
          <text x="49" y="16" textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="#F8FAFC">
            {dx.tooltip}
          </text>
        </g>

        {/* baseline */}
        <line x1={0} x2={WIDTH} y1={BOTTOM} y2={BOTTOM} stroke="#94A3B8" strokeOpacity={0.2} />

        {/* x labels */}
        {tickLabels.map((p, i) => (
          <text
            key={i}
            x={x(p.t)}
            y={HEIGHT - 4}
            fontSize="9"
            fill="#94A3B8"
            textAnchor="middle"
            fontFamily="var(--font-mono)"
          >
            {p.label}
          </text>
        ))}
      </svg>
    </div>
  );
}
