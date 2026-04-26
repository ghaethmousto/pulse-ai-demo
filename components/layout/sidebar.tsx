"use client";

import { useTranslations } from "next-intl";
import {
  ClipboardCheck,
  FileBarChart,
  Folders,
  LayoutDashboard,
  ListChecks,
  Settings,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Link, usePathname } from "@/i18n/navigation";
import { PulseLogo } from "@/components/brand/logo";
import { getDataset } from "@/lib/data/al-reem";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  key: string;
  icon: LucideIcon;
  section: "workspace" | "monitor" | "system";
  badge?: number;
  liveDot?: boolean;
};

function buildNav(): NavItem[] {
  const data = getDataset();
  return [
    { href: "/dashboard", key: "dashboard", icon: LayoutDashboard, section: "workspace" },
    { href: "/projects", key: "projects", icon: Folders, section: "workspace" },
    { href: "/pulse", key: "pulse", icon: Waves, section: "monitor", liveDot: true },
    { href: "/tasks", key: "tasks", icon: ListChecks, section: "monitor", badge: data.project.overdueTasks },
    { href: "/approvals", key: "approvals", icon: ClipboardCheck, section: "monitor", badge: data.project.blockedApprovals },
    { href: "/reports", key: "reports", icon: FileBarChart, section: "monitor" },
    { href: "/settings", key: "settings", icon: Settings, section: "system" },
  ];
}

const SECTIONS: Array<NavItem["section"]> = ["workspace", "monitor", "system"];

export function Sidebar() {
  const pathname = usePathname();
  const tNav = useTranslations("nav");
  const tProj = useTranslations("demoProject");
  const tSidebar = useTranslations("sidebar");
  const NAV = buildNav();

  return (
    <aside className="hidden w-[224px] shrink-0 flex-col border-e border-border/60 bg-[color:var(--bg-surface-2)] lg:flex">
      <div className="flex items-center gap-2 px-4 py-4">
        <PulseLogo />
      </div>

      <div className="mx-3 mb-3">
        <button
          type="button"
          className="block w-full rounded-md border border-border/70 bg-card px-3 py-2.5 text-start transition hover:border-wine/30"
        >
          <div className="text-[8px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            {tSidebar("activeProject")}
          </div>
          <div className="mt-1 truncate text-[12.5px] font-bold tracking-[-0.012em] text-foreground">
            {tProj("name")}
          </div>
          <div className="mt-0.5 truncate text-[10.5px] text-muted-foreground">
            {tSidebar("projectMeta")}
          </div>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-2.5 pb-3">
        {SECTIONS.map((section) => {
          const items = NAV.filter((n) => n.section === section);
          if (items.length === 0) return null;
          return (
            <div key={section} className="mt-3 first:mt-1">
              <div className="px-2 pb-1.5 text-[8px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">
                {tSidebar(`sections.${section}`)}
              </div>
              <ul className="space-y-px">
                {items.map(({ href, key, icon: Icon, badge, liveDot }) => {
                  const active = pathname === href || pathname.startsWith(`${href}/`);
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={cn(
                          "group relative flex items-center gap-2.5 rounded-md px-2 py-[7px] text-[12.5px] transition",
                          active
                            ? "font-semibold text-wine"
                            : "font-medium text-foreground/65 hover:bg-foreground/[0.04] hover:text-foreground/95",
                        )}
                        style={
                          active
                            ? {
                                background:
                                  "linear-gradient(180deg, rgba(141,53,75,0.10) 0%, rgba(141,53,75,0.06) 100%)",
                                boxShadow:
                                  "inset 0 0 0 1px rgba(141,53,75,0.18)",
                              }
                            : undefined
                        }
                      >
                        <Icon
                          className={cn(
                            "size-[14px] shrink-0",
                            active ? "opacity-100" : "opacity-55 group-hover:opacity-90",
                          )}
                          strokeWidth={active ? 2 : 1.6}
                        />
                        <span className="flex-1">{tNav(key)}</span>
                        {liveDot ? (
                          <span
                            aria-hidden
                            className="pulse-live-dot inline-block size-1.5 rounded-full bg-[#3d7a58]"
                            style={{ boxShadow: "0 0 6px rgba(61,122,88,0.6)" }}
                          />
                        ) : null}
                        {badge && badge > 0 ? (
                          <span
                            aria-label={`${badge}`}
                            className={cn(
                              "inline-flex h-[16px] min-w-[16px] items-center justify-center rounded-full px-1 text-[9px] font-bold tabular-nums",
                              active
                                ? "bg-wine text-white"
                                : "bg-wine/15 text-wine ring-1 ring-inset ring-wine/25",
                            )}
                          >
                            {badge}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>

      <div className="mx-3 mb-2 mt-1">
        <div
          className="rounded-md border border-wine/15 px-2.5 py-1.5 text-center text-[10px] font-bold tracking-[0.04em] text-wine"
          style={{ background: "rgba(141,53,75,0.06)" }}
        >
          {tSidebar("role")}
        </div>
      </div>

      <div className="mx-3 mb-3 flex items-center gap-2.5 border-t border-border/50 pt-3">
        <span
          aria-hidden
          className="grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-bold text-white"
          style={{ background: "linear-gradient(135deg, #8d354b, #6a2638)" }}
        >
          {tSidebar("userInitials")}
        </span>
        <div className="min-w-0 flex-1 leading-tight">
          <div className="truncate text-[11.5px] font-semibold text-foreground">
            {tSidebar("userName")}
          </div>
          <div className="truncate text-[9.5px] text-muted-foreground">
            {tSidebar("userRole")}
          </div>
        </div>
      </div>
    </aside>
  );
}
