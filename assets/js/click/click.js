let rules = require('./../rules/rules.js'),
    clone = require('./../clone/clone.js')

let add = (e) => {

    e.setAttribute('draggable', 'true')

    e.addEventListener('mousedown', () => {
        e.style.cursor = 'all-scroll'
    }, false)
    e.addEventListener('mouseup', () => {
        e.style.cursor = 'pointer'
    }, false)

    e.addEventListener('dragstart', (ev) => {
        clone.set(clone.checkEl(ev.target))
    }, false)

    e.addEventListener('drag', (ev) => {
        clone.set(clone.checkEl(ev.target))
    }, false)    
}

let addDrop = (e) => {
    e.addEventListener('dragover', (ev) => {
        ev.preventDefault()
    }, false)

    e.addEventListener('drop', (ev) => {
        ev.preventDefault()
        if (rules.check(ev.target)) {
            var aux = clone.get()
            add(aux)
            var aux2 = clone.checkEl(ev.target)
            if (rules.insert(aux2))
                aux2.appendChild(aux)
            else
                aux2.parentNode.insertBefore(aux, aux2)
                
        } else {
            console.log('NOT A VALID ELEMENT TO BE DROPED! Class: '+ev.target.className)
        }
    }, false)
}

let addTrash = (e) => {
    e.addEventListener('dragover', (ev) => {
        ev.preventDefault()
    }, false)

    e.addEventListener('drop', (ev) => {
        ev.preventDefault()
        if (rules.remove(ev.target)) {
            var aux = clone.get()
            aux.parentNode.removeChild(aux)
        } else {
            console.log('NOT A VALID ELEMENT TO BE DROPED!')
        }
    }, false)
}

const mouse = {
    add: add,
    addDrop: addDrop,
    addTrash: addTrash
}

module.exports = mouse