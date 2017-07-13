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