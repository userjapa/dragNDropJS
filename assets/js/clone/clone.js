var toDrop, parent;

let get = () => {
    return toDrop;
}

let getParent = () => {
    return parent;
} 

let set = (el) => {
    if (new RegExp('drag-copy').test(el.parentNode.className)) {
        parent = el.parentNode.className;
        toDrop = el.cloneNode(true);
        console.log('Cloned '+ toDrop.className + '---------')
    } else {
        parent = el.parentNode.className;
        toDrop = el;
        console.log('Got '+ toDrop.className + '---------')
    }
}

let drop = {
    get : get,
    set : set,
    getParent : getParent
}

module.exports = drop