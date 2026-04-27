export type Locale = "en" | "ar";

export type Bilingual = { en: string; ar: string };

export type ProjectMeta = {
  id: string;
  slug: string;
  name: Bilingual;
  location: Bilingual;
  type: Bilingual;
  configuration: string;
  plotAreaSqm: number;
  grossFloorAreaSqm: number;
  units: {
    studios: number;
    oneBedroom: number;
    twoBedroom: number;
    threeBedroom: number;
    total: number;
  };
  client: string;
  consultant: string;
  contractor: string;
  projectManager: string;
  contractValueAED: number;
  designFeesAED: number;
  plannedStart: string;
  plannedHandover: string;
  currentPhase: Bilingual;
  overallStatus: string;
  riskLevel: string;
  progressPercent: number;
  plannedProgressPercent: number;
  delayDays: number;
  costExposureAED: number;
  openRisks: number;
  criticalRisks: number;
  openApprovals: number;
  blockedApprovals: number;
  openTasks: number;
  overdueTasks: number;
  latestSiteVisit: string;
  nextMilestone: Bilingual;
  nextMilestoneDate: string;
};

export type Trend = "positive" | "negative" | "neutral";

export type Kpi = {
  key: "health" | "delay" | "progress" | "exposure";
  label: Bilingual;
  value: string;
  trend: Trend;
  note: Bilingual;
};

export type TimelineStatus = "done" | "in-progress" | "delayed" | "at-risk" | "upcoming";

export type TimelineStage = {
  stage: string;
  title: Bilingual;
  planned: string;
  actual: string | null;
  status: TimelineStatus;
  varianceDays: number;
  owner: string;
};

export type RiskSeverity = "Low" | "Medium" | "High" | "Critical";

export type Risk = {
  id: string;
  severity: RiskSeverity;
  type: string;
  title: Bilingual;
  impact: Bilingual;
  recommendedAction: Bilingual;
};

export type TaskStatus = "Open" | "In Progress" | "Blocked" | "Overdue" | "Done";
export type TaskPriority = "Low" | "Medium" | "High" | "Critical";

export type Task = {
  id: string;
  title: Bilingual;
  assignee: string;
  priority: TaskPriority;
  status: TaskStatus;
  due: string;
};

export type ApprovalStatus = "Approved" | "Pending" | "Blocked" | "At Risk";

export type Approval = {
  id: string;
  name: Bilingual;
  authority: string;
  status: ApprovalStatus;
  date: string | null;
};

export type Report = {
  id: string;
  type: string;
  date: string;
  summary: Bilingual;
};

export type ProjectDataset = {
  meta: {
    dataType: string;
    purpose: string;
    lastUpdated: string;
    defaultProjectSlug: string;
  };
  project: ProjectMeta;
  kpis: Kpi[];
  timeline: TimelineStage[];
  risks: Risk[];
  tasks: Task[];
  approvals: Approval[];
  reports: Report[];
  aiSummary: Bilingual;
};

export type PulseQuestion = {
  id: string;
  question: string;
  answer: string;
  suggestedPage?: string;
};

export type PulseDialogues = {
  meta: { projectSlug: string; assistantName: string; purpose: string };
  en: PulseQuestion[];
  ar: PulseQuestion[];
};
