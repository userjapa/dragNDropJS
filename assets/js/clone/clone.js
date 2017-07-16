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
}

let drop = {
    get : get,
    set : set
}

module.exports = drop