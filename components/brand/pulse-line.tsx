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
  height = 22,
}: {
  className?: string;
  accent?: boolean;
  height?: number;
}) {
  const stroke = accent ? "var(--pulse-wine)" : "var(--fg-tertiary)";

  // 8 evenly-spaced heartbeats across a 1200-unit viewBox.
  const beats = [50, 200, 350, 500, 650, 800, 950, 1100];

  return (
    <div
      aria-hidden
      className={cn(
        "relative w-full overflow-hidden border-b border-border/40",
        accent && "bg-wine/[0.025] dark:bg-wine/[0.06]",
        className,
      )}
      style={{ height }}
    >
      <svg
        className="absolute inset-x-0 top-1/2 -translate-y-1/2"
        style={{ height: height - 2 }}
        viewBox="0 0 1200 22"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Baseline hairline */}
        <line
          x1={0}
          y1={11}
          x2={1200}
          y2={11}
          stroke={stroke}
          strokeOpacity={0.18}
          strokeWidth={0.6}
          vectorEffect="non-scaling-stroke"
        />
        {/* Heartbeats */}
        <g
          stroke={stroke}
          strokeOpacity={0.78}
          strokeWidth={1.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          vectorEffect="non-scaling-stroke"
        >
          {beats.map((x) => (
            <path
              key={x}
              d={`M${x - 18} 11 L${x - 8} 11 L${x - 5} 6 L${x} 16 L${x + 5} 4 L${x + 10} 18 L${x + 14} 9 L${x + 24} 11`}
            />
          ))}
        </g>
        {/* Two pulsing blip dots, anchored to two of the beats */}
        <g fill={stroke}>
          <circle cx={350} cy={11} r={2.2} className="pulse-live-dot" />
          <circle cx={950} cy={11} r={2.2} className="pulse-live-dot" />
        </g>
      </svg>
      {/* Soft edge fades */}
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
    </div>
  );
}
