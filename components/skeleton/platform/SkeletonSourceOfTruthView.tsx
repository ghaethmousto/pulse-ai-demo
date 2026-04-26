import { SkeletonMetricGrid } from "@/components/skeleton/platform/SkeletonMetricCard";
import {
  SkeletonActivityPanel,
  type SkeletonActivityItem,
} from "@/components/skeleton/platform/SkeletonActivityPanel";
import { SkeletonDocumentPanel } from "@/components/skeleton/platform/SkeletonDocumentPanel";

const metrics = [
  { label: "Project Health", value: "82", caption: "/100 · improving" },
  { label: "Schedule", value: "+2d", caption: "vs baseline" },
  { label: "Budget", value: "62%", caption: "spent · on track" },
  { label: "Open Items", value: "47", caption: "11 high priority" },
  { label: "Last Reconciled", value: "2m", caption: "ago · 6 changes" },
];

const livingTimelineItems: SkeletonActivityItem[] = [
  {
    tag: "Decision",
    title: "MEP variation approved · +1.2M AED",
    meta: "S. Al-Mansouri · 2h ago · cites min-2026-04-22.pdf",
    cta: "Open →",
  },
  {
    tag: "Risk",
    title: "Rebar delivery delayed — ETA +3d",
    meta: "Procurement · 5h ago · cites po-3341",
    cta: "Open →",
  },
  {
    tag: "Doc",
    title: "Drawing A-104 rev D issued",
    meta: "R. Iyer · 1d ago · cites a-104-rev-d.dwg",
    cta: "Open →",
  },
];

const reconciliationItems: SkeletonActivityItem[] = [
  {
    tag: "Email → Decision",
    title: "VO-14 owner identified",
  },
  {
    tag: "WhatsApp → Risk",
    title: "Façade material flagged",
  },
  {
    tag: "Drawing rev → Schedule",
    title: "A-104 push +1d to L13",
  },
  {
    tag: "Site photo → Submittal",
    title: "SB-88 evidence attached",
  },
];

const lenses = [
  {
    label: "Owner",
    body: "Sees: budget, milestones, decisions awaiting signature",
  },
  {
    label: "Consultant",
    body: "Sees: RFI/submittal queue, drawing reviews, coordination",
  },
  {
    label: "Contractor",
    body: "Sees: today's plan, blockers, materials, daily report",
  },
];

const decisionLedger = [
  {
    id: "D-041",
    decision: "MEP variation approved (+1.2M AED)",
    owner: "Owner",
    date: "22 Apr",
  },
  {
    id: "D-040",
    decision: "Façade panel — supplier B selected",
    owner: "Consultant",
    date: "20 Apr",
  },
  {
    id: "D-039",
    decision: "Pour sequence resequenced",
    owner: "Contractor",
    date: "18 Apr",
  },
  {
    id: "D-038",
    decision: "Substantial completion target reaffirmed",
    owner: "Owner",
    date: "15 Apr",
  },
];

export function SkeletonSourceOfTruthView() {
  return (
    <>
      <SkeletonMetricGrid metrics={metrics} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SkeletonActivityPanel
            title="Living timeline"
            toolbar={
              <>
                <span className="rounded-md border border-neutral-900 bg-neutral-900 px-2 py-1 text-white">
                  Schedule
                </span>
                <span className="rounded-md border border-neutral-300 px-2 py-1 text-neutral-700">
                  Decisions
                </span>
                <span className="rounded-md border border-neutral-300 px-2 py-1 text-neutral-700">
                  Risks
                </span>
                <span className="rounded-md border border-neutral-300 px-2 py-1 text-neutral-700">
                  Docs
                </span>
              </>
            }
            items={livingTimelineItems}
            footnote="[ multi-track timeline · schedule + decisions + risk events overlaid ]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <section className="rounded-md border border-neutral-300 bg-white">
            <header className="border-b border-neutral-200 px-5 py-4">
              <h2 className="text-base font-semibold">Same truth, three lenses</h2>
            </header>
            <ul className="divide-y divide-neutral-200">
              {lenses.map((l) => (
                <li key={l.label} className="px-5 py-4">
                  <p className="text-sm font-semibold">◯ {l.label}</p>
                  <p className="mt-1 text-xs text-neutral-600">{l.body}</p>
                </li>
              ))}
            </ul>
          </section>

          <SkeletonActivityPanel
            title="Reconciliation feed"
            items={reconciliationItems}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SkeletonDocumentPanel
          title="Document graph"
          caption="1,247 docs · connected"
          legend={[
            { label: "Drawings", count: "412" },
            { label: "RFIs", count: "88" },
            { label: "Submittals", count: "214" },
          ]}
        />
        <section className="rounded-md border border-neutral-300 bg-white">
          <header className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
            <h2 className="text-base font-semibold">Decision ledger</h2>
            <span className="rounded-md border border-neutral-300 px-2 py-1 text-xs text-neutral-700">
              Audit-ready
            </span>
          </header>
          <table className="w-full text-left text-xs">
            <thead className="text-[10px] uppercase tracking-widest text-neutral-500">
              <tr className="border-b border-neutral-200">
                <th className="px-5 py-3">#</th>
                <th className="px-5 py-3">Decision</th>
                <th className="px-5 py-3">Owner</th>
                <th className="px-5 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-neutral-700">
              {decisionLedger.map((row) => (
                <tr key={row.id}>
                  <td className="px-5 py-3 font-mono text-neutral-500">
                    {row.id}
                  </td>
                  <td className="px-5 py-3">{row.decision}</td>
                  <td className="px-5 py-3">{row.owner}</td>
                  <td className="px-5 py-3">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
