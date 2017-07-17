var toDrop


let get = () => {
    return toDrop;
}

let set = (el) => {
    if (new RegExp('drag-copy').test(el.parentNode.className)) {
        toDrop = el.cloneNode(true);
        console.log('Cloned ' + toDrop.className + '---------')
    } else {
        toDrop = el;
        console.log('Got ' + toDrop.className + '---------')
    }
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
    get: get,
    set: set,
    checkEl: checkEl
}

module.exports = drop