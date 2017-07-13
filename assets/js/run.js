const click = require('./click/click.js');

var element;
const type = ['item', 'item-drop'];

window.onload = function() {
    click.inset();
}

document.onmouseover = function(e) {
    var targ;
    if (!e) var e = window.event;
    if (e.target) targ = e.target;
    else if(e.srcElement) targ = e.srcElement;
    if(targ.nodeType === 3)
        targ = targ.parentNode;
    element = targ;
    //console.log(element.className);
}

