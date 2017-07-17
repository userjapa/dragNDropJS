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