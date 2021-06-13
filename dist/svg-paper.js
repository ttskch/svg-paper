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


  if (!!config['textLength']) {
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


  if (!!config['text-anchor'] && config['text-anchor'] !== 'start') {
    var w = parseFloat(config['textLength']);
    var x = 0;
    var y = 0;

    if ($this.getAttribute('transform')) {
      x = parseFloat($this.getAttribute('transform').match(/translate\((\S+) .+\)/)[1]);
      y = parseFloat($this.getAttribute('transform').match(/translate\(\S+ (.+)\)/)[1]);
    }

    if (config['text-anchor'] === 'middle') {
      $this.setAttribute('transform', "translate(".concat(x + w / 2, " ").concat(y, ")"));
    }

    if (config['text-anchor'] === 'end') {
      $this.setAttribute('transform', "translate(".concat(x + w, " ").concat(y, ")"));
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
/* harmony import */ var _utility_fix_text_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility/fix-text-transform */ "./js/src/utility/fix-text-transform.js");




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
  } // raise y-coordinate up because y-coordinate of <text transform="translate(x y)"> or <tspan y=""> is on lower base of text object


  var adjustY = fontSize - originalFontSize;
  var adjustedTextSvg = Object(_utility_fix_text_transform__WEBPACK_IMPORTED_MODULE_1__["default"])(textSvg);
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

    if (!document.querySelector(selector)) {
      throw new Error('Invalid selector');
    }

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


      replacement = replacement !== undefined && replacement !== null ? replacement + '' : '';
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

      if (!textElement) {
        return this;
      }

      var textSvg = textElement.outerHTML; // SVGElement doesn't have innerText
      // @see https://developer.mozilla.org/en-US/docs/Web/API/SVGElement

      var textContent = textElement.innerHTML.replace(new RegExp('^<tspan[^>]*>([\\S|\\s]*)</tspan>$'), '$1');

      var adjustedTextSvg = Object(_adjust_textarea__WEBPACK_IMPORTED_MODULE_1__["default"])(textSvg, textContent, width, height, lineHeight, paddingX, paddingY, nowrap);

      this.replace(textSvg, adjustedTextSvg);
      return this;
    }
  }, {
    key: "apply",
    value: function apply() {
      if (this.svg !== document.querySelector(this.selector).outerHTML) {
        document.querySelector(this.selector).outerHTML = this.svg;
      }

      this.adjustTextQueries.forEach(function (query) {
        Object(_adjust_text__WEBPACK_IMPORTED_MODULE_0__["default"])(query.selector, {
          textLength: query.textLength,
          'text-anchor': query.textAnchor
        });
      }); // initialize

      this.svg = document.querySelector(this.selector).outerHTML;
      this.adjustTextQueries = [];
    }
  }]);

  return SvgPaper;
}();



/***/ }),

/***/ "./js/src/utility/fix-text-transform.js":
/*!**********************************************!*\
  !*** ./js/src/utility/fix-text-transform.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (textSvg) {
  var fixedTextSvg = textSvg; // if <text> doesn't have transform="translate(x y)", just add it with (0 0)

  if (!fixedTextSvg.match(/<text [^>]*transform="[^"]*"[^>]*>/)) {
    fixedTextSvg = fixedTextSvg.replace(new RegExp('<text([^>]*)>'), '<text$1 transform="translate(0 0)">');
  } // if <tspan> doesn't have x="" y="", just add it with x="0" y="0"


  if (!fixedTextSvg.match(/<tspan [^>]*x="[^"]*"[^>]*>/)) {
    fixedTextSvg = fixedTextSvg.replace(new RegExp('<tspan([^>]*)>'), '<tspan$1 x="0">');
  }

  if (!fixedTextSvg.match(/<tspan [^>]*y="[^"]*"[^>]*>/)) {
    fixedTextSvg = fixedTextSvg.replace(new RegExp('<tspan([^>]*)>'), '<tspan$1 y="0">');
  } // copy x from <tspan x=""> and add it to <text transform="translate(x y)">


  fixedTextSvg = fixedTextSvg.replace(new RegExp('<text([\\s\\S]+)transform="translate\\((\\S+)\\s+(.+)\\)"([^>]*)>\s*<tspan([^>]+)x="([^"]+)"'), '<text$1transform="translate(###$2+$6### $3)"$4><tspan$5x="0"');
  var expression1 = fixedTextSvg.match(new RegExp('<text[\\s\\S]+transform="translate\\(###(.+)###.+\\)"'))[1];
  var x = expression1.match(/\d+\+\d+/) ? eval(expression1) : 0;
  fixedTextSvg = fixedTextSvg.replace(new RegExp('<text([\\s\\S]+)transform="translate\\(###.+###(.+)\\)"'), "<text$1transform=\"translate(".concat(x, "$2)\"")); // copy y from <tspan y=""> and add it to <text transform="translate(x y)">

  fixedTextSvg = fixedTextSvg.replace(new RegExp('<text([\\s\\S]+)transform="translate\\((.+)\\s+(\\S+)\\)"([^>]*)>\s*<tspan([^>]+)y="([^"]+)"'), '<text$1transform="translate($2 ###$3+$6###)"$4><tspan$5y="0"');
  var expression2 = fixedTextSvg.match(new RegExp('<text[\\s\\S]+transform="translate\\(.+###(.+)###\\)"'))[1];
  var y = expression2.match(/\d+\+\d+/) ? eval(expression2) : 0;
  fixedTextSvg = fixedTextSvg.replace(new RegExp('<text([\\s\\S]+)transform="translate\\((.+)###.+###\\)"'), "<text$1transform=\"translate($2".concat(y, ")\""));
  return fixedTextSvg;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdmdQYXBlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9qcy9zcmMvYWRqdXN0LXRleHQuanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9qcy9zcmMvYWRqdXN0LXRleHRhcmVhLmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vanMvc3JjL3N2Zy1wYXBlci5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L2ZpeC10ZXh0LXRyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L3NwbGl0LXN0cmluZy1ieS13aWR0aC5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L3N1Yi1zdHJpbmctYnktd2lkdGguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvZW1vamktcmVnZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvc3RyaW5nLXdpZHRoL2luZGV4LmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vbm9kZV9tb2R1bGVzL3N0cmluZy13aWR0aC9ub2RlX21vZHVsZXMvaXMtZnVsbHdpZHRoLWNvZGUtcG9pbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvc3RyaXAtYW5zaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL25vZGVfbW9kdWxlcy9zdHJpcC1hbnNpL25vZGVfbW9kdWxlcy9hbnNpLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vc2Nzcy9zdmctcGFwZXIuc2Nzcz9mOWQyIl0sIm5hbWVzIjpbInNlbGVjdG9yIiwiY29uZmlnIiwiJHRoaXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGllbnRXaWR0aCIsInRleHRMZW5ndGgiLCJzZXRBdHRyaWJ1dGUiLCJ3IiwicGFyc2VGbG9hdCIsIngiLCJ5IiwiZ2V0QXR0cmlidXRlIiwibWF0Y2giLCJ0ZXh0U3ZnIiwidGV4dENvbnRlbnQiLCJ3aWR0aCIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJwYWRkaW5nWCIsInBhZGRpbmdZIiwibm93cmFwIiwiUmVnRXhwIiwiY29uc29sZSIsImVycm9yIiwib3JpZ2luYWxGb250U2l6ZSIsInBhcnNlSW50IiwiZm9udFNpemUiLCJwaHlzaWNhbExpbmVzIiwic3BsaXQiLCJsb2dpY2FsTGluZXMiLCJtYXhSb3dzIiwiTWF0aCIsImZsb29yIiwibWF4Q29sdW1ucyIsImZvckVhY2giLCJsaW5lIiwiY29uY2F0Iiwic3BsaXRTdHJpbmdCeVdpZHRoIiwibGVuZ3RoIiwiYWRqdXN0WSIsImFkanVzdGVkVGV4dFN2ZyIsImZpeFRleHRUcmFuc2Zvcm0iLCJyZXBsYWNlIiwidHNwYW4iLCJpIiwiU3ZnUGFwZXIiLCJFcnJvciIsInN2ZyIsIm91dGVySFRNTCIsImFkanVzdFRleHRRdWVyaWVzIiwic2VhcmNoIiwicmVwbGFjZW1lbnQiLCJzb3VyY2UiLCJmbGFncyIsInVuZGVmaW5lZCIsInRleHRBbmNob3IiLCJwdXNoIiwiZG9jIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwidGV4dEVsZW1lbnQiLCJpbm5lckhUTUwiLCJhZGp1c3RUZXh0YXJlYSIsInF1ZXJ5IiwiYWRqdXN0VGV4dCIsImZpeGVkVGV4dFN2ZyIsImV4cHJlc3Npb24xIiwiZXZhbCIsImV4cHJlc3Npb24yIiwic3RyaW5nIiwic3BsaXRzIiwic3ViU3RyaW5nQnlXaWR0aCIsInN0YXJ0IiwiY3VycmVudFdpZHRoIiwic3ViU3RyaW5nIiwiY2hhciIsInN1YnN0ciIsInN0cmluZ1dpZHRoIiwibW9kdWxlIiwiZXhwb3J0cyIsInN0cmlwQW5zaSIsInJlcXVpcmUiLCJpc0Z1bGx3aWR0aENvZGVQb2ludCIsImVtb2ppUmVnZXgiLCJjb2RlIiwiY29kZVBvaW50QXQiLCJjb2RlUG9pbnQiLCJOdW1iZXIiLCJpc05hTiIsImFuc2lSZWdleCIsIm9ubHlGaXJzdCIsInBhdHRlcm4iLCJqb2luIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBOztBQUVlLHlFQUFDQSxRQUFELEVBQVdDLE1BQVgsRUFBc0I7QUFDbkMsTUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJKLFFBQXZCLENBQWQ7O0FBRUEsTUFBSSxDQUFDRSxLQUFMLEVBQVk7QUFDVjtBQUNELEdBTGtDLENBT25DOzs7QUFDQSxNQUFJLENBQUMsQ0FBQ0QsTUFBTSxDQUFDLFlBQUQsQ0FBWixFQUE0QjtBQUMxQjtBQUNBO0FBQ0FDLFNBQUssQ0FB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QUNBOztBQUVELFNBQU8sS0FBUDtBQUNBLENBM0NEOztBQTZDQVIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCRyxvQkFBakI7QUFDQUosTUFBTSxDQUFDQyxPQUFQLGNBQXlCRyxvQkFBekIsQzs7Ozs7Ozs7Ozs7O0FDakRhOztBQUNiLElBQU1PLFNBQVMsR0FBR1IsbUJBQU8sQ0FBQyw4RUFBRCxDQUF6Qjs7QUFFQUgsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQUFWLE1BQU07QUFBQSxTQUFJLE9BQU9BLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkJBLE1BQU0sQ0FBQzNCLE9BQVAsQ0FBZStDLFNBQVMsRUFBeEIsRUFBNEIsRUFBNUIsQ0FBN0IsR0FBK0RwQixNQUFuRTtBQUFBLENBQXZCLEM7Ozs7Ozs7Ozs7OztBQ0hhOztBQUViUyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsWUFBOEI7QUFBQSxpRkFBUCxFQUFPO0FBQUEsNEJBQTVCVyxTQUE0QjtBQUFBLE1BQTVCQSxTQUE0QiwrQkFBaEIsS0FBZ0I7O0FBQzlDLE1BQU1DLE9BQU8sR0FBRyxDQUNmLDZGQURlLEVBRWYsMERBRmUsRUFHZEMsSUFIYyxDQUdULEdBSFMsQ0FBaEI7QUFLQSxTQUFPLElBQUl2RSxNQUFKLENBQVdzRSxPQUFYLEVBQW9CRCxTQUFTLEdBQUdwQyxTQUFILEdBQWUsR0FBNUMsQ0FBUDtBQUNBLENBUEQsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQSIsImZpbGUiOiJzdmctcGFwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdmdQYXBlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTdmdQYXBlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydCBkZWZhdWx0IChzZWxlY3RvciwgY29uZmlnKSA9PiB7XG4gIGNvbnN0ICR0aGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcblxuICBpZiAoISR0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBzaHJpbmsgdGV4dCBlbGVtZW50IHRvIHNwZWNpZmllZCB3aWR0aFxuICBpZiAoISFjb25maWdbJ3RleHRMZW5ndGgnXSkge1xuICAgIC8vIGZvciBmaXJlZm94XG4gICAgLy8gQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9qYS9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbGllbnRXaWR0aFxuICAgICR0aGlzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cbiAgICBpZiAoJHRoaXMuY2xpZW50V2lkdGggPiBjb25maWcudGV4dExlbmd0aCkge1xuICAgICAgJHRoaXMucXVlcnlTZWxlY3RvcigndHNwYW4nKS5zZXRBdHRyaWJ1dGUoJ3RleHRMZW5ndGgnLCBjb25maWcudGV4dExlbmd0aClcbiAgICAgICR0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3RzcGFuJykuc2V0QXR0cmlidXRlKCdsZW5ndGhBZGp1c3QnLCAnc3BhY2luZ0FuZEdseXBocycpXG5cbiAgICAgIC8vIGZvciBmaXJlZm94XG4gICAgICAvLyBAc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg5MDY5MlxuICAgICAgJHRoaXMuc2V0QXR0cmlidXRlKCd0ZXh0TGVuZ3RoJywgY29uZmlnLnRleHRMZW5ndGgpXG4gICAgICAkdGhpcy5zZXRBdHRyaWJ1dGUoJ2xlbmd0aEFkanVzdCcsICdzcGFjaW5nQW5kR2x5cGhzJylcbiAgICB9XG4gIH1cblxuICAvLyBhbGlnbm1lbnRcbiAgaWYgKCEhY29uZmlnWyd0ZXh0LWFuY2hvciddICYmIGNvbmZpZ1sndGV4dC1hbmNob3InXSAhPT0gJ3N0YXJ0Jykge1xuICAgIGNvbnN0IHcgPSBwYXJzZUZsb2F0KGNvbmZpZ1sndGV4dExlbmd0aCddKVxuICAgIGxldCB4ID0gMFxuICAgIGxldCB5ID0gMFxuICAgIGlmICgkdGhpcy5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpKSB7XG4gICAgICB4ID0gcGFyc2VGbG9hdCgkdGhpcy5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpLm1hdGNoKC90cmFuc2xhdGVcXCgoXFxTKykgLitcXCkvKVsxXSlcbiAgICAgIHkgPSBwYXJzZUZsb2F0KCR0aGlzLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJykubWF0Y2goL3RyYW5zbGF0ZVxcKFxcUysgKC4rKVxcKS8pWzFdKVxuICAgIH1cblxuICAgIGlmIChjb25maWdbJ3RleHQtYW5jaG9yJ10gPT09ICdtaWRkbGUnKSB7XG4gICAgICAkdGhpcy5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt4ICsgKHcgLyAyKX0gJHt5fSlgKVxuICAgIH1cblxuICAgIGlmIChjb25maWdbJ3RleHQtYW5jaG9yJ10gPT09ICdlbmQnKSB7XG4gICAgICAkdGhpcy5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt4ICsgd30gJHt5fSlgKVxuICAgIH1cblxuICAgICR0aGlzLnNldEF0dHJpYnV0ZSgndGV4dC1hbmNob3InLCBjb25maWdbJ3RleHQtYW5jaG9yJ10pXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgc3BsaXRTdHJpbmdCeVdpZHRoIGZyb20gJy4vdXRpbGl0eS9zcGxpdC1zdHJpbmctYnktd2lkdGgnXG5pbXBvcnQgZml4VGV4dFRyYW5zZm9ybSBmcm9tICcuL3V0aWxpdHkvZml4LXRleHQtdHJhbnNmb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCAodGV4dFN2ZywgdGV4dENvbnRlbnQsIHdpZHRoLCBoZWlnaHQsIGxpbmVIZWlnaHQgPSAxLjIsIHBhZGRpbmdYID0gMC41LCBwYWRkaW5nWSA9IDAuNSwgbm93cmFwID0gZmFsc2UpID0+IHtcbiAgaWYgKCF0ZXh0U3ZnLm1hdGNoKG5ldyBSZWdFeHAoJzx0ZXh0IFtePl0qZm9udC1zaXplPVwiXFxcXGQrXCJbXj5dKj48dHNwYW4oIFtePl0qPnw+KVtePD5dKjwvdHNwYW4+PC90ZXh0PicpKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgc3ZnIHN0cmluZyBvZiB0ZXh0IGVsZW1lbnQnLCB0ZXh0U3ZnKVxuICAgIHJldHVybiB0ZXh0U3ZnXG4gIH1cblxuICBjb25zdCBvcmlnaW5hbEZvbnRTaXplID0gcGFyc2VJbnQodGV4dFN2Zy5tYXRjaCgvLitmb250LXNpemU9XCIoXFxkKylcIi4rLylbMV0pXG4gIGxldCBmb250U2l6ZSA9IG9yaWdpbmFsRm9udFNpemVcblxuICAvLyBmaW5kIHRoZSByaWdodC1zaXplIGZvbnQtc2l6ZVxuICBjb25zdCBwaHlzaWNhbExpbmVzID0gdGV4dENvbnRlbnQuc3BsaXQoXCJcXG5cIilcbiAgbGV0IGxvZ2ljYWxMaW5lcyA9IFtdXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgbGV0IG1heFJvd3MgPSBNYXRoLmZsb29yKChoZWlnaHQgLSAoMiAqIGZvbnRTaXplICogcGFkZGluZ1kpKSAvIChmb250U2l6ZSAqIGxpbmVIZWlnaHQpKVxuICAgIGxldCBtYXhDb2x1bW5zID0gTWF0aC5mbG9vcigod2lkdGggLSAoMiAqIGZvbnRTaXplICogcGFkZGluZ1gpKSAvIGZvbnRTaXplKSAvLyBkb2Vzbid0IGNhcmUgYWJvdXQgcHJvcG9ydGlvbmFsIGZvbnRcblxuICAgIGlmIChub3dyYXApIHtcbiAgICAgIGxvZ2ljYWxMaW5lcyA9IHBoeXNpY2FsTGluZXNcbiAgICB9IGVsc2Uge1xuICAgICAgbG9naWNhbExpbmVzID0gW11cbiAgICAgIHBoeXNpY2FsTGluZXMuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgICAgbG9naWNhbExpbmVzID0gbG9naWNhbExpbmVzLmNvbmNhdChzcGxpdFN0cmluZ0J5V2lkdGgobGluZSwgbWF4Q29sdW1ucyAqIDIpKSAvLyAyIHNpbmdsZS1ieXRlIGNoYXJhY3RlcnMgY2FuIGJlIHBsYWNlZCBpbiAxIGNvbHVtblxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAobG9naWNhbExpbmVzLmxlbmd0aCA+IG1heFJvd3MpIHtcbiAgICAgIGZvbnRTaXplICo9IDAuOTVcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICAvLyByYWlzZSB5LWNvb3JkaW5hdGUgdXAgYmVjYXVzZSB5LWNvb3JkaW5hdGUgb2YgPHRleHQgdHJhbnNmb3JtPVwidHJhbnNsYXRlKHggeSlcIj4gb3IgPHRzcGFuIHk9XCJcIj4gaXMgb24gbG93ZXIgYmFzZSBvZiB0ZXh0IG9iamVjdFxuICBjb25zdCBhZGp1c3RZID0gZm9udFNpemUgLSBvcmlnaW5hbEZvbnRTaXplXG5cbiAgbGV0IGFkanVzdGVkVGV4dFN2ZyA9IGZpeFRleHRUcmFuc2Zvcm0odGV4dFN2ZylcbiAgYWRqdXN0ZWRUZXh0U3ZnID0gYWRqdXN0ZWRUZXh0U3ZnLnJlcGxhY2UobmV3IFJlZ0V4cCgnPHRzcGFuKC58XFxcXHMpKzwvdGV4dD4nKSwgJycpXG4gIGFkanVzdGVkVGV4dFN2ZyA9IGFkanVzdGVkVGV4dFN2Zy5yZXBsYWNlKG5ldyBSZWdFeHAoJ2ZvbnQtc2l6ZT1cIlxcXFxkK1wiJyksIGBmb250LXNpemU9XCIke2ZvbnRTaXplfVwiYClcbiAgYWRqdXN0ZWRUZXh0U3ZnICs9ICd7dHNwYW59PC90ZXh0PidcblxuICBsZXQgdHNwYW4gPSAnJ1xuICBjb25zdCB4ID0gZm9udFNpemUgKiBwYWRkaW5nWFxuICBsb2dpY2FsTGluZXMuZm9yRWFjaCgobGluZSwgaSkgPT4ge1xuICAgIGNvbnN0IHkgPSBhZGp1c3RZICsgZm9udFNpemUgKiAocGFkZGluZ1kgKyAoaSAqIGxpbmVIZWlnaHQpKVxuICAgIHRzcGFuICs9IGA8dHNwYW4geD1cIiR7eH1cIiB5PVwiJHt5fVwiPiR7bGluZX08L3RzcGFuPmBcbiAgfSlcblxuICBhZGp1c3RlZFRleHRTdmcgPSBhZGp1c3RlZFRleHRTdmcucmVwbGFjZSgne3RzcGFufScsIHRzcGFuKVxuXG4gIHJldHVybiBhZGp1c3RlZFRleHRTdmdcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgYWRqdXN0VGV4dCBmcm9tICcuL2FkanVzdC10ZXh0J1xuaW1wb3J0IGFkanVzdFRleHRhcmVhIGZyb20gJy4vYWRqdXN0LXRleHRhcmVhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdmdQYXBlciB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ3N2ZycpIHtcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2VsZWN0b3InKVxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgIHRoaXMuc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcikub3V0ZXJIVE1MLnJlcGxhY2UoL1tcXHJ8XFxuXSsvZywgXCJcXG5cIilcbiAgICB0aGlzLmFkanVzdFRleHRRdWVyaWVzID0gW11cbiAgfVxuXG4gIHJlcGxhY2Uoc2VhcmNoLCByZXBsYWNlbWVudCkge1xuICAgIGlmIChzZWFyY2ggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHNlYXJjaCA9IG5ldyBSZWdFeHAoc2VhcmNoLnNvdXJjZSwgc2VhcmNoLmZsYWdzLnJlcGxhY2UoL2cvZywgJycpICsgJ2cnKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgvW1xccnxcXG5dKy9nLCBcIlxcblwiKVxuXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2phL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvUmVndWxhcl9FeHByZXNzaW9ucyNlc2NhcGluZ1xuICAgICAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoL1suKis/Xj0hOiR7fSgpfFtcXF1cXC9cXFxcXS9nLCAnXFxcXCQmJylcbiAgICAgIHNlYXJjaCA9IG5ldyBSZWdFeHAoc2VhcmNoLCAnZycpXG4gICAgfVxuXG4gICAgLy8gY2FzdCB0byBzdHJpbmdcbiAgICByZXBsYWNlbWVudCA9IHJlcGxhY2VtZW50ICE9PSB1bmRlZmluZWQgJiYgcmVwbGFjZW1lbnQgIT09IG51bGwgPyByZXBsYWNlbWVudCArICcnIDogJydcblxuICAgIHJlcGxhY2VtZW50ID0gcmVwbGFjZW1lbnQucmVwbGFjZSgvW1xccnxcXG5dKy9nLCBcIlxcblwiKVxuXG4gICAgdGhpcy5zdmcgPSB0aGlzLnN2Zy5yZXBsYWNlKHNlYXJjaCwgcmVwbGFjZW1lbnQpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgYWRqdXN0VGV4dChzZWxlY3RvciwgdGV4dExlbmd0aCA9IG51bGwsIHRleHRBbmNob3IgPSAnc3RhcnQnKSB7XG4gICAgdGhpcy5hZGp1c3RUZXh0UXVlcmllcy5wdXNoKHtzZWxlY3RvciwgdGV4dExlbmd0aCwgdGV4dEFuY2hvcn0pXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgYWRqdXN0VGV4dGFyZWEoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIGxpbmVIZWlnaHQgPSAxLjIsIHBhZGRpbmdYID0gMC41LCBwYWRkaW5nWSA9IDAuNSwgbm93cmFwID0gZmFsc2UpIHtcbiAgICBjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHRoaXMuc3ZnLCAndGV4dC9odG1sJylcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvYy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIGlmICghdGV4dEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgY29uc3QgdGV4dFN2ZyA9IHRleHRFbGVtZW50Lm91dGVySFRNTFxuICAgIC8vIFNWR0VsZW1lbnQgZG9lc24ndCBoYXZlIGlubmVyVGV4dFxuICAgIC8vIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NWR0VsZW1lbnRcbiAgICBjb25zdCB0ZXh0Q29udGVudCA9IHRleHRFbGVtZW50LmlubmVySFRNTC5yZXBsYWNlKG5ldyBSZWdFeHAoJ148dHNwYW5bXj5dKj4oW1xcXFxTfFxcXFxzXSopPC90c3Bhbj4kJyksICckMScpXG5cbiAgICBjb25zdCBhZGp1c3RlZFRleHRTdmcgPSBhZGp1c3RUZXh0YXJlYSh0ZXh0U3ZnLCB0ZXh0Q29udGVudCwgd2lkdGgsIGhlaWdodCwgbGluZUhlaWdodCwgcGFkZGluZ1gsIHBhZGRpbmdZLCBub3dyYXApXG5cbiAgICB0aGlzLnJlcGxhY2UodGV4dFN2ZywgYWRqdXN0ZWRUZXh0U3ZnKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFwcGx5KCkge1xuICAgIGlmICh0aGlzLnN2ZyAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKS5vdXRlckhUTUwpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcikub3V0ZXJIVE1MID0gdGhpcy5zdmdcbiAgICB9XG5cbiAgICB0aGlzLmFkanVzdFRleHRRdWVyaWVzLmZvckVhY2gocXVlcnkgPT4ge1xuICAgICAgYWRqdXN0VGV4dChxdWVyeS5zZWxlY3Rvciwge1xuICAgICAgICB0ZXh0TGVuZ3RoOiBxdWVyeS50ZXh0TGVuZ3RoLFxuICAgICAgICAndGV4dC1hbmNob3InOiBxdWVyeS50ZXh0QW5jaG9yLFxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gaW5pdGlhbGl6ZVxuICAgIHRoaXMuc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKS5vdXRlckhUTUxcbiAgICB0aGlzLmFkanVzdFRleHRRdWVyaWVzID0gW11cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgKHRleHRTdmcpID0+IHtcbiAgbGV0IGZpeGVkVGV4dFN2ZyA9IHRleHRTdmdcblxuICAvLyBpZiA8dGV4dD4gZG9lc24ndCBoYXZlIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSh4IHkpXCIsIGp1c3QgYWRkIGl0IHdpdGggKDAgMClcbiAgaWYgKCFmaXhlZFRleHRTdmcubWF0Y2goLzx0ZXh0IFtePl0qdHJhbnNmb3JtPVwiW15cIl0qXCJbXj5dKj4vKSkge1xuICAgIGZpeGVkVGV4dFN2ZyA9IGZpeGVkVGV4dFN2Zy5yZXBsYWNlKG5ldyBSZWdFeHAoJzx0ZXh0KFtePl0qKT4nKSwgJzx0ZXh0JDEgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMClcIj4nKVxuICB9XG5cbiAgLy8gaWYgPHRzcGFuPiBkb2Vzbid0IGhhdmUgeD1cIlwiIHk9XCJcIiwganVzdCBhZGQgaXQgd2l0aCB4PVwiMFwiIHk9XCIwXCJcbiAgaWYgKCFmaXhlZFRleHRTdmcubWF0Y2goLzx0c3BhbiBbXj5dKng9XCJbXlwiXSpcIltePl0qPi8pKSB7XG4gICAgZml4ZWRUZXh0U3ZnID0gZml4ZWRUZXh0U3ZnLnJlcGxhY2UobmV3IFJlZ0V4cCgnPHRzcGFuKFtePl0qKT4nKSwgJzx0c3BhbiQxIHg9XCIwXCI+JylcbiAgfVxuICBpZiAoIWZpeGVkVGV4dFN2Zy5tYXRjaCgvPHRzcGFuIFtePl0qeT1cIlteXCJdKlwiW14+XSo+LykpIHtcbiAgICBmaXhlZFRleHRTdmcgPSBmaXhlZFRleHRTdmcucmVwbGFjZShuZXcgUmVnRXhwKCc8dHNwYW4oW14+XSopPicpLCAnPHRzcGFuJDEgeT1cIjBcIj4nKVxuICB9XG5cbiAgLy8gY29weSB4IGZyb20gPHRzcGFuIHg9XCJcIj4gYW5kIGFkZCBpdCB0byA8dGV4dCB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoeCB5KVwiPlxuICBmaXhlZFRleHRTdmcgPSBmaXhlZFRleHRTdmcucmVwbGFjZShuZXcgUmVnRXhwKCc8dGV4dChbXFxcXHNcXFxcU10rKXRyYW5zZm9ybT1cInRyYW5zbGF0ZVxcXFwoKFxcXFxTKylcXFxccysoLispXFxcXClcIihbXj5dKik+XFxzKjx0c3BhbihbXj5dKyl4PVwiKFteXCJdKylcIicpLCAnPHRleHQkMXRyYW5zZm9ybT1cInRyYW5zbGF0ZSgjIyMkMiskNiMjIyAkMylcIiQ0Pjx0c3BhbiQ1eD1cIjBcIicpXG4gIGNvbnN0IGV4cHJlc3Npb24xID0gZml4ZWRUZXh0U3ZnLm1hdGNoKG5ldyBSZWdFeHAoJzx0ZXh0W1xcXFxzXFxcXFNdK3RyYW5zZm9ybT1cInRyYW5zbGF0ZVxcXFwoIyMjKC4rKSMjIy4rXFxcXClcIicpKVsxXVxuICBjb25zdCB4ID0gZXhwcmVzc2lvbjEubWF0Y2goL1xcZCtcXCtcXGQrLykgPyBldmFsKGV4cHJlc3Npb24xKSA6IDBcbiAgZml4ZWRUZXh0U3ZnID0gZml4ZWRUZXh0U3ZnLnJlcGxhY2UobmV3IFJlZ0V4cCgnPHRleHQoW1xcXFxzXFxcXFNdKyl0cmFuc2Zvcm09XCJ0cmFuc2xhdGVcXFxcKCMjIy4rIyMjKC4rKVxcXFwpXCInKSwgYDx0ZXh0JDF0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJHt4fSQyKVwiYClcblxuICAvLyBjb3B5IHkgZnJvbSA8dHNwYW4geT1cIlwiPiBhbmQgYWRkIGl0IHRvIDx0ZXh0IHRyYW5zZm9ybT1cInRyYW5zbGF0ZSh4IHkpXCI+XG4gIGZpeGVkVGV4dFN2ZyA9IGZpeGVkVGV4dFN2Zy5yZXBsYWNlKG5ldyBSZWdFeHAoJzx0ZXh0KFtcXFxcc1xcXFxTXSspdHJhbnNmb3JtPVwidHJhbnNsYXRlXFxcXCgoLispXFxcXHMrKFxcXFxTKylcXFxcKVwiKFtePl0qKT5cXHMqPHRzcGFuKFtePl0rKXk9XCIoW15cIl0rKVwiJyksICc8dGV4dCQxdHJhbnNmb3JtPVwidHJhbnNsYXRlKCQyICMjIyQzKyQ2IyMjKVwiJDQ+PHRzcGFuJDV5PVwiMFwiJylcbiAgY29uc3QgZXhwcmVzc2lvbjIgPSBmaXhlZFRleHRTdmcubWF0Y2gobmV3IFJlZ0V4cCgnPHRleHRbXFxcXHNcXFxcU10rdHJhbnNmb3JtPVwidHJhbnNsYXRlXFxcXCguKyMjIyguKykjIyNcXFxcKVwiJykpWzFdXG4gIGNvbnN0IHkgPSBleHByZXNzaW9uMi5tYXRjaCgvXFxkK1xcK1xcZCsvKSA/IGV2YWwoZXhwcmVzc2lvbjIpIDogMFxuICBmaXhlZFRleHRTdmcgPSBmaXhlZFRleHRTdmcucmVwbGFjZShuZXcgUmVnRXhwKCc8dGV4dChbXFxcXHNcXFxcU10rKXRyYW5zZm9ybT1cInRyYW5zbGF0ZVxcXFwoKC4rKSMjIy4rIyMjXFxcXClcIicpLCBgPHRleHQkMXRyYW5zZm9ybT1cInRyYW5zbGF0ZSgkMiR7eX0pXCJgKVxuXG4gIHJldHVybiBmaXhlZFRleHRTdmdcbn1cbiIsImltcG9ydCBzdWJTdHJpbmdCeVdpZHRoIGZyb20gJy4vc3ViLXN0cmluZy1ieS13aWR0aCdcblxuZXhwb3J0IGRlZmF1bHQgKHN0cmluZywgd2lkdGgpID0+IHtcbiAgbGV0IHNwbGl0cyA9IFtdXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBsZXQgc3BsaXQgPSBzdWJTdHJpbmdCeVdpZHRoKHN0cmluZywgMCwgd2lkdGgpXG4gICAgc3BsaXRzLnB1c2goc3BsaXQpXG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2Uoc3BsaXQsICcnKVxuICAgIGlmICghc3RyaW5nKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzcGxpdHNcbn1cbiIsImltcG9ydCBzdHJpbmdXaWR0aCBmcm9tICdzdHJpbmctd2lkdGgnXG5cbmV4cG9ydCBkZWZhdWx0IChzdHJpbmcsIHN0YXJ0LCB3aWR0aCkgPT4ge1xuICBsZXQgY3VycmVudFdpZHRoID0gMFxuICBsZXQgc3ViU3RyaW5nID0gJydcblxuICBmb3IgKGxldCBpID0gc3RhcnQ7IDsgaSsrKSB7XG4gICAgY29uc3QgY2hhciA9IHN0cmluZy5zdWJzdHIoaSwgMSlcbiAgICBjdXJyZW50V2lkdGggKz0gc3RyaW5nV2lkdGgoY2hhcilcbiAgICBpZiAoY3VycmVudFdpZHRoIDw9IHdpZHRoICYmIGkgPD0gc3RyaW5nLmxlbmd0aCkge1xuICAgICAgc3ViU3RyaW5nICs9IGNoYXJcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRXaWR0aCA+PSB3aWR0aCB8fCBpID49IHN0cmluZy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBzdWJTdHJpbmdcbiAgICB9XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gaHR0cHM6Ly9tdGhzLmJlL2Vtb2ppXG4gIHJldHVybiAvXFx1RDgzQ1xcdURGRjRcXHVEQjQwXFx1REM2N1xcdURCNDBcXHVEQzYyKD86XFx1REI0MFxcdURDNjVcXHVEQjQwXFx1REM2RVxcdURCNDBcXHVEQzY3fFxcdURCNDBcXHVEQzczXFx1REI0MFxcdURDNjNcXHVEQjQwXFx1REM3NHxcXHVEQjQwXFx1REM3N1xcdURCNDBcXHVEQzZDXFx1REI0MFxcdURDNzMpXFx1REI0MFxcdURDN0Z8XFx1RDgzRFxcdURDNjgoPzpcXHVEODNDXFx1REZGQ1xcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NcXHVERkZCfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGRlxcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZFXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkRdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkRcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkJcXHVERkZDXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdTIwMEQoPzpcXHUyNzY0XFx1RkUwRlxcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0RcXHVEQzY4fCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdTIwMEQoPzpcXHVEODNEXFx1REM2NlxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2N1xcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSkpfFxcdUQ4M0RcXHVEQzY2XFx1MjAwRFxcdUQ4M0RcXHVEQzY2fFxcdUQ4M0RcXHVEQzY3XFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2NlxcdURDNjddKXwoPzpcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pfFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRnxcXHVEODNEW1xcdURDNjZcXHVEQzY3XXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8KD86XFx1RDgzQ1xcdURGRkJcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkZcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkVcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkRcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkNcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF0pXFx1RkUwRnxcXHVEODNDXFx1REZGQlxcdTIwMEQoPzpcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXwoPzpcXHVEODNFXFx1REREMVxcdUQ4M0NcXHVERkZCXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1xcdURGRkNcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjkpXFx1RDgzQ1xcdURGRkJ8XFx1RDgzRVxcdURERDEoPzpcXHVEODNDXFx1REZGRlxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8XFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxKXwoPzpcXHVEODNFXFx1REREMVxcdUQ4M0NcXHVERkZFXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1xcdURGRkZcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pKSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSl8KD86XFx1RDgzRVxcdURERDFcXHVEODNDXFx1REZGQ1xcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMXxcXHVEODNEXFx1REM2OVxcdUQ4M0NcXHVERkZEXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY5KSg/OlxcdUQ4M0NbXFx1REZGQlxcdURGRkNdKXxcXHVEODNEXFx1REM2OSg/OlxcdUQ4M0NcXHVERkZFXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZDXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCXFx1REZGRC1cXHVERkZGXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZCXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkRcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1MjAwRCg/OlxcdTI3NjRcXHVGRTBGXFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKXxcXHVEODNEW1xcdURDNjhcXHVEQzY5XSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZGXFx1MjAwRCg/OlxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKSl8XFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzRFxcdURDNjlcXHUyMDBEKD86XFx1RDgzRFxcdURDNjZcXHUyMDBEXFx1RDgzRFxcdURDNjZ8XFx1RDgzRFxcdURDNjdcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pKXwoPzpcXHVEODNFXFx1REREMVxcdUQ4M0NcXHVERkZEXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1xcdURGRkVcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjkpKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkRdKXxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2NlxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2OVxcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSl8KD86XFx1RDgzRFxcdURDNDFcXHVGRTBGXFx1MjAwRFxcdUQ4M0RcXHVEREU4fFxcdUQ4M0RcXHVEQzY5KD86XFx1RDgzQ1xcdURGRkZcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkVcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkNcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkJcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkRcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdKXwoPzooPzpcXHUyNkY5fFxcdUQ4M0NbXFx1REZDQlxcdURGQ0NdfFxcdUQ4M0RcXHVERDc1KVxcdUZFMEZ8XFx1RDgzRFxcdURDNkZ8XFx1RDgzRVtcXHVERDNDXFx1RERERVxcdUREREZdKVxcdTIwMERbXFx1MjY0MFxcdTI2NDJdfCg/OlxcdTI2Rjl8XFx1RDgzQ1tcXHVERkNCXFx1REZDQ118XFx1RDgzRFxcdURENzUpKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKVxcdTIwMERbXFx1MjY0MFxcdTI2NDJdfCg/OlxcdUQ4M0NbXFx1REZDM1xcdURGQzRcXHVERkNBXXxcXHVEODNEW1xcdURDNkVcXHVEQzcxXFx1REM3M1xcdURDNzdcXHVEQzgxXFx1REM4MlxcdURDODZcXHVEQzg3XFx1REU0NS1cXHVERTQ3XFx1REU0QlxcdURFNERcXHVERTRFXFx1REVBM1xcdURFQjQtXFx1REVCNl18XFx1RDgzRVtcXHVERDI2XFx1REQzNy1cXHVERDM5XFx1REQzRFxcdUREM0VcXHVEREI4XFx1RERCOVxcdUREQ0QtXFx1RERDRlxcdURERDYtXFx1RERERF0pKD86KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKVxcdTIwMERbXFx1MjY0MFxcdTI2NDJdfFxcdTIwMERbXFx1MjY0MFxcdTI2NDJdKXxcXHVEODNDXFx1REZGNFxcdTIwMERcXHUyNjIwKVxcdUZFMEZ8XFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzRFxcdURDNjdcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pfFxcdUQ4M0NcXHVERkYzXFx1RkUwRlxcdTIwMERcXHVEODNDXFx1REYwOHxcXHVEODNEXFx1REMxNVxcdTIwMERcXHVEODNFXFx1RERCQXxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2N3xcXHVEODNDXFx1RERGRFxcdUQ4M0NcXHVEREYwfFxcdUQ4M0NcXHVEREY0XFx1RDgzQ1xcdURERjJ8XFx1RDgzQ1xcdURERjZcXHVEODNDXFx1RERFNnxbI1xcKjAtOV1cXHVGRTBGXFx1MjBFM3xcXHVEODNDXFx1RERFNyg/OlxcdUQ4M0NbXFx1RERFNlxcdURERTdcXHVEREU5LVxcdURERUZcXHVEREYxLVxcdURERjRcXHVEREY2LVxcdURERjlcXHVEREZCXFx1RERGQ1xcdURERkVcXHVEREZGXSl8XFx1RDgzQ1xcdURERjkoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFOVxcdURERUItXFx1RERFRFxcdURERUYtXFx1RERGNFxcdURERjdcXHVEREY5XFx1RERGQlxcdURERkNcXHVEREZGXSl8XFx1RDgzQ1xcdURERUEoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVEXFx1RERGNy1cXHVEREZBXSl8XFx1RDgzRVxcdURERDEoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfFxcdUQ4M0NcXHVEREY3KD86XFx1RDgzQ1tcXHVEREVBXFx1RERGNFxcdURERjhcXHVEREZBXFx1RERGQ10pfFxcdUQ4M0RcXHVEQzY5KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXxcXHVEODNDXFx1RERGMig/OlxcdUQ4M0NbXFx1RERFNlxcdURERTgtXFx1RERFRFxcdURERjAtXFx1RERGRl0pfFxcdUQ4M0NcXHVEREU2KD86XFx1RDgzQ1tcXHVEREU4LVxcdURERUNcXHVEREVFXFx1RERGMVxcdURERjJcXHVEREY0XFx1RERGNi1cXHVEREZBXFx1RERGQ1xcdURERkRcXHVEREZGXSl8XFx1RDgzQ1xcdURERjAoPzpcXHVEODNDW1xcdURERUFcXHVEREVDLVxcdURERUVcXHVEREYyXFx1RERGM1xcdURERjVcXHVEREY3XFx1RERGQ1xcdURERkVcXHVEREZGXSl8XFx1RDgzQ1xcdURERUQoPzpcXHVEODNDW1xcdURERjBcXHVEREYyXFx1RERGM1xcdURERjdcXHVEREY5XFx1RERGQV0pfFxcdUQ4M0NcXHVEREU5KD86XFx1RDgzQ1tcXHVEREVBXFx1RERFQ1xcdURERUZcXHVEREYwXFx1RERGMlxcdURERjRcXHVEREZGXSl8XFx1RDgzQ1xcdURERkUoPzpcXHVEODNDW1xcdURERUFcXHVEREY5XSl8XFx1RDgzQ1xcdURERUMoPzpcXHVEODNDW1xcdURERTZcXHVEREU3XFx1RERFOS1cXHVEREVFXFx1RERGMS1cXHVEREYzXFx1RERGNS1cXHVEREZBXFx1RERGQ1xcdURERkVdKXxcXHVEODNDXFx1RERGOCg/OlxcdUQ4M0NbXFx1RERFNi1cXHVEREVBXFx1RERFQy1cXHVEREY0XFx1RERGNy1cXHVEREY5XFx1RERGQlxcdURERkQtXFx1RERGRl0pfFxcdUQ4M0NcXHVEREVCKD86XFx1RDgzQ1tcXHVEREVFLVxcdURERjBcXHVEREYyXFx1RERGNFxcdURERjddKXxcXHVEODNDXFx1RERGNSg/OlxcdUQ4M0NbXFx1RERFNlxcdURERUEtXFx1RERFRFxcdURERjAtXFx1RERGM1xcdURERjctXFx1RERGOVxcdURERkNcXHVEREZFXSl8XFx1RDgzQ1xcdURERkIoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVFXFx1RERGM1xcdURERkFdKXxcXHVEODNDXFx1RERGMyg/OlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBLVxcdURERUNcXHVEREVFXFx1RERGMVxcdURERjRcXHVEREY1XFx1RERGN1xcdURERkFcXHVEREZGXSl8XFx1RDgzQ1xcdURERTgoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFOVxcdURERUItXFx1RERFRVxcdURERjAtXFx1RERGNVxcdURERjdcXHVEREZBLVxcdURERkZdKXxcXHVEODNDXFx1RERGMSg/OlxcdUQ4M0NbXFx1RERFNi1cXHVEREU4XFx1RERFRVxcdURERjBcXHVEREY3LVxcdURERkJcXHVEREZFXSl8XFx1RDgzQ1xcdURERkYoPzpcXHVEODNDW1xcdURERTZcXHVEREYyXFx1RERGQ10pfFxcdUQ4M0NcXHVEREZDKD86XFx1RDgzQ1tcXHVEREVCXFx1RERGOF0pfFxcdUQ4M0NcXHVEREZBKD86XFx1RDgzQ1tcXHVEREU2XFx1RERFQ1xcdURERjJcXHVEREYzXFx1RERGOFxcdURERkVcXHVEREZGXSl8XFx1RDgzQ1xcdURERUUoPzpcXHVEODNDW1xcdURERTgtXFx1RERFQVxcdURERjEtXFx1RERGNFxcdURERjYtXFx1RERGOV0pfFxcdUQ4M0NcXHVEREVGKD86XFx1RDgzQ1tcXHVEREVBXFx1RERGMlxcdURERjRcXHVEREY1XSl8KD86XFx1RDgzQ1tcXHVERkMzXFx1REZDNFxcdURGQ0FdfFxcdUQ4M0RbXFx1REM2RVxcdURDNzFcXHVEQzczXFx1REM3N1xcdURDODFcXHVEQzgyXFx1REM4NlxcdURDODdcXHVERTQ1LVxcdURFNDdcXHVERTRCXFx1REU0RFxcdURFNEVcXHVERUEzXFx1REVCNC1cXHVERUI2XXxcXHVEODNFW1xcdUREMjZcXHVERDM3LVxcdUREMzlcXHVERDNEXFx1REQzRVxcdUREQjhcXHVEREI5XFx1RERDRC1cXHVERENGXFx1RERENi1cXHVEREREXSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfCg/OlxcdTI2Rjl8XFx1RDgzQ1tcXHVERkNCXFx1REZDQ118XFx1RDgzRFxcdURENzUpKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXwoPzpbXFx1MjYxRFxcdTI3MEEtXFx1MjcwRF18XFx1RDgzQ1tcXHVERjg1XFx1REZDMlxcdURGQzddfFxcdUQ4M0RbXFx1REM0MlxcdURDNDNcXHVEQzQ2LVxcdURDNTBcXHVEQzY2XFx1REM2N1xcdURDNkItXFx1REM2RFxcdURDNzBcXHVEQzcyXFx1REM3NC1cXHVEQzc2XFx1REM3OFxcdURDN0NcXHVEQzgzXFx1REM4NVxcdURDQUFcXHVERDc0XFx1REQ3QVxcdUREOTBcXHVERDk1XFx1REQ5NlxcdURFNENcXHVERTRGXFx1REVDMFxcdURFQ0NdfFxcdUQ4M0VbXFx1REQwRlxcdUREMTgtXFx1REQxQ1xcdUREMUVcXHVERDFGXFx1REQzMC1cXHVERDM2XFx1RERCNVxcdUREQjZcXHVEREJCXFx1REREMi1cXHVEREQ1XSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfCg/OltcXHUyMzFBXFx1MjMxQlxcdTIzRTktXFx1MjNFQ1xcdTIzRjBcXHUyM0YzXFx1MjVGRFxcdTI1RkVcXHUyNjE0XFx1MjYxNVxcdTI2NDgtXFx1MjY1M1xcdTI2N0ZcXHUyNjkzXFx1MjZBMVxcdTI2QUFcXHUyNkFCXFx1MjZCRFxcdTI2QkVcXHUyNkM0XFx1MjZDNVxcdTI2Q0VcXHUyNkQ0XFx1MjZFQVxcdTI2RjJcXHUyNkYzXFx1MjZGNVxcdTI2RkFcXHUyNkZEXFx1MjcwNVxcdTI3MEFcXHUyNzBCXFx1MjcyOFxcdTI3NENcXHUyNzRFXFx1Mjc1My1cXHUyNzU1XFx1Mjc1N1xcdTI3OTUtXFx1Mjc5N1xcdTI3QjBcXHUyN0JGXFx1MkIxQlxcdTJCMUNcXHUyQjUwXFx1MkI1NV18XFx1RDgzQ1tcXHVEQzA0XFx1RENDRlxcdUREOEVcXHVERDkxLVxcdUREOUFcXHVEREU2LVxcdURERkZcXHVERTAxXFx1REUxQVxcdURFMkZcXHVERTMyLVxcdURFMzZcXHVERTM4LVxcdURFM0FcXHVERTUwXFx1REU1MVxcdURGMDAtXFx1REYyMFxcdURGMkQtXFx1REYzNVxcdURGMzctXFx1REY3Q1xcdURGN0UtXFx1REY5M1xcdURGQTAtXFx1REZDQVxcdURGQ0YtXFx1REZEM1xcdURGRTAtXFx1REZGMFxcdURGRjRcXHVERkY4LVxcdURGRkZdfFxcdUQ4M0RbXFx1REMwMC1cXHVEQzNFXFx1REM0MFxcdURDNDItXFx1RENGQ1xcdURDRkYtXFx1REQzRFxcdURENEItXFx1REQ0RVxcdURENTAtXFx1REQ2N1xcdUREN0FcXHVERDk1XFx1REQ5NlxcdUREQTRcXHVEREZCLVxcdURFNEZcXHVERTgwLVxcdURFQzVcXHVERUNDXFx1REVEMC1cXHVERUQyXFx1REVENVxcdURFRUJcXHVERUVDXFx1REVGNC1cXHVERUZBXFx1REZFMC1cXHVERkVCXXxcXHVEODNFW1xcdUREMEQtXFx1REQzQVxcdUREM0MtXFx1REQ0NVxcdURENDctXFx1REQ3MVxcdURENzMtXFx1REQ3NlxcdUREN0EtXFx1RERBMlxcdUREQTUtXFx1RERBQVxcdUREQUUtXFx1RERDQVxcdUREQ0QtXFx1RERGRlxcdURFNzAtXFx1REU3M1xcdURFNzgtXFx1REU3QVxcdURFODAtXFx1REU4MlxcdURFOTAtXFx1REU5NV0pfCg/OlsjXFwqMC05XFx4QTlcXHhBRVxcdTIwM0NcXHUyMDQ5XFx1MjEyMlxcdTIxMzlcXHUyMTk0LVxcdTIxOTlcXHUyMUE5XFx1MjFBQVxcdTIzMUFcXHUyMzFCXFx1MjMyOFxcdTIzQ0ZcXHUyM0U5LVxcdTIzRjNcXHUyM0Y4LVxcdTIzRkFcXHUyNEMyXFx1MjVBQVxcdTI1QUJcXHUyNUI2XFx1MjVDMFxcdTI1RkItXFx1MjVGRVxcdTI2MDAtXFx1MjYwNFxcdTI2MEVcXHUyNjExXFx1MjYxNFxcdTI2MTVcXHUyNjE4XFx1MjYxRFxcdTI2MjBcXHUyNjIyXFx1MjYyM1xcdTI2MjZcXHUyNjJBXFx1MjYyRVxcdTI2MkZcXHUyNjM4LVxcdTI2M0FcXHUyNjQwXFx1MjY0MlxcdTI2NDgtXFx1MjY1M1xcdTI2NUZcXHUyNjYwXFx1MjY2M1xcdTI2NjVcXHUyNjY2XFx1MjY2OFxcdTI2N0JcXHUyNjdFXFx1MjY3RlxcdTI2OTItXFx1MjY5N1xcdTI2OTlcXHUyNjlCXFx1MjY5Q1xcdTI2QTBcXHUyNkExXFx1MjZBQVxcdTI2QUJcXHUyNkIwXFx1MjZCMVxcdTI2QkRcXHUyNkJFXFx1MjZDNFxcdTI2QzVcXHUyNkM4XFx1MjZDRVxcdTI2Q0ZcXHUyNkQxXFx1MjZEM1xcdTI2RDRcXHUyNkU5XFx1MjZFQVxcdTI2RjAtXFx1MjZGNVxcdTI2RjctXFx1MjZGQVxcdTI2RkRcXHUyNzAyXFx1MjcwNVxcdTI3MDgtXFx1MjcwRFxcdTI3MEZcXHUyNzEyXFx1MjcxNFxcdTI3MTZcXHUyNzFEXFx1MjcyMVxcdTI3MjhcXHUyNzMzXFx1MjczNFxcdTI3NDRcXHUyNzQ3XFx1Mjc0Q1xcdTI3NEVcXHUyNzUzLVxcdTI3NTVcXHUyNzU3XFx1Mjc2M1xcdTI3NjRcXHUyNzk1LVxcdTI3OTdcXHUyN0ExXFx1MjdCMFxcdTI3QkZcXHUyOTM0XFx1MjkzNVxcdTJCMDUtXFx1MkIwN1xcdTJCMUJcXHUyQjFDXFx1MkI1MFxcdTJCNTVcXHUzMDMwXFx1MzAzRFxcdTMyOTdcXHUzMjk5XXxcXHVEODNDW1xcdURDMDRcXHVEQ0NGXFx1REQ3MFxcdURENzFcXHVERDdFXFx1REQ3RlxcdUREOEVcXHVERDkxLVxcdUREOUFcXHVEREU2LVxcdURERkZcXHVERTAxXFx1REUwMlxcdURFMUFcXHVERTJGXFx1REUzMi1cXHVERTNBXFx1REU1MFxcdURFNTFcXHVERjAwLVxcdURGMjFcXHVERjI0LVxcdURGOTNcXHVERjk2XFx1REY5N1xcdURGOTktXFx1REY5QlxcdURGOUUtXFx1REZGMFxcdURGRjMtXFx1REZGNVxcdURGRjctXFx1REZGRl18XFx1RDgzRFtcXHVEQzAwLVxcdURDRkRcXHVEQ0ZGLVxcdUREM0RcXHVERDQ5LVxcdURENEVcXHVERDUwLVxcdURENjdcXHVERDZGXFx1REQ3MFxcdURENzMtXFx1REQ3QVxcdUREODdcXHVERDhBLVxcdUREOERcXHVERDkwXFx1REQ5NVxcdUREOTZcXHVEREE0XFx1RERBNVxcdUREQThcXHVEREIxXFx1RERCMlxcdUREQkNcXHVEREMyLVxcdUREQzRcXHVEREQxLVxcdURERDNcXHVERERDLVxcdUREREVcXHVEREUxXFx1RERFM1xcdURERThcXHVEREVGXFx1RERGM1xcdURERkEtXFx1REU0RlxcdURFODAtXFx1REVDNVxcdURFQ0ItXFx1REVEMlxcdURFRDVcXHVERUUwLVxcdURFRTVcXHVERUU5XFx1REVFQlxcdURFRUNcXHVERUYwXFx1REVGMy1cXHVERUZBXFx1REZFMC1cXHVERkVCXXxcXHVEODNFW1xcdUREMEQtXFx1REQzQVxcdUREM0MtXFx1REQ0NVxcdURENDctXFx1REQ3MVxcdURENzMtXFx1REQ3NlxcdUREN0EtXFx1RERBMlxcdUREQTUtXFx1RERBQVxcdUREQUUtXFx1RERDQVxcdUREQ0QtXFx1RERGRlxcdURFNzAtXFx1REU3M1xcdURFNzgtXFx1REU3QVxcdURFODAtXFx1REU4MlxcdURFOTAtXFx1REU5NV0pXFx1RkUwRnwoPzpbXFx1MjYxRFxcdTI2RjlcXHUyNzBBLVxcdTI3MERdfFxcdUQ4M0NbXFx1REY4NVxcdURGQzItXFx1REZDNFxcdURGQzdcXHVERkNBLVxcdURGQ0NdfFxcdUQ4M0RbXFx1REM0MlxcdURDNDNcXHVEQzQ2LVxcdURDNTBcXHVEQzY2LVxcdURDNzhcXHVEQzdDXFx1REM4MS1cXHVEQzgzXFx1REM4NS1cXHVEQzg3XFx1REM4RlxcdURDOTFcXHVEQ0FBXFx1REQ3NFxcdURENzVcXHVERDdBXFx1REQ5MFxcdUREOTVcXHVERDk2XFx1REU0NS1cXHVERTQ3XFx1REU0Qi1cXHVERTRGXFx1REVBM1xcdURFQjQtXFx1REVCNlxcdURFQzBcXHVERUNDXXxcXHVEODNFW1xcdUREMEZcXHVERDE4LVxcdUREMUZcXHVERDI2XFx1REQzMC1cXHVERDM5XFx1REQzQy1cXHVERDNFXFx1RERCNVxcdUREQjZcXHVEREI4XFx1RERCOVxcdUREQkJcXHVERENELVxcdUREQ0ZcXHVEREQxLVxcdURERERdKS9nO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHN0cmlwQW5zaSA9IHJlcXVpcmUoJ3N0cmlwLWFuc2knKTtcbmNvbnN0IGlzRnVsbHdpZHRoQ29kZVBvaW50ID0gcmVxdWlyZSgnaXMtZnVsbHdpZHRoLWNvZGUtcG9pbnQnKTtcbmNvbnN0IGVtb2ppUmVnZXggPSByZXF1aXJlKCdlbW9qaS1yZWdleCcpO1xuXG5jb25zdCBzdHJpbmdXaWR0aCA9IHN0cmluZyA9PiB7XG5cdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJyB8fCBzdHJpbmcubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRzdHJpbmcgPSBzdHJpcEFuc2koc3RyaW5nKTtcblxuXHRpZiAoc3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoZW1vamlSZWdleCgpLCAnICAnKTtcblxuXHRsZXQgd2lkdGggPSAwO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgY29kZSA9IHN0cmluZy5jb2RlUG9pbnRBdChpKTtcblxuXHRcdC8vIElnbm9yZSBjb250cm9sIGNoYXJhY3RlcnNcblx0XHRpZiAoY29kZSA8PSAweDFGIHx8IChjb2RlID49IDB4N0YgJiYgY29kZSA8PSAweDlGKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gSWdub3JlIGNvbWJpbmluZyBjaGFyYWN0ZXJzXG5cdFx0aWYgKGNvZGUgPj0gMHgzMDAgJiYgY29kZSA8PSAweDM2Rikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gU3Vycm9nYXRlc1xuXHRcdGlmIChjb2RlID4gMHhGRkZGKSB7XG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0d2lkdGggKz0gaXNGdWxsd2lkdGhDb2RlUG9pbnQoY29kZSkgPyAyIDogMTtcblx0fVxuXG5cdHJldHVybiB3aWR0aDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nV2lkdGg7XG4vLyBUT0RPOiByZW1vdmUgdGhpcyBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gc3RyaW5nV2lkdGg7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSB5b2RhICovXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlzRnVsbHdpZHRoQ29kZVBvaW50ID0gY29kZVBvaW50ID0+IHtcblx0aWYgKE51bWJlci5pc05hTihjb2RlUG9pbnQpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gQ29kZSBwb2ludHMgYXJlIGRlcml2ZWQgZnJvbTpcblx0Ly8gaHR0cDovL3d3dy51bml4Lm9yZy9QdWJsaWMvVU5JREFUQS9FYXN0QXNpYW5XaWR0aC50eHRcblx0aWYgKFxuXHRcdGNvZGVQb2ludCA+PSAweDExMDAgJiYgKFxuXHRcdFx0Y29kZVBvaW50IDw9IDB4MTE1RiB8fCAvLyBIYW5ndWwgSmFtb1xuXHRcdFx0Y29kZVBvaW50ID09PSAweDIzMjkgfHwgLy8gTEVGVC1QT0lOVElORyBBTkdMRSBCUkFDS0VUXG5cdFx0XHRjb2RlUG9pbnQgPT09IDB4MjMyQSB8fCAvLyBSSUdIVC1QT0lOVElORyBBTkdMRSBCUkFDS0VUXG5cdFx0XHQvLyBDSksgUmFkaWNhbHMgU3VwcGxlbWVudCAuLiBFbmNsb3NlZCBDSksgTGV0dGVycyBhbmQgTW9udGhzXG5cdFx0XHQoMHgyRTgwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHgzMjQ3ICYmIGNvZGVQb2ludCAhPT0gMHgzMDNGKSB8fFxuXHRcdFx0Ly8gRW5jbG9zZWQgQ0pLIExldHRlcnMgYW5kIE1vbnRocyAuLiBDSksgVW5pZmllZCBJZGVvZ3JhcGhzIEV4dGVuc2lvbiBBXG5cdFx0XHQoMHgzMjUwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHg0REJGKSB8fFxuXHRcdFx0Ly8gQ0pLIFVuaWZpZWQgSWRlb2dyYXBocyAuLiBZaSBSYWRpY2Fsc1xuXHRcdFx0KDB4NEUwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4QTRDNikgfHxcblx0XHRcdC8vIEhhbmd1bCBKYW1vIEV4dGVuZGVkLUFcblx0XHRcdCgweEE5NjAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEE5N0MpIHx8XG5cdFx0XHQvLyBIYW5ndWwgU3lsbGFibGVzXG5cdFx0XHQoMHhBQzAwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhEN0EzKSB8fFxuXHRcdFx0Ly8gQ0pLIENvbXBhdGliaWxpdHkgSWRlb2dyYXBoc1xuXHRcdFx0KDB4RjkwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4RkFGRikgfHxcblx0XHRcdC8vIFZlcnRpY2FsIEZvcm1zXG5cdFx0XHQoMHhGRTEwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhGRTE5KSB8fFxuXHRcdFx0Ly8gQ0pLIENvbXBhdGliaWxpdHkgRm9ybXMgLi4gU21hbGwgRm9ybSBWYXJpYW50c1xuXHRcdFx0KDB4RkUzMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4RkU2QikgfHxcblx0XHRcdC8vIEhhbGZ3aWR0aCBhbmQgRnVsbHdpZHRoIEZvcm1zXG5cdFx0XHQoMHhGRjAxIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhGRjYwKSB8fFxuXHRcdFx0KDB4RkZFMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4RkZFNikgfHxcblx0XHRcdC8vIEthbmEgU3VwcGxlbWVudFxuXHRcdFx0KDB4MUIwMDAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweDFCMDAxKSB8fFxuXHRcdFx0Ly8gRW5jbG9zZWQgSWRlb2dyYXBoaWMgU3VwcGxlbWVudFxuXHRcdFx0KDB4MUYyMDAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweDFGMjUxKSB8fFxuXHRcdFx0Ly8gQ0pLIFVuaWZpZWQgSWRlb2dyYXBocyBFeHRlbnNpb24gQiAuLiBUZXJ0aWFyeSBJZGVvZ3JhcGhpYyBQbGFuZVxuXHRcdFx0KDB4MjAwMDAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweDNGRkZEKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVsbHdpZHRoQ29kZVBvaW50O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGlzRnVsbHdpZHRoQ29kZVBvaW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgYW5zaVJlZ2V4ID0gcmVxdWlyZSgnYW5zaS1yZWdleCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZyA9PiB0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJyA/IHN0cmluZy5yZXBsYWNlKGFuc2lSZWdleCgpLCAnJykgOiBzdHJpbmc7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gKHtvbmx5Rmlyc3QgPSBmYWxzZX0gPSB7fSkgPT4ge1xuXHRjb25zdCBwYXR0ZXJuID0gW1xuXHRcdCdbXFxcXHUwMDFCXFxcXHUwMDlCXVtbXFxcXF0oKSM7P10qKD86KD86KD86W2EtekEtWlxcXFxkXSooPzo7Wy1hLXpBLVpcXFxcZFxcXFwvIyYuOj0/JUB+X10qKSopP1xcXFx1MDAwNyknLFxuXHRcdCcoPzooPzpcXFxcZHsxLDR9KD86O1xcXFxkezAsNH0pKik/W1xcXFxkQS1QUi1UWmNmLW50cXJ5PT48fl0pKSdcblx0XS5qb2luKCd8Jyk7XG5cblx0cmV0dXJuIG5ldyBSZWdFeHAocGF0dGVybiwgb25seUZpcnN0ID8gdW5kZWZpbmVkIDogJ2cnKTtcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9