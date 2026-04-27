// Example structure Claude Code can adapt into the app.
// Source of truth: demo-data/al-reem-tower.json

export const alReemTower = {
  slug: 'al-reem-tower',
  name: { en: 'Al Reem Tower', ar: 'برج الريم' },
  location: { en: 'Al Reem Island, Abu Dhabi, UAE', ar: 'جزيرة الريم، أبوظبي، الإمارات' },
  status: 'At Risk',
  riskLevel: 'High',
  progressPercent: 46,
  plannedProgressPercent: 53,
  delayDays: 18,
  costExposureAED: 3750000,
  nextMilestone: { en: 'Authority submission package freeze', ar: 'تجميد حزمة التقديم للجهات' },
  nextMilestoneDate: '2026-05-08'
} as const;
