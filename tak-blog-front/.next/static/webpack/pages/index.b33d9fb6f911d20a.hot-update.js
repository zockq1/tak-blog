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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  height: 60px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  font-size: 30px;\\n  border-bottom: 1px solid #efefef;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  font-family: \"Sansita Swashed\", cursive;\\n  font-size: 36px;\\n  font-weight: 900;\\n'\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: fixed;\\n  top: 0;\\n  left: \",\n        \";\\n  width: 300px;\\n  height: 100vh;\\n  background-color: white;\\n  border-right: 1px solid #efefef;\\n  transition: left 0.3s ease-in-out, background-color 0.3s ease-in-out;\\n  z-index: 1000;\\n  overflow: auto;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  height: 60px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  border-bottom: 1px solid #efefef;\\n  padding: 0 16px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].header(_templateObject());\n_c = HeaderWrapper;\nconst Logo = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((next_link__WEBPACK_IMPORTED_MODULE_2___default()))(_templateObject1());\n_c1 = Logo;\nconst Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].nav(_templateObject2(), (param)=>{\n    let { isActive  } = param;\n    return isActive ? \"0\" : \"-310px\";\n});\n_c2 = Sidebar;\nconst SidebarHeader = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject3());\n_c3 = SidebarHeader;\nfunction BlogLayout() {\n    _s();\n    const [isActive, setisActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const sidebarRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const isActiveSidebar = ()=>{\n        console.log(\"click!\", isActive);\n        setisActive(!isActive);\n    };\n    const handleClickOutside = (event)=>{\n        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {\n            setisActive(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        document.addEventListener(\"mousedown\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Sidebar, {\n                isActive: isActive,\n                ref: sidebarRef,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SidebarHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.CloseOutlined, {\n                            onClick: isActiveSidebar\n                        }, void 0, false, {\n                            fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.MenuUnfoldOutlined, {\n                onClick: isActiveSidebar\n            }, void 0, false, {\n                fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Logo, {\n                href: \"/\",\n                children: \"Tak-Blog\"\n            }, void 0, false, {\n                fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.LoginOutlined, {}, void 0, false, {\n                fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tagjaemin/Desktop/project/tak-blog/tak-blog-front/components/Header.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(BlogLayout, \"szSFgVNCFGARvPF7dRGzcQjd7dk=\");\n_c4 = BlogLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogLayout);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"HeaderWrapper\");\n$RefreshReg$(_c1, \"Logo\");\n$RefreshReg$(_c2, \"Sidebar\");\n$RefreshReg$(_c3, \"SidebarHeader\");\n$RefreshReg$(_c4, \"BlogLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDVjtBQUtGO0FBQ3lCO0FBRXBELE1BQU1RLGdCQUFnQlIsZ0VBQWE7S0FBN0JRO0FBU04sTUFBTUUsT0FBT1YsNkRBQU1BLENBQUNDLGtEQUFJQTtNQUFsQlM7QUFNTixNQUFNQyxVQUFVWCw2REFBVSxxQkFHaEIsU0FBbUJhO1FBQWxCLEVBQUVBLFNBQVEsRUFBRTtXQUFNQSxXQUFXLE1BQU0sUUFBUTtBQUFEO01BSC9DRjtBQWFOLE1BQU1HLGdCQUFnQmQsNkRBQVU7TUFBMUJjO0FBU04sU0FBU0UsYUFBaUM7O0lBQ3hDLE1BQU0sQ0FBQ0gsVUFBVUksWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzlDLE1BQU1XLGFBQWFaLDZDQUFNQSxDQUFpQixJQUFJO0lBRTlDLE1BQU1hLGtCQUFrQixJQUFNO1FBQzVCQyxRQUFRQyxHQUFHLENBQUMsVUFBVVI7UUFDdEJJLFlBQVksQ0FBQ0o7SUFDZjtJQUVBLE1BQU1TLHFCQUFxQixDQUFDQyxRQUFzQjtRQUNoRCxJQUNFTCxXQUFXTSxPQUFPLElBQ2xCLENBQUNOLFdBQVdNLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRixNQUFNRyxNQUFNLEdBQ3pDO1lBQ0FULFlBQVksS0FBSztRQUNuQixDQUFDO0lBQ0g7SUFFQVosZ0RBQVNBLENBQUMsSUFBTTtRQUNkc0IsU0FBU0MsZ0JBQWdCLENBQUMsYUFBYU47UUFFdkMsT0FBTyxJQUFNO1lBQ1hLLFNBQVNFLG1CQUFtQixDQUFDLGFBQWFQO1FBQzVDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNkOzswQkFDQyw4REFBQ0c7Z0JBQVFFLFVBQVVBO2dCQUFVaUIsS0FBS1o7O2tDQUNoQyw4REFBQ0o7a0NBQ0MsNEVBQUNaLDREQUFhQTs0QkFBQzZCLFNBQVNaOzs7Ozs7Ozs7OztrQ0FHMUIsOERBQUNhOzswQ0FDQyw4REFBQ0M7MENBQ0MsNEVBQUNDO29DQUFFQyxNQUFLOzhDQUFJOzs7Ozs7Ozs7OzswQ0FFZCw4REFBQ0Y7MENBQ0MsNEVBQUNDO29DQUFFQyxNQUFLOzhDQUFJOzs7Ozs7Ozs7OzswQ0FFZCw4REFBQ0Y7MENBQ0MsNEVBQUNDO29DQUFFQyxNQUFLOzhDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbEIsOERBQUMvQixpRUFBa0JBO2dCQUFDMkIsU0FBU1o7Ozs7OzswQkFDN0IsOERBQUNUO2dCQUFLeUIsTUFBSzswQkFBSTs7Ozs7OzBCQUNmLDhEQUFDaEMsNERBQWFBOzs7Ozs7Ozs7OztBQUdwQjtHQWxEU2E7TUFBQUE7QUFvRFQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4PzAzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7XG4gIENsb3NlT3V0bGluZWQsXG4gIExvZ2luT3V0bGluZWQsXG4gIE1lbnVVbmZvbGRPdXRsaW5lZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSGVhZGVyV3JhcHBlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xuYDtcblxuY29uc3QgTG9nbyA9IHN0eWxlZChMaW5rKWBcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbmA7XG5cbmNvbnN0IFNpZGViYXIgPSBzdHlsZWQubmF2PHsgaXNBY3RpdmU6IGJvb2xlYW4gfT5gXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAkeyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IFwiMFwiIDogXCItMzEwcHhcIil9O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWZlZmVmO1xuICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgei1pbmRleDogMTAwMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG5gO1xuXG5jb25zdCBTaWRlYmFySGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xuICBwYWRkaW5nOiAwIDE2cHg7XG5gO1xuXG5mdW5jdGlvbiBCbG9nTGF5b3V0KCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0aXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzaWRlYmFyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBpc0FjdGl2ZVNpZGViYXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGljayFcIiwgaXNBY3RpdmUpO1xuICAgIHNldGlzQWN0aXZlKCFpc0FjdGl2ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKFxuICAgICAgc2lkZWJhclJlZi5jdXJyZW50ICYmXG4gICAgICAhc2lkZWJhclJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKVxuICAgICkge1xuICAgICAgc2V0aXNBY3RpdmUoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEhlYWRlcldyYXBwZXI+XG4gICAgICA8U2lkZWJhciBpc0FjdGl2ZT17aXNBY3RpdmV9IHJlZj17c2lkZWJhclJlZn0+XG4gICAgICAgIDxTaWRlYmFySGVhZGVyPlxuICAgICAgICAgIDxDbG9zZU91dGxpbmVkIG9uQ2xpY2s9e2lzQWN0aXZlU2lkZWJhcn0gLz5cbiAgICAgICAgPC9TaWRlYmFySGVhZGVyPlxuXG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPkhvbWU8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPkFib3V0PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Db250YWN0PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L1NpZGViYXI+XG4gICAgICA8TWVudVVuZm9sZE91dGxpbmVkIG9uQ2xpY2s9e2lzQWN0aXZlU2lkZWJhcn0gLz5cbiAgICAgIDxMb2dvIGhyZWY9XCIvXCI+VGFrLUJsb2c8L0xvZ28+XG4gICAgICA8TG9naW5PdXRsaW5lZCAvPlxuICAgIDwvSGVhZGVyV3JhcHBlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZ0xheW91dDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJMaW5rIiwiQ2xvc2VPdXRsaW5lZCIsIkxvZ2luT3V0bGluZWQiLCJNZW51VW5mb2xkT3V0bGluZWQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkhlYWRlcldyYXBwZXIiLCJoZWFkZXIiLCJMb2dvIiwiU2lkZWJhciIsIm5hdiIsImlzQWN0aXZlIiwiU2lkZWJhckhlYWRlciIsImRpdiIsIkJsb2dMYXlvdXQiLCJzZXRpc0FjdGl2ZSIsInNpZGViYXJSZWYiLCJpc0FjdGl2ZVNpZGViYXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVmIiwib25DbGljayIsInVsIiwibGkiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});