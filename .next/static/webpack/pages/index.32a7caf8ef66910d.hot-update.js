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

/***/ "./pages/upload.js":
/*!*************************!*\
  !*** ./pages/upload.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_yuva_Documents_test_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_yuva_Documents_test_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_yuva_Documents_test_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3.storage */ \"./node_modules/web3.storage/src/lib.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Login */ \"./components/Login.js\");\n/* harmony import */ var _components_Header2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header2 */ \"./components/Header2.js\");\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar upload = function() {\n    _s();\n    var client = new web3_storage__WEBPACK_IMPORTED_MODULE_3__.Web3Storage({\n        token: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ5OGM0MzkzRDk3NzFhZTVlOEZGNTIwODlGMTYwMjQwN0VFNjNDZGIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDgxNTQxMjc5MTMsIm5hbWUiOiJUb2tlbiJ9.aITjRenUZ57Qda2dF8ZWDq19_jxDhSynN7-maK3ez-Y\"\n    });\n    var isAuthenticated = (0,react_moralis__WEBPACK_IMPORTED_MODULE_7__.useMoralis)().isAuthenticated;\n    if (!isAuthenticated) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Login__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n            lineNumber: 20,\n            columnNumber: 6\n        }, _this));\n    }\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), selectedFiles = ref[0], setSelectedFiles = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), cids = ref1[0], setCids = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(_Users_yuva_Documents_test_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var rootCid, res, files;\n        return _Users_yuva_Documents_test_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    setCids(\"\");\n                    if (!(selectedFiles != null)) {\n                        _ctx.next = 12;\n                        break;\n                    }\n                    _ctx.next = 4;\n                    return client.put(selectedFiles, {\n                        name: \"any name\",\n                        maxRetries: 3\n                    });\n                case 4:\n                    rootCid = _ctx.sent;\n                    _ctx.next = 7;\n                    return client.get(rootCid);\n                case 7:\n                    res = _ctx.sent;\n                    _ctx.next = 10;\n                    return res.files();\n                case 10:\n                    files = _ctx.sent;\n                    files.forEach(function(file) {\n                        setCids(file.cid + \" \");\n                    });\n                case 12:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        selectedFiles\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \" relative h-screen overflow-hidden \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Switch\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/switch.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"max-w mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header2__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            class: \"flex justify-center mt-8\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                class: \"max-w-2xl rounded-lg shadow-xl bg-gray-50\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        class: \"m-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                                class: \"inline-block mb-2 text-gray-500\",\n                                                children: \" Upload\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 13\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                class: \"flex items-center justify-center w-full\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                                    class: \"flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                            class: \"flex flex-col items-center justify-center pt-7\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"svg\", {\n                                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                                    class: \"w-8 h-8 text-gray-400 group-hover:text-gray-600\",\n                                                                    fill: \"none\",\n                                                                    viewBox: \"0 0 24 24\",\n                                                                    stroke: \"currentColor\",\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n                                                                        \"stroke-linecap\": \"round\",\n                                                                        \"stroke-linejoin\": \"round\",\n                                                                        \"stroke-width\": \"2\",\n                                                                        d: \"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                                        lineNumber: 75,\n                                                                        columnNumber: 29\n                                                                    }, _this)\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                                    lineNumber: 73,\n                                                                    columnNumber: 25\n                                                                }, _this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                                    class: \"pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600\",\n                                                                    children: \"Attach a file\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                                    lineNumber: 78,\n                                                                    columnNumber: 25\n                                                                }, _this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                            lineNumber: 72,\n                                                            columnNumber: 21\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                                type: \"file\",\n                                                                className: \"opacity-0 \",\n                                                                onChange: function(e) {\n                                                                    return setSelectedFiles(e.target.files);\n                                                                }\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                                lineNumber: 82,\n                                                                columnNumber: 21\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                            lineNumber: 81,\n                                                            columnNumber: 21\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 13\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        class: \"flex justify-center p-2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 9\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                lineNumber: 66,\n                                columnNumber: 5\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-9\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                            lineNumber: 96,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \" relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-9\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            class: \"box-border h-300 w-300 p-20 border-8 items-center justify-center flex flex-col\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    className: \"text-green-600 font-bold\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                            type: \"file\",\n                                                            onChange: function(e) {\n                                                                return setSelectedFiles(e.target.files);\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                            lineNumber: 114,\n                                                            columnNumber: 9\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                        lineNumber: 113,\n                                                        columnNumber: 12\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 12\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    className: \"img-hover-zoom--colorize p-5\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 13\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                            lineNumber: 110,\n                                            columnNumber: 13\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                                            fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                            lineNumber: 122,\n                                            columnNumber: 13\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"w-full h-screen\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                                    lineNumber: 127,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yuva/Documents/test/switch/pages/upload.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this));\n};\n_s(upload, \"enGgILXkkNScObMlMQhKXlkCFPI=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_7__.useMoralis\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (upload);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsQ0FBcUU7OEVBQUMsQ0FDOUQ7Ozs7Ozs7Ozs7OztvSUFFcEJhLENBQUk7a0pBQ0pDLENBQUs7Z0VBQUNDLElBQUksRUFBQyxDQUFNO2dFQUFDcEIsU0FBUyxFQUFDLENBQVk7Z0VBQUNxQixRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDO29FQUFLcEMsTUFBTSxDQUFOQSxnQkFBZ0IsQ0FBQ29DLENBQUMsQ0FBQ0MsTUFBTSxDQUFDaEMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0hBS3JHUSxDQUFHO3dDQUFDTSxLQUFLLEVBQUMsQ0FBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7O29HQVNuQ04sQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQWdGOzs7Ozs7b0dBTzFGRCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBVzs7NEdBS3pCRCxDQUFHO29DQUFDQyxTQUFTLEVBQUMsQ0FBZ0Y7O29IQUU5RkQsQ0FBRzs0Q0FBQ00sS0FBSyxFQUFDLENBQWdGOzs0SEFFM0ZOLENBQUc7b0RBQUNDLFNBQVMsRUFBQyxDQUEyQjswSUFDekNrQixDQUFJOzhJQUNQQyxDQUFLOzREQUFDQyxJQUFJLEVBQUMsQ0FBTTs0REFBQ0MsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQztnRUFBS3BDLE1BQU0sQ0FBTkEsZ0JBQWdCLENBQUNvQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ2hDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRIQUc5RFEsQ0FBRztvREFBQ0MsU0FBUyxFQUFDLENBQThCOzs7Ozs7Ozs7Ozs7b0hBSzVDRCxDQUFHOzs7Ozs7Ozs7Ozs0R0FLSEEsQ0FBRztvQ0FBQ0MsU0FBUyxFQUFDLENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CNUMsQ0FBQztHQXpJS25CLE1BQU07O1FBT21CRCxxREFBVTs7O0FBb0l6QywrREFBZUMsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VwbG9hZC5qcz85ODI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBXZWIzU3RvcmFnZSB9IGZyb20gXCJ3ZWIzLnN0b3JhZ2VcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luJ1xuaW1wb3J0IEhlYWRlcjIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIyJztcbmltcG9ydCB7IHVzZU1vcmFsaXMgfSBmcm9tICdyZWFjdC1tb3JhbGlzJztcblxuXG5jb25zdCB1cGxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBXZWIzU3RvcmFnZSh7XG4gICAgdG9rZW46XG4gICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp6ZFdJaU9pSmthV1E2WlhSb2Nqb3dlRFE1T0dNME16a3pSRGszTnpGaFpUVmxPRVpHTlRJd09EbEdNVFl3TWpRd04wVkZOak5EWkdJaUxDSnBjM01pT2lKM1pXSXpMWE4wYjNKaFoyVWlMQ0pwWVhRaU9qRTJORGd4TlRReE1qYzVNVE1zSW01aGJXVWlPaUpVYjJ0bGJpSjkuYUlUalJlblVaNTdRZGEyZEY4WldEcTE5X2p4RGhTeW5ONy1tYUszZXotWVwiLFxuICB9KTtcblxuXG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkICB9ID0gdXNlTW9yYWxpcygpO1xuXG4gIGlmICghaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgPExvZ2luIC8+XG4gICAgKTtcbiAgfVxuICBjb25zdCBbc2VsZWN0ZWRGaWxlcywgc2V0U2VsZWN0ZWRGaWxlc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NpZHMsIHNldENpZHNdID0gdXNlU3RhdGUoXCJcIik7XG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgc2V0Q2lkcyhcIlwiKTtcbiAgICBpZiAoc2VsZWN0ZWRGaWxlcyAhPSBudWxsKSB7XG4gICAgICBjb25zdCByb290Q2lkID0gYXdhaXQgY2xpZW50LnB1dChzZWxlY3RlZEZpbGVzLCB7XG4gICAgICAgIG5hbWU6IFwiYW55IG5hbWVcIixcbiAgICAgICAgbWF4UmV0cmllczogMyxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0KHJvb3RDaWQpO1xuICAgICAgY29uc3QgZmlsZXMgPSBhd2FpdCByZXMuZmlsZXMoKTtcblxuICAgICAgZmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgICBzZXRDaWRzKGZpbGUuY2lkICsgXCIgXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbc2VsZWN0ZWRGaWxlc10pO1xuXG4gIHJldHVybiAoXG5cblxuXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiByZWxhdGl2ZSBoLXNjcmVlbiAgb3ZlcmZsb3ctaGlkZGVuIFwiPlxuICAgIHsvKiA8dmlkZW8gYXV0b1BsYXkgbXV0ZWQgbG9vcCBpZD1cInZpZGVvQkdcIiA+ICAgICAgICAgXG4gICAgPHNvdXJjZSBzcmM9XCIvaW1hZ2VzL3ZiZzIubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiLz4gICAgICAgXG4gICAgPC92aWRlbz4gKi99XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlN3aXRjaDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N3aXRjaC5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhYnNvbHV0ZSAgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS15LTlcIj5cbiAgICAgICAgICAgICovfVxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13IG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgXG4gICAgICAgIHsvKmhlYWRlciovfVxuXG4gICAgICAgIDxIZWFkZXIyIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtOFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtYXgtdy0yeGwgcm91bmRlZC1sZyBzaGFkb3cteGwgYmctZ3JheS01MFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibS00XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbmxpbmUtYmxvY2sgbWItMiB0ZXh0LWdyYXktNTAwXCI+IFVwbG9hZDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC0zMiBib3JkZXItNCBib3JkZXItYmx1ZS0yMDAgYm9yZGVyLWRhc2hlZCBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjpib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwidy04IGgtOCB0ZXh0LWdyYXktNDAwIGdyb3VwLWhvdmVyOnRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTcgMTZhNCA0IDAgMDEtLjg4LTcuOTAzQTUgNSAwIDExMTUuOSA2TDE2IDZhNSA1IDAgMDExIDkuOU0xNSAxM2wtMy0zbTAgMGwtMyAzbTMtM3YxMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHQtMSB0ZXh0LXNtIHRyYWNraW5nLXdpZGVyIHRleHQtZ3JheS00MDAgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0dGFjaCBhIGZpbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPVwib3BhY2l0eS0wIFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VsZWN0ZWRGaWxlcyhlLnRhcmdldC5maWxlcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBwLTJcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4gXG5cblxuICAgICAgICAgXG4gICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBhYnNvbHV0ZSB6LTUwIGgtNS82IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteS05XCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgIFxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgey8qIDx2aWRlbyBhdXRvUGxheSBtdXRlZCBsb29wIGlkPVwidmlkZW9CR1wiID4gICAgICAgICBcbiAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiL2ltYWdlcy92YmcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiLz4gICAgICAgXG4gICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYWJzb2x1dGUgei01MCBoLTUvNiB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXktOVwiPlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib3JkZXIgaC0zMDAgdy0zMDAgcC0yMCBib3JkZXItOCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleCBmbGV4LWNvbFwiPlxuXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi02MDAgIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZEZpbGVzKGUudGFyZ2V0LmZpbGVzKX0gLz5cbiAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1ob3Zlci16b29tLS1jb2xvcml6ZSBwLTVcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgey8qUHJvZmlsZSBsb2dvIGFuZCBsb2cgYnV0dG9uKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlblwiPlxuICAgICAgICAgICAgey8qIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2JnMS5qcGdcIiBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY292ZXJcIi8+ICovfVxuXG5cbiAgICAgICAgICAgICAgICB7LypMb2dpbiBmb3JtKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICB7LyptYWluKi99XG5cbiAgICAgICAgPC9kaXY+ICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIFxuXG4gICAgXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGxvYWQ7XG5cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIldlYjNTdG9yYWdlIiwiSGVhZCIsIkxvZ2luIiwiSGVhZGVyMiIsInVzZU1vcmFsaXMiLCJ1cGxvYWQiLCJjbGllbnQiLCJ0b2tlbiIsImlzQXV0aGVudGljYXRlZCIsInNlbGVjdGVkRmlsZXMiLCJzZXRTZWxlY3RlZEZpbGVzIiwiY2lkcyIsInNldENpZHMiLCJyb290Q2lkIiwicmVzIiwiZmlsZXMiLCJwdXQiLCJuYW1lIiwibWF4UmV0cmllcyIsImdldCIsImZvckVhY2giLCJmaWxlIiwiY2lkIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNsYXNzIiwibGFiZWwiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwic3Ryb2tlLXdpZHRoIiwiZCIsInAiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/upload.js\n");

/***/ })

});