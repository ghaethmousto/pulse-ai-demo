export interface SkeletonMetricCardProps {
  label: string;
  value: string;
  caption?: string;
  image?: string;
}

export function SkeletonMetricCard({
  label,
  value,
  caption,
  image,
}: SkeletonMetricCardProps) {
  if (image) {
    return (
      <div className="relative h-[160px] w-full overflow-hidden rounded-md border border-border bg-card">
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 block h-full w-full object-cover scale-[1.115] dark:invert dark:hue-rotate-180"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-white/55 dark:bg-black/45"
        />
        <div className="relative z-[1] p-5">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {label}
          </p>
          <p className="mt-3 text-3xl font-semibold text-foreground bidi-isolate">
            {value}
          </p>
          {caption ? (
            <p className="mt-1 text-xs text-muted-foreground">{caption}</p>
          ) : null}
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-md border border-border bg-card p-5">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="mt-3 text-3xl font-semibold text-foreground bidi-isolate">{value}</p>
      {caption ? (
        <p className="mt-1 text-xs text-muted-foreground">{caption}</p>
      ) : null}
    </div>
  );
}

export function SkeletonMetricGrid({
  metrics,
}: {
  metrics: SkeletonMetricCardProps[];
}) {
  const cols = metrics.length;
  return (
    <div
      className="grid gap-4"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {metrics.map((m) => (
        <SkeletonMetricCard key={m.label} {...m} />
      ))}
    </div>
  );
}
