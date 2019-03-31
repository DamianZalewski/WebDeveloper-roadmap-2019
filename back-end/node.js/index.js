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
    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(data);
    //     })
    // }
    // else if(req.url === '/api/users') {
    //     const users = [
    //         { name: 'Bob Smith', age: 40},
    //         { name: 'John Doe', age: 30}
    //     ];
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    // build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // extension of file
    let extname = path.extname(filePath);

    // initial content type
    let contentType = 'text/html';

    // check ext and set content type
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));


// 1:05:02