interface SkeletonDocumentPanelProps {
  title: string;
  caption?: string;
  legend?: { label: string; count?: string }[];
  placeholder?: string;
}

export function SkeletonDocumentPanel({
  title,
  caption,
  legend,
  placeholder = "[ force-directed graph · drawings → specs → contracts → submittals ]",
}: SkeletonDocumentPanelProps) {
  return (
    <section className="rounded-md border border-border bg-card">
      <header className="flex items-center justify-between border-b border-border px-5 py-4">
        <h2 className="text-base font-semibold">{title}</h2>
        {caption ? (
          <span className="text-xs text-muted-foreground bidi-iso">{caption}</span>
        ) : null}
      </header>
      <div className="p-5">
        <div className="flex h-56 items-center justify-center rounded border border-dashed border-border bg-muted text-xs text-muted-foreground">
          {placeholder}
        </div>
        {legend ? (
          <ul className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
            {legend.map((l) => (
              <li key={l.label} className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-sm border border-muted-foreground/40 bg-muted" />
                {l.label}
                {l.count ? (
                  <span className="text-muted-foreground bidi-isolate">{l.count}</span>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
