interface SkeletonRiskPanelProps {
  title: string;
  subtitle?: string;
  placeholder?: string;
  notes?: string[];
}

export function SkeletonRiskPanel({
  title,
  subtitle,
  placeholder = "[ risk heatmap · 6 categories · 4 weeks ]",
  notes,
}: SkeletonRiskPanelProps) {
  return (
    <section className="rounded-md border border-neutral-300 bg-white">
      <header className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
        <h2 className="text-base font-semibold">{title}</h2>
        {subtitle ? (
          <span className="text-xs text-neutral-500">{subtitle}</span>
        ) : null}
      </header>
      <div className="p-5">
        <div className="flex h-48 items-center justify-center rounded border border-dashed border-neutral-300 bg-neutral-50 text-xs text-neutral-500">
          {placeholder}
        </div>
        {notes && notes.length > 0 ? (
          <ul className="mt-4 space-y-1 text-xs text-neutral-600">
            {notes.map((n) => (
              <li key={n}>• {n}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
