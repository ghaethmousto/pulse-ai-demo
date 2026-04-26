const cards = [
  {
    tag: "Pulse Vision",
    body: "Pulse Vision — upcoming. 24/7 computer vision on every site...",
    cta: "Get early access to Pulse Vision →",
  },
  {
    tag: "ORA Developers",
    body: "ORA Developers recently doubled its land bank in Bayn...",
    cta: "Read ORA Developers's story →",
  },
  {
    tag: "Emaar Group",
    body: "Emaar rolled Pulse across 14 projects in 9 months — one...",
    cta: "Read Emaar Group's story →",
  },
  {
    tag: "Aldar",
    body: "Aldar reconciled three capital projects against one shared decision ledger.",
    cta: "Read Aldar's story →",
  },
];

export function SkeletonProof() {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              Proof
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-neutral-900 sm:text-4xl">
              Teams ship projects on Pulse.
            </h2>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <article
              key={c.tag}
              className="flex flex-col rounded-md border border-neutral-300 bg-white"
            >
              <div className="flex aspect-[4/5] items-end rounded-t-md border-b border-neutral-200 bg-neutral-100 p-4">
                <span className="rounded-md bg-white/80 px-2 py-1 text-xs font-medium text-neutral-800">
                  ◼ {c.tag}
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm text-neutral-600">{c.body}</p>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-medium text-neutral-900 underline-offset-4 hover:underline"
                >
                  {c.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
