import Link from "next/link";
import { SkeletonFooter } from "@/components/skeleton/product/SkeletonFooter";
import { SkeletonHeader } from "@/components/skeleton/product/SkeletonHeader";
import { SkeletonTrustedLogos } from "@/components/skeleton/product/SkeletonTrustedLogos";

const platformLayers = [
  {
    n: "01",
    title: "Document Graph",
    body: "Drawings, specs, contracts, submittals - connected by project context, not folder paths.",
    visual: "[ drawings -> specs -> contracts ]",
  },
  {
    n: "02",
    title: "Decision Ledger",
    body: "Every decision captured with owner, rationale, and downstream impact.",
    visual: "[ D-041 approved | D-040 selected | D-039 resequenced ]",
  },
  {
    n: "03",
    title: "Schedule Intelligence",
    body: "Pulse reconciles master schedule with daily field reports and root-cause analysis.",
    visual: "[ baseline ____ actual __/--\\__ ]",
  },
  {
    n: "04",
    title: "Risk Radar",
    body: "AI reads drawings, comms, and schedule to flag risk before impact.",
    visual: "[ risk radar | 4 high | 12 watched ]",
  },
  {
    n: "05",
    title: "RFI & Submittals",
    body: "Purpose-built review workflows with SLAs and escalation baked in.",
    visual: "[ RFI-124 | SB-088 | overdue -> route ]",
  },
  {
    n: "06",
    title: "Ask Pulse",
    body: "Natural-language interface to the project. Answers cite the source every time.",
    visual: "[ Why did concrete pour slip? ]",
  },
];

const solutionSections = [
  {
    tag: "01 - Owner",
    title: "Hand the board a defensible report in 5 minutes.",
    body: "Pulse turns a project of scattered signals into an executive brief - status, risk, cashflow, and decisions with source trails.",
    cta: "Read the owner playbook ->",
    visualTitle: "Monday brief - 03",
    chips: ["Decision ledger", "Portfolio KPIs", "Risk radar", "Ask Pulse"],
  },
  {
    tag: "02 - Consultant",
    title: "Cut RFI cycle from 14 days to 4.",
    body: "Pulse drafts the response map, finds precedent, routes for sign-off, and tracks SLA risk by discipline.",
    cta: "Read the consultant playbook ->",
    visualTitle: "RFI cycle - last 30 days",
    chips: ["RFI dashboard", "Document graph", "Submittal intelligence"],
  },
  {
    tag: "03 - Contractor",
    title: "See the slip three weeks before it happens.",
    body: "Pulse reconciles material procurement with daily field reports, weather, deliveries, and crew availability.",
    cta: "Read the contractor playbook ->",
    visualTitle: "Tower B - pour 4-7",
    chips: ["Schedule intelligence", "Daily report", "Mobile field app"],
  },
];

const customerStories = [
  {
    company: "Emaar",
    title: "Cut board-pack prep from 18h to 90min across 14 active projects.",
    metric: "-92%",
  },
  {
    company: "Aldar",
    title: "Caught a 4-week schedule slip before it hit procurement.",
    metric: "23d",
  },
  {
    company: "ORA",
    title: "Closed 312 RFIs with full audit trail and zero contract disputes.",
    metric: "0",
  },
];

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 text-neutral-950">
      <SkeletonHeader />
      <main className="flex-1">{children}</main>
      <SkeletonFooter />
    </div>
  );
}

function LogoStrip() {
  return (
    <SkeletonTrustedLogos />
  );
}

function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-md bg-neutral-950 px-6 py-8 text-white">
        <p className="text-[10px] uppercase tracking-[0.24em] text-neutral-400">
          Become the next story
        </p>
        <div className="mt-2 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <h2 className="text-2xl font-semibold">
            Book a 30-min walkthrough on your project.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/skeleton/contact"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-950"
            >
              Request Demo
            </Link>
            <Link
              href="/skeleton/contact"
              className="rounded-md border border-neutral-700 px-4 py-2 text-sm font-medium text-white"
            >
              Talk to founder
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureVisual({ label }: { label: string }) {
  return (
    <div className="mt-5 flex h-36 items-center justify-center rounded border border-dashed border-neutral-300 bg-neutral-50 text-xs text-neutral-500">
      {label}
    </div>
  );
}

export function SkeletonResourcesPage() {
  return (
    <PageShell>
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-[10px] uppercase tracking-[0.24em] text-neutral-500">
            The platform
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            Every layer of the project, reconciled.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-neutral-600">
            Pulse is built as six deeply connected surfaces. Each one becomes
            more valuable because of the others.
          </p>
        </div>
      </section>

      <LogoStrip />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {platformLayers.map((layer) => (
            <article
              key={layer.title}
              className="rounded-md border border-neutral-300 bg-white p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500">
                  {layer.n}
                </span>
                <span className="rounded-full border border-neutral-300 px-2 py-0.5 text-[10px]">
                  Feature
                </span>
              </div>
              <h2 className="mt-4 text-xl font-semibold">{layer.title}</h2>
              <p className="mt-2 text-sm text-neutral-600">{layer.body}</p>
              <FeatureVisual label={layer.visual} />
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-[10px] uppercase tracking-[0.24em] text-neutral-500">
          How roles use Pulse
        </p>
        <h2 className="mt-3 text-3xl font-semibold">
          The same surfaces, three different jobs.
        </h2>
        <div className="mt-8 overflow-hidden rounded-md border border-neutral-300 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-neutral-300 text-[10px] uppercase tracking-widest text-neutral-500">
              <tr>
                <th className="px-4 py-3">Surface</th>
                <th className="px-4 py-3">Owner</th>
                <th className="px-4 py-3">Consultant</th>
                <th className="px-4 py-3">Contractor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-xs text-neutral-700">
              {platformLayers.slice(0, 6).map((layer) => (
                <tr key={layer.title}>
                  <td className="px-4 py-3 font-medium text-neutral-950">
                    {layer.title}
                  </td>
                  <td className="px-4 py-3">Search and audit</td>
                  <td className="px-4 py-3">Review and route</td>
                  <td className="px-4 py-3">Act by task</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}

export function SkeletonSolutionsPage() {
  return (
    <PageShell>
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-[10px] uppercase tracking-[0.24em] text-neutral-500">
            Solutions by role
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            Pick your job. We&apos;ve already mapped the work.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-neutral-600">
            The same source, three different jobs. Pick the one that wakes you
            up at 2am.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
            {["01 Owner", "02 Consultant", "03 Contractor"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-neutral-300 px-3 py-1"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 overflow-hidden rounded-md border border-neutral-300 bg-white md:grid-cols-3">
          {[
            ["Owner outcome", "12hrs", "reporting prep saved monthly"],
            ["Consultant outcome", "-71%", "median RFI turnaround"],
            ["Contractor outcome", "+19d", "avg. early warning lead time"],
          ].map(([label, value, caption]) => (
            <div key={label} className="border-neutral-200 p-6 md:border-r">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                {label}
              </p>
              <p className="mt-2 text-4xl font-semibold">{value}</p>
              <p className="mt-1 text-xs text-neutral-500">{caption}</p>
            </div>
          ))}
        </div>
      </section>

      {solutionSections.map((section) => (
        <section key={section.tag} className="border-t border-neutral-200">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#8d1f33]">
                {section.tag}
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                {section.title}
              </h2>
              <p className="mt-5 max-w-xl text-sm text-neutral-600">
                {section.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {section.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-neutral-300 px-2 py-1 text-[10px]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/skeleton/contact"
                  className="rounded-md bg-neutral-950 px-4 py-2 text-sm font-medium text-white"
                >
                  {section.cta}
                </Link>
                <Link
                  href="/skeleton/contact"
                  className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium"
                >
                  Book demo
                </Link>
              </div>
            </div>
            <div className="rounded-md border border-neutral-300 bg-white p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">{section.visualTitle}</h3>
                <span className="rounded-full border border-neutral-300 px-2 py-0.5 text-[10px]">
                  Live view
                </span>
              </div>
              <FeatureVisual label="[ project signal preview ]" />
              <div className="mt-4 flex flex-wrap gap-2">
                {section.chips.slice(0, 2).map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-neutral-100 px-2 py-1 text-[10px]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-[10px] uppercase tracking-[0.24em] text-neutral-500">
          Why it matters
        </p>
        <h2 className="mt-3 text-3xl font-semibold">
          Three lenses on the same project.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {["Owner sees defensible status.", "Consultant sees review flow.", "Contractor sees blockers and crews."].map((text) => (
            <div key={text} className="rounded-md border border-dashed border-neutral-300 bg-white p-5 text-sm">
              {text}
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}

export function SkeletonCustomersPage() {
  return (
    <PageShell>
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-[10px] uppercase tracking-[0.24em] text-neutral-500">
            Customers
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
            The teams shipping at the front of the region.
          </h1>
          <p className="mt-5 max-w-2xl text-sm text-neutral-600">
            Pulse runs on UAE construction projects where delay, auditability,
            and decisions matter every day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <article className="grid grid-cols-1 overflow-hidden rounded-md border border-neutral-300 bg-white lg:grid-cols-[1.4fr_1fr]">
          <div className="p-8">
            <p className="text-[10px] uppercase tracking-[0.24em] text-neutral-500">
              Featured - 04 / 2026
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold">
              How Emaar&apos;s owner team replaced Sunday-night reporting with a
              06:00 brief.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-neutral-600">
              Across active towers, project directors stopped chasing
              consultants for status. Pulse drafts the brief, sources every
              figure, and waits in their inbox before coffee.
            </p>
            <Link
              href="/skeleton/contact"
              className="mt-6 inline-block rounded-md bg-[#7b1022] px-4 py-2 text-sm font-medium text-white"
            >
              Read the case study &rarr;
            </Link>
          </div>
          <div className="border-t border-neutral-300 bg-neutral-100 p-8 lg:border-l lg:border-t-0">
            <p className="text-[10px] uppercase tracking-widest text-neutral-500">
              Outcome
            </p>
            <div className="mt-6 grid grid-cols-2 gap-5">
              {[
                ["-92%", "reporting prep"],
                ["18+1.5h", "monthly board pack"],
                ["14", "projects live"],
                ["0", "disputes tied"],
              ].map(([value, label]) => (
                <div key={value}>
                  <p className="text-3xl font-semibold">{value}</p>
                  <p className="mt-1 text-xs text-neutral-500">{label}</p>
                </div>
              ))}
            </div>
            <blockquote className="mt-8 text-sm italic text-neutral-700">
              &quot;We replaced four spreadsheets, a status email, and one Sunday
              call. The board now reads our pack like a newsroom.&quot;
            </blockquote>
          </div>
        </article>
      </section>

      <LogoStrip />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-[10px] uppercase tracking-[0.24em] text-neutral-500">
          More stories
        </p>
        <h2 className="mt-3 text-3xl font-semibold">
          Outcomes, not testimonials.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {customerStories.map((story) => (
            <article
              key={story.company}
              className="rounded-md border border-neutral-300 bg-white"
            >
              <FeatureVisual label="[ story image ]" />
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                  {story.company}
                </p>
                <h3 className="mt-2 text-sm font-semibold">{story.title}</h3>
                <p className="mt-5 text-2xl font-semibold text-[#7b1022]">
                  {story.metric}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-2 overflow-hidden rounded-md border border-neutral-300 bg-white md:grid-cols-4">
          {[
            ["84", "projects live"],
            ["14B", "AED in scope"],
            ["6,200", "daily active users"],
            ["312k", "decisions logged"],
          ].map(([value, label]) => (
            <div key={value} className="border-neutral-200 p-6 md:border-r">
              <p className="text-3xl font-semibold">{value}</p>
              <p className="mt-1 text-xs text-neutral-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-[10px] uppercase tracking-[0.24em] text-neutral-500">
          In their words
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            "Pulse is the first tool that gives me a board pack I can actually defend.",
            "My team stopped writing the same RFI response three times.",
            "It surfaces the risk before the site feels it.",
          ].map((quote) => (
            <blockquote
              key={quote}
              className="rounded-md border border-dashed border-neutral-300 bg-white p-6 text-sm text-neutral-700"
            >
              &quot;{quote}&quot;
            </blockquote>
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}

export function SkeletonContactPage() {
  return (
    <PageShell>
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-[1fr_440px]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-neutral-500">
              Request Demo
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
              Walk through Pulse on a real project shape.
            </h1>
            <p className="mt-5 max-w-2xl text-sm text-neutral-600">
              We will map your owner, consultant, and contractor workflows into
              a focused 30-minute walkthrough.
            </p>
            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 text-sm md:grid-cols-3">
              {[
                "demo@pulse-ai.com",
                "+971 50 381 6979",
                "Dubai · Abu Dhabi · Riyadh",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-neutral-300 bg-neutral-50 p-4"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-neutral-300 bg-neutral-50 p-6">
            <p className="text-[10px] uppercase tracking-[0.24em] text-neutral-500">
              Demo request
            </p>
            <div className="mt-5 space-y-3">
              {[
                "Name",
                "Work email",
                "Company",
                "Role",
                "Project size",
              ].map((field) => (
                <div
                  key={field}
                  className="rounded-md border border-dashed border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-500"
                >
                  {field}
                </div>
              ))}
              <div className="h-28 rounded-md border border-dashed border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-500">
                What should Pulse show you?
              </div>
            </div>
            <Link
              href="mailto:demo@pulse-ai.com"
              className="mt-5 block rounded-md bg-neutral-950 px-4 py-3 text-center text-sm font-medium text-white"
            >
              Request demo by email
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            ["For owners", "Board reporting, decisions, risk and budget."],
            ["For consultants", "RFI flow, submittals, document graph and SLA."],
            ["For contractors", "Daily plan, blockers, photos and escalation."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-md border border-neutral-300 bg-white p-6">
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-neutral-600">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
