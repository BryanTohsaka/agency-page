"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/homepage/home6-dark",{

/***/ "./src/common/thumparallax.js":
/*!************************************!*\
  !*** ./src/common/thumparallax.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"thumparallax\": function() { return /* binding */ thumparallax; },\n/* harmony export */   \"thumparallaxDown\": function() { return /* binding */ thumparallaxDown; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar thumparallax = function thumparallax() {\n  var imageUp = document.getElementsByClassName(\"thumparallax\");\n\n  if (imageUp) {\n    new simpleParallax(imageUp, {\n      delay: 1,\n      scale: 1.1\n    });\n  }\n};\nvar thumparallaxDown = function thumparallaxDown() {\n  var imageDown = document.getElementsByClassName(\"thumparallax-down\");\n\n  if (imageDown) {\n    new simpleParallax(imageDown, {\n      orientation: \"down\",\n      delay: 1,\n      scale: 1.1\n    });\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL3RodW1wYXJhbGxheC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ2hDLE1BQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxjQUFoQyxDQUFkOztBQUNBLE1BQUlGLE9BQUosRUFBYTtBQUNYLFFBQUlHLGNBQUosQ0FBbUJILE9BQW5CLEVBQTRCO0FBQzFCSSxNQUFBQSxLQUFLLEVBQUUsQ0FEbUI7QUFFMUJDLE1BQUFBLEtBQUssRUFBRTtBQUZtQixLQUE1QjtBQUlEO0FBQ0YsQ0FSTTtBQVNBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUNwQyxNQUFJQyxTQUFTLEdBQUdOLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsbUJBQWhDLENBQWhCOztBQUNBLE1BQUlLLFNBQUosRUFBZTtBQUNiLFFBQUlKLGNBQUosQ0FBbUJJLFNBQW5CLEVBQThCO0FBQzVCQyxNQUFBQSxXQUFXLEVBQUUsTUFEZTtBQUU1QkosTUFBQUEsS0FBSyxFQUFFLENBRnFCO0FBRzVCQyxNQUFBQSxLQUFLLEVBQUU7QUFIcUIsS0FBOUI7QUFLRDtBQUNGLENBVE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbW1vbi90aHVtcGFyYWxsYXguanM/YjZjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdGh1bXBhcmFsbGF4ID0gKCkgPT4ge1xyXG4gIHZhciBpbWFnZVVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRodW1wYXJhbGxheFwiKTtcclxuICBpZiAoaW1hZ2VVcCkge1xyXG4gICAgbmV3IHNpbXBsZVBhcmFsbGF4KGltYWdlVXAsIHtcclxuICAgICAgZGVsYXk6IDEsXHJcbiAgICAgIHNjYWxlOiAxLjEsXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCB0aHVtcGFyYWxsYXhEb3duID0gKCkgPT4ge1xyXG4gIHZhciBpbWFnZURvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGh1bXBhcmFsbGF4LWRvd25cIik7XHJcbiAgaWYgKGltYWdlRG93bikge1xyXG4gICAgbmV3IHNpbXBsZVBhcmFsbGF4KGltYWdlRG93biwge1xyXG4gICAgICBvcmllbnRhdGlvbjogXCJkb3duXCIsXHJcbiAgICAgIGRlbGF5OiAxLFxyXG4gICAgICBzY2FsZTogMS4xLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsidGh1bXBhcmFsbGF4IiwiaW1hZ2VVcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNpbXBsZVBhcmFsbGF4IiwiZGVsYXkiLCJzY2FsZSIsInRodW1wYXJhbGxheERvd24iLCJpbWFnZURvd24iLCJvcmllbnRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/thumparallax.js\n");

/***/ }),

/***/ "./src/components/Minimal-Area2/minimal-area2.jsx":
/*!********************************************************!*\
  !*** ./src/components/Minimal-Area2/minimal-area2.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Split */ \"./src/components/Split/index.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_thumparallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/thumparallax */ \"./src/common/thumparallax.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/marisol/Documents/vie/src/components/Minimal-Area2/minimal-area2.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable @next/next/no-img-element */\n\n\n\n\n\n\nvar MinimalArea2 = function MinimalArea2() {\n  _s();\n\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    setTimeout(function () {\n      (0,_common_thumparallax__WEBPACK_IMPORTED_MODULE_3__.thumparallaxDown)();\n    }, 1000);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"section\", {\n    className: \"min-area\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"col-lg-6\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"img\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n              className: \"thumparallax-down\",\n              src: \"/img/min-area.jpg\",\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"col-lg-6 valign\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"content\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h4\", {\n              className: \"color-font\",\n              children: \"Dream. Innovate. Implement.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Split__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n                className: \"wow txt words chars splitting\",\n                \"data-splitting\": true,\n                children: \"Cultivamos ideas inteligentes tanto para startups como para jugadores experimentados. Siguiendo los est\\xE1ndares de la industria, creamos portfolios impresionantes y apoyamos la creaci\\xF3n de marcas que redefinen los l\\xEDmites.\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"ul\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n                className: \"wow fadeInUp\",\n                \"data-wow-delay\": \".2s\",\n                children: \"Brindamos consulta inicial y soporte gratuitos.\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n                className: \"wow fadeInUp\",\n                \"data-wow-delay\": \".4s\",\n                children: \"Trabajamos con algunas de las empresas m\\xE1s exitosas.\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MinimalArea2, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = MinimalArea2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MinimalArea2);\n\nvar _c;\n\n$RefreshReg$(_c, \"MinimalArea2\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NaW5pbWFsLUFyZWEyL21pbmltYWwtYXJlYTIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN6QkosRUFBQUEsc0RBQUEsQ0FBZ0IsWUFBTTtBQUNwQk0sSUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZkgsTUFBQUEsc0VBQWdCO0FBQ2pCLEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxHQUpELEVBSUcsRUFKSDtBQUtBLHNCQUNFO0FBQVMsYUFBUyxFQUFDLFVBQW5CO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG1DQUNFO0FBQ0UsdUJBQVMsRUFBQyxtQkFEWjtBQUVFLGlCQUFHLEVBQUMsbUJBRk47QUFHRSxpQkFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBVUU7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLFNBQWY7QUFBQSxvQ0FDRTtBQUFJLHVCQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLDhDQUFEO0FBQUEscUNBQ0U7QUFBRyx5QkFBUyxFQUFDLCtCQUFiO0FBQTZDLHNDQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFVRTtBQUFBLHNDQUNFO0FBQUkseUJBQVMsRUFBQyxjQUFkO0FBQTZCLGtDQUFlLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBSUU7QUFBSSx5QkFBUyxFQUFDLGNBQWQ7QUFBNkIsa0NBQWUsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZGLGVBb0JFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlDRCxDQS9DRDs7R0FBTUM7O0tBQUFBO0FBaUROLCtEQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01pbmltYWwtQXJlYTIvbWluaW1hbC1hcmVhMi5qc3g/ZWI1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNwbGl0IGZyb20gXCIuLi9TcGxpdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHRodW1wYXJhbGxheERvd24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL3RodW1wYXJhbGxheFwiO1xyXG5cclxuY29uc3QgTWluaW1hbEFyZWEyID0gKCkgPT4ge1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGh1bXBhcmFsbGF4RG93bigpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtaW4tYXJlYVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGh1bXBhcmFsbGF4LWRvd25cIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9taW4tYXJlYS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiB2YWxpZ25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNvbG9yLWZvbnRcIj5EcmVhbS4gSW5ub3ZhdGUuIEltcGxlbWVudC48L2g0PlxyXG4gICAgICAgICAgICAgIDxTcGxpdD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndvdyB0eHQgd29yZHMgY2hhcnMgc3BsaXR0aW5nXCIgZGF0YS1zcGxpdHRpbmc+XHJcbiAgICAgICAgICAgICAgICAgIEN1bHRpdmFtb3MgaWRlYXMgaW50ZWxpZ2VudGVzIHRhbnRvIHBhcmEgc3RhcnR1cHMgY29tbyBwYXJhXHJcbiAgICAgICAgICAgICAgICAgIGp1Z2Fkb3JlcyBleHBlcmltZW50YWRvcy4gU2lndWllbmRvIGxvcyBlc3TDoW5kYXJlcyBkZSBsYVxyXG4gICAgICAgICAgICAgICAgICBpbmR1c3RyaWEsIGNyZWFtb3MgcG9ydGZvbGlvcyBpbXByZXNpb25hbnRlcyB5IGFwb3lhbW9zIGxhIGNyZWFjacOzbiBkZVxyXG4gICAgICAgICAgICAgICAgICBtYXJjYXMgcXVlIHJlZGVmaW5lbiBsb3MgbMOtbWl0ZXMuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9TcGxpdD5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid293IGZhZGVJblVwXCIgZGF0YS13b3ctZGVsYXk9XCIuMnNcIj5cclxuICAgICAgICAgICAgICAgIEJyaW5kYW1vcyBjb25zdWx0YSBpbmljaWFsIHkgc29wb3J0ZSBncmF0dWl0b3MuXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndvdyBmYWRlSW5VcFwiIGRhdGEtd293LWRlbGF5PVwiLjRzXCI+XHJcbiAgICAgICAgICAgICAgICBUcmFiYWphbW9zIGNvbiBhbGd1bmFzIGRlIGxhcyBlbXByZXNhcyBtw6FzIGV4aXRvc2FzLlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pbmltYWxBcmVhMjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3BsaXQiLCJMaW5rIiwidGh1bXBhcmFsbGF4RG93biIsIk1pbmltYWxBcmVhMiIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Minimal-Area2/minimal-area2.jsx\n");

/***/ }),

/***/ "./src/pages/homepage/home6-dark.jsx":
/*!*******************************************!*\
  !*** ./src/pages/homepage/home6-dark.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Navbar/navbar */ \"./src/components/Navbar/navbar.jsx\");\n/* harmony import */ var _components_Intro4_intro4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Intro4/intro4 */ \"./src/components/Intro4/intro4.jsx\");\n/* harmony import */ var _components_Minimal_Area2_minimal_area2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Minimal-Area2/minimal-area2 */ \"./src/components/Minimal-Area2/minimal-area2.jsx\");\n/* harmony import */ var _components_blogs_Blogs2_blogs2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/blogs/Blogs2/blogs2 */ \"./src/components/blogs/Blogs2/blogs2.jsx\");\n/* harmony import */ var _components_Call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Call-to-action/call-to-action */ \"./src/components/Call-to-action/call-to-action.jsx\");\n/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Footer/footer */ \"./src/components/Footer/footer.jsx\");\n/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layouts/Dark */ \"./src/layouts/Dark.jsx\");\n/* harmony import */ var _components_Services3_services3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Services3/services3 */ \"./src/components/Services3/services3.jsx\");\n/* harmony import */ var _components_Services4_services4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Services4/services4 */ \"./src/components/Services4/services4.jsx\");\n/* harmony import */ var _components_About_us2_about_us2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/About-us2/about-us2 */ \"./src/components/About-us2/about-us2.jsx\");\n/* harmony import */ var _components_Works_style3_works_style3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Works-style3/works-style3 */ \"./src/components/Works-style3/works-style3.jsx\");\n/* harmony import */ var _components_Full_testimonials_full_testimonials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Full-testimonials/full-testimonials */ \"./src/components/Full-testimonials/full-testimonials.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/marisol/Documents/vie/src/pages/homepage/home6-dark.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Homepage1 = function Homepage1() {\n  _s();\n\n  var fixedSlider = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var MainContent = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var navbarRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var logoRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    setInterval(function () {\n      if (fixedSlider.current) {\n        var slidHeight = fixedSlider.current.offsetHeight;\n      }\n\n      if (MainContent.current) {\n        MainContent.current.style.marginTop = slidHeight + \"px\";\n      }\n    }, 1000);\n    var navbar = navbarRef.current;\n\n    if (window.pageYOffset > 300) {\n      navbar.classList.add(\"nav-scroll\");\n    } else {\n      navbar.classList.remove(\"nav-scroll\");\n    }\n\n    window.addEventListener(\"scroll\", function () {\n      if (window.pageYOffset > 300) {\n        navbar.classList.add(\"nav-scroll\");\n      } else {\n        navbar.classList.remove(\"nav-scroll\");\n      }\n    });\n  }, [fixedSlider, MainContent, navbarRef]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      nr: navbarRef,\n      lr: logoRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Intro4_intro4__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_About_us2_about_us2__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"div\", {\n      ref: MainContent,\n      className: \"main-content\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Works_style3_works_style3__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Services3_services3__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Minimal_Area2_minimal_area2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Full_testimonials_full_testimonials__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_blogs_Blogs2_blogs2__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        img: \"/img/patrn1.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Homepage1, \"YcvxAMScyFYs9YZ0O46x4wgwCw8=\");\n\n_c = Homepage1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage1);\n\nvar _c;\n\n$RefreshReg$(_c, \"Homepage1\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQS9DRDs7R0FBTUg7O0tBQUFBO0FBaUROLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ob21lcGFnZS9ob21lNi1kYXJrLmpzeD85YTM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyXCI7XHJcbmltcG9ydCBJbnRybzQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSW50cm80L2ludHJvNFwiO1xyXG5pbXBvcnQgTWluaW1hbEFyZWEyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01pbmltYWwtQXJlYTIvbWluaW1hbC1hcmVhMlwiO1xyXG5pbXBvcnQgQmxvZ3MyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jsb2dzL0Jsb2dzMi9ibG9nczJcIjtcclxuaW1wb3J0IENhbGxUb0FjdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DYWxsLXRvLWFjdGlvbi9jYWxsLXRvLWFjdGlvblwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXJcIjtcclxuaW1wb3J0IERhcmtUaGVtZSBmcm9tIFwiLi4vLi4vbGF5b3V0cy9EYXJrXCI7XHJcbmltcG9ydCBTZXJ2aWNlczMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VydmljZXMzL3NlcnZpY2VzM1wiO1xyXG5pbXBvcnQgU2VydmljZXM0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlcnZpY2VzNC9zZXJ2aWNlczRcIjtcclxuaW1wb3J0IEFib3V0VXMyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Fib3V0LXVzMi9hYm91dC11czJcIjtcclxuaW1wb3J0IFdvcmtzU3R5bGUzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dvcmtzLXN0eWxlMy93b3Jrcy1zdHlsZTNcIjtcclxuaW1wb3J0IEZ1bGxUZXN0aW1vbmlhbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRnVsbC10ZXN0aW1vbmlhbHMvZnVsbC10ZXN0aW1vbmlhbHNcIjtcclxuXHJcbmNvbnN0IEhvbWVwYWdlMSA9ICgpID0+IHtcclxuICBjb25zdCBmaXhlZFNsaWRlciA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBNYWluQ29udGVudCA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBuYXZiYXJSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbG9nb1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKGZpeGVkU2xpZGVyLmN1cnJlbnQpIHtcclxuICAgICAgICB2YXIgc2xpZEhlaWdodCA9IGZpeGVkU2xpZGVyLmN1cnJlbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChNYWluQ29udGVudC5jdXJyZW50KSB7XHJcbiAgICAgICAgTWFpbkNvbnRlbnQuY3VycmVudC5zdHlsZS5tYXJnaW5Ub3AgPSBzbGlkSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIHZhciBuYXZiYXIgPSBuYXZiYXJSZWYuY3VycmVudDtcclxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcclxuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXNjcm9sbFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW2ZpeGVkU2xpZGVyLCBNYWluQ29udGVudCwgbmF2YmFyUmVmXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGFya1RoZW1lPlxyXG4gICAgICA8TmF2YmFyIG5yPXtuYXZiYXJSZWZ9IGxyPXtsb2dvUmVmfSAvPlxyXG4gICAgICA8SW50cm80IC8+XHJcbiAgICAgIDxBYm91dFVzMiAvPlxyXG4gICAgICA8ZGl2IHJlZj17TWFpbkNvbnRlbnR9IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICAgIDxXb3Jrc1N0eWxlMyAvPlxyXG4gICAgICAgIDxTZXJ2aWNlczMgLz5cclxuICAgICAgICBcclxuICAgICAgPE1pbmltYWxBcmVhMiAvPlxyXG4gICAgICAgIDxGdWxsVGVzdGltb25pYWxzIC8+XHJcbiAgICAgICAgPEJsb2dzMiAvPlxyXG4gICAgICAgIDxDYWxsVG9BY3Rpb24gaW1nPVwiL2ltZy9wYXRybjEucG5nXCIgLz5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9EYXJrVGhlbWU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlMTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2YmFyIiwiSW50cm80IiwiTWluaW1hbEFyZWEyIiwiQmxvZ3MyIiwiQ2FsbFRvQWN0aW9uIiwiRm9vdGVyIiwiRGFya1RoZW1lIiwiU2VydmljZXMzIiwiU2VydmljZXM0IiwiQWJvdXRVczIiLCJXb3Jrc1N0eWxlMyIsIkZ1bGxUZXN0aW1vbmlhbHMiLCJIb21lcGFnZTEiLCJmaXhlZFNsaWRlciIsInVzZVJlZiIsIk1haW5Db250ZW50IiwibmF2YmFyUmVmIiwibG9nb1JlZiIsInVzZUVmZmVjdCIsInNldEludGVydmFsIiwiY3VycmVudCIsInNsaWRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsIm1hcmdpblRvcCIsIm5hdmJhciIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/homepage/home6-dark.jsx\n");

/***/ })

});