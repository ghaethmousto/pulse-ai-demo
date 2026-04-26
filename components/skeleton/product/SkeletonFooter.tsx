const columns = [
  {
    heading: "Platform",
    links: ["Overview", "Owner", "Consultant", "Contractor"],
  },
  {
    heading: "Resources",
    links: ["Docs", "Changelog", "Case studies", "Security"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Press", "Legal"],
  },
];

const contact = [
  "demo@pulse-ai.com",
  "+971 50 381 6979",
  "Dubai · Abu Dhabi · Riyadh",
];

export function SkeletonFooter() {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-sm border border-neutral-600" />
              <span className="text-sm font-semibold text-white">Pulse AI</span>
            </div>
            <p className="mt-4 max-w-xs text-xs text-neutral-400">
              The operational truth layer for construction. Connecting Owners,
              Consultants, and Contractors around a single reliable reality.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold text-white">{col.heading}</p>
              <ul className="mt-3 space-y-2 text-xs text-neutral-400">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-xs font-semibold text-white">Contact</p>
            <ul className="mt-3 space-y-2 text-xs text-neutral-400">
              {contact.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-neutral-800 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center">
          <span>Designed and Built By: Ghaeth M Mousto</span>
          <span>© 2026 Pulse AI. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
