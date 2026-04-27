import { SkeletonStepBody } from "./SkeletonStepBody";

const roles = [
  {
    title: "Owner / Developer",
    quote:
      "I need to know which projects are slipping — and why — before they hit my desk.",
    chips: ["Portfolio dashboard", "Decision ledger", "Cashflow & EVM", "Risk radar"],
    selected: true,
  },
  {
    title: "Consultant / Designer",
    quote:
      "I coordinate RFIs, submittals, and design across disciplines without losing the thread.",
    chips: ["RFI cycle board", "Submittal log", "Coordination viewer", "Document graph"],
    selected: false,
  },
  {
    title: "Contractor / Builder",
    quote:
      "I execute on site and need clear, today-shaped priorities — not yesterday's status.",
    chips: ["Today on site", "Daily report", "Open blockers", "Schedule slip"],
    selected: false,
  },
];

const previewKpis = [
  { label: "On track", value: "52" },
  { label: "At risk", value: "18" },
  { label: "Slipping", value: "9" },
  { label: "Stalled", value: "5" },
];

export function SkeletonRoleStep() {
  const left = (
    <>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-neutral-500">
          I&apos;m primarily a…
        </p>
        <ul className="mt-3 space-y-3">
          {roles.map((r) => (
            <li
              key={r.title}
              className={
                r.selected
                  ? "rounded-md border-2 border-neutral-900 bg-white p-5"
                  : "rounded-md border border-neutral-300 bg-white p-5"
              }
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-xs">
                  ◯
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-base font-semibold">{r.title}</p>
                    {r.selected ? (
                      <span className="rounded-md border border-neutral-900 bg-neutral-900 px-2 py-0.5 text-[10px] uppercase tracking-widest text-white">
                        Selected
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm italic text-neutral-600">
                    “{r.quote}”
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {r.chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-neutral-300 bg-white px-2 py-0.5 text-xs text-neutral-700"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <span
                  className={
                    r.selected
                      ? "mt-1 h-4 w-4 rounded-full border-2 border-neutral-900 bg-neutral-900"
                      : "mt-1 h-4 w-4 rounded-full border border-neutral-300"
                  }
                  aria-hidden
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-3 text-xs text-neutral-500">
          <span className="h-px flex-1 bg-neutral-200" />
          OR
          <span className="h-px flex-1 bg-neutral-200" />
        </div>

        <div className="mt-4 flex flex-col items-stretch gap-3 rounded-md border border-neutral-300 bg-white p-4 sm:flex-row sm:items-center">
          <div className="flex-1">
            <p className="text-sm font-semibold">
              Were you invited to a project?
            </p>
            <p className="text-xs text-neutral-500">
              Skip setup. Open the invite link or paste a project code.
            </p>
          </div>
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <span className="rounded-md border border-dashed border-neutral-300 bg-neutral-50 px-3 py-2 text-xs font-mono uppercase text-neutral-500">
              project-code
            </span>
            <span className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-700">
              Join →
            </span>
          </div>
        </div>

        <div className="mt-3 flex flex-col items-stretch gap-3 rounded-md border border-neutral-300 bg-white p-4 sm:flex-row sm:items-center">
          <div className="flex-1">
            <p className="text-sm font-semibold">
              Migrating from another platform?
            </p>
            <p className="text-xs text-neutral-500">
              Pulse imports from Procore, Aconex, and BIM 360 — documents, RFIs, and schedule included.
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["Procore", "Aconex", "BIM 360", "Asta Powerproject"].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[10px] text-neutral-500"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <span className="shrink-0 rounded-md border border-neutral-900 bg-neutral-900 px-3 py-2 text-xs text-white">
            Import project →
          </span>
        </div>
      </div>
    </>
  );

  const rail = (
    <>
      <div className="rounded-md border border-neutral-300 bg-white lg:mt-[28px]">
        <header className="flex items-center justify-between border-b border-neutral-200 px-4 py-3 text-[10px] uppercase tracking-widest text-neutral-500">
          <span>Tuned for Owner</span>
            <span>preview · day 1</span>
          </header>
          <div className="border-b border-neutral-200 px-4 py-2 text-[10px] text-neutral-500">
            ●●● pulse.ai / your-first-view
          </div>
          <div className="p-4">
            <p className="text-sm font-semibold">Portfolio Health</p>
            <p className="text-xs text-neutral-500">
              This is what you&apos;ll land on after setup.
            </p>
            <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-neutral-500">
              <span>Portfolio · 84 projects</span>
              <span>14.2B AED</span>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {previewKpis.map((k) => (
                <div
                  key={k.label}
                  className="rounded border border-neutral-200 p-2"
                >
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                    {k.label}
                  </p>
                  <p className="mt-1 text-base font-semibold">{k.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex h-32 items-center justify-center rounded border border-dashed border-neutral-300 bg-neutral-50 text-[10px] text-neutral-500">
              [ earned value · actual vs plan ]
            </div>
            <p className="mt-3 text-[10px] text-neutral-500">
              · 9 decisions awaiting · 3 risks · cashflow forecast
            </p>
            <p className="mt-3 border-t border-neutral-200 pt-3 text-[10px] text-neutral-500">
              others on your team can pick a different role
            </p>
        </div>
      </div>

      <div className="rounded-md border border-dashed border-neutral-300 bg-white p-3">
        <p className="text-[10px] uppercase tracking-widest text-neutral-500">
          Up next
        </p>
        <p className="mt-1 text-xs text-neutral-700">
          Project basics → invite counterparts → connect tools → confirm.
        </p>
      </div>
      <div className="rounded-md border border-dashed border-neutral-300 bg-white p-3">
        <p className="text-[10px] uppercase tracking-widest text-neutral-500">
          Privacy
        </p>
        <p className="mt-1 text-xs text-neutral-700">
          Your data stays in your tenant. Role tunes views, not access.
        </p>
      </div>
    </>
  );

  return <SkeletonStepBody left={left} rail={rail} />;
}
