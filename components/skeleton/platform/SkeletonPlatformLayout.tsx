"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
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
  sectionKey: string;
  items: { itemKey: string; icon: LucideIcon; badge?: string }[];
}[] = [
  {
    sectionKey: "overview",
    items: [
      { itemKey: "dashboard", icon: LayoutGrid },
      { itemKey: "projects", icon: FolderKanban },
    ],
  },
  {
    sectionKey: "monitor",
    items: [
      { itemKey: "projectPulse", icon: Activity },
      { itemKey: "timeline", icon: Calendar },
      { itemKey: "tasks", icon: ClipboardList },
      { itemKey: "approvals", icon: Check, badge: "2" },
    ],
  },
  {
    sectionKey: "projectData",
    items: [
      { itemKey: "documents", icon: FileText, badge: "22" },
      { itemKey: "stakeholders", icon: Users },
      { itemKey: "meetings", icon: ClipboardCheck },
      { itemKey: "site", icon: MapPin },
    ],
  },
  {
    sectionKey: "intelligence",
    items: [
      { itemKey: "aiInsights", icon: Brain },
      { itemKey: "risks", icon: AlertTriangle, badge: "3" },
      { itemKey: "reports", icon: BarChart3 },
    ],
  },
  {
    sectionKey: "business",
    items: [
      { itemKey: "financials", icon: DollarSign },
      { itemKey: "templates", icon: Shapes },
    ],
  },
  {
    sectionKey: "system",
    items: [
      { itemKey: "team", icon: Users },
      { itemKey: "settings", icon: Settings },
    ],
  },
];

const portalKeyByView: Record<SkeletonPlatformView, string> = {
  "source-of-truth": "sourceOfTruth",
  consultant: "consultant",
  contractor: "contractor",
  owner: "owner",
};

interface SkeletonPlatformLayoutProps {
  view: SkeletonPlatformView;
  children: ReactNode;
}

export function SkeletonPlatformLayout({
  view,
  children,
}: SkeletonPlatformLayoutProps) {
  const t = useTranslations("skeleton.platform");
  const tSections = useTranslations("skeleton.platform.sections");
  const tItems = useTranslations("skeleton.platform.items");
  const tPortals = useTranslations("skeleton.platform.portals");
  const tRoles = useTranslations("skeleton.platform.roleLabels");
  const tTitles = useTranslations("skeleton.platform.pageTitles");
  const tScribbles = useTranslations("skeleton.platform.scribbles");
  const tBadges = useTranslations("skeleton.platform.userBadges");
  const portalKey = portalKeyByView[view];
  const roleLabel = tRoles(portalKey);
  const pageTitle = tTitles(portalKey);
  const pageScribble = tScribbles(portalKey);
  const userBadge = {
    name: tBadges(`${portalKey}.name`),
    role: tBadges(`${portalKey}.role`),
  };
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

          <div className="relative flex-1 overflow-hidden px-4 py-5">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-cover bg-center dark:invert dark:hue-rotate-180"
              style={{
                backgroundImage: 'url("/assets/cards%20background/6.png")',
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-card/85 dark:bg-card/80"
            />
            <div className="relative rounded-lg border border-border bg-background p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {t("activeProject")}
                  </p>
                  <p className="mt-1 text-base font-semibold text-foreground">
                    {t("projectName")}
                  </p>
                  <p className="text-xs text-muted-foreground">{t("projectMeta")}</p>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" aria-hidden />
              </div>
            </div>

            <nav className="relative mt-5 space-y-5" aria-label="Platform navigation">
              {sidebarGroups.map((group, groupIndex) => (
                <div key={group.sectionKey}>
                  <p className="px-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {tSections(group.sectionKey)}
                  </p>
                  <ul className="mt-2 space-y-1 text-base text-foreground/70">
                    {group.items.map((item, itemIndex) => {
                      const isActive = groupIndex === 0 && itemIndex === 0;
                      const Icon = item.icon;

                      return (
                        <li
                          key={item.itemKey}
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
                          <span className="min-w-0 flex-1">{tItems(item.itemKey)}</span>
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

          {userBadge.name ? (
            <div className="mt-auto border-t border-border bg-card p-4">
              <div className="rounded-lg border border-wine/30 bg-wine-subtle px-4 py-3 text-center text-sm font-semibold text-wine dark:bg-wine/15">
                {tPortals(portalKeyByView[view])}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-wine text-sm font-semibold text-white">
                  {userBadge.name
                    .split(/\s+/)
                    .map((part) => Array.from(part)[0] ?? "")
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {userBadge.name}
                  </p>
                  {userBadge.role ? (
                    <p className="text-xs text-muted-foreground">{userBadge.role}</p>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </aside>

        <main className="p-6 lg:p-8">
          <div className="relative overflow-hidden rounded-md border border-border bg-card p-5">
            {/* Background image */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-70 dark:invert dark:hue-rotate-180 dark:opacity-80"
              style={{ backgroundImage: 'url("/assets/cards%20background/17.png")' }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-card/55 dark:bg-card/55"
            />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {roleLabel}
                </p>
                <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
                  {pageTitle}
                </h1>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/70">
                  {t("askPulse")}
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/70">
                  {t("live")}
                </span>
              </div>
            </div>

            {pageScribble ? (
              <p className="relative mt-3 text-right text-[10px] italic text-muted-foreground">
                {pageScribble}
              </p>
            ) : null}
          </div>

          <div className="mt-6 flex flex-col gap-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
