let clone = require('./../clone/clone.js')

let check = (el) => {
    if (new RegExp('drop').test(el.className) || new RegExp('drop').test(el.parentNode.className)) {
        return true;
    } else {
        return false
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