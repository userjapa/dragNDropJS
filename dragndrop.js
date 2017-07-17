var DragNDrop =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var toDrop


let get = () => {
    return toDrop;
}

let set = (el) => {
    if (new RegExp('drag-copy').test(el.parentNode.className)) {
        toDrop = el.cloneNode(true);
        console.log('Cloned '+ toDrop.className + '---------')
    } else {
        toDrop = el;
        console.log('Got '+ toDrop.className + '---------')
    }
    allowEdit(toDrop)
}

let checkEl = (el) => {
    if (new RegExp('drop').test(el.className) || new RegExp('item').test(el.className)) {
        return el
    } else {
        return checkEl(el.parentNode)
    }
}

let allowEdit = (el) => {
    var tags = ['P','PRE','H1','H2','H3','H4','H5','H6','SPAN','STRONG']
    var itens = el.childNodes
    for (e of itens) {
        if (tags.includes(e.tagName))
            e.contentEditable = true
    }
}
 
const drop = {
    get : get,
    set : set,
    checkEl : checkEl
}

module.exports = drop

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const click = __webpack_require__(2)

var item = document.getElementsByClassName('item'),
    itemdrop = document.getElementsByClassName('item-drop'),
    drop = document.getElementsByClassName('drop'),
    trash = document.getElementsByClassName('trash')

let get = () => {
    item = document.getElementsByClassName('item'),
    itemdrop = document.getElementsByClassName('item-drop'),
    drop = document.getElementsByClassName('drop'),
    trash = document.getElementsByClassName('trash')
}


let run = () => {
    for (e of item) click.add(e)
    for (e of itemdrop) click.addDrop(e)
    for (e of drop) click.addDrop(e)
    for (e of trash) click.addTrash(e)
}

const elements = {
    run : run,
    get : get 
}

module.exports = elements


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

let rules = __webpack_require__(3),
    clone = __webpack_require__(0)

let add = (e) => {

    e.setAttribute('draggable', 'true')

    e.addEventListener('mousedown', () => {
        e.style.cursor = 'all-scroll'
    }, false)
    e.addEventListener('mouseup', () => {
        e.style.cursor = 'pointer'
    }, false)

    e.addEventListener('dragstart', (ev) => {
        clone.set(clone.checkEl(ev.target))
        console.log('Drop to: ' + clone.get().className)
    }, false)

    e.addEventListener('drag', (ev) => {
        clone.set(clone.checkEl(ev.target))
        console.log('dragging')
    }, false)    
}

let addDrop = (e) => {
    e.addEventListener('dragover', (ev) => {
        ev.preventDefault()
        console.log('Prepared to drop')
    }, false)

    e.addEventListener('drop', (ev) => {
        ev.preventDefault()
        var el = clone.checkEl(ev.target)
        if (rules.check(el)) {
            var aux = clone.get()
            add(aux)
            if (rules.insert(el))
                el.appendChild(aux)
            else
                el.parentNode.insertBefore(aux, el)
                
            console.log('Drop to ' + aux.parentNode.className)
        } else {
            console.log('NOT A VALID ELEMENT TO BE DROPED! Class: '+ev.target.className)
        }
    }, false)
}

let addTrash = (e) => {
    e.addEventListener('dragover', (ev) => {
        ev.preventDefault()
        console.log('Prepared to drop')
    }, false)

    e.addEventListener('drop', (ev) => {
        ev.preventDefault()
        if (rules.remove(ev.target)) {
            var aux = clone.get()
            aux.parentNode.removeChild(aux)
            console.log('deleted')
        } else {
            console.log('NOT A VALID ELEMENT TO BE DROPED!')
        }
    }, false)
}

const mouse = {
    add: add,
    addDrop: addDrop,
    addTrash: addTrash
}

module.exports = mouse

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

let clone = __webpack_require__(0)

let check = (el) => {
    if (new RegExp('drag').test(el.parentNode.className)) {
        return false;
    } else {
        return true;
    }
}

let remove = (el) => {
    if (new RegExp('trash').test(el.className) || new RegExp('trash').test(el.parentNode.className))
        return true
    else
        return false
}

let insert = (el) => {
    var aux = clone.get()
    
    if (new RegExp('drop').test(el.className)) {
        if ((new RegExp('drop').test(el.parentNode.className)) && (new RegExp('drop').test(aux.className))) {
            return false
        } else {
            return true
        }
    } else {
        return false
    } 
}

const rules = {
    check: check,
    remove: remove,
    insert: insert
}

module.exports = rules

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const elements = __webpack_require__(1)

let exec = () => {
    elements.get()
    elements.run()
}

const run = {
    run : exec
}

console.log('Loaded')

module.exports = run

/***/ })
/******/ ]);