'use client';

import {useMemo, useState} from 'react';
import {Bot, Minimize2, Send, Sparkles} from 'lucide-react';
import {motion, AnimatePresence} from 'motion/react';

type Locale = 'en' | 'ar';
type PulseQuestion = {id: string; question: string; answer: string; suggestedPage?: string};

export function PulseFloatingAI({locale, routeKey, questions}: {locale: Locale; routeKey?: string; questions: PulseQuestion[]}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<PulseQuestion | null>(questions[0] ?? null);
  const isAr = locale === 'ar';

  const suggested = useMemo(() => {
    const routeMatches = routeKey ? questions.filter(q => q.suggestedPage === routeKey) : [];
    return (routeMatches.length ? routeMatches : questions).slice(0, 4);
  }, [questions, routeKey]);

  return (
    <div className="fixed bottom-5 z-50 [inset-inline-end:1.25rem]">
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{opacity: 0, y: 16, scale: 0.96}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: 12, scale: 0.96}}
            transition={{duration: 0.22, ease: 'easeOut'}}
            className="mb-3 w-[min(380px,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-white/15 bg-white/80 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-neutral-950/82"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            <div className="border-b border-black/10 bg-gradient-to-br from-red-950/95 via-red-900/90 to-neutral-950 px-5 py-4 text-white dark:border-white/10">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-2xl bg-white/12 ring-1 ring-white/15">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Pulse</div>
                    <div className="text-xs text-white/70">{isAr ? 'سياق المشروع المباشر' : 'Live project context'}</div>
                  </div>
                </div>
                <button aria-label={isAr ? 'تصغير Pulse' : 'Minimize Pulse'} onClick={() => setOpen(false)} className="rounded-full p-2 hover:bg-white/10">
                  <Minimize2 className="size-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4 p-4">
              <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-4 text-sm text-neutral-800 dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-100">
                {active?.answer ?? (isAr ? 'اختر سؤالاً للبدء.' : 'Choose a question to begin.')}
              </div>
              <div className="flex flex-wrap gap-2">
                {suggested.map(q => (
                  <button key={q.id} onClick={() => setActive(q)} className="rounded-full border border-red-900/15 bg-red-950/[0.04] px-3 py-1.5 text-xs text-red-950 transition hover:bg-red-950 hover:text-white dark:border-red-300/15 dark:bg-red-300/[0.08] dark:text-red-100 dark:hover:bg-red-300 dark:hover:text-red-950">
                    {q.question}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-3 py-2 dark:border-white/10 dark:bg-neutral-900">
                <input className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-400" placeholder={isAr ? 'اسأل Pulse عن المشروع…' : 'Ask Pulse about the project…'} />
                <button className="grid size-9 place-items-center rounded-xl bg-red-950 text-white hover:bg-red-900" aria-label={isAr ? 'إرسال' : 'Send'}>
                  <Send className="size-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button onClick={() => setOpen(v => !v)} whileHover={{scale: 1.04}} whileTap={{scale: 0.98}} className="group relative grid size-16 place-items-center rounded-3xl bg-red-950 text-white shadow-2xl shadow-red-950/30 ring-1 ring-white/15" aria-label={open ? (isAr ? 'إغلاق Pulse' : 'Close Pulse') : (isAr ? 'فتح Pulse' : 'Open Pulse')}>
        <span className="absolute inset-0 rounded-3xl bg-red-500/20 blur-xl transition group-hover:bg-red-400/30" />
        <Bot className="relative size-7" />
      </motion.button>
    </div>
  );
}
