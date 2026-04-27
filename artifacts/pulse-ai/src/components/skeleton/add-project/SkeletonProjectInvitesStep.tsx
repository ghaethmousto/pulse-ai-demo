"use client";

import { useTranslations } from "next-intl";
import { SkeletonStepBody } from "./SkeletonStepBody";

export function SkeletonProjectInvitesStep() {
  const t = useTranslations("skeleton.addProject.projectInvites");

  const counterparts = [
    { role: t("consultantLead"), org: "Arup · r.iyer@arup.com" },
    { role: t("mainContractor"), org: "Mace · m.khan@mace.com" },
  ];

  const left = (
    <div className="space-y-5">
      <label className="block">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {t("projectName")}
        </span>
        <span className="mt-1 block rounded-md border border-dashed border-border bg-muted px-3 py-2 text-sm font-mono text-foreground/80 bidi-isolate">
          {t("projectNameValue")}|
        </span>
      </label>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {t("contractValue")}
          </span>
          <span className="mt-1 block rounded-md border border-dashed border-border bg-muted px-3 py-2 text-sm font-mono text-foreground/80 bidi-isolate">
            847,000,000 AED
          </span>
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {t("duration")}
          </span>
          <span className="mt-1 block rounded-md border border-dashed border-border bg-muted px-3 py-2 text-sm font-mono text-foreground/80">
            {t("durationValue")}
          </span>
        </label>
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {t("inviteCounterparts")}
        </p>
        <ul className="mt-2 divide-y divide-border rounded-md border border-border bg-card">
          {counterparts.map((c) => (
            <li key={c.role} className="flex items-center gap-3 px-4 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-xs">
                ◯
              </span>
              <div>
                <p className="text-sm font-semibold">{c.role}</p>
                <p className="text-xs font-mono text-muted-foreground bidi-isolate">{c.org}</p>
              </div>
            </li>
          ))}
          <li className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-xs">
              +
            </span>
            {t("addStakeholder")}
          </li>
        </ul>
      </div>
    </div>
  );

  const rail = (
    <div className="rounded-md border border-border bg-muted p-5 lg:mt-[12px]">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {t("whyInvite")}
      </p>
      <p className="mt-3 text-sm text-foreground/80">{t("whyInviteBody")}</p>
      <p className="mt-4 text-xs italic text-muted-foreground">
        ↳ {t("whyInviteCaption")}
      </p>
    </div>
  );

  return <SkeletonStepBody left={left} rail={rail} />;
}
