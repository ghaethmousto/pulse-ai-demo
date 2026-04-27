import { cn } from "@/lib/utils";

/**
 * PulseLine — refined, scroll-stable heartbeat strip.
 *
 * No transform animation: the previous drift loop was fighting the
 * sticky topbar's own transform, which caused jank on scroll. Now the
 * line is a static SVG; the sense of "alive" comes from a pair of
 * blip dots that pulse opacity in place (same `pulseLiveDot` keyframe
 * used elsewhere — no horizontal motion).
 *
 * Composition: hairline baseline + 6 evenly-spaced heartbeats + 2
 * accent blips. Edge fades make the rhythm feel continuous.
 */
export function PulseLine({
  className,
  accent = false,
  height = 26,
}: {
  className?: string;
  accent?: boolean;
  height?: number;
}) {
  const stroke = accent ? "var(--pulse-wine-glow)" : "var(--fg-tertiary)";

  const beats = [86, 238, 386, 548, 704, 862, 1018, 1168];
  const blips = [314, 792, 1110];

  return (
    <div
      aria-hidden
      className={cn(
        "relative w-full overflow-hidden border-y border-border/35",
        accent && "bg-wine/[0.035] dark:bg-wine/[0.055]",
        className,
      )}
      style={{ height }}
    >
      <svg
        className="absolute inset-x-0 top-1/2 -translate-y-1/2"
        style={{ height: height - 4 }}
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="pulseLineFade" x1="0" x2="1200" y1="0" y2="0">
            <stop offset="0" stopColor={stroke} stopOpacity="0" />
            <stop offset="0.08" stopColor={stroke} stopOpacity="0.45" />
            <stop offset="0.5" stopColor={stroke} stopOpacity="0.95" />
            <stop offset="0.92" stopColor={stroke} stopOpacity="0.45" />
            <stop offset="1" stopColor={stroke} stopOpacity="0" />
          </linearGradient>
          <filter id="pulseLineGlow" x="-10%" y="-80%" width="120%" height="260%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <line
          x1={0}
          y1={12}
          x2={1200}
          y2={12}
          stroke={stroke}
          strokeOpacity={0.12}
          strokeWidth={0.6}
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1={0}
          y1={8}
          x2={1200}
          y2={8}
          stroke={stroke}
          strokeOpacity={0.05}
          strokeWidth={0.6}
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1={0}
          y1={16}
          x2={1200}
          y2={16}
          stroke={stroke}
          strokeOpacity={0.05}
          strokeWidth={0.6}
          vectorEffect="non-scaling-stroke"
        />
        <g
          stroke="url(#pulseLineFade)"
          strokeWidth={1.35}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          vectorEffect="non-scaling-stroke"
          filter="url(#pulseLineGlow)"
        >
          {beats.map((x) => (
            <path
              key={x}
              d={`M${x - 24} 12 L${x - 10} 12 L${x - 6} 8.2 L${x - 2} 15.4 L${x + 4} 4.8 L${x + 10} 19 L${x + 15} 10 L${x + 24} 12 L${x + 34} 12`}
            />
          ))}
        </g>
        <g fill={stroke} filter="url(#pulseLineGlow)">
          {blips.map((x) => (
            <circle key={x} cx={x} cy={12} r={2.1} className="pulse-live-dot" />
          ))}
        </g>
      </svg>
      <div
        className="pointer-events-none absolute inset-y-0 start-0 w-16"
        style={{
          background: "linear-gradient(to right, var(--bg-base) 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 end-0 w-16"
        style={{
          background: "linear-gradient(to left, var(--bg-base) 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, color-mix(in oklab, var(--pulse-wine) 28%, transparent) 16%, color-mix(in oklab, var(--pulse-wine-glow) 42%, transparent) 50%, color-mix(in oklab, var(--pulse-wine) 28%, transparent) 84%, transparent 100%)",
        }}
      />
    </div>
  );
}
