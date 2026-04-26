const tasks = [
  { label: "Reading 3,482 documents", progress: 100, done: true },
  { label: "Linking decisions to drawings", progress: 100, done: true },
  { label: "Reconciling task trackers", progress: 60, done: false },
  { label: "Building risk model", progress: 10, done: false },
  { label: "Generating first insights", progress: 5, done: false },
];

const learnings = [
  "Found 4 unresolved RFIs older than 30 days",
  "Detected 3 duplicate submittals across Procore + Aconex",
  "Schedule has 2 tasks with no predecessors — likely orphaned",
];

export function SkeletonPulseReadsStep() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
      <div>
        <p className="text-sm text-neutral-600">
          We&apos;re indexing documents, reconciling tasks, and building your
          project graph. This takes a few minutes.
        </p>

        <ul className="mt-6 space-y-4">
          {tasks.map((t) => (
            <li key={t.label} className="grid grid-cols-[24px_1fr_120px] items-center gap-3">
              <span
                className={
                  t.done
                    ? "flex h-5 w-5 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 text-[10px] text-white"
                    : "flex h-5 w-5 items-center justify-center rounded-full border border-neutral-300"
                }
                aria-label={t.done ? "Complete" : "Pending"}
              >
                {t.done ? "✓" : ""}
              </span>
              <span
                className={
                  t.done
                    ? "text-sm text-neutral-900"
                    : t.progress > 0
                    ? "text-sm text-neutral-700"
                    : "text-sm text-neutral-400"
                }
              >
                {t.label}
              </span>
              <span
                className="h-1 w-full overflow-hidden rounded-full bg-neutral-200"
                aria-hidden
              >
                <span
                  className="block h-full bg-neutral-900"
                  style={{ width: `${t.progress}%` }}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <aside className="rounded-md border border-neutral-300 bg-neutral-50 p-5">
        <p className="text-[10px] uppercase tracking-widest text-neutral-500">
          Pulse is already learning
        </p>
        <ul className="mt-3 space-y-3">
          {learnings.map((l) => (
            <li
              key={l}
              className="rounded-md border border-neutral-200 bg-white px-4 py-3 text-xs text-neutral-700"
            >
              ◆ {l}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
