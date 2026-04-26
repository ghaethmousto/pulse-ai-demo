import { SkeletonMetricGrid } from "@/components/skeleton/platform/SkeletonMetricCard";
import { SkeletonRiskPanel } from "@/components/skeleton/platform/SkeletonRiskPanel";

const metrics = [
  { label: "Budget", value: "847M", caption: "AED · 62% spent" },
  { label: "Schedule", value: "+2d", caption: "variance · amber" },
  { label: "Open Risks", value: "4", caption: "high-severity" },
  { label: "Pending Decisions", value: "3", caption: "awaiting you" },
];

const decisions = [
  {
    title: "Approve MEP variation · +1.2M AED",
    body: "Consultant review complete",
    age: "2d",
  },
  {
    title: "Sign off Level 14–18 structural",
    body: "Ready for owner approval",
    age: "1d",
  },
  {
    title: "Procurement: facade package",
    body: "3 bids summarised by Pulse",
    age: "4h",
  },
];

const pulseNotes = [
  "Rebar delivery delay — Tower B critical path at risk.",
  "Consultant flagged 3 drawing inconsistencies in L15–L18.",
  "Budget variance on MEP trending +4% against baseline.",
];

export function SkeletonOwnerView() {
  return (
    <>
      <SkeletonMetricGrid metrics={metrics} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <section className="rounded-md border border-neutral-300 bg-white lg:col-span-2">
          <header className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
            <h2 className="text-base font-semibold">Portfolio Health</h2>
            <span className="text-xs text-neutral-500">Last 90 days</span>
          </header>
          <div className="p-5">
            <div className="flex h-56 items-center justify-center rounded border border-dashed border-neutral-300 bg-neutral-50 text-xs text-neutral-500">
              [ burn-down + forecast · multi-series chart ]
            </div>
          </div>
        </section>

        <section className="rounded-md border border-neutral-300 bg-white">
          <header className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
            <h2 className="text-base font-semibold">Decisions awaiting you</h2>
          </header>
          <ul className="divide-y divide-neutral-200">
            {decisions.map((d) => (
              <li key={d.title} className="px-5 py-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{d.title}</p>
                  <span className="text-xs text-neutral-500">{d.age}</span>
                </div>
                <p className="mt-1 text-xs text-neutral-600">{d.body}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-md border border-neutral-900 bg-neutral-900 px-3 py-1 text-white">
                    Approve
                  </span>
                  <span className="rounded-md border border-neutral-300 px-3 py-1 text-neutral-700">
                    Defer
                  </span>
                  <span className="rounded-md border border-neutral-300 px-3 py-1 text-neutral-700">
                    Discuss
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SkeletonRiskPanel
            title="Risk Radar · AI"
            placeholder="[ risk heatmap · 6 categories · 4 weeks ]"
            notes={["3 risks elevated this week. Pulse suggests 2 mitigations."]}
          />
        </div>
        <section className="rounded-md border border-neutral-300 bg-white">
          <header className="border-b border-neutral-200 px-5 py-4">
            <h2 className="text-base font-semibold">What Pulse noticed</h2>
          </header>
          <ul className="divide-y divide-neutral-200">
            {pulseNotes.map((n) => (
              <li key={n} className="px-5 py-3 text-sm text-neutral-700">
                ◆ {n}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
