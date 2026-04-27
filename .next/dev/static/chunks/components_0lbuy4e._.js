(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/skeleton/nav-links.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "skeletonAuthLinks",
    ()=>skeletonAuthLinks,
    "skeletonNavLinks",
    ()=>skeletonNavLinks,
    "skeletonPlatformViews",
    ()=>skeletonPlatformViews
]);
const skeletonNavLinks = [
    {
        key: "product",
        href: "/skeleton/product"
    },
    {
        key: "solutions",
        href: "/skeleton/solutions"
    },
    {
        key: "resources",
        href: "/skeleton/resources"
    },
    {
        key: "customers",
        href: "/skeleton/customers"
    },
    {
        key: "platform",
        href: "/skeleton/platform/source-of-truth"
    },
    {
        key: "addProject",
        href: "/skeleton/add-project/role"
    }
];
const skeletonAuthLinks = {
    signIn: "/skeleton/contact",
    signUp: "/skeleton/contact",
    requestDemo: "/skeleton/contact",
    seePlatform: "/skeleton/platform/source-of-truth"
};
const skeletonPlatformViews = [
    {
        key: "sourceOfTruth",
        href: "/skeleton/platform/source-of-truth"
    },
    {
        key: "consultant",
        href: "/skeleton/platform/consultant"
    },
    {
        key: "contractor",
        href: "/skeleton/platform/contractor"
    },
    {
        key: "owner",
        href: "/skeleton/platform/owner"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/providers/locale-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocaleProvider",
    ()=>LocaleProvider,
    "useLocale",
    ()=>useLocale,
    "useOptionalLocale",
    ()=>useOptionalLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
const LocaleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const STORAGE_KEY = "pulse-locale";
function LocaleProvider({ children }) {
    _s();
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocaleProvider.useEffect": ()=>{
            try {
                const stored = window.localStorage.getItem(STORAGE_KEY);
                if (stored === "en" || stored === "ar") {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])({
                        "LocaleProvider.useEffect": ()=>setLocaleState(stored)
                    }["LocaleProvider.useEffect"]);
                }
            } catch  {}
        }
    }["LocaleProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocaleProvider.useEffect": ()=>{
            if (typeof document === "undefined") return;
            document.documentElement.lang = locale;
            document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
            try {
                window.localStorage.setItem(STORAGE_KEY, locale);
            } catch  {}
        }
    }["LocaleProvider.useEffect"], [
        locale
    ]);
    const setLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LocaleProvider.useCallback[setLocale]": (l)=>setLocaleState(l)
    }["LocaleProvider.useCallback[setLocale]"], []);
    const toggleLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LocaleProvider.useCallback[toggleLocale]": ()=>setLocaleState({
                "LocaleProvider.useCallback[toggleLocale]": (prev)=>prev === "en" ? "ar" : "en"
            }["LocaleProvider.useCallback[toggleLocale]"])
    }["LocaleProvider.useCallback[toggleLocale]"], []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LocaleProvider.useMemo[value]": ()=>({
                locale,
                toggleLocale,
                setLocale,
                dir: locale === "ar" ? "rtl" : "ltr"
            })
    }["LocaleProvider.useMemo[value]"], [
        locale,
        toggleLocale,
        setLocale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LocaleContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/providers/locale-provider.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(LocaleProvider, "ITFqhbLTEt/B/Q9l2ccNpaZboPA=");
_c = LocaleProvider;
function useLocale() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LocaleContext);
    if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
    return ctx;
}
_s1(useLocale, "/dMy7t63NXD4eYACoT93CePwGrg=");
function useOptionalLocale() {
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LocaleContext);
}
_s2(useOptionalLocale, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "LocaleProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/PulseButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortalArrow",
    ()=>PortalArrow,
    "PulseButton",
    ()=>PulseButton,
    "PulseIcon",
    ()=>PulseIcon,
    "PulseLinkButton",
    ()=>PulseLinkButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-sans, 'Raleway', sans-serif)",
    fontSize: 12.5,
    fontWeight: 600,
    letterSpacing: "0.01em",
    lineHeight: 1,
    cursor: "pointer",
    border: "1px solid transparent",
    whiteSpace: "nowrap",
    position: "relative",
    textDecoration: "none",
    transition: "background 220ms cubic-bezier(0.22, 1, 0.36, 1), border-color 220ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1), transform 140ms cubic-bezier(0.22, 1, 0.36, 1), color 200ms ease"
};
const sizeStyle = {
    md: {
        height: 38,
        padding: "0 18px",
        borderRadius: 9,
        fontSize: 12.5
    },
    sm: {
        height: 30,
        padding: "0 13px",
        borderRadius: 7,
        fontSize: 11.5,
        gap: 6
    }
};
const variantStyle = {
    primary: {
        background: "linear-gradient(180deg, #9a3e55 0%, #7a2b3f 100%)",
        color: "#fff",
        borderColor: "rgba(0,0,0,0.14)",
        boxShadow: "0 1px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(0,0,0,0.24) inset, 0 1px 2px rgba(141,53,75,0.22), 0 6px 16px -4px rgba(141,53,75,0.32)"
    },
    secondary: {
        background: "linear-gradient(180deg, #ffffff 0%, #f7f1ec 100%)",
        color: "#201d1a",
        borderColor: "rgba(92,69,69,0.22)",
        boxShadow: "0 1px 0 rgba(255,255,255,1) inset, 0 -1px 0 rgba(92,69,69,0.06) inset, 0 1px 2px rgba(32,29,26,0.05), 0 4px 10px -2px rgba(32,29,26,0.08)"
    },
    outline: {
        background: "#fdfbf9",
        color: "#8d354b",
        borderColor: "rgba(141,53,75,0.32)",
        boxShadow: "0 1px 0 rgba(255,255,255,1) inset, 0 1px 2px rgba(141,53,75,0.08), 0 3px 8px -2px rgba(141,53,75,0.10)"
    },
    tertiary: {
        background: "linear-gradient(180deg, rgba(255,255,255,0.62) 0%, rgba(247,241,236,0.82) 100%)",
        color: "#453c3a",
        borderColor: "rgba(92,69,69,0.16)",
        boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 1px 1px rgba(32,29,26,0.03)"
    },
    destructive: {
        background: "linear-gradient(180deg, #ffffff 0%, #fbf4f5 100%)",
        color: "#a34255",
        borderColor: "rgba(163,66,85,0.30)",
        boxShadow: "0 1px 0 rgba(255,255,255,1) inset, 0 1px 2px rgba(163,66,85,0.08), 0 4px 10px -2px rgba(163,66,85,0.10)"
    },
    darkPrimary: {
        background: "linear-gradient(180deg, #a14260 0%, #7a2b3f 100%)",
        color: "#fff",
        borderColor: "rgba(0,0,0,0.26)",
        boxShadow: "0 1px 0 rgba(255,255,255,0.22) inset, 0 -1px 0 rgba(0,0,0,0.28) inset, 0 2px 4px rgba(0,0,0,0.28), 0 10px 24px -6px rgba(141,53,75,0.50), 0 0 24px rgba(207,89,118,0.14)"
    },
    darkSecondary: {
        background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        color: "#eeebe8",
        borderColor: "rgba(238,235,232,0.16)",
        boxShadow: "0 1px 0 rgba(255,255,255,0.06) inset, 0 -1px 0 rgba(0,0,0,0.24) inset, 0 2px 6px rgba(0,0,0,0.18)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)"
    },
    darkTertiary: {
        background: "transparent",
        color: "rgba(238,235,232,0.60)",
        borderColor: "transparent",
        padding: "0 14px"
    }
};
function getHoverClass(v) {
    return `pb-${v}`;
}
const PulseButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = function PulseButton({ variant = "primary", size = "md", icon, trailingIcon, children, className, style, ...props }, ref) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: `${getHoverClass(variant)} ${className ?? ""}`,
        style: {
            ...baseStyle,
            ...sizeStyle[size],
            ...variantStyle[variant],
            ...style
        },
        ...props,
        children: [
            icon,
            children,
            trailingIcon
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/PulseButton.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
});
_c1 = PulseButton;
function PulseLinkButton({ variant = "primary", size = "md", icon, trailingIcon, children, className, href, target, rel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        target: target,
        rel: rel,
        className: `${getHoverClass(variant)} ${className ?? ""}`,
        style: {
            ...baseStyle,
            ...sizeStyle[size],
            ...variantStyle[variant]
        },
        children: [
            icon,
            children,
            trailingIcon
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/PulseButton.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_c2 = PulseLinkButton;
function PulseIcon({ size = 13, color = "rgba(255,255,255,0.78)" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 13 13",
        fill: "none",
        stroke: color,
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 6.5L2.8 6.5L4.2 3.2L5.8 10L7.2 4.8L8.3 6.5L12 6.5"
        }, void 0, false, {
            fileName: "[project]/components/ui/PulseButton.tsx",
            lineNumber: 166,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/PulseButton.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
_c3 = PulseIcon;
function PortalArrow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "pb-arrow",
        style: {
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "rgba(141,53,75,0.10)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 220ms, transform 220ms cubic-bezier(0.22, 1, 0.36, 1)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: 10,
            height: 10,
            viewBox: "0 0 10 10",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.5 5H8M5.5 2L8 5L5.5 8",
                stroke: "#8d354b",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/ui/PulseButton.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/PulseButton.tsx",
            lineNumber: 187,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/PulseButton.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
_c4 = PortalArrow;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "PulseButton$forwardRef");
__turbopack_context__.k.register(_c1, "PulseButton");
__turbopack_context__.k.register(_c2, "PulseLinkButton");
__turbopack_context__.k.register(_c3, "PulseIcon");
__turbopack_context__.k.register(_c4, "PortalArrow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/skeleton/product/SkeletonHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonHeader",
    ()=>SkeletonHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$theme$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/providers/theme-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$skeleton$2f$nav$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/skeleton/nav-links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$locale$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/providers/locale-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PulseButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/PulseButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function SkeletonHeader({ mode = "skeleton" } = {}) {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() ?? "";
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$theme$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const skeletonCtx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$locale$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptionalLocale"])();
    const intlLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("skeleton.nav");
    const isProduction = mode === "production";
    const locale = isProduction ? intlLocale : skeletonCtx?.locale ?? intlLocale;
    const homeHref = isProduction ? `/${locale}` : "/skeleton/product";
    const toggleLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SkeletonHeader.useCallback[toggleLocale]": ()=>{
            if (isProduction) {
                const next = locale === "en" ? "ar" : "en";
                const stripped = pathname.replace(/^\/(en|ar)(?=\/|$)/, "") || "/";
                const target = stripped === "/" ? `/${next}` : `/${next}${stripped}`;
                router.push(target);
                return;
            }
            skeletonCtx?.toggleLocale();
        }
    }["SkeletonHeader.useCallback[toggleLocale]"], [
        isProduction,
        locale,
        pathname,
        router,
        skeletonCtx
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SkeletonHeader.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])({
                "SkeletonHeader.useEffect": ()=>setMounted(true)
            }["SkeletonHeader.useEffect"]);
        }
    }["SkeletonHeader.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SkeletonHeader.useEffect": ()=>{
            const onScroll = {
                "SkeletonHeader.useEffect.onScroll": ()=>setScrolled(window.scrollY > 24)
            }["SkeletonHeader.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "SkeletonHeader.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["SkeletonHeader.useEffect"];
        }
    }["SkeletonHeader.useEffect"], []);
    const isDark = theme === "dark";
    const isActive = (href)=>{
        if (href === "/skeleton/product") {
            // Production landing (`/en`, `/ar`) and skeleton product both map to
            // the "Product" nav entry.
            if (isProduction) return pathname === `/${locale}` || pathname === "/";
            return pathname === "/" || pathname.startsWith("/skeleton/product");
        }
        return pathname.startsWith(href);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        "data-scrolled": scrolled ? "true" : "false",
        className: [
            "skeleton-header sticky top-0 z-40 w-full",
            "border-b border-neutral-900/10 dark:border-neutral-100/10",
            "bg-[rgba(255,255,255,0.86)] dark:bg-[rgba(10,8,8,0.88)]",
            "[backdrop-filter:blur(10px)_saturate(140%)]",
            "[-webkit-backdrop-filter:blur(10px)_saturate(140%)]",
            "transition-shadow",
            scrolled ? "shadow-[0_1px_2px_rgba(32,29,26,0.06)] dark:shadow-[0_1px_0_rgba(0,0,0,0.4)]" : "shadow-none"
        ].join(" "),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: homeHref,
                    className: "flex items-center gap-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/pulse/Pulse%20-%20Red%20Rec%20Icon.svg",
                            alt: "",
                            width: 28,
                            height: 28,
                            className: "h-7 w-7",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col leading-none gap-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold tracking-wide text-neutral-900 dark:text-[#f5f0ed] bidi-isolate",
                                    children: [
                                        "Pulse ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#8d354b]",
                                            children: "AI"
                                        }, void 0, false, {
                                            fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                                            lineNumber: 99,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-500 leading-tight",
                                    children: t("intelligence")
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "relative hidden items-center gap-1 md:flex",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$skeleton$2f$nav$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skeletonNavLinks"].map((link)=>{
                        const active = isActive(link.href);
                        const navHref = isProduction && link.href === "/skeleton/product" ? homeHref : link.href;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: navHref,
                            className: `relative rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${active ? "text-[#8d354b] dark:text-[#e08aa0]" : "text-neutral-800 hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white"}`,
                            children: [
                                t(link.key),
                                active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    layoutId: "nav-active-pill",
                                    className: "absolute inset-0 -z-10 rounded-md",
                                    style: {
                                        background: "linear-gradient(135deg, rgba(141,53,75,0.12) 0%, rgba(141,53,75,0.05) 100%)",
                                        border: "1px solid rgba(141,53,75,0.2)"
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                                    lineNumber: 125,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, link.key, true, {
                            fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                            lineNumber: 114,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setTheme(isDark ? "light" : "dark"),
                            "aria-label": "Toggle theme",
                            className: "hidden h-9 w-9 items-center justify-center rounded-md border border-neutral-900/15 bg-white/60 text-neutral-700 transition-colors hover:border-[#8d354b]/40 hover:text-[#8d354b] sm:flex dark:border-neutral-100/15 dark:bg-white/[0.04] dark:text-neutral-200 dark:hover:text-[#e08aa0]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: {
                                    rotate: -45,
                                    opacity: 0,
                                    scale: 0.6
                                },
                                animate: {
                                    rotate: 0,
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    duration: 0.22
                                },
                                className: "flex",
                                children: mounted && isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                                        lineNumber: 159,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                                    lineNumber: 158,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                                            lineNumber: 163,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                                        }, void 0, false, {
                                            fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, this)
                            }, mounted ? isDark ? "moon" : "sun" : "idle", false, {
                                fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: toggleLocale,
                            "aria-label": "Switch language",
                            className: "hidden h-9 w-9 items-center justify-center rounded-md border border-neutral-900/15 bg-white/60 text-[10px] font-bold tracking-wider text-neutral-700 transition-colors hover:border-[#8d354b]/40 hover:text-[#8d354b] sm:flex dark:border-neutral-100/15 dark:bg-white/[0.04] dark:text-neutral-200 dark:hover:text-[#e08aa0]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                suppressHydrationWarning: true,
                                children: locale.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$skeleton$2f$nav$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skeletonAuthLinks"].signIn,
                            className: "hidden text-sm font-medium text-neutral-800 transition-colors hover:text-neutral-950 sm:inline dark:text-neutral-200 dark:hover:text-white",
                            children: t("signIn")
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PulseButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PulseLinkButton"], {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$skeleton$2f$nav$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skeletonAuthLinks"].requestDemo,
                            variant: "primary",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PulseButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PulseIcon"], {}, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                                lineNumber: 191,
                                columnNumber: 19
                            }, this),
                            children: t("requestDemo")
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/skeleton/product/SkeletonHeader.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(SkeletonHeader, "F+CfohQ/O1U2dN0S9bG7QC0DPTk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$theme$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$locale$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptionalLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = SkeletonHeader;
var _c;
__turbopack_context__.k.register(_c, "SkeletonHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/skeleton/product/SkeletonHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonHero",
    ()=>SkeletonHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$skeleton$2f$nav$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/skeleton/nav-links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PulseButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/PulseButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SkeletonHero() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("skeleton.hero");
    const headline = [
        t("h1Line1"),
        t("h1Line2"),
        t("h1Line3")
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-[#faf8f6] dark:bg-[#0e0c0c]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 bg-cover bg-center opacity-95 dark:opacity-95 dark:invert dark:hue-rotate-180 rtl:[transform:scaleX(-1)]",
                style: {
                    backgroundImage: 'url("/assets/cards%20background/77.jpg")'
                }
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 bg-[#faf8f6]/35 dark:bg-[#0e0c0c]/40"
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0",
                style: {
                    background: "radial-gradient(ellipse 70% 55% at 60% 38%, rgba(141,53,75,0.08) 0%, rgba(141,53,75,0.03) 38%, transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 lg:grid-cols-[5fr_6fr] lg:gap-14 lg:py-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex flex-col justify-center",
                        initial: {
                            opacity: 0,
                            y: 32
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6,
                            ease: [
                                0.25,
                                0.46,
                                0.45,
                                0.94
                            ]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                className: "mb-6 inline-flex w-fit items-center rounded-full border border-[#8d354b]/30 bg-[#8d354b]/[0.08] px-3 py-1 text-xs font-medium text-[#8d354b] dark:text-[#e08aa0]",
                                initial: {
                                    opacity: 0,
                                    scale: 0.9
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    delay: 0.1,
                                    duration: 0.4
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-1.5 h-1.5 w-1.5 rounded-full bg-[#8d354b]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    t("badge")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-neutral-900 dark:text-[#f5f0ed] sm:text-5xl lg:text-[3.4rem]",
                                children: headline.map((line, i)=>{
                                    const isCore = i === headline.length - 1;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        className: `block ${isCore ? "font-bold text-[#8d354b] dark:text-[#e08aa0]" : ""}`,
                                        initial: {
                                            opacity: 0,
                                            y: 24
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.2 + i * 0.1,
                                            duration: 0.55,
                                            ease: [
                                                0.25,
                                                0.46,
                                                0.45,
                                                0.94
                                            ]
                                        },
                                        children: line
                                    }, line, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                className: "mt-6 max-w-xl text-[15px] leading-[1.65] text-neutral-700 dark:text-neutral-300",
                                initial: {
                                    opacity: 0,
                                    y: 16
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.55,
                                    duration: 0.5
                                },
                                children: t("subtitle")
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "mt-7 flex flex-wrap items-center gap-2.5",
                                initial: {
                                    opacity: 0,
                                    y: 12
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.68,
                                    duration: 0.45
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PulseButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PulseLinkButton"], {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$skeleton$2f$nav$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skeletonAuthLinks"].requestDemo,
                                        variant: "primary",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PulseButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PulseIcon"], {}, void 0, false, {
                                            fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                                            lineNumber: 96,
                                            columnNumber: 21
                                        }, this),
                                        children: t("ctaPrimary")
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PulseButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PulseLinkButton"], {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$skeleton$2f$nav$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skeletonAuthLinks"].seePlatform,
                                        variant: "secondary",
                                        children: t("ctaSecondary")
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "mt-9 flex items-center gap-3.5",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.85,
                                    duration: 0.5
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex -space-x-2",
                                        children: [
                                            "O",
                                            "C",
                                            "K"
                                        ].map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-7 w-7 items-center justify-center rounded-full bg-neutral-800 text-[10px] font-semibold tracking-wide text-white ring-2 ring-[#faf8f6] dark:bg-neutral-700 dark:ring-[#0e0c0c]",
                                                style: {
                                                    zIndex: 3 - i
                                                },
                                                children: l
                                            }, l, false, {
                                                fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-neutral-600 dark:text-neutral-400",
                                        children: t("trustedBy")
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "relative flex items-center justify-center",
                        initial: {
                            opacity: 0,
                            x: 24
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: 0.3,
                            duration: 0.7,
                            ease: [
                                0.25,
                                0.46,
                                0.45,
                                0.94
                            ]
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: "pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[88%] w-[92%] -translate-x-1/2 -translate-y-1/2",
                            style: {
                                background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(141,53,75,0.18) 0%, rgba(141,53,75,0.06) 38%, transparent 72%)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/skeleton/product/SkeletonHero.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(SkeletonHero, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = SkeletonHero;
var _c;
__turbopack_context__.k.register(_c, "SkeletonHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/skeleton/product/SkeletonProblem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonProblem",
    ()=>SkeletonProblem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/* ─── Wireframe illustrations for each problem ─────────── */ function FragmentedRealityWireframe({ ownerLabel, consultantLabel, contractorLabel }) {
    // Three disconnected document/file panels with conflicting numbers
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 220 100",
        className: "h-full w-full",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "6",
                        y: "10",
                        width: "60",
                        height: "78",
                        rx: "4",
                        stroke: "#8d354b",
                        strokeOpacity: "0.45",
                        strokeWidth: "1.2",
                        fill: "rgba(255,251,248,0.55)"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "14",
                        y1: "22",
                        x2: "50",
                        y2: "22",
                        stroke: "#8d354b",
                        strokeOpacity: "0.35",
                        strokeWidth: "1.2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "14",
                        y1: "30",
                        x2: "42",
                        y2: "30",
                        stroke: "#8d354b",
                        strokeOpacity: "0.18",
                        strokeWidth: "1",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "14",
                        y: "56",
                        fontSize: "11",
                        fontWeight: "700",
                        fill: "#8d354b",
                        children: "847M"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "14",
                        y: "72",
                        fontSize: "6.5",
                        fill: "#8d354b",
                        fillOpacity: "0.6",
                        letterSpacing: "0.4",
                        children: ownerLabel
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "80",
                        y: "10",
                        width: "60",
                        height: "78",
                        rx: "4",
                        stroke: "#8d354b",
                        strokeOpacity: "0.45",
                        strokeWidth: "1.2",
                        fill: "rgba(255,251,248,0.55)"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "88",
                        y1: "22",
                        x2: "124",
                        y2: "22",
                        stroke: "#8d354b",
                        strokeOpacity: "0.35",
                        strokeWidth: "1.2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "88",
                        y1: "30",
                        x2: "116",
                        y2: "30",
                        stroke: "#8d354b",
                        strokeOpacity: "0.18",
                        strokeWidth: "1",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "88",
                        y: "56",
                        fontSize: "11",
                        fontWeight: "700",
                        fill: "#8d354b",
                        children: "820M"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "88",
                        y: "72",
                        fontSize: "6.5",
                        fill: "#8d354b",
                        fillOpacity: "0.6",
                        letterSpacing: "0.4",
                        children: consultantLabel
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "154",
                        y: "10",
                        width: "60",
                        height: "78",
                        rx: "4",
                        stroke: "#8d354b",
                        strokeOpacity: "0.45",
                        strokeWidth: "1.2",
                        fill: "rgba(255,251,248,0.55)"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "162",
                        y1: "22",
                        x2: "198",
                        y2: "22",
                        stroke: "#8d354b",
                        strokeOpacity: "0.35",
                        strokeWidth: "1.2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "162",
                        y1: "30",
                        x2: "190",
                        y2: "30",
                        stroke: "#8d354b",
                        strokeOpacity: "0.18",
                        strokeWidth: "1",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "162",
                        y: "56",
                        fontSize: "11",
                        fontWeight: "700",
                        fill: "#8d354b",
                        children: "863M"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "162",
                        y: "72",
                        fontSize: "6.5",
                        fill: "#8d354b",
                        fillOpacity: "0.6",
                        letterSpacing: "0.4",
                        children: contractorLabel
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "66",
                y1: "49",
                x2: "80",
                y2: "49",
                stroke: "#8d354b",
                strokeOpacity: "0.25",
                strokeWidth: "1",
                strokeDasharray: "2 3"
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "140",
                y1: "49",
                x2: "154",
                y2: "49",
                stroke: "#8d354b",
                strokeOpacity: "0.25",
                strokeWidth: "1",
                strokeDasharray: "2 3"
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = FragmentedRealityWireframe;
function InvisibleRiskWireframe() {
    // Email/inbox layout with a hidden risk buried at the bottom
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 220 100",
        className: "h-full w-full",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "6",
                width: "208",
                height: "86",
                rx: "5",
                stroke: "#8d354b",
                strokeOpacity: "0.4",
                strokeWidth: "1.2",
                fill: "rgba(255,251,248,0.45)"
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            [
                18,
                32,
                46,
                60,
                74
            ].map((y, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "16",
                            cy: y,
                            r: "3.5",
                            fill: "#8d354b",
                            fillOpacity: i === 4 ? 0.9 : 0.12
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "26",
                            y1: y,
                            x2: "80",
                            y2: y,
                            stroke: "#8d354b",
                            strokeOpacity: i === 4 ? 0.8 : 0.3,
                            strokeWidth: "1.2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "86",
                            y1: y,
                            x2: i === 4 ? 200 : 168 - i * 8,
                            y2: y,
                            stroke: "#8d354b",
                            strokeOpacity: i === 4 ? 0.55 : 0.18,
                            strokeWidth: "1",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, y, true, {
                    fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "10",
                y: "69",
                width: "200",
                height: "11",
                rx: "2",
                fill: "#8d354b",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(196, 70)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0 6L4 -1L8 6Z",
                        stroke: "#8d354b",
                        strokeWidth: "1.2",
                        fill: "#fce8eb",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "4",
                        y1: "1.2",
                        x2: "4",
                        y2: "3.5",
                        stroke: "#8d354b",
                        strokeWidth: "1",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "4",
                        cy: "4.8",
                        r: "0.7",
                        fill: "#8d354b"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c1 = InvisibleRiskWireframe;
function CostlyReworkWireframe() {
    // Bar chart showing budget overrun + downward trend
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 220 100",
        className: "h-full w-full",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "14",
                y1: "84",
                x2: "208",
                y2: "84",
                stroke: "#8d354b",
                strokeOpacity: "0.3",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "14",
                y1: "14",
                x2: "14",
                y2: "84",
                stroke: "#8d354b",
                strokeOpacity: "0.3",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            [
                {
                    x: 26,
                    planned: 30,
                    actual: 32
                },
                {
                    x: 60,
                    planned: 36,
                    actual: 44
                },
                {
                    x: 94,
                    planned: 42,
                    actual: 56
                },
                {
                    x: 128,
                    planned: 48,
                    actual: 64
                },
                {
                    x: 162,
                    planned: 50,
                    actual: 68
                }
            ].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: b.x,
                            y: 84 - b.planned,
                            width: "10",
                            height: b.planned,
                            rx: "1",
                            fill: "#8d354b",
                            fillOpacity: "0.18"
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: b.x + 12,
                            y: 84 - b.actual,
                            width: "10",
                            height: b.actual,
                            rx: "1",
                            fill: "#8d354b",
                            fillOpacity: "0.7"
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, b.x, true, {
                    fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 32 56 L 66 44 L 100 30 L 134 22 L 168 18",
                stroke: "#8d354b",
                strokeWidth: "1.4",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeDasharray: "3 2"
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(186, 22)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0 8L0 0M0 0L-3 3M0 0L3 3",
                    stroke: "#8d354b",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none"
                }, void 0, false, {
                    fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "20",
                cy: "92",
                r: "2",
                fill: "#8d354b",
                fillOpacity: "0.18"
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "60",
                cy: "92",
                r: "2",
                fill: "#8d354b",
                fillOpacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_c2 = CostlyReworkWireframe;
function SkeletonProblem() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-60px"
    });
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("skeleton.problem");
    const ownerLabel = t("wireframe.owner");
    const consultantLabel = t("wireframe.consultant");
    const contractorLabel = t("wireframe.contractor");
    const problems = [
        {
            n: "01",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "2",
                        y: "3",
                        width: "7",
                        height: "18",
                        rx: "1"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "9",
                        y: "8",
                        width: "7",
                        height: "13",
                        rx: "1"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "16",
                        y: "13",
                        width: "7",
                        height: "8",
                        rx: "1"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this),
            title: t("card1Title"),
            body: t("card1Body"),
            accent: "rgba(141,53,75,0.1)",
            border: "rgba(141,53,75,0.25)",
            Wireframe: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FragmentedRealityWireframe, {
                    ownerLabel: ownerLabel,
                    consultantLabel: consultantLabel,
                    contractorLabel: contractorLabel
                }, void 0, false, {
                    fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
        },
        {
            n: "02",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "12",
                        y1: "9",
                        x2: "12",
                        y2: "13"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "12",
                        y1: "17",
                        x2: "12.01",
                        y2: "17"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this),
            title: t("card2Title"),
            body: t("card2Body"),
            accent: "rgba(141,53,75,0.06)",
            border: "rgba(141,53,75,0.15)",
            Wireframe: InvisibleRiskWireframe
        },
        {
            n: "03",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "12 6 12 12 16 14"
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, this),
            title: t("card3Title"),
            body: t("card3Body"),
            accent: "rgba(141,53,75,0.04)",
            border: "rgba(141,53,75,0.1)",
            Wireframe: CostlyReworkWireframe
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0e0c0c]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6 py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-60px"
                    },
                    transition: {
                        duration: 0.55
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs uppercase tracking-widest text-[#8d354b] font-semibold",
                            children: t("eyebrow")
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 max-w-3xl text-3xl font-semibold leading-tight text-neutral-900 dark:text-[#f5f0ed] sm:text-4xl",
                            children: [
                                t("titleLead"),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#8d354b]",
                                    children: t("titleAccent")
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                t("titleTrail")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400",
                            children: t("body")
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: "mt-12 grid grid-cols-1 gap-5 md:grid-cols-3",
                    children: problems.map((p, i)=>{
                        const { Wireframe } = p;
                        const cardBgImages = [
                            "/assets/cards%20background/3.png",
                            "/assets/cards%20background/5.png",
                            "/assets/cards%20background/6.png"
                        ];
                        const cardBg = cardBgImages[i];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            animate: inView ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                delay: i * 0.15,
                                duration: 0.55,
                                ease: [
                                    0.25,
                                    0.46,
                                    0.45,
                                    0.94
                                ]
                            },
                            whileHover: {
                                y: -4,
                                boxShadow: "0 12px 32px -8px rgba(141,53,75,0.18)",
                                borderColor: "rgba(141,53,75,0.35)"
                            },
                            className: "group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-7 dark:border-neutral-800 dark:bg-neutral-950",
                            style: {
                                transition: "border-color 0.2s, box-shadow 0.2s"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-hidden": true,
                                    className: "pointer-events-none absolute inset-0 bg-cover bg-center dark:invert dark:hue-rotate-180",
                                    style: {
                                        backgroundImage: `url("${cardBg}")`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                                    lineNumber: 231,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-hidden": true,
                                    className: "pointer-events-none absolute inset-0 bg-white/82 dark:bg-black/68"
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                                    lineNumber: 236,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                                    style: {
                                        background: "#8d354b"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                                    lineNumber: 242,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative mb-4 block font-mono text-[11px] font-semibold tracking-[0.15em] text-[#8d354b]/60",
                                    children: p.n
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                                    lineNumber: 248,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mb-5 overflow-hidden rounded-xl border bg-gradient-to-b from-[#fdfaf8] to-[#f8eef0] dark:from-[#1c1416] dark:to-[#1a0e13]",
                                    style: {
                                        borderColor: p.border,
                                        height: 200
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wireframe, {}, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                                        lineNumber: 260,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                                    lineNumber: 253,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex items-center gap-3 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-[#8d354b]",
                                            style: {
                                                background: p.accent,
                                                border: `1px solid ${p.border}`
                                            },
                                            children: p.icon
                                        }, void 0, false, {
                                            fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                                            lineNumber: 265,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-semibold text-neutral-900 dark:text-[#f5f0ed]",
                                            children: p.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                                            lineNumber: 271,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                                    lineNumber: 264,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "relative text-sm leading-relaxed text-neutral-600 dark:text-neutral-400",
                                    children: p.body
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                                    lineNumber: 276,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, p.n, true, {
                            fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                            lineNumber: 213,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
            lineNumber: 183,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/skeleton/product/SkeletonProblem.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
_s(SkeletonProblem, "ZoYfjE1Lkq+2TkuNqUmwgfXKrpE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c3 = SkeletonProblem;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "FragmentedRealityWireframe");
__turbopack_context__.k.register(_c1, "InvisibleRiskWireframe");
__turbopack_context__.k.register(_c2, "CostlyReworkWireframe");
__turbopack_context__.k.register(_c3, "SkeletonProblem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/skeleton/product/SkeletonTrustedLogos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonTrustedLogos",
    ()=>SkeletonTrustedLogos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const logos = [
    {
        label: "ORA",
        src: "/assets/logos/ora.svg",
        imgClass: "max-h-6"
    },
    {
        label: "Dubai Holding",
        src: "/assets/logos/dubai-holding.svg",
        imgClass: ""
    },
    {
        label: "Mubadala",
        src: "/assets/logos/mubadala.svg",
        imgClass: ""
    },
    {
        label: "ADNOC",
        src: "/assets/logos/adnoc.svg",
        imgClass: ""
    },
    {
        label: "Dubai Municipality",
        src: "/assets/logos/dm.svg",
        imgClass: ""
    },
    {
        label: "Aldar",
        src: "/assets/logos/aldar.svg",
        imgClass: ""
    },
    {
        label: "Emaar",
        src: "/assets/logos/emaar.svg",
        imgClass: ""
    },
    {
        label: "Nakheel",
        src: "/assets/logos/nakheel.svg",
        imgClass: ""
    },
    {
        label: "Sobha",
        src: "/assets/logos/sobha.svg",
        imgClass: ""
    },
    {
        label: "ADCB",
        src: "/assets/logos/adcb.svg",
        imgClass: ""
    }
];
function SkeletonTrustedLogos() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("skeleton.trustedLogos");
    const marqueeLogos = [
        ...logos,
        ...logos
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "overflow-hidden border-b border-border bg-card",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-xs uppercase tracking-widest text-muted-foreground",
                    children: t("label")
                }, void 0, false, {
                    fileName: "[project]/components/skeleton/product/SkeletonTrustedLogos.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-7 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo-marquee-track flex w-max items-center gap-12",
                        children: marqueeLogos.map((logo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "logo-strip-item flex h-12 w-32 shrink-0 items-center justify-center transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: logo.src,
                                    alt: logo.label,
                                    width: 128,
                                    height: 48,
                                    className: `w-auto object-contain ${logo.imgClass || "max-h-10"}`
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonTrustedLogos.tsx",
                                    lineNumber: 36,
                                    columnNumber: 17
                                }, this)
                            }, `${logo.label}-${index}`, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonTrustedLogos.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonTrustedLogos.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/skeleton/product/SkeletonTrustedLogos.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          .logo-marquee-track {
            animation: logo-marquee 28s linear infinite;
          }

          /* Light mode: keep logos neutral with subtle opacity. */
          .logo-strip-item {
            opacity: 0.72;
            filter: grayscale(1);
          }
          .logo-strip-item:hover {
            opacity: 1;
            filter: grayscale(0);
          }
          /* Dark mode: invert dark logos to white monochrome via CSS treatment.
             We never mirror or flip the actual artwork — only its luminance. */
          :is(.dark) .logo-strip-item {
            opacity: 0.7;
            filter: brightness(0) invert(1);
          }
          :is(.dark) .logo-strip-item:hover {
            opacity: 1;
            filter: brightness(0) invert(1);
          }

          @keyframes logo-marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          /* RTL: reverse marquee direction so the row appears to move
             with the natural reading flow. */
          [dir="rtl"] .logo-marquee-track {
            animation-direction: reverse;
          }
          @media (prefers-reduced-motion: reduce) {
            .logo-marquee-track { animation: none; }
          }
        `
                }, void 0, false, {
                    fileName: "[project]/components/skeleton/product/SkeletonTrustedLogos.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/skeleton/product/SkeletonTrustedLogos.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/skeleton/product/SkeletonTrustedLogos.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(SkeletonTrustedLogos, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = SkeletonTrustedLogos;
var _c;
__turbopack_context__.k.register(_c, "SkeletonTrustedLogos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/TiltCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TiltCard",
    ()=>TiltCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TiltCard({ children, className = "", tiltFactor = 14, perspective = 1000, glareIntensity = 0.35, glareSize = 75, hoverScale = 1.04, transitionDuration = 0.2, borderRadius = 16 }) {
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tilt, setTilt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [mouse, setMouse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 50
    });
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TiltCard.useCallback[handleMouseMove]": (e)=>{
            if (!cardRef.current || !isHovered) return;
            const rect = cardRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 100;
            setMouse({
                x: 50 + x / 2,
                y: 50 + y / 2
            });
            setTilt({
                x: -(y / 50) * tiltFactor,
                y: x / 50 * tiltFactor
            });
        }
    }["TiltCard.useCallback[handleMouseMove]"], [
        isHovered,
        tiltFactor
    ]);
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TiltCard.useCallback[handleMouseEnter]": ()=>setIsHovered(true)
    }["TiltCard.useCallback[handleMouseEnter]"], []);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TiltCard.useCallback[handleMouseLeave]": ()=>{
            setIsHovered(false);
            setTilt({
                x: 0,
                y: 0
            });
            setMouse({
                x: 50,
                y: 50
            });
        }
    }["TiltCard.useCallback[handleMouseLeave]"], []);
    const glareStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TiltCard.useMemo[glareStyle]": ()=>({
                background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(255,255,255,${isHovered ? glareIntensity : 0}) 0%, rgba(255,255,255,0) ${glareSize}%)`,
                borderRadius
            })
    }["TiltCard.useMemo[glareStyle]"], [
        mouse.x,
        mouse.y,
        isHovered,
        glareIntensity,
        glareSize,
        borderRadius
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            perspective: `${perspective}px`,
            borderRadius,
            height: "100%",
            display: "flex",
            flexDirection: "column"
        },
        className: `cursor-pointer ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: cardRef,
            style: {
                borderRadius,
                transformStyle: "preserve-3d",
                position: "relative",
                width: "100%",
                flex: 1,
                display: "flex",
                flexDirection: "column"
            },
            animate: {
                rotateX: tilt.x,
                rotateY: tilt.y,
                scale: isHovered ? hoverScale : 1
            },
            transition: {
                duration: transitionDuration,
                ease: "easeOut"
            },
            onMouseMove: handleMouseMove,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        position: "absolute",
                        inset: 0,
                        zIndex: 10,
                        pointerEvents: "none",
                        ...glareStyle
                    },
                    animate: {
                        opacity: isHovered ? 1 : 0
                    },
                    transition: {
                        duration: transitionDuration
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ui/TiltCard.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/TiltCard.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/TiltCard.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(TiltCard, "DBhCWrEn2W21iwVIihol9AjSxA4=");
_c = TiltCard;
var _c;
__turbopack_context__.k.register(_c, "TiltCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/skeleton/product/SkeletonRolePerspectives.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonRolePerspectives",
    ()=>SkeletonRolePerspectives
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$TiltCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/TiltCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PulseButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/PulseButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function OwnerDashboard({ labels }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden rounded-t-2xl",
        style: {
            background: "linear-gradient(135deg, #130f0f 0%, #1a1015 100%)",
            padding: "20px 20px 16px",
            height: 240
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 w-2 rounded-full bg-[#8d354b]"
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 10,
                                    color: "rgba(245,240,237,0.5)",
                                    letterSpacing: "0.1em"
                                },
                                children: labels.label
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 9,
                            color: "rgba(245,240,237,0.3)"
                        },
                        children: labels.live
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-shrink-0",
                        style: {
                            width: 72,
                            height: 72
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 72 72",
                                style: {
                                    width: 72,
                                    height: 72,
                                    transform: "rotate(-90deg)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "36",
                                        cy: "36",
                                        r: "28",
                                        fill: "none",
                                        stroke: "rgba(255,255,255,0.06)",
                                        strokeWidth: "6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "36",
                                        cy: "36",
                                        r: "28",
                                        fill: "none",
                                        stroke: "#8d354b",
                                        strokeWidth: "6",
                                        strokeDasharray: `${2 * Math.PI * 28 * 0.72} ${2 * Math.PI * 28}`,
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex flex-col items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color: "#f5f0ed",
                                            lineHeight: 1
                                        },
                                        children: "72%"
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 8,
                                            color: "rgba(245,240,237,0.4)",
                                            letterSpacing: "0.05em"
                                        },
                                        children: labels.spent
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 flex-1",
                        children: [
                            {
                                label: labels.budget,
                                value: "847M",
                                unit: "AED",
                                ok: true
                            },
                            {
                                label: labels.schedule,
                                value: "+2d",
                                unit: labels.variance,
                                ok: false
                            },
                            {
                                label: labels.rfis,
                                value: "12",
                                unit: labels.pending,
                                ok: false
                            }
                        ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between rounded-lg px-3 py-1.5",
                                style: {
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.06)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 10,
                                            color: "rgba(245,240,237,0.45)"
                                        },
                                        children: k.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 11,
                                            fontWeight: 600,
                                            color: k.ok ? "#5aad7a" : "#f5f0ed"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bidi-isolate",
                                                children: k.value
                                            }, void 0, false, {
                                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 9,
                                                    fontWeight: 400,
                                                    color: "rgba(245,240,237,0.35)"
                                                },
                                                children: k.unit
                                            }, void 0, false, {
                                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, k.label, true, {
                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 rounded-lg py-2 text-center",
                        style: {
                            background: "#8d354b",
                            fontSize: 10,
                            fontWeight: 600,
                            color: "white",
                            letterSpacing: "0.04em"
                        },
                        children: labels.generateReport
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg px-3 py-2",
                        style: {
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            fontSize: 10,
                            color: "rgba(245,240,237,0.5)"
                        },
                        children: labels.pendingCount
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = OwnerDashboard;
function ConsultantDashboard({ labels }) {
    const statusColors = {
        Open: "#f59e0b",
        Reviewed: "#5aad7a",
        Closed: "rgba(245,240,237,0.3)",
        "مفتوح": "#f59e0b",
        "مراجَع": "#5aad7a",
        "مغلق": "rgba(245,240,237,0.3)"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden rounded-t-2xl",
        style: {
            background: "linear-gradient(135deg, #0d1117 0%, #111820 100%)",
            padding: "20px 20px 16px",
            height: 240
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 w-2 rounded-full bg-[#3b7ec8]"
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 10,
                                    color: "rgba(245,240,237,0.5)",
                                    letterSpacing: "0.1em"
                                },
                                children: labels.label
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 9,
                            color: "rgba(245,240,237,0.3)"
                        },
                        className: "bidi-isolate",
                        children: labels.reviewedCount
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-1.5 w-full rounded-full",
                    style: {
                        background: "rgba(255,255,255,0.06)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1.5 rounded-full",
                        style: {
                            width: "78%",
                            background: "linear-gradient(90deg, #3b7ec8 0%, #5aad7a 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1.5",
                children: labels.items.map((r)=>{
                    const c = statusColors[r.status] ?? "#f59e0b";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between rounded-lg px-3 py-2",
                        style: {
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.06)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 9,
                                            fontWeight: 600,
                                            color: "#3b7ec8",
                                            letterSpacing: "0.06em"
                                        },
                                        className: "bidi-isolate",
                                        children: r.id
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 10,
                                            color: "rgba(245,240,237,0.6)",
                                            marginTop: 1,
                                            lineHeight: 1.2
                                        },
                                        children: r.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full px-2 py-0.5",
                                style: {
                                    fontSize: 9,
                                    fontWeight: 600,
                                    color: c,
                                    background: `${c}18`,
                                    border: `1px solid ${c}30`,
                                    letterSpacing: "0.05em"
                                },
                                children: r.status
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        ]
                    }, r.id, true, {
                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_c1 = ConsultantDashboard;
function ContractorDashboard({ labels }) {
    const tasks = [
        {
            label: labels.items[0]?.label ?? "",
            pct: 100,
            done: true
        },
        {
            label: labels.items[1]?.label ?? "",
            pct: 65,
            done: false
        },
        {
            label: labels.items[2]?.label ?? "",
            pct: 38,
            done: false
        },
        {
            label: labels.items[3]?.label ?? "",
            pct: 20,
            done: false
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden rounded-t-2xl",
        style: {
            background: "linear-gradient(135deg, #0d1309 0%, #111a0f 100%)",
            padding: "20px 20px 16px",
            height: 240
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 w-2 rounded-full bg-[#5aad7a]"
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 10,
                                    color: "rgba(245,240,237,0.5)",
                                    letterSpacing: "0.1em"
                                },
                                children: labels.label
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full px-2 py-0.5",
                        style: {
                            fontSize: 9,
                            fontWeight: 600,
                            color: "#5aad7a",
                            background: "rgba(90,173,122,0.12)",
                            border: "1px solid rgba(90,173,122,0.25)"
                        },
                        children: labels.fieldLog
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: tasks.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-4 w-4 items-center justify-center rounded",
                                                style: {
                                                    background: t.done ? "#5aad7a" : "rgba(255,255,255,0.06)",
                                                    border: "1px solid rgba(255,255,255,0.1)"
                                                },
                                                children: t.done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "8",
                                                    height: "8",
                                                    viewBox: "0 0 8 8",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M1.5 4L3.5 6L6.5 2",
                                                        stroke: "white",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 10,
                                                    color: t.done ? "rgba(245,240,237,0.35)" : "rgba(245,240,237,0.65)",
                                                    textDecoration: t.done ? "line-through" : "none"
                                                },
                                                children: t.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 9,
                                            fontWeight: 600,
                                            color: t.done ? "#5aad7a" : "rgba(245,240,237,0.45)"
                                        },
                                        className: "bidi-isolate",
                                        children: [
                                            t.pct,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 w-full rounded-full",
                                style: {
                                    background: "rgba(255,255,255,0.06)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1 rounded-full transition-all",
                                    style: {
                                        width: `${t.pct}%`,
                                        background: t.done ? "#5aad7a" : "linear-gradient(90deg, rgba(90,173,122,0.7) 0%, #5aad7a 100%)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this)
                        ]
                    }, t.label, true, {
                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_c2 = ContractorDashboard;
function SkeletonRolePerspectives() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("skeleton.rolePerspectives");
    const tOwner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("skeleton.rolePerspectives.owner");
    const tConsultant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("skeleton.rolePerspectives.consultant");
    const tContractor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("skeleton.rolePerspectives.contractor");
    const ownerBullets = tOwner.raw("bullets");
    const consultantBullets = tConsultant.raw("bullets");
    const contractorBullets = tContractor.raw("bullets");
    const roles = [
        {
            title: tOwner("title"),
            label: tOwner("label"),
            icon: "◆",
            iconColor: "#8d354b",
            iconBg: "rgba(141,53,75,0.12)",
            iconBorder: "rgba(141,53,75,0.25)",
            bullets: ownerBullets,
            cta: tOwner("cta"),
            Dashboard: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OwnerDashboard, {
                    labels: {
                        label: tOwner("dashboard.label"),
                        live: tOwner("dashboard.live"),
                        spent: tOwner("dashboard.spent"),
                        budget: tOwner("dashboard.budget"),
                        schedule: tOwner("dashboard.schedule"),
                        rfis: tOwner("dashboard.rfis"),
                        onTrack: tOwner("dashboard.onTrack"),
                        variance: tOwner("dashboard.variance"),
                        pending: tOwner("dashboard.pending"),
                        generateReport: tOwner("dashboard.generateReport"),
                        pendingCount: tOwner("dashboard.pendingCount")
                    }
                }, void 0, false, {
                    fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                    lineNumber: 256,
                    columnNumber: 9
                }, this),
            accentBorder: "rgba(141,53,75,0.3)",
            accentGlow: "rgba(141,53,75,0.12)"
        },
        {
            title: tConsultant("title"),
            label: tConsultant("label"),
            icon: "◈",
            iconColor: "#3b7ec8",
            iconBg: "rgba(59,126,200,0.12)",
            iconBorder: "rgba(59,126,200,0.25)",
            bullets: consultantBullets,
            cta: tConsultant("cta"),
            Dashboard: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsultantDashboard, {
                    labels: {
                        label: tConsultant("dashboard.label"),
                        reviewedCount: tConsultant("dashboard.reviewedCount"),
                        items: tConsultant.raw("dashboard.items")
                    }
                }, void 0, false, {
                    fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this),
            accentBorder: "rgba(59,126,200,0.3)",
            accentGlow: "rgba(59,126,200,0.08)"
        },
        {
            title: tContractor("title"),
            label: tContractor("label"),
            icon: "◉",
            iconColor: "#5aad7a",
            iconBg: "rgba(90,173,122,0.12)",
            iconBorder: "rgba(90,173,122,0.25)",
            bullets: contractorBullets,
            cta: tContractor("cta"),
            Dashboard: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContractorDashboard, {
                    labels: {
                        label: tContractor("dashboard.label"),
                        fieldLog: tContractor("dashboard.fieldLog"),
                        items: tContractor.raw("dashboard.items")
                    }
                }, void 0, false, {
                    fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                    lineNumber: 310,
                    columnNumber: 9
                }, this),
            accentBorder: "rgba(90,173,122,0.3)",
            accentGlow: "rgba(90,173,122,0.08)"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-[#f9f7f5] dark:bg-[#080606]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 bg-cover bg-center dark:invert dark:hue-rotate-180",
                style: {
                    backgroundImage: 'url("/assets/cards%20background/7.png")'
                }
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 bg-white/72 dark:bg-black/65"
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-7xl px-6 py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "text-center",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: "-60px"
                        },
                        transition: {
                            duration: 0.55
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400",
                                children: t("eyebrow")
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                lineNumber: 342,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 text-3xl font-semibold text-neutral-900 dark:text-[#f5f0ed] sm:text-4xl",
                                children: [
                                    t("title1"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#8d354b]",
                                        children: t("title2")
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                        lineNumber: 347,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400",
                                children: t("subtitle")
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 grid grid-cols-1 gap-6 md:grid-cols-3",
                        children: roles.map((role, i)=>{
                            const { Dashboard } = role;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 48
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: "-40px"
                                },
                                transition: {
                                    delay: i * 0.12,
                                    duration: 0.6,
                                    ease: [
                                        0.25,
                                        0.46,
                                        0.45,
                                        0.94
                                    ]
                                },
                                className: "flex h-full flex-col",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$TiltCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiltCard"], {
                                    tiltFactor: 12,
                                    perspective: 900,
                                    glareIntensity: 0.28,
                                    borderRadius: 20,
                                    className: "flex flex-col rounded-2xl",
                                    hoverScale: 1.03,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border bg-white dark:bg-neutral-950 overflow-hidden flex flex-col h-full",
                                        style: {
                                            borderColor: role.accentBorder
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dashboard, {}, void 0, false, {
                                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                lineNumber: 383,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-0 p-6 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold",
                                                                style: {
                                                                    color: role.iconColor,
                                                                    background: role.iconBg,
                                                                    border: `1px solid ${role.iconBorder}`
                                                                },
                                                                children: role.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                                lineNumber: 389,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        style: {
                                                                            fontSize: 9,
                                                                            fontWeight: 600,
                                                                            letterSpacing: "0.1em",
                                                                            color: role.iconColor
                                                                        },
                                                                        children: role.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                                        lineNumber: 400,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-base font-semibold text-neutral-900 dark:text-[#f5f0ed]",
                                                                        children: role.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                                        lineNumber: 403,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-2 mb-6",
                                                        children: role.bullets.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-center gap-2.5 text-sm text-neutral-600 dark:text-neutral-400",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex h-1.5 w-1.5 flex-shrink-0 rounded-full",
                                                                        style: {
                                                                            background: role.iconColor
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                                        lineNumber: 416,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    b
                                                                ]
                                                            }, b, true, {
                                                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PulseButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PulseLinkButton"], {
                                                            href: "#",
                                                            variant: "outline",
                                                            trailingIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PulseButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PortalArrow"], {}, void 0, false, {
                                                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                                lineNumber: 429,
                                                                columnNumber: 41
                                                            }, this),
                                                            children: role.cta
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                            lineNumber: 426,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                                lineNumber: 386,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                        lineNumber: 378,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                    lineNumber: 370,
                                    columnNumber: 17
                                }, this)
                            }, role.title, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                                lineNumber: 358,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/skeleton/product/SkeletonRolePerspectives.tsx",
        lineNumber: 324,
        columnNumber: 5
    }, this);
}
_s(SkeletonRolePerspectives, "8AZ0qASepHxOMwP+hrFlY5FcAdk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c3 = SkeletonRolePerspectives;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "OwnerDashboard");
__turbopack_context__.k.register(_c1, "ConsultantDashboard");
__turbopack_context__.k.register(_c2, "ContractorDashboard");
__turbopack_context__.k.register(_c3, "SkeletonRolePerspectives");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/AnimatedCounter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedCounter",
    ()=>AnimatedCounter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AnimatedCounter({ to, from = 0, prefix = "", suffix = "", decimals = 0, duration = 2, className = "" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const motionValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(from);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-80px"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedCounter.useEffect": ()=>{
            if (!inView) return;
            const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(motionValue, to, {
                duration,
                ease: [
                    0.25,
                    0.46,
                    0.45,
                    0.94
                ],
                onUpdate (latest) {
                    if (ref.current) {
                        const formatted = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toLocaleString();
                        ref.current.textContent = `${prefix}${formatted}${suffix}`;
                    }
                }
            });
            return controls.stop;
        }
    }["AnimatedCounter.useEffect"], [
        inView,
        motionValue,
        to,
        from,
        prefix,
        suffix,
        decimals,
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: className,
        children: [
            prefix,
            from,
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/AnimatedCounter.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(AnimatedCounter, "o2vnk+0edxFPu9M0jEDqy9UPM8w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = AnimatedCounter;
var _c;
__turbopack_context__.k.register(_c, "AnimatedCounter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/skeleton/product/SkeletonEconomics.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonEconomics",
    ()=>SkeletonEconomics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AnimatedCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/AnimatedCounter.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const statShapes = [
    {
        prefix: "AED ",
        to: 150,
        suffix: "K",
        decimals: 0
    },
    {
        prefix: "",
        to: 70,
        suffix: "",
        decimals: 0
    },
    {
        prefix: "",
        to: 30,
        suffix: "%",
        decimals: 0
    },
    {
        prefix: "AED ",
        to: 3.15,
        suffix: "M",
        decimals: 2
    }
];
function SkeletonEconomics() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-60px"
    });
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("skeleton.economics");
    const stats = t.raw("stats");
    // Suffix for "70 days" — append the localized "days" unit if available.
    // Keep numeric formatting LTR by isolating the AnimatedCounter span.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden border-b border-neutral-800 bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mx-auto max-w-7xl px-6 py-24 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-60px"
                    },
                    transition: {
                        duration: 0.55
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold uppercase tracking-widest text-[#8d354b]",
                            children: t("eyebrow")
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[#f5f0ed] sm:text-5xl",
                            children: [
                                t("titleLead"),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#8d354b]",
                                    children: t("titleAccent")
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                t("titleTrail")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-300",
                            children: t("body")
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: "mt-14 grid grid-cols-2 gap-4 md:grid-cols-4",
                    children: stats.map((s, i)=>{
                        const shape = statShapes[i];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 32
                            },
                            animate: inView ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                delay: i * 0.12,
                                duration: 0.55,
                                ease: [
                                    0.25,
                                    0.46,
                                    0.45,
                                    0.94
                                ]
                            },
                            className: "group relative overflow-hidden rounded-2xl p-6 text-start",
                            style: {
                                background: "linear-gradient(180deg, #a14260 0%, #7a2b3f 100%)",
                                border: "1px solid rgba(0,0,0,0.26)",
                                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.28), 0 2px 4px rgba(0,0,0,0.28), 0 10px 24px -6px rgba(141,53,75,0.50), 0 0 24px rgba(207,89,118,0.14)",
                                fontFamily: "var(--font-sans, 'Raleway', sans-serif)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-hidden": true,
                                    className: "pointer-events-none absolute inset-0 bg-cover bg-center opacity-40 dark:invert dark:hue-rotate-180 dark:opacity-50",
                                    style: {
                                        backgroundImage: 'url("/assets/cards%20background/3.png")'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl",
                                    style: {
                                        background: "radial-gradient(ellipse 80% 80% at 50% 0%, rgba(245,240,237,0.10) 0%, transparent 70%)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
                                    lineNumber: 79,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-semibold text-white sm:text-3xl lg:text-4xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bidi-isolate inline-block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AnimatedCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedCounter"], {
                                                    to: shape.to,
                                                    prefix: shape.prefix,
                                                    suffix: shape.suffix,
                                                    decimals: shape.decimals,
                                                    duration: 2.2
                                                }, void 0, false, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
                                                lineNumber: 89,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-sm font-medium text-white",
                                            children: s.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-0.5 text-xs text-white",
                                            children: s.sub
                                        }, void 0, false, {
                                            fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, s.label, true, {
                            fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
                            lineNumber: 52,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/skeleton/product/SkeletonEconomics.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(SkeletonEconomics, "ZoYfjE1Lkq+2TkuNqUmwgfXKrpE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = SkeletonEconomics;
var _c;
__turbopack_context__.k.register(_c, "SkeletonEconomics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/skeleton/product/SkeletonPlatformPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonPlatformPreview",
    ()=>SkeletonPlatformPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const tagColors = [
    "#d97706",
    "#3f8a5c",
    "#2563a6",
    "#8d354b",
    "#3f8a5c"
];
const dotColors = [
    "#d97706",
    "#3f8a5c",
    "#2563a6",
    "#8d354b",
    "#3f8a5c"
];
const kpiColors = [
    "#5aad7a",
    "#d97706",
    "#d97706",
    "#8d354b"
];
const aiSeverities = [
    "high",
    "ok",
    "med"
];
function SkeletonPlatformPreview() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("skeleton.platformPreview");
    const sidebarItems = t.raw("sidebarItems");
    const kpis = t.raw("kpis");
    const feed = t.raw("feed");
    const aiNotes = t.raw("aiNotes");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden border-b border-border bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 bg-cover bg-center dark:invert dark:hue-rotate-180",
                style: {
                    backgroundImage: 'url("/assets/cards%20background/9.png")'
                }
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 bg-white/72 dark:bg-black/65"
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-7xl px-6 py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "text-center",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: "-60px"
                        },
                        transition: {
                            duration: 0.55
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-widest text-[#8d354b]",
                                children: t("eyebrow")
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 text-3xl font-semibold text-foreground sm:text-4xl",
                                children: [
                                    t("titleLead"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#8d354b]",
                                        children: t("titleAccent")
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground",
                                children: t("subtitle")
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mt-12",
                        initial: {
                            opacity: 0,
                            rotateX: 8,
                            y: 48
                        },
                        whileInView: {
                            opacity: 1,
                            rotateX: 0,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: "-60px"
                        },
                        transition: {
                            duration: 0.8,
                            ease: [
                                0.25,
                                0.46,
                                0.45,
                                0.94
                            ]
                        },
                        style: {
                            perspective: 1200
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden rounded-2xl text-start shadow-2xl bg-[#fbfaf8] dark:bg-[#181314]",
                            style: {
                                border: "1px solid rgba(141,53,75,0.18)",
                                boxShadow: "0 32px 64px -16px rgba(0,0,0,0.20), 0 0 0 1px rgba(141,53,75,0.08) inset"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 border-b px-4 py-3 bg-[#f5f0eb] dark:bg-[#221a1c]",
                                    style: {
                                        borderColor: "rgba(141,53,75,0.16)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1.5",
                                            children: [
                                                "#d56b80",
                                                "#e2a557",
                                                "#74b88f"
                                            ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2.5 w-2.5 rounded-full",
                                                    style: {
                                                        background: c
                                                    }
                                                }, i, false, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-auto flex items-center gap-2 rounded-md px-3 py-1 bg-white dark:bg-[#0e0c0c]",
                                            style: {
                                                border: "1px solid rgba(141,53,75,0.18)",
                                                fontSize: 11,
                                                color: "var(--fg-tertiary, #7a6f64)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-1.5 w-1.5 rounded-full bg-[#3f8a5c]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bidi-isolate",
                                                    children: t("browserUrl")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-[180px_1fr_280px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                            className: "border-b lg:border-b-0 lg:border-r p-4 bg-[#fbfaf8] dark:bg-[#1a1314]",
                                            style: {
                                                borderColor: "rgba(141,53,75,0.14)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-5 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex h-6 w-6 items-center justify-center rounded-md",
                                                            style: {
                                                                background: "#8d354b"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    fontWeight: 700,
                                                                    color: "white"
                                                                },
                                                                children: "P"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold text-[#1a1614] dark:text-[#f5f0ed]",
                                                            children: "Pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-1",
                                                    children: sidebarItems.map((label, idx)=>{
                                                        const active = idx === 0;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: `rounded-lg px-2.5 py-1.5 cursor-pointer ${active ? "text-[#8d354b] bg-[rgba(141,53,75,0.08)] border-s-2 border-[#8d354b]" : "text-[#7a6f64] dark:text-[#a89c8e] border-s-2 border-transparent"}`,
                                                            style: {
                                                                fontSize: 11,
                                                                fontWeight: active ? 600 : 400
                                                            },
                                                            children: label
                                                        }, label, false, {
                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 23
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 overflow-hidden bg-white dark:bg-[#0e0c0c]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-semibold text-[#a89c8e] dark:text-[#7a6f64]",
                                                            style: {
                                                                letterSpacing: "0.1em"
                                                            },
                                                            children: t("projectLabel")
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1.5 rounded-full px-2 py-0.5",
                                                                    style: {
                                                                        background: "rgba(63,138,92,0.1)",
                                                                        border: "1px solid rgba(63,138,92,0.25)",
                                                                        fontSize: 9,
                                                                        fontWeight: 700,
                                                                        color: "#3f8a5c",
                                                                        letterSpacing: "0.06em"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                                            className: "h-1.5 w-1.5 rounded-full",
                                                                            style: {
                                                                                background: "#3f8a5c"
                                                                            },
                                                                            animate: {
                                                                                opacity: [
                                                                                    1,
                                                                                    0.3,
                                                                                    1
                                                                                ]
                                                                            },
                                                                            transition: {
                                                                                duration: 1.5,
                                                                                repeat: Infinity,
                                                                                ease: "easeInOut"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                            lineNumber: 154,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        t("live")
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full px-2 py-0.5 text-[#7a6f64] dark:text-[#a89c8e] bg-[#f5f0eb] dark:bg-[#221a1c]",
                                                                    style: {
                                                                        fontSize: 9,
                                                                        border: "1px solid rgba(141,53,75,0.16)",
                                                                        fontWeight: 600
                                                                    },
                                                                    children: t("members")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                    lineNumber: 162,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-[22px] font-bold text-[#1a1614] dark:text-[#f5f0ed]",
                                                    style: {
                                                        marginBottom: 16,
                                                        letterSpacing: "-0.01em"
                                                    },
                                                    children: t("overview")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2 mb-4 sm:grid-cols-4",
                                                    children: kpis.map((k, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-xl p-3 transition-all hover:-translate-y-0.5 bg-[#fbfaf8] dark:bg-[#181314]",
                                                            style: {
                                                                border: "1px solid rgba(141,53,75,0.14)",
                                                                boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                                                                textAlign: "center"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[#a89c8e] dark:text-[#7a6f64]",
                                                                    style: {
                                                                        fontSize: 9,
                                                                        letterSpacing: "0.1em",
                                                                        fontWeight: 600
                                                                    },
                                                                    children: k.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                    lineNumber: 191,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "bidi-isolate",
                                                                    style: {
                                                                        fontSize: 22,
                                                                        fontWeight: 700,
                                                                        color: kpiColors[idx],
                                                                        lineHeight: 1.2,
                                                                        marginTop: 6
                                                                    },
                                                                    children: k.value
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[#a89c8e] dark:text-[#7a6f64]",
                                                                    style: {
                                                                        fontSize: 9,
                                                                        marginTop: 4
                                                                    },
                                                                    children: k.unit
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, k.label, true, {
                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-xl overflow-hidden bg-[#fbfaf8] dark:bg-[#181314]",
                                                    style: {
                                                        border: "1px solid rgba(141,53,75,0.14)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 px-3 py-2 bg-[#fbfaf8] dark:bg-[#1a1314]",
                                                            style: {
                                                                borderBottom: "1px solid rgba(141,53,75,0.14)"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                                    className: "h-1.5 w-1.5 rounded-full",
                                                                    style: {
                                                                        background: "#3f8a5c"
                                                                    },
                                                                    animate: {
                                                                        opacity: [
                                                                            1,
                                                                            0.3,
                                                                            1
                                                                        ]
                                                                    },
                                                                    transition: {
                                                                        duration: 1.5,
                                                                        repeat: Infinity,
                                                                        ease: "easeInOut",
                                                                        delay: 0.5
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                    lineNumber: 204,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[#7a6f64] dark:text-[#a89c8e]",
                                                                    style: {
                                                                        fontSize: 9,
                                                                        letterSpacing: "0.1em",
                                                                        fontWeight: 600
                                                                    },
                                                                    children: t("feedHeader")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 gap-2.5 p-3 sm:grid-cols-2",
                                                            children: feed.map((f, i)=>{
                                                                const tilt = i % 5 - 2; // -2..+2 degrees
                                                                const tagColor = tagColors[i] ?? "#8d354b";
                                                                const dotColor = dotColors[i] ?? "#8d354b";
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    initial: {
                                                                        opacity: 0,
                                                                        y: 12,
                                                                        rotate: tilt
                                                                    },
                                                                    whileInView: {
                                                                        opacity: 1,
                                                                        y: 0,
                                                                        rotate: tilt * 0.6
                                                                    },
                                                                    whileHover: {
                                                                        rotate: 0,
                                                                        y: -2,
                                                                        scale: 1.02
                                                                    },
                                                                    viewport: {
                                                                        once: true
                                                                    },
                                                                    transition: {
                                                                        delay: 0.5 + i * 0.08,
                                                                        duration: 0.45,
                                                                        ease: [
                                                                            0.25,
                                                                            0.46,
                                                                            0.45,
                                                                            0.94
                                                                        ]
                                                                    },
                                                                    className: "relative rounded-lg p-3",
                                                                    style: {
                                                                        background: `linear-gradient(180deg, #fffaf3 0%, #fdf2e8 100%)`,
                                                                        borderTop: `3px solid ${tagColor}`,
                                                                        borderInlineEnd: "1px solid rgba(0,0,0,0.04)",
                                                                        borderBottom: "1px solid rgba(0,0,0,0.06)",
                                                                        borderInlineStart: "1px solid rgba(0,0,0,0.04)",
                                                                        boxShadow: "0 1px 1px rgba(0,0,0,0.03), 0 4px 10px -4px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.5) inset"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "absolute end-2.5 top-2.5 h-1.5 w-1.5 rounded-full",
                                                                            style: {
                                                                                background: dotColor,
                                                                                boxShadow: `0 0 0 3px ${tagColor}22`
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                            lineNumber: 240,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                fontSize: 9,
                                                                                fontWeight: 700,
                                                                                color: tagColor,
                                                                                letterSpacing: "0.06em",
                                                                                marginBottom: 4
                                                                            },
                                                                            children: f.tag
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                            lineNumber: 244,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                fontSize: 12,
                                                                                fontWeight: 600,
                                                                                color: "#1a1614",
                                                                                lineHeight: 1.35
                                                                            },
                                                                            children: f.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                            lineNumber: 255,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                fontSize: 10,
                                                                                color: "#7a6f64",
                                                                                marginTop: 4,
                                                                                lineHeight: 1.4
                                                                            },
                                                                            children: f.meta
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                            lineNumber: 258,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, f.title, true, {
                                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 25
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                            className: "border-t lg:border-s lg:border-t-0 p-4 bg-[#fbfaf8] dark:bg-[#1a1314]",
                                            style: {
                                                borderColor: "rgba(141,53,75,0.14)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex h-5 w-5 items-center justify-center rounded-md",
                                                            style: {
                                                                background: "#8d354b"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 9,
                                                                    fontWeight: 700,
                                                                    color: "white"
                                                                },
                                                                children: "AI"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#7a6f64] dark:text-[#a89c8e]",
                                                            style: {
                                                                fontSize: 10,
                                                                fontWeight: 700,
                                                                letterSpacing: "0.1em"
                                                            },
                                                            children: t("intelligenceLabel")
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-3",
                                                    children: aiNotes.map((note, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 8
                                                            },
                                                            whileInView: {
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            viewport: {
                                                                once: true
                                                            },
                                                            transition: {
                                                                delay: 0.8 + i * 0.1,
                                                                duration: 0.4
                                                            },
                                                            className: "rounded-xl p-3",
                                                            style: {
                                                                background: aiSeverities[i] === "high" ? "rgba(141,53,75,0.06)" : aiSeverities[i] === "ok" ? "rgba(63,138,92,0.05)" : "rgba(37,99,166,0.05)",
                                                                border: `1px solid ${aiSeverities[i] === "high" ? "rgba(141,53,75,0.18)" : aiSeverities[i] === "ok" ? "rgba(63,138,92,0.18)" : "rgba(37,99,166,0.18)"}`
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full",
                                                                        style: {
                                                                            background: aiSeverities[i] === "high" ? "#8d354b" : aiSeverities[i] === "ok" ? "#3f8a5c" : "#2563a6"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                        lineNumber: 316,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[#3a3431] dark:text-[#d4cfc8]",
                                                                        style: {
                                                                            fontSize: 11,
                                                                            lineHeight: 1.55
                                                                        },
                                                                        children: note
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                        lineNumber: 327,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                                lineNumber: 315,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, note, false, {
                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 rounded-xl px-3 py-2.5 cursor-pointer transition-colors hover:bg-[rgba(141,53,75,0.06)] bg-white dark:bg-[#0e0c0c]",
                                                    style: {
                                                        border: "1px solid rgba(141,53,75,0.2)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#a89c8e] dark:text-[#7a6f64]",
                                                            style: {
                                                                fontSize: 10,
                                                                marginBottom: 4,
                                                                fontWeight: 600
                                                            },
                                                            children: t("askPulse")
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#a89c8e] dark:text-[#7a6f64]",
                                                            style: {
                                                                fontSize: 11,
                                                                fontStyle: "italic"
                                                            },
                                                            children: t("askPulseExample")
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/skeleton/product/SkeletonPlatformPreview.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(SkeletonPlatformPreview, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = SkeletonPlatformPreview;
var _c;
__turbopack_context__.k.register(_c, "SkeletonPlatformPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/skeleton/product/SkeletonIntegrations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonIntegrations",
    ()=>SkeletonIntegrations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const tools = [
    {
        name: "Procore",
        categoryKey: "projectMgmt"
    },
    {
        name: "Aconex",
        categoryKey: "documentControl"
    },
    {
        name: "Autodesk",
        categoryKey: "bimDesign"
    },
    {
        name: "SAP",
        categoryKey: "finance"
    },
    {
        name: "Primavera",
        categoryKey: "scheduling"
    },
    {
        name: "Revit",
        categoryKey: "bim"
    },
    {
        name: "SharePoint",
        categoryKey: "documents"
    },
    {
        name: "Bluebeam",
        categoryKey: "markup"
    },
    {
        name: "Slack",
        categoryKey: "communication"
    },
    {
        name: "Teams",
        categoryKey: "communication"
    },
    {
        name: "PowerBI",
        categoryKey: "reporting"
    },
    {
        name: "Outlook",
        categoryKey: "email"
    }
];
function ToolIcon({ name }) {
    const initials = name.slice(0, 2).toUpperCase();
    const colors = {
        Procore: "#f59e0b",
        Aconex: "#3b7ec8",
        Autodesk: "#5aad7a",
        SAP: "#3b82f6",
        Primavera: "#8b5cf6",
        Revit: "#ec4899",
        SharePoint: "#0078d4",
        Bluebeam: "#e11d48",
        Slack: "#e01e5a",
        Teams: "#6264a7",
        PowerBI: "#f2c811",
        Outlook: "#0078d4"
    };
    const bg = colors[name] ?? "#8d354b";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-[10px] font-bold text-white bidi-isolate",
        style: {
            background: bg,
            opacity: 0.85
        },
        children: initials
    }, void 0, false, {
        fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = ToolIcon;
function SkeletonIntegrations() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("skeleton.integrations");
    const tCat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("skeleton.integrations.categories");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#080606]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 bg-cover bg-center opacity-50 dark:opacity-60 dark:invert dark:hue-rotate-180",
                style: {
                    backgroundImage: 'url("/assets/cards%20background/1.png")'
                }
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 bg-white/72 dark:bg-[#080606]/68"
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-7xl px-6 py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "text-center",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: "-60px"
                        },
                        transition: {
                            duration: 0.55
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-widest text-[#8d354b]",
                                children: t("eyebrow")
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 text-3xl font-semibold text-neutral-900 dark:text-[#f5f0ed] sm:text-4xl",
                                children: [
                                    t("titleLead"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#8d354b]",
                                        children: t("titleAccent")
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-3 max-w-lg text-sm leading-relaxed text-neutral-500 dark:text-neutral-400",
                                children: t("subtitle")
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: "-60px"
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.1
                        },
                        className: "mx-auto mt-12 max-w-4xl rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-white/60 to-[#f7f1ec]/40 dark:from-[#181314] dark:to-[#120e0f]",
                        style: {
                            border: "1px solid rgba(141,53,75,0.18)",
                            boxShadow: "0 1px 0 rgba(255,255,255,0.4) inset, 0 4px 20px -8px rgba(141,53,75,0.12), 0 1px 4px rgba(32,29,26,0.04)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4",
                            children: tools.map((tool, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 16
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true,
                                        margin: "-40px"
                                    },
                                    transition: {
                                        delay: i * 0.04,
                                        duration: 0.4,
                                        ease: [
                                            0.25,
                                            0.46,
                                            0.45,
                                            0.94
                                        ]
                                    },
                                    whileHover: {
                                        y: -3
                                    },
                                    className: "group flex cursor-default items-center gap-3 rounded-xl bg-white dark:bg-[#0e0c0c] px-4 py-3 transition-all",
                                    style: {
                                        border: "1px solid rgba(141,53,75,0.16)",
                                        boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 1px 2px rgba(32,29,26,0.03)"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.borderColor = "#8d354b";
                                        e.currentTarget.style.boxShadow = "0 1px 0 rgba(255,255,255,0.6) inset, 0 2px 4px rgba(141,53,75,0.14), 0 8px 18px -4px rgba(141,53,75,0.22)";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.borderColor = "rgba(141,53,75,0.16)";
                                        e.currentTarget.style.boxShadow = "0 1px 0 rgba(255,255,255,0.6) inset, 0 1px 2px rgba(32,29,26,0.03)";
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolIcon, {
                                            name: tool.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-neutral-900 dark:text-[#f5f0ed] bidi-isolate",
                                                    children: tool.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-neutral-400 dark:text-neutral-500",
                                                    children: tCat(tool.categoryKey)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, `${tool.name}-${i}`, true, {
                                    fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "mt-6 text-center text-xs text-neutral-400",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: 0.8,
                            duration: 0.5
                        },
                        children: t("andMore")
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/skeleton/product/SkeletonIntegrations.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(SkeletonIntegrations, "rAlMEQ+4sFqgY+eS38AGpc6lrsY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c1 = SkeletonIntegrations;
var _c, _c1;
__turbopack_context__.k.register(_c, "ToolIcon");
__turbopack_context__.k.register(_c1, "SkeletonIntegrations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/skeleton/product/SkeletonProof.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonProof",
    ()=>SkeletonProof
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function BrandLogoCard({ src, alt, bg, pattern = "none", patternColor = "rgba(0,0,0,0.06)", invert = false, logoMaxWidth = 180, logoAspect = "5/2" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden",
        style: {
            background: bg
        },
        children: [
            pattern === "waves" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 400 500",
                preserveAspectRatio: "xMidYMid slice",
                className: "absolute inset-0 h-full w-full",
                style: {
                    opacity: 0.4
                },
                children: Array.from({
                    length: 18
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M 0 ${100 + i * 22} Q 200 ${80 + i * 22} 400 ${100 + i * 22}`,
                        stroke: patternColor,
                        strokeWidth: "1",
                        fill: "none",
                        opacity: 0.5 - i * 0.015
                    }, i, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this),
            pattern === "stars" && Array.from({
                length: 22
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute rounded-full",
                    style: {
                        width: 1.5,
                        height: 1.5,
                        background: patternColor,
                        top: `${i * 37 % 100}%`,
                        left: `${i * 53 % 100}%`,
                        opacity: 0.7
                    }
                }, i, false, {
                    fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this)),
            pattern === "rings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 400 500",
                preserveAspectRatio: "xMidYMid slice",
                className: "absolute inset-0 h-full w-full",
                style: {
                    opacity: 0.3
                },
                children: Array.from({
                    length: 8
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "200",
                        cy: "250",
                        r: 50 + i * 30,
                        stroke: patternColor,
                        strokeWidth: "0.6",
                        fill: "none"
                    }, i, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this),
            pattern === "bars" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-8 left-1/2 -translate-x-1/2 flex gap-1",
                children: [
                    10,
                    22,
                    32,
                    28,
                    24,
                    18
                ].map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 4,
                            height: h * 1.4,
                            background: patternColor,
                            borderRadius: 1
                        }
                    }, i, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full",
                    style: {
                        maxWidth: logoMaxWidth,
                        aspectRatio: logoAspect,
                        filter: invert ? "invert(1) brightness(2)" : "none"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: src,
                        alt: alt,
                        fill: true,
                        sizes: "280px",
                        style: {
                            objectFit: "contain"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = BrandLogoCard;
function PulseVisionVisual({ comingSoon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden",
        style: {
            background: "radial-gradient(ellipse 120% 90% at 50% 50%, #1a0e2e 0%, #0a0612 70%, #050208 100%)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    style: {
                        width: 200,
                        height: 200
                    },
                    children: [
                        [
                            {
                                size: 200,
                                color: "rgba(141,53,75,0.10)",
                                duration: 3
                            },
                            {
                                size: 160,
                                color: "rgba(141,53,75,0.16)",
                                duration: 3.4
                            },
                            {
                                size: 120,
                                color: "rgba(141,53,75,0.28)",
                                duration: 3.8
                            },
                            {
                                size: 85,
                                color: "rgba(190,80,110,0.45)",
                                duration: 4.2
                            }
                        ].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute rounded-full",
                                style: {
                                    top: "50%",
                                    left: "50%",
                                    width: r.size,
                                    height: r.size,
                                    marginTop: -r.size / 2,
                                    marginLeft: -r.size / 2,
                                    background: `radial-gradient(circle, ${r.color} 0%, transparent 70%)`
                                },
                                animate: {
                                    scale: [
                                        1,
                                        1.15,
                                        1
                                    ],
                                    opacity: [
                                        1,
                                        0.7,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: r.duration,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }
                            }, i, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute rounded-full",
                            style: {
                                top: "50%",
                                left: "50%",
                                width: 30,
                                height: 30,
                                marginTop: -15,
                                marginLeft: -15,
                                background: "radial-gradient(circle, #ffaa66 0%, #ff7744 50%, transparent 100%)",
                                boxShadow: "0 0 40px rgba(255,140,90,0.7)"
                            },
                            animate: {
                                scale: [
                                    1,
                                    1.1,
                                    1
                                ]
                            },
                            transition: {
                                duration: 1.8,
                                ease: "easeInOut",
                                repeat: Infinity
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-16 left-0 right-0 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.25em",
                        color: "rgba(245,240,237,0.5)"
                    },
                    children: comingSoon
                }, void 0, false, {
                    fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_c1 = PulseVisionVisual;
function ProofCardItem({ card, comingSoon }) {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isDark = card.bg.includes("0a0612") || card.bg.includes("1a1f3d") || card.bg.includes("0d3a4a") || card.bg.includes("2a3a52");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        className: "flex flex-shrink-0 flex-col",
        style: {
            flex: hovered ? "0 0 360px" : "0 0 calc(25% - 12px)",
            minWidth: 240,
            scrollSnapAlign: "start",
            transition: "flex 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        },
        animate: {
            y: hovered ? -6 : 0
        },
        transition: {
            duration: 0.35,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ]
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-2xl",
                style: {
                    aspectRatio: "3/4",
                    boxShadow: hovered ? "0 24px 48px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(141,53,75,0.15)" : "0 8px 24px -8px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.04)",
                    transition: "box-shadow 0.35s ease"
                },
                children: [
                    card.isPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PulseVisionVisual, {
                        comingSoon: comingSoon
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrandLogoCard, {
                        src: card.logoSrc,
                        alt: card.tag,
                        bg: card.bg,
                        pattern: card.pattern,
                        patternColor: card.patternColor,
                        invert: card.invertLogo,
                        logoMaxWidth: card.logoMaxWidth,
                        logoAspect: card.logoAspect
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 start-4 end-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5 bidi-isolate",
                            style: {
                                fontSize: 11,
                                fontWeight: 700,
                                letterSpacing: "0.08em",
                                color: card.accent,
                                textShadow: isDark ? "0 1px 2px rgba(0,0,0,0.3)" : "0 1px 2px rgba(255,255,255,0.4)"
                            },
                            children: [
                                card.isPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    style: {
                                        width: 6,
                                        height: 6,
                                        borderRadius: "50%",
                                        background: card.accent,
                                        flexShrink: 0
                                    },
                                    animate: {
                                        opacity: [
                                            1,
                                            0.4,
                                            1
                                        ]
                                    },
                                    transition: {
                                        duration: 1.6,
                                        repeat: Infinity
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: 6,
                                        height: 6,
                                        borderRadius: "50%",
                                        background: card.accent,
                                        flexShrink: 0,
                                        opacity: 0.7
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, this),
                                card.tag
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 px-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-[34ch] text-[13.5px] leading-[1.65] text-neutral-700 dark:text-neutral-200",
                        children: card.description
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#8d354b] transition-opacity hover:opacity-80 dark:text-[#e08aa0]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: card.cta
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": true,
                                className: "rtl:rotate-180",
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
        lineNumber: 229,
        columnNumber: 5
    }, this);
}
_s(ProofCardItem, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c2 = ProofCardItem;
function SkeletonProof() {
    _s1();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("skeleton.proof");
    const tCards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("skeleton.proof.cards");
    // Bold emphasis renders inline via next-intl rich text. Keeps "Pulse" /
    // "Pulse Vision" subtle inside the body without bolding entire sentences.
    const renderRich = (key)=>tCards.rich(key, {
            b: (chunks)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    className: "font-semibold text-[#8d354b] dark:text-[#e08aa0]",
                    children: chunks
                }, void 0, false, {
                    fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                    lineNumber: 339,
                    columnNumber: 9
                }, this)
        });
    const cards = [
        {
            id: "ora",
            tag: tCards("ora.tag"),
            description: renderRich("ora.description"),
            cta: tCards("ora.cta"),
            bg: "linear-gradient(135deg, #d9c190 0%, #b89968 50%, #c9a978 100%)",
            pattern: "waves",
            patternColor: "#7a5d35",
            logoSrc: "/assets/logos/ora.svg",
            accent: "#3a2614",
            logoMaxWidth: 200,
            logoAspect: "5/2"
        },
        {
            id: "vision",
            tag: tCards("vision.tag"),
            description: renderRich("vision.description"),
            cta: tCards("vision.cta"),
            bg: "#0a0612",
            isPreview: true,
            accent: "#e08aa0"
        },
        {
            id: "aldar",
            tag: tCards("aldar.tag"),
            description: renderRich("aldar.description"),
            cta: tCards("aldar.cta"),
            bg: "linear-gradient(135deg, #f1eae0 0%, #d9cfc1 50%, #c9bfae 100%)",
            pattern: "none",
            logoSrc: "/assets/logos/aldar.svg",
            accent: "#1a1a1a",
            logoMaxWidth: 240,
            logoAspect: "3/2"
        },
        {
            id: "emaar",
            tag: tCards("emaar.tag"),
            description: renderRich("emaar.description"),
            cta: tCards("emaar.cta"),
            bg: "linear-gradient(180deg, #1a1f3d 0%, #0f1228 100%)",
            pattern: "stars",
            patternColor: "rgba(255,255,255,0.5)",
            logoSrc: "/assets/logos/emaar.svg",
            invertLogo: true,
            accent: "#ffffff",
            logoMaxWidth: 240,
            logoAspect: "3/2"
        }
    ];
    const viewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [canPrev, setCanPrev] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canNext, setCanNext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const updateScrollState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SkeletonProof.useCallback[updateScrollState]": ()=>{
            const el = viewportRef.current;
            if (!el) return;
            setCanPrev(Math.abs(el.scrollLeft) > 4);
            setCanNext(Math.abs(el.scrollLeft) + el.clientWidth < el.scrollWidth - 4);
        }
    }["SkeletonProof.useCallback[updateScrollState]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SkeletonProof.useEffect": ()=>{
            const el = viewportRef.current;
            if (!el) return;
            updateScrollState();
            el.addEventListener("scroll", updateScrollState, {
                passive: true
            });
            window.addEventListener("resize", updateScrollState);
            return ({
                "SkeletonProof.useEffect": ()=>{
                    el.removeEventListener("scroll", updateScrollState);
                    window.removeEventListener("resize", updateScrollState);
                }
            })["SkeletonProof.useEffect"];
        }
    }["SkeletonProof.useEffect"], [
        updateScrollState
    ]);
    const scrollByAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SkeletonProof.useCallback[scrollByAmount]": (dir)=>{
            const el = viewportRef.current;
            if (!el) return;
            const slide = el.querySelector("article");
            const step = slide ? slide.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
            el.scrollBy({
                left: dir === "next" ? step : -step,
                behavior: "smooth"
            });
        }
    }["SkeletonProof.useCallback[scrollByAmount]"], []);
    const scrollPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SkeletonProof.useCallback[scrollPrev]": ()=>scrollByAmount("prev")
    }["SkeletonProof.useCallback[scrollPrev]"], [
        scrollByAmount
    ]);
    const scrollNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SkeletonProof.useCallback[scrollNext]": ()=>scrollByAmount("next")
    }["SkeletonProof.useCallback[scrollNext]"], [
        scrollByAmount
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "proof-section border-b border-neutral-200 dark:border-neutral-800 bg-[#f9f7f5] dark:bg-[#0a0707]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6 py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex items-end justify-between mb-10",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-60px"
                    },
                    transition: {
                        duration: 0.55
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-widest text-[#8d354b]",
                                    children: t("eyebrow")
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                                    lineNumber: 445,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-3 text-3xl font-semibold text-neutral-900 dark:text-[#f5f0ed] sm:text-4xl",
                                    children: [
                                        t("titleLead"),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#8d354b]",
                                            children: t("titleAccent")
                                        }, void 0, false, {
                                            fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                                            lineNumber: 450,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                                    lineNumber: 448,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300",
                                    children: t("subtitle")
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                                    lineNumber: 452,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                            lineNumber: 444,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden items-center gap-2 sm:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: scrollPrev,
                                    disabled: !canPrev,
                                    "aria-label": t("prev"),
                                    className: "flex h-10 w-10 items-center justify-center rounded-full border bg-white dark:bg-[#181314] text-neutral-700 dark:text-neutral-300 transition-all hover:border-[#8d354b] hover:text-[#8d354b] disabled:opacity-30 disabled:cursor-not-allowed",
                                    style: {
                                        borderColor: "rgba(141,53,75,0.22)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "15 18 9 12 15 6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                                            lineNumber: 467,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                                        lineNumber: 466,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                                    lineNumber: 458,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: scrollNext,
                                    disabled: !canNext,
                                    "aria-label": t("next"),
                                    className: "flex h-10 w-10 items-center justify-center rounded-full border bg-white dark:bg-[#181314] text-neutral-700 dark:text-neutral-300 transition-all hover:border-[#8d354b] hover:text-[#8d354b] disabled:opacity-30 disabled:cursor-not-allowed",
                                    style: {
                                        borderColor: "rgba(141,53,75,0.22)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "9 18 15 12 9 6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                                            lineNumber: 479,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                                        lineNumber: 478,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                                    lineNumber: 470,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                            lineNumber: 457,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 24
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-60px"
                    },
                    transition: {
                        duration: 0.6,
                        delay: 0.1
                    },
                    className: "relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: viewportRef,
                        className: "proof-viewport flex gap-4 overflow-x-auto pb-2 px-1",
                        style: {
                            scrollSnapType: "x mandatory",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            WebkitOverflowScrolling: "touch"
                        },
                        children: cards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProofCardItem, {
                                card: card,
                                comingSoon: t("comingSoon")
                            }, card.id, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                                lineNumber: 503,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                        lineNumber: 492,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                    lineNumber: 485,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-6 flex items-center gap-2 text-xs text-neutral-400 sm:hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            children: "‹"
                        }, void 0, false, {
                            fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                            lineNumber: 509,
                            columnNumber: 11
                        }, this),
                        t("swipeHint")
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
                    lineNumber: 508,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
            lineNumber: 436,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/skeleton/product/SkeletonProof.tsx",
        lineNumber: 433,
        columnNumber: 5
    }, this);
}
_s1(SkeletonProof, "5RnEA/WjE0/vOVujxubpMQysCJw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c3 = SkeletonProof;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "BrandLogoCard");
__turbopack_context__.k.register(_c1, "PulseVisionVisual");
__turbopack_context__.k.register(_c2, "ProofCardItem");
__turbopack_context__.k.register(_c3, "SkeletonProof");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/skeleton/product/SkeletonFinalCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonFinalCTA",
    ()=>SkeletonFinalCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PulseButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/PulseButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SkeletonFinalCTA() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("skeleton.finalCta");
    const headlineWords = t("h1Line1").split(" ");
    const subWords = t("h1Line2").split(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0",
                style: {
                    background: "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(141,53,75,0.25) 0%, rgba(141,53,75,0.08) 40%, transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 opacity-[0.025]",
                style: {
                    backgroundImage: "linear-gradient(rgba(245,240,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,237,1) 1px, transparent 1px)",
                    backgroundSize: "64px 64px"
                }
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-5xl px-6 py-32 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.85
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "mb-8 inline-flex items-center gap-2 rounded-full border border-[#8d354b]/30 bg-[#8d354b]/10 px-4 py-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                className: "h-1.5 w-1.5 rounded-full bg-[#8d354b]",
                                animate: {
                                    opacity: [
                                        1,
                                        0.3,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 1.5,
                                    repeat: Infinity
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold tracking-widest text-[#8d354b] uppercase",
                                children: t("badge")
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-5xl font-semibold leading-tight text-[#f5f0ed] sm:text-7xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block overflow-hidden",
                                children: headlineWords.map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        className: "inline-block mr-4",
                                        initial: {
                                            y: "100%",
                                            opacity: 0
                                        },
                                        whileInView: {
                                            y: 0,
                                            opacity: 1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            delay: i * 0.08,
                                            duration: 0.55,
                                            ease: [
                                                0.25,
                                                0.46,
                                                0.45,
                                                0.94
                                            ]
                                        },
                                        children: word
                                    }, word + i, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block overflow-hidden",
                                children: subWords.map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        className: "inline-block mr-4 text-[#8d354b]",
                                        initial: {
                                            y: "100%",
                                            opacity: 0
                                        },
                                        whileInView: {
                                            y: 0,
                                            opacity: 1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            delay: 0.32 + i * 0.1,
                                            duration: 0.55,
                                            ease: [
                                                0.25,
                                                0.46,
                                                0.45,
                                                0.94
                                            ]
                                        },
                                        children: word
                                    }, word + i, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-200",
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: 0.6,
                            duration: 0.5
                        },
                        children: t("body")
                    }, void 0, false, {
                        fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mt-10 flex flex-wrap justify-center gap-4",
                        initial: {
                            opacity: 0,
                            scale: 0.92
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: 0.75,
                            duration: 0.5,
                            ease: [
                                0.34,
                                1.56,
                                0.64,
                                1
                            ]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PulseButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PulseLinkButton"], {
                                href: "/skeleton/add-project/role",
                                variant: "darkPrimary",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PulseButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PulseIcon"], {}, void 0, false, {
                                    fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                                    lineNumber: 112,
                                    columnNumber: 90
                                }, this),
                                children: t("primary")
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PulseButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PulseLinkButton"], {
                                href: "/skeleton/contact",
                                variant: "darkSecondary",
                                children: t("secondary")
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "mt-12 text-xs text-neutral-300",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: 1,
                            duration: 0.6
                        },
                        children: [
                            t("tagline"),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bidi-isolate inline-block",
                                style: {
                                    color: "rgba(245,240,237,0.6)"
                                },
                                children: t("imprint")
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/skeleton/product/SkeletonFinalCTA.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(SkeletonFinalCTA, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = SkeletonFinalCTA;
var _c;
__turbopack_context__.k.register(_c, "SkeletonFinalCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/skeleton/product/SkeletonFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonFooter",
    ()=>SkeletonFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const navColumns = [
    {
        headingKey: "platform",
        linksKey: "platformLinks"
    },
    {
        headingKey: "resources",
        linksKey: "resourcesLinks"
    },
    {
        headingKey: "company",
        linksKey: "companyLinks"
    }
];
const contactLines = [
    {
        value: "demo@pulse-ai.com",
        href: "mailto:demo@pulse-ai.com",
        isLtr: true
    },
    {
        value: "+971 50 381 6979",
        href: "tel:+971503816979",
        isLtr: true
    },
    {
        value: "office",
        href: null,
        isLtr: false
    }
];
function SkeletonFooter() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("skeleton.footer");
    const platformLinks = t.raw("platformLinks");
    const resourcesLinks = t.raw("resourcesLinks");
    const companyLinks = t.raw("companyLinks");
    const linksByKey = {
        platformLinks,
        resourcesLinks,
        companyLinks
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative overflow-hidden bg-neutral-950 text-neutral-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 bg-cover bg-center opacity-20 dark:invert dark:hue-rotate-180",
                style: {
                    backgroundImage: 'url("/assets/cards%20background/9.png")'
                }
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 bg-neutral-950/70"
            }, void 0, false, {
                fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-7xl px-6 py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-10 md:grid-cols-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/assets/pulse/Pulse%20-%20Red%20Rec%20Icon.svg",
                                                alt: "",
                                                width: 18,
                                                height: 18,
                                                className: "h-[18px] w-[18px]",
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                                lineNumber: 41,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold text-white",
                                                children: "Pulse AI"
                                            }, void 0, false, {
                                                fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                                lineNumber: 49,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 max-w-xs text-xs leading-relaxed text-neutral-300",
                                        children: t("tagline")
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            navColumns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold uppercase tracking-widest text-white",
                                            children: t(col.headingKey)
                                        }, void 0, false, {
                                            fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "mt-4 space-y-2.5 text-xs text-neutral-300",
                                            children: linksByKey[col.linksKey].map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "transition hover:text-white",
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 21
                                                    }, this)
                                                }, label, false, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, col.headingKey, true, {
                                    fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold uppercase tracking-widest text-white",
                                        children: t("contact")
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-4 space-y-2.5 text-xs text-neutral-300",
                                        children: contactLines.map((c)=>{
                                            const display = c.isLtr ? c.value : t("office");
                                            const inner = c.isLtr ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bidi-isolate inline-block",
                                                children: display
                                            }, void 0, false, {
                                                fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this) : display;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: c.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: c.href,
                                                    className: "transition hover:text-white",
                                                    children: inner
                                                }, void 0, false, {
                                                    fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 23
                                                }, this) : inner
                                            }, c.value, false, {
                                                fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 flex flex-col items-start justify-between gap-2 border-t border-neutral-800 pt-6 text-xs text-neutral-300 sm:flex-row sm:items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t("credit")
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t("rights")
                            }, void 0, false, {
                                fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/skeleton/product/SkeletonFooter.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(SkeletonFooter, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = SkeletonFooter;
var _c;
__turbopack_context__.k.register(_c, "SkeletonFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_0lbuy4e._.js.map