import { cn } from "@/lib/utils";

export function PulseLogo({ className, withWordmark = true }: { className?: string; withWordmark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className="relative grid size-8 place-items-center rounded-lg"
        style={{
          background:
            "radial-gradient(120% 120% at 30% 20%, var(--pulse-wine-glow), var(--pulse-wine) 55%, var(--pulse-maroon-deep))",
          boxShadow: "var(--shadow-wine)",
        }}
      >
        <svg viewBox="0 0 24 24" className="size-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h3l2-6 4 12 2-6h7" />
        </svg>
      </span>
      {withWordmark && (
        <span className="font-semibold tracking-tight text-foreground">
          Pulse<span className="text-wine">AI</span>
        </span>
      )}
    </span>
  );
}
