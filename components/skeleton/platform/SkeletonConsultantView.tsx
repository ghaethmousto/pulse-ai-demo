import { SkeletonMetricGrid } from "@/components/skeleton/platform/SkeletonMetricCard";

const metrics = [
  { label: "Open RFIs", value: "12", caption: "4 overdue" },
  { label: "Submittals", value: "23", caption: "6 pending review" },
  { label: "Disciplines", value: "7", caption: "coordinating" },
  { label: "Compliance", value: "98%", caption: "current" },
  { label: "Reviews Due", value: "8", caption: "this week" },
];

const rfiQueue = [
  {
    id: "RFI-124",
    subject: "Rebar detailing clash · Tower B L14",
    discipline: "Structural",
    status: "Open",
    age: "11d",
  },
  {
    id: "RFI-125",
    subject: "Waterproofing spec · Podium",
    discipline: "Arch",
    status: "Draft",
    age: "2d",
  },
  {
    id: "RFI-123",
    subject: "MEP coordination · Plant room",
    discipline: "MEP",
    status: "Review",
    age: "6d",
  },
  {
    id: "RFI-122",
    subject: "Façade bracket tolerance",
    discipline: "Façade",
    status: "Answered",
    age: "3d",
  },
  {
    id: "RFI-121",
    subject: "Curtain wall glazing type",
    discipline: "Façade",
    status: "Open",
    age: "8d",
  },
];

const notes = [
  {
    author: "R. Iyer",
    chip: "Structural",
    when: "today · 10:24",
    body: "Confirmed with detailer that L14 rebar lap lengths follow ACI 318-19. Updating sheet S-214 before sending RFI-124 response.",
    refs: ["RFI-124", "S-214"],
  },
  {
    author: "A. Hossain",
    chip: "Façade",
    when: "today · 09:02",
    body: "Bracket tolerance answer pending mock-up review on Thursday. Holding RFI-122 close-out until then.",
    refs: ["RFI-122"],
  },
  {
    author: "D. Patel",
    chip: "MEP",
    when: "yesterday",
    body: "Plant room coordination meeting moved to Wed 14:00. Need updated combined services drawing one day prior.",
    refs: ["RFI-123"],
  },
];

const tasks = [
  {
    title: "Issue RFI-124 response · L14 rebar",
    meta: "RFI-124 · overdue · due Today",
    status: "open",
  },
  {
    title: "Review submittal SB-088 — waterproofing",
    meta: "SB-888 · due Today",
    status: "open",
  },
  {
    title: "Confirm bracket mock-up walk",
    meta: "RFI-122 · due Thu",
    status: "open",
  },
  {
    title: "Sign off on combined services drawing",
    meta: "RFI-123 · due Wed",
    status: "open",
  },
  {
    title: "Close out RFI-118 · podium drainage",
    meta: "RFI-118 · due —",
    status: "done",
  },
];

export function SkeletonConsultantView() {
  return (
    <>
      <SkeletonMetricGrid metrics={metrics} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <section className="rounded-md border border-neutral-300 bg-white lg:col-span-2">
          <header className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
            <h2 className="text-base font-semibold">RFI Queue</h2>
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-full border border-neutral-300 px-2 py-0.5 text-neutral-700">
                All
              </span>
              <span className="rounded-full border border-neutral-900 bg-neutral-900 px-2 py-0.5 text-white">
                Assigned to me
              </span>
              <span className="rounded-full border border-neutral-300 px-2 py-0.5 text-neutral-700">
                Overdue
              </span>
            </div>
          </header>
          <table className="w-full text-left text-xs">
            <thead className="text-[10px] uppercase tracking-widest text-neutral-500">
              <tr className="border-b border-neutral-200">
                <th className="px-5 py-3">ID</th>
                <th className="px-5 py-3">Subject</th>
                <th className="px-5 py-3">Discipline</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Age</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-neutral-700">
              {rfiQueue.map((r) => (
                <tr key={r.id}>
                  <td className="px-5 py-3 font-mono text-neutral-500">
                    {r.id}
                  </td>
                  <td className="px-5 py-3">{r.subject}</td>
                  <td className="px-5 py-3">{r.discipline}</td>
                  <td className="px-5 py-3">
                    <span className="rounded-full border border-neutral-300 px-2 py-0.5">
                      {r.status}
                    </span>
                  </td>
                  <td className="px-5 py-3">{r.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="rounded-md border border-neutral-300 bg-white">
          <header className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
            <h2 className="text-base font-semibold">Multi-discipline coordination</h2>
          </header>
          <div className="p-5">
            <div className="flex h-44 items-center justify-center rounded border border-dashed border-neutral-300 bg-neutral-50 text-xs text-neutral-500">
              [ discipline matrix · clashes ]
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              4 clashes detected · 2 resolved this week
            </p>
            <div className="mt-4 rounded-md border border-neutral-200 bg-neutral-50 p-3">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                Pulse Suggests
              </p>
              <p className="mt-1 text-xs text-neutral-700">
                Group RFI-124 + RFI-121 into a single coordination review — both
                depend on the same rebar package.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <section className="rounded-md border border-neutral-300 bg-white lg:col-span-2">
          <header className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
            <h2 className="text-base font-semibold">Coordination notes</h2>
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-full border border-neutral-900 bg-neutral-900 px-2 py-0.5 text-white">
                Mine
              </span>
              <span className="rounded-full border border-neutral-300 px-2 py-0.5 text-neutral-700">
                Team
              </span>
              <span className="rounded-full border border-neutral-300 px-2 py-0.5 text-neutral-700">
                Pinned
              </span>
            </div>
          </header>
          <ul className="divide-y divide-neutral-200">
            {notes.map((n) => (
              <li key={n.author + n.when} className="px-5 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold">{n.author}</span>
                    <span className="rounded-full border border-neutral-300 px-2 py-0.5 text-xs text-neutral-700">
                      {n.chip}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500">{n.when}</span>
                </div>
                <p className="mt-2 text-sm text-neutral-700">{n.body}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-[10px] text-neutral-500">
                  {n.refs.map((r) => (
                    <span
                      key={r}
                      className="rounded border border-neutral-200 px-1.5 py-0.5"
                    >
                      ↳ {r}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t border-neutral-200 px-5 py-3">
            <div className="flex items-center justify-between rounded-md border border-dashed border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-500">
              Add a note · @mention to route...
              <span className="rounded-full border border-neutral-900 bg-neutral-900 px-3 py-1 text-white">
                Post
              </span>
            </div>
          </div>
        </section>

        <section className="rounded-md border border-neutral-300 bg-white">
          <header className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
            <h2 className="text-base font-semibold">My tasks</h2>
            <span className="text-xs text-neutral-500">11 open · 4 overdue</span>
          </header>
          <ul className="divide-y divide-neutral-200">
            {tasks.map((t) => (
              <li key={t.title} className="flex items-start gap-3 px-5 py-3">
                <span
                  className={
                    t.status === "done"
                      ? "mt-0.5 h-4 w-4 rounded border border-neutral-900 bg-neutral-900 text-[10px] text-white"
                      : "mt-0.5 h-4 w-4 rounded border border-neutral-300"
                  }
                  aria-hidden
                />
                <div>
                  <p
                    className={
                      t.status === "done"
                        ? "text-sm text-neutral-400 line-through"
                        : "text-sm text-neutral-900"
                    }
                  >
                    {t.title}
                  </p>
                  <p className="text-xs text-neutral-500">↳ {t.meta}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between border-t border-neutral-200 px-5 py-3 text-xs text-neutral-500">
            <span>+ Add task · ⌘N</span>
            <span>auto-link to RFI / SB</span>
          </div>
        </section>
      </div>
    </>
  );
}
