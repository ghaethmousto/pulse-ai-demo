export interface SkeletonMetricCardProps {
  label: string;
  value: string;
  caption?: string;
}

export function SkeletonMetricCard({
  label,
  value,
  caption,
}: SkeletonMetricCardProps) {
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
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
      {metrics.map((m) => (
        <SkeletonMetricCard key={m.label} {...m} />
      ))}
    </div>
  );
}
