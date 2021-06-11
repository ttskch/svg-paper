(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SvgPaper"] = factory();
	else
		root["SvgPaper"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/adjust-text.js":
/*!*******************************!*\
  !*** ./js/src/adjust-text.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = (function (selector, config) {
  var $this = document.querySelector(selector);

  if (!$this) {
    return;
  } // shrink text element to specified width


  if ('textLength' in config && config['textLength']) {
    // for firefox
    // @see https://developer.mozilla.org/ja/docs/Web/API/Element/clientWidth
    $this.style.display = 'block';

    if ($this.clientWidth > config.textLength) {
      $this.querySelector('tspan').setAttribute('textLength', config.textLength);
      $this.querySelector('tspan').setAttribute('lengthAdjust', 'spacingAndGlyphs'); // for firefox
      // @see https://bugzilla.mozilla.org/show_bug.cgi?id=890692

      $this.setAttribute('textLength', config.textLength);
      $this.setAttribute('lengthAdjust', 'spacingAndGlyphs');
    }
  } // alignment


  if ('text-anchor' in config && config['text-anchor'] && config['text-anchor'] !== 'start') {
    var _$this$getAttribute;

    // effective only when textLength is specified and text element has transform="translate(x y)"
    var match = (_$this$getAttribute = $this.getAttribute('transform')) === null || _$this$getAttribute === void 0 ? void 0 : _$this$getAttribute.match(/translate\(([^ ]+) .+\)/);

    if (!config['textLength'] || !match) {
      return;
    }

    var w = parseFloat(config['textLength']);
    var x = parseFloat(match[1]);

    if (config['text-anchor'] === 'middle') {
      var newTransform = $this.getAttribute('transform').replace(/translate\([^ ]+ (.+)\)/, "translate(".concat(x + w / 2, " $1)"));
      $this.setAttribute('transform', newTransform);
    }

    if (config['text-anchor'] === 'end') {
      var _newTransform = $this.getAttribute('transform').replace(/translate\([^ ]+ (.+)\)/, "translate(".concat(x + w, " $1)"));

      $this.setAttribute('transform', _newTransform);
    }

    $this.setAttribute('text-anchor', config['text-anchor']);
  }
});

/***/ }),

/***/ "./js/src/adjust-textarea.js":
/*!***********************************!*\
  !*** ./js/src/adjust-textarea.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_split_string_by_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/split-string-by-width */ "./js/src/utility/split-string-by-width.js");



/* harmony default export */ __webpack_exports__["default"] = (function (textSvg, textContent, width, height) {
  var lineHeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.2;
  var paddingX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.5;
  var paddingY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0.5;
  var nowrap = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  if (!textSvg.match(new RegExp('<text [^>]*font-size="\\d+"[^>]*><tspan( [^>]*>|>)[^<>]*</tspan></text>'))) {
    console.error('Invalid svg string of text element', textSvg);
    return textSvg;
  }

  var originalFontSize = parseInt(textSvg.match(/.+font-size="(\d+)".+/)[1]);
  var fontSize = originalFontSize; // find the right-size font-size

  var physicalLines = textContent.split("\n");
  var logicalLines = [];

  var _loop = function _loop() {
    var maxRows = Math.floor((height - 2 * fontSize * paddingY) / (fontSize * lineHeight));
    var maxColumns = Math.floor((width - 2 * fontSize * paddingX) / fontSize); // doesn't care about proportional font

    if (nowrap) {
      logicalLines = physicalLines;
    } else {
      logicalLines = [];
      physicalLines.forEach(function (line) {
        logicalLines = logicalLines.concat(Object(_utility_split_string_by_width__WEBPACK_IMPORTED_MODULE_0__["default"])(line, maxColumns * 2)); // 2 single-byte characters can be placed in 1 column
      });
    }

    if (logicalLines.length > maxRows) {
      fontSize *= 0.95;
    } else {
      return "break";
    }
  };

  while (true) {
    var _ret = _loop();

    if (_ret === "break") break;
  } // raise y-coordinate up because y-coordinate of <text transform="translate(x y)"> is on lower base of text object


  var adjustY = fontSize - originalFontSize;
  var adjustedTextSvg = textSvg;
  adjustedTextSvg = adjustedTextSvg.replace(new RegExp('<tspan(.|\\s)+</text>'), '');
  adjustedTextSvg = adjustedTextSvg.replace(new RegExp('font-size="\\d+"'), "font-size=\"".concat(fontSize, "\""));
  adjustedTextSvg += '{tspan}</text>';
  var tspan = '';
  var x = fontSize * paddingX;
  logicalLines.forEach(function (line, i) {
    var y = adjustY + fontSize * (paddingY + i * lineHeight);
    tspan += "<tspan x=\"".concat(x, "\" y=\"").concat(y, "\">").concat(line, "</tspan>");
  });
  adjustedTextSvg = adjustedTextSvg.replace('{tspan}', tspan);
  return adjustedTextSvg;
});

/***/ }),

/***/ "./js/src/svg-paper.js":
/*!*****************************!*\
  !*** ./js/src/svg-paper.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SvgPaper; });
/* harmony import */ var _adjust_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adjust-text */ "./js/src/adjust-text.js");
/* harmony import */ var _adjust_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adjust-textarea */ "./js/src/adjust-textarea.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var SvgPaper = /*#__PURE__*/function () {
  function SvgPaper() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'svg';

    _classCallCheck(this, SvgPaper);

    this.selector = selector;
    this.svg = document.querySelector(selector).outerHTML.replace(/[\r|\n]+/g, "\n");
    this.adjustTextQueries = [];
  }

  _createClass(SvgPaper, [{
    key: "replace",
    value: function replace(search, replacement) {
      if (search instanceof RegExp) {
        search = new RegExp(search.source, search.flags.replace(/g/g, '') + 'g');
      } else {
        search = search.replace(/[\r|\n]+/g, "\n"); // @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions#escaping

        search = search.replace(/[.*+?^=!:${}()|[\]\/\\]/g, '\\$&');
        search = new RegExp(search, 'g');
      } // cast to string


      replacement = replacement ? replacement + '' : '';
      replacement = replacement.replace(/[\r|\n]+/g, "\n");
      this.svg = this.svg.replace(search, replacement);
      return this;
    }
  }, {
    key: "adjustText",
    value: function adjustText(selector) {
      var textLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var textAnchor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'start';
      this.adjustTextQueries.push({
        selector: selector,
        textLength: textLength,
        textAnchor: textAnchor
      });
      return this;
    }
  }, {
    key: "adjustTextarea",
    value: function adjustTextarea(selector, width, height) {
      var lineHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1.2;
      var paddingX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.5;
      var paddingY = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.5;
      var nowrap = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      var doc = new DOMParser().parseFromString(this.svg, 'text/html');
      var textElement = doc.querySelector(selector);
      var textSvg = textElement.outerHTML; // SVGElement doesn't have innerText
      // @see https://developer.mozilla.org/en-US/docs/Web/API/SVGElement

      var textContent = textElement.innerHTML.replace(new RegExp('^<tspan[^>]*>((.|\\s)*)</tspan>$'), '$1');

      var adjustedTextSvg = Object(_adjust_textarea__WEBPACK_IMPORTED_MODULE_1__["default"])(textSvg, textContent, width, height, lineHeight, paddingX, paddingY, nowrap);

      this.replace(textSvg, adjustedTextSvg);
      return this;
    }
  }, {
    key: "apply",
    value: function apply() {
      document.querySelector(this.selector).outerHTML = this.svg;
      this.adjustTextQueries.forEach(function (query) {
        Object(_adjust_text__WEBPACK_IMPORTED_MODULE_0__["default"])(query.selector, {
          textLength: query.textLength,
          'text-anchor': query.textAnchor
        });
      }); // initialize

      this.adjustTextQueries = [];
    }
  }]);

  return SvgPaper;
}();



/***/ }),

/***/ "./js/src/utility/split-string-by-width.js":
/*!*************************************************!*\
  !*** ./js/src/utility/split-string-by-width.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sub_string_by_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-string-by-width */ "./js/src/utility/sub-string-by-width.js");

/* harmony default export */ __webpack_exports__["default"] = (function (string, width) {
  var splits = [];

  while (true) {
    var split = Object(_sub_string_by_width__WEBPACK_IMPORTED_MODULE_0__["default"])(string, 0, width);
    splits.push(split);
    string = string.replace(split, '');

    if (!string) {
      break;
    }
  }

  return splits;
});

/***/ }),

/***/ "./js/src/utility/sub-string-by-width.js":
/*!***********************************************!*\
  !*** ./js/src/utility/sub-string-by-width.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var string_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-width */ "./node_modules/string-width/index.js");
/* harmony import */ var string_width__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(string_width__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (string, start, width) {
  var currentWidth = 0;
  var subString = '';

  for (var i = start;; i++) {
    var _char = string.substr(i, 1);

    currentWidth += string_width__WEBPACK_IMPORTED_MODULE_0___default()(_char);

    if (currentWidth <= width && i <= string.length) {
      subString += _char;
    }

    if (currentWidth >= width || i >= string.length) {
      return subString;
    }
  }
});

/***/ }),

/***/ "./node_modules/emoji-regex/index.js":
/*!*******************************************!*\
  !*** ./node_modules/emoji-regex/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  // https://mths.be/emoji
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};

/***/ }),

/***/ "./node_modules/string-width/index.js":
/*!********************************************!*\
  !*** ./node_modules/string-width/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stripAnsi = __webpack_require__(/*! strip-ansi */ "./node_modules/strip-ansi/index.js");

var isFullwidthCodePoint = __webpack_require__(/*! is-fullwidth-code-point */ "./node_modules/string-width/node_modules/is-fullwidth-code-point/index.js");

var emojiRegex = __webpack_require__(/*! emoji-regex */ "./node_modules/emoji-regex/index.js");

var stringWidth = function stringWidth(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return 0;
  }

  string = stripAnsi(string);

  if (string.length === 0) {
    return 0;
  }

  string = string.replace(emojiRegex(), '  ');
  var width = 0;

  for (var i = 0; i < string.length; i++) {
    var code = string.codePointAt(i); // Ignore control characters

    if (code <= 0x1F || code >= 0x7F && code <= 0x9F) {
      continue;
    } // Ignore combining characters


    if (code >= 0x300 && code <= 0x36F) {
      continue;
    } // Surrogates


    if (code > 0xFFFF) {
      i++;
    }

    width += isFullwidthCodePoint(code) ? 2 : 1;
  }

  return width;
};

module.exports = stringWidth; // TODO: remove this in the next major version

module.exports["default"] = stringWidth;

/***/ }),

/***/ "./node_modules/string-width/node_modules/is-fullwidth-code-point/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/string-width/node_modules/is-fullwidth-code-point/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable yoda */


var isFullwidthCodePoint = function isFullwidthCodePoint(codePoint) {
  if (Number.isNaN(codePoint)) {
    return false;
  } // Code points are derived from:
  // http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt


  if (codePoint >= 0x1100 && (codePoint <= 0x115F || // Hangul Jamo
  codePoint === 0x2329 || // LEFT-POINTING ANGLE BRACKET
  codePoint === 0x232A || // RIGHT-POINTING ANGLE BRACKET
  // CJK Radicals Supplement .. Enclosed CJK Letters and Months
  0x2E80 <= codePoint && codePoint <= 0x3247 && codePoint !== 0x303F || // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
  0x3250 <= codePoint && codePoint <= 0x4DBF || // CJK Unified Ideographs .. Yi Radicals
  0x4E00 <= codePoint && codePoint <= 0xA4C6 || // Hangul Jamo Extended-A
  0xA960 <= codePoint && codePoint <= 0xA97C || // Hangul Syllables
  0xAC00 <= codePoint && codePoint <= 0xD7A3 || // CJK Compatibility Ideographs
  0xF900 <= codePoint && codePoint <= 0xFAFF || // Vertical Forms
  0xFE10 <= codePoint && codePoint <= 0xFE19 || // CJK Compatibility Forms .. Small Form Variants
  0xFE30 <= codePoint && codePoint <= 0xFE6B || // Halfwidth and Fullwidth Forms
  0xFF01 <= codePoint && codePoint <= 0xFF60 || 0xFFE0 <= codePoint && codePoint <= 0xFFE6 || // Kana Supplement
  0x1B000 <= codePoint && codePoint <= 0x1B001 || // Enclosed Ideographic Supplement
  0x1F200 <= codePoint && codePoint <= 0x1F251 || // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
  0x20000 <= codePoint && codePoint <= 0x3FFFD)) {
    return true;
  }

  return false;
};

module.exports = isFullwidthCodePoint;
module.exports["default"] = isFullwidthCodePoint;

/***/ }),

/***/ "./node_modules/strip-ansi/index.js":
/*!******************************************!*\
  !*** ./node_modules/strip-ansi/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/strip-ansi/node_modules/ansi-regex/index.js");

module.exports = function (string) {
  return typeof string === 'string' ? string.replace(ansiRegex(), '') : string;
};

/***/ }),

/***/ "./node_modules/strip-ansi/node_modules/ansi-regex/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/strip-ansi/node_modules/ansi-regex/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$onlyFirst = _ref.onlyFirst,
      onlyFirst = _ref$onlyFirst === void 0 ? false : _ref$onlyFirst;

  var pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|');
  return new RegExp(pattern, onlyFirst ? undefined : 'g');
};

/***/ }),

/***/ "./scss/svg-paper.scss":
/*!*****************************!*\
  !*** ./scss/svg-paper.scss ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 0:
/*!*********************************************************!*\
  !*** multi ./scss/svg-paper.scss ./js/src/svg-paper.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./scss/svg-paper.scss */"./scss/svg-paper.scss");
module.exports = __webpack_require__(/*! ./js/src/svg-paper.js */"./js/src/svg-paper.js");


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdmdQYXBlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9qcy9zcmMvYWRqdXN0LXRleHQuanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9qcy9zcmMvYWRqdXN0LXRleHRhcmVhLmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vanMvc3JjL3N2Zy1wYXBlci5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L3NwbGl0LXN0cmluZy1ieS13aWR0aC5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L3N1Yi1zdHJpbmctYnktd2lkdGguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvZW1vamktcmVnZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvc3RyaW5nLXdpZHRoL2luZGV4LmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vbm9kZV9tb2R1bGVzL3N0cmluZy13aWR0aC9ub2RlX21vZHVsZXMvaXMtZnVsbHdpZHRoLWNvZGUtcG9pbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvc3RyaXAtYW5zaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL25vZGVfbW9kdWxlcy9zdHJpcC1hbnNpL25vZGVfbW9kdWxlcy9hbnNpLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vc2Nzcy9zdmctcGFwZXIuc2Nzcz9mOWQyIl0sIm5hbWVzIjpbInNlbGVjdG9yIiwiY29uZmlnIiwiJHRoaXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGllbnRXaWR0aCIsInRleHRMZW5ndGgiLCJzZXRBdHRyaWJ1dGUiLCJtYXRjaCIsImdldEF0dHJpYnV0ZSIsInciLCJwYXJzZUZsb2F0IiwieCIsIm5ld1RyYW5zZm9ybSIsInJlcGxhY2UiLCJ0ZXh0U3ZnIiwidGV4dENvbnRlbnQiLCJ3aWR0aCIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJwYWRkaW5nWCIsInBhZGRpbmdZIiwibm93cmFwIiwiUmVnRXhwIiwiY29uc29sZSIsImVycm9yIiwib3JpZ2luYWxGb250U2l6ZSIsInBhcnNlSW50IiwiZm9udFNpemUiLCJwaHlzaWNhbExpbmVzIiwic3BsaXQiLCJsb2dpY2FsTGluZXMiLCJtYXhSb3dzIiwiTWF0aCIsImZsb29yIiwibWF4Q29sdW1ucyIsImZvckVhY2giLCJsaW5lIiwiY29uY2F0Iiwic3BsaXRTdHJpbmdCeVdpZHRoIiwibGVuZ3RoIiwiYWRqdXN0WSIsImFkanVzdGVkVGV4dFN2ZyIsInRzcGFuIiwiaSIsInkiLCJTdmdQYXBlciIsInN2ZyIsIm91dGVySFRNTCIsImFkanVzdFRleHRRdWVyaWVzIiwic2VhcmNoIiwicmVwbGFjZW1lbnQiLCJzb3VyY2UiLCJmbGFncyIsInRleHRBbmNob3IiLCJwdXNoIiwiZG9jIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwidGV4dEVsZW1lbnQiLCJpbm5lckhUTUwiLCJhZGp1c3RUZXh0YXJlYSIsInF1ZXJ5IiwiYWRqdXN0VGV4dCIsInN0cmluZyIsInNwbGl0cyIsInN1YlN0cmluZ0J5V2lkdGgiLCJzdGFydCIsImN1cnJlbnRXaWR0aCIsInN1YlN0cmluZyIsImNoYXIiLCJzdWJzdHIiLCJzdHJpbmdXaWR0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHJpcEFuc2kiLCJyZXF1aXJlIiwiaXNGdWxsd2lkdGhDb2RlUG9pbnQiLCJlbW9qaVJlZ2V4IiwiY29kZSIsImNvZGVQb2ludEF0IiwiY29kZVBvaW50IiwiTnVtYmVyIiwiaXNOYU4iLCJhbnNpUmVnZXgiLCJvbmx5Rmlyc3QiLCJwYXR0ZXJuIiwiam9pbiIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6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QXpCdEMsSUEwQkE7QUFDQyxhQUFXQSxTQUFYLElBQXdCQSxTQUFTLElBQUksT0E1QnZDLENBREQsRUErQkU7QUFDRCxXQUFPLElBQVA7QUFDQTs7QUFFRCxTQUFPLEtBQVA7QUFDQSxDQTNDRDs7QUE2Q0FSLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkcsb0JBQWpCO0FBQ0FKLE1BQU0sQ0FBQ0MsT0FBUCxjQUF5Qkcsb0JBQXpCLEM7Ozs7Ozs7Ozs7OztBQ2pEYTs7QUFDYixJQUFNTyxTQUFTLEdBQUdSLG1CQUFPLENBQUMsOEVBQUQsQ0FBekI7O0FBRUFILE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFBVixNQUFNO0FBQUEsU0FBSSxPQUFPQSxNQUFQLEtBQWtCLFFBQWxCLEdBQTZCQSxNQUFNLENBQUNsRCxPQUFQLENBQWVzRSxTQUFTLEVBQXhCLEVBQTRCLEVBQTVCLENBQTdCLEdBQStEcEIsTUFBbkU7QUFBQSxDQUF2QixDOzs7Ozs7Ozs7Ozs7QUNIYTs7QUFFYlMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFlBQThCO0FBQUEsaUZBQVAsRUFBTztBQUFBLDRCQUE1QlcsU0FBNEI7QUFBQSxNQUE1QkEsU0FBNEIsK0JBQWhCLEtBQWdCOztBQUM5QyxNQUFNQyxPQUFPLEdBQUcsQ0FDZiw2RkFEZSxFQUVmLDBEQUZlLEVBR2RDLElBSGMsQ0FHVCxHQUhTLENBQWhCO0FBS0EsU0FBTyxJQUFJaEUsTUFBSixDQUFXK0QsT0FBWCxFQUFvQkQsU0FBUyxHQUFHRyxTQUFILEdBQWUsR0FBNUMsQ0FBUDtBQUNBLENBUEQsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQSIsImZpbGUiOiJzdmctcGFwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdmdQYXBlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTdmdQYXBlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydCBkZWZhdWx0IChzZWxlY3RvciwgY29uZmlnKSA9PiB7XG4gIGNvbnN0ICR0aGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcblxuICBpZiAoISR0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBzaHJpbmsgdGV4dCBlbGVtZW50IHRvIHNwZWNpZmllZCB3aWR0aFxuICBpZiAoJ3RleHRMZW5ndGgnIGluIGNvbmZpZyAmJiBjb25maWdbJ3RleHRMZW5ndGgnXSkge1xuICAgIC8vIGZvciBmaXJlZm94XG4gICAgLy8gQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9qYS9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbGllbnRXaWR0aFxuICAgICR0aGlzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cbiAgICBpZiAoJHRoaXMuY2xpZW50V2lkdGggPiBjb25maWcudGV4dExlbmd0aCkge1xuICAgICAgJHRoaXMucXVlcnlTZWxlY3RvcigndHNwYW4nKS5zZXRBdHRyaWJ1dGUoJ3RleHRMZW5ndGgnLCBjb25maWcudGV4dExlbmd0aClcbiAgICAgICR0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3RzcGFuJykuc2V0QXR0cmlidXRlKCdsZW5ndGhBZGp1c3QnLCAnc3BhY2luZ0FuZEdseXBocycpXG5cbiAgICAgIC8vIGZvciBmaXJlZm94XG4gICAgICAvLyBAc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg5MDY5MlxuICAgICAgJHRoaXMuc2V0QXR0cmlidXRlKCd0ZXh0TGVuZ3RoJywgY29uZmlnLnRleHRMZW5ndGgpXG4gICAgICAkdGhpcy5zZXRBdHRyaWJ1dGUoJ2xlbmd0aEFkanVzdCcsICdzcGFjaW5nQW5kR2x5cGhzJylcbiAgICB9XG4gIH1cblxuICAvLyBhbGlnbm1lbnRcbiAgaWYgKCd0ZXh0LWFuY2hvcicgaW4gY29uZmlnICYmIGNvbmZpZ1sndGV4dC1hbmNob3InXSAmJiBjb25maWdbJ3RleHQtYW5jaG9yJ10gIT09ICdzdGFydCcpIHtcbiAgICAvLyBlZmZlY3RpdmUgb25seSB3aGVuIHRleHRMZW5ndGggaXMgc3BlY2lmaWVkIGFuZCB0ZXh0IGVsZW1lbnQgaGFzIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSh4IHkpXCJcbiAgICBjb25zdCBtYXRjaCA9ICR0aGlzLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJyk/Lm1hdGNoKC90cmFuc2xhdGVcXCgoW14gXSspIC4rXFwpLylcbiAgICBpZiAoIWNvbmZpZ1sndGV4dExlbmd0aCddIHx8ICFtYXRjaCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdyA9IHBhcnNlRmxvYXQoY29uZmlnWyd0ZXh0TGVuZ3RoJ10pXG4gICAgY29uc3QgeCA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pXG5cbiAgICBpZiAoY29uZmlnWyd0ZXh0LWFuY2hvciddID09PSAnbWlkZGxlJykge1xuICAgICAgY29uc3QgbmV3VHJhbnNmb3JtID0gJHRoaXMuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXiBdKyAoLispXFwpLywgYHRyYW5zbGF0ZSgke3ggKyAodyAvIDIpfSAkMSlgKVxuICAgICAgJHRoaXMuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBuZXdUcmFuc2Zvcm0pXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZ1sndGV4dC1hbmNob3InXSA9PT0gJ2VuZCcpIHtcbiAgICAgIGNvbnN0IG5ld1RyYW5zZm9ybSA9ICR0aGlzLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJykucmVwbGFjZSgvdHJhbnNsYXRlXFwoW14gXSsgKC4rKVxcKS8sIGB0cmFuc2xhdGUoJHt4ICsgd30gJDEpYClcbiAgICAgICR0aGlzLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgbmV3VHJhbnNmb3JtKVxuICAgIH1cblxuICAgICR0aGlzLnNldEF0dHJpYnV0ZSgndGV4dC1hbmNob3InLCBjb25maWdbJ3RleHQtYW5jaG9yJ10pXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgc3BsaXRTdHJpbmdCeVdpZHRoIGZyb20gJy4vdXRpbGl0eS9zcGxpdC1zdHJpbmctYnktd2lkdGgnXG5cbmV4cG9ydCBkZWZhdWx0ICh0ZXh0U3ZnLCB0ZXh0Q29udGVudCwgd2lkdGgsIGhlaWdodCwgbGluZUhlaWdodCA9IDEuMiwgcGFkZGluZ1ggPSAwLjUsIHBhZGRpbmdZID0gMC41LCBub3dyYXAgPSBmYWxzZSkgPT4ge1xuICBpZiAoIXRleHRTdmcubWF0Y2gobmV3IFJlZ0V4cCgnPHRleHQgW14+XSpmb250LXNpemU9XCJcXFxcZCtcIltePl0qPjx0c3BhbiggW14+XSo+fD4pW148Pl0qPC90c3Bhbj48L3RleHQ+JykpKSB7XG4gICAgY29uc29sZS5lcnJvcignSW52YWxpZCBzdmcgc3RyaW5nIG9mIHRleHQgZWxlbWVudCcsIHRleHRTdmcpXG4gICAgcmV0dXJuIHRleHRTdmdcbiAgfVxuXG4gIGNvbnN0IG9yaWdpbmFsRm9udFNpemUgPSBwYXJzZUludCh0ZXh0U3ZnLm1hdGNoKC8uK2ZvbnQtc2l6ZT1cIihcXGQrKVwiLisvKVsxXSlcbiAgbGV0IGZvbnRTaXplID0gb3JpZ2luYWxGb250U2l6ZVxuXG4gIC8vIGZpbmQgdGhlIHJpZ2h0LXNpemUgZm9udC1zaXplXG4gIGNvbnN0IHBoeXNpY2FsTGluZXMgPSB0ZXh0Q29udGVudC5zcGxpdChcIlxcblwiKVxuICBsZXQgbG9naWNhbExpbmVzID0gW11cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBsZXQgbWF4Um93cyA9IE1hdGguZmxvb3IoKGhlaWdodCAtICgyICogZm9udFNpemUgKiBwYWRkaW5nWSkpIC8gKGZvbnRTaXplICogbGluZUhlaWdodCkpXG4gICAgbGV0IG1heENvbHVtbnMgPSBNYXRoLmZsb29yKCh3aWR0aCAtICgyICogZm9udFNpemUgKiBwYWRkaW5nWCkpIC8gZm9udFNpemUpIC8vIGRvZXNuJ3QgY2FyZSBhYm91dCBwcm9wb3J0aW9uYWwgZm9udFxuXG4gICAgaWYgKG5vd3JhcCkge1xuICAgICAgbG9naWNhbExpbmVzID0gcGh5c2ljYWxMaW5lc1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dpY2FsTGluZXMgPSBbXVxuICAgICAgcGh5c2ljYWxMaW5lcy5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICBsb2dpY2FsTGluZXMgPSBsb2dpY2FsTGluZXMuY29uY2F0KHNwbGl0U3RyaW5nQnlXaWR0aChsaW5lLCBtYXhDb2x1bW5zICogMikpIC8vIDIgc2luZ2xlLWJ5dGUgY2hhcmFjdGVycyBjYW4gYmUgcGxhY2VkIGluIDEgY29sdW1uXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChsb2dpY2FsTGluZXMubGVuZ3RoID4gbWF4Um93cykge1xuICAgICAgZm9udFNpemUgKj0gMC45NVxuICAgIH0gZWxzZSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIC8vIHJhaXNlIHktY29vcmRpbmF0ZSB1cCBiZWNhdXNlIHktY29vcmRpbmF0ZSBvZiA8dGV4dCB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoeCB5KVwiPiBpcyBvbiBsb3dlciBiYXNlIG9mIHRleHQgb2JqZWN0XG4gIGNvbnN0IGFkanVzdFkgPSBmb250U2l6ZSAtIG9yaWdpbmFsRm9udFNpemVcblxuICBsZXQgYWRqdXN0ZWRUZXh0U3ZnID0gdGV4dFN2Z1xuICBhZGp1c3RlZFRleHRTdmcgPSBhZGp1c3RlZFRleHRTdmcucmVwbGFjZShuZXcgUmVnRXhwKCc8dHNwYW4oLnxcXFxccykrPC90ZXh0PicpLCAnJylcbiAgYWRqdXN0ZWRUZXh0U3ZnID0gYWRqdXN0ZWRUZXh0U3ZnLnJlcGxhY2UobmV3IFJlZ0V4cCgnZm9udC1zaXplPVwiXFxcXGQrXCInKSwgYGZvbnQtc2l6ZT1cIiR7Zm9udFNpemV9XCJgKVxuICBhZGp1c3RlZFRleHRTdmcgKz0gJ3t0c3Bhbn08L3RleHQ+J1xuXG4gIGxldCB0c3BhbiA9ICcnXG4gIGNvbnN0IHggPSBmb250U2l6ZSAqIHBhZGRpbmdYXG4gIGxvZ2ljYWxMaW5lcy5mb3JFYWNoKChsaW5lLCBpKSA9PiB7XG4gICAgY29uc3QgeSA9IGFkanVzdFkgKyBmb250U2l6ZSAqIChwYWRkaW5nWSArIChpICogbGluZUhlaWdodCkpXG4gICAgdHNwYW4gKz0gYDx0c3BhbiB4PVwiJHt4fVwiIHk9XCIke3l9XCI+JHtsaW5lfTwvdHNwYW4+YFxuICB9KVxuXG4gIGFkanVzdGVkVGV4dFN2ZyA9IGFkanVzdGVkVGV4dFN2Zy5yZXBsYWNlKCd7dHNwYW59JywgdHNwYW4pXG5cbiAgcmV0dXJuIGFkanVzdGVkVGV4dFN2Z1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBhZGp1c3RUZXh0IGZyb20gJy4vYWRqdXN0LXRleHQnXG5pbXBvcnQgYWRqdXN0VGV4dGFyZWEgZnJvbSAnLi9hZGp1c3QtdGV4dGFyZWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN2Z1BhcGVyIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSAnc3ZnJykge1xuICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgIHRoaXMuc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcikub3V0ZXJIVE1MLnJlcGxhY2UoL1tcXHJ8XFxuXSsvZywgXCJcXG5cIilcbiAgICB0aGlzLmFkanVzdFRleHRRdWVyaWVzID0gW11cbiAgfVxuXG4gIHJlcGxhY2Uoc2VhcmNoLCByZXBsYWNlbWVudCkge1xuICAgIGlmIChzZWFyY2ggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHNlYXJjaCA9IG5ldyBSZWdFeHAoc2VhcmNoLnNvdXJjZSwgc2VhcmNoLmZsYWdzLnJlcGxhY2UoL2cvZywgJycpICsgJ2cnKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgvW1xccnxcXG5dKy9nLCBcIlxcblwiKVxuXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2phL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvUmVndWxhcl9FeHByZXNzaW9ucyNlc2NhcGluZ1xuICAgICAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoL1suKis/Xj0hOiR7fSgpfFtcXF1cXC9cXFxcXS9nLCAnXFxcXCQmJylcbiAgICAgIHNlYXJjaCA9IG5ldyBSZWdFeHAoc2VhcmNoLCAnZycpXG4gICAgfVxuXG4gICAgLy8gY2FzdCB0byBzdHJpbmdcbiAgICByZXBsYWNlbWVudCA9IHJlcGxhY2VtZW50ID8gcmVwbGFjZW1lbnQgKyAnJyA6ICcnXG5cbiAgICByZXBsYWNlbWVudCA9IHJlcGxhY2VtZW50LnJlcGxhY2UoL1tcXHJ8XFxuXSsvZywgXCJcXG5cIilcblxuICAgIHRoaXMuc3ZnID0gdGhpcy5zdmcucmVwbGFjZShzZWFyY2gsIHJlcGxhY2VtZW50KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFkanVzdFRleHQoc2VsZWN0b3IsIHRleHRMZW5ndGggPSBudWxsLCB0ZXh0QW5jaG9yID0gJ3N0YXJ0Jykge1xuICAgIHRoaXMuYWRqdXN0VGV4dFF1ZXJpZXMucHVzaCh7c2VsZWN0b3IsIHRleHRMZW5ndGgsIHRleHRBbmNob3J9KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFkanVzdFRleHRhcmVhKHNlbGVjdG9yLCB3aWR0aCwgaGVpZ2h0LCBsaW5lSGVpZ2h0ID0gMS4yLCBwYWRkaW5nWCA9IDAuNSwgcGFkZGluZ1kgPSAwLjUsIG5vd3JhcCA9IGZhbHNlKSB7XG4gICAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyh0aGlzLnN2ZywgJ3RleHQvaHRtbCcpXG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2MucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICBjb25zdCB0ZXh0U3ZnID0gdGV4dEVsZW1lbnQub3V0ZXJIVE1MXG4gICAgLy8gU1ZHRWxlbWVudCBkb2Vzbid0IGhhdmUgaW5uZXJUZXh0XG4gICAgLy8gQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU1ZHRWxlbWVudFxuICAgIGNvbnN0IHRleHRDb250ZW50ID0gdGV4dEVsZW1lbnQuaW5uZXJIVE1MLnJlcGxhY2UobmV3IFJlZ0V4cCgnXjx0c3BhbltePl0qPigoLnxcXFxccykqKTwvdHNwYW4+JCcpLCAnJDEnKVxuXG4gICAgY29uc3QgYWRqdXN0ZWRUZXh0U3ZnID0gYWRqdXN0VGV4dGFyZWEodGV4dFN2ZywgdGV4dENvbnRlbnQsIHdpZHRoLCBoZWlnaHQsIGxpbmVIZWlnaHQsIHBhZGRpbmdYLCBwYWRkaW5nWSwgbm93cmFwKVxuXG4gICAgdGhpcy5yZXBsYWNlKHRleHRTdmcsIGFkanVzdGVkVGV4dFN2ZylcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBhcHBseSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpLm91dGVySFRNTCA9IHRoaXMuc3ZnXG5cbiAgICB0aGlzLmFkanVzdFRleHRRdWVyaWVzLmZvckVhY2gocXVlcnkgPT4ge1xuICAgICAgYWRqdXN0VGV4dChxdWVyeS5zZWxlY3Rvciwge1xuICAgICAgICB0ZXh0TGVuZ3RoOiBxdWVyeS50ZXh0TGVuZ3RoLFxuICAgICAgICAndGV4dC1hbmNob3InOiBxdWVyeS50ZXh0QW5jaG9yLFxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gaW5pdGlhbGl6ZVxuICAgIHRoaXMuYWRqdXN0VGV4dFF1ZXJpZXMgPSBbXVxuICB9XG59XG4iLCJpbXBvcnQgc3ViU3RyaW5nQnlXaWR0aCBmcm9tICcuL3N1Yi1zdHJpbmctYnktd2lkdGgnXG5cbmV4cG9ydCBkZWZhdWx0IChzdHJpbmcsIHdpZHRoKSA9PiB7XG4gIGxldCBzcGxpdHMgPSBbXVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgbGV0IHNwbGl0ID0gc3ViU3RyaW5nQnlXaWR0aChzdHJpbmcsIDAsIHdpZHRoKVxuICAgIHNwbGl0cy5wdXNoKHNwbGl0KVxuICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHNwbGl0LCAnJylcbiAgICBpZiAoIXN0cmluZykge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3BsaXRzXG59XG4iLCJpbXBvcnQgc3RyaW5nV2lkdGggZnJvbSAnc3RyaW5nLXdpZHRoJ1xuXG5leHBvcnQgZGVmYXVsdCAoc3RyaW5nLCBzdGFydCwgd2lkdGgpID0+IHtcbiAgbGV0IGN1cnJlbnRXaWR0aCA9IDBcbiAgbGV0IHN1YlN0cmluZyA9ICcnXG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyA7IGkrKykge1xuICAgIGNvbnN0IGNoYXIgPSBzdHJpbmcuc3Vic3RyKGksIDEpXG4gICAgY3VycmVudFdpZHRoICs9IHN0cmluZ1dpZHRoKGNoYXIpXG4gICAgaWYgKGN1cnJlbnRXaWR0aCA8PSB3aWR0aCAmJiBpIDw9IHN0cmluZy5sZW5ndGgpIHtcbiAgICAgIHN1YlN0cmluZyArPSBjaGFyXG4gICAgfVxuICAgIGlmIChjdXJyZW50V2lkdGggPj0gd2lkdGggfHwgaSA+PSBzdHJpbmcubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gc3ViU3RyaW5nXG4gICAgfVxuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGh0dHBzOi8vbXRocy5iZS9lbW9qaVxuICByZXR1cm4gL1xcdUQ4M0NcXHVERkY0XFx1REI0MFxcdURDNjdcXHVEQjQwXFx1REM2Mig/OlxcdURCNDBcXHVEQzY1XFx1REI0MFxcdURDNkVcXHVEQjQwXFx1REM2N3xcXHVEQjQwXFx1REM3M1xcdURCNDBcXHVEQzYzXFx1REI0MFxcdURDNzR8XFx1REI0MFxcdURDNzdcXHVEQjQwXFx1REM2Q1xcdURCNDBcXHVEQzczKVxcdURCNDBcXHVEQzdGfFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1xcdURGRkNcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDXFx1REZGQnxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkZcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRV0pfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGRVxcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZEXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCXFx1REZGQ10pfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHUyMDBEKD86XFx1Mjc2NFxcdUZFMEZcXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNEXFx1REM2OHwoPzpcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHUyMDBEKD86XFx1RDgzRFxcdURDNjZcXHUyMDBEXFx1RDgzRFxcdURDNjZ8XFx1RDgzRFxcdURDNjdcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pKXxcXHVEODNEXFx1REM2NlxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2N1xcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSl8KD86XFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2NlxcdURDNjddKXxbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEZ8XFx1RDgzRFtcXHVEQzY2XFx1REM2N118XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfCg/OlxcdUQ4M0NcXHVERkZCXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZGXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZFXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZEXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZDXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdKVxcdUZFMEZ8XFx1RDgzQ1xcdURGRkJcXHUyMDBEKD86XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8KD86XFx1RDgzRVxcdURERDFcXHVEODNDXFx1REZGQlxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMXxcXHVEODNEXFx1REM2OVxcdUQ4M0NcXHVERkZDXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY5KVxcdUQ4M0NcXHVERkZCfFxcdUQ4M0VcXHVEREQxKD86XFx1RDgzQ1xcdURGRkZcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDEoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfFxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMSl8KD86XFx1RDgzRVxcdURERDFcXHVEODNDXFx1REZGRVxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMXxcXHVEODNEXFx1REM2OVxcdUQ4M0NcXHVERkZGXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRV0pfCg/OlxcdUQ4M0VcXHVEREQxXFx1RDgzQ1xcdURGRkNcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDF8XFx1RDgzRFxcdURDNjlcXHVEODNDXFx1REZGRFxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OSkoPzpcXHVEODNDW1xcdURGRkJcXHVERkZDXSl8XFx1RDgzRFxcdURDNjkoPzpcXHVEODNDXFx1REZGRVxcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl0pfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGQ1xcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGQlxcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQy1cXHVERkZGXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZEXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdTIwMEQoPzpcXHUyNzY0XFx1RkUwRlxcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQoPzpcXHVEODNEW1xcdURDNjhcXHVEQzY5XSl8XFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGRlxcdTIwMEQoPzpcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSkpfFxcdUQ4M0RcXHVEQzY5XFx1MjAwRFxcdUQ4M0RcXHVEQzY5XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzY2XFx1MjAwRFxcdUQ4M0RcXHVEQzY2fFxcdUQ4M0RcXHVEQzY3XFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2NlxcdURDNjddKSl8KD86XFx1RDgzRVxcdURERDFcXHVEODNDXFx1REZGRFxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMXxcXHVEODNEXFx1REM2OVxcdUQ4M0NcXHVERkZFXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY5KSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXSl8XFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzRFxcdURDNjZcXHUyMDBEXFx1RDgzRFxcdURDNjZ8XFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzRFxcdURDNjlcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pfCg/OlxcdUQ4M0RcXHVEQzQxXFx1RkUwRlxcdTIwMERcXHVEODNEXFx1RERFOHxcXHVEODNEXFx1REM2OSg/OlxcdUQ4M0NcXHVERkZGXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZFXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZDXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZCXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZEXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XSl8KD86KD86XFx1MjZGOXxcXHVEODNDW1xcdURGQ0JcXHVERkNDXXxcXHVEODNEXFx1REQ3NSlcXHVGRTBGfFxcdUQ4M0RcXHVEQzZGfFxcdUQ4M0VbXFx1REQzQ1xcdUREREVcXHVERERGXSlcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXXwoPzpcXHUyNkY5fFxcdUQ4M0NbXFx1REZDQlxcdURGQ0NdfFxcdUQ4M0RcXHVERDc1KSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSlcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXXwoPzpcXHVEODNDW1xcdURGQzNcXHVERkM0XFx1REZDQV18XFx1RDgzRFtcXHVEQzZFXFx1REM3MVxcdURDNzNcXHVEQzc3XFx1REM4MVxcdURDODJcXHVEQzg2XFx1REM4N1xcdURFNDUtXFx1REU0N1xcdURFNEJcXHVERTREXFx1REU0RVxcdURFQTNcXHVERUI0LVxcdURFQjZdfFxcdUQ4M0VbXFx1REQyNlxcdUREMzctXFx1REQzOVxcdUREM0RcXHVERDNFXFx1RERCOFxcdUREQjlcXHVERENELVxcdUREQ0ZcXHVEREQ2LVxcdURERERdKSg/Oig/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSlcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXXxcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXSl8XFx1RDgzQ1xcdURGRjRcXHUyMDBEXFx1MjYyMClcXHVGRTBGfFxcdUQ4M0RcXHVEQzY5XFx1MjAwRFxcdUQ4M0RcXHVEQzY3XFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2NlxcdURDNjddKXxcXHVEODNDXFx1REZGM1xcdUZFMEZcXHUyMDBEXFx1RDgzQ1xcdURGMDh8XFx1RDgzRFxcdURDMTVcXHUyMDBEXFx1RDgzRVxcdUREQkF8XFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzRFxcdURDNjZ8XFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzRFxcdURDNjd8XFx1RDgzQ1xcdURERkRcXHVEODNDXFx1RERGMHxcXHVEODNDXFx1RERGNFxcdUQ4M0NcXHVEREYyfFxcdUQ4M0NcXHVEREY2XFx1RDgzQ1xcdURERTZ8WyNcXCowLTldXFx1RkUwRlxcdTIwRTN8XFx1RDgzQ1xcdURERTcoPzpcXHVEODNDW1xcdURERTZcXHVEREU3XFx1RERFOS1cXHVEREVGXFx1RERGMS1cXHVEREY0XFx1RERGNi1cXHVEREY5XFx1RERGQlxcdURERkNcXHVEREZFXFx1RERGRl0pfFxcdUQ4M0NcXHVEREY5KD86XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERTlcXHVEREVCLVxcdURERURcXHVEREVGLVxcdURERjRcXHVEREY3XFx1RERGOVxcdURERkJcXHVEREZDXFx1RERGRl0pfFxcdUQ4M0NcXHVEREVBKD86XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUFcXHVEREVDXFx1RERFRFxcdURERjctXFx1RERGQV0pfFxcdUQ4M0VcXHVEREQxKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXxcXHVEODNDXFx1RERGNyg/OlxcdUQ4M0NbXFx1RERFQVxcdURERjRcXHVEREY4XFx1RERGQVxcdURERkNdKXxcXHVEODNEXFx1REM2OSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8XFx1RDgzQ1xcdURERjIoPzpcXHVEODNDW1xcdURERTZcXHVEREU4LVxcdURERURcXHVEREYwLVxcdURERkZdKXxcXHVEODNDXFx1RERFNig/OlxcdUQ4M0NbXFx1RERFOC1cXHVEREVDXFx1RERFRVxcdURERjFcXHVEREYyXFx1RERGNFxcdURERjYtXFx1RERGQVxcdURERkNcXHVEREZEXFx1RERGRl0pfFxcdUQ4M0NcXHVEREYwKD86XFx1RDgzQ1tcXHVEREVBXFx1RERFQy1cXHVEREVFXFx1RERGMlxcdURERjNcXHVEREY1XFx1RERGN1xcdURERkNcXHVEREZFXFx1RERGRl0pfFxcdUQ4M0NcXHVEREVEKD86XFx1RDgzQ1tcXHVEREYwXFx1RERGMlxcdURERjNcXHVEREY3XFx1RERGOVxcdURERkFdKXxcXHVEODNDXFx1RERFOSg/OlxcdUQ4M0NbXFx1RERFQVxcdURERUNcXHVEREVGXFx1RERGMFxcdURERjJcXHVEREY0XFx1RERGRl0pfFxcdUQ4M0NcXHVEREZFKD86XFx1RDgzQ1tcXHVEREVBXFx1RERGOV0pfFxcdUQ4M0NcXHVEREVDKD86XFx1RDgzQ1tcXHVEREU2XFx1RERFN1xcdURERTktXFx1RERFRVxcdURERjEtXFx1RERGM1xcdURERjUtXFx1RERGQVxcdURERkNcXHVEREZFXSl8XFx1RDgzQ1xcdURERjgoPzpcXHVEODNDW1xcdURERTYtXFx1RERFQVxcdURERUMtXFx1RERGNFxcdURERjctXFx1RERGOVxcdURERkJcXHVEREZELVxcdURERkZdKXxcXHVEODNDXFx1RERFQig/OlxcdUQ4M0NbXFx1RERFRS1cXHVEREYwXFx1RERGMlxcdURERjRcXHVEREY3XSl8XFx1RDgzQ1xcdURERjUoPzpcXHVEODNDW1xcdURERTZcXHVEREVBLVxcdURERURcXHVEREYwLVxcdURERjNcXHVEREY3LVxcdURERjlcXHVEREZDXFx1RERGRV0pfFxcdUQ4M0NcXHVEREZCKD86XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUFcXHVEREVDXFx1RERFRVxcdURERjNcXHVEREZBXSl8XFx1RDgzQ1xcdURERjMoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQS1cXHVEREVDXFx1RERFRVxcdURERjFcXHVEREY0XFx1RERGNVxcdURERjdcXHVEREZBXFx1RERGRl0pfFxcdUQ4M0NcXHVEREU4KD86XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERTlcXHVEREVCLVxcdURERUVcXHVEREYwLVxcdURERjVcXHVEREY3XFx1RERGQS1cXHVEREZGXSl8XFx1RDgzQ1xcdURERjEoPzpcXHVEODNDW1xcdURERTYtXFx1RERFOFxcdURERUVcXHVEREYwXFx1RERGNy1cXHVEREZCXFx1RERGRV0pfFxcdUQ4M0NcXHVEREZGKD86XFx1RDgzQ1tcXHVEREU2XFx1RERGMlxcdURERkNdKXxcXHVEODNDXFx1RERGQyg/OlxcdUQ4M0NbXFx1RERFQlxcdURERjhdKXxcXHVEODNDXFx1RERGQSg/OlxcdUQ4M0NbXFx1RERFNlxcdURERUNcXHVEREYyXFx1RERGM1xcdURERjhcXHVEREZFXFx1RERGRl0pfFxcdUQ4M0NcXHVEREVFKD86XFx1RDgzQ1tcXHVEREU4LVxcdURERUFcXHVEREYxLVxcdURERjRcXHVEREY2LVxcdURERjldKXxcXHVEODNDXFx1RERFRig/OlxcdUQ4M0NbXFx1RERFQVxcdURERjJcXHVEREY0XFx1RERGNV0pfCg/OlxcdUQ4M0NbXFx1REZDM1xcdURGQzRcXHVERkNBXXxcXHVEODNEW1xcdURDNkVcXHVEQzcxXFx1REM3M1xcdURDNzdcXHVEQzgxXFx1REM4MlxcdURDODZcXHVEQzg3XFx1REU0NS1cXHVERTQ3XFx1REU0QlxcdURFNERcXHVERTRFXFx1REVBM1xcdURFQjQtXFx1REVCNl18XFx1RDgzRVtcXHVERDI2XFx1REQzNy1cXHVERDM5XFx1REQzRFxcdUREM0VcXHVEREI4XFx1RERCOVxcdUREQ0QtXFx1RERDRlxcdURERDYtXFx1RERERF0pKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXwoPzpcXHUyNkY5fFxcdUQ4M0NbXFx1REZDQlxcdURGQ0NdfFxcdUQ4M0RcXHVERDc1KSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8KD86W1xcdTI2MURcXHUyNzBBLVxcdTI3MERdfFxcdUQ4M0NbXFx1REY4NVxcdURGQzJcXHVERkM3XXxcXHVEODNEW1xcdURDNDJcXHVEQzQzXFx1REM0Ni1cXHVEQzUwXFx1REM2NlxcdURDNjdcXHVEQzZCLVxcdURDNkRcXHVEQzcwXFx1REM3MlxcdURDNzQtXFx1REM3NlxcdURDNzhcXHVEQzdDXFx1REM4M1xcdURDODVcXHVEQ0FBXFx1REQ3NFxcdUREN0FcXHVERDkwXFx1REQ5NVxcdUREOTZcXHVERTRDXFx1REU0RlxcdURFQzBcXHVERUNDXXxcXHVEODNFW1xcdUREMEZcXHVERDE4LVxcdUREMUNcXHVERDFFXFx1REQxRlxcdUREMzAtXFx1REQzNlxcdUREQjVcXHVEREI2XFx1RERCQlxcdURERDItXFx1RERENV0pKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXwoPzpbXFx1MjMxQVxcdTIzMUJcXHUyM0U5LVxcdTIzRUNcXHUyM0YwXFx1MjNGM1xcdTI1RkRcXHUyNUZFXFx1MjYxNFxcdTI2MTVcXHUyNjQ4LVxcdTI2NTNcXHUyNjdGXFx1MjY5M1xcdTI2QTFcXHUyNkFBXFx1MjZBQlxcdTI2QkRcXHUyNkJFXFx1MjZDNFxcdTI2QzVcXHUyNkNFXFx1MjZENFxcdTI2RUFcXHUyNkYyXFx1MjZGM1xcdTI2RjVcXHUyNkZBXFx1MjZGRFxcdTI3MDVcXHUyNzBBXFx1MjcwQlxcdTI3MjhcXHUyNzRDXFx1Mjc0RVxcdTI3NTMtXFx1Mjc1NVxcdTI3NTdcXHUyNzk1LVxcdTI3OTdcXHUyN0IwXFx1MjdCRlxcdTJCMUJcXHUyQjFDXFx1MkI1MFxcdTJCNTVdfFxcdUQ4M0NbXFx1REMwNFxcdURDQ0ZcXHVERDhFXFx1REQ5MS1cXHVERDlBXFx1RERFNi1cXHVEREZGXFx1REUwMVxcdURFMUFcXHVERTJGXFx1REUzMi1cXHVERTM2XFx1REUzOC1cXHVERTNBXFx1REU1MFxcdURFNTFcXHVERjAwLVxcdURGMjBcXHVERjJELVxcdURGMzVcXHVERjM3LVxcdURGN0NcXHVERjdFLVxcdURGOTNcXHVERkEwLVxcdURGQ0FcXHVERkNGLVxcdURGRDNcXHVERkUwLVxcdURGRjBcXHVERkY0XFx1REZGOC1cXHVERkZGXXxcXHVEODNEW1xcdURDMDAtXFx1REMzRVxcdURDNDBcXHVEQzQyLVxcdURDRkNcXHVEQ0ZGLVxcdUREM0RcXHVERDRCLVxcdURENEVcXHVERDUwLVxcdURENjdcXHVERDdBXFx1REQ5NVxcdUREOTZcXHVEREE0XFx1RERGQi1cXHVERTRGXFx1REU4MC1cXHVERUM1XFx1REVDQ1xcdURFRDAtXFx1REVEMlxcdURFRDVcXHVERUVCXFx1REVFQ1xcdURFRjQtXFx1REVGQVxcdURGRTAtXFx1REZFQl18XFx1RDgzRVtcXHVERDBELVxcdUREM0FcXHVERDNDLVxcdURENDVcXHVERDQ3LVxcdURENzFcXHVERDczLVxcdURENzZcXHVERDdBLVxcdUREQTJcXHVEREE1LVxcdUREQUFcXHVEREFFLVxcdUREQ0FcXHVERENELVxcdURERkZcXHVERTcwLVxcdURFNzNcXHVERTc4LVxcdURFN0FcXHVERTgwLVxcdURFODJcXHVERTkwLVxcdURFOTVdKXwoPzpbI1xcKjAtOVxceEE5XFx4QUVcXHUyMDNDXFx1MjA0OVxcdTIxMjJcXHUyMTM5XFx1MjE5NC1cXHUyMTk5XFx1MjFBOVxcdTIxQUFcXHUyMzFBXFx1MjMxQlxcdTIzMjhcXHUyM0NGXFx1MjNFOS1cXHUyM0YzXFx1MjNGOC1cXHUyM0ZBXFx1MjRDMlxcdTI1QUFcXHUyNUFCXFx1MjVCNlxcdTI1QzBcXHUyNUZCLVxcdTI1RkVcXHUyNjAwLVxcdTI2MDRcXHUyNjBFXFx1MjYxMVxcdTI2MTRcXHUyNjE1XFx1MjYxOFxcdTI2MURcXHUyNjIwXFx1MjYyMlxcdTI2MjNcXHUyNjI2XFx1MjYyQVxcdTI2MkVcXHUyNjJGXFx1MjYzOC1cXHUyNjNBXFx1MjY0MFxcdTI2NDJcXHUyNjQ4LVxcdTI2NTNcXHUyNjVGXFx1MjY2MFxcdTI2NjNcXHUyNjY1XFx1MjY2NlxcdTI2NjhcXHUyNjdCXFx1MjY3RVxcdTI2N0ZcXHUyNjkyLVxcdTI2OTdcXHUyNjk5XFx1MjY5QlxcdTI2OUNcXHUyNkEwXFx1MjZBMVxcdTI2QUFcXHUyNkFCXFx1MjZCMFxcdTI2QjFcXHUyNkJEXFx1MjZCRVxcdTI2QzRcXHUyNkM1XFx1MjZDOFxcdTI2Q0VcXHUyNkNGXFx1MjZEMVxcdTI2RDNcXHUyNkQ0XFx1MjZFOVxcdTI2RUFcXHUyNkYwLVxcdTI2RjVcXHUyNkY3LVxcdTI2RkFcXHUyNkZEXFx1MjcwMlxcdTI3MDVcXHUyNzA4LVxcdTI3MERcXHUyNzBGXFx1MjcxMlxcdTI3MTRcXHUyNzE2XFx1MjcxRFxcdTI3MjFcXHUyNzI4XFx1MjczM1xcdTI3MzRcXHUyNzQ0XFx1Mjc0N1xcdTI3NENcXHUyNzRFXFx1Mjc1My1cXHUyNzU1XFx1Mjc1N1xcdTI3NjNcXHUyNzY0XFx1Mjc5NS1cXHUyNzk3XFx1MjdBMVxcdTI3QjBcXHUyN0JGXFx1MjkzNFxcdTI5MzVcXHUyQjA1LVxcdTJCMDdcXHUyQjFCXFx1MkIxQ1xcdTJCNTBcXHUyQjU1XFx1MzAzMFxcdTMwM0RcXHUzMjk3XFx1MzI5OV18XFx1RDgzQ1tcXHVEQzA0XFx1RENDRlxcdURENzBcXHVERDcxXFx1REQ3RVxcdUREN0ZcXHVERDhFXFx1REQ5MS1cXHVERDlBXFx1RERFNi1cXHVEREZGXFx1REUwMVxcdURFMDJcXHVERTFBXFx1REUyRlxcdURFMzItXFx1REUzQVxcdURFNTBcXHVERTUxXFx1REYwMC1cXHVERjIxXFx1REYyNC1cXHVERjkzXFx1REY5NlxcdURGOTdcXHVERjk5LVxcdURGOUJcXHVERjlFLVxcdURGRjBcXHVERkYzLVxcdURGRjVcXHVERkY3LVxcdURGRkZdfFxcdUQ4M0RbXFx1REMwMC1cXHVEQ0ZEXFx1RENGRi1cXHVERDNEXFx1REQ0OS1cXHVERDRFXFx1REQ1MC1cXHVERDY3XFx1REQ2RlxcdURENzBcXHVERDczLVxcdUREN0FcXHVERDg3XFx1REQ4QS1cXHVERDhEXFx1REQ5MFxcdUREOTVcXHVERDk2XFx1RERBNFxcdUREQTVcXHVEREE4XFx1RERCMVxcdUREQjJcXHVEREJDXFx1RERDMi1cXHVEREM0XFx1REREMS1cXHVEREQzXFx1REREQy1cXHVERERFXFx1RERFMVxcdURERTNcXHVEREU4XFx1RERFRlxcdURERjNcXHVEREZBLVxcdURFNEZcXHVERTgwLVxcdURFQzVcXHVERUNCLVxcdURFRDJcXHVERUQ1XFx1REVFMC1cXHVERUU1XFx1REVFOVxcdURFRUJcXHVERUVDXFx1REVGMFxcdURFRjMtXFx1REVGQVxcdURGRTAtXFx1REZFQl18XFx1RDgzRVtcXHVERDBELVxcdUREM0FcXHVERDNDLVxcdURENDVcXHVERDQ3LVxcdURENzFcXHVERDczLVxcdURENzZcXHVERDdBLVxcdUREQTJcXHVEREE1LVxcdUREQUFcXHVEREFFLVxcdUREQ0FcXHVERENELVxcdURERkZcXHVERTcwLVxcdURFNzNcXHVERTc4LVxcdURFN0FcXHVERTgwLVxcdURFODJcXHVERTkwLVxcdURFOTVdKVxcdUZFMEZ8KD86W1xcdTI2MURcXHUyNkY5XFx1MjcwQS1cXHUyNzBEXXxcXHVEODNDW1xcdURGODVcXHVERkMyLVxcdURGQzRcXHVERkM3XFx1REZDQS1cXHVERkNDXXxcXHVEODNEW1xcdURDNDJcXHVEQzQzXFx1REM0Ni1cXHVEQzUwXFx1REM2Ni1cXHVEQzc4XFx1REM3Q1xcdURDODEtXFx1REM4M1xcdURDODUtXFx1REM4N1xcdURDOEZcXHVEQzkxXFx1RENBQVxcdURENzRcXHVERDc1XFx1REQ3QVxcdUREOTBcXHVERDk1XFx1REQ5NlxcdURFNDUtXFx1REU0N1xcdURFNEItXFx1REU0RlxcdURFQTNcXHVERUI0LVxcdURFQjZcXHVERUMwXFx1REVDQ118XFx1RDgzRVtcXHVERDBGXFx1REQxOC1cXHVERDFGXFx1REQyNlxcdUREMzAtXFx1REQzOVxcdUREM0MtXFx1REQzRVxcdUREQjVcXHVEREI2XFx1RERCOFxcdUREQjlcXHVEREJCXFx1RERDRC1cXHVERENGXFx1REREMS1cXHVEREREXSkvZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBzdHJpcEFuc2kgPSByZXF1aXJlKCdzdHJpcC1hbnNpJyk7XG5jb25zdCBpc0Z1bGx3aWR0aENvZGVQb2ludCA9IHJlcXVpcmUoJ2lzLWZ1bGx3aWR0aC1jb2RlLXBvaW50Jyk7XG5jb25zdCBlbW9qaVJlZ2V4ID0gcmVxdWlyZSgnZW1vamktcmVnZXgnKTtcblxuY29uc3Qgc3RyaW5nV2lkdGggPSBzdHJpbmcgPT4ge1xuXHRpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycgfHwgc3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0c3RyaW5nID0gc3RyaXBBbnNpKHN0cmluZyk7XG5cblx0aWYgKHN0cmluZy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGVtb2ppUmVnZXgoKSwgJyAgJyk7XG5cblx0bGV0IHdpZHRoID0gMDtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGNvZGUgPSBzdHJpbmcuY29kZVBvaW50QXQoaSk7XG5cblx0XHQvLyBJZ25vcmUgY29udHJvbCBjaGFyYWN0ZXJzXG5cdFx0aWYgKGNvZGUgPD0gMHgxRiB8fCAoY29kZSA+PSAweDdGICYmIGNvZGUgPD0gMHg5RikpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIElnbm9yZSBjb21iaW5pbmcgY2hhcmFjdGVyc1xuXHRcdGlmIChjb2RlID49IDB4MzAwICYmIGNvZGUgPD0gMHgzNkYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIFN1cnJvZ2F0ZXNcblx0XHRpZiAoY29kZSA+IDB4RkZGRikge1xuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdHdpZHRoICs9IGlzRnVsbHdpZHRoQ29kZVBvaW50KGNvZGUpID8gMiA6IDE7XG5cdH1cblxuXHRyZXR1cm4gd2lkdGg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1dpZHRoO1xuLy8gVE9ETzogcmVtb3ZlIHRoaXMgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvblxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IHN0cmluZ1dpZHRoO1xuIiwiLyogZXNsaW50LWRpc2FibGUgeW9kYSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBpc0Z1bGx3aWR0aENvZGVQb2ludCA9IGNvZGVQb2ludCA9PiB7XG5cdGlmIChOdW1iZXIuaXNOYU4oY29kZVBvaW50KSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIENvZGUgcG9pbnRzIGFyZSBkZXJpdmVkIGZyb206XG5cdC8vIGh0dHA6Ly93d3cudW5peC5vcmcvUHVibGljL1VOSURBVEEvRWFzdEFzaWFuV2lkdGgudHh0XG5cdGlmIChcblx0XHRjb2RlUG9pbnQgPj0gMHgxMTAwICYmIChcblx0XHRcdGNvZGVQb2ludCA8PSAweDExNUYgfHwgLy8gSGFuZ3VsIEphbW9cblx0XHRcdGNvZGVQb2ludCA9PT0gMHgyMzI5IHx8IC8vIExFRlQtUE9JTlRJTkcgQU5HTEUgQlJBQ0tFVFxuXHRcdFx0Y29kZVBvaW50ID09PSAweDIzMkEgfHwgLy8gUklHSFQtUE9JTlRJTkcgQU5HTEUgQlJBQ0tFVFxuXHRcdFx0Ly8gQ0pLIFJhZGljYWxzIFN1cHBsZW1lbnQgLi4gRW5jbG9zZWQgQ0pLIExldHRlcnMgYW5kIE1vbnRoc1xuXHRcdFx0KDB4MkU4MCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4MzI0NyAmJiBjb2RlUG9pbnQgIT09IDB4MzAzRikgfHxcblx0XHRcdC8vIEVuY2xvc2VkIENKSyBMZXR0ZXJzIGFuZCBNb250aHMgLi4gQ0pLIFVuaWZpZWQgSWRlb2dyYXBocyBFeHRlbnNpb24gQVxuXHRcdFx0KDB4MzI1MCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4NERCRikgfHxcblx0XHRcdC8vIENKSyBVbmlmaWVkIElkZW9ncmFwaHMgLi4gWWkgUmFkaWNhbHNcblx0XHRcdCgweDRFMDAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEE0QzYpIHx8XG5cdFx0XHQvLyBIYW5ndWwgSmFtbyBFeHRlbmRlZC1BXG5cdFx0XHQoMHhBOTYwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhBOTdDKSB8fFxuXHRcdFx0Ly8gSGFuZ3VsIFN5bGxhYmxlc1xuXHRcdFx0KDB4QUMwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4RDdBMykgfHxcblx0XHRcdC8vIENKSyBDb21wYXRpYmlsaXR5IElkZW9ncmFwaHNcblx0XHRcdCgweEY5MDAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEZBRkYpIHx8XG5cdFx0XHQvLyBWZXJ0aWNhbCBGb3Jtc1xuXHRcdFx0KDB4RkUxMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4RkUxOSkgfHxcblx0XHRcdC8vIENKSyBDb21wYXRpYmlsaXR5IEZvcm1zIC4uIFNtYWxsIEZvcm0gVmFyaWFudHNcblx0XHRcdCgweEZFMzAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEZFNkIpIHx8XG5cdFx0XHQvLyBIYWxmd2lkdGggYW5kIEZ1bGx3aWR0aCBGb3Jtc1xuXHRcdFx0KDB4RkYwMSA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4RkY2MCkgfHxcblx0XHRcdCgweEZGRTAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEZGRTYpIHx8XG5cdFx0XHQvLyBLYW5hIFN1cHBsZW1lbnRcblx0XHRcdCgweDFCMDAwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHgxQjAwMSkgfHxcblx0XHRcdC8vIEVuY2xvc2VkIElkZW9ncmFwaGljIFN1cHBsZW1lbnRcblx0XHRcdCgweDFGMjAwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHgxRjI1MSkgfHxcblx0XHRcdC8vIENKSyBVbmlmaWVkIElkZW9ncmFwaHMgRXh0ZW5zaW9uIEIgLi4gVGVydGlhcnkgSWRlb2dyYXBoaWMgUGxhbmVcblx0XHRcdCgweDIwMDAwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHgzRkZGRClcblx0XHQpXG5cdCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bGx3aWR0aENvZGVQb2ludDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBpc0Z1bGx3aWR0aENvZGVQb2ludDtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IGFuc2lSZWdleCA9IHJlcXVpcmUoJ2Fuc2ktcmVnZXgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmcgPT4gdHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycgPyBzdHJpbmcucmVwbGFjZShhbnNpUmVnZXgoKSwgJycpIDogc3RyaW5nO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICh7b25seUZpcnN0ID0gZmFsc2V9ID0ge30pID0+IHtcblx0Y29uc3QgcGF0dGVybiA9IFtcblx0XHQnW1xcXFx1MDAxQlxcXFx1MDA5Ql1bW1xcXFxdKCkjOz9dKig/Oig/Oig/OlthLXpBLVpcXFxcZF0qKD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKikqKT9cXFxcdTAwMDcpJyxcblx0XHQnKD86KD86XFxcXGR7MSw0fSg/OjtcXFxcZHswLDR9KSopP1tcXFxcZEEtUFItVFpjZi1udHFyeT0+PH5dKSknXG5cdF0uam9pbignfCcpO1xuXG5cdHJldHVybiBuZXcgUmVnRXhwKHBhdHRlcm4sIG9ubHlGaXJzdCA/IHVuZGVmaW5lZCA6ICdnJyk7XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==