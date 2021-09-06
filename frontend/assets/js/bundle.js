/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/cpf-is-valid/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/cpf-is-valid/dist/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cpfIsValid = void 0;
var treatCpf = function (cpf) {
    return {
        completeCpf: cpf.replace(/\D+/g, ''),
        treatedCpf: cpf.replace(/\D+/g, '').substring(0, 9).split(''),
        finalTwoDigits: "" + cpf.slice(-2)
    };
};
var knownInvalidsCpfs = function (cpf) {
    if (cpf === "00000000000" ||
        cpf === "11111111111" ||
        cpf === "22222222222" ||
        cpf === "33333333333" ||
        cpf === "44444444444" ||
        cpf === "55555555555" ||
        cpf === "66666666666" ||
        cpf === "77777777777" ||
        cpf === "88888888888" ||
        cpf === "99999999999")
        return true;
    return false;
};
var sum = function (cpf, acc) {
    var cont = acc;
    var reducer = cpf.reduce(function (sum, digit) {
        var numberDigit = Number(digit);
        sum += (numberDigit * cont);
        cont -= 1;
        return sum;
    }, 0);
    return reducer;
};
var digit = function (sum) {
    var digit = sum % 11 < 2 ? 0 : (11 - (sum % 11));
    return String(digit);
};
var cpfIsValid = function (cpf) {
    var completeCpf = treatCpf(cpf).completeCpf;
    if (completeCpf.length !== 11 || knownInvalidsCpfs(completeCpf))
        return false;
    var treatedCpf = treatCpf(cpf).treatedCpf;
    var finalTwoDigits = treatCpf(cpf).finalTwoDigits;
    var sum1 = sum(treatedCpf, 10);
    var digit1 = digit(sum1);
    treatedCpf.push(digit1);
    var cpfWithFirstDigit = treatedCpf;
    var sum2 = sum(cpfWithFirstDigit, 11);
    var digit2 = digit(sum2);
    return "" + digit1 + digit2 === finalTwoDigits ? true : false;
};
exports.cpfIsValid = cpfIsValid;


/***/ }),

/***/ "./src/modules/generateCpf.ts":
/*!************************************!*\
  !*** ./src/modules/generateCpf.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateCpf)
/* harmony export */ });
/* harmony import */ var cpf_is_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cpf-is-valid */ "./node_modules/cpf-is-valid/dist/index.js");
/* harmony import */ var _generateCpfNumbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateCpfNumbers */ "./src/modules/generateCpfNumbers.ts");
/* harmony import */ var _sumDigits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sumDigits */ "./src/modules/sumDigits.ts");
/* harmony import */ var _returnDigit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./returnDigit */ "./src/modules/returnDigit.ts");




function generateCpf() {
    var cpfNumbers = [];
    for (var i = 0; i < 9; i += 1) {
        var number = (0,_generateCpfNumbers__WEBPACK_IMPORTED_MODULE_1__["default"])(0, 9);
        cpfNumbers.push(String(number));
    }
    var sum1 = (0,_sumDigits__WEBPACK_IMPORTED_MODULE_2__["default"])(cpfNumbers, 10);
    var digit1 = (0,_returnDigit__WEBPACK_IMPORTED_MODULE_3__["default"])(sum1);
    cpfNumbers.push(digit1);
    var sum2 = (0,_sumDigits__WEBPACK_IMPORTED_MODULE_2__["default"])(cpfNumbers, 11);
    var digit2 = (0,_returnDigit__WEBPACK_IMPORTED_MODULE_3__["default"])(sum2);
    cpfNumbers.push(digit2);
    var finalCpf = cpfNumbers
        .join('')
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    return (0,cpf_is_valid__WEBPACK_IMPORTED_MODULE_0__.cpfIsValid)(finalCpf) ? finalCpf : cpfNumbers.fill('').join('');
}


/***/ }),

/***/ "./src/modules/generateCpfNumbers.ts":
/*!*******************************************!*\
  !*** ./src/modules/generateCpfNumbers.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (min, max) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
});


/***/ }),

/***/ "./src/modules/returnDigit.ts":
/*!************************************!*\
  !*** ./src/modules/returnDigit.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (sum) {
    var digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    return String(digit);
});


/***/ }),

/***/ "./src/modules/sumDigits.ts":
/*!**********************************!*\
  !*** ./src/modules/sumDigits.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-param-reassign */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (cpf, acc) {
    var cont = acc;
    var reducer = cpf.reduce(function (sum, digit) {
        var numberDigit = Number(digit);
        sum += numberDigit * cont;
        cont -= 1;
        return sum;
    }, 0);
    return reducer;
});


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
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_generateCpf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/generateCpf */ "./src/modules/generateCpf.ts");

(function () {
    var result = document.querySelector('.result');
    var button = document.querySelector('.generate');
    window.addEventListener('load', function () {
        result.innerText = (0,_modules_generateCpf__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });
    button.addEventListener('click', function () {
        result.innerText = (0,_modules_generateCpf__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map