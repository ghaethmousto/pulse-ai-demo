export type AddProjectStepKey =
  | "role"
  | "project-invites"
  | "connect-tools"
  | "pulse-reads"
  | "first-briefing";

export interface AddProjectStep {
  key: AddProjectStepKey;
  number: number;
  shortLabel: string;
  href: string;
}

export const addProjectSteps: AddProjectStep[] = [
  {
    key: "role",
    number: 1,
    shortLabel: "Role",
    href: "/skeleton/add-project/role",
  },
  {
    key: "project-invites",
    number: 2,
    shortLabel: "Project & invites",
    href: "/skeleton/add-project/project-invites",
  },
  {
    key: "connect-tools",
    number: 3,
    shortLabel: "Connect tools",
    href: "/skeleton/add-project/connect-tools",
  },
  {
    key: "pulse-reads",
    number: 4,
    shortLabel: "Pulse reads",
    href: "/skeleton/add-project/pulse-reads",
  },
  {
    key: "first-briefing",
    number: 5,
    shortLabel: "First briefing",
    href: "/skeleton/add-project/first-briefing",
  },
];

export function getStep(key: AddProjectStepKey): AddProjectStep {
  const step = addProjectSteps.find((s) => s.key === key);
  if (!step) {
    throw new Error(`Unknown add-project step: ${key}`);
  }
  return step;
}

export function getPrevStep(key: AddProjectStepKey): AddProjectStep | null {
  const idx = addProjectSteps.findIndex((s) => s.key === key);
  return idx > 0 ? addProjectSteps[idx - 1] : null;
}

export function getNextStep(key: AddProjectStepKey): AddProjectStep | null {
  const idx = addProjectSteps.findIndex((s) => s.key === key);
  return idx >= 0 && idx < addProjectSteps.length - 1
    ? addProjectSteps[idx + 1]
    : null;
}

/**
 * Map kebab-case step key (used in routes/state) to the camelCase
 * translation key used under skeleton.addProject.stepLabels and
 * skeleton.addProject.stepTitles.
 */
export function stepKeyToTranslationKey(
  key: AddProjectStepKey,
): "role" | "projectInvites" | "connectTools" | "pulseReads" | "firstBriefing" {
  switch (key) {
    case "role":
      return "role";
    case "project-invites":
      return "projectInvites";
    case "connect-tools":
      return "connectTools";
    case "pulse-reads":
      return "pulseReads";
    case "first-briefing":
      return "firstBriefing";
  }
}
