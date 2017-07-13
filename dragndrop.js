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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var item = document.getElementsByClassName('item'),
    itemdrop = document.getElementsByClassName('item-drop'),
    drop = document.getElementsByClassName('drop');

var toDrop;

let addAtribute = (e) => {
    e.setAttribute('draggable', 'true');
}

let add = (e) => {
    e.addEventListener('mousedown', () => {
        e.style.cursor = 'all-scroll';
    }, false);
    e.addEventListener('mouseup', () => {
        e.style.cursor = 'pointer';
    }, false);
    addAtribute(e);
    insert(e);
}

let addDrop = (e) => {
    e.addEventListener('dragover', (ev) => {
        ev.preventDefault();
        console.log('Prepared to drop');
    }, false);

    e.addEventListener('drop', (ev) => {
        ev.preventDefault();
        ev.target.appendChild(toDrop);
        console.log(toDrop.className+' dropped');
    }, false);
}

let inset = () => {
    for (e of item) add(e)
    for (e of drop) addDrop(e);
    for (e of itemdrop) addDrop(e);
}

let insert = (e) => {
    e.addEventListener('dragstart', (ev) => {
        toDrop = ev.target.cloneNode(true);
        console.log('To drop: '+toDrop.className);
    }, false);

    e.addEventListener('drag', (ev) => {
        console.log('dragging');
    }, false);

}


const mouse = {
    inset: inset
}

module.exports = mouse

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const click = __webpack_require__(0);

var element;
const type = ['item', 'item-drop'];

window.onload = function() {
    click.inset();
}

document.onmouseover = function(e) {
    var targ;
    if (!e) var e = window.event;
    if (e.target) targ = e.target;
    else if(e.srcElement) targ = e.srcElement;
    if(targ.nodeType === 3)
        targ = targ.parentNode;
    element = targ;
    //console.log(element.className);
}



/***/ })
/******/ ]);