let clone = require('./../clone/clone.js')

let check = (el) => {
    var aux = verify(el)
    if (new RegExp('drag').test(aux.className))
        return false
    else 
        return true
    
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

let verify = (el) => {
    if (new RegExp('drag').test(el.className) || new RegExp('drop').test(el.className) && !new RegExp('item').test(el.className))
        return el
    else
        return (verify(el.parentNode))
}

const rules = {
    check: check,
    remove: remove,
    insert: insert
}

module.exports = rules