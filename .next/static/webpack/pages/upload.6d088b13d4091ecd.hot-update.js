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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_naimdahee_Desktop_switchweb_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_naimdahee_Desktop_switchweb_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_naimdahee_Desktop_switchweb_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3.storage */ \"./node_modules/web3.storage/src/lib.js\");\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar upload = function() {\n    _s();\n    var client = new web3_storage__WEBPACK_IMPORTED_MODULE_3__.Web3Storage({\n        token: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ5OGM0MzkzRDk3NzFhZTVlOEZGNTIwODlGMTYwMjQwN0VFNjNDZGIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDgxNTQxMjc5MTMsIm5hbWUiOiJUb2tlbiJ9.aITjRenUZ57Qda2dF8ZWDq19_jxDhSynN7-maK3ez-Y\"\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), selectedFiles = ref[0], setSelectedFiles = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(_Users_naimdahee_Desktop_switchweb_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var rootCid, res, files;\n        return _Users_naimdahee_Desktop_switchweb_switch_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(selectedFiles != null)) {\n                        _ctx.next = 12;\n                        break;\n                    }\n                    console.log(selectedFiles);\n                    _ctx.next = 4;\n                    return client.put(selectedFiles, {\n                        name: \"any name\",\n                        maxRetries: 3\n                    });\n                case 4:\n                    rootCid = _ctx.sent;\n                    _ctx.next = 7;\n                    return client.get(rootCid);\n                case 7:\n                    res = _ctx.sent;\n                    _ctx.next = 10;\n                    return res.files();\n                case 10:\n                    files = _ctx.sent;\n                    files.forEach(function(file) {\n                        console.log(file);\n                    });\n                case 12:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        selectedFiles\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            type: \"file\",\n            onChange: function(e) {\n                return setSelectedFiles(e.target.files);\n            }\n        }, void 0, false, {\n            fileName: \"/Users/naimdahee/Desktop/switchweb/switch/pages/upload.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/naimdahee/Desktop/switchweb/switch/pages/upload.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this));\n};\n_s(upload, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (upload);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91cGxvYWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxHQUFLLENBQUNJLE1BQU0sR0FBRyxRQUNmLEdBRHFCLENBQUM7O0lBQ3BCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ0YscURBQVcsQ0FBQyxDQUFDO1FBQzlCRyxLQUFLLEVBQ0gsQ0FBK087SUFDblAsQ0FBQztJQUNELEdBQUssQ0FBcUNMLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQWhETSxhQUFhLEdBQXNCTixHQUFjLEtBQWxDTyxnQkFBZ0IsR0FBSVAsR0FBYztJQUV4REMsZ0RBQVMsd0tBQUMsUUFBUSxXQUFJLENBQUM7WUFHYk8sT0FBTyxFQUtQQyxHQUFHLEVBQ0hDLEtBQUs7Ozs7MEJBUlRKLGFBQWEsSUFBSSxJQUFJOzs7O29CQUN2QkssT0FBTyxDQUFDQyxHQUFHLENBQUNOLGFBQWE7OzJCQUNIRixNQUFNLENBQUNTLEdBQUcsQ0FBQ1AsYUFBYSxFQUFFLENBQUM7d0JBQy9DUSxJQUFJLEVBQUUsQ0FBVTt3QkFDaEJDLFVBQVUsRUFBRSxDQUFDO29CQUNmLENBQUM7O29CQUhLUCxPQUFPOzsyQkFLS0osTUFBTSxDQUFDWSxHQUFHLENBQUNSLE9BQU87O29CQUE5QkMsR0FBRzs7MkJBQ1dBLEdBQUcsQ0FBQ0MsS0FBSzs7b0JBQXZCQSxLQUFLO29CQUVYQSxLQUFLLENBQUNPLE9BQU8sQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO3dCQUN2QlAsT0FBTyxDQUFDQyxHQUFHLENBQUNNLElBQUk7b0JBQ2xCLENBQUM7Ozs7OztJQUVMLENBQUMsSUFBRSxDQUFDWjtRQUFBQSxhQUFhO0lBQUEsQ0FBQztJQUVsQixNQUFNLDZFQUNIYSxDQUFJOzhGQUNGQyxDQUFLO1lBQUNDLElBQUksRUFBQyxDQUFNO1lBQUNDLFFBQVEsRUFBRSxRQUFRLENBQVBDLENBQUM7Z0JBQUtoQixNQUFNLENBQU5BLGdCQUFnQixDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNkLEtBQUs7Ozs7Ozs7Ozs7OztBQUd6RSxDQUFDO0dBN0JLUCxNQUFNO0FBK0JaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXBsb2FkLmpzPzk4MjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFdlYjNTdG9yYWdlIH0gZnJvbSBcIndlYjMuc3RvcmFnZVwiO1xuXG5jb25zdCB1cGxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBXZWIzU3RvcmFnZSh7XG4gICAgdG9rZW46XG4gICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp6ZFdJaU9pSmthV1E2WlhSb2Nqb3dlRFE1T0dNME16a3pSRGszTnpGaFpUVmxPRVpHTlRJd09EbEdNVFl3TWpRd04wVkZOak5EWkdJaUxDSnBjM01pT2lKM1pXSXpMWE4wYjNKaFoyVWlMQ0pwWVhRaU9qRTJORGd4TlRReE1qYzVNVE1zSW01aGJXVWlPaUpVYjJ0bGJpSjkuYUlUalJlblVaNTdRZGEyZEY4WldEcTE5X2p4RGhTeW5ONy1tYUszZXotWVwiLFxuICB9KTtcbiAgY29uc3QgW3NlbGVjdGVkRmlsZXMsIHNldFNlbGVjdGVkRmlsZXNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRGaWxlcyAhPSBudWxsKSB7XG4gICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEZpbGVzKTtcbiAgICAgIGNvbnN0IHJvb3RDaWQgPSBhd2FpdCBjbGllbnQucHV0KHNlbGVjdGVkRmlsZXMsIHtcbiAgICAgICAgbmFtZTogXCJhbnkgbmFtZVwiLFxuICAgICAgICBtYXhSZXRyaWVzOiAzLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5nZXQocm9vdENpZCk7XG4gICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IHJlcy5maWxlcygpO1xuXG4gICAgICBmaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbc2VsZWN0ZWRGaWxlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0+XG4gICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkRmlsZXMoZS50YXJnZXQuZmlsZXMpfSAvPlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwbG9hZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiV2ViM1N0b3JhZ2UiLCJ1cGxvYWQiLCJjbGllbnQiLCJ0b2tlbiIsInNlbGVjdGVkRmlsZXMiLCJzZXRTZWxlY3RlZEZpbGVzIiwicm9vdENpZCIsInJlcyIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsInB1dCIsIm5hbWUiLCJtYXhSZXRyaWVzIiwiZ2V0IiwiZm9yRWFjaCIsImZpbGUiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/upload.js\n");

/***/ })

});