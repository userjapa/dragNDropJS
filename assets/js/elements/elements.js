const click = require('./../click/click.js')

var item = document.getElementsByClassName('item'),
    itemdrop = document.getElementsByClassName('item-drop'),
    drop = document.getElementsByClassName('drop'),
    trash = document.getElementsByClassName('trash')

let get = () => {
    item = document.getElementsByClassName('item'),
    itemdrop = document.getElementsByClassName('item-drop'),
    drop = document.getElementsByClassName('drop'),
    trash = document.getElementsByClassName('trash')
}


let run = () => {
    for (e of item) click.add(e)
    for (e of itemdrop) click.addDrop(e)
    for (e of drop) click.addDrop(e)
    for (e of trash) click.addTrash(e)
}

const elements = {
    run : run,
    get : get 
}

module.exports = elements
