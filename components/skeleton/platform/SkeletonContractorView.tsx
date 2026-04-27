import { SkeletonMetricGrid } from "@/components/skeleton/platform/SkeletonMetricCard";

const metrics = [
  { label: "Tasks today", value: "7", caption: "assigned to crew" },
  { label: "Blockers", value: "2", caption: "need escalation" },
  { label: "On track", value: "53%", caption: "this week" },
  { label: "Materials", value: "94%", caption: "delivered" },
  { label: "Crew Hours", value: "186", caption: "logged today" },
];

const todayPlan = [
  { title: "Rebar fixing — L14 Tower B", crew: "Crew A · 12", status: "In progress", progress: 70 },
  { title: "Pour prep — L13 slab", crew: "Crew B · 8", status: "Ready", progress: 30 },
  { title: "MEP rough-in — Podium", crew: "Crew C · 6", status: "Blocked", progress: 45 },
  { title: "Formwork strike — L11", crew: "Crew D · 4", status: "Done", progress: 100 },
];

const blockers = [
  {
    title: "RFI-124 blocks concrete pour — Tower B",
    body: "Consultant review 11 days",
    cta: "Escalate to Consultant →",
  },
  {
    title: "Rebar delivery delayed — ETA +3d",
    body: "Procurement flagged · Pulse notified Owner",
    cta: "View procurement thread →",
  },
];

const upcoming = [
  { name: "Pour L13 slab", crew: "Crew B · 8 · concrete", days: [1, 1, 0, 0, 0, 0, 0] },
  {
    name: "MEP rough-in — Podium",
    crew: "Crew C · 6 · waiting RFI-124",
    days: [1, 1, 1, 0, 0, 0, 0],
    risk: true,
  },
  { name: "Rebar fixing — L15", crew: "Crew A · 12 · prereq L14 done", days: [0, 0, 1, 1, 1, 0, 0] },
  { name: "Formwork strike — L13", crew: "Crew D · 4", days: [0, 0, 0, 0, 1, 0, 0] },
  { name: "Façade dry-fit — Tower B", crew: "Crew E · 5 · materials confirmed", days: [0, 0, 0, 0, 0, 1, 1] },
  { name: "Pour prep L14", crew: "Crew B · 8", days: [0, 0, 0, 0, 0, 0, 1] },
  { name: "Inspection · L13 slab", crew: "Consultant · half-day", days: [0, 0, 1, 0, 0, 0, 0], milestone: true },
];

const dayLabels = [
  { d: "Wed", n: "24" },
  { d: "Thu", n: "25" },
  { d: "Fri", n: "26" },
  { d: "Sat", n: "27" },
  { d: "Sun", n: "28" },
  { d: "Mon", n: "29" },
  { d: "Tue", n: "30" },
];

function statusPill(status: string) {
  return (
    <span
      className={
        status === "Blocked"
          ? "rounded-full border border-neutral-900 bg-neutral-900 px-2 py-0.5 text-xs text-white"
          : "rounded-full border border-neutral-300 px-2 py-0.5 text-xs text-neutral-700"
      }
    >
      {status}
    </span>
  );
}

export function SkeletonContractorView() {
  return (
    <>
      <SkeletonMetricGrid metrics={metrics} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <section className="rounded-md border border-neutral-300 bg-white lg:col-span-2">
          <header className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
            <h2 className="text-base font-semibold">Today&apos;s plan · Tue 24 Apr</h2>
          </header>
          <ul className="divide-y divide-neutral-200">
            {todayPlan.map((row) => (
              <li key={row.title} className="px-5 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{row.title}</p>
                    <p className="text-xs text-neutral-500">{row.crew}</p>
                  </div>
                  {statusPill(row.status)}
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div
                    className={
                      row.status === "Blocked"
                        ? "h-full bg-neutral-900"
                        : "h-full bg-neutral-700"
                    }
                    style={{ width: `${row.progress}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-md border border-neutral-300 bg-white">
          <header className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
            <h2 className="text-base font-semibold">Blockers · escalate</h2>
          </header>
          <ul className="divide-y divide-neutral-200">
            {blockers.map((b) => (
              <li key={b.title} className="px-5 py-4">
                <p className="text-sm font-semibold">⚠ {b.title}</p>
                <p className="mt-1 text-xs text-neutral-600">{b.body}</p>
                <span className="mt-3 inline-block rounded-md border border-neutral-900 bg-neutral-900 px-3 py-1 text-xs text-white">
                  {b.cta}
                </span>
              </li>
            ))}
          </ul>
          <div className="border-t border-neutral-200 px-5 py-4">
            <p className="text-[10px] uppercase tracking-widest text-neutral-500">
              Daily Report
            </p>
            <span className="mt-3 inline-block rounded-md border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-700">
              ◉ Add photos · voice note
            </span>
          </div>
        </section>
      </div>

      <section className="rounded-md border border-neutral-300 bg-white">
        <header className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <div>
            <h2 className="text-base font-semibold">Upcoming works</h2>
            <p className="text-xs text-neutral-500">
              Next 7 days · 14 activities · 3 awaiting prerequisites
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="rounded-full border border-neutral-900 bg-neutral-900 px-2 py-0.5 text-white">
              Week
            </span>
            <span className="rounded-full border border-neutral-300 px-2 py-0.5 text-neutral-700">
              2 weeks
            </span>
            <span className="rounded-full border border-neutral-300 px-2 py-0.5 text-neutral-700">
              Month
            </span>
          </div>
        </header>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="text-[10px] uppercase tracking-widest text-neutral-500">
              <tr className="border-b border-neutral-200">
                <th className="px-5 py-3">Activity</th>
                {dayLabels.map((d) => (
                  <th key={d.n} className="px-2 py-3 text-center">
                    {d.d}
                    <br />
                    {d.n}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {upcoming.map((row) => (
                <tr key={row.name}>
                  <td className="px-5 py-3 align-top">
                    <p
                      className={
                        row.risk
                          ? "text-sm font-medium text-neutral-900"
                          : "text-sm font-medium"
                      }
                    >
                      {row.name}
                    </p>
                    <p className="text-[10px] text-neutral-500">{row.crew}</p>
                  </td>
                  {row.days.map((on, i) => (
                    <td key={i} className="px-2 py-3">
                      {on ? (
                        <div
                          className={
                            row.milestone
                              ? "mx-auto h-3 w-3 rotate-45 border border-neutral-900 bg-white"
                              : row.risk
                              ? "h-3 w-full rounded border border-neutral-400 bg-neutral-200"
                              : "h-3 w-full rounded bg-neutral-800"
                          }
                          aria-hidden
                        />
                      ) : (
                        <div className="h-3" aria-hidden />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap gap-4 border-t border-neutral-200 px-5 py-3 text-[10px] uppercase tracking-widest text-neutral-500">
          <span>■ Planned</span>
          <span>□ Blocked / at risk</span>
          <span>◆ Inspection / milestone</span>
        </div>
      </section>
    </>
  );
}
