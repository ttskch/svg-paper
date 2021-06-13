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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdmdQYXBlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9qcy9zcmMvYWRqdXN0LXRleHQuanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9qcy9zcmMvYWRqdXN0LXRleHRhcmVhLmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vanMvc3JjL3N2Zy1wYXBlci5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L2ZpeC10ZXh0LXRyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L3NwbGl0LXN0cmluZy1ieS13aWR0aC5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L3N1Yi1zdHJpbmctYnktd2lkdGguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvZW1vamktcmVnZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvc3RyaW5nLXdpZHRoL2luZGV4LmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vbm9kZV9tb2R1bGVzL3N0cmluZy13aWR0aC9ub2RlX21vZHVsZXMvaXMtZnVsbHdpZHRoLWNvZGUtcG9pbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvc3RyaXAtYW5zaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL25vZGVfbW9kdWxlcy9zdHJpcC1hbnNpL25vZGVfbW9kdWxlcy9hbnNpLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vc2Nzcy9zdmctcGFwZXIuc2Nzcz9mOWQyIl0sIm5hbWVzIjpbInNlbGVjdG9yIiwiY29uZmlnIiwiJHRoaXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGllbnRXaWR0aCIsInRleHRMZW5ndGgiLCJzZXRBdHRyaWJ1dGUiLCJ3IiwicGFyc2VGbG9hdCIsIngiLCJ5IiwiZ2V0QXR0cmlidXRlIiwibWF0Y2giLCJ0ZXh0U3ZnIiwidGV4dENvbnRlbnQiLCJ3aWR0aCIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJwYWRkaW5nWCIsInBhZGRpbmdZIiwibm93cmFwIiwiUmVnRXhwIiwiY29uc29sZSIsImVycm9yIiwib3JpZ2luYWxGb250U2l6ZSIsInBhcnNlSW50IiwiZm9udFNpemUiLCJwaHlzaWNhbExpbmVzIiwic3BsaXQiLCJsb2dpY2FsTGluZXMiLCJtYXhSb3dzIiwiTWF0aCIsImZsb29yIiwibWF4Q29sdW1ucyIsImZvckVhY2giLCJsaW5lIiwiY29uY2F0Iiwic3BsaXRTdHJpbmdCeVdpZHRoIiwibGVuZ3RoIiwiYWRqdXN0WSIsImFkanVzdGVkVGV4dFN2ZyIsImZpeFRleHRUcmFuc2Zvcm0iLCJyZXBsYWNlIiwidHNwYW4iLCJpIiwiU3ZnUGFwZXIiLCJzdmciLCJvdXRlckhUTUwiLCJhZGp1c3RUZXh0UXVlcmllcyIsInNlYXJjaCIsInJlcGxhY2VtZW50Iiwic291cmNlIiwiZmxhZ3MiLCJ1bmRlZmluZWQiLCJ0ZXh0QW5jaG9yIiwicHVzaCIsImRvYyIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInRleHRFbGVtZW50IiwiaW5uZXJIVE1MIiwiYWRqdXN0VGV4dGFyZWEiLCJxdWVyeSIsImFkanVzdFRleHQiLCJmaXhlZFRleHRTdmciLCJleHByZXNzaW9uMSIsImV2YWwiLCJleHByZXNzaW9uMiIsInN0cmluZyIsInNwbGl0cyIsInN1YlN0cmluZ0J5V2lkdGgiLCJzdGFydCIsImN1cnJlbnRXaWR0aCIsInN1YlN0cmluZyIsImNoYXIiLCJzdWJzdHIiLCJzdHJpbmdXaWR0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHJpcEFuc2kiLCJyZXF1aXJlIiwiaXNGdWxsd2lkdGhDb2RlUG9pbnQiLCJlbW9qaVJlZ2V4IiwiY29kZSIsImNvZGVQb2ludEF0IiwiY29kZVBvaW50IiwiTnVtYmVyIiwiaXNOYU4iLCJhbnNpUmVnZXgiLCJvbmx5Rmlyc3QiLCJwYXR0ZXJuIiwiam9pbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTs7QUFFZSx5RUFBQ0EsUUFBRCxFQUFXQyxNQUFYLEVBQXNCO0FBQ25DLE1BQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCSixRQUF2QixDQUFkOztBQUVBLE1BQUksQ0FBQ0UsS0FBTCxFQUFZO0FBQ1Y7QUFDRCxHQUxrQyxDQU9uQzs7O0FBQ0EsTUFBSSxDQUFDLENBQUNELE1BQU0sQ0FBQyxZQUFELENBQVosRUFBNEI7QUFDMUI7QUFDQTtBQUNBQyxTQUFLLENBQUNHLEtBQU4s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QUQsQ0FBekI7O0FBRUFILE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFBVixNQUFNO0FBQUEsU0FBSSxPQUFPQSxNQUFQLEtBQWtCLFFBQWxCLEdBQTZCQSxNQUFNLENBQUMxQixPQUFQLENBQWU4QyxTQUFTLEVBQXhCLEVBQTRCLEVBQTVCLENBQTdCLEdBQStEcEIsTUFBbkU7QUFBQSxDQUF2QixDOzs7Ozs7Ozs7Ozs7QUNIYTs7QUFFYlMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFlBQThCO0FBQUEsaUZBQVAsRUFBTztBQUFBLDRCQUE1QlcsU0FBNEI7QUFBQSxNQUE1QkEsU0FBNEIsK0JBQWhCLEtBQWdCOztBQUM5QyxNQUFNQyxPQUFPLEdBQUcsQ0FDZiw2RkFEZSxFQUVmLDBEQUZlLEVBR2RDLElBSGMsQ0FHVCxHQUhTLENBQWhCO0FBS0EsU0FBTyxJQUFJdEUsTUFBSixDQUFXcUUsT0FBWCxFQUFvQkQsU0FBUyxHQUFHcEMsU0FBSCxHQUFlLEdBQTVDLENBQVA7QUFDQSxDQVBELEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUEiLCJmaWxlIjoic3ZnLXBhcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3ZnUGFwZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3ZnUGFwZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnQgZGVmYXVsdCAoc2VsZWN0b3IsIGNvbmZpZykgPT4ge1xuICBjb25zdCAkdGhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG5cbiAgaWYgKCEkdGhpcykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gc2hyaW5rIHRleHQgZWxlbWVudCB0byBzcGVjaWZpZWQgd2lkdGhcbiAgaWYgKCEhY29uZmlnWyd0ZXh0TGVuZ3RoJ10pIHtcbiAgICAvLyBmb3IgZmlyZWZveFxuICAgIC8vIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvamEvZG9jcy9XZWIvQVBJL0VsZW1lbnQvY2xpZW50V2lkdGhcbiAgICAkdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXG4gICAgaWYgKCR0aGlzLmNsaWVudFdpZHRoID4gY29uZmlnLnRleHRMZW5ndGgpIHtcbiAgICAgICR0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3RzcGFuJykuc2V0QXR0cmlidXRlKCd0ZXh0TGVuZ3RoJywgY29uZmlnLnRleHRMZW5ndGgpXG4gICAgICAkdGhpcy5xdWVyeVNlbGVjdG9yKCd0c3BhbicpLnNldEF0dHJpYnV0ZSgnbGVuZ3RoQWRqdXN0JywgJ3NwYWNpbmdBbmRHbHlwaHMnKVxuXG4gICAgICAvLyBmb3IgZmlyZWZveFxuICAgICAgLy8gQHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04OTA2OTJcbiAgICAgICR0aGlzLnNldEF0dHJpYnV0ZSgndGV4dExlbmd0aCcsIGNvbmZpZy50ZXh0TGVuZ3RoKVxuICAgICAgJHRoaXMuc2V0QXR0cmlidXRlKCdsZW5ndGhBZGp1c3QnLCAnc3BhY2luZ0FuZEdseXBocycpXG4gICAgfVxuICB9XG5cbiAgLy8gYWxpZ25tZW50XG4gIGlmICghIWNvbmZpZ1sndGV4dC1hbmNob3InXSAmJiBjb25maWdbJ3RleHQtYW5jaG9yJ10gIT09ICdzdGFydCcpIHtcbiAgICBjb25zdCB3ID0gcGFyc2VGbG9hdChjb25maWdbJ3RleHRMZW5ndGgnXSlcbiAgICBsZXQgeCA9IDBcbiAgICBsZXQgeSA9IDBcbiAgICBpZiAoJHRoaXMuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKSkge1xuICAgICAgeCA9IHBhcnNlRmxvYXQoJHRoaXMuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKS5tYXRjaCgvdHJhbnNsYXRlXFwoKFxcUyspIC4rXFwpLylbMV0pXG4gICAgICB5ID0gcGFyc2VGbG9hdCgkdGhpcy5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpLm1hdGNoKC90cmFuc2xhdGVcXChcXFMrICguKylcXCkvKVsxXSlcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnWyd0ZXh0LWFuY2hvciddID09PSAnbWlkZGxlJykge1xuICAgICAgJHRoaXMuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7eCArICh3IC8gMil9ICR7eX0pYClcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnWyd0ZXh0LWFuY2hvciddID09PSAnZW5kJykge1xuICAgICAgJHRoaXMuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7eCArIHd9ICR7eX0pYClcbiAgICB9XG5cbiAgICAkdGhpcy5zZXRBdHRyaWJ1dGUoJ3RleHQtYW5jaG9yJywgY29uZmlnWyd0ZXh0LWFuY2hvciddKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHNwbGl0U3RyaW5nQnlXaWR0aCBmcm9tICcuL3V0aWxpdHkvc3BsaXQtc3RyaW5nLWJ5LXdpZHRoJ1xuaW1wb3J0IGZpeFRleHRUcmFuc2Zvcm0gZnJvbSAnLi91dGlsaXR5L2ZpeC10ZXh0LXRyYW5zZm9ybSdcblxuZXhwb3J0IGRlZmF1bHQgKHRleHRTdmcsIHRleHRDb250ZW50LCB3aWR0aCwgaGVpZ2h0LCBsaW5lSGVpZ2h0ID0gMS4yLCBwYWRkaW5nWCA9IDAuNSwgcGFkZGluZ1kgPSAwLjUsIG5vd3JhcCA9IGZhbHNlKSA9PiB7XG4gIGlmICghdGV4dFN2Zy5tYXRjaChuZXcgUmVnRXhwKCc8dGV4dCBbXj5dKmZvbnQtc2l6ZT1cIlxcXFxkK1wiW14+XSo+PHRzcGFuKCBbXj5dKj58PilbXjw+XSo8L3RzcGFuPjwvdGV4dD4nKSkpIHtcbiAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHN2ZyBzdHJpbmcgb2YgdGV4dCBlbGVtZW50JywgdGV4dFN2ZylcbiAgICByZXR1cm4gdGV4dFN2Z1xuICB9XG5cbiAgY29uc3Qgb3JpZ2luYWxGb250U2l6ZSA9IHBhcnNlSW50KHRleHRTdmcubWF0Y2goLy4rZm9udC1zaXplPVwiKFxcZCspXCIuKy8pWzFdKVxuICBsZXQgZm9udFNpemUgPSBvcmlnaW5hbEZvbnRTaXplXG5cbiAgLy8gZmluZCB0aGUgcmlnaHQtc2l6ZSBmb250LXNpemVcbiAgY29uc3QgcGh5c2ljYWxMaW5lcyA9IHRleHRDb250ZW50LnNwbGl0KFwiXFxuXCIpXG4gIGxldCBsb2dpY2FsTGluZXMgPSBbXVxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGxldCBtYXhSb3dzID0gTWF0aC5mbG9vcigoaGVpZ2h0IC0gKDIgKiBmb250U2l6ZSAqIHBhZGRpbmdZKSkgLyAoZm9udFNpemUgKiBsaW5lSGVpZ2h0KSlcbiAgICBsZXQgbWF4Q29sdW1ucyA9IE1hdGguZmxvb3IoKHdpZHRoIC0gKDIgKiBmb250U2l6ZSAqIHBhZGRpbmdYKSkgLyBmb250U2l6ZSkgLy8gZG9lc24ndCBjYXJlIGFib3V0IHByb3BvcnRpb25hbCBmb250XG5cbiAgICBpZiAobm93cmFwKSB7XG4gICAgICBsb2dpY2FsTGluZXMgPSBwaHlzaWNhbExpbmVzXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ2ljYWxMaW5lcyA9IFtdXG4gICAgICBwaHlzaWNhbExpbmVzLmZvckVhY2gobGluZSA9PiB7XG4gICAgICAgIGxvZ2ljYWxMaW5lcyA9IGxvZ2ljYWxMaW5lcy5jb25jYXQoc3BsaXRTdHJpbmdCeVdpZHRoKGxpbmUsIG1heENvbHVtbnMgKiAyKSkgLy8gMiBzaW5nbGUtYnl0ZSBjaGFyYWN0ZXJzIGNhbiBiZSBwbGFjZWQgaW4gMSBjb2x1bW5cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGxvZ2ljYWxMaW5lcy5sZW5ndGggPiBtYXhSb3dzKSB7XG4gICAgICBmb250U2l6ZSAqPSAwLjk1XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgLy8gcmFpc2UgeS1jb29yZGluYXRlIHVwIGJlY2F1c2UgeS1jb29yZGluYXRlIG9mIDx0ZXh0IHRyYW5zZm9ybT1cInRyYW5zbGF0ZSh4IHkpXCI+IG9yIDx0c3BhbiB5PVwiXCI+IGlzIG9uIGxvd2VyIGJhc2Ugb2YgdGV4dCBvYmplY3RcbiAgY29uc3QgYWRqdXN0WSA9IGZvbnRTaXplIC0gb3JpZ2luYWxGb250U2l6ZVxuXG4gIGxldCBhZGp1c3RlZFRleHRTdmcgPSBmaXhUZXh0VHJhbnNmb3JtKHRleHRTdmcpXG4gIGFkanVzdGVkVGV4dFN2ZyA9IGFkanVzdGVkVGV4dFN2Zy5yZXBsYWNlKG5ldyBSZWdFeHAoJzx0c3BhbigufFxcXFxzKSs8L3RleHQ+JyksICcnKVxuICBhZGp1c3RlZFRleHRTdmcgPSBhZGp1c3RlZFRleHRTdmcucmVwbGFjZShuZXcgUmVnRXhwKCdmb250LXNpemU9XCJcXFxcZCtcIicpLCBgZm9udC1zaXplPVwiJHtmb250U2l6ZX1cImApXG4gIGFkanVzdGVkVGV4dFN2ZyArPSAne3RzcGFufTwvdGV4dD4nXG5cbiAgbGV0IHRzcGFuID0gJydcbiAgY29uc3QgeCA9IGZvbnRTaXplICogcGFkZGluZ1hcbiAgbG9naWNhbExpbmVzLmZvckVhY2goKGxpbmUsIGkpID0+IHtcbiAgICBjb25zdCB5ID0gYWRqdXN0WSArIGZvbnRTaXplICogKHBhZGRpbmdZICsgKGkgKiBsaW5lSGVpZ2h0KSlcbiAgICB0c3BhbiArPSBgPHRzcGFuIHg9XCIke3h9XCIgeT1cIiR7eX1cIj4ke2xpbmV9PC90c3Bhbj5gXG4gIH0pXG5cbiAgYWRqdXN0ZWRUZXh0U3ZnID0gYWRqdXN0ZWRUZXh0U3ZnLnJlcGxhY2UoJ3t0c3Bhbn0nLCB0c3BhbilcblxuICByZXR1cm4gYWRqdXN0ZWRUZXh0U3ZnXG59XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IGFkanVzdFRleHQgZnJvbSAnLi9hZGp1c3QtdGV4dCdcbmltcG9ydCBhZGp1c3RUZXh0YXJlYSBmcm9tICcuL2FkanVzdC10ZXh0YXJlYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ZnUGFwZXIge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9ICdzdmcnKSB7XG4gICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yXG4gICAgdGhpcy5zdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5vdXRlckhUTUwucmVwbGFjZSgvW1xccnxcXG5dKy9nLCBcIlxcblwiKVxuICAgIHRoaXMuYWRqdXN0VGV4dFF1ZXJpZXMgPSBbXVxuICB9XG5cbiAgcmVwbGFjZShzZWFyY2gsIHJlcGxhY2VtZW50KSB7XG4gICAgaWYgKHNlYXJjaCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgc2VhcmNoID0gbmV3IFJlZ0V4cChzZWFyY2guc291cmNlLCBzZWFyY2guZmxhZ3MucmVwbGFjZSgvZy9nLCAnJykgKyAnZycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKC9bXFxyfFxcbl0rL2csIFwiXFxuXCIpXG5cbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvamEvZG9jcy9XZWIvSmF2YVNjcmlwdC9HdWlkZS9SZWd1bGFyX0V4cHJlc3Npb25zI2VzY2FwaW5nXG4gICAgICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgvWy4qKz9ePSE6JHt9KCl8W1xcXVxcL1xcXFxdL2csICdcXFxcJCYnKVxuICAgICAgc2VhcmNoID0gbmV3IFJlZ0V4cChzZWFyY2gsICdnJylcbiAgICB9XG5cbiAgICAvLyBjYXN0IHRvIHN0cmluZ1xuICAgIHJlcGxhY2VtZW50ID0gcmVwbGFjZW1lbnQgIT09IHVuZGVmaW5lZCAmJiByZXBsYWNlbWVudCAhPT0gbnVsbCA/IHJlcGxhY2VtZW50ICsgJycgOiAnJ1xuXG4gICAgcmVwbGFjZW1lbnQgPSByZXBsYWNlbWVudC5yZXBsYWNlKC9bXFxyfFxcbl0rL2csIFwiXFxuXCIpXG5cbiAgICB0aGlzLnN2ZyA9IHRoaXMuc3ZnLnJlcGxhY2Uoc2VhcmNoLCByZXBsYWNlbWVudClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBhZGp1c3RUZXh0KHNlbGVjdG9yLCB0ZXh0TGVuZ3RoID0gbnVsbCwgdGV4dEFuY2hvciA9ICdzdGFydCcpIHtcbiAgICB0aGlzLmFkanVzdFRleHRRdWVyaWVzLnB1c2goe3NlbGVjdG9yLCB0ZXh0TGVuZ3RoLCB0ZXh0QW5jaG9yfSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBhZGp1c3RUZXh0YXJlYShzZWxlY3Rvciwgd2lkdGgsIGhlaWdodCwgbGluZUhlaWdodCA9IDEuMiwgcGFkZGluZ1ggPSAwLjUsIHBhZGRpbmdZID0gMC41LCBub3dyYXAgPSBmYWxzZSkge1xuICAgIGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcodGhpcy5zdmcsICd0ZXh0L2h0bWwnKVxuICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgY29uc3QgdGV4dFN2ZyA9IHRleHRFbGVtZW50Lm91dGVySFRNTFxuICAgIC8vIFNWR0VsZW1lbnQgZG9lc24ndCBoYXZlIGlubmVyVGV4dFxuICAgIC8vIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NWR0VsZW1lbnRcbiAgICBjb25zdCB0ZXh0Q29udGVudCA9IHRleHRFbGVtZW50LmlubmVySFRNTC5yZXBsYWNlKG5ldyBSZWdFeHAoJ148dHNwYW5bXj5dKj4oKC58XFxcXHMpKik8L3RzcGFuPiQnKSwgJyQxJylcblxuICAgIGNvbnN0IGFkanVzdGVkVGV4dFN2ZyA9IGFkanVzdFRleHRhcmVhKHRleHRTdmcsIHRleHRDb250ZW50LCB3aWR0aCwgaGVpZ2h0LCBsaW5lSGVpZ2h0LCBwYWRkaW5nWCwgcGFkZGluZ1ksIG5vd3JhcClcblxuICAgIHRoaXMucmVwbGFjZSh0ZXh0U3ZnLCBhZGp1c3RlZFRleHRTdmcpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgYXBwbHkoKSB7XG4gICAgaWYgKHRoaXMuc3ZnICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpLm91dGVySFRNTCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKS5vdXRlckhUTUwgPSB0aGlzLnN2Z1xuICAgIH1cblxuICAgIHRoaXMuYWRqdXN0VGV4dFF1ZXJpZXMuZm9yRWFjaChxdWVyeSA9PiB7XG4gICAgICBhZGp1c3RUZXh0KHF1ZXJ5LnNlbGVjdG9yLCB7XG4gICAgICAgIHRleHRMZW5ndGg6IHF1ZXJ5LnRleHRMZW5ndGgsXG4gICAgICAgICd0ZXh0LWFuY2hvcic6IHF1ZXJ5LnRleHRBbmNob3IsXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBpbml0aWFsaXplXG4gICAgdGhpcy5zdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpLm91dGVySFRNTFxuICAgIHRoaXMuYWRqdXN0VGV4dFF1ZXJpZXMgPSBbXVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCAodGV4dFN2ZykgPT4ge1xuICBsZXQgZml4ZWRUZXh0U3ZnID0gdGV4dFN2Z1xuXG4gIC8vIGlmIDx0ZXh0PiBkb2Vzbid0IGhhdmUgdHJhbnNmb3JtPVwidHJhbnNsYXRlKHggeSlcIiwganVzdCBhZGQgaXQgd2l0aCAoMCAwKVxuICBpZiAoIWZpeGVkVGV4dFN2Zy5tYXRjaCgvPHRleHQgW14+XSp0cmFuc2Zvcm09XCJbXlwiXSpcIltePl0qPi8pKSB7XG4gICAgZml4ZWRUZXh0U3ZnID0gZml4ZWRUZXh0U3ZnLnJlcGxhY2UobmV3IFJlZ0V4cCgnPHRleHQoW14+XSopPicpLCAnPHRleHQkMSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAwKVwiPicpXG4gIH1cblxuICAvLyBpZiA8dHNwYW4+IGRvZXNuJ3QgaGF2ZSB4PVwiXCIgeT1cIlwiLCBqdXN0IGFkZCBpdCB3aXRoIHg9XCIwXCIgeT1cIjBcIlxuICBpZiAoIWZpeGVkVGV4dFN2Zy5tYXRjaCgvPHRzcGFuIFtePl0qeD1cIlteXCJdKlwiW14+XSo+LykpIHtcbiAgICBmaXhlZFRleHRTdmcgPSBmaXhlZFRleHRTdmcucmVwbGFjZShuZXcgUmVnRXhwKCc8dHNwYW4oW14+XSopPicpLCAnPHRzcGFuJDEgeD1cIjBcIj4nKVxuICB9XG4gIGlmICghZml4ZWRUZXh0U3ZnLm1hdGNoKC88dHNwYW4gW14+XSp5PVwiW15cIl0qXCJbXj5dKj4vKSkge1xuICAgIGZpeGVkVGV4dFN2ZyA9IGZpeGVkVGV4dFN2Zy5yZXBsYWNlKG5ldyBSZWdFeHAoJzx0c3BhbihbXj5dKik+JyksICc8dHNwYW4kMSB5PVwiMFwiPicpXG4gIH1cblxuICAvLyBjb3B5IHggZnJvbSA8dHNwYW4geD1cIlwiPiBhbmQgYWRkIGl0IHRvIDx0ZXh0IHRyYW5zZm9ybT1cInRyYW5zbGF0ZSh4IHkpXCI+XG4gIGZpeGVkVGV4dFN2ZyA9IGZpeGVkVGV4dFN2Zy5yZXBsYWNlKG5ldyBSZWdFeHAoJzx0ZXh0KFtcXFxcc1xcXFxTXSspdHJhbnNmb3JtPVwidHJhbnNsYXRlXFxcXCgoXFxcXFMrKVxcXFxzKyguKylcXFxcKVwiKFtePl0qKT5cXHMqPHRzcGFuKFtePl0rKXg9XCIoW15cIl0rKVwiJyksICc8dGV4dCQxdHJhbnNmb3JtPVwidHJhbnNsYXRlKCMjIyQyKyQ2IyMjICQzKVwiJDQ+PHRzcGFuJDV4PVwiMFwiJylcbiAgY29uc3QgZXhwcmVzc2lvbjEgPSBmaXhlZFRleHRTdmcubWF0Y2gobmV3IFJlZ0V4cCgnPHRleHRbXFxcXHNcXFxcU10rdHJhbnNmb3JtPVwidHJhbnNsYXRlXFxcXCgjIyMoLispIyMjLitcXFxcKVwiJykpWzFdXG4gIGNvbnN0IHggPSBleHByZXNzaW9uMS5tYXRjaCgvXFxkK1xcK1xcZCsvKSA/IGV2YWwoZXhwcmVzc2lvbjEpIDogMFxuICBmaXhlZFRleHRTdmcgPSBmaXhlZFRleHRTdmcucmVwbGFjZShuZXcgUmVnRXhwKCc8dGV4dChbXFxcXHNcXFxcU10rKXRyYW5zZm9ybT1cInRyYW5zbGF0ZVxcXFwoIyMjLisjIyMoLispXFxcXClcIicpLCBgPHRleHQkMXRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke3h9JDIpXCJgKVxuXG4gIC8vIGNvcHkgeSBmcm9tIDx0c3BhbiB5PVwiXCI+IGFuZCBhZGQgaXQgdG8gPHRleHQgdHJhbnNmb3JtPVwidHJhbnNsYXRlKHggeSlcIj5cbiAgZml4ZWRUZXh0U3ZnID0gZml4ZWRUZXh0U3ZnLnJlcGxhY2UobmV3IFJlZ0V4cCgnPHRleHQoW1xcXFxzXFxcXFNdKyl0cmFuc2Zvcm09XCJ0cmFuc2xhdGVcXFxcKCguKylcXFxccysoXFxcXFMrKVxcXFwpXCIoW14+XSopPlxccyo8dHNwYW4oW14+XSspeT1cIihbXlwiXSspXCInKSwgJzx0ZXh0JDF0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJDIgIyMjJDMrJDYjIyMpXCIkND48dHNwYW4kNXk9XCIwXCInKVxuICBjb25zdCBleHByZXNzaW9uMiA9IGZpeGVkVGV4dFN2Zy5tYXRjaChuZXcgUmVnRXhwKCc8dGV4dFtcXFxcc1xcXFxTXSt0cmFuc2Zvcm09XCJ0cmFuc2xhdGVcXFxcKC4rIyMjKC4rKSMjI1xcXFwpXCInKSlbMV1cbiAgY29uc3QgeSA9IGV4cHJlc3Npb24yLm1hdGNoKC9cXGQrXFwrXFxkKy8pID8gZXZhbChleHByZXNzaW9uMikgOiAwXG4gIGZpeGVkVGV4dFN2ZyA9IGZpeGVkVGV4dFN2Zy5yZXBsYWNlKG5ldyBSZWdFeHAoJzx0ZXh0KFtcXFxcc1xcXFxTXSspdHJhbnNmb3JtPVwidHJhbnNsYXRlXFxcXCgoLispIyMjLisjIyNcXFxcKVwiJyksIGA8dGV4dCQxdHJhbnNmb3JtPVwidHJhbnNsYXRlKCQyJHt5fSlcImApXG5cbiAgcmV0dXJuIGZpeGVkVGV4dFN2Z1xufVxuIiwiaW1wb3J0IHN1YlN0cmluZ0J5V2lkdGggZnJvbSAnLi9zdWItc3RyaW5nLWJ5LXdpZHRoJ1xuXG5leHBvcnQgZGVmYXVsdCAoc3RyaW5nLCB3aWR0aCkgPT4ge1xuICBsZXQgc3BsaXRzID0gW11cblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGxldCBzcGxpdCA9IHN1YlN0cmluZ0J5V2lkdGgoc3RyaW5nLCAwLCB3aWR0aClcbiAgICBzcGxpdHMucHVzaChzcGxpdClcbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShzcGxpdCwgJycpXG4gICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNwbGl0c1xufVxuIiwiaW1wb3J0IHN0cmluZ1dpZHRoIGZyb20gJ3N0cmluZy13aWR0aCdcblxuZXhwb3J0IGRlZmF1bHQgKHN0cmluZywgc3RhcnQsIHdpZHRoKSA9PiB7XG4gIGxldCBjdXJyZW50V2lkdGggPSAwXG4gIGxldCBzdWJTdHJpbmcgPSAnJ1xuXG4gIGZvciAobGV0IGkgPSBzdGFydDsgOyBpKyspIHtcbiAgICBjb25zdCBjaGFyID0gc3RyaW5nLnN1YnN0cihpLCAxKVxuICAgIGN1cnJlbnRXaWR0aCArPSBzdHJpbmdXaWR0aChjaGFyKVxuICAgIGlmIChjdXJyZW50V2lkdGggPD0gd2lkdGggJiYgaSA8PSBzdHJpbmcubGVuZ3RoKSB7XG4gICAgICBzdWJTdHJpbmcgKz0gY2hhclxuICAgIH1cbiAgICBpZiAoY3VycmVudFdpZHRoID49IHdpZHRoIHx8IGkgPj0gc3RyaW5nLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHN1YlN0cmluZ1xuICAgIH1cbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAvLyBodHRwczovL210aHMuYmUvZW1vamlcbiAgcmV0dXJuIC9cXHVEODNDXFx1REZGNFxcdURCNDBcXHVEQzY3XFx1REI0MFxcdURDNjIoPzpcXHVEQjQwXFx1REM2NVxcdURCNDBcXHVEQzZFXFx1REI0MFxcdURDNjd8XFx1REI0MFxcdURDNzNcXHVEQjQwXFx1REM2M1xcdURCNDBcXHVEQzc0fFxcdURCNDBcXHVEQzc3XFx1REI0MFxcdURDNkNcXHVEQjQwXFx1REM3MylcXHVEQjQwXFx1REM3RnxcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NcXHVERkZDXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4XFx1RDgzQ1xcdURGRkJ8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZGXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkVdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkVcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRF0pfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGRFxcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQlxcdURGRkNdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1MjAwRCg/OlxcdTI3NjRcXHVGRTBGXFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRFxcdURDNjh8KD86XFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzY2XFx1MjAwRFxcdUQ4M0RcXHVEQzY2fFxcdUQ4M0RcXHVEQzY3XFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2NlxcdURDNjddKSl8XFx1RDgzRFxcdURDNjZcXHUyMDBEXFx1RDgzRFxcdURDNjZ8XFx1RDgzRFxcdURDNjdcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pfCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSl8W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGfFxcdUQ4M0RbXFx1REM2NlxcdURDNjddfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXwoPzpcXHVEODNDXFx1REZGQlxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGRlxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGRVxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGRFxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGQ1xcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XSlcXHVGRTBGfFxcdUQ4M0NcXHVERkZCXFx1MjAwRCg/OlxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfCg/OlxcdUQ4M0VcXHVEREQxXFx1RDgzQ1xcdURGRkJcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDF8XFx1RDgzRFxcdURDNjlcXHVEODNDXFx1REZGQ1xcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OSlcXHVEODNDXFx1REZGQnxcXHVEODNFXFx1REREMSg/OlxcdUQ4M0NcXHVERkZGXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXxcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDEpfCg/OlxcdUQ4M0VcXHVEREQxXFx1RDgzQ1xcdURGRkVcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDF8XFx1RDgzRFxcdURDNjlcXHVEODNDXFx1REZGRlxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMEQoPzpcXHVEODNEW1xcdURDNjhcXHVEQzY5XSkpKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkVdKXwoPzpcXHVEODNFXFx1REREMVxcdUQ4M0NcXHVERkZDXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1xcdURGRkRcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjkpKD86XFx1RDgzQ1tcXHVERkZCXFx1REZGQ10pfFxcdUQ4M0RcXHVEQzY5KD86XFx1RDgzQ1xcdURGRkVcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkNcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkJcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkMtXFx1REZGRl0pfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGRFxcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQlxcdURGRkNcXHVERkZFXFx1REZGRl0pfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHUyMDBEKD86XFx1Mjc2NFxcdUZFMEZcXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pfFxcdUQ4M0RbXFx1REM2OFxcdURDNjldKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkZcXHUyMDBEKD86XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pKXxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2OVxcdTIwMEQoPzpcXHVEODNEXFx1REM2NlxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2N1xcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSkpfCg/OlxcdUQ4M0VcXHVEREQxXFx1RDgzQ1xcdURGRkRcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDF8XFx1RDgzRFxcdURDNjlcXHVEODNDXFx1REZGRVxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRF0pfFxcdUQ4M0RcXHVEQzY5XFx1MjAwRFxcdUQ4M0RcXHVEQzY2XFx1MjAwRFxcdUQ4M0RcXHVEQzY2fFxcdUQ4M0RcXHVEQzY5XFx1MjAwRFxcdUQ4M0RcXHVEQzY5XFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2NlxcdURDNjddKXwoPzpcXHVEODNEXFx1REM0MVxcdUZFMEZcXHUyMDBEXFx1RDgzRFxcdURERTh8XFx1RDgzRFxcdURDNjkoPzpcXHVEODNDXFx1REZGRlxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGRVxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGQ1xcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGQlxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGRFxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF0pfCg/Oig/OlxcdTI2Rjl8XFx1RDgzQ1tcXHVERkNCXFx1REZDQ118XFx1RDgzRFxcdURENzUpXFx1RkUwRnxcXHVEODNEXFx1REM2RnxcXHVEODNFW1xcdUREM0NcXHVERERFXFx1RERERl0pXFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml18KD86XFx1MjZGOXxcXHVEODNDW1xcdURGQ0JcXHVERkNDXXxcXHVEODNEXFx1REQ3NSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pXFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml18KD86XFx1RDgzQ1tcXHVERkMzXFx1REZDNFxcdURGQ0FdfFxcdUQ4M0RbXFx1REM2RVxcdURDNzFcXHVEQzczXFx1REM3N1xcdURDODFcXHVEQzgyXFx1REM4NlxcdURDODdcXHVERTQ1LVxcdURFNDdcXHVERTRCXFx1REU0RFxcdURFNEVcXHVERUEzXFx1REVCNC1cXHVERUI2XXxcXHVEODNFW1xcdUREMjZcXHVERDM3LVxcdUREMzlcXHVERDNEXFx1REQzRVxcdUREQjhcXHVEREI5XFx1RERDRC1cXHVERENGXFx1RERENi1cXHVEREREXSkoPzooPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pXFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml18XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml0pfFxcdUQ4M0NcXHVERkY0XFx1MjAwRFxcdTI2MjApXFx1RkUwRnxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2N1xcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSl8XFx1RDgzQ1xcdURGRjNcXHVGRTBGXFx1MjAwRFxcdUQ4M0NcXHVERjA4fFxcdUQ4M0RcXHVEQzE1XFx1MjAwRFxcdUQ4M0VcXHVEREJBfFxcdUQ4M0RcXHVEQzY5XFx1MjAwRFxcdUQ4M0RcXHVEQzY2fFxcdUQ4M0RcXHVEQzY5XFx1MjAwRFxcdUQ4M0RcXHVEQzY3fFxcdUQ4M0NcXHVEREZEXFx1RDgzQ1xcdURERjB8XFx1RDgzQ1xcdURERjRcXHVEODNDXFx1RERGMnxcXHVEODNDXFx1RERGNlxcdUQ4M0NcXHVEREU2fFsjXFwqMC05XVxcdUZFMEZcXHUyMEUzfFxcdUQ4M0NcXHVEREU3KD86XFx1RDgzQ1tcXHVEREU2XFx1RERFN1xcdURERTktXFx1RERFRlxcdURERjEtXFx1RERGNFxcdURERjYtXFx1RERGOVxcdURERkJcXHVEREZDXFx1RERGRVxcdURERkZdKXxcXHVEODNDXFx1RERGOSg/OlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREU5XFx1RERFQi1cXHVEREVEXFx1RERFRi1cXHVEREY0XFx1RERGN1xcdURERjlcXHVEREZCXFx1RERGQ1xcdURERkZdKXxcXHVEODNDXFx1RERFQSg/OlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBXFx1RERFQ1xcdURERURcXHVEREY3LVxcdURERkFdKXxcXHVEODNFXFx1REREMSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8XFx1RDgzQ1xcdURERjcoPzpcXHVEODNDW1xcdURERUFcXHVEREY0XFx1RERGOFxcdURERkFcXHVEREZDXSl8XFx1RDgzRFxcdURDNjkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfFxcdUQ4M0NcXHVEREYyKD86XFx1RDgzQ1tcXHVEREU2XFx1RERFOC1cXHVEREVEXFx1RERGMC1cXHVEREZGXSl8XFx1RDgzQ1xcdURERTYoPzpcXHVEODNDW1xcdURERTgtXFx1RERFQ1xcdURERUVcXHVEREYxXFx1RERGMlxcdURERjRcXHVEREY2LVxcdURERkFcXHVEREZDXFx1RERGRFxcdURERkZdKXxcXHVEODNDXFx1RERGMCg/OlxcdUQ4M0NbXFx1RERFQVxcdURERUMtXFx1RERFRVxcdURERjJcXHVEREYzXFx1RERGNVxcdURERjdcXHVEREZDXFx1RERGRVxcdURERkZdKXxcXHVEODNDXFx1RERFRCg/OlxcdUQ4M0NbXFx1RERGMFxcdURERjJcXHVEREYzXFx1RERGN1xcdURERjlcXHVEREZBXSl8XFx1RDgzQ1xcdURERTkoPzpcXHVEODNDW1xcdURERUFcXHVEREVDXFx1RERFRlxcdURERjBcXHVEREYyXFx1RERGNFxcdURERkZdKXxcXHVEODNDXFx1RERGRSg/OlxcdUQ4M0NbXFx1RERFQVxcdURERjldKXxcXHVEODNDXFx1RERFQyg/OlxcdUQ4M0NbXFx1RERFNlxcdURERTdcXHVEREU5LVxcdURERUVcXHVEREYxLVxcdURERjNcXHVEREY1LVxcdURERkFcXHVEREZDXFx1RERGRV0pfFxcdUQ4M0NcXHVEREY4KD86XFx1RDgzQ1tcXHVEREU2LVxcdURERUFcXHVEREVDLVxcdURERjRcXHVEREY3LVxcdURERjlcXHVEREZCXFx1RERGRC1cXHVEREZGXSl8XFx1RDgzQ1xcdURERUIoPzpcXHVEODNDW1xcdURERUUtXFx1RERGMFxcdURERjJcXHVEREY0XFx1RERGN10pfFxcdUQ4M0NcXHVEREY1KD86XFx1RDgzQ1tcXHVEREU2XFx1RERFQS1cXHVEREVEXFx1RERGMC1cXHVEREYzXFx1RERGNy1cXHVEREY5XFx1RERGQ1xcdURERkVdKXxcXHVEODNDXFx1RERGQig/OlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBXFx1RERFQ1xcdURERUVcXHVEREYzXFx1RERGQV0pfFxcdUQ4M0NcXHVEREYzKD86XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUEtXFx1RERFQ1xcdURERUVcXHVEREYxXFx1RERGNFxcdURERjVcXHVEREY3XFx1RERGQVxcdURERkZdKXxcXHVEODNDXFx1RERFOCg/OlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREU5XFx1RERFQi1cXHVEREVFXFx1RERGMC1cXHVEREY1XFx1RERGN1xcdURERkEtXFx1RERGRl0pfFxcdUQ4M0NcXHVEREYxKD86XFx1RDgzQ1tcXHVEREU2LVxcdURERThcXHVEREVFXFx1RERGMFxcdURERjctXFx1RERGQlxcdURERkVdKXxcXHVEODNDXFx1RERGRig/OlxcdUQ4M0NbXFx1RERFNlxcdURERjJcXHVEREZDXSl8XFx1RDgzQ1xcdURERkMoPzpcXHVEODNDW1xcdURERUJcXHVEREY4XSl8XFx1RDgzQ1xcdURERkEoPzpcXHVEODNDW1xcdURERTZcXHVEREVDXFx1RERGMlxcdURERjNcXHVEREY4XFx1RERGRVxcdURERkZdKXxcXHVEODNDXFx1RERFRSg/OlxcdUQ4M0NbXFx1RERFOC1cXHVEREVBXFx1RERGMS1cXHVEREY0XFx1RERGNi1cXHVEREY5XSl8XFx1RDgzQ1xcdURERUYoPzpcXHVEODNDW1xcdURERUFcXHVEREYyXFx1RERGNFxcdURERjVdKXwoPzpcXHVEODNDW1xcdURGQzNcXHVERkM0XFx1REZDQV18XFx1RDgzRFtcXHVEQzZFXFx1REM3MVxcdURDNzNcXHVEQzc3XFx1REM4MVxcdURDODJcXHVEQzg2XFx1REM4N1xcdURFNDUtXFx1REU0N1xcdURFNEJcXHVERTREXFx1REU0RVxcdURFQTNcXHVERUI0LVxcdURFQjZdfFxcdUQ4M0VbXFx1REQyNlxcdUREMzctXFx1REQzOVxcdUREM0RcXHVERDNFXFx1RERCOFxcdUREQjlcXHVERENELVxcdUREQ0ZcXHVEREQ2LVxcdURERERdKSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8KD86XFx1MjZGOXxcXHVEODNDW1xcdURGQ0JcXHVERkNDXXxcXHVEODNEXFx1REQ3NSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfCg/OltcXHUyNjFEXFx1MjcwQS1cXHUyNzBEXXxcXHVEODNDW1xcdURGODVcXHVERkMyXFx1REZDN118XFx1RDgzRFtcXHVEQzQyXFx1REM0M1xcdURDNDYtXFx1REM1MFxcdURDNjZcXHVEQzY3XFx1REM2Qi1cXHVEQzZEXFx1REM3MFxcdURDNzJcXHVEQzc0LVxcdURDNzZcXHVEQzc4XFx1REM3Q1xcdURDODNcXHVEQzg1XFx1RENBQVxcdURENzRcXHVERDdBXFx1REQ5MFxcdUREOTVcXHVERDk2XFx1REU0Q1xcdURFNEZcXHVERUMwXFx1REVDQ118XFx1RDgzRVtcXHVERDBGXFx1REQxOC1cXHVERDFDXFx1REQxRVxcdUREMUZcXHVERDMwLVxcdUREMzZcXHVEREI1XFx1RERCNlxcdUREQkJcXHVEREQyLVxcdURERDVdKSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8KD86W1xcdTIzMUFcXHUyMzFCXFx1MjNFOS1cXHUyM0VDXFx1MjNGMFxcdTIzRjNcXHUyNUZEXFx1MjVGRVxcdTI2MTRcXHUyNjE1XFx1MjY0OC1cXHUyNjUzXFx1MjY3RlxcdTI2OTNcXHUyNkExXFx1MjZBQVxcdTI2QUJcXHUyNkJEXFx1MjZCRVxcdTI2QzRcXHUyNkM1XFx1MjZDRVxcdTI2RDRcXHUyNkVBXFx1MjZGMlxcdTI2RjNcXHUyNkY1XFx1MjZGQVxcdTI2RkRcXHUyNzA1XFx1MjcwQVxcdTI3MEJcXHUyNzI4XFx1Mjc0Q1xcdTI3NEVcXHUyNzUzLVxcdTI3NTVcXHUyNzU3XFx1Mjc5NS1cXHUyNzk3XFx1MjdCMFxcdTI3QkZcXHUyQjFCXFx1MkIxQ1xcdTJCNTBcXHUyQjU1XXxcXHVEODNDW1xcdURDMDRcXHVEQ0NGXFx1REQ4RVxcdUREOTEtXFx1REQ5QVxcdURERTYtXFx1RERGRlxcdURFMDFcXHVERTFBXFx1REUyRlxcdURFMzItXFx1REUzNlxcdURFMzgtXFx1REUzQVxcdURFNTBcXHVERTUxXFx1REYwMC1cXHVERjIwXFx1REYyRC1cXHVERjM1XFx1REYzNy1cXHVERjdDXFx1REY3RS1cXHVERjkzXFx1REZBMC1cXHVERkNBXFx1REZDRi1cXHVERkQzXFx1REZFMC1cXHVERkYwXFx1REZGNFxcdURGRjgtXFx1REZGRl18XFx1RDgzRFtcXHVEQzAwLVxcdURDM0VcXHVEQzQwXFx1REM0Mi1cXHVEQ0ZDXFx1RENGRi1cXHVERDNEXFx1REQ0Qi1cXHVERDRFXFx1REQ1MC1cXHVERDY3XFx1REQ3QVxcdUREOTVcXHVERDk2XFx1RERBNFxcdURERkItXFx1REU0RlxcdURFODAtXFx1REVDNVxcdURFQ0NcXHVERUQwLVxcdURFRDJcXHVERUQ1XFx1REVFQlxcdURFRUNcXHVERUY0LVxcdURFRkFcXHVERkUwLVxcdURGRUJdfFxcdUQ4M0VbXFx1REQwRC1cXHVERDNBXFx1REQzQy1cXHVERDQ1XFx1REQ0Ny1cXHVERDcxXFx1REQ3My1cXHVERDc2XFx1REQ3QS1cXHVEREEyXFx1RERBNS1cXHVEREFBXFx1RERBRS1cXHVERENBXFx1RERDRC1cXHVEREZGXFx1REU3MC1cXHVERTczXFx1REU3OC1cXHVERTdBXFx1REU4MC1cXHVERTgyXFx1REU5MC1cXHVERTk1XSl8KD86WyNcXCowLTlcXHhBOVxceEFFXFx1MjAzQ1xcdTIwNDlcXHUyMTIyXFx1MjEzOVxcdTIxOTQtXFx1MjE5OVxcdTIxQTlcXHUyMUFBXFx1MjMxQVxcdTIzMUJcXHUyMzI4XFx1MjNDRlxcdTIzRTktXFx1MjNGM1xcdTIzRjgtXFx1MjNGQVxcdTI0QzJcXHUyNUFBXFx1MjVBQlxcdTI1QjZcXHUyNUMwXFx1MjVGQi1cXHUyNUZFXFx1MjYwMC1cXHUyNjA0XFx1MjYwRVxcdTI2MTFcXHUyNjE0XFx1MjYxNVxcdTI2MThcXHUyNjFEXFx1MjYyMFxcdTI2MjJcXHUyNjIzXFx1MjYyNlxcdTI2MkFcXHUyNjJFXFx1MjYyRlxcdTI2MzgtXFx1MjYzQVxcdTI2NDBcXHUyNjQyXFx1MjY0OC1cXHUyNjUzXFx1MjY1RlxcdTI2NjBcXHUyNjYzXFx1MjY2NVxcdTI2NjZcXHUyNjY4XFx1MjY3QlxcdTI2N0VcXHUyNjdGXFx1MjY5Mi1cXHUyNjk3XFx1MjY5OVxcdTI2OUJcXHUyNjlDXFx1MjZBMFxcdTI2QTFcXHUyNkFBXFx1MjZBQlxcdTI2QjBcXHUyNkIxXFx1MjZCRFxcdTI2QkVcXHUyNkM0XFx1MjZDNVxcdTI2QzhcXHUyNkNFXFx1MjZDRlxcdTI2RDFcXHUyNkQzXFx1MjZENFxcdTI2RTlcXHUyNkVBXFx1MjZGMC1cXHUyNkY1XFx1MjZGNy1cXHUyNkZBXFx1MjZGRFxcdTI3MDJcXHUyNzA1XFx1MjcwOC1cXHUyNzBEXFx1MjcwRlxcdTI3MTJcXHUyNzE0XFx1MjcxNlxcdTI3MURcXHUyNzIxXFx1MjcyOFxcdTI3MzNcXHUyNzM0XFx1Mjc0NFxcdTI3NDdcXHUyNzRDXFx1Mjc0RVxcdTI3NTMtXFx1Mjc1NVxcdTI3NTdcXHUyNzYzXFx1Mjc2NFxcdTI3OTUtXFx1Mjc5N1xcdTI3QTFcXHUyN0IwXFx1MjdCRlxcdTI5MzRcXHUyOTM1XFx1MkIwNS1cXHUyQjA3XFx1MkIxQlxcdTJCMUNcXHUyQjUwXFx1MkI1NVxcdTMwMzBcXHUzMDNEXFx1MzI5N1xcdTMyOTldfFxcdUQ4M0NbXFx1REMwNFxcdURDQ0ZcXHVERDcwXFx1REQ3MVxcdUREN0VcXHVERDdGXFx1REQ4RVxcdUREOTEtXFx1REQ5QVxcdURERTYtXFx1RERGRlxcdURFMDFcXHVERTAyXFx1REUxQVxcdURFMkZcXHVERTMyLVxcdURFM0FcXHVERTUwXFx1REU1MVxcdURGMDAtXFx1REYyMVxcdURGMjQtXFx1REY5M1xcdURGOTZcXHVERjk3XFx1REY5OS1cXHVERjlCXFx1REY5RS1cXHVERkYwXFx1REZGMy1cXHVERkY1XFx1REZGNy1cXHVERkZGXXxcXHVEODNEW1xcdURDMDAtXFx1RENGRFxcdURDRkYtXFx1REQzRFxcdURENDktXFx1REQ0RVxcdURENTAtXFx1REQ2N1xcdURENkZcXHVERDcwXFx1REQ3My1cXHVERDdBXFx1REQ4N1xcdUREOEEtXFx1REQ4RFxcdUREOTBcXHVERDk1XFx1REQ5NlxcdUREQTRcXHVEREE1XFx1RERBOFxcdUREQjFcXHVEREIyXFx1RERCQ1xcdUREQzItXFx1RERDNFxcdURERDEtXFx1REREM1xcdUREREMtXFx1RERERVxcdURERTFcXHVEREUzXFx1RERFOFxcdURERUZcXHVEREYzXFx1RERGQS1cXHVERTRGXFx1REU4MC1cXHVERUM1XFx1REVDQi1cXHVERUQyXFx1REVENVxcdURFRTAtXFx1REVFNVxcdURFRTlcXHVERUVCXFx1REVFQ1xcdURFRjBcXHVERUYzLVxcdURFRkFcXHVERkUwLVxcdURGRUJdfFxcdUQ4M0VbXFx1REQwRC1cXHVERDNBXFx1REQzQy1cXHVERDQ1XFx1REQ0Ny1cXHVERDcxXFx1REQ3My1cXHVERDc2XFx1REQ3QS1cXHVEREEyXFx1RERBNS1cXHVEREFBXFx1RERBRS1cXHVERENBXFx1RERDRC1cXHVEREZGXFx1REU3MC1cXHVERTczXFx1REU3OC1cXHVERTdBXFx1REU4MC1cXHVERTgyXFx1REU5MC1cXHVERTk1XSlcXHVGRTBGfCg/OltcXHUyNjFEXFx1MjZGOVxcdTI3MEEtXFx1MjcwRF18XFx1RDgzQ1tcXHVERjg1XFx1REZDMi1cXHVERkM0XFx1REZDN1xcdURGQ0EtXFx1REZDQ118XFx1RDgzRFtcXHVEQzQyXFx1REM0M1xcdURDNDYtXFx1REM1MFxcdURDNjYtXFx1REM3OFxcdURDN0NcXHVEQzgxLVxcdURDODNcXHVEQzg1LVxcdURDODdcXHVEQzhGXFx1REM5MVxcdURDQUFcXHVERDc0XFx1REQ3NVxcdUREN0FcXHVERDkwXFx1REQ5NVxcdUREOTZcXHVERTQ1LVxcdURFNDdcXHVERTRCLVxcdURFNEZcXHVERUEzXFx1REVCNC1cXHVERUI2XFx1REVDMFxcdURFQ0NdfFxcdUQ4M0VbXFx1REQwRlxcdUREMTgtXFx1REQxRlxcdUREMjZcXHVERDMwLVxcdUREMzlcXHVERDNDLVxcdUREM0VcXHVEREI1XFx1RERCNlxcdUREQjhcXHVEREI5XFx1RERCQlxcdUREQ0QtXFx1RERDRlxcdURERDEtXFx1RERERF0pL2c7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qgc3RyaXBBbnNpID0gcmVxdWlyZSgnc3RyaXAtYW5zaScpO1xuY29uc3QgaXNGdWxsd2lkdGhDb2RlUG9pbnQgPSByZXF1aXJlKCdpcy1mdWxsd2lkdGgtY29kZS1wb2ludCcpO1xuY29uc3QgZW1vamlSZWdleCA9IHJlcXVpcmUoJ2Vtb2ppLXJlZ2V4Jyk7XG5cbmNvbnN0IHN0cmluZ1dpZHRoID0gc3RyaW5nID0+IHtcblx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnIHx8IHN0cmluZy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHN0cmluZyA9IHN0cmlwQW5zaShzdHJpbmcpO1xuXG5cdGlmIChzdHJpbmcubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShlbW9qaVJlZ2V4KCksICcgICcpO1xuXG5cdGxldCB3aWR0aCA9IDA7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBjb2RlID0gc3RyaW5nLmNvZGVQb2ludEF0KGkpO1xuXG5cdFx0Ly8gSWdub3JlIGNvbnRyb2wgY2hhcmFjdGVyc1xuXHRcdGlmIChjb2RlIDw9IDB4MUYgfHwgKGNvZGUgPj0gMHg3RiAmJiBjb2RlIDw9IDB4OUYpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBJZ25vcmUgY29tYmluaW5nIGNoYXJhY3RlcnNcblx0XHRpZiAoY29kZSA+PSAweDMwMCAmJiBjb2RlIDw9IDB4MzZGKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBTdXJyb2dhdGVzXG5cdFx0aWYgKGNvZGUgPiAweEZGRkYpIHtcblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHR3aWR0aCArPSBpc0Z1bGx3aWR0aENvZGVQb2ludChjb2RlKSA/IDIgOiAxO1xuXHR9XG5cblx0cmV0dXJuIHdpZHRoO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdXaWR0aDtcbi8vIFRPRE86IHJlbW92ZSB0aGlzIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb25cbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBzdHJpbmdXaWR0aDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHlvZGEgKi9cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgaXNGdWxsd2lkdGhDb2RlUG9pbnQgPSBjb2RlUG9pbnQgPT4ge1xuXHRpZiAoTnVtYmVyLmlzTmFOKGNvZGVQb2ludCkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBDb2RlIHBvaW50cyBhcmUgZGVyaXZlZCBmcm9tOlxuXHQvLyBodHRwOi8vd3d3LnVuaXgub3JnL1B1YmxpYy9VTklEQVRBL0Vhc3RBc2lhbldpZHRoLnR4dFxuXHRpZiAoXG5cdFx0Y29kZVBvaW50ID49IDB4MTEwMCAmJiAoXG5cdFx0XHRjb2RlUG9pbnQgPD0gMHgxMTVGIHx8IC8vIEhhbmd1bCBKYW1vXG5cdFx0XHRjb2RlUG9pbnQgPT09IDB4MjMyOSB8fCAvLyBMRUZULVBPSU5USU5HIEFOR0xFIEJSQUNLRVRcblx0XHRcdGNvZGVQb2ludCA9PT0gMHgyMzJBIHx8IC8vIFJJR0hULVBPSU5USU5HIEFOR0xFIEJSQUNLRVRcblx0XHRcdC8vIENKSyBSYWRpY2FscyBTdXBwbGVtZW50IC4uIEVuY2xvc2VkIENKSyBMZXR0ZXJzIGFuZCBNb250aHNcblx0XHRcdCgweDJFODAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweDMyNDcgJiYgY29kZVBvaW50ICE9PSAweDMwM0YpIHx8XG5cdFx0XHQvLyBFbmNsb3NlZCBDSksgTGV0dGVycyBhbmQgTW9udGhzIC4uIENKSyBVbmlmaWVkIElkZW9ncmFwaHMgRXh0ZW5zaW9uIEFcblx0XHRcdCgweDMyNTAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweDREQkYpIHx8XG5cdFx0XHQvLyBDSksgVW5pZmllZCBJZGVvZ3JhcGhzIC4uIFlpIFJhZGljYWxzXG5cdFx0XHQoMHg0RTAwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhBNEM2KSB8fFxuXHRcdFx0Ly8gSGFuZ3VsIEphbW8gRXh0ZW5kZWQtQVxuXHRcdFx0KDB4QTk2MCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4QTk3QykgfHxcblx0XHRcdC8vIEhhbmd1bCBTeWxsYWJsZXNcblx0XHRcdCgweEFDMDAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEQ3QTMpIHx8XG5cdFx0XHQvLyBDSksgQ29tcGF0aWJpbGl0eSBJZGVvZ3JhcGhzXG5cdFx0XHQoMHhGOTAwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhGQUZGKSB8fFxuXHRcdFx0Ly8gVmVydGljYWwgRm9ybXNcblx0XHRcdCgweEZFMTAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEZFMTkpIHx8XG5cdFx0XHQvLyBDSksgQ29tcGF0aWJpbGl0eSBGb3JtcyAuLiBTbWFsbCBGb3JtIFZhcmlhbnRzXG5cdFx0XHQoMHhGRTMwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhGRTZCKSB8fFxuXHRcdFx0Ly8gSGFsZndpZHRoIGFuZCBGdWxsd2lkdGggRm9ybXNcblx0XHRcdCgweEZGMDEgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEZGNjApIHx8XG5cdFx0XHQoMHhGRkUwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhGRkU2KSB8fFxuXHRcdFx0Ly8gS2FuYSBTdXBwbGVtZW50XG5cdFx0XHQoMHgxQjAwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4MUIwMDEpIHx8XG5cdFx0XHQvLyBFbmNsb3NlZCBJZGVvZ3JhcGhpYyBTdXBwbGVtZW50XG5cdFx0XHQoMHgxRjIwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4MUYyNTEpIHx8XG5cdFx0XHQvLyBDSksgVW5pZmllZCBJZGVvZ3JhcGhzIEV4dGVuc2lvbiBCIC4uIFRlcnRpYXJ5IElkZW9ncmFwaGljIFBsYW5lXG5cdFx0XHQoMHgyMDAwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4M0ZGRkQpXG5cdFx0KVxuXHQpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdWxsd2lkdGhDb2RlUG9pbnQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gaXNGdWxsd2lkdGhDb2RlUG9pbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBhbnNpUmVnZXggPSByZXF1aXJlKCdhbnNpLXJlZ2V4Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nID0+IHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnID8gc3RyaW5nLnJlcGxhY2UoYW5zaVJlZ2V4KCksICcnKSA6IHN0cmluZztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoe29ubHlGaXJzdCA9IGZhbHNlfSA9IHt9KSA9PiB7XG5cdGNvbnN0IHBhdHRlcm4gPSBbXG5cdFx0J1tcXFxcdTAwMUJcXFxcdTAwOUJdW1tcXFxcXSgpIzs/XSooPzooPzooPzpbYS16QS1aXFxcXGRdKig/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSopKik/XFxcXHUwMDA3KScsXG5cdFx0Jyg/Oig/OlxcXFxkezEsNH0oPzo7XFxcXGR7MCw0fSkqKT9bXFxcXGRBLVBSLVRaY2YtbnRxcnk9Pjx+XSkpJ1xuXHRdLmpvaW4oJ3wnKTtcblxuXHRyZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLCBvbmx5Rmlyc3QgPyB1bmRlZmluZWQgOiAnZycpO1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=