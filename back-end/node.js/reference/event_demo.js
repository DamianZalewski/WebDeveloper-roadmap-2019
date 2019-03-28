const EventEmmiter = require('events');

// Create class
class MyEmitter extends EventEmmiter {}

// init object 

const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'));

myEmitter.emit('event');