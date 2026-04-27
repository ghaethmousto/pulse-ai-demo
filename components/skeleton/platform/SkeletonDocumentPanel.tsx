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
    <section className="rounded-md border border-neutral-300 bg-white">
      <header className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
        <h2 className="text-base font-semibold">{title}</h2>
        {caption ? (
          <span className="text-xs text-neutral-500">{caption}</span>
        ) : null}
      </header>
      <div className="p-5">
        <div className="flex h-56 items-center justify-center rounded border border-dashed border-neutral-300 bg-neutral-50 text-xs text-neutral-500">
          {placeholder}
        </div>
        {legend ? (
          <ul className="mt-4 flex flex-wrap gap-4 text-xs text-neutral-600">
            {legend.map((l) => (
              <li key={l.label} className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-sm border border-neutral-400 bg-neutral-200" />
                {l.label}
                {l.count ? (
                  <span className="text-neutral-400">{l.count}</span>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
