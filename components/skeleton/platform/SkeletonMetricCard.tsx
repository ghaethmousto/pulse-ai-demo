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
    <div className="rounded-md border border-neutral-300 bg-white p-5">
      <p className="text-[10px] uppercase tracking-widest text-neutral-500">
        {label}
      </p>
      <p className="mt-3 text-3xl font-semibold text-neutral-900">{value}</p>
      {caption ? (
        <p className="mt-1 text-xs text-neutral-500">{caption}</p>
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
