const EventEmitter = require('events')

const customEmitter = new EventEmitter
customEmitter.on('response', (name, id) => {
    console.log(`Data received User:${name} ID:${id}`);
})
customEmitter.on('response', () => {
    console.log('Some logic here');
})
customEmitter.emit('response', 'Samuel', 57)