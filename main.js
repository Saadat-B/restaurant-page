/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n  const contact = document.createElement(\"div\");\n  contact.setAttribute(\"id\", \"contact\");\n  contact.innerHTML = `<h3>CONTACT US</h3>\n    <p>\n        <h4>Mama Bear</h4>\n        Chef\n\n555-555-5554\n\ntotallyRealEmail@notFake.com\n    </p>\n    <p>\n        <h4>Papa Bear</h4>\n        Manager\n\n555-555-5555\n\nperfectlyRealEmail@notFake.com\n    </p>\n    <p>\n        <h4>Baby Bear</h4>\n        Waiter\n\n        555-555-5556\n        \n        totallyRealEmail@notFake.com\n    </p>`;\n  content.append(contact);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content1\": () => (/* binding */ content1)\n/* harmony export */ });\nfunction content1() {\n  const body = document.querySelector(\"body\");\n  const content1 = document.createElement(\"div\");\n  content1.setAttribute(\"id\", \"content\");\n  body.append(content1);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/content.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home() {\n  const home = document.createElement(\"div\");\n  home.setAttribute(\"id\", \"homepage\");\n  home.innerHTML = `\n  <h3>Beary's Breakfast</h3>\n          <div class=\"card\">\n            <p>\n              Beary's has the best porridge! The atmosphere and customer service\n              make you feel like you are sitting in the middle of the woods,\n              eating like a bear! This is exactly the kind of place that I like\n              to return to again and again.\n            </p>\n          </div>\n          <div class=\"card\">\n            <h4>Goldilocks</h4>\n            <p>\n              Beary's has the best porridge! The atmosphere and customer service\n              make you feel like you are sitting in the middle of the woods,\n              eating like a bear! This is exactly the kind of place that I like\n              to return to again and again.\n            </p>\n          </div>\n          <div class=\"card\">\n            <h4>Hours</h4>\n            <p>\n              <li>Sunday: 8am - 8pm</li>\n              <li>Monday: 6am - 6pm</li>\n              <li>Tuesday: 6am - 6pm</li>\n              <li>Wednesday:6am - 6pm</li>\n              <li>Thursday: 6am - 10pm</li>\n              <li>Friday: 6am - 10pm</li>\n              <li>Saturday: 8am -10pm</li>\n            </p>\n          </div>\n          <div class=\"card\">\n            <h4>Location</h4>\n            <p>123 Forest Drive, Forestville, Maine</p>\n          </div>\n  `;\n  content.append(home);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n(0,_content__WEBPACK_IMPORTED_MODULE_0__.content1)();\nconst content = document.querySelector(\"#content\");\n(0,_navbar__WEBPACK_IMPORTED_MODULE_1__.navbar)();\n\nconst homebtn = document.querySelector(\"#homebtn\");\nconst menubtn = document.querySelector(\"#menubtn\");\nconst contactbtn = document.querySelector(\"#contactbtn\");\n\nfunction showHome() {\n  if (content.children[1]) {\n    content.removeChild(content.children[1]);\n  }\n  (0,_home__WEBPACK_IMPORTED_MODULE_2__.home)();\n}\n\nfunction showMenu() {\n  if (content.children[1]) {\n    content.removeChild(content.children[1]);\n  }\n  (0,_menu__WEBPACK_IMPORTED_MODULE_3__.menu)();\n}\nfunction showContact() {\n  if (content.children[1]) {\n    content.removeChild(content.children[1]);\n  }\n  (0,_contact__WEBPACK_IMPORTED_MODULE_4__.contact)();\n}\n\nhomebtn.addEventListener(\"click\", showHome);\nmenubtn.addEventListener(\"click\", showMenu);\ncontactbtn.addEventListener(\"click\", showContact);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n  const menu = document.createElement(\"div\");\n  menu.setAttribute(\"id\", \"menu\");\n  menu.innerHTML = `<h3>MENU</h3>\n  <h4>Beverages</h4>\n  <p><h5>Honey Tea</h5>\n      A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!\n  </p>\n  <p><h5>Beary Tea</h5>\n      A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.\n  </p>\n  <h4>Sides</h4>\n  <p><h5>Toast and Jam</h5>\n      A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.\n  </p>`;\n  content.append(menu);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navbar\": () => (/* binding */ navbar)\n/* harmony export */ });\nfunction navbar() {\n  const navbar = document.createElement(\"div\");\n  navbar.setAttribute(\"id\", \"nav-bar\");\n  navbar.innerHTML = `\n<button id=\"homebtn\">Home</button>\n<button id=\"menubtn\">Menu</button>\n<button id=\"contactbtn\">Contact</button>\n`;\n  content.prepend(navbar);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/navbar.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;