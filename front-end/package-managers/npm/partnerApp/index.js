const _ = require('lodash');

const numbers = [33,24,43,3,32,12];

_.each(numbers, function(number, i){
    console.log(number);
});