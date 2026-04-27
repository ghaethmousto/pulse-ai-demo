module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/providers/theme-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const THEME_STORAGE_KEY = "pulse-theme";
const THEMES = [
    "light",
    "dark"
];
function ThemeProvider({ children }) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const root = document.documentElement;
        const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
        const theme = stored === "light" || stored === "dark" ? stored : "dark";
        root.classList.remove(...THEMES, "system");
        root.classList.add(theme);
        root.dataset.theme = theme;
        root.style.colorScheme = theme;
        window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        attribute: [
            "class",
            "data-theme"
        ],
        defaultTheme: "dark",
        enableSystem: false,
        disableTransitionOnChange: true,
        storageKey: THEME_STORAGE_KEY,
        themes: [
            ...THEMES
        ],
        children: children
    }, void 0, false, {
        fileName: "[project]/components/providers/theme-provider.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/providers/locale-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocaleProvider",
    ()=>LocaleProvider,
    "useLocale",
    ()=>useLocale,
    "useOptionalLocale",
    ()=>useOptionalLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const LocaleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const STORAGE_KEY = "pulse-locale";
function LocaleProvider({ children }) {
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("en");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const stored = window.localStorage.getItem(STORAGE_KEY);
            if (stored === "en" || stored === "ar") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>setLocaleState(stored));
            }
        } catch  {}
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof document === "undefined") return;
        document.documentElement.lang = locale;
        document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
        try {
            window.localStorage.setItem(STORAGE_KEY, locale);
        } catch  {}
    }, [
        locale
    ]);
    const setLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((l)=>setLocaleState(l), []);
    const toggleLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setLocaleState((prev)=>prev === "en" ? "ar" : "en"), []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            locale,
            toggleLocale,
            setLocale,
            dir: locale === "ar" ? "rtl" : "ltr"
        }), [
        locale,
        toggleLocale,
        setLocale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LocaleContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/providers/locale-provider.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
function useLocale() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LocaleContext);
    if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
    return ctx;
}
function useOptionalLocale() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LocaleContext);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/demo-data/pulse-ai-demo-dialogues.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "meta": {
        "projectSlug": "al-reem-tower",
        "assistantName": "Pulse",
        "purpose": "Demo scripted answers for floating AI."
    },
    "en": [
        {
            "id": "q-risk",
            "question": "What is the current risk level of Al Reem Tower?",
            "answer": "Al Reem Tower is currently High Risk / At Risk. The main drivers are an 18-day delay, unresolved fire strategy coordination, podium MEP conflicts, and four blocked approvals that may affect the authority submission package due on 08-May-2026.",
            "suggestedPage": "dashboard"
        },
        {
            "id": "q-delay",
            "question": "Why is the project delayed?",
            "answer": "The current 18-day delay is mainly caused by unresolved vertical core decisions, MEP plant-room conflicts in the podium, and client-requested amenity changes that affected circulation, loads, and authority coordination.",
            "suggestedPage": "pulse"
        },
        {
            "id": "q-today",
            "question": "What should I do today?",
            "answer": "Today’s priority is to freeze the vertical core layout, issue the MEP/parking clash overlay, and obtain a client decision on the amenity floor mix. These three actions reduce the authority submission risk most directly.",
            "suggestedPage": "tasks"
        },
        {
            "id": "q-approvals",
            "question": "Which approvals are blocking progress?",
            "answer": "The blocking items are parking/podium layout confirmation, fire strategy pre-consultation, authority submission readiness, and the client’s amenity floor decision. The parking/podium confirmation is the most urgent because it affects structure, MEP, and circulation.",
            "suggestedPage": "approvals"
        },
        {
            "id": "q-summary",
            "question": "Summarize the latest site visit.",
            "answer": "The 22-Apr-2026 coordination visit found podium MEP conflicts, unresolved core decisions, and potential authority submission slippage. The recommended recovery action is a focused decision workshop followed by a coordinated MEP/parking overlay before 29-Apr-2026.",
            "suggestedPage": "reports"
        },
        {
            "id": "q-client-update",
            "question": "Draft a client update.",
            "answer": "Client update: Al Reem Tower is progressing through design development and authority coordination. Current project health is At Risk due to MEP/podium coordination and pending decisions on the vertical core and amenity floor. We recommend freezing these decisions this week to protect the 08-May authority submission target.",
            "suggestedPage": "reports"
        }
    ],
    "ar": [
        {
            "id": "q-risk",
            "question": "ما مستوى الخطر الحالي في برج الريم؟",
            "answer": "برج الريم حالياً ضمن مستوى خطر مرتفع / At Risk. الأسباب الرئيسية هي تأخير 18 يوماً، عدم تثبيت استراتيجية الدفاع المدني، تعارضات الخدمات في البوديوم، ووجود أربعة اعتمادات معطلة قد تؤثر على حزمة التقديم للجهات بتاريخ 08-05-2026.",
            "suggestedPage": "dashboard"
        },
        {
            "id": "q-delay",
            "question": "لماذا المشروع متأخر؟",
            "answer": "التأخير الحالي 18 يوماً سببه الأساسي عدم حسم قرارات النواة الرأسية، تعارضات غرف الخدمات في البوديوم، وتعديلات العميل على طابق الخدمات التي أثرت على الحركة والأحمال وتنسيق الجهات.",
            "suggestedPage": "pulse"
        },
        {
            "id": "q-today",
            "question": "ماذا يجب أن أفعل اليوم؟",
            "answer": "الأولوية اليوم هي تجميد توزيع النواة الرأسية، إصدار مخطط تعارض الخدمات مع المواقف، والحصول على قرار العميل بخصوص طابق الخدمات. هذه الإجراءات الثلاثة تخفض خطر تأخر التقديم للجهات بشكل مباشر.",
            "suggestedPage": "tasks"
        },
        {
            "id": "q-approvals",
            "question": "ما الاعتمادات التي تعطل التقدم؟",
            "answer": "العناصر المعطلة هي تأكيد توزيع المواقف والبوديوم، الاستشارة الأولية لاستراتيجية الدفاع المدني، جاهزية حزمة التقديم للجهات، وقرار العميل بخصوص طابق الخدمات. تأكيد المواقف والبوديوم هو الأكثر إلحاحاً لأنه يؤثر على الإنشاءات والخدمات والحركة.",
            "suggestedPage": "approvals"
        },
        {
            "id": "q-summary",
            "question": "لخص آخر زيارة موقع أو اجتماع تنسيقي.",
            "answer": "زيارة/ورشة 22-04-2026 أظهرت تعارضات خدمات في البوديوم، قرارات غير محسومة في النواة، واحتمال تأخر حزمة التقديم للجهات. الإجراء المقترح هو ورشة قرار مركزة يليها إصدار مخطط تنسيق الخدمات والمواقف قبل 29-04-2026.",
            "suggestedPage": "reports"
        },
        {
            "id": "q-client-update",
            "question": "اكتب تحديثاً مختصراً للعميل.",
            "answer": "تحديث للعميل: مشروع برج الريم يتقدم ضمن مرحلة تطوير التصميم وتنسيق الجهات. الحالة الحالية At Risk بسبب تنسيق الخدمات في البوديوم وقرارات معلقة حول النواة الرأسية وطابق الخدمات. نوصي بتجميد هذه القرارات خلال هذا الأسبوع لحماية هدف التقديم للجهات بتاريخ 08-05-2026.",
            "suggestedPage": "reports"
        }
    ]
};
}),
"[project]/lib/data/dialogues.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findAnswer",
    ()=>findAnswer,
    "getDialogues",
    ()=>getDialogues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$demo$2d$data$2f$pulse$2d$ai$2d$demo$2d$dialogues$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demo-data/pulse-ai-demo-dialogues.json.[json].cjs [app-ssr] (ecmascript)");
;
const data = __TURBOPACK__imported__module__$5b$project$5d2f$demo$2d$data$2f$pulse$2d$ai$2d$demo$2d$dialogues$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
function getDialogues(locale) {
    return data[locale] ?? data.en;
}
function findAnswer(query, locale) {
    const list = getDialogues(locale);
    const normalized = query.trim().toLowerCase();
    if (!normalized) return null;
    const exact = list.find((q)=>q.question.toLowerCase() === normalized);
    if (exact) return exact;
    const tokens = normalized.split(/\s+/).filter(Boolean);
    let best = null;
    for (const item of list){
        const haystack = item.question.toLowerCase();
        const score = tokens.reduce((acc, t)=>acc + (haystack.includes(t) ? 1 : 0), 0);
        if (score > 0 && (!best || score > best.score)) {
            best = {
                item,
                score
            };
        }
    }
    return best?.item ?? null;
}
}),
"[project]/lib/utils/route-key.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "routeKeyFromPath",
    ()=>routeKeyFromPath
]);
function routeKeyFromPath(pathname, locale) {
    const stripped = pathname.replace(new RegExp(`^/${locale}`), "") || "/";
    const first = stripped.split("/").filter(Boolean)[0];
    switch(first){
        case "dashboard":
            return "dashboard";
        case "projects":
            return "projects";
        case "pulse":
            return "pulse";
        case "tasks":
            return "tasks";
        case "approvals":
            return "approvals";
        case "reports":
            return "reports";
        case "settings":
            return "settings";
        default:
            return "landing";
    }
}
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/pulse/floating-ai.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PulseFloatingAI",
    ()=>PulseFloatingAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$dialogues$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/dialogues.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$route$2d$key$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/route-key.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function PulseFloatingAI({ locale }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const tCommon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])("common");
    const tAssistant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])("pulseAssistant");
    const tProj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])("demoProject");
    const loc = locale === "ar" ? "ar" : "en";
    const isAr = loc === "ar";
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [draft, setDraft] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("");
    // `briefingOverride` is set only when the user picks a question or sends
    // a draft. While it's null, the rendered briefing falls back to the
    // active-locale greeting — this keeps the default copy in sync with the
    // language toggle without an effect.
    const [briefingOverride, setBriefingOverride] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const briefing = briefingOverride ?? {
        label: tAssistant("currentSituation"),
        text: tAssistant("greeting")
    };
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const dialogues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$dialogues$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDialogues"])(loc), [
        loc
    ]);
    const routeKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$route$2d$key$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routeKeyFromPath"])(pathname ?? "/", loc), [
        pathname,
        loc
    ]);
    const suggested = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const onRoute = dialogues.filter((q)=>q.suggestedPage === routeKey);
        const others = dialogues.filter((q)=>!onRoute.includes(q));
        return (onRoute.length ? onRoute.concat(others) : dialogues).slice(0, 3);
    }, [
        dialogues,
        routeKey
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!open) return;
        const id = requestAnimationFrame(()=>inputRef.current?.focus());
        return ()=>cancelAnimationFrame(id);
    }, [
        open
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!open) return;
        const handler = (e)=>{
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", handler);
        return ()=>window.removeEventListener("keydown", handler);
    }, [
        open
    ]);
    function ask(question) {
        setBriefingOverride({
            label: question.question,
            text: question.answer
        });
        setDraft("");
    }
    function submitDraft() {
        const text = draft.trim();
        if (!text) return;
        const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$dialogues$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findAnswer"])(text, loc);
        setBriefingOverride(match ? {
            label: match.question,
            text: match.answer
        } : {
            label: text,
            text: tAssistant("fallback")
        });
        setDraft("");
    }
    const projectName = tProj("name");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed z-50 [inset-block-end:1.5rem] [inset-inline-end:1.5rem]",
        dir: isAr ? "rtl" : "ltr",
        children: [
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "dialog",
                "aria-label": tAssistant("label"),
                className: "absolute end-0 w-[296px] max-w-[calc(100vw-2rem)] [bottom:calc(100%+12px)] origin-bottom rounded-[20px] p-[8px] backdrop-blur-[22px] backdrop-saturate-[1.15]",
                style: {
                    background: "var(--pulse-panel-bg)",
                    border: "1px solid var(--pulse-panel-border)",
                    boxShadow: "var(--pulse-panel-shadow)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden rounded-[14px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mx-2 mt-2 flex items-center gap-2 overflow-hidden rounded-[11px] px-3 py-2.5 text-white",
                            style: {
                                background: "linear-gradient(180deg, #9e4259 0%, #7a2b3f 100%)",
                                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.24)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": true,
                                    className: "relative grid size-8 shrink-0 place-items-center rounded-full",
                                    style: {
                                        filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.24))"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/pulse/Pulse - Red Circle Icon.svg",
                                        alt: "",
                                        width: 32,
                                        height: 32,
                                        className: "block size-8 brightness-0 invert",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/pulse/floating-ai.tsx",
                                        lineNumber: 117,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/pulse/floating-ai.tsx",
                                    lineNumber: 110,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-[1] min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 text-[12px] font-semibold tracking-[-0.005em] text-white",
                                            children: [
                                                tAssistant("name"),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": true,
                                                    className: "pulse-live-dot inline-block size-1.5 shrink-0 rounded-full bg-[#7ee0a8]",
                                                    style: {
                                                        boxShadow: "0 0 8px #7ee0a8"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pulse/floating-ai.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pulse/floating-ai.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "truncate text-[9.5px] tracking-[0.02em] text-[rgba(255,232,238,0.82)]",
                                            children: [
                                                projectName,
                                                " · ",
                                                tAssistant("liveContext")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pulse/floating-ai.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pulse/floating-ai.tsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setOpen(false),
                                    "aria-label": tAssistant("close"),
                                    className: "relative z-[1] grid size-5 shrink-0 place-items-center rounded-[6px] text-[rgba(255,232,238,0.82)] transition hover:bg-white/[0.14] hover:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "12",
                                        height: "12",
                                        viewBox: "0 0 14 14",
                                        fill: "none",
                                        "aria-hidden": true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M3 7h8",
                                            stroke: "currentColor",
                                            strokeWidth: 1.6,
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pulse/floating-ai.tsx",
                                            lineNumber: 148,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/pulse/floating-ai.tsx",
                                        lineNumber: 147,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/pulse/floating-ai.tsx",
                                    lineNumber: 141,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pulse/floating-ai.tsx",
                            lineNumber: 101,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mx-2 mb-1.5 mt-2 overflow-hidden rounded-[11px] px-3 py-2.5",
                            style: {
                                background: "var(--pulse-briefing-bg)",
                                boxShadow: "inset 0 0 0 1px var(--pulse-briefing-ring), 0 1px 2px rgba(32,29,26,0.04)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-[1] flex items-center gap-1.5 text-[8.5px] font-semibold uppercase tracking-[0.24em]",
                                    style: {
                                        color: "var(--pulse-briefing-label)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": true,
                                            className: "pulse-live-dot inline-block size-1 rounded-full bg-current opacity-70"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pulse/floating-ai.tsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate",
                                            children: briefing.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/pulse/floating-ai.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pulse/floating-ai.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "relative z-[1] mt-1 line-clamp-3 text-[11.5px] leading-[1.55]",
                                    style: {
                                        color: "var(--pulse-action-text)"
                                    },
                                    children: briefing.text
                                }, void 0, false, {
                                    fileName: "[project]/components/pulse/floating-ai.tsx",
                                    lineNumber: 177,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pulse/floating-ai.tsx",
                            lineNumber: 159,
                            columnNumber: 15
                        }, this),
                        suggested.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between px-3 pb-0.5 pt-2 text-[8.5px] font-semibold uppercase tracking-[0.22em]",
                                    style: {
                                        color: "var(--pulse-action-meta)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: tAssistant("suggested")
                                        }, void 0, false, {
                                            fileName: "[project]/components/pulse/floating-ai.tsx",
                                            lineNumber: 192,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[8.5px] tracking-[0.06em]",
                                            style: {
                                                color: "var(--pulse-briefing-label)"
                                            },
                                            children: suggested.length
                                        }, void 0, false, {
                                            fileName: "[project]/components/pulse/floating-ai.tsx",
                                            lineNumber: 193,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pulse/floating-ai.tsx",
                                    lineNumber: 188,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mb-0.5",
                                    children: suggested.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>ask(q),
                                                className: "group mx-2 my-px flex w-[calc(100%-1rem)] items-center gap-2 rounded-[8px] px-2 py-1.5 text-start transition",
                                                style: {
                                                    color: "var(--pulse-action-text)"
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.background = "var(--pulse-action-hover-bg)";
                                                    e.currentTarget.style.boxShadow = "inset 0 0 0 1px var(--pulse-action-hover-ring), 0 3px 10px -3px rgba(32,29,26,0.10)";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.background = "";
                                                    e.currentTarget.style.boxShadow = "";
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionTypeIcon, {
                                                        page: q.suggestedPage
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pulse/floating-ai.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "min-w-0 flex-1 truncate text-[11px] font-semibold tracking-[-0.003em]",
                                                        style: {
                                                            color: "var(--pulse-action-text)"
                                                        },
                                                        children: q.question
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pulse/floating-ai.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "shrink-0 text-[12px] transition",
                                                        style: {
                                                            color: "var(--pulse-action-arrow)"
                                                        },
                                                        children: isAr ? "‹" : "›"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pulse/floating-ai.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/pulse/floating-ai.tsx",
                                                lineNumber: 203,
                                                columnNumber: 25
                                            }, this)
                                        }, q.id, false, {
                                            fileName: "[project]/components/pulse/floating-ai.tsx",
                                            lineNumber: 202,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/pulse/floating-ai.tsx",
                                    lineNumber: 200,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pulse/floating-ai.tsx",
                            lineNumber: 187,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: (e)=>{
                                e.preventDefault();
                                submitDraft();
                            },
                            className: "mx-2 my-2 flex items-center gap-1.5 rounded-[11px] p-1.5",
                            style: {
                                background: "var(--pulse-input-bg)",
                                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.10)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: inputRef,
                                    type: "text",
                                    value: draft,
                                    onChange: (e)=>setDraft(e.target.value),
                                    placeholder: tAssistant("placeholder"),
                                    "aria-label": tAssistant("placeholder"),
                                    className: "h-[34px] min-w-0 flex-1 rounded-[8px] px-3 text-[12px] outline-none transition focus:shadow-[0_0_0_3px_rgba(141,53,75,0.16)]",
                                    style: {
                                        background: "var(--pulse-input-field-bg)",
                                        border: "1px solid var(--pulse-input-field-border)",
                                        color: "var(--pulse-action-text)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/pulse/floating-ai.tsx",
                                    lineNumber: 254,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "aria-label": tAssistant("voice"),
                                    title: tAssistant("voice"),
                                    className: "grid size-[34px] shrink-0 place-items-center rounded-[8px] transition hover:scale-105",
                                    style: {
                                        background: "var(--pulse-input-field-bg)",
                                        border: "1px solid var(--pulse-input-field-border)",
                                        color: "var(--pulse-action-meta)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MicIcon, {}, void 0, false, {
                                        fileName: "[project]/components/pulse/floating-ai.tsx",
                                        lineNumber: 279,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/pulse/floating-ai.tsx",
                                    lineNumber: 268,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    "aria-label": tCommon("send"),
                                    disabled: draft.trim().length === 0,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("grid size-[34px] shrink-0 place-items-center rounded-[8px] text-white transition disabled:opacity-40 hover:translate-y-[-1px] active:translate-y-0"),
                                    style: {
                                        background: "linear-gradient(180deg, #9e4259 0%, #7a2b3f 100%)",
                                        boxShadow: "0 4px 14px rgba(141,53,75,0.36), 0 0 0 1px rgba(141,53,75,0.25), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.18)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SendIcon, {
                                        flip: isAr
                                    }, void 0, false, {
                                        fileName: "[project]/components/pulse/floating-ai.tsx",
                                        lineNumber: 294,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/pulse/floating-ai.tsx",
                                    lineNumber: 281,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pulse/floating-ai.tsx",
                            lineNumber: 242,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pulse/floating-ai.tsx",
                    lineNumber: 99,
                    columnNumber: 13
                }, this)
            }, "panel", false, {
                fileName: "[project]/components/pulse/floating-ai.tsx",
                lineNumber: 88,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen((v)=>!v),
                "aria-label": open ? tAssistant("close") : tAssistant("open"),
                "aria-expanded": open,
                className: "pulse-fab relative z-[1] grid size-[60px] place-items-center rounded-full transition hover:scale-[1.04] active:scale-[0.96]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "pulse-fab-glow"
                    }, void 0, false, {
                        fileName: "[project]/components/pulse/floating-ai.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "pulse-fab-ring pulse-fab-ring--1"
                    }, void 0, false, {
                        fileName: "[project]/components/pulse/floating-ai.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "pulse-fab-ring pulse-fab-ring--2"
                    }, void 0, false, {
                        fileName: "[project]/components/pulse/floating-ai.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/assets/pulse/Pulse - Red Circle Icon.svg",
                        alt: "",
                        width: 60,
                        height: 60,
                        priority: true,
                        className: "relative z-[1] block size-[60px]"
                    }, void 0, false, {
                        fileName: "[project]/components/pulse/floating-ai.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "pulse-fab-shine"
                    }, void 0, false, {
                        fileName: "[project]/components/pulse/floating-ai.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pulse/floating-ai.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/pulse/floating-ai.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function ActionTypeIcon({ page }) {
    const tone = page === "approvals" ? "approve" : page === "tasks" || page === "pulse" ? "delay" : page === "reports" ? "doc" : "risk";
    const tones = {
        approve: {
            bg: "linear-gradient(180deg, rgba(184,113,42,0.18), rgba(184,113,42,0.08))",
            ring: "rgba(184,113,42,0.28)",
            stroke: "#b8712a",
            path: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.5 6l2.5 2.5L10 3"
            }, void 0, false, {
                fileName: "[project]/components/pulse/floating-ai.tsx",
                lineNumber: 345,
                columnNumber: 13
            }, this)
        },
        risk: {
            bg: "linear-gradient(180deg, rgba(163,66,85,0.18), rgba(163,66,85,0.08))",
            ring: "rgba(163,66,85,0.28)",
            stroke: "#a34255",
            path: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 6,
                        cy: 6,
                        r: 4.8
                    }, void 0, false, {
                        fileName: "[project]/components/pulse/floating-ai.tsx",
                        lineNumber: 353,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 3.5v3M6 8.4v.5"
                    }, void 0, false, {
                        fileName: "[project]/components/pulse/floating-ai.tsx",
                        lineNumber: 354,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        },
        doc: {
            bg: "linear-gradient(180deg, rgba(62,99,158,0.16), rgba(62,99,158,0.06))",
            ring: "rgba(62,99,158,0.24)",
            stroke: "#3e639e",
            path: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: 2.5,
                        y: 1.8,
                        width: 7,
                        height: 8.4,
                        rx: 1
                    }, void 0, false, {
                        fileName: "[project]/components/pulse/floating-ai.tsx",
                        lineNumber: 364,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4.5 5h3M4.5 7h2"
                    }, void 0, false, {
                        fileName: "[project]/components/pulse/floating-ai.tsx",
                        lineNumber: 365,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        },
        delay: {
            bg: "linear-gradient(180deg, rgba(141,53,75,0.18), rgba(141,53,75,0.08))",
            ring: "rgba(141,53,75,0.30)",
            stroke: "#8d354b",
            path: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 6,
                        cy: 6,
                        r: 4.8
                    }, void 0, false, {
                        fileName: "[project]/components/pulse/floating-ai.tsx",
                        lineNumber: 375,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 3.4v2.8l1.6 1.6"
                    }, void 0, false, {
                        fileName: "[project]/components/pulse/floating-ai.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        }
    };
    const t = tones[tone];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": true,
        className: "grid size-[26px] shrink-0 place-items-center rounded-[7px]",
        style: {
            background: t.bg,
            boxShadow: `inset 0 0 0 1px ${t.ring}`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "11",
            height: "11",
            viewBox: "0 0 12 12",
            fill: "none",
            stroke: t.stroke,
            strokeWidth: 1.6,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: t.path
        }, void 0, false, {
            fileName: "[project]/components/pulse/floating-ai.tsx",
            lineNumber: 389,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/pulse/floating-ai.tsx",
        lineNumber: 384,
        columnNumber: 5
    }, this);
}
function SendIcon({ flip }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": true,
        style: flip ? {
            transform: "scaleX(-1)"
        } : undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 10 L17 3 L13 17 L10.5 11.5 L3 10 Z",
                fill: "white",
                stroke: "white",
                strokeWidth: 1.2,
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/pulse/floating-ai.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.5 11.5 L17 3",
                stroke: "rgba(0,0,0,0.18)",
                strokeWidth: 1,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/pulse/floating-ai.tsx",
                lineNumber: 422,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/pulse/floating-ai.tsx",
        lineNumber: 407,
        columnNumber: 5
    }, this);
}
function MicIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: 5,
                y: 1.6,
                width: 4,
                height: 7.4,
                rx: 2
            }, void 0, false, {
                fileName: "[project]/components/pulse/floating-ai.tsx",
                lineNumber: 440,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.6 7a4.4 4.4 0 0 0 8.8 0"
            }, void 0, false, {
                fileName: "[project]/components/pulse/floating-ai.tsx",
                lineNumber: 441,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 11.4v1.4"
            }, void 0, false, {
                fileName: "[project]/components/pulse/floating-ai.tsx",
                lineNumber: 442,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 12.8h4"
            }, void 0, false, {
                fileName: "[project]/components/pulse/floating-ai.tsx",
                lineNumber: 443,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/pulse/floating-ai.tsx",
        lineNumber: 429,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/skeleton/SkeletonI18nBridge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonI18nBridge",
    ()=>SkeletonI18nBridge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$NextIntlClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/shared/NextIntlClientProvider.js [app-ssr] (ecmascript) <export default as NextIntlClientProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pulse$2f$floating$2d$ai$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/pulse/floating-ai.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$locale$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/providers/locale-provider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SkeletonI18nBridge({ enMessages, arMessages, children }) {
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$locale$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const messages = locale === "ar" ? arMessages : enMessages;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$NextIntlClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__["NextIntlClientProvider"], {
        locale: locale,
        messages: messages,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pulse$2f$floating$2d$ai$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PulseFloatingAI"], {
                locale: locale
            }, void 0, false, {
                fileName: "[project]/components/skeleton/SkeletonI18nBridge.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/skeleton/SkeletonI18nBridge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0r67601._.js.map