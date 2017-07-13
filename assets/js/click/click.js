var item = document.getElementsByClassName('item'),
    itemdrop = document.getElementsByClassName('item-drop'),
    drop = document.getElementsByClassName('drop');

var toDrop;

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
        ev.target.appendChild(toDrop);
        console.log(toDrop.className+' dropped');
    }, false);
}

let inset = () => {
    for (e of item) add(e)
    for (e of drop) addDrop(e);
    for (e of itemdrop) addDrop(e);
}

let insert = (e) => {
    e.addEventListener('dragstart', (ev) => {
        toDrop = ev.target.cloneNode(true);
        console.log('To drop: '+toDrop.className);
    }, false);

    e.addEventListener('drag', (ev) => {
        console.log('dragging');
    }, false);

}


const mouse = {
    inset: inset
}

module.exports = mouse