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
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <SkeletonPlatformHeader />
      <SkeletonPlatformViewSwitcher active={view} />

      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 lg:grid-cols-[280px_1fr]">
        <aside className="flex flex-col border-r border-border bg-card">
          <div className="flex items-center gap-3 border-b border-border bg-card px-5 py-6">
            <Image
              src="/assets/pulse/Pulse%20-%20Red%20Rec%20Icon.svg"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10"
              aria-hidden
            />
            <span className="text-xl font-semibold text-foreground">Pulse AI</span>
          </div>

          <div className="flex-1 overflow-hidden px-4 py-5">
            <div className="rounded-lg border border-border bg-background p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Active Project
                  </p>
                  <p className="mt-1 text-base font-semibold text-foreground">
                    Al Reem Tower
                  </p>
                  <p className="text-xs text-muted-foreground">185M AED · 28 mo</p>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" aria-hidden />
              </div>
            </div>

            <nav className="mt-5 space-y-5" aria-label="Platform navigation">
              {sidebarGroups.map((group, groupIndex) => (
                <div key={group.title}>
                  <p className="px-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {group.title}
                  </p>
                  <ul className="mt-2 space-y-1 text-base text-foreground/70">
                    {group.items.map((item, itemIndex) => {
                      const isActive = groupIndex === 0 && itemIndex === 0;
                      const Icon = item.icon;

                      return (
                        <li
                          key={item.label}
                          className={
                            isActive
                              ? "flex items-center gap-3 rounded-lg border-l-4 border-wine bg-wine-subtle px-3 py-2.5 text-wine dark:bg-wine/15"
                              : "flex items-center gap-3 px-3 py-2.5 text-foreground/70"
                          }
                        >
                          <Icon
                            className={
                              isActive
                                ? "h-5 w-5 text-wine"
                                : "h-5 w-5 text-muted-foreground"
                            }
                            aria-hidden
                          />
                          <span className="min-w-0 flex-1">{item.label}</span>
                          {item.badge ? (
                            <span className="rounded-full bg-wine px-2 py-0.5 text-xs font-semibold text-white">
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
            <div className="mt-auto border-t border-border bg-card p-4">
              <div className="rounded-lg border border-wine/30 bg-wine-subtle px-4 py-3 text-center text-sm font-semibold text-wine dark:bg-wine/15">
                {portalLabelByView[view]}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-wine text-sm font-semibold text-white">
                  {userBadge.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {userBadge.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{userBadge.role}</p>
                </div>
              </div>
            </div>
          ) : null}
        </aside>

        <main className="p-6 lg:p-8">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {roleLabel}
              </p>
              <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
                {pageTitle}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground/70">
                ◌ Ask Pulse...
              </span>
              <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground/70">
                • Live
              </span>
            </div>
          </div>

          <div
            className="mt-6 h-6 rounded-md border border-dashed border-border bg-card"
            aria-hidden
          />
          {pageScribble ? (
            <p className="mt-2 text-right text-[10px] italic text-muted-foreground">
              {pageScribble}
            </p>
          ) : null}

          <div className="mt-6 flex flex-col gap-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
