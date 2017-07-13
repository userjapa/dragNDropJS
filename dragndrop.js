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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

let rules = __webpack_require__(1)

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
        if (rules.check(ev.target)) {
            ev.target.appendChild(fromDrop);
            console.log('Drop to '+ev.target.className);
        } else {
            console.log('NOT A VALID ELEMENT TO BE DROPED!');
        }
    }, false);
}

let addTrash = (e) => {
    e.addEventListener('dragover', (ev) => {
        ev.preventDefault();
        console.log('Prepared to drop');
    }, false);

    e.addEventListener('drop', (ev) => {
        ev.preventDefault();
        if (rules.remove(ev.target)) {
            fromDrop.parentNode.removeChild(fromDrop);
            console.log('deleted');
        } else {
            console.log('NOT A VALID ELEMENT TO BE DROPED!');
        }
    }, false)
}

let insert = (e) => {
    e.addEventListener('dragstart', (ev) => {
        if (rules.paretIsDrag(ev.target)) {
            fromDrop = ev.target.cloneNode(true);
            console.log('Cloned');
        } else {
            fromDrop = ev.target;
            console.log('Content');
        }
        console.log('Drop from: ' + fromDrop.className);
    }, false);

    e.addEventListener('drag', (ev) => {
        if (rules.paretIsDrag(ev.target)) {
            fromDrop = ev.target.cloneNode(true);
            console.log('Cloned');
        } else {
            fromDrop = ev.target;
            console.log('Content');
        }
        console.log('dragging');
    }, false);

}

const mouse = {
    add: add,
    addDrop: addDrop,
    addTrash: addTrash
}

module.exports = mouse

/***/ }),
/* 1 */
/***/ (function(module, exports) {

let check = (el) => {
    if (new RegExp('item-drop').test(fromDrop.className)) {
        if (!(new RegExp('drag').test(el.parentNode.className)) && ((new RegExp('drop').test(el.className)) && !(new RegExp('drop').test(el.parentNode.className))))
            return true
        else
            return false
    } else {
        if (!(new RegExp('drag').test(el.parentNode.className)))
            return true
        else
            return false
    }
}

let paretIsDrag = (el) => {
    if (el.parentNode.className.indexOf('drag') >= 0)
        return true
    else
        return false
}

let remove = (el) => {
    if (el.className.indexOf('trash') >= 0 || el.parentNode.className.indexOf('trash') >= 0)
        return true
    else
        return false
}

const rules = {
    check: check,
    paretIsDrag: paretIsDrag,
    remove: remove
}

module.exports = rules

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const click = __webpack_require__(0);
var item = document.getElementsByClassName('item'),
    itemdrop = document.getElementsByClassName('item-drop'),
    drop = document.getElementsByClassName('drop');
    trash = document.getElementsByClassName('trash');

var toDrop, fromDrop;


window.onload = function() {
    for (e of item) click.add(e)
    for (e of drop) click.addDrop(e);
    for (e of itemdrop) click.addDrop(e);
    for (e of trash) click.addTrash(e);
}





/***/ })
/******/ ]);