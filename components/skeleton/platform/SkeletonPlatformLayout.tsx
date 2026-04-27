import type { ReactNode } from "react";
import Image from "next/image";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Brain,
  Calendar,
  Check,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  DollarSign,
  FileText,
  FolderKanban,
  LayoutGrid,
  MapPin,
  Settings,
  Shapes,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SkeletonPlatformHeader } from "@/components/skeleton/platform/SkeletonPlatformHeader";
import {
  SkeletonPlatformViewSwitcher,
  type SkeletonPlatformView,
} from "@/components/skeleton/platform/SkeletonPlatformViewSwitcher";

const sidebarGroups: {
  title: string;
  items: { label: string; icon: LucideIcon; badge?: string }[];
}[] = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", icon: LayoutGrid },
      { label: "Projects", icon: FolderKanban },
    ],
  },
  {
    title: "Monitor",
    items: [
      { label: "Project Pulse", icon: Activity },
      { label: "Timeline", icon: Calendar },
      { label: "Tasks", icon: ClipboardList },
      { label: "Approvals", icon: Check, badge: "2" },
    ],
  },
  {
    title: "Project Data",
    items: [
      { label: "Documents", icon: FileText, badge: "22" },
      { label: "Stakeholders", icon: Users },
      { label: "Meetings", icon: ClipboardCheck },
      { label: "Site", icon: MapPin },
    ],
  },
  {
    title: "Intelligence",
    items: [
      { label: "AI Insights", icon: Brain },
      { label: "Risks", icon: AlertTriangle, badge: "3" },
      { label: "Reports", icon: BarChart3 },
    ],
  },
  {
    title: "Business",
    items: [
      { label: "Financials", icon: DollarSign },
      { label: "Templates", icon: Shapes },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Team", icon: Users },
      { label: "Settings", icon: Settings },
    ],
  },
];

const portalLabelByView: Record<SkeletonPlatformView, string> = {
  "source-of-truth": "Platform Portal",
  consultant: "Consultant Portal",
  contractor: "Contractor Portal",
  owner: "Owner Portal",
};

interface SkeletonPlatformLayoutProps {
  view: SkeletonPlatformView;
  roleLabel: string;
  pageTitle: string;
  pageScribble?: string;
  userBadge?: { name: string; role: string };
  children: ReactNode;
}

export function SkeletonPlatformLayout({
  view,
  roleLabel,
  pageTitle,
  pageScribble,
  userBadge,
  children,
}: SkeletonPlatformLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-neutral-50 text-neutral-900">
      <SkeletonPlatformHeader />
      <SkeletonPlatformViewSwitcher active={view} />

      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 lg:grid-cols-[280px_1fr]">
        <aside className="flex flex-col border-r border-neutral-200 bg-[#fbf7f5]">
          <div className="flex items-center gap-3 border-b border-neutral-200 bg-white px-5 py-6">
            <Image
              src="/assets/pulse/Pulse%20-%20Red%20Rec%20Icon.svg"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10"
              aria-hidden
            />
            <span className="text-xl font-semibold text-neutral-950">Pulse AI</span>
          </div>

          <div className="flex-1 overflow-hidden px-4 py-5">
            <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
                    Active Project
                  </p>
                  <p className="mt-1 text-base font-semibold text-neutral-950">
                    Marina Tower Ph2
                  </p>
                  <p className="text-xs text-neutral-500">847M AED · 28 mo</p>
                </div>
                <ChevronDown className="h-4 w-4 text-neutral-400" aria-hidden />
              </div>
            </div>

            <nav className="mt-5 space-y-5" aria-label="Platform navigation">
              {sidebarGroups.map((group, groupIndex) => (
                <div key={group.title}>
                  <p className="px-2 text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                    {group.title}
                  </p>
                  <ul className="mt-2 space-y-1 text-base text-neutral-600">
                    {group.items.map((item, itemIndex) => {
                      const isActive = groupIndex === 0 && itemIndex === 0;
                      const Icon = item.icon;

                      return (
                        <li
                          key={item.label}
                          className={
                            isActive
                              ? "flex items-center gap-3 rounded-lg border-l-4 border-[#9b3151] bg-[#f1e7e9] px-3 py-2.5 text-[#8d2948]"
                              : "flex items-center gap-3 px-3 py-2.5 text-neutral-600"
                          }
                        >
                          <Icon
                            className={
                              isActive
                                ? "h-5 w-5 text-[#9b3151]"
                                : "h-5 w-5 text-neutral-500"
                            }
                            aria-hidden
                          />
                          <span className="min-w-0 flex-1">{item.label}</span>
                          {item.badge ? (
                            <span className="rounded-full bg-[#a83d5c] px-2 py-0.5 text-xs font-semibold text-white">
                              {item.badge}
                            </span>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          {userBadge ? (
            <div className="mt-auto border-t border-neutral-200 bg-white p-4">
              <div className="rounded-lg border border-[#ead4db] bg-[#f7edef] px-4 py-3 text-center text-sm font-semibold text-[#9b3151]">
                {portalLabelByView[view]}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#9b3151] text-sm font-semibold text-white">
                  {userBadge.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-neutral-950">
                    {userBadge.name}
                  </p>
                  <p className="text-xs text-neutral-500">{userBadge.role}</p>
                </div>
              </div>
            </div>
          ) : null}
        </aside>

        <main className="p-6 lg:p-8">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                {roleLabel}
              </p>
              <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
                {pageTitle}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs text-neutral-700">
                ◌ Ask Pulse...
              </span>
              <span className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs text-neutral-700">
                • Live
              </span>
            </div>
          </div>

          <div
            className="mt-6 h-6 rounded-md border border-dashed border-neutral-300 bg-white"
            aria-hidden
          />
          {pageScribble ? (
            <p className="mt-2 text-right text-[10px] italic text-neutral-500">
              {pageScribble}
            </p>
          ) : null}

          <div className="mt-6 flex flex-col gap-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
