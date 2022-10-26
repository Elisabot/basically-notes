// working with EventEmitter
let events = require('events')

let myWarnEmitter = new evets.EventEmitter()

let newWarningListener = (data) => {
    console.log(`warning found: ${data}`)
}

// using the .on method we name our callback and supply our listener
myWarnEmitter.on('warning', newWarningListener)
// emits an event, calling the the above event with .on's parameters
myWarnEmitter.emit('warning', 'christ is coming for christmas')

// I wonder if events have a name in addition to defined callbacks so that we can group multiple callbacks to one event, like in the case of needing to make multiple database queries or calls or ping multiple microservices
