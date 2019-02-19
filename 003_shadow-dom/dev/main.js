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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_helloworld_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/helloworld.js */ \"./components/helloworld.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal.js */ \"./components/modal.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_modal_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\r\n\r\nvar el = document.createElement('hello-world');\r\nel.name = 'Hassen';\r\ndocument.getElementById('app').appendChild(el);\r\n\r\n// Dynamic imports only work in Chrome\r\n// Uncomment\r\n// import('./components/helloworld.js').then(helloworld => {\r\n//     var el = new helloworld.HelloWorld;\r\n//     el.name = 'Hassen';\r\n//     document.getElementById('app').appendChild(el);\r\n// })\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./components/helloworld.js":
/*!**********************************!*\
  !*** ./components/helloworld.js ***!
  \**********************************/
/*! exports provided: HelloWorld, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HelloWorld\", function() { return HelloWorld; });\n\r\n\r\n/**\r\n * Very basic Hello World button.\r\n */\r\nclass HelloWorld extends HTMLElement {\r\n    // Constructor\r\n    constructor() {\r\n        super();\r\n        this.sayHello = this.sayHello.bind(this);\r\n    }\r\n    // Properties\r\n    get name() {\r\n        return this.getAttribute('name');\r\n    }\r\n    set name(name) {\r\n        this.setAttribute('name', name)\r\n    }\r\n    // Methods\r\n    sayHello() {\r\n        // Only possible with open mode\r\n        this._modal.shadowRoot.querySelector('#hello-name').innerText = this.name;\r\n        this._modal.open();\r\n    }\r\n    // Custom element callbacks configuration\r\n    connectedCallback() {\r\n        this.innerHTML = /* html */`\r\n            <button class=\"hello\">Hello ${this.name}</button>\r\n        `;\r\n\r\n        // Adding an Hello World modal if it does not exist\r\n        if (!(this._modal = document.querySelector('#hello-dialog'))) {\r\n            document.body.insertAdjacentHTML('beforeend', /* html */`\r\n                <modal-dialog id=\"hello-dialog\">\r\n                    <h1 slot=\"title\">Hello!</h1>\r\n                    <p id=\"message\">Hello <span id=\"hello-name\">World</span>!</p>\r\n                </modal-dialog>\r\n            `);\r\n            this._modal = document.querySelector('#hello-dialog');\r\n            this._modal.addEventListener('ok', (e) => console.log('ok', e.target))\r\n            this._modal.addEventListener('cancel', (e) => console.log('cancel', e.target))\r\n        }\r\n        this.querySelector('.hello').addEventListener('click', this.sayHello);\r\n    }\r\n    disconnectedCallback() {\r\n        this.querySelector('.hello').removeEventListener('click', this.sayHello);\r\n    }\r\n    static get observedAttributes() {\r\n        return ['name'];\r\n    }\r\n    attributeChangedCallback(name, oldValue, newValue) {\r\n        if (name === 'name') {\r\n            const helloBtn = this.querySelector('.hello');\r\n            if (!helloBtn) return;\r\n            this.querySelector('.hello').innerText = `Bye ${oldValue}, Hello ${newValue}`;\r\n        }\r\n    }\r\n}\r\n\r\ncustomElements.define('hello-world', HelloWorld);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (HelloWorld);\r\n\r\n\n\n//# sourceURL=webpack:///./components/helloworld.js?");

/***/ }),

/***/ "./components/modal.js":
/*!*****************************!*\
  !*** ./components/modal.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Modal custom element showcasing ShadowDOM features.\n */\nclass Modal extends HTMLElement {\n  constructor() {\n    super()\n    // Open mode makes this.shadowRoot available for this component\n    this.attachShadow({ mode: 'open' });\n    // For closed mode, use the returned reference\n    // const shadowRoot = this.attachShadow({ mode: 'closed' });\n\n    this.shadowRoot.innerHTML = /* html */`\n    <style>\n      /* Resets the styling of the component so that the parent CSS does not affect this component */\n      :host {\n          all: initial\n      }\n\n      #backdrop {\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100vh;\n          background: rgba(0, 0, 0, 0.75);\n          z-index: 10;\n          opacity: 0;\n          pointer-events: none;\n      }\n\n      #modal {\n          position: fixed;\n          top: 15vh;\n          left: 25%;\n          width: 50%;\n          background: white;\n          z-index: 100;\n          opacity: 0;\n          pointer-events: none;\n          padding: 1rem;\n      }\n\n      :host([opened]) #backdrop,\n      :host([opened]) #modal {\n          opacity: 1;\n          pointer-events: all;\n      }\n\n      ::slotted(h1) {\n          color: purple;\n          font-size: 1.25rem;\n          margin: 0\n      }\n\n      ::slotted(#message) {\n          color: red;\n      }\n    </style>\n    <div id=\"backdrop\"></div>\n    <div id=\"modal\">\n      <slot name=\"title\">Header Slot</slot>\n      <slot><span id=\"message\">Default Slot</span></slot>\n      <button id=\"btn-cancel\">Cancel</button>\n      <button id=\"btn-ok\">OK</button>\n    </div>\n    `;\n\n    this.shadowRoot.querySelector('#btn-cancel').addEventListener('click', this._cancel.bind(this))\n    this.shadowRoot.querySelector('#btn-ok').addEventListener('click', this._ok.bind(this))\n  }\n\n  // connectedCallback () {} // not needed for this\n  // disconnectedCallback () {} // not needed for this\n  // static get observedAttributes () {\n  //   return ['opened']\n  // }\n  // attributeChangedCallback (name, oldVal, newVal) {\n  //   if (name === 'opened') console.log ('opened attribute', this.hasAttribute('opened'))\n  // }\n\n  open () {\n    if (!this.hasAttribute('opened')) this.setAttribute('opened', '')\n  }\n  hide () {\n    if (this.hasAttribute('opened')) this.removeAttribute('opened')\n  }\n\n  // 2 ways to dispatch events\n  _cancel (e) {\n    this.hide()\n    // The 'composed: true' configuration allows the event to leave the shadow DOM tree\n    // You can set to it false to see the effect\n    const cancelEvent = new Event('cancel', { bubbles:  true, composed: true })\n    e.target.dispatchEvent(cancelEvent)\n  }\n\n  _ok (e) {\n    this.hide()\n    const okEvent = new Event('ok')\n    this.dispatchEvent(okEvent); // this one is attached to our component\n  }\n\n}\n\ncustomElements.define('modal-dialog', Modal)\n\n\n//# sourceURL=webpack:///./components/modal.js?");

/***/ })

/******/ });