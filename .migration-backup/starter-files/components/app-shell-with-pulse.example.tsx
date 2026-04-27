'use client';

import {PulseFloatingAI} from './pulse-floating-ai.example';
import pulseDialogues from '@/demo-data/pulse-ai-demo-dialogues.json';

export function AppShellWithPulse({locale, routeKey, children}: {locale: 'en' | 'ar'; routeKey?: string; children: React.ReactNode}) {
  const questions = pulseDialogues[locale];
  return <>{children}<PulseFloatingAI locale={locale} routeKey={routeKey} questions={questions} /></>;
}
