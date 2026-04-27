import type { ReactNode } from "react";

export interface SkeletonActivityItem {
  tag: string;
  title: string;
  meta?: string;
  cta?: string;
}

interface SkeletonActivityPanelProps {
  title: string;
  items: SkeletonActivityItem[];
  toolbar?: ReactNode;
  footnote?: string;
  className?: string;
}

export function SkeletonActivityPanel({
  title,
  items,
  toolbar,
  footnote,
  className,
}: SkeletonActivityPanelProps) {
  return (
    <section
      className={`rounded-md border border-border bg-card${
        className ? ` ${className}` : ""
      }`}
    >
      <header className="flex items-center justify-between border-b border-border px-5 py-4">
        <h2 className="text-base font-semibold">{title}</h2>
        {toolbar ? (
          <div className="flex items-center gap-2 text-xs">{toolbar}</div>
        ) : null}
      </header>
      <ul className="divide-y divide-border">
        {items.map((item) => (
          <li
            key={`${item.tag}-${item.title}`}
            className="flex items-start gap-3 px-5 py-3"
          >
            <span className="mt-0.5 inline-block min-w-[120px] text-[10px] uppercase tracking-widest text-muted-foreground">
              {item.tag}
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                {item.title}
              </p>
              {item.meta ? (
                <p className="text-xs text-muted-foreground">{item.meta}</p>
              ) : null}
            </div>
            {item.cta ? (
              <span className="rounded-md border border-border px-2 py-1 text-xs text-foreground/80">
                {item.cta}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
      {footnote ? (
        <p className="border-t border-border px-5 py-3 text-xs text-muted-foreground">
          {footnote}
        </p>
      ) : null}
    </section>
  );
}
