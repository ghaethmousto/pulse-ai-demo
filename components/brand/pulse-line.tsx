import { cn } from "@/lib/utils";

/**
 * PulseLine — the animated multi-segment waveform separator that sits below
 * the topbar in every platform screenshot (Source of truth, Consultant,
 * Contractor). Subtle by default; turns wine-tinted when accent={true}.
 *
 * Pure SVG + CSS animation (driven by the keyframes declared in globals.css).
 * Matches the visual rhythm shown in the reference screenshots — five rolling
 * heartbeats fading in/out across the line, with hairline borders top/bottom.
 */
export function PulseLine({
  className,
  accent = false,
  height = 28,
}: {
  className?: string;
  accent?: boolean;
  height?: number;
}) {
  const stroke = accent ? "var(--pulse-wine)" : "var(--fg-tertiary)";
  return (
    <div
      aria-hidden
      className={cn(
        "relative w-full overflow-hidden border-y border-border/40",
        accent && "bg-wine/[0.03]",
        className,
      )}
      style={{ height }}
    >
      <svg
        className="pulse-line-track absolute inset-y-0 h-full"
        style={{ width: "200%", left: 0 }}
        viewBox="0 0 480 28"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* baseline hairline */}
        <line x1={0} y1={14} x2={480} y2={14} stroke={stroke} strokeOpacity={0.18} strokeWidth={1} />
        {/* five heartbeat blips, evenly spaced */}
        <g
          stroke={stroke}
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.85}
        >
          {[0, 96, 192, 288, 384].map((x) => (
            <path
              key={x}
              d={`M${x} 14 L${x + 18} 14 L${x + 22} 8 L${x + 28} 22 L${x + 34} 4 L${x + 40} 24 L${x + 46} 12 L${x + 56} 14`}
            />
          ))}
        </g>
      </svg>
      {/* edge fades so the loop reads as continuous */}
      <div
        className="pointer-events-none absolute inset-y-0 start-0 w-12"
        style={{
          background:
            "linear-gradient(to right, var(--bg-base) 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 end-0 w-12"
        style={{
          background:
            "linear-gradient(to left, var(--bg-base) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
