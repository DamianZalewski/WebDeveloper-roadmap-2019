const _ = require('lodash');

const numbers = [33,24,432,3,332,12];

_.each(numbers, function(number, i){
    console.log(number);
});