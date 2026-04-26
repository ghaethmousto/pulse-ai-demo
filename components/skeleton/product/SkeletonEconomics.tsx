const stats = [
  { value: "AED 150K", label: "Average delay cost", sub: "per day on large projects" },
  { value: "70 days", label: "Typical project delay", sub: "without operational truth" },
  { value: "30%", label: "Reduction with Pulse AI", sub: "through faster decisions" },
  { value: "AED 3.15M", label: "Saved per project", sub: "over the project lifecycle" },
];

export function SkeletonEconomics() {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          • The Economics
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
          Construction delays cost <span className="text-neutral-700">real money.</span>
          <br />
          Pulse AI saves it.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-600">
          Average delay cost on a large UAE construction project is AED 150,000
          per day. A typical 70-day delay translates to AED 10M+ in lost value.
          Pulse AI cuts that by 30%.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.value}
              className="rounded-md border border-neutral-300 bg-white p-6 text-left"
            >
              <p className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-3 text-xs text-neutral-700">{s.label}</p>
              <p className="text-xs text-neutral-500">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
