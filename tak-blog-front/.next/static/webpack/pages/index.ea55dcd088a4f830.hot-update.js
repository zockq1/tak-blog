"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  height: 60px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  font-size: 30px;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  font-family: \"Sansita Swashed\", cursive;\\n  font-size: 36px;\\n  font-weight: 900;\\n'\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: fixed;\\n  top: 60px;\\n  left: \",\n        \";\\n  width: 300px;\\n  height: 100vh;\\n  background-color: \",\n        \";\\n  transition: left 0.3s ease-in-out, background-color 0.3s ease-in-out;\\n  z-index: 1000;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  content: \"\";\\n  position: fixed;\\n  top: 60px;\\n  left: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  background-color: rgba(0, 0, 0);\\n  display: ',\n        \";\\n  transition: opacity 0.3s ease-in-out;\\n  z-index: 100;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].header(_templateObject());\n_c = HeaderWrapper;\nconst Logo = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((next_link__WEBPACK_IMPORTED_MODULE_2___default()))(_templateObject1());\n_c1 = Logo;\nconst Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].nav(_templateObject2(), (param)=>{\n    let { isActive  } = param;\n    return isActive ? \"0\" : \"-300px\";\n}, (param)=>{\n    let { isActive  } = param;\n    return isActive ? \"#fff\" : \"#333\";\n});\n_c2 = Sidebar;\nconst Shadow = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject3(), (param)=>{\n    let { isActive  } = param;\n    return isActive ? \"block\" : \"none\";\n});\n_c3 = Shadow;\nfunction BlogLayout() {\n    _s();\n    const [isActive, setisActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const sidebarRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const sidebarIconRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const isActiveSidebar = ()=>{\n        console.log(\"click!\", isActive);\n        setisActive(!isActive);\n    };\n    const handleClickOutside = (event)=>{\n        if (sidebarRef.current && !sidebarRef.current.contains(event.target) && sidebarIconRef.current && !sidebarIconRef.current.contains(event.target)) {\n            setisActive(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        document.addEventListener(\"mousedown\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Sidebar, {\n                isActive: isActive,\n                ref: sidebarRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Shadow, {}, void 0, false, {\n                fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.MenuUnfoldOutlined, {\n                onClick: isActiveSidebar,\n                ref: sidebarIconRef\n            }, void 0, false, {\n                fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Logo, {\n                href: \"/\",\n                children: \"Tak-Blog\"\n            }, void 0, false, {\n                fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.LoginOutlined, {}, void 0, false, {\n                fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(BlogLayout, \"nl7aOqPHGkfNkAF4I3+Ol6VKh4k=\");\n_c4 = BlogLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogLayout);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"HeaderWrapper\");\n$RefreshReg$(_c1, \"Logo\");\n$RefreshReg$(_c2, \"Sidebar\");\n$RefreshReg$(_c3, \"Shadow\");\n$RefreshReg$(_c4, \"BlogLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNWO0FBQ3lDO0FBQ2xCO0FBRXBELE1BQU1PLGdCQUFnQlAsZ0VBQWE7S0FBN0JPO0FBUU4sTUFBTUUsT0FBT1QsNkRBQU1BLENBQUNDLGtEQUFJQTtNQUFsQlE7QUFNTixNQUFNQyxVQUFVViw2REFBVSxxQkFHaEIsU0FBbUJZO1FBQWxCLEVBQUVBLFNBQVEsRUFBRTtXQUFNQSxXQUFXLE1BQU0sUUFBUTtBQUFELEdBRy9CLFNBQW1CQTtRQUFsQixFQUFFQSxTQUFRLEVBQUU7V0FBTUEsV0FBVyxTQUFTLE1BQU07QUFBRDtNQU41REY7QUFXTixNQUFNRyxTQUFTYiw2REFBVSxxQkFRWixTQUFtQlk7UUFBbEIsRUFBRUEsU0FBUSxFQUFFO1dBQU1BLFdBQVcsVUFBVSxNQUFNO0FBQUQ7TUFScERDO0FBYU4sU0FBU0UsYUFBaUM7O0lBQ3hDLE1BQU0sQ0FBQ0gsVUFBVUksWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzlDLE1BQU1XLGFBQWFaLDZDQUFNQSxDQUFpQixJQUFJO0lBQzlDLE1BQU1hLGlCQUFpQmIsNkNBQU1BLENBQWlCLElBQUk7SUFFbEQsTUFBTWMsa0JBQWtCLElBQU07UUFDNUJDLFFBQVFDLEdBQUcsQ0FBQyxVQUFVVDtRQUN0QkksWUFBWSxDQUFDSjtJQUNmO0lBRUEsTUFBTVUscUJBQXFCLENBQUNDLFFBQXNCO1FBQ2hELElBQ0VOLFdBQVdPLE9BQU8sSUFDbEIsQ0FBQ1AsV0FBV08sT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sS0FDekNSLGVBQWVNLE9BQU8sSUFDdEIsQ0FBQ04sZUFBZU0sT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sR0FDN0M7WUFDQVYsWUFBWSxLQUFLO1FBQ25CLENBQUM7SUFDSDtJQUVBWixnREFBU0EsQ0FBQyxJQUFNO1FBQ2R1QixTQUFTQyxnQkFBZ0IsQ0FBQyxhQUFhTjtRQUV2QyxPQUFPLElBQU07WUFDWEssU0FBU0UsbUJBQW1CLENBQUMsYUFBYVA7UUFDNUM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2Y7OzBCQUNDLDhEQUFDRztnQkFBUUUsVUFBVUE7Z0JBQVVrQixLQUFLYjswQkFDaEMsNEVBQUNjOztzQ0FDQyw4REFBQ0M7c0NBQ0MsNEVBQUNDO2dDQUFFQyxNQUFLOzBDQUFJOzs7Ozs7Ozs7OztzQ0FFZCw4REFBQ0Y7c0NBQ0MsNEVBQUNDO2dDQUFFQyxNQUFLOzBDQUFJOzs7Ozs7Ozs7OztzQ0FFZCw4REFBQ0Y7c0NBQ0MsNEVBQUNDO2dDQUFFQyxNQUFLOzBDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlsQiw4REFBQ3JCOzs7OzswQkFDRCw4REFBQ1YsaUVBQWtCQTtnQkFBQ2dDLFNBQVNoQjtnQkFBaUJXLEtBQUtaOzs7Ozs7MEJBQ25ELDhEQUFDVDtnQkFBS3lCLE1BQUs7MEJBQUk7Ozs7OzswQkFDZiw4REFBQ2hDLDREQUFhQTs7Ozs7Ozs7Ozs7QUFHcEI7R0FsRFNhO01BQUFBO0FBb0RULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeD8wMzY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBMb2dpbk91dGxpbmVkLCBNZW51VW5mb2xkT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMzBweDtcbmA7XG5cbmNvbnN0IExvZ28gPSBzdHlsZWQoTGluaylgXG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG5gO1xuXG5jb25zdCBTaWRlYmFyID0gc3R5bGVkLm5hdjx7IGlzQWN0aXZlOiBib29sZWFuIH0+YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjBweDtcbiAgbGVmdDogJHsoeyBpc0FjdGl2ZSB9KSA9PiAoaXNBY3RpdmUgPyBcIjBcIiA6IFwiLTMwMHB4XCIpfTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IFwiI2ZmZlwiIDogXCIjMzMzXCIpfTtcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDEwMDA7XG5gO1xuXG5jb25zdCBTaGFkb3cgPSBzdHlsZWQuZGl2PHsgaXNBY3RpdmU6IGJvb2xlYW4gfT5gXG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA2MHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCk7XG4gIGRpc3BsYXk6ICR7KHsgaXNBY3RpdmUgfSkgPT4gKGlzQWN0aXZlID8gXCJibG9ja1wiIDogXCJub25lXCIpfTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAxMDA7XG5gO1xuXG5mdW5jdGlvbiBCbG9nTGF5b3V0KCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0aXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzaWRlYmFyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgc2lkZWJhckljb25SZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IGlzQWN0aXZlU2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIVwiLCBpc0FjdGl2ZSk7XG4gICAgc2V0aXNBY3RpdmUoIWlzQWN0aXZlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoXG4gICAgICBzaWRlYmFyUmVmLmN1cnJlbnQgJiZcbiAgICAgICFzaWRlYmFyUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIE5vZGUpICYmXG4gICAgICBzaWRlYmFySWNvblJlZi5jdXJyZW50ICYmXG4gICAgICAhc2lkZWJhckljb25SZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSlcbiAgICApIHtcbiAgICAgIHNldGlzQWN0aXZlKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxIZWFkZXJXcmFwcGVyPlxuICAgICAgPFNpZGViYXIgaXNBY3RpdmU9e2lzQWN0aXZlfSByZWY9e3NpZGViYXJSZWZ9PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Ib21lPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5BYm91dDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9TaWRlYmFyPlxuICAgICAgPFNoYWRvdyAvPlxuICAgICAgPE1lbnVVbmZvbGRPdXRsaW5lZCBvbkNsaWNrPXtpc0FjdGl2ZVNpZGViYXJ9IHJlZj17c2lkZWJhckljb25SZWZ9IC8+XG4gICAgICA8TG9nbyBocmVmPVwiL1wiPlRhay1CbG9nPC9Mb2dvPlxuICAgICAgPExvZ2luT3V0bGluZWQgLz5cbiAgICA8L0hlYWRlcldyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dMYXlvdXQ7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiTGluayIsIkxvZ2luT3V0bGluZWQiLCJNZW51VW5mb2xkT3V0bGluZWQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkhlYWRlcldyYXBwZXIiLCJoZWFkZXIiLCJMb2dvIiwiU2lkZWJhciIsIm5hdiIsImlzQWN0aXZlIiwiU2hhZG93IiwiZGl2IiwiQmxvZ0xheW91dCIsInNldGlzQWN0aXZlIiwic2lkZWJhclJlZiIsInNpZGViYXJJY29uUmVmIiwiaXNBY3RpdmVTaWRlYmFyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiIsInVsIiwibGkiLCJhIiwiaHJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});