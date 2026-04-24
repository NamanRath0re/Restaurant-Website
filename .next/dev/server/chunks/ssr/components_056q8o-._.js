module.exports = [
"[project]/components/Navbar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Navbar() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return ()=>window.removeEventListener('scroll', onScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "site-container flex items-center justify-between  py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-1 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center shrink-0",
                                style: {
                                    width: 34,
                                    height: 41,
                                    background: '#39DB4A',
                                    borderRadius: 8
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/F.png",
                                    alt: "F",
                                    width: 20,
                                    height: 26,
                                    style: {
                                        objectFit: 'contain'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/oodi.png",
                                alt: "oodi",
                                width: 60,
                                height: 28,
                                style: {
                                    objectFit: 'contain'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden md:flex items-center gap-10",
                        children: [
                            {
                                label: 'Home',
                                href: '#home'
                            },
                            {
                                label: 'Menu',
                                href: '#menu'
                            },
                            {
                                label: 'Services',
                                href: '#services'
                            },
                            {
                                label: 'Offers',
                                href: '#offers'
                            }
                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "nav-link transition-colors hover:text-green-500",
                                    style: {
                                        color: i === 0 ? '#39DB4A' : '#1E1E1E',
                                        borderBottom: i === 0 ? '2px solid #39DB4A' : 'none',
                                        paddingBottom: i === 0 ? 4 : 0
                                    },
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            }, item.label, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center justify-center",
                                style: {
                                    width: 32,
                                    height: 32
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/search_icon.png",
                                    alt: "Search",
                                    width: 32,
                                    height: 32,
                                    style: {
                                        objectFit: 'contain'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "relative flex items-center justify-center",
                                style: {
                                    width: 24,
                                    height: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/cart_icon.png",
                                        alt: "Cart",
                                        width: 24,
                                        height: 24,
                                        style: {
                                            objectFit: 'contain'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute flex items-center justify-center text-white font-bold",
                                        style: {
                                            top: -8,
                                            right: -8,
                                            width: 18,
                                            height: 18,
                                            background: '#39DB4A',
                                            borderRadius: '50%',
                                            fontSize: 10
                                        },
                                        children: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center gap-2 text-white font-semibold",
                                style: {
                                    background: '#39DB4A',
                                    borderRadius: 9999,
                                    padding: '10px 20px',
                                    fontSize: 16,
                                    border: 'none',
                                    cursor: 'pointer'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/phone-call.png",
                                        alt: "Phone",
                                        width: 18,
                                        height: 18,
                                        style: {
                                            objectFit: 'contain'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    "Contact"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden p-2 rounded-lg text-gray-600",
                        onClick: ()=>setMobileOpen(!mobileOpen),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "w-6 h-6",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 86,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M4 6h16M4 12h16M4 18h16"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 87,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4",
                children: [
                    [
                        'Home',
                        'Menu',
                        'Services',
                        'Offers'
                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `#${item.toLowerCase()}`,
                            className: "nav-link text-gray-700 hover:text-green-500",
                            onClick: ()=>setMobileOpen(false),
                            children: item
                        }, item, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center justify-center gap-2 text-white font-semibold rounded-full py-2.5",
                        style: {
                            background: '#39DB4A'
                        },
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 94,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Hero.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
// 'use client'
// import { useEffect, useRef } from 'react'
// import Image from 'next/image'
// export default function Hero() {
//   const heroRef = useRef(null)
//   useEffect(() => {
//     const el = heroRef.current
//     if (el) {
//       el.style.opacity = '0'
//       setTimeout(() => {
//         el.style.transition = 'opacity 0.8s ease'
//         el.style.opacity = '1'
//       }, 100)
//     }
//   }, [])
//   return (
//     <section
//       id="home"
//       className="relative flex items-center overflow-hidden pt-[90px] pb-10"
//       style={{ minHeight: '100vh', background: '#fff' }}
//       ref={heroRef}
//     >
//       <div className="site-container">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           {/* LEFT CONTENT */}
//           <div className="flex flex-col">
//             {/* Label */}
//             <div className="flex items-center gap-2 mb-8 ">
//               <span className="text-xl">🎉</span>
//               <span style={{
//                 fontFamily: 'Inter, sans-serif',
//                 fontWeight: 700,
//                 fontSize: 16,
//                 lineHeight: 1,
//                 letterSpacing: '0.175em',
//                 textTransform: 'uppercase',
//                 color: '#FF6868',
//               }}>
//                 BEST FOOD IN TOWN
//               </span>
//             </div>
//             {/* Heading */}
//             <h1 style={{
//               fontFamily: 'Inter, sans-serif',
//               fontWeight: 600,
//               fontSize: 'clamp(32px, 5vw, 52px)',
//               lineHeight: '100%',
//               letterSpacing: 0,
//               color: '#000',
//               marginBottom: 24,
//             }}>
//               Dive into Delights<br />
//               Of Delectable <span style={{ color: '#39DB4A' }}>Food</span><br />
//             </h1>
//             {/* Subtitle */}
//             <p style={{
//               fontFamily: 'Inter, sans-serif',
//               fontWeight: 500,
//               fontSize: 'clamp(14px, 2vw, 20px)',
//               lineHeight: '171%',
//               letterSpacing: 0,
//               color: '#4A4A4A',
//               marginBottom: 40,
//             }}>
//               Where Each Plate Weaves a Story<br />
//               of Culinary Mastery and Passionate Craftsmanship
//             </p>
//             {/* CTA Buttons */}
//             <div className="flex flex-wrap items-center gap-6 mb-12">
//               <button style={{
//                 background: '#39DB4A',
//                 color: '#fff',
//                 border: 'none',
//                 borderRadius: 9999,
//                 padding: '14px 36px',
//                 fontFamily: 'Inter, sans-serif',
//                 fontWeight: 600,
//                 fontSize: 18,
//                 cursor: 'pointer',
//               }}>
//                 Order Now
//               </button>
//               <button className="flex items-center gap-3" style={{
//                 background: 'transparent',
//                 border: 'none',
//                 cursor: 'pointer',
//                 fontFamily: 'Inter, sans-serif',
//                 fontWeight: 500,
//                 fontSize: 18,
//                 color: '#1E1E1E',
//               }}>
//                 Watch Video
//                 <div style={{
//                   width: 48,
//                   height: 48,
//                   borderRadius: '50%',
//                   background: '#39DB4A',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   boxShadow: '0 4px 14px rgba(57,219,74,0.4)',
//                 }}>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
//                     <path d="M8 5v14l11-7z"/>
//                   </svg>
//                 </div>
//               </button>
//             </div>
//           </div>
//           {/* RIGHT: Girl + Green circle + cards */}
//           <div className="relative flex justify-center items-end" style={{ minHeight: 540 }}>
//             {/* Green circle */}
//             <div style={{
//               position: 'absolute',
//               width: 480,
//               height: 480,
//               borderRadius: '50%',
//               background: '#39DB4A',
//               bottom: 0,
//               left: '50%',
//               transform: 'translateX(-50%)',
//               zIndex: 0,
//             }} />
//             {/* Hot spicy Food tag */}
//             <div style={{
//               position: 'absolute',
//               top: 60,
//               left: '8%',
//               background: '#fff',
//               borderRadius: 12,
//               padding: '10px 18px',
//               boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//               zIndex: 20,
//               display: 'flex',
//               alignItems: 'center',
//               gap: 8,
//               fontFamily: 'Inter, sans-serif',
//               fontWeight: 600,
//               fontSize: 20,
//               lineHeight: 1,
//               color: '#FF6868',
//               whiteSpace: 'nowrap',
//             }}>
//               Hot spicy Food 🌶
//             </div>
//             {/* Girl image */}
//             <div style={{ position: 'relative', zIndex: 10 }}>
//               <Image
//                 src="/girl.png"
//                 alt="Chef girl holding food"
//                 width={440}
//                 height={520}
//                 style={{ objectFit: 'contain', objectPosition: 'bottom', display: 'block' }}
//                 priority
//               />
//             </div>
//             {/* Spicy noodles card */}
//             <div style={{
//               position: 'absolute',
//               bottom: 60,
//               left: '0%',
//               background: '#fff',
//               borderRadius: 16,
//               padding: '12px 16px',
//               boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
//               display: 'flex',
//               alignItems: 'center',
//               gap: 14,
//               zIndex: 30,
//               minWidth: 200,
//               animation: 'float 3s ease-in-out infinite',
//             }}>
//               <div style={{ width: 60, height: 60, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
//                 <Image src="/spicy_noodles.png" alt="Spicy noodles" width={60} height={60} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
//               </div>
//               <div>
//                 <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 22, lineHeight: 1, color: '#1E1E1E' }}>
//                   Spicy noodles
//                 </div>
//                 <div style={{ display: 'flex', gap: 2, margin: '6px 0 4px' }}>
//                   {[1,2,3,4,5].map(s => (
//                     <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= 4 ? '#FCCA0D' : '#E5E7EB'}>
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                     </svg>
//                   ))}
//                 </div>
//                 <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 18, color: '#1E1E1E' }}>
//                   <sup style={{ fontSize: 12 }}>$</sup>18.00
//                 </div>
//               </div>
//             </div>
//             {/* Vegetarian salad card */}
//             <div style={{
//               position: 'absolute',
//               bottom: 60,
//               right: '0%',
//               background: '#fff',
//               borderRadius: 16,
//               padding: '12px 16px',
//               boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
//               display: 'flex',
//               alignItems: 'center',
//               gap: 14,
//               zIndex: 30,
//               minWidth: 210,
//               animation: 'float 3s ease-in-out infinite',
//               animationDelay: '1.2s',
//             }}>
//               <div style={{ width: 60, height: 60, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
//                 <Image src="/salad.png" alt="Vegetarian salad" width={60} height={60} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
//               </div>
//               <div>
//                 <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 22, lineHeight: 1, color: '#1E1E1E' }}>
//                   Vegetarian salad
//                 </div>
//                 <div style={{ display: 'flex', gap: 2, margin: '6px 0 4px' }}>
//                   {[1,2,3,4,5].map(s => (
//                     <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= 4 ? '#FCCA0D' : '#E5E7EB'}>
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                     </svg>
//                   ))}
//                 </div>
//                 <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 18, color: '#1E1E1E' }}>
//                   <sup style={{ fontSize: 12 }}>$</sup>23.00
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client';
;
;
;
function Hero() {
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = heroRef.current;
        if (el) {
            el.style.opacity = '0';
            setTimeout(()=>{
                el.style.transition = 'opacity 0.8s ease';
                el.style.opacity = '1';
            }, 100);
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "relative flex items-center overflow-hidden pt-[90px] pb-20",
        style: {
            minHeight: '100vh',
            background: '#fff'
        },
        ref: heroRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "site-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-8 ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl",
                                        children: "🎉"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.js",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 700,
                                            fontSize: 16,
                                            lineHeight: 1,
                                            letterSpacing: '0.175em',
                                            textTransform: 'uppercase',
                                            color: '#FF6868'
                                        },
                                        children: "BEST FOOD IN TOWN"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.js",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.js",
                                lineNumber: 281,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 600,
                                    fontSize: 'clamp(32px, 5vw, 52px)',
                                    lineHeight: '100%',
                                    letterSpacing: 0,
                                    color: '#000',
                                    marginBottom: 24
                                },
                                children: [
                                    "Dive into Delights",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/Hero.js",
                                        lineNumber: 306,
                                        columnNumber: 33
                                    }, this),
                                    "Of Delectable ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#39DB4A'
                                        },
                                        children: "Food"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.js",
                                        lineNumber: 307,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/Hero.js",
                                        lineNumber: 307,
                                        columnNumber: 75
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.js",
                                lineNumber: 297,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 500,
                                    fontSize: 'clamp(14px, 2vw, 20px)',
                                    lineHeight: '171%',
                                    letterSpacing: 0,
                                    color: '#4A4A4A',
                                    marginBottom: 40
                                },
                                children: [
                                    "Where Each Plate Weaves a Story",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/Hero.js",
                                        lineNumber: 320,
                                        columnNumber: 46
                                    }, this),
                                    "of Culinary Mastery and Passionate Craftsmanship"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.js",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-6 mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: {
                                            background: '#39DB4A',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: 9999,
                                            padding: '14px 36px',
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 600,
                                            fontSize: 18,
                                            cursor: 'pointer'
                                        },
                                        children: "Order Now"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.js",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center gap-3",
                                        style: {
                                            background: 'transparent',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 500,
                                            fontSize: 18,
                                            color: '#1E1E1E'
                                        },
                                        children: [
                                            "Watch Video",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: '50%',
                                                    background: '#39DB4A',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    boxShadow: '0 4px 14px rgba(57,219,74,0.4)'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 24 24",
                                                    fill: "white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M8 5v14l11-7z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.js",
                                                        lineNumber: 361,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Hero.js",
                                                    lineNumber: 360,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.js",
                                                lineNumber: 350,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Hero.js",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.js",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.js",
                        lineNumber: 279,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex justify-center items-end",
                        style: {
                            minHeight: 540
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    width: 480,
                                    height: 480,
                                    borderRadius: '50%',
                                    background: '#39DB4A',
                                    bottom: 0,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    zIndex: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.js",
                                lineNumber: 372,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: 60,
                                    left: '8%',
                                    background: '#fff',
                                    borderRadius: 12,
                                    padding: '10px 18px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                    zIndex: 20,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 600,
                                    fontSize: 20,
                                    lineHeight: 1,
                                    color: '#FF6868',
                                    whiteSpace: 'nowrap'
                                },
                                children: "Hot spicy Food 🌶"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.js",
                                lineNumber: 385,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'relative',
                                    zIndex: 10
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/girl.png",
                                    alt: "Chef girl holding food",
                                    width: 440,
                                    height: 520,
                                    style: {
                                        objectFit: 'contain',
                                        objectPosition: 'bottom',
                                        display: 'block'
                                    },
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.js",
                                    lineNumber: 409,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.js",
                                lineNumber: 408,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    bottom: 60,
                                    left: '0%',
                                    background: '#fff',
                                    borderRadius: 16,
                                    padding: '12px 16px',
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 14,
                                    zIndex: 30,
                                    minWidth: 200,
                                    animation: 'float 3s ease-in-out infinite'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 60,
                                            height: 60,
                                            borderRadius: 12,
                                            overflow: 'hidden',
                                            flexShrink: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/spicy_noodles.png",
                                            alt: "Spicy noodles",
                                            width: 60,
                                            height: 60,
                                            style: {
                                                objectFit: 'cover',
                                                width: '100%',
                                                height: '100%'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.js",
                                            lineNumber: 436,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.js",
                                        lineNumber: 435,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontWeight: 600,
                                                    fontSize: 22,
                                                    lineHeight: 1,
                                                    color: '#1E1E1E'
                                                },
                                                children: "Spicy noodles"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.js",
                                                lineNumber: 439,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 2,
                                                    margin: '6px 0 4px'
                                                },
                                                children: [
                                                    1,
                                                    2,
                                                    3,
                                                    4,
                                                    5
                                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "14",
                                                        height: "14",
                                                        viewBox: "0 0 24 24",
                                                        fill: s <= 4 ? '#FCCA0D' : '#E5E7EB',
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Hero.js",
                                                            lineNumber: 445,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, s, false, {
                                                        fileName: "[project]/components/Hero.js",
                                                        lineNumber: 444,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.js",
                                                lineNumber: 442,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontWeight: 600,
                                                    fontSize: 18,
                                                    color: '#1E1E1E'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                                        style: {
                                                            fontSize: 12
                                                        },
                                                        children: "$"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.js",
                                                        lineNumber: 450,
                                                        columnNumber: 19
                                                    }, this),
                                                    "18.00"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Hero.js",
                                                lineNumber: 449,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Hero.js",
                                        lineNumber: 438,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.js",
                                lineNumber: 420,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    bottom: 60,
                                    right: '0%',
                                    background: '#fff',
                                    borderRadius: 16,
                                    padding: '12px 16px',
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 14,
                                    zIndex: 30,
                                    minWidth: 210,
                                    animation: 'float 3s ease-in-out infinite',
                                    animationDelay: '1.2s'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 60,
                                            height: 60,
                                            borderRadius: 12,
                                            overflow: 'hidden',
                                            flexShrink: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/salad.png",
                                            alt: "Vegetarian salad",
                                            width: 60,
                                            height: 60,
                                            style: {
                                                objectFit: 'cover',
                                                width: '100%',
                                                height: '100%'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.js",
                                            lineNumber: 473,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.js",
                                        lineNumber: 472,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontWeight: 600,
                                                    fontSize: 22,
                                                    lineHeight: 1,
                                                    color: '#1E1E1E'
                                                },
                                                children: "Vegetarian salad"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.js",
                                                lineNumber: 476,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 2,
                                                    margin: '6px 0 4px'
                                                },
                                                children: [
                                                    1,
                                                    2,
                                                    3,
                                                    4,
                                                    5
                                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "14",
                                                        height: "14",
                                                        viewBox: "0 0 24 24",
                                                        fill: s <= 4 ? '#FCCA0D' : '#E5E7EB',
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Hero.js",
                                                            lineNumber: 482,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, s, false, {
                                                        fileName: "[project]/components/Hero.js",
                                                        lineNumber: 481,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.js",
                                                lineNumber: 479,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontWeight: 600,
                                                    fontSize: 18,
                                                    color: '#1E1E1E'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                                        style: {
                                                            fontSize: 12
                                                        },
                                                        children: "$"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.js",
                                                        lineNumber: 487,
                                                        columnNumber: 19
                                                    }, this),
                                                    "23.00"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Hero.js",
                                                lineNumber: 486,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Hero.js",
                                        lineNumber: 475,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.js",
                                lineNumber: 456,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.js",
                        lineNumber: 369,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.js",
                lineNumber: 276,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Hero.js",
            lineNumber: 275,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Hero.js",
        lineNumber: 269,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Categories.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Categories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
// 'use client'
// import { useState } from 'react'
// import Image from 'next/image'
// const categories = [
//   { name: 'Main Dish',  count: '(86 dishes)',     image: '/burger.png',   circleBg: '#C1F1C6' },
//   { name: 'Break Fast', count: '(12 break fast)', image: '/sandwich.png', circleBg: '#C1F1C6' },
//   { name: 'Dessert',    count: '(48 dessert)',     image: '/icecream.png', circleBg: '#C1F1C6' },
//   { name: 'Browse All', count: '(255 Items)',      image: '/juice.png',    circleBg: '#C1F1C6' },
// ]
// export default function Categories() {
//   const [active, setActive] = useState(null)
//   return (
//     <section className="py-20 bg-white">
//       <div className="site-container">
//         <div className="text-center mb-14">
//           <p style={{
//             fontFamily: 'Inter, sans-serif',
//             fontWeight: 700,
//             fontSize: 16,
//             lineHeight: 1,
//             letterSpacing: '0.175em',
//             textTransform: 'uppercase',
//             color: '#FF6868',
//             marginBottom: 16,
//           }}>
//             CUSTOMER FAVORITES
//           </p>
//           <h2 style={{
//             fontFamily: 'Inter, sans-serif',
//             fontWeight: 700,
//             fontSize: 'clamp(30px, 5vw, 50px)',
//             lineHeight: 1,
//             letterSpacing: 0,
//             textAlign: 'center',
//             color: '#000',
//           }}>
//             Popular Categories
//           </h2>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {categories.map((cat, i) => (
//             <button
//               key={cat.name}
//               onClick={() => setActive(i)}
//               className="flex flex-col items-center gap-5 rounded-2xl transition-all duration-200"
//               style={{
//                 padding: '32px 20px',
//                 background: '#fff',
//                 border: active === i ? '2px solid #39DB4A' : '2px solid #F3F4F6',
//                 boxShadow: active === i
//                   ? '0 8px 30px rgba(57,219,74,0.15)'
//                   : '0 2px 12px rgba(0,0,0,0.06)',
//                 cursor: 'pointer',
//               }}
//             >
//               <div style={{
//                 width: 96,
//                 height: 96,
//                 borderRadius: '50%',
//                 background: cat.circleBg,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 overflow: 'hidden',
//               }}>
//                 <Image src={cat.image} alt={cat.name} width={64} height={64} style={{ objectFit: 'contain' }} />
//               </div>
//               <span style={{
//                 fontFamily: 'Inter, sans-serif',
//                 fontWeight: 600,
//                 fontSize: 'clamp(18px, 2vw, 30px)',
//                 lineHeight: 1,
//                 letterSpacing: 0,
//                 textAlign: 'center',
//                 color: '#1E1E1E',
//               }}>
//                 {cat.name}
//               </span>
//               <span style={{
//                 fontFamily: 'Inter, sans-serif',
//                 fontWeight: 500,
//                 fontSize: 'clamp(14px, 1.5vw, 22px)',
//                 lineHeight: 1,
//                 letterSpacing: 0,
//                 textAlign: 'center',
//                 color: '#555555',
//               }}>
//                 {cat.count}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
'use client';
;
;
;
const categories = [
    {
        name: 'Main Dish',
        count: '(86 dishes)',
        image: '/burger.png',
        circleBg: '#C1F1C6'
    },
    {
        name: 'Break Fast',
        count: '(12 break fast)',
        image: '/sandwich.png',
        circleBg: '#C1F1C6'
    },
    {
        name: 'Dessert',
        count: '(48 dessert)',
        image: '/icecream.png',
        circleBg: '#C1F1C6'
    },
    {
        name: 'Browse All',
        count: '(255 Items)',
        image: '/juice.png',
        circleBg: '#C1F1C6'
    }
];
function Categories() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-28 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "site-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                fontSize: 16,
                                lineHeight: 1,
                                letterSpacing: '0.175em',
                                textTransform: 'uppercase',
                                color: '#FF6868',
                                marginBottom: 16
                            },
                            children: "CUSTOMER FAVORITES"
                        }, void 0, false, {
                            fileName: "[project]/components/Categories.js",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                fontSize: 'clamp(30px, 5vw, 50px)',
                                lineHeight: 1,
                                letterSpacing: 0,
                                textAlign: 'center',
                                color: '#000'
                            },
                            children: "Popular Categories"
                        }, void 0, false, {
                            fileName: "[project]/components/Categories.js",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Categories.js",
                    lineNumber: 123,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-6",
                    children: categories.map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActive(i),
                            className: "flex flex-col items-center gap-5 rounded-2xl transition-all duration-200",
                            style: {
                                padding: '32px 20px',
                                background: '#fff',
                                border: active === i ? '2px solid #39DB4A' : '2px solid #F3F4F6',
                                boxShadow: active === i ? '0 8px 30px rgba(57,219,74,0.15)' : '0 2px 12px rgba(0,0,0,0.06)',
                                cursor: 'pointer'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 96,
                                        height: 96,
                                        borderRadius: '50%',
                                        background: cat.circleBg,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: cat.image,
                                        alt: cat.name,
                                        width: 64,
                                        height: 64,
                                        style: {
                                            objectFit: 'contain'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Categories.js",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Categories.js",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 600,
                                        fontSize: 'clamp(18px, 2vw, 30px)',
                                        lineHeight: 1,
                                        letterSpacing: 0,
                                        textAlign: 'center',
                                        color: '#1E1E1E'
                                    },
                                    children: cat.name
                                }, void 0, false, {
                                    fileName: "[project]/components/Categories.js",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 500,
                                        fontSize: 'clamp(14px, 1.5vw, 22px)',
                                        lineHeight: 1,
                                        letterSpacing: 0,
                                        textAlign: 'center',
                                        color: '#555555'
                                    },
                                    children: cat.count
                                }, void 0, false, {
                                    fileName: "[project]/components/Categories.js",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, cat.name, true, {
                            fileName: "[project]/components/Categories.js",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Categories.js",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Categories.js",
            lineNumber: 121,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Categories.js",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/StandoutDishes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StandoutDishes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
// 'use client'
// import { useState } from 'react'
// import Image from 'next/image'
// const dishes = [
//   { name: 'Fattoush salad',   description: 'Description of the item', price: '$24.00', rating: 4.9, image: '/salad1.png' },
//   { name: 'Vegetable salad',  description: 'Description of the item', price: '$26.00', rating: 4.6, image: '/salad2.png' },
//   { name: 'Egg vegi salad',   description: 'Description of the item', price: '$23.00', rating: 4.5, image: '/salad3.png' },
// ]
// function StarRating({ rating }) {
//   return (
//     <div className="flex items-center gap-1.5">
//       <div className="flex gap-0.5">
//         {[1, 2, 3, 4, 5].map(s => (
//           <svg key={s} width="16" height="16" viewBox="0 0 24 24"
//             fill={s <= Math.round(rating) ? '#FCCA0D' : '#E5E7EB'}>
//             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//           </svg>
//         ))}
//       </div>
//       <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, color: '#555' }}>
//         {rating}
//       </span>
//     </div>
//   )
// }
// export default function StandoutDishes() {
//   const [liked, setLiked] = useState({})
//   const toggleLike = (i) => setLiked(prev => ({ ...prev, [i]: !prev[i] }))
//   return (
//     <section id="menu" className="py-20 mt-20 bg-white">
//       <div className="site-container">
//         <div className="flex items-end justify-between mb-14">
//           <div>
//             <p style={{
//               fontFamily: 'Inter, sans-serif',
//               fontWeight: 700,
//               fontSize: 16,
//               lineHeight: 1,
//               letterSpacing: '0.175em',
//               textTransform: 'uppercase',
//               color: '#FF6868',
//               marginBottom: 16,
//             }}>
//               SPECIAL DISHES
//             </p>
//             <h2 style={{
//               fontFamily: 'Inter, sans-serif',
//               fontWeight: 700,
//               fontSize: 'clamp(25px, 5vw, 40px)',
//               lineHeight: '132%',
//               letterSpacing: 0,
//               color: '#000',
//             }}>
//               Standout Dishes<br />From Our Menu
//             </h2>
//           </div>
//           <div className="flex gap-3 shrink-0 mb-2 mt-2">
//             <button style={{
//               width: 44, height: 44, borderRadius: '50%',
//               border: '1.5px solid #D1D5DB', background: '#fff',
//               display: 'flex', alignItems: 'center', justifyContent: 'center',
//               cursor: 'pointer',
//             }}>
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#555" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//             <button style={{
//               width: 44, height: 44, borderRadius: '50%',
//               background: '#39DB4A', border: 'none',
//               display: 'flex', alignItems: 'center', justifyContent: 'center',
//               cursor: 'pointer',
//             }}>
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {dishes.map((dish, i) => (
//             <div
//               key={dish.name}
//               className="card-hover bg-white rounded-3xl overflow-hidden"
//               style={{ border: '1px solid #F3F4F6', boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}
//             >
//               <div className="relative flex items-center justify-center"
//                 style={{ height: 220, background: '#fff', padding: '20px 24px 0' }}>
//                 <Image
//                   src={dish.image}
//                   alt={dish.name}
//                   width={200}
//                   height={180}
//                   style={{ objectFit: 'contain', display: 'block' }}
//                 />
//                 {/* Heart button — exact Figma shape */}
//                 <button
//                   onClick={() => toggleLike(i)}
//                   style={{
//                     position: 'absolute',
//                     top: 0,
//                     right: 0,
//                     width: 87,
//                     height: 75,
//                     background: '#39DB4A',
//                     borderTopRightRadius: 37.5,
//                     borderBottomLeftRadius: 42.5,
//                     borderTopLeftRadius: 0,
//                     borderBottomRightRadius: 0,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     border: 'none',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill={liked[i] ? '#fff' : 'none'}
//                     stroke="#fff"
//                     strokeWidth={2}
//                     style={{ marginTop: 8, marginRight: 6 }}
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round"
//                       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                   </svg>
//                 </button>
//               </div>
//               <div style={{ padding: '20px 24px 24px' }}>
//                 <h3 style={{
//                   fontFamily: 'Inter, sans-serif',
//                   fontWeight: 600,
//                   fontSize: 22,
//                   color: '#1E1E1E',
//                   // marginBottom: 6,
//                 }}>
//                   {dish.name}
//                 </h3>
//                 <p style={{
//                   fontFamily: 'Inter, sans-serif',
//                   fontWeight: 400,
//                   fontSize: 14,
//                   color: '#9CA3AF',
//                   marginBottom: 10,
//                 }}>
//                   {dish.description}
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div style={{
//                       fontFamily: 'Inter, sans-serif',
//                       fontWeight: 700,
//                       fontSize: 16,
//                       color: '#1E1E1E',
//                       marginBottom: 6,
//                     }}>
//                       <sup style={{ fontSize: 16, fontWeight: 600 }}>$</sup>
//                       {dish.price.replace('$', '')}
//                     </div>
//                     <StarRating rating={dish.rating} />
//                   </div>
//                   <button style={{
//                     width: 44,
//                     height: 44,
//                     borderRadius: '50%',
//                     background: '#39DB4A',
//                     border: 'none',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     cursor: 'pointer',
//                   }}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.5}>
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
'use client';
;
;
;
const dishes = [
    {
        name: 'Fattoush salad',
        description: 'Description of the item',
        price: '$24.00',
        rating: 4.9,
        image: '/salad1.png'
    },
    {
        name: 'Vegetable salad',
        description: 'Description of the item',
        price: '$26.00',
        rating: 4.6,
        image: '/salad2.png'
    },
    {
        name: 'Egg vegi salad',
        description: 'Description of the item',
        price: '$23.00',
        rating: 4.5,
        image: '/salad3.png'
    }
];
function StarRating({ rating }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-0.5",
                children: [
                    1,
                    2,
                    3,
                    4,
                    5
                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: s <= Math.round(rating) ? '#FCCA0D' : '#E5E7EB',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        }, void 0, false, {
                            fileName: "[project]/components/StandoutDishes.js",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this)
                    }, s, false, {
                        fileName: "[project]/components/StandoutDishes.js",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/StandoutDishes.js",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: 14,
                    color: '#555'
                },
                children: rating
            }, void 0, false, {
                fileName: "[project]/components/StandoutDishes.js",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/StandoutDishes.js",
        lineNumber: 213,
        columnNumber: 5
    }, this);
}
function StandoutDishes() {
    const [liked, setLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const toggleLike = (i)=>setLiked((prev)=>({
                ...prev,
                [i]: !prev[i]
            }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "menu",
        className: "py-28 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "site-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-end justify-between mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 700,
                                        fontSize: 16,
                                        lineHeight: 1,
                                        letterSpacing: '0.175em',
                                        textTransform: 'uppercase',
                                        color: '#FF6868',
                                        marginBottom: 16
                                    },
                                    children: "SPECIAL DISHES"
                                }, void 0, false, {
                                    fileName: "[project]/components/StandoutDishes.js",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 700,
                                        fontSize: 'clamp(25px, 5vw, 40px)',
                                        lineHeight: '132%',
                                        letterSpacing: 0,
                                        color: '#000'
                                    },
                                    children: [
                                        "Standout Dishes",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/StandoutDishes.js",
                                            lineNumber: 259,
                                            columnNumber: 30
                                        }, this),
                                        "From Our Menu"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StandoutDishes.js",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StandoutDishes.js",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 shrink-0 mb-2 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: {
                                        width: 44,
                                        height: 44,
                                        borderRadius: '50%',
                                        border: '1.5px solid #D1D5DB',
                                        background: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "20",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "#555",
                                        strokeWidth: 2,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M15 19l-7-7 7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StandoutDishes.js",
                                            lineNumber: 271,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/StandoutDishes.js",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/StandoutDishes.js",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: {
                                        width: 44,
                                        height: 44,
                                        borderRadius: '50%',
                                        background: '#39DB4A',
                                        border: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "20",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "#fff",
                                        strokeWidth: 2,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M9 5l7 7-7 7"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StandoutDishes.js",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/StandoutDishes.js",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/StandoutDishes.js",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StandoutDishes.js",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/StandoutDishes.js",
                    lineNumber: 237,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: dishes.map((dish, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-hover bg-white rounded-3xl overflow-hidden",
                            style: {
                                border: '1px solid #F3F4F6',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.07)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex items-center justify-center",
                                    style: {
                                        height: 220,
                                        background: '#fff',
                                        padding: '20px 24px 0'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: dish.image,
                                            alt: dish.name,
                                            width: 200,
                                            height: 180,
                                            style: {
                                                objectFit: 'contain',
                                                display: 'block'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/StandoutDishes.js",
                                            lineNumber: 296,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>toggleLike(i),
                                            style: {
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                                width: 87,
                                                height: 75,
                                                background: '#39DB4A',
                                                borderTopRightRadius: 37.5,
                                                borderBottomLeftRadius: 42.5,
                                                borderTopLeftRadius: 0,
                                                borderBottomRightRadius: 0,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                border: 'none',
                                                cursor: 'pointer'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: liked[i] ? '#fff' : 'none',
                                                stroke: "#fff",
                                                strokeWidth: 2,
                                                style: {
                                                    marginTop: 8,
                                                    marginRight: 6
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/StandoutDishes.js",
                                                    lineNumber: 335,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/StandoutDishes.js",
                                                lineNumber: 325,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/StandoutDishes.js",
                                            lineNumber: 305,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StandoutDishes.js",
                                    lineNumber: 294,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '20px 24px 24px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 600,
                                                fontSize: 22,
                                                color: '#1E1E1E'
                                            },
                                            children: dish.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/StandoutDishes.js",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 400,
                                                fontSize: 14,
                                                color: '#9CA3AF',
                                                marginBottom: 10
                                            },
                                            children: dish.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/StandoutDishes.js",
                                            lineNumber: 351,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: 'Inter, sans-serif',
                                                                fontWeight: 700,
                                                                fontSize: 16,
                                                                color: '#1E1E1E',
                                                                marginBottom: 6
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                                                    style: {
                                                                        fontSize: 16,
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "$"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/StandoutDishes.js",
                                                                    lineNumber: 369,
                                                                    columnNumber: 23
                                                                }, this),
                                                                dish.price.replace('$', '')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/StandoutDishes.js",
                                                            lineNumber: 362,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StarRating, {
                                                            rating: dish.rating
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/StandoutDishes.js",
                                                            lineNumber: 372,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/StandoutDishes.js",
                                                    lineNumber: 361,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    style: {
                                                        width: 44,
                                                        height: 44,
                                                        borderRadius: '50%',
                                                        background: '#39DB4A',
                                                        border: 'none',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        cursor: 'pointer'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "20",
                                                        height: "20",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "#fff",
                                                        strokeWidth: 2.5,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M12 4v16m8-8H4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/StandoutDishes.js",
                                                            lineNumber: 386,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/StandoutDishes.js",
                                                        lineNumber: 385,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/StandoutDishes.js",
                                                    lineNumber: 374,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/StandoutDishes.js",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StandoutDishes.js",
                                    lineNumber: 341,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, dish.name, true, {
                            fileName: "[project]/components/StandoutDishes.js",
                            lineNumber: 289,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/StandoutDishes.js",
                    lineNumber: 287,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/StandoutDishes.js",
            lineNumber: 235,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/StandoutDishes.js",
        lineNumber: 234,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Testimonials.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
// 'use client'
// import { useState } from 'react'
// import Image from 'next/image'
// const testimonials = [
//   {
//     name: 'Customer Feedback',
//     role: 'Regular Customer',
//     text: "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable",
//     rating: 4.9,
//     reviews: '18.6k',
//     image: '/customer1.png',
//   },
//   {
//     name: 'Sarah Mitchell',
//     role: 'Food Blogger',
//     text: "Absolutely incredible experience! Every dish was a masterpiece. The flavors, presentation, and service exceeded all my expectations. Will definitely be back!",
//     rating: 5.0,
//     reviews: '12.1k',
//     image: '/customer2.png',
//   },
//   {
//     name: 'James Rodriguez',
//     role: 'Chef Enthusiast',
//     text: "The culinary craftsmanship here is outstanding. Each plate tells a story of passion and dedication. Foodi has set a new standard for dining excellence.",
//     rating: 4.8,
//     reviews: '8.4k',
//     image: '/customer3.png',
//   },
// ]
// export default function Testimonials() {
//   const [active, setActive] = useState(0)
//   const t = testimonials[active]
//   return (
//     <section className="py-20 bg-[#f9f9f9]">
//       <div className="max-w-[1200px] mx-auto px-8">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left — Chef image */}
//           <div className="relative flex items-end justify-center">
//             {/* Green blob behind chef */}
//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[320px] bg-[#39DB4A] rounded-[60%_40%_55%_45%_/_50%_60%_40%_50%]" />
//             {/* Decorative emoji badges */}
//             {/* <div className="absolute top-[30%] left-[5%] text-3xl z-10">😊</div> */}
//             <div className="absolute top-[20%] right-[8%] text-3xl z-10">🍕</div>
//             {/* Chef image */}
//             <div className="relative z-10">
//               <Image
//                 src="/cheif.png"
//                 alt="Our Best Chef"
//                 width={320}
//                 height={400}
//                 className="object-contain object-bottom block"
//               />
//             </div>
//             {/* "Our Best Chef" badge */}
//             <div className="absolute bottom-4 right-[5%] z-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2">
//               <span className="text-xl">👨‍🍳</span>
//               <span className="font-semibold text-sm text-gray-800">Our Best Chef</span>
//             </div>
//           </div>
//           {/* Right — Testimonial */}
//           <div>
//             <p className="font-bold text-[13px] tracking-[0.175em] uppercase text-[#FF6868] mb-3">
//               TESTIMONIALS
//             </p>
//             <h2 className="font-bold text-[clamp(32px,4vw,48px)] leading-[130%] text-black mb-8">
//               What Our Customers<br />Say About Us
//             </h2>
//             {/* Quote */}
//             <p className="text-gray-600 leading-relaxed text-base mb-8">
//               "{t.text}"
//             </p>
//             {/* Customer info + rating */}
//             <div className="flex items-center gap-4 mb-8">
//               {/* Stacked avatars */}
//               <div className="flex -space-x-3">
//                 {testimonials.map((tc, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setActive(i)}
//                     className={`w-11 h-11 rounded-full overflow-hidden border-2 border-white transition-all duration-200 ${
//                       active === i ? 'scale-110 z-10 ring-2 ring-[#39DB4A]' : 'opacity-80 hover:opacity-100'
//                     }`}
//                     style={{ zIndex: active === i ? 10 : testimonials.length - i }}
//                   >
//                     <Image src={tc.image} alt={tc.name} width={44} height={44} className="object-cover w-full h-full" />
//                   </button>
//                 ))}
//               </div>
//               {/* Name + rating */}
//               <div>
//                 <div className="font-bold text-gray-900">{t.name}</div>
//                 <div className="flex items-center gap-1.5 mt-0.5">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                   </svg>
//                   <span className="font-bold text-sm text-gray-800">{t.rating}</span>
//                   <span className="text-sm text-gray-400">({t.reviews} Reviews)</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client';
;
;
;
const testimonials = [
    {
        name: 'Customer Feedback',
        role: 'Regular Customer',
        text: "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable",
        rating: 4.9,
        reviews: '18.6k',
        image: '/customer1.png'
    },
    {
        name: 'Sarah Mitchell',
        role: 'Food Blogger',
        text: "Absolutely incredible experience! Every dish was a masterpiece. The flavors, presentation, and service exceeded all my expectations. Will definitely be back!",
        rating: 5.0,
        reviews: '12.1k',
        image: '/customer2.png'
    },
    {
        name: 'James Rodriguez',
        role: 'Chef Enthusiast',
        text: "The culinary craftsmanship here is outstanding. Each plate tells a story of passion and dedication. Foodi has set a new standard for dining excellence.",
        rating: 4.8,
        reviews: '8.4k',
        image: '/customer3.png'
    }
];
function Testimonials() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const t = testimonials[active];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-28 bg-[#f9f9f9]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1200px] mx-auto px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-16 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-end justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[320px] bg-[#39DB4A] rounded-[60%_40%_55%_45%_/_50%_60%_40%_50%]"
                            }, void 0, false, {
                                fileName: "[project]/components/Testimonials.js",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[20%] right-[8%] text-3xl z-10",
                                children: "🍕"
                            }, void 0, false, {
                                fileName: "[project]/components/Testimonials.js",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/cheif.png",
                                    alt: "Our Best Chef",
                                    width: 320,
                                    height: 400,
                                    className: "object-contain object-bottom block"
                                }, void 0, false, {
                                    fileName: "[project]/components/Testimonials.js",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Testimonials.js",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 right-[5%] z-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl",
                                        children: "👨‍🍳"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Testimonials.js",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-sm text-gray-800",
                                        children: "Our Best Chef"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Testimonials.js",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Testimonials.js",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Testimonials.js",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-[13px] tracking-[0.175em] uppercase text-[#FF6868] mb-3",
                                children: "TESTIMONIALS"
                            }, void 0, false, {
                                fileName: "[project]/components/Testimonials.js",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-bold text-[clamp(32px,4vw,48px)] leading-[130%] text-black mb-8",
                                children: [
                                    "What Our Customers",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/Testimonials.js",
                                        lineNumber: 194,
                                        columnNumber: 33
                                    }, this),
                                    "Say About Us"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Testimonials.js",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 leading-relaxed text-base mb-8",
                                children: [
                                    '"',
                                    t.text,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Testimonials.js",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex -space-x-3",
                                        children: testimonials.map((tc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActive(i),
                                                className: `w-11 h-11 rounded-full overflow-hidden border-2 border-white transition-all duration-200 ${active === i ? 'scale-110 z-10 ring-2 ring-[#39DB4A]' : 'opacity-80 hover:opacity-100'}`,
                                                style: {
                                                    zIndex: active === i ? 10 : testimonials.length - i
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: tc.image,
                                                    alt: tc.name,
                                                    width: 44,
                                                    height: 44,
                                                    className: "object-cover w-full h-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Testimonials.js",
                                                    lineNumber: 215,
                                                    columnNumber: 21
                                                }, this)
                                            }, i, false, {
                                                fileName: "[project]/components/Testimonials.js",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Testimonials.js",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold text-gray-900",
                                                children: t.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/Testimonials.js",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 mt-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "14",
                                                        height: "14",
                                                        viewBox: "0 0 24 24",
                                                        fill: "#f59e0b",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Testimonials.js",
                                                            lineNumber: 225,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Testimonials.js",
                                                        lineNumber: 224,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-sm text-gray-800",
                                                        children: t.rating
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Testimonials.js",
                                                        lineNumber: 227,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-400",
                                                        children: [
                                                            "(",
                                                            t.reviews,
                                                            " Reviews)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Testimonials.js",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Testimonials.js",
                                                lineNumber: 223,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Testimonials.js",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Testimonials.js",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Testimonials.js",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Testimonials.js",
                lineNumber: 159,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Testimonials.js",
            lineNumber: 158,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Testimonials.js",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Services.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
// 'use client'
// import Image from 'next/image'
// const services = [
//   {
//     image: '/catering.png',
//     title: 'Catering',
//     description: 'Delight your guests with our flavors and presentation',
//   },
//   {
//     image: '/fast-delivery.png',
//     title: 'Fast Delivery',
//     description: 'We deliver your order promptly to your door',
//   },
//   {
//     image: '/cart-check.png',
//     title: 'Online Ordering',
//     description: 'Explore menu & order with ease using our Online Ordering',
//   },
//   {
//     image: '/gift-card.png',
//     title: 'Gift Cards',
//     description: 'Give the gift of exceptional dining with Foodi Gift Cards',
//   },
// ]
// export default function Services() {
//   return (
//     <section id="services" className="py-24 bg-white">
//       <div className="site-container">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left — Text */}
//           <div>
//             <p className="font-bold text-[13px] tracking-[0.175em] uppercase text-[#FF6868] mb-4">
//               OUR STORY & SERVICES
//             </p>
//             <h2 className="font-bold text-[clamp(32px,4vw,48px)] leading-[130%] text-black mb-6">
//               Our Culinary Journey<br />And Services
//             </h2>
//             <p className="text-gray-500 leading-relaxed mb-10 max-w-md">
//               Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
//             </p>
//             <button className="bg-[#39DB4A] text-white font-semibold rounded-full px-8 py-3.5 border-none cursor-pointer">
//               Explore
//             </button>
//           </div>
//           {/* Right — Services grid */}
//           <div className="grid grid-cols-2 gap-5">
//             {services.map((svc) => (
//               <div
//                 key={svc.title}
//                 className="rounded-2xl p-6 border border-gray-100 shadow-sm bg-white flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200 cursor-pointer"
//               >
//                 <div className="w-16 h-16 mb-4 flex items-center justify-center">
//                   <Image
//                     src={svc.image}
//                     alt={svc.title}
//                     width={56}
//                     height={56}
//                     className="object-contain"
//                   />
//                 </div>
//                 <h3 className="font-bold text-[13px] tracking-[0.1em] uppercase text-[#1E1E1E] mb-2">
//                   {svc.title}
//                 </h3>
//                 <p className="text-sm text-gray-400 leading-relaxed">{svc.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client';
;
;
const services = [
    {
        image: '/catering.png',
        title: 'Catering',
        description: 'Delight your guests with our flavors and presentation'
    },
    {
        image: '/fast-delivery.png',
        title: 'Fast Delivery',
        description: 'We deliver your order promptly to your door'
    },
    {
        image: '/cart-check.png',
        title: 'Online Ordering',
        description: 'Explore menu & order with ease using our Online Ordering'
    },
    {
        image: '/gift-card.png',
        title: 'Gift Cards',
        description: 'Give the gift of exceptional dining with Foodi Gift Cards'
    }
];
function Services() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        className: "py-28 bg-white",
        style: {
            padding: '112px 0'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "site-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-16 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-[13px] tracking-[0.175em] uppercase text-[#FF6868] mb-4",
                                children: "OUR STORY & SERVICES"
                            }, void 0, false, {
                                fileName: "[project]/components/Services.js",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-bold text-[clamp(32px,4vw,48px)] leading-[130%] text-black mb-6",
                                children: [
                                    "Our Culinary Journey",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/Services.js",
                                        lineNumber: 118,
                                        columnNumber: 35
                                    }, this),
                                    "And Services"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Services.js",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 leading-relaxed mb-10 max-w-md",
                                children: "Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality."
                            }, void 0, false, {
                                fileName: "[project]/components/Services.js",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-[#39DB4A] text-white font-semibold rounded-full px-8 py-3.5 border-none cursor-pointer",
                                children: "Explore"
                            }, void 0, false, {
                                fileName: "[project]/components/Services.js",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Services.js",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-5",
                        children: services.map((svc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl p-6 border border-gray-100 shadow-sm bg-white flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 mb-4 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: svc.image,
                                            alt: svc.title,
                                            width: 56,
                                            height: 56,
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.js",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Services.js",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-[13px] tracking-[0.1em] uppercase text-[#1E1E1E] mb-2",
                                        children: svc.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/Services.js",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400 leading-relaxed",
                                        children: svc.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/Services.js",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, svc.title, true, {
                                fileName: "[project]/components/Services.js",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Services.js",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Services.js",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Services.js",
            lineNumber: 109,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Services.js",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_056q8o-._.js.map