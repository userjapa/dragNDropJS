var toDrop


let get = () => {
    return toDrop;
}

let set = (el) => {
    if (new RegExp('drag-copy').test(el.parentNode.className)) {
        toDrop = el.cloneNode(true);
    } else {
        toDrop = el;
    }
}

let checkEl = (el) => {
    if (new RegExp('drop').test(el.className) || new RegExp('item').test(el.className)) {
        return el
    } else {
        return checkEl(el.parentNode)
    }
}

let verify = (el) => {
    if (new RegExp('drag').test(el.className) || (new RegExp('drop').test(el.className) && !new RegExp('item').test(el.className)))
        return el
    else
        return verify(el.parentNode)
}

const drop = {
    get : get,
    set : set,
    checkEl : checkEl,
    verify : verify
}

module.exports = drop