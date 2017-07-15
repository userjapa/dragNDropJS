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
        clone.set(ev.target)
        console.log('Drop to: ' + clone.get().className)
    }, false)

    e.addEventListener('drag', (ev) => {
        clone.set(ev.target)
        console.log('dragging')
    }, false)
    
}

let addDrop = (e) => {
    e.addEventListener('dragover', (ev) => {
        ev.preventDefault()
        console.log('Prepared to drop')
    }, false)

    e.addEventListener('drop', (ev) => {
        ev.preventDefault()
        if (rules.check(ev.target)) {
            var aux = clone.get()
            add(aux)
            if (rules.insert(ev.target))
                ev.target.appendChild(aux)
            else
                ev.target.parentNode.insertBefore(aux, ev.target)
                
            console.log('Drop to ' + aux.parentNode.className)
        } else {
            console.log('NOT A VALID ELEMENT TO BE DROPED!')
        }
    }, false)
}

let addTrash = (e) => {
    e.addEventListener('dragover', (ev) => {
        ev.preventDefault()
        console.log('Prepared to drop')
    }, false)

    e.addEventListener('drop', (ev) => {
        ev.preventDefault()
        if (rules.remove(ev.target)) {
            var aux = clone.get()
            aux.parentNode.removeChild(aux)
            console.log('deleted')
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