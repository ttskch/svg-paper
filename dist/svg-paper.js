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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdmdQYXBlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9qcy9zcmMvYWRqdXN0LXRleHQuanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9qcy9zcmMvYWRqdXN0LXRleHRhcmVhLmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vanMvc3JjL3N2Zy1wYXBlci5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L3NwbGl0LXN0cmluZy1ieS13aWR0aC5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L3N1Yi1zdHJpbmctYnktd2lkdGguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvZW1vamktcmVnZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvc3RyaW5nLXdpZHRoL2luZGV4LmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vbm9kZV9tb2R1bGVzL3N0cmluZy13aWR0aC9ub2RlX21vZHVsZXMvaXMtZnVsbHdpZHRoLWNvZGUtcG9pbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvc3RyaXAtYW5zaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL25vZGVfbW9kdWxlcy9zdHJpcC1hbnNpL25vZGVfbW9kdWxlcy9hbnNpLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vc2Nzcy9zdmctcGFwZXIuc2Nzcz9mOWQyIl0sIm5hbWVzIjpbInNlbGVjdG9yIiwiY29uZmlnIiwiJHRoaXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGllbnRXaWR0aCIsInRleHRMZW5ndGgiLCJzZXRBdHRyaWJ1dGUiLCJtYXRjaCIsImdldEF0dHJpYnV0ZSIsInciLCJwYXJzZUZsb2F0IiwieCIsIm5ld1RyYW5zZm9ybSIsInJlcGxhY2UiLCJ0ZXh0U3ZnIiwidGV4dENvbnRlbnQiLCJ3aWR0aCIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJwYWRkaW5nWCIsInBhZGRpbmdZIiwibm93cmFwIiwiUmVnRXhwIiwiY29uc29sZSIsImVycm9yIiwib3JpZ2luYWxGb250U2l6ZSIsInBhcnNlSW50IiwiZm9udFNpemUiLCJwaHlzaWNhbExpbmVzIiwic3BsaXQiLCJsb2dpY2FsTGluZXMiLCJtYXhSb3dzIiwiTWF0aCIsImZsb29yIiwibWF4Q29sdW1ucyIsImZvckVhY2giLCJsaW5lIiwiY29uY2F0Iiwic3BsaXRTdHJpbmdCeVdpZHRoIiwibGVuZ3RoIiwiYWRqdXN0WSIsImFkanVzdGVkVGV4dFN2ZyIsInRzcGFuIiwiaSIsInkiLCJTdmdQYXBlciIsInN2ZyIsIm91dGVySFRNTCIsImFkanVzdFRleHRRdWVyaWVzIiwic2VhcmNoIiwicmVwbGFjZW1lbnQiLCJzb3VyY2UiLCJmbGFncyIsInVuZGVmaW5lZCIsInRleHRBbmNob3IiLCJwdXNoIiwiZG9jIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwidGV4dEVsZW1lbnQiLCJpbm5lckhUTUwiLCJhZGp1c3RUZXh0YXJlYSIsInF1ZXJ5IiwiYWRqdXN0VGV4dCIsInN0cmluZyIsInNwbGl0cyIsInN1YlN0cmluZ0J5V2lkdGgiLCJzdGFydCIsImN1cnJlbnRXaWR0aCIsInN1YlN0cmluZyIsImNoYXIiLCJzdWJzdHIiLCJzdHJpbmdXaWR0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHJpcEFuc2kiLCJyZXF1aXJlIiwiaXNGdWxsd2lkdGhDb2RlUG9pbnQiLCJlbW9qaVJlZ2V4IiwiY29kZSIsImNvZGVQb2ludEF0IiwiY29kZVBvaW50IiwiTnVtYmVyIiwiaXNOYU4iLCJhbnNpUmVnZXgiLCJvbmx5Rmlyc3QiLCJwYXR0ZXJuIiwiam9pbiJdLCJtYXBwaW5ncyI6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QUEiLCJmaWxlIjoic3ZnLXBhcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3ZnUGFwZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3ZnUGFwZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnQgZGVmYXVsdCAoc2VsZWN0b3IsIGNvbmZpZykgPT4ge1xuICBjb25zdCAkdGhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG5cbiAgaWYgKCEkdGhpcykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gc2hyaW5rIHRleHQgZWxlbWVudCB0byBzcGVjaWZpZWQgd2lkdGhcbiAgaWYgKCd0ZXh0TGVuZ3RoJyBpbiBjb25maWcgJiYgY29uZmlnWyd0ZXh0TGVuZ3RoJ10pIHtcbiAgICAvLyBmb3IgZmlyZWZveFxuICAgIC8vIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvamEvZG9jcy9XZWIvQVBJL0VsZW1lbnQvY2xpZW50V2lkdGhcbiAgICAkdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXG4gICAgaWYgKCR0aGlzLmNsaWVudFdpZHRoID4gY29uZmlnLnRleHRMZW5ndGgpIHtcbiAgICAgICR0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3RzcGFuJykuc2V0QXR0cmlidXRlKCd0ZXh0TGVuZ3RoJywgY29uZmlnLnRleHRMZW5ndGgpXG4gICAgICAkdGhpcy5xdWVyeVNlbGVjdG9yKCd0c3BhbicpLnNldEF0dHJpYnV0ZSgnbGVuZ3RoQWRqdXN0JywgJ3NwYWNpbmdBbmRHbHlwaHMnKVxuXG4gICAgICAvLyBmb3IgZmlyZWZveFxuICAgICAgLy8gQHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04OTA2OTJcbiAgICAgICR0aGlzLnNldEF0dHJpYnV0ZSgndGV4dExlbmd0aCcsIGNvbmZpZy50ZXh0TGVuZ3RoKVxuICAgICAgJHRoaXMuc2V0QXR0cmlidXRlKCdsZW5ndGhBZGp1c3QnLCAnc3BhY2luZ0FuZEdseXBocycpXG4gICAgfVxuICB9XG5cbiAgLy8gYWxpZ25tZW50XG4gIGlmICgndGV4dC1hbmNob3InIGluIGNvbmZpZyAmJiBjb25maWdbJ3RleHQtYW5jaG9yJ10gJiYgY29uZmlnWyd0ZXh0LWFuY2hvciddICE9PSAnc3RhcnQnKSB7XG4gICAgLy8gZWZmZWN0aXZlIG9ubHkgd2hlbiB0ZXh0TGVuZ3RoIGlzIHNwZWNpZmllZCBhbmQgdGV4dCBlbGVtZW50IGhhcyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoeCB5KVwiXG4gICAgY29uc3QgbWF0Y2ggPSAkdGhpcy5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpPy5tYXRjaCgvdHJhbnNsYXRlXFwoKFteIF0rKSAuK1xcKS8pXG4gICAgaWYgKCFjb25maWdbJ3RleHRMZW5ndGgnXSB8fCAhbWF0Y2gpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHcgPSBwYXJzZUZsb2F0KGNvbmZpZ1sndGV4dExlbmd0aCddKVxuICAgIGNvbnN0IHggPSBwYXJzZUZsb2F0KG1hdGNoWzFdKVxuXG4gICAgaWYgKGNvbmZpZ1sndGV4dC1hbmNob3InXSA9PT0gJ21pZGRsZScpIHtcbiAgICAgIGNvbnN0IG5ld1RyYW5zZm9ybSA9ICR0aGlzLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJykucmVwbGFjZSgvdHJhbnNsYXRlXFwoW14gXSsgKC4rKVxcKS8sIGB0cmFuc2xhdGUoJHt4ICsgKHcgLyAyKX0gJDEpYClcbiAgICAgICR0aGlzLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgbmV3VHJhbnNmb3JtKVxuICAgIH1cblxuICAgIGlmIChjb25maWdbJ3RleHQtYW5jaG9yJ10gPT09ICdlbmQnKSB7XG4gICAgICBjb25zdCBuZXdUcmFuc2Zvcm0gPSAkdGhpcy5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpLnJlcGxhY2UoL3RyYW5zbGF0ZVxcKFteIF0rICguKylcXCkvLCBgdHJhbnNsYXRlKCR7eCArIHd9ICQxKWApXG4gICAgICAkdGhpcy5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIG5ld1RyYW5zZm9ybSlcbiAgICB9XG5cbiAgICAkdGhpcy5zZXRBdHRyaWJ1dGUoJ3RleHQtYW5jaG9yJywgY29uZmlnWyd0ZXh0LWFuY2hvciddKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHNwbGl0U3RyaW5nQnlXaWR0aCBmcm9tICcuL3V0aWxpdHkvc3BsaXQtc3RyaW5nLWJ5LXdpZHRoJ1xuXG5leHBvcnQgZGVmYXVsdCAodGV4dFN2ZywgdGV4dENvbnRlbnQsIHdpZHRoLCBoZWlnaHQsIGxpbmVIZWlnaHQgPSAxLjIsIHBhZGRpbmdYID0gMC41LCBwYWRkaW5nWSA9IDAuNSwgbm93cmFwID0gZmFsc2UpID0+IHtcbiAgaWYgKCF0ZXh0U3ZnLm1hdGNoKG5ldyBSZWdFeHAoJzx0ZXh0IFtePl0qZm9udC1zaXplPVwiXFxcXGQrXCJbXj5dKj48dHNwYW4oIFtePl0qPnw+KVtePD5dKjwvdHNwYW4+PC90ZXh0PicpKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgc3ZnIHN0cmluZyBvZiB0ZXh0IGVsZW1lbnQnLCB0ZXh0U3ZnKVxuICAgIHJldHVybiB0ZXh0U3ZnXG4gIH1cblxuICBjb25zdCBvcmlnaW5hbEZvbnRTaXplID0gcGFyc2VJbnQodGV4dFN2Zy5tYXRjaCgvLitmb250LXNpemU9XCIoXFxkKylcIi4rLylbMV0pXG4gIGxldCBmb250U2l6ZSA9IG9yaWdpbmFsRm9udFNpemVcblxuICAvLyBmaW5kIHRoZSByaWdodC1zaXplIGZvbnQtc2l6ZVxuICBjb25zdCBwaHlzaWNhbExpbmVzID0gdGV4dENvbnRlbnQuc3BsaXQoXCJcXG5cIilcbiAgbGV0IGxvZ2ljYWxMaW5lcyA9IFtdXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgbGV0IG1heFJvd3MgPSBNYXRoLmZsb29yKChoZWlnaHQgLSAoMiAqIGZvbnRTaXplICogcGFkZGluZ1kpKSAvIChmb250U2l6ZSAqIGxpbmVIZWlnaHQpKVxuICAgIGxldCBtYXhDb2x1bW5zID0gTWF0aC5mbG9vcigod2lkdGggLSAoMiAqIGZvbnRTaXplICogcGFkZGluZ1gpKSAvIGZvbnRTaXplKSAvLyBkb2Vzbid0IGNhcmUgYWJvdXQgcHJvcG9ydGlvbmFsIGZvbnRcblxuICAgIGlmIChub3dyYXApIHtcbiAgICAgIGxvZ2ljYWxMaW5lcyA9IHBoeXNpY2FsTGluZXNcbiAgICB9IGVsc2Uge1xuICAgICAgbG9naWNhbExpbmVzID0gW11cbiAgICAgIHBoeXNpY2FsTGluZXMuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgICAgbG9naWNhbExpbmVzID0gbG9naWNhbExpbmVzLmNvbmNhdChzcGxpdFN0cmluZ0J5V2lkdGgobGluZSwgbWF4Q29sdW1ucyAqIDIpKSAvLyAyIHNpbmdsZS1ieXRlIGNoYXJhY3RlcnMgY2FuIGJlIHBsYWNlZCBpbiAxIGNvbHVtblxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAobG9naWNhbExpbmVzLmxlbmd0aCA+IG1heFJvd3MpIHtcbiAgICAgIGZvbnRTaXplICo9IDAuOTVcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICAvLyByYWlzZSB5LWNvb3JkaW5hdGUgdXAgYmVjYXVzZSB5LWNvb3JkaW5hdGUgb2YgPHRleHQgdHJhbnNmb3JtPVwidHJhbnNsYXRlKHggeSlcIj4gaXMgb24gbG93ZXIgYmFzZSBvZiB0ZXh0IG9iamVjdFxuICBjb25zdCBhZGp1c3RZID0gZm9udFNpemUgLSBvcmlnaW5hbEZvbnRTaXplXG5cbiAgbGV0IGFkanVzdGVkVGV4dFN2ZyA9IHRleHRTdmdcbiAgYWRqdXN0ZWRUZXh0U3ZnID0gYWRqdXN0ZWRUZXh0U3ZnLnJlcGxhY2UobmV3IFJlZ0V4cCgnPHRzcGFuKC58XFxcXHMpKzwvdGV4dD4nKSwgJycpXG4gIGFkanVzdGVkVGV4dFN2ZyA9IGFkanVzdGVkVGV4dFN2Zy5yZXBsYWNlKG5ldyBSZWdFeHAoJ2ZvbnQtc2l6ZT1cIlxcXFxkK1wiJyksIGBmb250LXNpemU9XCIke2ZvbnRTaXplfVwiYClcbiAgYWRqdXN0ZWRUZXh0U3ZnICs9ICd7dHNwYW59PC90ZXh0PidcblxuICBsZXQgdHNwYW4gPSAnJ1xuICBjb25zdCB4ID0gZm9udFNpemUgKiBwYWRkaW5nWFxuICBsb2dpY2FsTGluZXMuZm9yRWFjaCgobGluZSwgaSkgPT4ge1xuICAgIGNvbnN0IHkgPSBhZGp1c3RZICsgZm9udFNpemUgKiAocGFkZGluZ1kgKyAoaSAqIGxpbmVIZWlnaHQpKVxuICAgIHRzcGFuICs9IGA8dHNwYW4geD1cIiR7eH1cIiB5PVwiJHt5fVwiPiR7bGluZX08L3RzcGFuPmBcbiAgfSlcblxuICBhZGp1c3RlZFRleHRTdmcgPSBhZGp1c3RlZFRleHRTdmcucmVwbGFjZSgne3RzcGFufScsIHRzcGFuKVxuXG4gIHJldHVybiBhZGp1c3RlZFRleHRTdmdcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgYWRqdXN0VGV4dCBmcm9tICcuL2FkanVzdC10ZXh0J1xuaW1wb3J0IGFkanVzdFRleHRhcmVhIGZyb20gJy4vYWRqdXN0LXRleHRhcmVhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdmdQYXBlciB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ3N2ZycpIHtcbiAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3JcbiAgICB0aGlzLnN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLm91dGVySFRNTC5yZXBsYWNlKC9bXFxyfFxcbl0rL2csIFwiXFxuXCIpXG4gICAgdGhpcy5hZGp1c3RUZXh0UXVlcmllcyA9IFtdXG4gIH1cblxuICByZXBsYWNlKHNlYXJjaCwgcmVwbGFjZW1lbnQpIHtcbiAgICBpZiAoc2VhcmNoIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICBzZWFyY2ggPSBuZXcgUmVnRXhwKHNlYXJjaC5zb3VyY2UsIHNlYXJjaC5mbGFncy5yZXBsYWNlKC9nL2csICcnKSArICdnJylcbiAgICB9IGVsc2Uge1xuICAgICAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoL1tcXHJ8XFxuXSsvZywgXCJcXG5cIilcblxuICAgICAgLy8gQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9qYS9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL1JlZ3VsYXJfRXhwcmVzc2lvbnMjZXNjYXBpbmdcbiAgICAgIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKC9bLiorP149IToke30oKXxbXFxdXFwvXFxcXF0vZywgJ1xcXFwkJicpXG4gICAgICBzZWFyY2ggPSBuZXcgUmVnRXhwKHNlYXJjaCwgJ2cnKVxuICAgIH1cblxuICAgIC8vIGNhc3QgdG8gc3RyaW5nXG4gICAgcmVwbGFjZW1lbnQgPSByZXBsYWNlbWVudCAhPT0gdW5kZWZpbmVkICYmIHJlcGxhY2VtZW50ICE9PSBudWxsID8gcmVwbGFjZW1lbnQgKyAnJyA6ICcnXG5cbiAgICByZXBsYWNlbWVudCA9IHJlcGxhY2VtZW50LnJlcGxhY2UoL1tcXHJ8XFxuXSsvZywgXCJcXG5cIilcblxuICAgIHRoaXMuc3ZnID0gdGhpcy5zdmcucmVwbGFjZShzZWFyY2gsIHJlcGxhY2VtZW50KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFkanVzdFRleHQoc2VsZWN0b3IsIHRleHRMZW5ndGggPSBudWxsLCB0ZXh0QW5jaG9yID0gJ3N0YXJ0Jykge1xuICAgIHRoaXMuYWRqdXN0VGV4dFF1ZXJpZXMucHVzaCh7c2VsZWN0b3IsIHRleHRMZW5ndGgsIHRleHRBbmNob3J9KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFkanVzdFRleHRhcmVhKHNlbGVjdG9yLCB3aWR0aCwgaGVpZ2h0LCBsaW5lSGVpZ2h0ID0gMS4yLCBwYWRkaW5nWCA9IDAuNSwgcGFkZGluZ1kgPSAwLjUsIG5vd3JhcCA9IGZhbHNlKSB7XG4gICAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyh0aGlzLnN2ZywgJ3RleHQvaHRtbCcpXG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2MucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICBjb25zdCB0ZXh0U3ZnID0gdGV4dEVsZW1lbnQub3V0ZXJIVE1MXG4gICAgLy8gU1ZHRWxlbWVudCBkb2Vzbid0IGhhdmUgaW5uZXJUZXh0XG4gICAgLy8gQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU1ZHRWxlbWVudFxuICAgIGNvbnN0IHRleHRDb250ZW50ID0gdGV4dEVsZW1lbnQuaW5uZXJIVE1MLnJlcGxhY2UobmV3IFJlZ0V4cCgnXjx0c3BhbltePl0qPigoLnxcXFxccykqKTwvdHNwYW4+JCcpLCAnJDEnKVxuXG4gICAgY29uc3QgYWRqdXN0ZWRUZXh0U3ZnID0gYWRqdXN0VGV4dGFyZWEodGV4dFN2ZywgdGV4dENvbnRlbnQsIHdpZHRoLCBoZWlnaHQsIGxpbmVIZWlnaHQsIHBhZGRpbmdYLCBwYWRkaW5nWSwgbm93cmFwKVxuXG4gICAgdGhpcy5yZXBsYWNlKHRleHRTdmcsIGFkanVzdGVkVGV4dFN2ZylcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBhcHBseSgpIHtcbiAgICBpZiAodGhpcy5zdmcgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcikub3V0ZXJIVE1MKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpLm91dGVySFRNTCA9IHRoaXMuc3ZnXG4gICAgfVxuXG4gICAgdGhpcy5hZGp1c3RUZXh0UXVlcmllcy5mb3JFYWNoKHF1ZXJ5ID0+IHtcbiAgICAgIGFkanVzdFRleHQocXVlcnkuc2VsZWN0b3IsIHtcbiAgICAgICAgdGV4dExlbmd0aDogcXVlcnkudGV4dExlbmd0aCxcbiAgICAgICAgJ3RleHQtYW5jaG9yJzogcXVlcnkudGV4dEFuY2hvcixcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIGluaXRpYWxpemVcbiAgICB0aGlzLnN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcikub3V0ZXJIVE1MXG4gICAgdGhpcy5hZGp1c3RUZXh0UXVlcmllcyA9IFtdXG4gIH1cbn1cbiIsImltcG9ydCBzdWJTdHJpbmdCeVdpZHRoIGZyb20gJy4vc3ViLXN0cmluZy1ieS13aWR0aCdcblxuZXhwb3J0IGRlZmF1bHQgKHN0cmluZywgd2lkdGgpID0+IHtcbiAgbGV0IHNwbGl0cyA9IFtdXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBsZXQgc3BsaXQgPSBzdWJTdHJpbmdCeVdpZHRoKHN0cmluZywgMCwgd2lkdGgpXG4gICAgc3BsaXRzLnB1c2goc3BsaXQpXG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2Uoc3BsaXQsICcnKVxuICAgIGlmICghc3RyaW5nKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzcGxpdHNcbn1cbiIsImltcG9ydCBzdHJpbmdXaWR0aCBmcm9tICdzdHJpbmctd2lkdGgnXG5cbmV4cG9ydCBkZWZhdWx0IChzdHJpbmcsIHN0YXJ0LCB3aWR0aCkgPT4ge1xuICBsZXQgY3VycmVudFdpZHRoID0gMFxuICBsZXQgc3ViU3RyaW5nID0gJydcblxuICBmb3IgKGxldCBpID0gc3RhcnQ7IDsgaSsrKSB7XG4gICAgY29uc3QgY2hhciA9IHN0cmluZy5zdWJzdHIoaSwgMSlcbiAgICBjdXJyZW50V2lkdGggKz0gc3RyaW5nV2lkdGgoY2hhcilcbiAgICBpZiAoY3VycmVudFdpZHRoIDw9IHdpZHRoICYmIGkgPD0gc3RyaW5nLmxlbmd0aCkge1xuICAgICAgc3ViU3RyaW5nICs9IGNoYXJcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRXaWR0aCA+PSB3aWR0aCB8fCBpID49IHN0cmluZy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBzdWJTdHJpbmdcbiAgICB9XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gaHR0cHM6Ly9tdGhzLmJlL2Vtb2ppXG4gIHJldHVybiAvXFx1RDgzQ1xcdURGRjRcXHVEQjQwXFx1REM2N1xcdURCNDBcXHVEQzYyKD86XFx1REI0MFxcdURDNjVcXHVEQjQwXFx1REM2RVxcdURCNDBcXHVEQzY3fFxcdURCNDBcXHVEQzczXFx1REI0MFxcdURDNjNcXHVEQjQwXFx1REM3NHxcXHVEQjQwXFx1REM3N1xcdURCNDBcXHVEQzZDXFx1REI0MFxcdURDNzMpXFx1REI0MFxcdURDN0Z8XFx1RDgzRFxcdURDNjgoPzpcXHVEODNDXFx1REZGQ1xcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NcXHVERkZCfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGRlxcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZFXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkRdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkRcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkJcXHVERkZDXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdTIwMEQoPzpcXHUyNzY0XFx1RkUwRlxcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0RcXHVEQzY4fCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdTIwMEQoPzpcXHVEODNEXFx1REM2NlxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2N1xcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSkpfFxcdUQ4M0RcXHVEQzY2XFx1MjAwRFxcdUQ4M0RcXHVEQzY2fFxcdUQ4M0RcXHVEQzY3XFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2NlxcdURDNjddKXwoPzpcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pfFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRnxcXHVEODNEW1xcdURDNjZcXHVEQzY3XXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8KD86XFx1RDgzQ1xcdURGRkJcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkZcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkVcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkRcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkNcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF0pXFx1RkUwRnxcXHVEODNDXFx1REZGQlxcdTIwMEQoPzpcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXwoPzpcXHVEODNFXFx1REREMVxcdUQ4M0NcXHVERkZCXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1xcdURGRkNcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjkpXFx1RDgzQ1xcdURGRkJ8XFx1RDgzRVxcdURERDEoPzpcXHVEODNDXFx1REZGRlxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8XFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxKXwoPzpcXHVEODNFXFx1REREMVxcdUQ4M0NcXHVERkZFXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1xcdURGRkZcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pKSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSl8KD86XFx1RDgzRVxcdURERDFcXHVEODNDXFx1REZGQ1xcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMXxcXHVEODNEXFx1REM2OVxcdUQ4M0NcXHVERkZEXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY5KSg/OlxcdUQ4M0NbXFx1REZGQlxcdURGRkNdKXxcXHVEODNEXFx1REM2OSg/OlxcdUQ4M0NcXHVERkZFXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZDXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCXFx1REZGRC1cXHVERkZGXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZCXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkRcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1MjAwRCg/OlxcdTI3NjRcXHVGRTBGXFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKXxcXHVEODNEW1xcdURDNjhcXHVEQzY5XSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZGXFx1MjAwRCg/OlxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKSl8XFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzRFxcdURDNjlcXHUyMDBEKD86XFx1RDgzRFxcdURDNjZcXHUyMDBEXFx1RDgzRFxcdURDNjZ8XFx1RDgzRFxcdURDNjdcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pKXwoPzpcXHVEODNFXFx1REREMVxcdUQ4M0NcXHVERkZEXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1xcdURGRkVcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjkpKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkRdKXxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2NlxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2OVxcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSl8KD86XFx1RDgzRFxcdURDNDFcXHVGRTBGXFx1MjAwRFxcdUQ4M0RcXHVEREU4fFxcdUQ4M0RcXHVEQzY5KD86XFx1RDgzQ1xcdURGRkZcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkVcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkNcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkJcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkRcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdKXwoPzooPzpcXHUyNkY5fFxcdUQ4M0NbXFx1REZDQlxcdURGQ0NdfFxcdUQ4M0RcXHVERDc1KVxcdUZFMEZ8XFx1RDgzRFxcdURDNkZ8XFx1RDgzRVtcXHVERDNDXFx1RERERVxcdUREREZdKVxcdTIwMERbXFx1MjY0MFxcdTI2NDJdfCg/OlxcdTI2Rjl8XFx1RDgzQ1tcXHVERkNCXFx1REZDQ118XFx1RDgzRFxcdURENzUpKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKVxcdTIwMERbXFx1MjY0MFxcdTI2NDJdfCg/OlxcdUQ4M0NbXFx1REZDM1xcdURGQzRcXHVERkNBXXxcXHVEODNEW1xcdURDNkVcXHVEQzcxXFx1REM3M1xcdURDNzdcXHVEQzgxXFx1REM4MlxcdURDODZcXHVEQzg3XFx1REU0NS1cXHVERTQ3XFx1REU0QlxcdURFNERcXHVERTRFXFx1REVBM1xcdURFQjQtXFx1REVCNl18XFx1RDgzRVtcXHVERDI2XFx1REQzNy1cXHVERDM5XFx1REQzRFxcdUREM0VcXHVEREI4XFx1RERCOVxcdUREQ0QtXFx1RERDRlxcdURERDYtXFx1RERERF0pKD86KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKVxcdTIwMERbXFx1MjY0MFxcdTI2NDJdfFxcdTIwMERbXFx1MjY0MFxcdTI2NDJdKXxcXHVEODNDXFx1REZGNFxcdTIwMERcXHUyNjIwKVxcdUZFMEZ8XFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzRFxcdURDNjdcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pfFxcdUQ4M0NcXHVERkYzXFx1RkUwRlxcdTIwMERcXHVEODNDXFx1REYwOHxcXHVEODNEXFx1REMxNVxcdTIwMERcXHVEODNFXFx1RERCQXxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2N3xcXHVEODNDXFx1RERGRFxcdUQ4M0NcXHVEREYwfFxcdUQ4M0NcXHVEREY0XFx1RDgzQ1xcdURERjJ8XFx1RDgzQ1xcdURERjZcXHVEODNDXFx1RERFNnxbI1xcKjAtOV1cXHVGRTBGXFx1MjBFM3xcXHVEODNDXFx1RERFNyg/OlxcdUQ4M0NbXFx1RERFNlxcdURERTdcXHVEREU5LVxcdURERUZcXHVEREYxLVxcdURERjRcXHVEREY2LVxcdURERjlcXHVEREZCXFx1RERGQ1xcdURERkVcXHVEREZGXSl8XFx1RDgzQ1xcdURERjkoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFOVxcdURERUItXFx1RERFRFxcdURERUYtXFx1RERGNFxcdURERjdcXHVEREY5XFx1RERGQlxcdURERkNcXHVEREZGXSl8XFx1RDgzQ1xcdURERUEoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVEXFx1RERGNy1cXHVEREZBXSl8XFx1RDgzRVxcdURERDEoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfFxcdUQ4M0NcXHVEREY3KD86XFx1RDgzQ1tcXHVEREVBXFx1RERGNFxcdURERjhcXHVEREZBXFx1RERGQ10pfFxcdUQ4M0RcXHVEQzY5KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXxcXHVEODNDXFx1RERGMig/OlxcdUQ4M0NbXFx1RERFNlxcdURERTgtXFx1RERFRFxcdURERjAtXFx1RERGRl0pfFxcdUQ4M0NcXHVEREU2KD86XFx1RDgzQ1tcXHVEREU4LVxcdURERUNcXHVEREVFXFx1RERGMVxcdURERjJcXHVEREY0XFx1RERGNi1cXHVEREZBXFx1RERGQ1xcdURERkRcXHVEREZGXSl8XFx1RDgzQ1xcdURERjAoPzpcXHVEODNDW1xcdURERUFcXHVEREVDLVxcdURERUVcXHVEREYyXFx1RERGM1xcdURERjVcXHVEREY3XFx1RERGQ1xcdURERkVcXHVEREZGXSl8XFx1RDgzQ1xcdURERUQoPzpcXHVEODNDW1xcdURERjBcXHVEREYyXFx1RERGM1xcdURERjdcXHVEREY5XFx1RERGQV0pfFxcdUQ4M0NcXHVEREU5KD86XFx1RDgzQ1tcXHVEREVBXFx1RERFQ1xcdURERUZcXHVEREYwXFx1RERGMlxcdURERjRcXHVEREZGXSl8XFx1RDgzQ1xcdURERkUoPzpcXHVEODNDW1xcdURERUFcXHVEREY5XSl8XFx1RDgzQ1xcdURERUMoPzpcXHVEODNDW1xcdURERTZcXHVEREU3XFx1RERFOS1cXHVEREVFXFx1RERGMS1cXHVEREYzXFx1RERGNS1cXHVEREZBXFx1RERGQ1xcdURERkVdKXxcXHVEODNDXFx1RERGOCg/OlxcdUQ4M0NbXFx1RERFNi1cXHVEREVBXFx1RERFQy1cXHVEREY0XFx1RERGNy1cXHVEREY5XFx1RERGQlxcdURERkQtXFx1RERGRl0pfFxcdUQ4M0NcXHVEREVCKD86XFx1RDgzQ1tcXHVEREVFLVxcdURERjBcXHVEREYyXFx1RERGNFxcdURERjddKXxcXHVEODNDXFx1RERGNSg/OlxcdUQ4M0NbXFx1RERFNlxcdURERUEtXFx1RERFRFxcdURERjAtXFx1RERGM1xcdURERjctXFx1RERGOVxcdURERkNcXHVEREZFXSl8XFx1RDgzQ1xcdURERkIoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVFXFx1RERGM1xcdURERkFdKXxcXHVEODNDXFx1RERGMyg/OlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBLVxcdURERUNcXHVEREVFXFx1RERGMVxcdURERjRcXHVEREY1XFx1RERGN1xcdURERkFcXHVEREZGXSl8XFx1RDgzQ1xcdURERTgoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFOVxcdURERUItXFx1RERFRVxcdURERjAtXFx1RERGNVxcdURERjdcXHVEREZBLVxcdURERkZdKXxcXHVEODNDXFx1RERGMSg/OlxcdUQ4M0NbXFx1RERFNi1cXHVEREU4XFx1RERFRVxcdURERjBcXHVEREY3LVxcdURERkJcXHVEREZFXSl8XFx1RDgzQ1xcdURERkYoPzpcXHVEODNDW1xcdURERTZcXHVEREYyXFx1RERGQ10pfFxcdUQ4M0NcXHVEREZDKD86XFx1RDgzQ1tcXHVEREVCXFx1RERGOF0pfFxcdUQ4M0NcXHVEREZBKD86XFx1RDgzQ1tcXHVEREU2XFx1RERFQ1xcdURERjJcXHVEREYzXFx1RERGOFxcdURERkVcXHVEREZGXSl8XFx1RDgzQ1xcdURERUUoPzpcXHVEODNDW1xcdURERTgtXFx1RERFQVxcdURERjEtXFx1RERGNFxcdURERjYtXFx1RERGOV0pfFxcdUQ4M0NcXHVEREVGKD86XFx1RDgzQ1tcXHVEREVBXFx1RERGMlxcdURERjRcXHVEREY1XSl8KD86XFx1RDgzQ1tcXHVERkMzXFx1REZDNFxcdURGQ0FdfFxcdUQ4M0RbXFx1REM2RVxcdURDNzFcXHVEQzczXFx1REM3N1xcdURDODFcXHVEQzgyXFx1REM4NlxcdURDODdcXHVERTQ1LVxcdURFNDdcXHVERTRCXFx1REU0RFxcdURFNEVcXHVERUEzXFx1REVCNC1cXHVERUI2XXxcXHVEODNFW1xcdUREMjZcXHVERDM3LVxcdUREMzlcXHVERDNEXFx1REQzRVxcdUREQjhcXHVEREI5XFx1RERDRC1cXHVERENGXFx1RERENi1cXHVEREREXSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfCg/OlxcdTI2Rjl8XFx1RDgzQ1tcXHVERkNCXFx1REZDQ118XFx1RDgzRFxcdURENzUpKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXwoPzpbXFx1MjYxRFxcdTI3MEEtXFx1MjcwRF18XFx1RDgzQ1tcXHVERjg1XFx1REZDMlxcdURGQzddfFxcdUQ4M0RbXFx1REM0MlxcdURDNDNcXHVEQzQ2LVxcdURDNTBcXHVEQzY2XFx1REM2N1xcdURDNkItXFx1REM2RFxcdURDNzBcXHVEQzcyXFx1REM3NC1cXHVEQzc2XFx1REM3OFxcdURDN0NcXHVEQzgzXFx1REM4NVxcdURDQUFcXHVERDc0XFx1REQ3QVxcdUREOTBcXHVERDk1XFx1REQ5NlxcdURFNENcXHVERTRGXFx1REVDMFxcdURFQ0NdfFxcdUQ4M0VbXFx1REQwRlxcdUREMTgtXFx1REQxQ1xcdUREMUVcXHVERDFGXFx1REQzMC1cXHVERDM2XFx1RERCNVxcdUREQjZcXHVEREJCXFx1REREMi1cXHVEREQ1XSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfCg/OltcXHUyMzFBXFx1MjMxQlxcdTIzRTktXFx1MjNFQ1xcdTIzRjBcXHUyM0YzXFx1MjVGRFxcdTI1RkVcXHUyNjE0XFx1MjYxNVxcdTI2NDgtXFx1MjY1M1xcdTI2N0ZcXHUyNjkzXFx1MjZBMVxcdTI2QUFcXHUyNkFCXFx1MjZCRFxcdTI2QkVcXHUyNkM0XFx1MjZDNVxcdTI2Q0VcXHUyNkQ0XFx1MjZFQVxcdTI2RjJcXHUyNkYzXFx1MjZGNVxcdTI2RkFcXHUyNkZEXFx1MjcwNVxcdTI3MEFcXHUyNzBCXFx1MjcyOFxcdTI3NENcXHUyNzRFXFx1Mjc1My1cXHUyNzU1XFx1Mjc1N1xcdTI3OTUtXFx1Mjc5N1xcdTI3QjBcXHUyN0JGXFx1MkIxQlxcdTJCMUNcXHUyQjUwXFx1MkI1NV18XFx1RDgzQ1tcXHVEQzA0XFx1RENDRlxcdUREOEVcXHVERDkxLVxcdUREOUFcXHVEREU2LVxcdURERkZcXHVERTAxXFx1REUxQVxcdURFMkZcXHVERTMyLVxcdURFMzZcXHVERTM4LVxcdURFM0FcXHVERTUwXFx1REU1MVxcdURGMDAtXFx1REYyMFxcdURGMkQtXFx1REYzNVxcdURGMzctXFx1REY3Q1xcdURGN0UtXFx1REY5M1xcdURGQTAtXFx1REZDQVxcdURGQ0YtXFx1REZEM1xcdURGRTAtXFx1REZGMFxcdURGRjRcXHVERkY4LVxcdURGRkZdfFxcdUQ4M0RbXFx1REMwMC1cXHVEQzNFXFx1REM0MFxcdURDNDItXFx1RENGQ1xcdURDRkYtXFx1REQzRFxcdURENEItXFx1REQ0RVxcdURENTAtXFx1REQ2N1xcdUREN0FcXHVERDk1XFx1REQ5NlxcdUREQTRcXHVEREZCLVxcdURFNEZcXHVERTgwLVxcdURFQzVcXHVERUNDXFx1REVEMC1cXHVERUQyXFx1REVENVxcdURFRUJcXHVERUVDXFx1REVGNC1cXHVERUZBXFx1REZFMC1cXHVERkVCXXxcXHVEODNFW1xcdUREMEQtXFx1REQzQVxcdUREM0MtXFx1REQ0NVxcdURENDctXFx1REQ3MVxcdURENzMtXFx1REQ3NlxcdUREN0EtXFx1RERBMlxcdUREQTUtXFx1RERBQVxcdUREQUUtXFx1RERDQVxcdUREQ0QtXFx1RERGRlxcdURFNzAtXFx1REU3M1xcdURFNzgtXFx1REU3QVxcdURFODAtXFx1REU4MlxcdURFOTAtXFx1REU5NV0pfCg/OlsjXFwqMC05XFx4QTlcXHhBRVxcdTIwM0NcXHUyMDQ5XFx1MjEyMlxcdTIxMzlcXHUyMTk0LVxcdTIxOTlcXHUyMUE5XFx1MjFBQVxcdTIzMUFcXHUyMzFCXFx1MjMyOFxcdTIzQ0ZcXHUyM0U5LVxcdTIzRjNcXHUyM0Y4LVxcdTIzRkFcXHUyNEMyXFx1MjVBQVxcdTI1QUJcXHUyNUI2XFx1MjVDMFxcdTI1RkItXFx1MjVGRVxcdTI2MDAtXFx1MjYwNFxcdTI2MEVcXHUyNjExXFx1MjYxNFxcdTI2MTVcXHUyNjE4XFx1MjYxRFxcdTI2MjBcXHUyNjIyXFx1MjYyM1xcdTI2MjZcXHUyNjJBXFx1MjYyRVxcdTI2MkZcXHUyNjM4LVxcdTI2M0FcXHUyNjQwXFx1MjY0MlxcdTI2NDgtXFx1MjY1M1xcdTI2NUZcXHUyNjYwXFx1MjY2M1xcdTI2NjVcXHUyNjY2XFx1MjY2OFxcdTI2N0JcXHUyNjdFXFx1MjY3RlxcdTI2OTItXFx1MjY5N1xcdTI2OTlcXHUyNjlCXFx1MjY5Q1xcdTI2QTBcXHUyNkExXFx1MjZBQVxcdTI2QUJcXHUyNkIwXFx1MjZCMVxcdTI2QkRcXHUyNkJFXFx1MjZDNFxcdTI2QzVcXHUyNkM4XFx1MjZDRVxcdTI2Q0ZcXHUyNkQxXFx1MjZEM1xcdTI2RDRcXHUyNkU5XFx1MjZFQVxcdTI2RjAtXFx1MjZGNVxcdTI2RjctXFx1MjZGQVxcdTI2RkRcXHUyNzAyXFx1MjcwNVxcdTI3MDgtXFx1MjcwRFxcdTI3MEZcXHUyNzEyXFx1MjcxNFxcdTI3MTZcXHUyNzFEXFx1MjcyMVxcdTI3MjhcXHUyNzMzXFx1MjczNFxcdTI3NDRcXHUyNzQ3XFx1Mjc0Q1xcdTI3NEVcXHUyNzUzLVxcdTI3NTVcXHUyNzU3XFx1Mjc2M1xcdTI3NjRcXHUyNzk1LVxcdTI3OTdcXHUyN0ExXFx1MjdCMFxcdTI3QkZcXHUyOTM0XFx1MjkzNVxcdTJCMDUtXFx1MkIwN1xcdTJCMUJcXHUyQjFDXFx1MkI1MFxcdTJCNTVcXHUzMDMwXFx1MzAzRFxcdTMyOTdcXHUzMjk5XXxcXHVEODNDW1xcdURDMDRcXHVEQ0NGXFx1REQ3MFxcdURENzFcXHVERDdFXFx1REQ3RlxcdUREOEVcXHVERDkxLVxcdUREOUFcXHVEREU2LVxcdURERkZcXHVERTAxXFx1REUwMlxcdURFMUFcXHVERTJGXFx1REUzMi1cXHVERTNBXFx1REU1MFxcdURFNTFcXHVERjAwLVxcdURGMjFcXHVERjI0LVxcdURGOTNcXHVERjk2XFx1REY5N1xcdURGOTktXFx1REY5QlxcdURGOUUtXFx1REZGMFxcdURGRjMtXFx1REZGNVxcdURGRjctXFx1REZGRl18XFx1RDgzRFtcXHVEQzAwLVxcdURDRkRcXHVEQ0ZGLVxcdUREM0RcXHVERDQ5LVxcdURENEVcXHVERDUwLVxcdURENjdcXHVERDZGXFx1REQ3MFxcdURENzMtXFx1REQ3QVxcdUREODdcXHVERDhBLVxcdUREOERcXHVERDkwXFx1REQ5NVxcdUREOTZcXHVEREE0XFx1RERBNVxcdUREQThcXHVEREIxXFx1RERCMlxcdUREQkNcXHVEREMyLVxcdUREQzRcXHVEREQxLVxcdURERDNcXHVERERDLVxcdUREREVcXHVEREUxXFx1RERFM1xcdURERThcXHVEREVGXFx1RERGM1xcdURERkEtXFx1REU0RlxcdURFODAtXFx1REVDNVxcdURFQ0ItXFx1REVEMlxcdURFRDVcXHVERUUwLVxcdURFRTVcXHVERUU5XFx1REVFQlxcdURFRUNcXHVERUYwXFx1REVGMy1cXHVERUZBXFx1REZFMC1cXHVERkVCXXxcXHVEODNFW1xcdUREMEQtXFx1REQzQVxcdUREM0MtXFx1REQ0NVxcdURENDctXFx1REQ3MVxcdURENzMtXFx1REQ3NlxcdUREN0EtXFx1RERBMlxcdUREQTUtXFx1RERBQVxcdUREQUUtXFx1RERDQVxcdUREQ0QtXFx1RERGRlxcdURFNzAtXFx1REU3M1xcdURFNzgtXFx1REU3QVxcdURFODAtXFx1REU4MlxcdURFOTAtXFx1REU5NV0pXFx1RkUwRnwoPzpbXFx1MjYxRFxcdTI2RjlcXHUyNzBBLVxcdTI3MERdfFxcdUQ4M0NbXFx1REY4NVxcdURGQzItXFx1REZDNFxcdURGQzdcXHVERkNBLVxcdURGQ0NdfFxcdUQ4M0RbXFx1REM0MlxcdURDNDNcXHVEQzQ2LVxcdURDNTBcXHVEQzY2LVxcdURDNzhcXHVEQzdDXFx1REM4MS1cXHVEQzgzXFx1REM4NS1cXHVEQzg3XFx1REM4RlxcdURDOTFcXHVEQ0FBXFx1REQ3NFxcdURENzVcXHVERDdBXFx1REQ5MFxcdUREOTVcXHVERDk2XFx1REU0NS1cXHVERTQ3XFx1REU0Qi1cXHVERTRGXFx1REVBM1xcdURFQjQtXFx1REVCNlxcdURFQzBcXHVERUNDXXxcXHVEODNFW1xcdUREMEZcXHVERDE4LVxcdUREMUZcXHVERDI2XFx1REQzMC1cXHVERDM5XFx1REQzQy1cXHVERDNFXFx1RERCNVxcdUREQjZcXHVEREI4XFx1RERCOVxcdUREQkJcXHVERENELVxcdUREQ0ZcXHVEREQxLVxcdURERERdKS9nO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHN0cmlwQW5zaSA9IHJlcXVpcmUoJ3N0cmlwLWFuc2knKTtcbmNvbnN0IGlzRnVsbHdpZHRoQ29kZVBvaW50ID0gcmVxdWlyZSgnaXMtZnVsbHdpZHRoLWNvZGUtcG9pbnQnKTtcbmNvbnN0IGVtb2ppUmVnZXggPSByZXF1aXJlKCdlbW9qaS1yZWdleCcpO1xuXG5jb25zdCBzdHJpbmdXaWR0aCA9IHN0cmluZyA9PiB7XG5cdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJyB8fCBzdHJpbmcubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRzdHJpbmcgPSBzdHJpcEFuc2koc3RyaW5nKTtcblxuXHRpZiAoc3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoZW1vamlSZWdleCgpLCAnICAnKTtcblxuXHRsZXQgd2lkdGggPSAwO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgY29kZSA9IHN0cmluZy5jb2RlUG9pbnRBdChpKTtcblxuXHRcdC8vIElnbm9yZSBjb250cm9sIGNoYXJhY3RlcnNcblx0XHRpZiAoY29kZSA8PSAweDFGIHx8IChjb2RlID49IDB4N0YgJiYgY29kZSA8PSAweDlGKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gSWdub3JlIGNvbWJpbmluZyBjaGFyYWN0ZXJzXG5cdFx0aWYgKGNvZGUgPj0gMHgzMDAgJiYgY29kZSA8PSAweDM2Rikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gU3Vycm9nYXRlc1xuXHRcdGlmIChjb2RlID4gMHhGRkZGKSB7XG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0d2lkdGggKz0gaXNGdWxsd2lkdGhDb2RlUG9pbnQoY29kZSkgPyAyIDogMTtcblx0fVxuXG5cdHJldHVybiB3aWR0aDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nV2lkdGg7XG4vLyBUT0RPOiByZW1vdmUgdGhpcyBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gc3RyaW5nV2lkdGg7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSB5b2RhICovXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlzRnVsbHdpZHRoQ29kZVBvaW50ID0gY29kZVBvaW50ID0+IHtcblx0aWYgKE51bWJlci5pc05hTihjb2RlUG9pbnQpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gQ29kZSBwb2ludHMgYXJlIGRlcml2ZWQgZnJvbTpcblx0Ly8gaHR0cDovL3d3dy51bml4Lm9yZy9QdWJsaWMvVU5JREFUQS9FYXN0QXNpYW5XaWR0aC50eHRcblx0aWYgKFxuXHRcdGNvZGVQb2ludCA+PSAweDExMDAgJiYgKFxuXHRcdFx0Y29kZVBvaW50IDw9IDB4MTE1RiB8fCAvLyBIYW5ndWwgSmFtb1xuXHRcdFx0Y29kZVBvaW50ID09PSAweDIzMjkgfHwgLy8gTEVGVC1QT0lOVElORyBBTkdMRSBCUkFDS0VUXG5cdFx0XHRjb2RlUG9pbnQgPT09IDB4MjMyQSB8fCAvLyBSSUdIVC1QT0lOVElORyBBTkdMRSBCUkFDS0VUXG5cdFx0XHQvLyBDSksgUmFkaWNhbHMgU3VwcGxlbWVudCAuLiBFbmNsb3NlZCBDSksgTGV0dGVycyBhbmQgTW9udGhzXG5cdFx0XHQoMHgyRTgwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHgzMjQ3ICYmIGNvZGVQb2ludCAhPT0gMHgzMDNGKSB8fFxuXHRcdFx0Ly8gRW5jbG9zZWQgQ0pLIExldHRlcnMgYW5kIE1vbnRocyAuLiBDSksgVW5pZmllZCBJZGVvZ3JhcGhzIEV4dGVuc2lvbiBBXG5cdFx0XHQoMHgzMjUwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHg0REJGKSB8fFxuXHRcdFx0Ly8gQ0pLIFVuaWZpZWQgSWRlb2dyYXBocyAuLiBZaSBSYWRpY2Fsc1xuXHRcdFx0KDB4NEUwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4QTRDNikgfHxcblx0XHRcdC8vIEhhbmd1bCBKYW1vIEV4dGVuZGVkLUFcblx0XHRcdCgweEE5NjAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEE5N0MpIHx8XG5cdFx0XHQvLyBIYW5ndWwgU3lsbGFibGVzXG5cdFx0XHQoMHhBQzAwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhEN0EzKSB8fFxuXHRcdFx0Ly8gQ0pLIENvbXBhdGliaWxpdHkgSWRlb2dyYXBoc1xuXHRcdFx0KDB4RjkwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4RkFGRikgfHxcblx0XHRcdC8vIFZlcnRpY2FsIEZvcm1zXG5cdFx0XHQoMHhGRTEwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhGRTE5KSB8fFxuXHRcdFx0Ly8gQ0pLIENvbXBhdGliaWxpdHkgRm9ybXMgLi4gU21hbGwgRm9ybSBWYXJpYW50c1xuXHRcdFx0KDB4RkUzMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4RkU2QikgfHxcblx0XHRcdC8vIEhhbGZ3aWR0aCBhbmQgRnVsbHdpZHRoIEZvcm1zXG5cdFx0XHQoMHhGRjAxIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhGRjYwKSB8fFxuXHRcdFx0KDB4RkZFMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4RkZFNikgfHxcblx0XHRcdC8vIEthbmEgU3VwcGxlbWVudFxuXHRcdFx0KDB4MUIwMDAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweDFCMDAxKSB8fFxuXHRcdFx0Ly8gRW5jbG9zZWQgSWRlb2dyYXBoaWMgU3VwcGxlbWVudFxuXHRcdFx0KDB4MUYyMDAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweDFGMjUxKSB8fFxuXHRcdFx0Ly8gQ0pLIFVuaWZpZWQgSWRlb2dyYXBocyBFeHRlbnNpb24gQiAuLiBUZXJ0aWFyeSBJZGVvZ3JhcGhpYyBQbGFuZVxuXHRcdFx0KDB4MjAwMDAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweDNGRkZEKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVsbHdpZHRoQ29kZVBvaW50O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGlzRnVsbHdpZHRoQ29kZVBvaW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgYW5zaVJlZ2V4ID0gcmVxdWlyZSgnYW5zaS1yZWdleCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZyA9PiB0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJyA/IHN0cmluZy5yZXBsYWNlKGFuc2lSZWdleCgpLCAnJykgOiBzdHJpbmc7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gKHtvbmx5Rmlyc3QgPSBmYWxzZX0gPSB7fSkgPT4ge1xuXHRjb25zdCBwYXR0ZXJuID0gW1xuXHRcdCdbXFxcXHUwMDFCXFxcXHUwMDlCXVtbXFxcXF0oKSM7P10qKD86KD86KD86W2EtekEtWlxcXFxkXSooPzo7Wy1hLXpBLVpcXFxcZFxcXFwvIyYuOj0/JUB+X10qKSopP1xcXFx1MDAwNyknLFxuXHRcdCcoPzooPzpcXFxcZHsxLDR9KD86O1xcXFxkezAsNH0pKik/W1xcXFxkQS1QUi1UWmNmLW50cXJ5PT48fl0pKSdcblx0XS5qb2luKCd8Jyk7XG5cblx0cmV0dXJuIG5ldyBSZWdFeHAocGF0dGVybiwgb25seUZpcnN0ID8gdW5kZWZpbmVkIDogJ2cnKTtcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9