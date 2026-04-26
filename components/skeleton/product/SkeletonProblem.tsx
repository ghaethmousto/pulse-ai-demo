const problems = [
  {
    n: "1",
    title: "Fragmented Reality",
    body: "Each company maintains its own files, statuses, and numbers.",
  },
  {
    n: "2",
    title: "Invisible Risk",
    body: "Critical decisions get buried in emails and meeting notes.",
  },
  {
    n: "3",
    title: "Costly Rework",
    body: "By the time misalignment surfaces, budget and schedule are gone.",
  },
];

export function SkeletonProblem() {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          The Problem
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
          Every stakeholder works from a different version of the truth.
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-neutral-600">
          Drawings in one drive. Decisions in an inbox. Tasks in a spreadsheet.
          Risks in a slide deck. Multiplied across 3 companies — chaos is
          inevitable.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.n}
              className="rounded-md border border-neutral-300 bg-white p-6"
            >
              <div className="mb-6 flex h-7 w-7 items-center justify-center rounded-md border border-neutral-300 text-xs text-neutral-600">
                {p.n}
              </div>
              <h3 className="text-base font-semibold text-neutral-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
