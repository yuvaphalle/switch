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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_naimdahee_Desktop_switchweb_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_naimdahee_Desktop_switchweb_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_naimdahee_Desktop_switchweb_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3.storage */ \"./node_modules/web3.storage/src/lib.js\");\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar upload = function() {\n    _s();\n    var client = new web3_storage__WEBPACK_IMPORTED_MODULE_3__.Web3Storage({\n        token: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ5OGM0MzkzRDk3NzFhZTVlOEZGNTIwODlGMTYwMjQwN0VFNjNDZGIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDgxNTQxMjc5MTMsIm5hbWUiOiJUb2tlbiJ9.aITjRenUZ57Qda2dF8ZWDq19_jxDhSynN7-maK3ez-Y\"\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), selectedFiles = ref[0], setSelectedFiles = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), cids = ref1[0], setCids = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(_Users_naimdahee_Desktop_switchweb_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var rootCid, res, files;\n        return _Users_naimdahee_Desktop_switchweb_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    setCids(\"\");\n                    if (!(selectedFiles != null)) {\n                        _ctx.next = 13;\n                        break;\n                    }\n                    console.log(selectedFiles);\n                    _ctx.next = 5;\n                    return client.put(selectedFiles, {\n                        name: \"any name\",\n                        maxRetries: 3\n                    });\n                case 5:\n                    rootCid = _ctx.sent;\n                    _ctx.next = 8;\n                    return client.get(rootCid);\n                case 8:\n                    res = _ctx.sent;\n                    _ctx.next = 11;\n                    return res.files();\n                case 11:\n                    files = _ctx.sent;\n                    files.forEach(function(file) {\n                        setCids(file.cid + \" \");\n                    });\n                case 13:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        selectedFiles\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    multiple: true,\n                    onChange: function(e) {\n                        return setSelectedFiles(e.target.files);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/naimdahee/Desktop/switchweb/switch/pages/upload.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/naimdahee/Desktop/switchweb/switch/pages/upload.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"Uploaded Files CID: \"\n            }, void 0, false, {\n                fileName: \"/Users/naimdahee/Desktop/switchweb/switch/pages/upload.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {}, void 0, false, {\n                fileName: \"/Users/naimdahee/Desktop/switchweb/switch/pages/upload.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(upload, \"is1igSD7+NhqcBCFPdMLPwh5mNM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (upload);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91cGxvYWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxHQUFLLENBQUNJLE1BQU0sR0FBRyxRQUNmLEdBRHFCLENBQUM7O0lBQ3BCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ0YscURBQVcsQ0FBQyxDQUFDO1FBQzlCRyxLQUFLLEVBQ0gsQ0FBK087SUFDblAsQ0FBQztJQUNELEdBQUssQ0FBcUNMLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQWhETSxhQUFhLEdBQXNCTixHQUFjLEtBQWxDTyxnQkFBZ0IsR0FBSVAsR0FBYztJQUN4RCxHQUFLLENBQW1CQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE1QlEsSUFBSSxHQUFhUixJQUFZLEtBQXZCUyxPQUFPLEdBQUlULElBQVk7SUFDcENDLGdEQUFTLHdLQUFDLFFBQVEsV0FBSSxDQUFDO1lBSWJTLE9BQU8sRUFLUEMsR0FBRyxFQUNIQyxLQUFLOzs7O29CQVRiSCxPQUFPLENBQUMsQ0FBRTswQkFDTkgsYUFBYSxJQUFJLElBQUk7Ozs7b0JBQ3ZCTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsYUFBYTs7MkJBQ0hGLE1BQU0sQ0FBQ1csR0FBRyxDQUFDVCxhQUFhLEVBQUUsQ0FBQzt3QkFDL0NVLElBQUksRUFBRSxDQUFVO3dCQUNoQkMsVUFBVSxFQUFFLENBQUM7b0JBQ2YsQ0FBQzs7b0JBSEtQLE9BQU87OzJCQUtLTixNQUFNLENBQUNjLEdBQUcsQ0FBQ1IsT0FBTzs7b0JBQTlCQyxHQUFHOzsyQkFDV0EsR0FBRyxDQUFDQyxLQUFLOztvQkFBdkJBLEtBQUs7b0JBRVhBLEtBQUssQ0FBQ08sT0FBTyxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFLLENBQUM7d0JBQ3ZCWCxPQUFPLENBQUNXLElBQUksQ0FBQ0MsR0FBRyxHQUFHLENBQUc7b0JBQ3hCLENBQUM7Ozs7OztJQUVMLENBQUMsSUFBRSxDQUFDZjtRQUFBQSxhQUFhO0lBQUEsQ0FBQztJQUVsQixNQUFNOzt3RkFFRGdCLENBQUk7c0dBQ0ZDLENBQUs7b0JBQ0pDLElBQUksRUFBQyxDQUFNO29CQUNYQyxRQUFRO29CQUNSQyxRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDO3dCQUFLcEIsTUFBTSxDQUFOQSxnQkFBZ0IsQ0FBQ29CLENBQUMsQ0FBQ0MsTUFBTSxDQUFDaEIsS0FBSzs7Ozs7Ozs7Ozs7O3dGQUluRGlCLENBQUM7MEJBQUMsQ0FBb0I7Ozs7Ozt3RkFDdEJDLENBQUk7Ozs7Ozs7QUFHWCxDQUFDO0dBdkNLM0IsTUFBTTtBQXlDWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VwbG9hZC5qcz85ODI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBXZWIzU3RvcmFnZSB9IGZyb20gXCJ3ZWIzLnN0b3JhZ2VcIjtcblxuY29uc3QgdXBsb2FkID0gKCkgPT4ge1xuICBjb25zdCBjbGllbnQgPSBuZXcgV2ViM1N0b3JhZ2Uoe1xuICAgIHRva2VuOlxuICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKemRXSWlPaUprYVdRNlpYUm9jam93ZURRNU9HTTBNemt6UkRrM056RmhaVFZsT0VaR05USXdPRGxHTVRZd01qUXdOMFZGTmpORFpHSWlMQ0pwYzNNaU9pSjNaV0l6TFhOMGIzSmhaMlVpTENKcFlYUWlPakUyTkRneE5UUXhNamM1TVRNc0ltNWhiV1VpT2lKVWIydGxiaUo5LmFJVGpSZW5VWjU3UWRhMmRGOFpXRHExOV9qeERoU3luTjctbWFLM2V6LVlcIixcbiAgfSk7XG4gIGNvbnN0IFtzZWxlY3RlZEZpbGVzLCBzZXRTZWxlY3RlZEZpbGVzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY2lkcywgc2V0Q2lkc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBzZXRDaWRzKFwiXCIpO1xuICAgIGlmIChzZWxlY3RlZEZpbGVzICE9IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkRmlsZXMpO1xuICAgICAgY29uc3Qgcm9vdENpZCA9IGF3YWl0IGNsaWVudC5wdXQoc2VsZWN0ZWRGaWxlcywge1xuICAgICAgICBuYW1lOiBcImFueSBuYW1lXCIsXG4gICAgICAgIG1heFJldHJpZXM6IDMsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LmdldChyb290Q2lkKTtcbiAgICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgcmVzLmZpbGVzKCk7XG5cbiAgICAgIGZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgICAgc2V0Q2lkcyhmaWxlLmNpZCArIFwiIFwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3NlbGVjdGVkRmlsZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZEZpbGVzKGUudGFyZ2V0LmZpbGVzKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPHA+VXBsb2FkZWQgRmlsZXMgQ0lEOiA8L3A+XG4gICAgICA8c3Bhbj48L3NwYW4+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGxvYWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIldlYjNTdG9yYWdlIiwidXBsb2FkIiwiY2xpZW50IiwidG9rZW4iLCJzZWxlY3RlZEZpbGVzIiwic2V0U2VsZWN0ZWRGaWxlcyIsImNpZHMiLCJzZXRDaWRzIiwicm9vdENpZCIsInJlcyIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsInB1dCIsIm5hbWUiLCJtYXhSZXRyaWVzIiwiZ2V0IiwiZm9yRWFjaCIsImZpbGUiLCJjaWQiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwibXVsdGlwbGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/upload.js\n");

/***/ })

});