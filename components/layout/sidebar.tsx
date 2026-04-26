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
import { cn } from "@/lib/utils";

type NavItem = { href: string; key: string; icon: LucideIcon; section: "workspace" | "monitor" | "system" };

const NAV: NavItem[] = [
  { href: "/dashboard", key: "dashboard", icon: LayoutDashboard, section: "workspace" },
  { href: "/projects", key: "projects", icon: Folders, section: "workspace" },
  { href: "/pulse", key: "pulse", icon: Waves, section: "monitor" },
  { href: "/tasks", key: "tasks", icon: ListChecks, section: "monitor" },
  { href: "/approvals", key: "approvals", icon: ClipboardCheck, section: "monitor" },
  { href: "/reports", key: "reports", icon: FileBarChart, section: "monitor" },
  { href: "/settings", key: "settings", icon: Settings, section: "system" },
];

const SECTIONS: Array<NavItem["section"]> = ["workspace", "monitor", "system"];

export function Sidebar() {
  const pathname = usePathname();
  const tNav = useTranslations("nav");
  const tProj = useTranslations("demoProject");
  const tSidebar = useTranslations("sidebar");

  return (
    <aside className="hidden w-[224px] shrink-0 flex-col border-e border-border/60 bg-[color:var(--bg-surface-2)] lg:flex">
      {/* Brand */}
      <div className="flex items-center gap-2 px-4 py-4">
        <PulseLogo />
      </div>

      {/* Project block — bordered, richer block per the screenshots */}
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

      {/* Nav with section grouping */}
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
                {items.map(({ href, key, icon: Icon }) => {
                  const active = pathname === href || pathname.startsWith(`${href}/`);
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={cn(
                          "group relative flex items-center gap-2.5 rounded-md px-2 py-[7px] text-[12.5px] transition",
                          active
                            ? "font-semibold text-wine"
                            : "font-medium text-foreground/65 hover:text-foreground/95",
                        )}
                      >
                        <Icon
                          className={cn(
                            "size-[14px] shrink-0",
                            active ? "opacity-100" : "opacity-55 group-hover:opacity-90",
                          )}
                          strokeWidth={active ? 2 : 1.6}
                        />
                        <span>{tNav(key)}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>

      {/* Role pill — matches nav-sidebar.html footer pattern */}
      <div className="mx-3 mb-2 mt-1">
        <div
          className="rounded-md border border-wine/15 px-2.5 py-1.5 text-center text-[10px] font-bold tracking-[0.04em] text-wine"
          style={{ background: "rgba(141,53,75,0.06)" }}
        >
          {tSidebar("role")}
        </div>
      </div>

      {/* User row */}
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
