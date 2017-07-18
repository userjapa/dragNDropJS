var toDrop, parent


let get = () => {
    return toDrop;
}

let getParent= () => {
    return parent;
}

let set = (el) => {
    if (new RegExp('drag-copy').test(el.parentNode.className)) {
        toDrop = el.cloneNode(true);
    } else {
        toDrop = el;
    }
    parent = el.parentNode
    el.contentEditable = true;
}

let checkEl = (el) => {
    if (new RegExp('drop').test(el.className) || new RegExp('item').test(el.className)) {
        return el
    } else {
        return checkEl(el.parentNode)
    }
}

const drop = {
    get : get,
    set : set,
    checkEl : checkEl,
    getParent : getParent
}

module.exports = drop