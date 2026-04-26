type ToolStatus = "connected" | "connect";

interface Tool {
  short: string;
  name: string;
  caption: string;
  status: ToolStatus;
}

const projectTools: Tool[] = [
  { short: "AC", name: "Autodesk Constr…", caption: "Drawings · models · s…", status: "connected" },
  { short: "PC", name: "Procore", caption: "RFIs · daily logs · mee…", status: "connected" },
  { short: "P6", name: "Primavera P6", caption: "Schedule · baseline", status: "connected" },
  { short: "AX", name: "Aconex", caption: "Comms · tra…", status: "connect" },
  { short: "SP", name: "SharePoint", caption: "Legacy files…", status: "connect" },
  { short: "SA", name: "SAP", caption: "Cost · procu…", status: "connect" },
];

const commsTools: Tool[] = [
  { short: "OL", name: "Outlook / …", caption: "Project mail…", status: "connect" },
  { short: "TM", name: "Microsoft…", caption: "Channels · …", status: "connect" },
  { short: "WA", name: "WhatsAp…", caption: "Field comm…", status: "connect" },
];

const contractFiles = [
  { name: "Conditions of contract.pdf", size: "2.1 MB", status: "parsing" },
  { name: "Particular conditions.pdf", size: "892 KB", status: "parsed" },
  { name: "BOQ — signed.xlsx", size: "4.4 MB", status: "parsed" },
];

const permissions = [
  { label: "Read", desc: "Drawings, RFIs, schedules, mail, files", on: true },
  { label: "Mirror", desc: "Pulse keeps a synced copy in your tenant", on: true },
  { label: "Write back", desc: "Off — you turn this on per-tool when ready", on: false },
  { label: "Train models", desc: "Off — your data is never used to train others", on: false },
];

const seenStats = [
  { value: "3,482", label: "documents indexed" },
  { value: "142", label: "open RFIs · 9 over 30 days" },
  { value: "28 mo", label: "schedule · 4 critical-path tasks slipping" },
  { value: "847M AED", label: "contract value · 38% drawn" },
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-neutral-300 bg-white p-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 bg-neutral-50 text-xs font-mono">
        {tool.short}
      </span>
      <div className="flex-1">
        <p className="text-sm font-semibold leading-tight">{tool.name}</p>
        <p className="text-[10px] text-neutral-500">{tool.caption}</p>
      </div>
      {tool.status === "connected" ? (
        <span
          className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 text-[10px] text-white"
          aria-label="Connected"
        >
          ✓
        </span>
      ) : (
        <span className="rounded-md border border-neutral-300 bg-white px-2 py-1 text-[10px] text-neutral-700">
          Connect →
        </span>
      )}
    </div>
  );
}

export function SkeletonConnectToolsStep() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-8">
        <p className="text-sm text-neutral-600">
          No migration. No new logins for your team. Pulse reads from where work
          already lives.
        </p>

        <section>
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-widest text-neutral-500">
              Project tools
            </p>
            <span className="text-[10px] text-neutral-500">3 of 6 connected</span>
          </div>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projectTools.map((t) => (
              <ToolCard key={t.short} tool={t} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-widest text-neutral-500">
              Communication
            </p>
            <span className="text-[10px] text-neutral-500">0 of 3 connected</span>
          </div>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {commsTools.map((t) => (
              <ToolCard key={t.short} tool={t} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-widest text-neutral-500">
              Contract pack
            </p>
            <span className="text-[10px] text-neutral-500">
              FIDIC · NEC · bespoke — Pulse will figure it out
            </span>
          </div>
          <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-[1fr_280px]">
            <div className="rounded-md border border-dashed border-neutral-300 bg-white p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 bg-neutral-50 text-xs">
                  ↑
                </span>
                <div>
                  <p className="text-sm font-semibold">Drop the contract here</p>
                  <p className="text-[10px] text-neutral-500">
                    PDFs, Word, scans, ZIPs · we&apos;ll do the OCR
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {contractFiles.map((f) => (
                  <li
                    key={f.name}
                    className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-mono"
                  >
                    <span className="text-neutral-700">{f.name}</span>
                    <span className="flex items-center gap-3 text-neutral-500">
                      <span>{f.size}</span>
                      <span
                        className={
                          f.status === "parsing"
                            ? "text-neutral-700"
                            : "text-neutral-500"
                        }
                      >
                        {f.status === "parsing" ? "· parsing" : "✓ parsed"}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-md border border-neutral-300 bg-neutral-50 p-4">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                What Pulse extracts
              </p>
              <ul className="mt-3 space-y-2 text-xs text-neutral-700">
                <li>· Variation &amp; EOT clauses → routed to decision ledger</li>
                <li>· Liquidated damages curves → fed to risk model</li>
                <li>· Notice periods → calendared with reminders</li>
                <li>· Payment milestones → linked to schedule</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <aside className="space-y-4">
        <div className="rounded-md border border-neutral-300 bg-white p-4">
          <p className="text-[10px] uppercase tracking-widest text-neutral-500">
            Permissions, by default
          </p>
          <ul className="mt-3 space-y-3">
            {permissions.map((p) => (
              <li key={p.label} className="flex items-start gap-3">
                <span className="min-w-[80px] text-xs font-semibold">
                  {p.label}
                </span>
                <span className="flex-1 text-xs text-neutral-600">{p.desc}</span>
                <span
                  className={
                    p.on
                      ? "flex h-4 w-7 items-center justify-end rounded-full bg-neutral-900 px-0.5"
                      : "flex h-4 w-7 items-center justify-start rounded-full bg-neutral-200 px-0.5"
                  }
                  aria-label={p.on ? "On" : "Off"}
                >
                  <span className="h-3 w-3 rounded-full bg-white" />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md border border-neutral-300 bg-white p-4">
          <p className="text-[10px] uppercase tracking-widest text-neutral-500">
            From what&apos;s connected, Pulse already sees
          </p>
          <ul className="mt-3 space-y-2">
            {seenStats.map((s) => (
              <li
                key={s.value}
                className="flex items-baseline justify-between gap-3 text-xs"
              >
                <span className="font-mono text-sm text-neutral-900">
                  {s.value}
                </span>
                <span className="text-right text-neutral-600">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md border border-dashed border-neutral-300 bg-white p-4">
          <p className="text-[10px] uppercase tracking-widest text-neutral-500">
            Don&apos;t see your tool?
          </p>
          <p className="mt-2 text-xs text-neutral-600">
            We support 40+ systems and add new ones every month.{" "}
            <span className="underline">Request an integration</span> or use
            email-in.
          </p>
        </div>
      </aside>
    </div>
  );
}
