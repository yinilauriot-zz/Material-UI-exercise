/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/src/index.js: Unexpected token (6:16)\n\n\u001b[0m \u001b[90m 4 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 6 | \u001b[39m\u001b[33mReactDOM\u001b[39m\u001b[33m.\u001b[39mrender(\u001b[33m<\u001b[39m\u001b[33mIndex\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m,\u001b[39m document\u001b[33m.\u001b[39mgetElementById(\u001b[32m'root'\u001b[39m))\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 7 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 8 | \u001b[39m\u001b[90m// If you want your app to work offline and load faster, you can change\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 9 | \u001b[39m\u001b[90m// unregister() to register() below. Note this comes with some pitfalls.\u001b[39m\u001b[0m\n    at Parser.raise (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:4028:15)\n    at Parser.unexpected (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:5343:16)\n    at Parser.parseExprAtom (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:6432:20)\n    at Parser.parseExprSubscripts (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:6019:21)\n    at Parser.parseMaybeUnary (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:5998:21)\n    at Parser.parseExprOps (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:5907:21)\n    at Parser.parseMaybeConditional (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:5879:21)\n    at Parser.parseMaybeAssign (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:5826:21)\n    at Parser.parseExprListItem (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:7111:18)\n    at Parser.parseCallExpressionArguments (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:6227:22)\n    at Parser.parseSubscript (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:6129:32)\n    at Parser.parseSubscripts (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:6039:19)\n    at Parser.parseExprSubscripts (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:6029:17)\n    at Parser.parseMaybeUnary (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:5998:21)\n    at Parser.parseExprOps (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:5907:21)\n    at Parser.parseMaybeConditional (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:5879:21)\n    at Parser.parseMaybeAssign (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:5826:21)\n    at Parser.parseExpression (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:5779:21)\n    at Parser.parseStatementContent (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:7391:21)\n    at Parser.parseStatement (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:7277:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:7829:23)\n    at Parser.parseBlockBody (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:7816:10)\n    at Parser.parseTopLevel (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:7242:10)\n    at Parser.parse (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:8642:17)\n    at parse (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/parser/lib/index.js:10648:38)\n    at parser (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\n    at normalizeFile (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\n    at runSync (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/Users/yinilauriot/Documents/Test_entretien/OneWealthPlace/create-react-app/node_modules/@babel/core/lib/transform.js:34:34)");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map