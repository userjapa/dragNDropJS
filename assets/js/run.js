const elements = require('./elements/elements.js')

let exec = () => {
    elements.get()
    elements.run()
}

const run = {
    run : exec
}

console.log('Loaded')

module.exports = run