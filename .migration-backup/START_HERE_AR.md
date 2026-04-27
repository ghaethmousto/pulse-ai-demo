# ابدأ من هنا — تشغيل Claude Code بسرعة

## الهدف
تشغيل Claude Code Remote على GitHub repo ليبدأ ببناء ديمو Pulse AI بسرعة ودقة.

## الخطوات المختصرة

### 1. أنشئ مشروع Next.js
```bash
npx create-next-app@latest pulse-ai-demo --ts --tailwind --eslint --app
cd pulse-ai-demo
npm install next-themes next-intl motion framer-motion embla-carousel-react lenis lucide-react clsx tailwind-merge class-variance-authority
```

### 2. انسخ محتوى هذه الحزمة إلى root المشروع
يجب أن ترى داخل المشروع:

```text
CLAUDE.md
docs/
design/
demo-data/
messages/
starter-files/
public/assets/
```

### 3. ارفع إلى GitHub
```bash
git add .
git commit -m "Add Pulse AI handoff package"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 4. افتح Claude Code Desktop
- اختر Code
- اختر Remote environment
- اختر GitHub repo
- استخدم Opus إن كان متاحاً
- لا تبدأ تنفيذ فوراً؛ ابدأ بـ Prompt 00 من:

```text
docs/claude-code-fast-start-prompts.md
```

### 5. أهم شرطين
- مشروع الديمو الأساسي هو Al Reem Tower.
- Floating AI باسم Pulse يجب أن يظهر في كل الصفحات مع أسئلة وأجوبة ديمو.
