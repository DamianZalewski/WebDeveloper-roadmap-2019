// console.log('hello from Node.js...');
// import Person from './person';
// const Person = require('./person');

// const person1 = new Person('John Doe', 21);

// person1.greeting();


// console.log('-------------');
// console.log(__dirname, __filename);\

// const Logger = require('./logger');

// const logger = new Logger();
// logger.on('message', data => console.log('Called Listener', data));
// logger.log('Hello World!');
// logger.log('Hello World!');
// logger.log('Hello World!');
// logger.log('Hello World!');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('<h1>HOM222E</h1>')
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));


// 1:05:02