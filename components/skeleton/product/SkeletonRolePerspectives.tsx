const roles = [
  {
    title: "Owner",
    bullets: [
      "Executive dashboards",
      "Budget & schedule visibility",
      "Board-ready reporting",
      "Decision tracking",
    ],
    cta: "Enter Owner Portal →",
  },
  {
    title: "Consultant",
    bullets: [
      "RFIs & submittals",
      "Multi-discipline review",
      "Compliance & QA",
      "Design coordination",
    ],
    cta: "Enter Consultant Portal →",
  },
  {
    title: "Contractor",
    bullets: [
      "Daily task execution",
      "Field updates",
      "Blockers & dependencies",
      "Delivery tracking",
    ],
    cta: "Enter Contractor Portal →",
  },
];

export function SkeletonRolePerspectives() {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          For every role on the project
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Three perspectives. One reality.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 text-left md:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="flex flex-col rounded-md border border-neutral-300 bg-white p-6"
            >
              <div className="mb-6 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-xs text-neutral-600">
                ◯
              </div>
              <h3 className="text-base font-semibold text-neutral-900">
                {role.title}
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-neutral-600">
                {role.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-6 text-sm font-medium text-neutral-900 underline-offset-4 hover:underline"
              >
                {role.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
