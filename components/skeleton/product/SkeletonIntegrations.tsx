const tools = [
  "Procore",
  "Aconex",
  "Autodesk",
  "SAP",
  "Primavera",
  "Revit",
  "SharePoint",
  "Bluebeam",
  "Slack",
  "Teams",
  "PowerBI",
  "Outlook",
];

export function SkeletonIntegrations() {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          Integrations
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Works with the tools already on site.
        </h2>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-neutral-300 bg-white px-4 py-2 text-xs text-neutral-700"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
