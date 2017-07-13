let rules = require('./rules.js')

let addAtribute = (e) => {
    e.setAttribute('draggable', 'true');
}

let add = (e) => {
    e.addEventListener('mousedown', () => {
        e.style.cursor = 'all-scroll';
    }, false);
    e.addEventListener('mouseup', () => {
        e.style.cursor = 'pointer';
    }, false);
    addAtribute(e);
    insert(e);
}

let addDrop = (e) => {
    e.addEventListener('dragover', (ev) => {
        ev.preventDefault();
        console.log('Prepared to drop');
    }, false);

    e.addEventListener('drop', (ev) => {
        ev.preventDefault();
        if (rules.check(ev.target)) {
            ev.target.appendChild(fromDrop);
            console.log('Drop to '+ev.target.className);
        } else {
            console.log('NOT A VALID ELEMENT TO BE DROPED!');
        }
    }, false);
}

let addTrash = (e) => {
    e.addEventListener('dragover', (ev) => {
        ev.preventDefault();
        console.log('Prepared to drop');
    }, false);

    e.addEventListener('drop', (ev) => {
        ev.preventDefault();
        if (rules.remove(ev.target)) {
            fromDrop.parentNode.removeChild(fromDrop);
            console.log('deleted');
        } else {
            console.log('NOT A VALID ELEMENT TO BE DROPED!');
        }
    }, false)
}

let insert = (e) => {
    e.addEventListener('dragstart', (ev) => {
        if (rules.paretIsDrag(ev.target)) {
            fromDrop = ev.target.cloneNode(true);
            console.log('Cloned');
        } else {
            fromDrop = ev.target;
            console.log('Content');
        }
        console.log('Drop from: ' + fromDrop.className);
    }, false);

    e.addEventListener('drag', (ev) => {
        if (rules.paretIsDrag(ev.target)) {
            fromDrop = ev.target.cloneNode(true);
            console.log('Cloned');
        } else {
            fromDrop = ev.target;
            console.log('Content');
        }
        console.log('dragging');
    }, false);

}

const mouse = {
    add: add,
    addDrop: addDrop,
    addTrash: addTrash
}

module.exports = mouse