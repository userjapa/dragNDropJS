const click = require('./click/click.js');
var item = document.getElementsByClassName('item'),
    itemdrop = document.getElementsByClassName('item-drop'),
    drop = document.getElementsByClassName('drop');
    trash = document.getElementsByClassName('trash');

var toDrop, fromDrop;


window.onload = function() {
    for (e of item) click.add(e)
    for (e of drop) click.addDrop(e);
    for (e of itemdrop) click.addDrop(e);
    for (e of trash) click.addTrash(e);
}



