"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/upload",{

/***/ "./pages/upload.js":
/*!*************************!*\
  !*** ./pages/upload.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_yuva_Documents_test_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_yuva_Documents_test_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_yuva_Documents_test_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3.storage */ \"./node_modules/web3.storage/src/lib.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Login */ \"./components/Login.js\");\n/* harmony import */ var _components_Header2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header2 */ \"./components/Header2.js\");\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar upload = function() {\n    _s();\n    var client = new web3_storage__WEBPACK_IMPORTED_MODULE_3__.Web3Storage({\n        token: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ5OGM0MzkzRDk3NzFhZTVlOEZGNTIwODlGMTYwMjQwN0VFNjNDZGIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDgxNTQxMjc5MTMsIm5hbWUiOiJUb2tlbiJ9.aITjRenUZ57Qda2dF8ZWDq19_jxDhSynN7-maK3ez-Y\"\n    });\n    var isAuthenticated = (0,react_moralis__WEBPACK_IMPORTED_MODULE_7__.useMoralis)().isAuthenticated;\n    if (!isAuthenticated) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Login__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n            lineNumber: 20,\n            columnNumber: 6\n        }, _this));\n    }\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), selectedFiles = ref[0], setSelectedFiles = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), cids = ref1[0], setCids = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(_Users_yuva_Documents_test_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var rootCid, res, files;\n        return _Users_yuva_Documents_test_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    setCids(\"\");\n                    if (!(selectedFiles != null)) {\n                        _ctx.next = 12;\n                        break;\n                    }\n                    _ctx.next = 4;\n                    return client.put(selectedFiles, {\n                        name: \"any name\",\n                        maxRetries: 3\n                    });\n                case 4:\n                    rootCid = _ctx.sent;\n                    _ctx.next = 7;\n                    return client.get(rootCid);\n                case 7:\n                    res = _ctx.sent;\n                    _ctx.next = 10;\n                    return res.files();\n                case 10:\n                    files = _ctx.sent;\n                    files.forEach(function(file) {\n                        setCids(file.cid + \" \");\n                    });\n                case 12:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        selectedFiles\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \" relative h-screen overflow-y-scroll overflow-hidden \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Switch\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/switch.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"max-w mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header2__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            class: \"flex justify-center mt-8\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                class: \"max-w-2xl rounded-lg shadow-xl bg-gray-50\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        class: \"m-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                                class: \"inline-block mb-2 text-gray-500\",\n                                                children: \"Resume Upload\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 13\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                class: \"flex items-center justify-center w-full\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                                    class: \"flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                            class: \"flex flex-col items-center justify-center pt-7\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"svg\", {\n                                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                                    class: \"w-8 h-8 text-gray-400 group-hover:text-gray-600\",\n                                                                    fill: \"none\",\n                                                                    viewBox: \"0 0 24 24\",\n                                                                    stroke: \"currentColor\",\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n                                                                        \"stroke-linecap\": \"round\",\n                                                                        \"stroke-linejoin\": \"round\",\n                                                                        \"stroke-width\": \"2\",\n                                                                        d: \"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                                        lineNumber: 76,\n                                                                        columnNumber: 29\n                                                                    }, _this)\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                                    lineNumber: 74,\n                                                                    columnNumber: 25\n                                                                }, _this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                                    class: \"pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600\",\n                                                                    children: \"Attach a file\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                                    lineNumber: 79,\n                                                                    columnNumber: 25\n                                                                }, _this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                            lineNumber: 73,\n                                                            columnNumber: 21\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                            type: \"file\",\n                                                            className: \"opacity-0 \",\n                                                            onChange: function(e) {\n                                                                return setSelectedFiles(e.target.files);\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                            lineNumber: 82,\n                                                            columnNumber: 21\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 13\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        class: \"flex justify-center p-2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 9\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                lineNumber: 67,\n                                columnNumber: 5\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                            lineNumber: 66,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this));\n};\n_s(upload, \"enGgILXkkNScObMlMQhKXlkCFPI=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_7__.useMoralis\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (upload);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsQ0FBcUU7OEVBQUMsQ0FDOUQ7Ozs7Ozs7Ozs7OztvSUFFcEJhLENBQUs7NERBQUNDLElBQUksRUFBQyxDQUFNOzREQUFDbkIsU0FBUyxFQUFDLENBQVk7NERBQUNvQixRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDO2dFQUFLbkMsTUFBTSxDQUFOQSxnQkFBZ0IsQ0FBQ21DLENBQUMsQ0FBQ0MsTUFBTSxDQUFDL0IsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dIQUlyR1EsQ0FBRzt3Q0FBQ00sS0FBSyxFQUFDLENBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0I1QyxDQUFDO0dBN0ZLeEIsTUFBTTs7UUFPbUJELHFEQUFVOzs7QUF3RnpDLCtEQUFlQyxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXBsb2FkLmpzPzk4MjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFdlYjNTdG9yYWdlIH0gZnJvbSBcIndlYjMuc3RvcmFnZVwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW4nXG5pbXBvcnQgSGVhZGVyMiBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcjInO1xuaW1wb3J0IHsgdXNlTW9yYWxpcyB9IGZyb20gJ3JlYWN0LW1vcmFsaXMnO1xuXG5cbmNvbnN0IHVwbG9hZCA9ICgpID0+IHtcbiAgY29uc3QgY2xpZW50ID0gbmV3IFdlYjNTdG9yYWdlKHtcbiAgICB0b2tlbjpcbiAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnpkV0lpT2lKa2FXUTZaWFJvY2pvd2VEUTVPR00wTXprelJEazNOekZoWlRWbE9FWkdOVEl3T0RsR01UWXdNalF3TjBWRk5qTkRaR0lpTENKcGMzTWlPaUozWldJekxYTjBiM0poWjJVaUxDSnBZWFFpT2pFMk5EZ3hOVFF4TWpjNU1UTXNJbTVoYldVaU9pSlViMnRsYmlKOS5hSVRqUmVuVVo1N1FkYTJkRjhaV0RxMTlfanhEaFN5bk43LW1hSzNlei1ZXCIsXG4gIH0pO1xuXG5cbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgIH0gPSB1c2VNb3JhbGlzKCk7XG5cbiAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICA8TG9naW4gLz5cbiAgICApO1xuICB9XG4gIGNvbnN0IFtzZWxlY3RlZEZpbGVzLCBzZXRTZWxlY3RlZEZpbGVzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY2lkcywgc2V0Q2lkc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBzZXRDaWRzKFwiXCIpO1xuICAgIGlmIChzZWxlY3RlZEZpbGVzICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHJvb3RDaWQgPSBhd2FpdCBjbGllbnQucHV0KHNlbGVjdGVkRmlsZXMsIHtcbiAgICAgICAgbmFtZTogXCJhbnkgbmFtZVwiLFxuICAgICAgICBtYXhSZXRyaWVzOiAzLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5nZXQocm9vdENpZCk7XG4gICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IHJlcy5maWxlcygpO1xuXG4gICAgICBmaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICAgIHNldENpZHMoZmlsZS5jaWQgKyBcIiBcIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZEZpbGVzXSk7XG5cbiAgcmV0dXJuIChcblxuXG5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHJlbGF0aXZlIGgtc2NyZWVuIG92ZXJmbG93LXktc2Nyb2xsIG92ZXJmbG93LWhpZGRlbiBcIj5cbiAgICB7LyogPHZpZGVvIGF1dG9QbGF5IG11dGVkIGxvb3AgaWQ9XCJ2aWRlb0JHXCIgPiAgICAgICAgIFxuICAgIDxzb3VyY2Ugc3JjPVwiL2ltYWdlcy92YmcyLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIi8+ICAgICAgIFxuICAgIDwvdmlkZW8+ICovfVxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Td2l0Y2g8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zd2l0Y2guaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWJzb2x1dGUgIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteS05XCI+XG4gICAgICAgICAgICAqL31cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdyBteC1hdXRvXCI+XG4gICAgICAgICAgICAgIFxuICAgICAgICB7LypoZWFkZXIqL31cblxuICAgICAgICA8SGVhZGVyMiAvPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtOFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtYXgtdy0yeGwgcm91bmRlZC1sZyBzaGFkb3cteGwgYmctZ3JheS01MFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibS00XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbmxpbmUtYmxvY2sgbWItMiB0ZXh0LWdyYXktNTAwXCI+UmVzdW1lIFVwbG9hZDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC0zMiBib3JkZXItNCBib3JkZXItYmx1ZS0yMDAgYm9yZGVyLWRhc2hlZCBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjpib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwidy04IGgtOCB0ZXh0LWdyYXktNDAwIGdyb3VwLWhvdmVyOnRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTcgMTZhNCA0IDAgMDEtLjg4LTcuOTAzQTUgNSAwIDExMTUuOSA2TDE2IDZhNSA1IDAgMDExIDkuOU0xNSAxM2wtMy0zbTAgMGwtMyAzbTMtM3YxMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHQtMSB0ZXh0LXNtIHRyYWNraW5nLXdpZGVyIHRleHQtZ3JheS00MDAgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0dGFjaCBhIGZpbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9XCJvcGFjaXR5LTAgXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZEZpbGVzKGUudGFyZ2V0LmZpbGVzKSAgfSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIHAtMlwiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiBcblxuXG4gICAgICAgICBcblxuICAgICAgICA8L2Rpdj4gICAgIFxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgXG5cbiAgICBcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwbG9hZDtcblxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiV2ViM1N0b3JhZ2UiLCJIZWFkIiwiTG9naW4iLCJIZWFkZXIyIiwidXNlTW9yYWxpcyIsInVwbG9hZCIsImNsaWVudCIsInRva2VuIiwiaXNBdXRoZW50aWNhdGVkIiwic2VsZWN0ZWRGaWxlcyIsInNldFNlbGVjdGVkRmlsZXMiLCJjaWRzIiwic2V0Q2lkcyIsInJvb3RDaWQiLCJyZXMiLCJmaWxlcyIsInB1dCIsIm5hbWUiLCJtYXhSZXRyaWVzIiwiZ2V0IiwiZm9yRWFjaCIsImZpbGUiLCJjaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiY2xhc3MiLCJsYWJlbCIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlLWxpbmVjYXAiLCJzdHJva2UtbGluZWpvaW4iLCJzdHJva2Utd2lkdGgiLCJkIiwicCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/upload.js\n");

/***/ })

});