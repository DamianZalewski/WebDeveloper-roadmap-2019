console.log('hello from Node.js...');
import Person from './person';
const Person = require('./person');

const person1 = new Person('John Doe', 21);

person1.greeting();


console.log('-------------');
console.log(__dirname, __filename);