"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/upload";
exports.ids = ["pages/upload"];
exports.modules = {

/***/ "./pages/upload.js":
/*!*************************!*\
  !*** ./pages/upload.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3.storage */ \"web3.storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([web3_storage__WEBPACK_IMPORTED_MODULE_2__]);\nweb3_storage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst upload = ()=>{\n    const client = new web3_storage__WEBPACK_IMPORTED_MODULE_2__.Web3Storage({\n        token: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ5OGM0MzkzRDk3NzFhZTVlOEZGNTIwODlGMTYwMjQwN0VFNjNDZGIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDgxNTQxMjc5MTMsIm5hbWUiOiJUb2tlbiJ9.aITjRenUZ57Qda2dF8ZWDq19_jxDhSynN7-maK3ez-Y\"\n    });\n    const { 0: selectedFiles , 1: setSelectedFiles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: cids , 1: setCids  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{\n        setCids(\"\");\n        if (selectedFiles != null) {\n            const rootCid = await client.put(selectedFiles, {\n                name: \"any name\",\n                maxRetries: 3\n            });\n            const res = await client.get(rootCid);\n            const files = await res.files();\n            files.forEach((file)=>{\n                setCids(file.cid + \" \");\n            });\n        }\n    }, [\n        selectedFiles\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    onChange: (e)=>setSelectedFiles(e.target.files)\n                }, void 0, false, {\n                    fileName: \"/Users/naimdahee/Desktop/switchweb/switch/pages/upload.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/naimdahee/Desktop/switchweb/switch/pages/upload.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Uploaded Files CID: \"\n            }, void 0, false, {\n                fileName: \"/Users/naimdahee/Desktop/switchweb/switch/pages/upload.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: cids\n            }, void 0, false, {\n                fileName: \"/Users/naimdahee/Desktop/switchweb/switch/pages/upload.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upload);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91cGxvYWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNSO0FBRTFDLEtBQUssQ0FBQ0ksTUFBTSxPQUFTLENBQUM7SUFDcEIsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDRixxREFBVyxDQUFDLENBQUM7UUFDOUJHLEtBQUssRUFDSCxDQUErTztJQUNuUCxDQUFDO0lBQ0QsS0FBSyxNQUFFQyxhQUFhLE1BQUVDLGdCQUFnQixNQUFJUCwrQ0FBUSxDQUFDLElBQUk7SUFDdkQsS0FBSyxNQUFFUSxJQUFJLE1BQUVDLE9BQU8sTUFBSVQsK0NBQVEsQ0FBQyxDQUFFO0lBQ25DQyxnREFBUyxXQUFhLENBQUM7UUFDckJRLE9BQU8sQ0FBQyxDQUFFO1FBQ1YsRUFBRSxFQUFFSCxhQUFhLElBQUksSUFBSSxFQUFFLENBQUM7WUFDMUIsS0FBSyxDQUFDSSxPQUFPLEdBQUcsS0FBSyxDQUFDTixNQUFNLENBQUNPLEdBQUcsQ0FBQ0wsYUFBYSxFQUFFLENBQUM7Z0JBQy9DTSxJQUFJLEVBQUUsQ0FBVTtnQkFDaEJDLFVBQVUsRUFBRSxDQUFDO1lBQ2YsQ0FBQztZQUVELEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEtBQUssQ0FBQ1YsTUFBTSxDQUFDVyxHQUFHLENBQUNMLE9BQU87WUFDcEMsS0FBSyxDQUFDTSxLQUFLLEdBQUcsS0FBSyxDQUFDRixHQUFHLENBQUNFLEtBQUs7WUFFN0JBLEtBQUssQ0FBQ0MsT0FBTyxFQUFFQyxJQUFJLEdBQUssQ0FBQztnQkFDdkJULE9BQU8sQ0FBQ1MsSUFBSSxDQUFDQyxHQUFHLEdBQUcsQ0FBRztZQUN4QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDYjtRQUFBQSxhQUFhO0lBQUEsQ0FBQztJQUVsQixNQUFNOzt3RkFFRGMsQ0FBSTtzR0FDRkMsQ0FBSztvQkFBQ0MsSUFBSSxFQUFDLENBQU07b0JBQUNDLFFBQVEsR0FBR0MsQ0FBQyxHQUFLakIsZ0JBQWdCLENBQUNpQixDQUFDLENBQUNDLE1BQU0sQ0FBQ1QsS0FBSzs7Ozs7Ozs7Ozs7d0ZBR3BFVSxDQUFDOzBCQUFDLENBQW9COzs7Ozs7d0ZBQ3RCQyxDQUFJOzBCQUFFbkIsSUFBSTs7Ozs7Ozs7QUFHakIsQ0FBQztBQUVELGlFQUFlTCxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91cGxvYWQuanM/OTgyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgV2ViM1N0b3JhZ2UgfSBmcm9tIFwid2ViMy5zdG9yYWdlXCI7XG5cbmNvbnN0IHVwbG9hZCA9ICgpID0+IHtcbiAgY29uc3QgY2xpZW50ID0gbmV3IFdlYjNTdG9yYWdlKHtcbiAgICB0b2tlbjpcbiAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnpkV0lpT2lKa2FXUTZaWFJvY2pvd2VEUTVPR00wTXprelJEazNOekZoWlRWbE9FWkdOVEl3T0RsR01UWXdNalF3TjBWRk5qTkRaR0lpTENKcGMzTWlPaUozWldJekxYTjBiM0poWjJVaUxDSnBZWFFpT2pFMk5EZ3hOVFF4TWpjNU1UTXNJbTVoYldVaU9pSlViMnRsYmlKOS5hSVRqUmVuVVo1N1FkYTJkRjhaV0RxMTlfanhEaFN5bk43LW1hSzNlei1ZXCIsXG4gIH0pO1xuICBjb25zdCBbc2VsZWN0ZWRGaWxlcywgc2V0U2VsZWN0ZWRGaWxlc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NpZHMsIHNldENpZHNdID0gdXNlU3RhdGUoXCJcIik7XG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgc2V0Q2lkcyhcIlwiKTtcbiAgICBpZiAoc2VsZWN0ZWRGaWxlcyAhPSBudWxsKSB7XG4gICAgICBjb25zdCByb290Q2lkID0gYXdhaXQgY2xpZW50LnB1dChzZWxlY3RlZEZpbGVzLCB7XG4gICAgICAgIG5hbWU6IFwiYW55IG5hbWVcIixcbiAgICAgICAgbWF4UmV0cmllczogMyxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0KHJvb3RDaWQpO1xuICAgICAgY29uc3QgZmlsZXMgPSBhd2FpdCByZXMuZmlsZXMoKTtcblxuICAgICAgZmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgICBzZXRDaWRzKGZpbGUuY2lkICsgXCIgXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbc2VsZWN0ZWRGaWxlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkRmlsZXMoZS50YXJnZXQuZmlsZXMpfSAvPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8cD5VcGxvYWRlZCBGaWxlcyBDSUQ6IDwvcD5cbiAgICAgIDxzcGFuPntjaWRzfTwvc3Bhbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwbG9hZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiV2ViM1N0b3JhZ2UiLCJ1cGxvYWQiLCJjbGllbnQiLCJ0b2tlbiIsInNlbGVjdGVkRmlsZXMiLCJzZXRTZWxlY3RlZEZpbGVzIiwiY2lkcyIsInNldENpZHMiLCJyb290Q2lkIiwicHV0IiwibmFtZSIsIm1heFJldHJpZXMiLCJyZXMiLCJnZXQiLCJmaWxlcyIsImZvckVhY2giLCJmaWxlIiwiY2lkIiwiZm9ybSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInAiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/upload.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3.storage":
/*!*******************************!*\
  !*** external "web3.storage" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("web3.storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/upload.js"));
module.exports = __webpack_exports__;

})();