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


/* harmony default export */ __webpack_exports__["default"] = (function (paperPixelRatio, selector, config) {
  var $this = document.querySelector(selector);

  if (!$this) {
    return;
  } // shrink text element to specified width


  if (!!config['textLength']) {
    // for firefox
    // @see https://developer.mozilla.org/ja/docs/Web/API/Element/clientWidth
    $this.style.display = 'block';

    if ($this.getBoundingClientRect().width * paperPixelRatio > config.textLength) {
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
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.paper svg';

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
      var _this = this;

      if (this.svg !== document.querySelector(this.selector).outerHTML) {
        document.querySelector(this.selector).outerHTML = this.svg;
      }

      this.adjustTextQueries.forEach(function (query) {
        var _$svg$getAttribute$sp, _$svg$getAttribute;

        // if viewBox is specified, Element.clientWidth and Element.getBoundingClientRect() return different values
        //   clientWidth: ???
        //   getBoundingClientRect(): pure pixel value
        // so this library uses getBoundingClientRect() and pre-calculated ratio to specify the width of some elements
        var $svg = document.querySelector(_this.selector);
        var viewBoxWidth = (_$svg$getAttribute$sp = (_$svg$getAttribute = $svg.getAttribute('viewBox')) === null || _$svg$getAttribute === void 0 ? void 0 : _$svg$getAttribute.split(/ +/)[2]) !== null && _$svg$getAttribute$sp !== void 0 ? _$svg$getAttribute$sp : null;
        var paperPixelRatio = viewBoxWidth ? parseFloat(viewBoxWidth) / $svg.getBoundingClientRect().width : 1;
        Object(_adjust_text__WEBPACK_IMPORTED_MODULE_0__["default"])(paperPixelRatio, query.selector, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdmdQYXBlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9qcy9zcmMvYWRqdXN0LXRleHQuanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9qcy9zcmMvYWRqdXN0LXRleHRhcmVhLmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vanMvc3JjL3N2Zy1wYXBlci5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L2ZpeC10ZXh0LXRyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L3NwbGl0LXN0cmluZy1ieS13aWR0aC5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L3N1Yi1zdHJpbmctYnktd2lkdGguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvZW1vamktcmVnZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvc3RyaW5nLXdpZHRoL2luZGV4LmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vbm9kZV9tb2R1bGVzL3N0cmluZy13aWR0aC9ub2RlX21vZHVsZXMvaXMtZnVsbHdpZHRoLWNvZGUtcG9pbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvc3RyaXAtYW5zaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL25vZGVfbW9kdWxlcy9zdHJpcC1hbnNpL25vZGVfbW9kdWxlcy9hbnNpLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vc2Nzcy9zdmctcGFwZXIuc2Nzcz9mOWQyIl0sIm5hbWVzIjpbInBhcGVyUGl4ZWxSYXRpbyIsInNlbGVjdG9yIiwiY29uZmlnIiwiJHRoaXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsInRleHRMZW5ndGgiLCJzZXRBdHRyaWJ1dGUiLCJ3IiwicGFyc2VGbG9hdCIsIngiLCJ5IiwiZ2V0QXR0cmlidXRlIiwibWF0Y2giLCJ0ZXh0U3ZnIiwidGV4dENvbnRlbnQiLCJoZWlnaHQiLCJsaW5lSGVpZ2h0IiwicGFkZGluZ1giLCJwYWRkaW5nWSIsIm5vd3JhcCIsIlJlZ0V4cCIsImNvbnNvbGUiLCJlcnJvciIsIm9yaWdpbmFsRm9udFNpemUiLCJwYXJzZUludCIsImZvbnRTaXplIiwicGh5c2ljYWxMaW5lcyIsInNwbGl0IiwibG9naWNhbExpbmVzIiwibWF4Um93cyIsIk1hdGgiLCJmbG9vciIsIm1heENvbHVtbnMiLCJmb3JFYWNoIiwibGluZSIsImNvbmNhdCIsInNwbGl0U3RyaW5nQnlXaWR0aCIsImxlbmd0aCIsImFkanVzdFkiLCJhZGp1c3RlZFRleHRTdmciLCJmaXhUZXh0VHJhbnNmb3JtIiwicmVwbGFjZSIsInRzcGFuIiwiaSIsIlN2Z1BhcGVyIiwiRXJyb3IiLCJzdmciLCJvdXRlckhUTUwiLCJhZGp1c3RUZXh0UXVlcmllcyIsInNlYXJjaCIsInJlcGxhY2VtZW50Iiwic291cmNlIiwiZmxhZ3MiLCJ1bmRlZmluZWQiLCJ0ZXh0QW5jaG9yIiwicHVzaCIsImRvYyIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInRleHRFbGVtZW50IiwiaW5uZXJIVE1MIiwiYWRqdXN0VGV4dGFyZWEiLCJxdWVyeSIsIiRzdmciLCJ2aWV3Qm94V2lkdGgiLCJhZGp1c3RUZXh0IiwiZml4ZWRUZXh0U3ZnIiwiZXhwcmVzc2lvbjEiLCJldmFsIiwiZXhwcmVzc2lvbjIiLCJzdHJpbmciLCJzcGxpdHMiLCJzdWJTdHJpbmdCeVdpZHRoIiwic3RhcnQiLCJjdXJyZW50V2lkdGgiLCJzdWJTdHJpbmciLCJjaGFyIiwic3Vic3RyIiwic3RyaW5nV2lkdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwic3RyaXBBbnNpIiwicmVxdWlyZSIsImlzRnVsbHdpZHRoQ29kZVBvaW50IiwiZW1vamlSZWdleCIsImNvZGUiLCJjb2RlUG9pbnRBdCIsImNvZGVQb2ludCIsIk51bWJlciIsImlzTmFOIiwiYW5zaVJlZ2V4Iiwib25seUZpcnN0IiwicGF0dGVybiIsImpvaW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7O0FBRWUseUVBQUNBLGVBQUQsRUFBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUF1QztBQUNwRCxNQUFNQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkosUUFBdkIsQ0FBZDs7QUFFQSxNQUFJLENBQUNFLEtBQUwsRUFBWTtBQUNWO0FBQ0QsR0FMbUQsQ0FPcEQ7OztBQUNBLE1B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LE9BQU8sR0FBRyxDQUNmLDZGQURlLEVBRWYsMERBRmUsRUFHZEMsSUFIYyxDQUdULEdBSFMsQ0FBaEI7QUFLQSxTQUFPLElBQUl6RSxNQUFKLENBQVd3RSxPQUFYLEVBQW9CRCxTQUFTLEdBQUd0QyxTQUFILEdBQWUsR0FBNUMsQ0FBUDtBQUNBLENBUEQsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQSIsImZpbGUiOiJzdmctcGFwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdmdQYXBlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTdmdQYXBlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydCBkZWZhdWx0IChwYXBlclBpeGVsUmF0aW8sIHNlbGVjdG9yLCBjb25maWcpID0+IHtcbiAgY29uc3QgJHRoaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuXG4gIGlmICghJHRoaXMpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIHNocmluayB0ZXh0IGVsZW1lbnQgdG8gc3BlY2lmaWVkIHdpZHRoXG4gIGlmICghIWNvbmZpZ1sndGV4dExlbmd0aCddKSB7XG4gICAgLy8gZm9yIGZpcmVmb3hcbiAgICAvLyBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2phL2RvY3MvV2ViL0FQSS9FbGVtZW50L2NsaWVudFdpZHRoXG4gICAgJHRoaXMuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcblxuICAgIGlmICgkdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAqIHBhcGVyUGl4ZWxSYXRpbyA+IGNvbmZpZy50ZXh0TGVuZ3RoKSB7XG4gICAgICAkdGhpcy5xdWVyeVNlbGVjdG9yKCd0c3BhbicpLnNldEF0dHJpYnV0ZSgndGV4dExlbmd0aCcsIGNvbmZpZy50ZXh0TGVuZ3RoKVxuICAgICAgJHRoaXMucXVlcnlTZWxlY3RvcigndHNwYW4nKS5zZXRBdHRyaWJ1dGUoJ2xlbmd0aEFkanVzdCcsICdzcGFjaW5nQW5kR2x5cGhzJylcblxuICAgICAgLy8gZm9yIGZpcmVmb3hcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODkwNjkyXG4gICAgICAkdGhpcy5zZXRBdHRyaWJ1dGUoJ3RleHRMZW5ndGgnLCBjb25maWcudGV4dExlbmd0aClcbiAgICAgICR0aGlzLnNldEF0dHJpYnV0ZSgnbGVuZ3RoQWRqdXN0JywgJ3NwYWNpbmdBbmRHbHlwaHMnKVxuICAgIH1cbiAgfVxuXG4gIC8vIGFsaWdubWVudFxuICBpZiAoISFjb25maWdbJ3RleHQtYW5jaG9yJ10gJiYgY29uZmlnWyd0ZXh0LWFuY2hvciddICE9PSAnc3RhcnQnKSB7XG4gICAgY29uc3QgdyA9IHBhcnNlRmxvYXQoY29uZmlnWyd0ZXh0TGVuZ3RoJ10pXG4gICAgbGV0IHggPSAwXG4gICAgbGV0IHkgPSAwXG4gICAgaWYgKCR0aGlzLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJykpIHtcbiAgICAgIHggPSBwYXJzZUZsb2F0KCR0aGlzLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJykubWF0Y2goL3RyYW5zbGF0ZVxcKChcXFMrKSAuK1xcKS8pWzFdKVxuICAgICAgeSA9IHBhcnNlRmxvYXQoJHRoaXMuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKS5tYXRjaCgvdHJhbnNsYXRlXFwoXFxTKyAoLispXFwpLylbMV0pXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZ1sndGV4dC1hbmNob3InXSA9PT0gJ21pZGRsZScpIHtcbiAgICAgICR0aGlzLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3ggKyAodyAvIDIpfSAke3l9KWApXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZ1sndGV4dC1hbmNob3InXSA9PT0gJ2VuZCcpIHtcbiAgICAgICR0aGlzLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3ggKyB3fSAke3l9KWApXG4gICAgfVxuXG4gICAgJHRoaXMuc2V0QXR0cmlidXRlKCd0ZXh0LWFuY2hvcicsIGNvbmZpZ1sndGV4dC1hbmNob3InXSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBzcGxpdFN0cmluZ0J5V2lkdGggZnJvbSAnLi91dGlsaXR5L3NwbGl0LXN0cmluZy1ieS13aWR0aCdcbmltcG9ydCBmaXhUZXh0VHJhbnNmb3JtIGZyb20gJy4vdXRpbGl0eS9maXgtdGV4dC10cmFuc2Zvcm0nXG5cbmV4cG9ydCBkZWZhdWx0ICh0ZXh0U3ZnLCB0ZXh0Q29udGVudCwgd2lkdGgsIGhlaWdodCwgbGluZUhlaWdodCA9IDEuMiwgcGFkZGluZ1ggPSAwLjUsIHBhZGRpbmdZID0gMC41LCBub3dyYXAgPSBmYWxzZSkgPT4ge1xuICBpZiAoIXRleHRTdmcubWF0Y2gobmV3IFJlZ0V4cCgnPHRleHQgW14+XSpmb250LXNpemU9XCJcXFxcZCtcIltePl0qPjx0c3BhbiggW14+XSo+fD4pW148Pl0qPC90c3Bhbj48L3RleHQ+JykpKSB7XG4gICAgY29uc29sZS5lcnJvcignSW52YWxpZCBzdmcgc3RyaW5nIG9mIHRleHQgZWxlbWVudCcsIHRleHRTdmcpXG4gICAgcmV0dXJuIHRleHRTdmdcbiAgfVxuXG4gIGNvbnN0IG9yaWdpbmFsRm9udFNpemUgPSBwYXJzZUludCh0ZXh0U3ZnLm1hdGNoKC8uK2ZvbnQtc2l6ZT1cIihcXGQrKVwiLisvKVsxXSlcbiAgbGV0IGZvbnRTaXplID0gb3JpZ2luYWxGb250U2l6ZVxuXG4gIC8vIGZpbmQgdGhlIHJpZ2h0LXNpemUgZm9udC1zaXplXG4gIGNvbnN0IHBoeXNpY2FsTGluZXMgPSB0ZXh0Q29udGVudC5zcGxpdChcIlxcblwiKVxuICBsZXQgbG9naWNhbExpbmVzID0gW11cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBsZXQgbWF4Um93cyA9IE1hdGguZmxvb3IoKGhlaWdodCAtICgyICogZm9udFNpemUgKiBwYWRkaW5nWSkpIC8gKGZvbnRTaXplICogbGluZUhlaWdodCkpXG4gICAgbGV0IG1heENvbHVtbnMgPSBNYXRoLmZsb29yKCh3aWR0aCAtICgyICogZm9udFNpemUgKiBwYWRkaW5nWCkpIC8gZm9udFNpemUpIC8vIGRvZXNuJ3QgY2FyZSBhYm91dCBwcm9wb3J0aW9uYWwgZm9udFxuXG4gICAgaWYgKG5vd3JhcCkge1xuICAgICAgbG9naWNhbExpbmVzID0gcGh5c2ljYWxMaW5lc1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dpY2FsTGluZXMgPSBbXVxuICAgICAgcGh5c2ljYWxMaW5lcy5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICBsb2dpY2FsTGluZXMgPSBsb2dpY2FsTGluZXMuY29uY2F0KHNwbGl0U3RyaW5nQnlXaWR0aChsaW5lLCBtYXhDb2x1bW5zICogMikpIC8vIDIgc2luZ2xlLWJ5dGUgY2hhcmFjdGVycyBjYW4gYmUgcGxhY2VkIGluIDEgY29sdW1uXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChsb2dpY2FsTGluZXMubGVuZ3RoID4gbWF4Um93cykge1xuICAgICAgZm9udFNpemUgKj0gMC45NVxuICAgIH0gZWxzZSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIC8vIHJhaXNlIHktY29vcmRpbmF0ZSB1cCBiZWNhdXNlIHktY29vcmRpbmF0ZSBvZiA8dGV4dCB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoeCB5KVwiPiBvciA8dHNwYW4geT1cIlwiPiBpcyBvbiBsb3dlciBiYXNlIG9mIHRleHQgb2JqZWN0XG4gIGNvbnN0IGFkanVzdFkgPSBmb250U2l6ZSAtIG9yaWdpbmFsRm9udFNpemVcblxuICBsZXQgYWRqdXN0ZWRUZXh0U3ZnID0gZml4VGV4dFRyYW5zZm9ybSh0ZXh0U3ZnKVxuICBhZGp1c3RlZFRleHRTdmcgPSBhZGp1c3RlZFRleHRTdmcucmVwbGFjZShuZXcgUmVnRXhwKCc8dHNwYW4oLnxcXFxccykrPC90ZXh0PicpLCAnJylcbiAgYWRqdXN0ZWRUZXh0U3ZnID0gYWRqdXN0ZWRUZXh0U3ZnLnJlcGxhY2UobmV3IFJlZ0V4cCgnZm9udC1zaXplPVwiXFxcXGQrXCInKSwgYGZvbnQtc2l6ZT1cIiR7Zm9udFNpemV9XCJgKVxuICBhZGp1c3RlZFRleHRTdmcgKz0gJ3t0c3Bhbn08L3RleHQ+J1xuXG4gIGxldCB0c3BhbiA9ICcnXG4gIGNvbnN0IHggPSBmb250U2l6ZSAqIHBhZGRpbmdYXG4gIGxvZ2ljYWxMaW5lcy5mb3JFYWNoKChsaW5lLCBpKSA9PiB7XG4gICAgY29uc3QgeSA9IGFkanVzdFkgKyBmb250U2l6ZSAqIChwYWRkaW5nWSArIChpICogbGluZUhlaWdodCkpXG4gICAgdHNwYW4gKz0gYDx0c3BhbiB4PVwiJHt4fVwiIHk9XCIke3l9XCI+JHtsaW5lfTwvdHNwYW4+YFxuICB9KVxuXG4gIGFkanVzdGVkVGV4dFN2ZyA9IGFkanVzdGVkVGV4dFN2Zy5yZXBsYWNlKCd7dHNwYW59JywgdHNwYW4pXG5cbiAgcmV0dXJuIGFkanVzdGVkVGV4dFN2Z1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBhZGp1c3RUZXh0IGZyb20gJy4vYWRqdXN0LXRleHQnXG5pbXBvcnQgYWRqdXN0VGV4dGFyZWEgZnJvbSAnLi9hZGp1c3QtdGV4dGFyZWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN2Z1BhcGVyIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSAnLnBhcGVyIHN2ZycpIHtcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2VsZWN0b3InKVxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgIHRoaXMuc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcikub3V0ZXJIVE1MLnJlcGxhY2UoL1tcXHJ8XFxuXSsvZywgXCJcXG5cIilcbiAgICB0aGlzLmFkanVzdFRleHRRdWVyaWVzID0gW11cbiAgfVxuXG4gIHJlcGxhY2Uoc2VhcmNoLCByZXBsYWNlbWVudCkge1xuICAgIGlmIChzZWFyY2ggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHNlYXJjaCA9IG5ldyBSZWdFeHAoc2VhcmNoLnNvdXJjZSwgc2VhcmNoLmZsYWdzLnJlcGxhY2UoL2cvZywgJycpICsgJ2cnKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgvW1xccnxcXG5dKy9nLCBcIlxcblwiKVxuXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2phL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvUmVndWxhcl9FeHByZXNzaW9ucyNlc2NhcGluZ1xuICAgICAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoL1suKis/Xj0hOiR7fSgpfFtcXF1cXC9cXFxcXS9nLCAnXFxcXCQmJylcbiAgICAgIHNlYXJjaCA9IG5ldyBSZWdFeHAoc2VhcmNoLCAnZycpXG4gICAgfVxuXG4gICAgLy8gY2FzdCB0byBzdHJpbmdcbiAgICByZXBsYWNlbWVudCA9IHJlcGxhY2VtZW50ICE9PSB1bmRlZmluZWQgJiYgcmVwbGFjZW1lbnQgIT09IG51bGwgPyByZXBsYWNlbWVudCArICcnIDogJydcblxuICAgIHJlcGxhY2VtZW50ID0gcmVwbGFjZW1lbnQucmVwbGFjZSgvW1xccnxcXG5dKy9nLCBcIlxcblwiKVxuXG4gICAgdGhpcy5zdmcgPSB0aGlzLnN2Zy5yZXBsYWNlKHNlYXJjaCwgcmVwbGFjZW1lbnQpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgYWRqdXN0VGV4dChzZWxlY3RvciwgdGV4dExlbmd0aCA9IG51bGwsIHRleHRBbmNob3IgPSAnc3RhcnQnKSB7XG4gICAgdGhpcy5hZGp1c3RUZXh0UXVlcmllcy5wdXNoKHtzZWxlY3RvciwgdGV4dExlbmd0aCwgdGV4dEFuY2hvcn0pXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgYWRqdXN0VGV4dGFyZWEoc2VsZWN0b3IsIHdpZHRoLCBoZWlnaHQsIGxpbmVIZWlnaHQgPSAxLjIsIHBhZGRpbmdYID0gMC41LCBwYWRkaW5nWSA9IDAuNSwgbm93cmFwID0gZmFsc2UpIHtcbiAgICBjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHRoaXMuc3ZnLCAndGV4dC9odG1sJylcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvYy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIGlmICghdGV4dEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgY29uc3QgdGV4dFN2ZyA9IHRleHRFbGVtZW50Lm91dGVySFRNTFxuICAgIC8vIFNWR0VsZW1lbnQgZG9lc24ndCBoYXZlIGlubmVyVGV4dFxuICAgIC8vIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NWR0VsZW1lbnRcbiAgICBjb25zdCB0ZXh0Q29udGVudCA9IHRleHRFbGVtZW50LmlubmVySFRNTC5yZXBsYWNlKG5ldyBSZWdFeHAoJ148dHNwYW5bXj5dKj4oW1xcXFxTfFxcXFxzXSopPC90c3Bhbj4kJyksICckMScpXG5cbiAgICBjb25zdCBhZGp1c3RlZFRleHRTdmcgPSBhZGp1c3RUZXh0YXJlYSh0ZXh0U3ZnLCB0ZXh0Q29udGVudCwgd2lkdGgsIGhlaWdodCwgbGluZUhlaWdodCwgcGFkZGluZ1gsIHBhZGRpbmdZLCBub3dyYXApXG5cbiAgICB0aGlzLnJlcGxhY2UodGV4dFN2ZywgYWRqdXN0ZWRUZXh0U3ZnKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFwcGx5KCkge1xuICAgIGlmICh0aGlzLnN2ZyAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKS5vdXRlckhUTUwpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcikub3V0ZXJIVE1MID0gdGhpcy5zdmdcbiAgICB9XG5cbiAgICB0aGlzLmFkanVzdFRleHRRdWVyaWVzLmZvckVhY2gocXVlcnkgPT4ge1xuICAgICAgLy8gaWYgdmlld0JveCBpcyBzcGVjaWZpZWQsIEVsZW1lbnQuY2xpZW50V2lkdGggYW5kIEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgcmV0dXJuIGRpZmZlcmVudCB2YWx1ZXNcbiAgICAgIC8vICAgY2xpZW50V2lkdGg6ID8/P1xuICAgICAgLy8gICBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKTogcHVyZSBwaXhlbCB2YWx1ZVxuICAgICAgLy8gc28gdGhpcyBsaWJyYXJ5IHVzZXMgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYW5kIHByZS1jYWxjdWxhdGVkIHJhdGlvIHRvIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHNvbWUgZWxlbWVudHNcbiAgICAgIGNvbnN0ICRzdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXG4gICAgICBjb25zdCB2aWV3Qm94V2lkdGggPSAkc3ZnLmdldEF0dHJpYnV0ZSgndmlld0JveCcpPy5zcGxpdCgvICsvKVsyXSA/PyBudWxsXG4gICAgICBjb25zdCBwYXBlclBpeGVsUmF0aW8gPSB2aWV3Qm94V2lkdGggPyBwYXJzZUZsb2F0KHZpZXdCb3hXaWR0aCkgLyAkc3ZnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogMVxuXG4gICAgICBhZGp1c3RUZXh0KHBhcGVyUGl4ZWxSYXRpbywgcXVlcnkuc2VsZWN0b3IsIHtcbiAgICAgICAgdGV4dExlbmd0aDogcXVlcnkudGV4dExlbmd0aCxcbiAgICAgICAgJ3RleHQtYW5jaG9yJzogcXVlcnkudGV4dEFuY2hvcixcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIGluaXRpYWxpemVcbiAgICB0aGlzLnN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcikub3V0ZXJIVE1MXG4gICAgdGhpcy5hZGp1c3RUZXh0UXVlcmllcyA9IFtdXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0ICh0ZXh0U3ZnKSA9PiB7XG4gIGxldCBmaXhlZFRleHRTdmcgPSB0ZXh0U3ZnXG5cbiAgLy8gaWYgPHRleHQ+IGRvZXNuJ3QgaGF2ZSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoeCB5KVwiLCBqdXN0IGFkZCBpdCB3aXRoICgwIDApXG4gIGlmICghZml4ZWRUZXh0U3ZnLm1hdGNoKC88dGV4dCBbXj5dKnRyYW5zZm9ybT1cIlteXCJdKlwiW14+XSo+LykpIHtcbiAgICBmaXhlZFRleHRTdmcgPSBmaXhlZFRleHRTdmcucmVwbGFjZShuZXcgUmVnRXhwKCc8dGV4dChbXj5dKik+JyksICc8dGV4dCQxIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDApXCI+JylcbiAgfVxuXG4gIC8vIGlmIDx0c3Bhbj4gZG9lc24ndCBoYXZlIHg9XCJcIiB5PVwiXCIsIGp1c3QgYWRkIGl0IHdpdGggeD1cIjBcIiB5PVwiMFwiXG4gIGlmICghZml4ZWRUZXh0U3ZnLm1hdGNoKC88dHNwYW4gW14+XSp4PVwiW15cIl0qXCJbXj5dKj4vKSkge1xuICAgIGZpeGVkVGV4dFN2ZyA9IGZpeGVkVGV4dFN2Zy5yZXBsYWNlKG5ldyBSZWdFeHAoJzx0c3BhbihbXj5dKik+JyksICc8dHNwYW4kMSB4PVwiMFwiPicpXG4gIH1cbiAgaWYgKCFmaXhlZFRleHRTdmcubWF0Y2goLzx0c3BhbiBbXj5dKnk9XCJbXlwiXSpcIltePl0qPi8pKSB7XG4gICAgZml4ZWRUZXh0U3ZnID0gZml4ZWRUZXh0U3ZnLnJlcGxhY2UobmV3IFJlZ0V4cCgnPHRzcGFuKFtePl0qKT4nKSwgJzx0c3BhbiQxIHk9XCIwXCI+JylcbiAgfVxuXG4gIC8vIGNvcHkgeCBmcm9tIDx0c3BhbiB4PVwiXCI+IGFuZCBhZGQgaXQgdG8gPHRleHQgdHJhbnNmb3JtPVwidHJhbnNsYXRlKHggeSlcIj5cbiAgZml4ZWRUZXh0U3ZnID0gZml4ZWRUZXh0U3ZnLnJlcGxhY2UobmV3IFJlZ0V4cCgnPHRleHQoW1xcXFxzXFxcXFNdKyl0cmFuc2Zvcm09XCJ0cmFuc2xhdGVcXFxcKChcXFxcUyspXFxcXHMrKC4rKVxcXFwpXCIoW14+XSopPlxccyo8dHNwYW4oW14+XSspeD1cIihbXlwiXSspXCInKSwgJzx0ZXh0JDF0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoIyMjJDIrJDYjIyMgJDMpXCIkND48dHNwYW4kNXg9XCIwXCInKVxuICBjb25zdCBleHByZXNzaW9uMSA9IGZpeGVkVGV4dFN2Zy5tYXRjaChuZXcgUmVnRXhwKCc8dGV4dFtcXFxcc1xcXFxTXSt0cmFuc2Zvcm09XCJ0cmFuc2xhdGVcXFxcKCMjIyguKykjIyMuK1xcXFwpXCInKSlbMV1cbiAgY29uc3QgeCA9IGV4cHJlc3Npb24xLm1hdGNoKC9cXGQrXFwrXFxkKy8pID8gZXZhbChleHByZXNzaW9uMSkgOiAwXG4gIGZpeGVkVGV4dFN2ZyA9IGZpeGVkVGV4dFN2Zy5yZXBsYWNlKG5ldyBSZWdFeHAoJzx0ZXh0KFtcXFxcc1xcXFxTXSspdHJhbnNmb3JtPVwidHJhbnNsYXRlXFxcXCgjIyMuKyMjIyguKylcXFxcKVwiJyksIGA8dGV4dCQxdHJhbnNmb3JtPVwidHJhbnNsYXRlKCR7eH0kMilcImApXG5cbiAgLy8gY29weSB5IGZyb20gPHRzcGFuIHk9XCJcIj4gYW5kIGFkZCBpdCB0byA8dGV4dCB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoeCB5KVwiPlxuICBmaXhlZFRleHRTdmcgPSBmaXhlZFRleHRTdmcucmVwbGFjZShuZXcgUmVnRXhwKCc8dGV4dChbXFxcXHNcXFxcU10rKXRyYW5zZm9ybT1cInRyYW5zbGF0ZVxcXFwoKC4rKVxcXFxzKyhcXFxcUyspXFxcXClcIihbXj5dKik+XFxzKjx0c3BhbihbXj5dKyl5PVwiKFteXCJdKylcIicpLCAnPHRleHQkMXRyYW5zZm9ybT1cInRyYW5zbGF0ZSgkMiAjIyMkMyskNiMjIylcIiQ0Pjx0c3BhbiQ1eT1cIjBcIicpXG4gIGNvbnN0IGV4cHJlc3Npb24yID0gZml4ZWRUZXh0U3ZnLm1hdGNoKG5ldyBSZWdFeHAoJzx0ZXh0W1xcXFxzXFxcXFNdK3RyYW5zZm9ybT1cInRyYW5zbGF0ZVxcXFwoLisjIyMoLispIyMjXFxcXClcIicpKVsxXVxuICBjb25zdCB5ID0gZXhwcmVzc2lvbjIubWF0Y2goL1xcZCtcXCtcXGQrLykgPyBldmFsKGV4cHJlc3Npb24yKSA6IDBcbiAgZml4ZWRUZXh0U3ZnID0gZml4ZWRUZXh0U3ZnLnJlcGxhY2UobmV3IFJlZ0V4cCgnPHRleHQoW1xcXFxzXFxcXFNdKyl0cmFuc2Zvcm09XCJ0cmFuc2xhdGVcXFxcKCguKykjIyMuKyMjI1xcXFwpXCInKSwgYDx0ZXh0JDF0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJDIke3l9KVwiYClcblxuICByZXR1cm4gZml4ZWRUZXh0U3ZnXG59XG4iLCJpbXBvcnQgc3ViU3RyaW5nQnlXaWR0aCBmcm9tICcuL3N1Yi1zdHJpbmctYnktd2lkdGgnXG5cbmV4cG9ydCBkZWZhdWx0IChzdHJpbmcsIHdpZHRoKSA9PiB7XG4gIGxldCBzcGxpdHMgPSBbXVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgbGV0IHNwbGl0ID0gc3ViU3RyaW5nQnlXaWR0aChzdHJpbmcsIDAsIHdpZHRoKVxuICAgIHNwbGl0cy5wdXNoKHNwbGl0KVxuICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHNwbGl0LCAnJylcbiAgICBpZiAoIXN0cmluZykge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3BsaXRzXG59XG4iLCJpbXBvcnQgc3RyaW5nV2lkdGggZnJvbSAnc3RyaW5nLXdpZHRoJ1xuXG5leHBvcnQgZGVmYXVsdCAoc3RyaW5nLCBzdGFydCwgd2lkdGgpID0+IHtcbiAgbGV0IGN1cnJlbnRXaWR0aCA9IDBcbiAgbGV0IHN1YlN0cmluZyA9ICcnXG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyA7IGkrKykge1xuICAgIGNvbnN0IGNoYXIgPSBzdHJpbmcuc3Vic3RyKGksIDEpXG4gICAgY3VycmVudFdpZHRoICs9IHN0cmluZ1dpZHRoKGNoYXIpXG4gICAgaWYgKGN1cnJlbnRXaWR0aCA8PSB3aWR0aCAmJiBpIDw9IHN0cmluZy5sZW5ndGgpIHtcbiAgICAgIHN1YlN0cmluZyArPSBjaGFyXG4gICAgfVxuICAgIGlmIChjdXJyZW50V2lkdGggPj0gd2lkdGggfHwgaSA+PSBzdHJpbmcubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gc3ViU3RyaW5nXG4gICAgfVxuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGh0dHBzOi8vbXRocy5iZS9lbW9qaVxuICByZXR1cm4gL1xcdUQ4M0NcXHVERkY0XFx1REI0MFxcdURDNjdcXHVEQjQwXFx1REM2Mig/OlxcdURCNDBcXHVEQzY1XFx1REI0MFxcdURDNkVcXHVEQjQwXFx1REM2N3xcXHVEQjQwXFx1REM3M1xcdURCNDBcXHVEQzYzXFx1REI0MFxcdURDNzR8XFx1REI0MFxcdURDNzdcXHVEQjQwXFx1REM2Q1xcdURCNDBcXHVEQzczKVxcdURCNDBcXHVEQzdGfFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1xcdURGRkNcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDXFx1REZGQnxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkZcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRV0pfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGRVxcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZEXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCXFx1REZGQ10pfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHUyMDBEKD86XFx1Mjc2NFxcdUZFMEZcXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNEXFx1REM2OHwoPzpcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHUyMDBEKD86XFx1RDgzRFxcdURDNjZcXHUyMDBEXFx1RDgzRFxcdURDNjZ8XFx1RDgzRFxcdURDNjdcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pKXxcXHVEODNEXFx1REM2NlxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2N1xcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSl8KD86XFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2NlxcdURDNjddKXxbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEZ8XFx1RDgzRFtcXHVEQzY2XFx1REM2N118XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfCg/OlxcdUQ4M0NcXHVERkZCXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZGXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZFXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZEXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZDXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdKVxcdUZFMEZ8XFx1RDgzQ1xcdURGRkJcXHUyMDBEKD86XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8KD86XFx1RDgzRVxcdURERDFcXHVEODNDXFx1REZGQlxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMXxcXHVEODNEXFx1REM2OVxcdUQ4M0NcXHVERkZDXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY5KVxcdUQ4M0NcXHVERkZCfFxcdUQ4M0VcXHVEREQxKD86XFx1RDgzQ1xcdURGRkZcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDEoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfFxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMSl8KD86XFx1RDgzRVxcdURERDFcXHVEODNDXFx1REZGRVxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMXxcXHVEODNEXFx1REM2OVxcdUQ4M0NcXHVERkZGXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRV0pfCg/OlxcdUQ4M0VcXHVEREQxXFx1RDgzQ1xcdURGRkNcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDF8XFx1RDgzRFxcdURDNjlcXHVEODNDXFx1REZGRFxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OSkoPzpcXHVEODNDW1xcdURGRkJcXHVERkZDXSl8XFx1RDgzRFxcdURDNjkoPzpcXHVEODNDXFx1REZGRVxcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl0pfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGQ1xcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGQlxcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQy1cXHVERkZGXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZEXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdTIwMEQoPzpcXHUyNzY0XFx1RkUwRlxcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQoPzpcXHVEODNEW1xcdURDNjhcXHVEQzY5XSl8XFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGRlxcdTIwMEQoPzpcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSkpfFxcdUQ4M0RcXHVEQzY5XFx1MjAwRFxcdUQ4M0RcXHVEQzY5XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzY2XFx1MjAwRFxcdUQ4M0RcXHVEQzY2fFxcdUQ4M0RcXHVEQzY3XFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2NlxcdURDNjddKSl8KD86XFx1RDgzRVxcdURERDFcXHVEODNDXFx1REZGRFxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMXxcXHVEODNEXFx1REM2OVxcdUQ4M0NcXHVERkZFXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY5KSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXSl8XFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzRFxcdURDNjZcXHUyMDBEXFx1RDgzRFxcdURDNjZ8XFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzRFxcdURDNjlcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pfCg/OlxcdUQ4M0RcXHVEQzQxXFx1RkUwRlxcdTIwMERcXHVEODNEXFx1RERFOHxcXHVEODNEXFx1REM2OSg/OlxcdUQ4M0NcXHVERkZGXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZFXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZDXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZCXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZEXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XSl8KD86KD86XFx1MjZGOXxcXHVEODNDW1xcdURGQ0JcXHVERkNDXXxcXHVEODNEXFx1REQ3NSlcXHVGRTBGfFxcdUQ4M0RcXHVEQzZGfFxcdUQ4M0VbXFx1REQzQ1xcdUREREVcXHVERERGXSlcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXXwoPzpcXHUyNkY5fFxcdUQ4M0NbXFx1REZDQlxcdURGQ0NdfFxcdUQ4M0RcXHVERDc1KSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSlcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXXwoPzpcXHVEODNDW1xcdURGQzNcXHVERkM0XFx1REZDQV18XFx1RDgzRFtcXHVEQzZFXFx1REM3MVxcdURDNzNcXHVEQzc3XFx1REM4MVxcdURDODJcXHVEQzg2XFx1REM4N1xcdURFNDUtXFx1REU0N1xcdURFNEJcXHVERTREXFx1REU0RVxcdURFQTNcXHVERUI0LVxcdURFQjZdfFxcdUQ4M0VbXFx1REQyNlxcdUREMzctXFx1REQzOVxcdUREM0RcXHVERDNFXFx1RERCOFxcdUREQjlcXHVERENELVxcdUREQ0ZcXHVEREQ2LVxcdURERERdKSg/Oig/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSlcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXXxcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXSl8XFx1RDgzQ1xcdURGRjRcXHUyMDBEXFx1MjYyMClcXHVGRTBGfFxcdUQ4M0RcXHVEQzY5XFx1MjAwRFxcdUQ4M0RcXHVEQzY3XFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2NlxcdURDNjddKXxcXHVEODNDXFx1REZGM1xcdUZFMEZcXHUyMDBEXFx1RDgzQ1xcdURGMDh8XFx1RDgzRFxcdURDMTVcXHUyMDBEXFx1RDgzRVxcdUREQkF8XFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzRFxcdURDNjZ8XFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzRFxcdURDNjd8XFx1RDgzQ1xcdURERkRcXHVEODNDXFx1RERGMHxcXHVEODNDXFx1RERGNFxcdUQ4M0NcXHVEREYyfFxcdUQ4M0NcXHVEREY2XFx1RDgzQ1xcdURERTZ8WyNcXCowLTldXFx1RkUwRlxcdTIwRTN8XFx1RDgzQ1xcdURERTcoPzpcXHVEODNDW1xcdURERTZcXHVEREU3XFx1RERFOS1cXHVEREVGXFx1RERGMS1cXHVEREY0XFx1RERGNi1cXHVEREY5XFx1RERGQlxcdURERkNcXHVEREZFXFx1RERGRl0pfFxcdUQ4M0NcXHVEREY5KD86XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERTlcXHVEREVCLVxcdURERURcXHVEREVGLVxcdURERjRcXHVEREY3XFx1RERGOVxcdURERkJcXHVEREZDXFx1RERGRl0pfFxcdUQ4M0NcXHVEREVBKD86XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUFcXHVEREVDXFx1RERFRFxcdURERjctXFx1RERGQV0pfFxcdUQ4M0VcXHVEREQxKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXxcXHVEODNDXFx1RERGNyg/OlxcdUQ4M0NbXFx1RERFQVxcdURERjRcXHVEREY4XFx1RERGQVxcdURERkNdKXxcXHVEODNEXFx1REM2OSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8XFx1RDgzQ1xcdURERjIoPzpcXHVEODNDW1xcdURERTZcXHVEREU4LVxcdURERURcXHVEREYwLVxcdURERkZdKXxcXHVEODNDXFx1RERFNig/OlxcdUQ4M0NbXFx1RERFOC1cXHVEREVDXFx1RERFRVxcdURERjFcXHVEREYyXFx1RERGNFxcdURERjYtXFx1RERGQVxcdURERkNcXHVEREZEXFx1RERGRl0pfFxcdUQ4M0NcXHVEREYwKD86XFx1RDgzQ1tcXHVEREVBXFx1RERFQy1cXHVEREVFXFx1RERGMlxcdURERjNcXHVEREY1XFx1RERGN1xcdURERkNcXHVEREZFXFx1RERGRl0pfFxcdUQ4M0NcXHVEREVEKD86XFx1RDgzQ1tcXHVEREYwXFx1RERGMlxcdURERjNcXHVEREY3XFx1RERGOVxcdURERkFdKXxcXHVEODNDXFx1RERFOSg/OlxcdUQ4M0NbXFx1RERFQVxcdURERUNcXHVEREVGXFx1RERGMFxcdURERjJcXHVEREY0XFx1RERGRl0pfFxcdUQ4M0NcXHVEREZFKD86XFx1RDgzQ1tcXHVEREVBXFx1RERGOV0pfFxcdUQ4M0NcXHVEREVDKD86XFx1RDgzQ1tcXHVEREU2XFx1RERFN1xcdURERTktXFx1RERFRVxcdURERjEtXFx1RERGM1xcdURERjUtXFx1RERGQVxcdURERkNcXHVEREZFXSl8XFx1RDgzQ1xcdURERjgoPzpcXHVEODNDW1xcdURERTYtXFx1RERFQVxcdURERUMtXFx1RERGNFxcdURERjctXFx1RERGOVxcdURERkJcXHVEREZELVxcdURERkZdKXxcXHVEODNDXFx1RERFQig/OlxcdUQ4M0NbXFx1RERFRS1cXHVEREYwXFx1RERGMlxcdURERjRcXHVEREY3XSl8XFx1RDgzQ1xcdURERjUoPzpcXHVEODNDW1xcdURERTZcXHVEREVBLVxcdURERURcXHVEREYwLVxcdURERjNcXHVEREY3LVxcdURERjlcXHVEREZDXFx1RERGRV0pfFxcdUQ4M0NcXHVEREZCKD86XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUFcXHVEREVDXFx1RERFRVxcdURERjNcXHVEREZBXSl8XFx1RDgzQ1xcdURERjMoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQS1cXHVEREVDXFx1RERFRVxcdURERjFcXHVEREY0XFx1RERGNVxcdURERjdcXHVEREZBXFx1RERGRl0pfFxcdUQ4M0NcXHVEREU4KD86XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERTlcXHVEREVCLVxcdURERUVcXHVEREYwLVxcdURERjVcXHVEREY3XFx1RERGQS1cXHVEREZGXSl8XFx1RDgzQ1xcdURERjEoPzpcXHVEODNDW1xcdURERTYtXFx1RERFOFxcdURERUVcXHVEREYwXFx1RERGNy1cXHVEREZCXFx1RERGRV0pfFxcdUQ4M0NcXHVEREZGKD86XFx1RDgzQ1tcXHVEREU2XFx1RERGMlxcdURERkNdKXxcXHVEODNDXFx1RERGQyg/OlxcdUQ4M0NbXFx1RERFQlxcdURERjhdKXxcXHVEODNDXFx1RERGQSg/OlxcdUQ4M0NbXFx1RERFNlxcdURERUNcXHVEREYyXFx1RERGM1xcdURERjhcXHVEREZFXFx1RERGRl0pfFxcdUQ4M0NcXHVEREVFKD86XFx1RDgzQ1tcXHVEREU4LVxcdURERUFcXHVEREYxLVxcdURERjRcXHVEREY2LVxcdURERjldKXxcXHVEODNDXFx1RERFRig/OlxcdUQ4M0NbXFx1RERFQVxcdURERjJcXHVEREY0XFx1RERGNV0pfCg/OlxcdUQ4M0NbXFx1REZDM1xcdURGQzRcXHVERkNBXXxcXHVEODNEW1xcdURDNkVcXHVEQzcxXFx1REM3M1xcdURDNzdcXHVEQzgxXFx1REM4MlxcdURDODZcXHVEQzg3XFx1REU0NS1cXHVERTQ3XFx1REU0QlxcdURFNERcXHVERTRFXFx1REVBM1xcdURFQjQtXFx1REVCNl18XFx1RDgzRVtcXHVERDI2XFx1REQzNy1cXHVERDM5XFx1REQzRFxcdUREM0VcXHVEREI4XFx1RERCOVxcdUREQ0QtXFx1RERDRlxcdURERDYtXFx1RERERF0pKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXwoPzpcXHUyNkY5fFxcdUQ4M0NbXFx1REZDQlxcdURGQ0NdfFxcdUQ4M0RcXHVERDc1KSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8KD86W1xcdTI2MURcXHUyNzBBLVxcdTI3MERdfFxcdUQ4M0NbXFx1REY4NVxcdURGQzJcXHVERkM3XXxcXHVEODNEW1xcdURDNDJcXHVEQzQzXFx1REM0Ni1cXHVEQzUwXFx1REM2NlxcdURDNjdcXHVEQzZCLVxcdURDNkRcXHVEQzcwXFx1REM3MlxcdURDNzQtXFx1REM3NlxcdURDNzhcXHVEQzdDXFx1REM4M1xcdURDODVcXHVEQ0FBXFx1REQ3NFxcdUREN0FcXHVERDkwXFx1REQ5NVxcdUREOTZcXHVERTRDXFx1REU0RlxcdURFQzBcXHVERUNDXXxcXHVEODNFW1xcdUREMEZcXHVERDE4LVxcdUREMUNcXHVERDFFXFx1REQxRlxcdUREMzAtXFx1REQzNlxcdUREQjVcXHVEREI2XFx1RERCQlxcdURERDItXFx1RERENV0pKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXwoPzpbXFx1MjMxQVxcdTIzMUJcXHUyM0U5LVxcdTIzRUNcXHUyM0YwXFx1MjNGM1xcdTI1RkRcXHUyNUZFXFx1MjYxNFxcdTI2MTVcXHUyNjQ4LVxcdTI2NTNcXHUyNjdGXFx1MjY5M1xcdTI2QTFcXHUyNkFBXFx1MjZBQlxcdTI2QkRcXHUyNkJFXFx1MjZDNFxcdTI2QzVcXHUyNkNFXFx1MjZENFxcdTI2RUFcXHUyNkYyXFx1MjZGM1xcdTI2RjVcXHUyNkZBXFx1MjZGRFxcdTI3MDVcXHUyNzBBXFx1MjcwQlxcdTI3MjhcXHUyNzRDXFx1Mjc0RVxcdTI3NTMtXFx1Mjc1NVxcdTI3NTdcXHUyNzk1LVxcdTI3OTdcXHUyN0IwXFx1MjdCRlxcdTJCMUJcXHUyQjFDXFx1MkI1MFxcdTJCNTVdfFxcdUQ4M0NbXFx1REMwNFxcdURDQ0ZcXHVERDhFXFx1REQ5MS1cXHVERDlBXFx1RERFNi1cXHVEREZGXFx1REUwMVxcdURFMUFcXHVERTJGXFx1REUzMi1cXHVERTM2XFx1REUzOC1cXHVERTNBXFx1REU1MFxcdURFNTFcXHVERjAwLVxcdURGMjBcXHVERjJELVxcdURGMzVcXHVERjM3LVxcdURGN0NcXHVERjdFLVxcdURGOTNcXHVERkEwLVxcdURGQ0FcXHVERkNGLVxcdURGRDNcXHVERkUwLVxcdURGRjBcXHVERkY0XFx1REZGOC1cXHVERkZGXXxcXHVEODNEW1xcdURDMDAtXFx1REMzRVxcdURDNDBcXHVEQzQyLVxcdURDRkNcXHVEQ0ZGLVxcdUREM0RcXHVERDRCLVxcdURENEVcXHVERDUwLVxcdURENjdcXHVERDdBXFx1REQ5NVxcdUREOTZcXHVEREE0XFx1RERGQi1cXHVERTRGXFx1REU4MC1cXHVERUM1XFx1REVDQ1xcdURFRDAtXFx1REVEMlxcdURFRDVcXHVERUVCXFx1REVFQ1xcdURFRjQtXFx1REVGQVxcdURGRTAtXFx1REZFQl18XFx1RDgzRVtcXHVERDBELVxcdUREM0FcXHVERDNDLVxcdURENDVcXHVERDQ3LVxcdURENzFcXHVERDczLVxcdURENzZcXHVERDdBLVxcdUREQTJcXHVEREE1LVxcdUREQUFcXHVEREFFLVxcdUREQ0FcXHVERENELVxcdURERkZcXHVERTcwLVxcdURFNzNcXHVERTc4LVxcdURFN0FcXHVERTgwLVxcdURFODJcXHVERTkwLVxcdURFOTVdKXwoPzpbI1xcKjAtOVxceEE5XFx4QUVcXHUyMDNDXFx1MjA0OVxcdTIxMjJcXHUyMTM5XFx1MjE5NC1cXHUyMTk5XFx1MjFBOVxcdTIxQUFcXHUyMzFBXFx1MjMxQlxcdTIzMjhcXHUyM0NGXFx1MjNFOS1cXHUyM0YzXFx1MjNGOC1cXHUyM0ZBXFx1MjRDMlxcdTI1QUFcXHUyNUFCXFx1MjVCNlxcdTI1QzBcXHUyNUZCLVxcdTI1RkVcXHUyNjAwLVxcdTI2MDRcXHUyNjBFXFx1MjYxMVxcdTI2MTRcXHUyNjE1XFx1MjYxOFxcdTI2MURcXHUyNjIwXFx1MjYyMlxcdTI2MjNcXHUyNjI2XFx1MjYyQVxcdTI2MkVcXHUyNjJGXFx1MjYzOC1cXHUyNjNBXFx1MjY0MFxcdTI2NDJcXHUyNjQ4LVxcdTI2NTNcXHUyNjVGXFx1MjY2MFxcdTI2NjNcXHUyNjY1XFx1MjY2NlxcdTI2NjhcXHUyNjdCXFx1MjY3RVxcdTI2N0ZcXHUyNjkyLVxcdTI2OTdcXHUyNjk5XFx1MjY5QlxcdTI2OUNcXHUyNkEwXFx1MjZBMVxcdTI2QUFcXHUyNkFCXFx1MjZCMFxcdTI2QjFcXHUyNkJEXFx1MjZCRVxcdTI2QzRcXHUyNkM1XFx1MjZDOFxcdTI2Q0VcXHUyNkNGXFx1MjZEMVxcdTI2RDNcXHUyNkQ0XFx1MjZFOVxcdTI2RUFcXHUyNkYwLVxcdTI2RjVcXHUyNkY3LVxcdTI2RkFcXHUyNkZEXFx1MjcwMlxcdTI3MDVcXHUyNzA4LVxcdTI3MERcXHUyNzBGXFx1MjcxMlxcdTI3MTRcXHUyNzE2XFx1MjcxRFxcdTI3MjFcXHUyNzI4XFx1MjczM1xcdTI3MzRcXHUyNzQ0XFx1Mjc0N1xcdTI3NENcXHUyNzRFXFx1Mjc1My1cXHUyNzU1XFx1Mjc1N1xcdTI3NjNcXHUyNzY0XFx1Mjc5NS1cXHUyNzk3XFx1MjdBMVxcdTI3QjBcXHUyN0JGXFx1MjkzNFxcdTI5MzVcXHUyQjA1LVxcdTJCMDdcXHUyQjFCXFx1MkIxQ1xcdTJCNTBcXHUyQjU1XFx1MzAzMFxcdTMwM0RcXHUzMjk3XFx1MzI5OV18XFx1RDgzQ1tcXHVEQzA0XFx1RENDRlxcdURENzBcXHVERDcxXFx1REQ3RVxcdUREN0ZcXHVERDhFXFx1REQ5MS1cXHVERDlBXFx1RERFNi1cXHVEREZGXFx1REUwMVxcdURFMDJcXHVERTFBXFx1REUyRlxcdURFMzItXFx1REUzQVxcdURFNTBcXHVERTUxXFx1REYwMC1cXHVERjIxXFx1REYyNC1cXHVERjkzXFx1REY5NlxcdURGOTdcXHVERjk5LVxcdURGOUJcXHVERjlFLVxcdURGRjBcXHVERkYzLVxcdURGRjVcXHVERkY3LVxcdURGRkZdfFxcdUQ4M0RbXFx1REMwMC1cXHVEQ0ZEXFx1RENGRi1cXHVERDNEXFx1REQ0OS1cXHVERDRFXFx1REQ1MC1cXHVERDY3XFx1REQ2RlxcdURENzBcXHVERDczLVxcdUREN0FcXHVERDg3XFx1REQ4QS1cXHVERDhEXFx1REQ5MFxcdUREOTVcXHVERDk2XFx1RERBNFxcdUREQTVcXHVEREE4XFx1RERCMVxcdUREQjJcXHVEREJDXFx1RERDMi1cXHVEREM0XFx1REREMS1cXHVEREQzXFx1REREQy1cXHVERERFXFx1RERFMVxcdURERTNcXHVEREU4XFx1RERFRlxcdURERjNcXHVEREZBLVxcdURFNEZcXHVERTgwLVxcdURFQzVcXHVERUNCLVxcdURFRDJcXHVERUQ1XFx1REVFMC1cXHVERUU1XFx1REVFOVxcdURFRUJcXHVERUVDXFx1REVGMFxcdURFRjMtXFx1REVGQVxcdURGRTAtXFx1REZFQl18XFx1RDgzRVtcXHVERDBELVxcdUREM0FcXHVERDNDLVxcdURENDVcXHVERDQ3LVxcdURENzFcXHVERDczLVxcdURENzZcXHVERDdBLVxcdUREQTJcXHVEREE1LVxcdUREQUFcXHVEREFFLVxcdUREQ0FcXHVERENELVxcdURERkZcXHVERTcwLVxcdURFNzNcXHVERTc4LVxcdURFN0FcXHVERTgwLVxcdURFODJcXHVERTkwLVxcdURFOTVdKVxcdUZFMEZ8KD86W1xcdTI2MURcXHUyNkY5XFx1MjcwQS1cXHUyNzBEXXxcXHVEODNDW1xcdURGODVcXHVERkMyLVxcdURGQzRcXHVERkM3XFx1REZDQS1cXHVERkNDXXxcXHVEODNEW1xcdURDNDJcXHVEQzQzXFx1REM0Ni1cXHVEQzUwXFx1REM2Ni1cXHVEQzc4XFx1REM3Q1xcdURDODEtXFx1REM4M1xcdURDODUtXFx1REM4N1xcdURDOEZcXHVEQzkxXFx1RENBQVxcdURENzRcXHVERDc1XFx1REQ3QVxcdUREOTBcXHVERDk1XFx1REQ5NlxcdURFNDUtXFx1REU0N1xcdURFNEItXFx1REU0RlxcdURFQTNcXHVERUI0LVxcdURFQjZcXHVERUMwXFx1REVDQ118XFx1RDgzRVtcXHVERDBGXFx1REQxOC1cXHVERDFGXFx1REQyNlxcdUREMzAtXFx1REQzOVxcdUREM0MtXFx1REQzRVxcdUREQjVcXHVEREI2XFx1RERCOFxcdUREQjlcXHVEREJCXFx1RERDRC1cXHVERENGXFx1REREMS1cXHVEREREXSkvZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBzdHJpcEFuc2kgPSByZXF1aXJlKCdzdHJpcC1hbnNpJyk7XG5jb25zdCBpc0Z1bGx3aWR0aENvZGVQb2ludCA9IHJlcXVpcmUoJ2lzLWZ1bGx3aWR0aC1jb2RlLXBvaW50Jyk7XG5jb25zdCBlbW9qaVJlZ2V4ID0gcmVxdWlyZSgnZW1vamktcmVnZXgnKTtcblxuY29uc3Qgc3RyaW5nV2lkdGggPSBzdHJpbmcgPT4ge1xuXHRpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycgfHwgc3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0c3RyaW5nID0gc3RyaXBBbnNpKHN0cmluZyk7XG5cblx0aWYgKHN0cmluZy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGVtb2ppUmVnZXgoKSwgJyAgJyk7XG5cblx0bGV0IHdpZHRoID0gMDtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGNvZGUgPSBzdHJpbmcuY29kZVBvaW50QXQoaSk7XG5cblx0XHQvLyBJZ25vcmUgY29udHJvbCBjaGFyYWN0ZXJzXG5cdFx0aWYgKGNvZGUgPD0gMHgxRiB8fCAoY29kZSA+PSAweDdGICYmIGNvZGUgPD0gMHg5RikpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIElnbm9yZSBjb21iaW5pbmcgY2hhcmFjdGVyc1xuXHRcdGlmIChjb2RlID49IDB4MzAwICYmIGNvZGUgPD0gMHgzNkYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIFN1cnJvZ2F0ZXNcblx0XHRpZiAoY29kZSA+IDB4RkZGRikge1xuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdHdpZHRoICs9IGlzRnVsbHdpZHRoQ29kZVBvaW50KGNvZGUpID8gMiA6IDE7XG5cdH1cblxuXHRyZXR1cm4gd2lkdGg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1dpZHRoO1xuLy8gVE9ETzogcmVtb3ZlIHRoaXMgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvblxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IHN0cmluZ1dpZHRoO1xuIiwiLyogZXNsaW50LWRpc2FibGUgeW9kYSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBpc0Z1bGx3aWR0aENvZGVQb2ludCA9IGNvZGVQb2ludCA9PiB7XG5cdGlmIChOdW1iZXIuaXNOYU4oY29kZVBvaW50KSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIENvZGUgcG9pbnRzIGFyZSBkZXJpdmVkIGZyb206XG5cdC8vIGh0dHA6Ly93d3cudW5peC5vcmcvUHVibGljL1VOSURBVEEvRWFzdEFzaWFuV2lkdGgudHh0XG5cdGlmIChcblx0XHRjb2RlUG9pbnQgPj0gMHgxMTAwICYmIChcblx0XHRcdGNvZGVQb2ludCA8PSAweDExNUYgfHwgLy8gSGFuZ3VsIEphbW9cblx0XHRcdGNvZGVQb2ludCA9PT0gMHgyMzI5IHx8IC8vIExFRlQtUE9JTlRJTkcgQU5HTEUgQlJBQ0tFVFxuXHRcdFx0Y29kZVBvaW50ID09PSAweDIzMkEgfHwgLy8gUklHSFQtUE9JTlRJTkcgQU5HTEUgQlJBQ0tFVFxuXHRcdFx0Ly8gQ0pLIFJhZGljYWxzIFN1cHBsZW1lbnQgLi4gRW5jbG9zZWQgQ0pLIExldHRlcnMgYW5kIE1vbnRoc1xuXHRcdFx0KDB4MkU4MCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4MzI0NyAmJiBjb2RlUG9pbnQgIT09IDB4MzAzRikgfHxcblx0XHRcdC8vIEVuY2xvc2VkIENKSyBMZXR0ZXJzIGFuZCBNb250aHMgLi4gQ0pLIFVuaWZpZWQgSWRlb2dyYXBocyBFeHRlbnNpb24gQVxuXHRcdFx0KDB4MzI1MCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4NERCRikgfHxcblx0XHRcdC8vIENKSyBVbmlmaWVkIElkZW9ncmFwaHMgLi4gWWkgUmFkaWNhbHNcblx0XHRcdCgweDRFMDAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEE0QzYpIHx8XG5cdFx0XHQvLyBIYW5ndWwgSmFtbyBFeHRlbmRlZC1BXG5cdFx0XHQoMHhBOTYwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhBOTdDKSB8fFxuXHRcdFx0Ly8gSGFuZ3VsIFN5bGxhYmxlc1xuXHRcdFx0KDB4QUMwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4RDdBMykgfHxcblx0XHRcdC8vIENKSyBDb21wYXRpYmlsaXR5IElkZW9ncmFwaHNcblx0XHRcdCgweEY5MDAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEZBRkYpIHx8XG5cdFx0XHQvLyBWZXJ0aWNhbCBGb3Jtc1xuXHRcdFx0KDB4RkUxMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4RkUxOSkgfHxcblx0XHRcdC8vIENKSyBDb21wYXRpYmlsaXR5IEZvcm1zIC4uIFNtYWxsIEZvcm0gVmFyaWFudHNcblx0XHRcdCgweEZFMzAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEZFNkIpIHx8XG5cdFx0XHQvLyBIYWxmd2lkdGggYW5kIEZ1bGx3aWR0aCBGb3Jtc1xuXHRcdFx0KDB4RkYwMSA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4RkY2MCkgfHxcblx0XHRcdCgweEZGRTAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEZGRTYpIHx8XG5cdFx0XHQvLyBLYW5hIFN1cHBsZW1lbnRcblx0XHRcdCgweDFCMDAwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHgxQjAwMSkgfHxcblx0XHRcdC8vIEVuY2xvc2VkIElkZW9ncmFwaGljIFN1cHBsZW1lbnRcblx0XHRcdCgweDFGMjAwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHgxRjI1MSkgfHxcblx0XHRcdC8vIENKSyBVbmlmaWVkIElkZW9ncmFwaHMgRXh0ZW5zaW9uIEIgLi4gVGVydGlhcnkgSWRlb2dyYXBoaWMgUGxhbmVcblx0XHRcdCgweDIwMDAwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHgzRkZGRClcblx0XHQpXG5cdCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bGx3aWR0aENvZGVQb2ludDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBpc0Z1bGx3aWR0aENvZGVQb2ludDtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IGFuc2lSZWdleCA9IHJlcXVpcmUoJ2Fuc2ktcmVnZXgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmcgPT4gdHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycgPyBzdHJpbmcucmVwbGFjZShhbnNpUmVnZXgoKSwgJycpIDogc3RyaW5nO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICh7b25seUZpcnN0ID0gZmFsc2V9ID0ge30pID0+IHtcblx0Y29uc3QgcGF0dGVybiA9IFtcblx0XHQnW1xcXFx1MDAxQlxcXFx1MDA5Ql1bW1xcXFxdKCkjOz9dKig/Oig/Oig/OlthLXpBLVpcXFxcZF0qKD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKikqKT9cXFxcdTAwMDcpJyxcblx0XHQnKD86KD86XFxcXGR7MSw0fSg/OjtcXFxcZHswLDR9KSopP1tcXFxcZEEtUFItVFpjZi1udHFyeT0+PH5dKSknXG5cdF0uam9pbignfCcpO1xuXG5cdHJldHVybiBuZXcgUmVnRXhwKHBhdHRlcm4sIG9ubHlGaXJzdCA/IHVuZGVmaW5lZCA6ICdnJyk7XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==