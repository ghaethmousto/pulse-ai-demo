interface SkeletonRiskPanelProps {
  title: string;
  subtitle?: string;
  placeholder?: string;
  notes?: string[];
  image?: string;
}

export function SkeletonRiskPanel({
  title,
  subtitle,
  placeholder = "[ risk heatmap · 6 categories · 4 weeks ]",
  notes,
  image,
}: SkeletonRiskPanelProps) {
  return (
    <section className="rounded-md border border-border bg-card">
      <header className="flex items-center justify-between border-b border-border px-5 py-4">
        <h2 className="text-base font-semibold">{title}</h2>
        {subtitle ? (
          <span className="text-xs text-muted-foreground">{subtitle}</span>
        ) : null}
      </header>
      <div className="p-5">
        {image ? (
          <div className="relative h-48 overflow-hidden rounded border border-border">
            <img
              src={image}
              alt={placeholder}
              className="absolute inset-0 h-full w-full object-cover dark:invert dark:hue-rotate-180"
            />
          </div>
        ) : (
          <div className="flex h-48 items-center justify-center rounded border border-dashed border-border bg-muted text-xs text-muted-foreground">
            {placeholder}
          </div>
        )}
        {notes && notes.length > 0 ? (
          <ul className="mt-4 space-y-1 text-xs text-muted-foreground">
            {notes.map((n) => (
              <li key={n}>• {n}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
