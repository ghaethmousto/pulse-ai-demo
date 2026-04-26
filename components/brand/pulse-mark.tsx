// Inline ECG pulse mark used in the floating AI launcher and panel header.
// Matches design/reference-ui/preview/ai-panel.html — static A-spike + baseline
// + animated sweep.
export function PulseMark({
  width = 20,
  height = 16,
  stroke = "currentColor",
  baselineOpacity = 0.32,
}: {
  width?: number;
  height?: number;
  stroke?: string;
  baselineOpacity?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 28"
      fill="none"
      aria-hidden
      className="overflow-visible"
    >
      <g
        stroke={stroke}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M6 25 L18 3 L30 25" opacity={0.85} />
        <path d="M2 16 L34 16" opacity={baselineOpacity} />
        <path
          className="pulse-mark-sweep"
          d="M2 16 L11 16 L13.2 14 L15.4 18.5 L18 10 L20.6 21 L23 9 L25.2 18.5 L27.2 15.2 L34 15.2"
          pathLength={180}
        />
      </g>
    </svg>
  );
}
