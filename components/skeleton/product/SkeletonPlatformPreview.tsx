const sidebarItems = [
  "Overview",
  "Documents",
  "Decisions",
  "Tasks",
  "Risks",
  "Submittals",
  "Timeline",
  "Intelligence",
];

const kpis = [
  { label: "Budget", value: "847M", unit: "AED" },
  { label: "Schedule", value: "+2d", unit: "variance" },
  { label: "RFIs", value: "12", unit: "open" },
  { label: "Risks", value: "4", unit: "high" },
];

const feed = [
  { tag: "RFI · OPEN", title: "RFI-124 — slab edge detail clarification", meta: "blocks 2 tasks · L4 east" },
  { tag: "SUBMITTAL · APPROVED", title: "SB-88 cladding panels", meta: "procurement unblocked" },
  { tag: "SCHEDULE", title: "MEP rough-in wk-34", meta: "3 mitigations" },
  { tag: "RISK · WEATHER", title: "Wk-34 storm window — pour at risk", meta: "crane operations escalated +6h" },
  { tag: "DECISION · APPROVED", title: "Façade vendor switch — Owner sign-off", meta: "trail · 6 docs linked" },
];

const aiNotes = [
  "RFI-124 blocks 3 downstream tasks. Escalate?",
  "Submittal SB-88 approved — procurement can proceed.",
  "Risk: weather delay likely wk-34, 2 mitigations.",
];

export function SkeletonPlatformPreview() {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          The Platform
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-neutral-900 sm:text-4xl">
          One operational space. All project intelligence.
        </h2>

        <div className="mt-10 overflow-hidden rounded-lg border border-neutral-300 bg-white text-left">
          <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr_260px]">
            <aside className="border-b border-neutral-200 p-4 lg:border-b-0 lg:border-r">
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold">
                <span className="h-3 w-3 rounded-sm border border-neutral-400" />
                Pulse
              </div>
              <ul className="space-y-2 text-xs text-neutral-600">
                {sidebarItems.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </aside>

            <div className="p-5">
              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span>PROJECT · MARINA TOWER PHASE 2</span>
                <span className="flex items-center gap-2">
                  <span className="rounded-full border border-neutral-300 px-2 py-0.5">• Live</span>
                  <span className="rounded-full border border-neutral-300 px-2 py-0.5">14 members</span>
                </span>
              </div>
              <h3 className="mt-2 text-2xl font-semibold">Overview</h3>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {kpis.map((k) => (
                  <div
                    key={k.label}
                    className="rounded border border-neutral-200 p-3"
                  >
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                      {k.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold">{k.value}</p>
                    <p className="text-[10px] text-neutral-500">{k.unit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded border border-neutral-200 p-3">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                  Live · One reconciled view · Streaming
                </p>
                <ul className="mt-3 space-y-2">
                  {feed.map((f) => (
                    <li
                      key={f.title}
                      className="rounded border border-neutral-200 p-2"
                    >
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                        {f.tag}
                      </p>
                      <p className="text-xs font-medium">{f.title}</p>
                      <p className="text-[10px] text-neutral-500">{f.meta}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="border-t border-neutral-200 p-4 lg:border-l lg:border-t-0">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                Pulse Intelligence
              </p>
              <ul className="mt-3 space-y-3 text-xs text-neutral-700">
                {aiNotes.map((n) => (
                  <li
                    key={n}
                    className="rounded border border-neutral-200 p-2"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
