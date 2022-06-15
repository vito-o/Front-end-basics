(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("schema-utils/dist/util/hints"), require("schema-utils/dist/util/Range"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "schema-utils/dist/util/hints", "schema-utils/dist/util/Range"], factory);
	else if(typeof exports === 'object')
		exports["webpackNumbers"] = factory(require("lodash"), require("schema-utils/dist/util/hints"), require("schema-utils/dist/util/Range"));
	else
		root["webpackNumbers"] = factory(root["lodash"], root["schema-utils/dist/util/hints"], root["schema-utils/dist/util/Range"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_schema_utils_dist_util_hints__, __WEBPACK_EXTERNAL_MODULE_schema_utils_dist_util_Range__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "schema-utils/dist/util/Range":
/*!***********************************************!*\
  !*** external "schema-utils/dist/util/Range" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_schema_utils_dist_util_Range__;

/***/ }),

/***/ "schema-utils/dist/util/hints":
/*!***********************************************!*\
  !*** external "schema-utils/dist/util/hints" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_schema_utils_dist_util_hints__;

/***/ }),

/***/ "./src/ref.json":
/*!**********************!*\
  !*** ./src/ref.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('[{"num":1,"word":"One"},{"num":2,"word":"Two"},{"num":3,"word":"Three"},{"num":4,"word":"Four"},{"num":5,"word":"Five"},{"num":0,"word":"Zero"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numToWord": () => (/* binding */ numToWord),
/* harmony export */   "wordToNum": () => (/* binding */ wordToNum)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ref_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ref.json */ "./src/ref.json");
/* harmony import */ var schema_utils_dist_util_hints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! schema-utils/dist/util/hints */ "schema-utils/dist/util/hints");
/* harmony import */ var schema_utils_dist_util_hints__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(schema_utils_dist_util_hints__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var schema_utils_dist_util_Range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! schema-utils/dist/util/Range */ "schema-utils/dist/util/Range");
/* harmony import */ var schema_utils_dist_util_Range__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(schema_utils_dist_util_Range__WEBPACK_IMPORTED_MODULE_3__);






console.log((schema_utils_dist_util_hints__WEBPACK_IMPORTED_MODULE_2___default()))
console.log((schema_utils_dist_util_Range__WEBPACK_IMPORTED_MODULE_3___default()))

function numToWord(num) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default().reduce(
    _ref_json__WEBPACK_IMPORTED_MODULE_1__,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    ''
  );
}

function wordToNum(word) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default().reduce(
    _ref_json__WEBPACK_IMPORTED_MODULE_1__,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1
  );
}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});