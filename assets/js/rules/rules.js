let clone = require('./../clone/clone.js')

let check = (el) => {
    var aux = clone.get()
    if (new RegExp('item-drop').test(aux.className)) {
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

let remove = (el) => {
    if (el.className.indexOf('trash') >= 0 || el.parentNode.className.indexOf('trash') >= 0)
        return true
    else
        return false
}

const rules = {
    check : check,
    remove : remove
}

module.exports = rules