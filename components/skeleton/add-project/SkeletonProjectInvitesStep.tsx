import { SkeletonStepBody } from "./SkeletonStepBody";

const counterparts = [
  {
    role: "Consultant (Lead)",
    org: "Arup · r.iyer@arup.com",
  },
  {
    role: "Main Contractor",
    org: "Mace · m.khan@mace.com",
  },
];

export function SkeletonProjectInvitesStep() {
  const left = (
    <div className="space-y-5">
        <label className="block">
          <span className="text-[10px] uppercase tracking-widest text-neutral-500">
            Project name
          </span>
          <span className="mt-1 block rounded-md border border-dashed border-neutral-300 bg-neutral-50 px-3 py-2 text-sm font-mono text-neutral-700">
            Marina Tower Phase 2|
          </span>
        </label>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500">
              Contract value
            </span>
            <span className="mt-1 block rounded-md border border-dashed border-neutral-300 bg-neutral-50 px-3 py-2 text-sm font-mono text-neutral-700">
              847,000,000 AED
            </span>
          </label>
          <label className="block">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500">
              Duration
            </span>
            <span className="mt-1 block rounded-md border border-dashed border-neutral-300 bg-neutral-50 px-3 py-2 text-sm font-mono text-neutral-700">
              28 months
            </span>
          </label>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-widest text-neutral-500">
            Invite counterparts
          </p>
          <ul className="mt-2 divide-y divide-neutral-200 rounded-md border border-neutral-300 bg-white">
            {counterparts.map((c) => (
              <li
                key={c.role}
                className="flex items-center gap-3 px-4 py-3"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-xs">
                  ◯
                </span>
                <div>
                  <p className="text-sm font-semibold">{c.role}</p>
                  <p className="text-xs font-mono text-neutral-500">{c.org}</p>
                </div>
              </li>
            ))}
            <li className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-700">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-xs">
                +
              </span>
              + Add stakeholder
            </li>
          </ul>
        </div>
      </div>
  );

  const rail = (
    <div className="rounded-md border border-neutral-300 bg-neutral-50 p-5 lg:mt-[12px] lg:h-[430px]">
      <p className="text-[10px] uppercase tracking-widest text-neutral-500">
        Why invite now?
      </p>
      <p className="mt-3 text-sm text-neutral-700">
        Pulse only delivers a single source of truth when every party sees the
        same project. Your counterparts get their own portal — they don&apos;t
        have to use your view.
      </p>
      <p className="mt-4 text-xs italic text-neutral-500">
        ↳ each party owns their lens, shares one truth
      </p>
    </div>
  );

  return <SkeletonStepBody left={left} rail={rail} />;
}
