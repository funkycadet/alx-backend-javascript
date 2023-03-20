#!/usr/bin/node
// const calculateNumber = require('./0-calcul.js');
const calculateNumber = require('./1-calcul.js')

// console.log(calculateNumber(1, 3));
// console.log(calculateNumber(1, 4.59));
console.log(calculateNumber('SUM', 1.4, 4.5));
console.log(calculateNumber('SUBTRACT', 1.4, 4.5));
console.log(calculateNumber('DIVIDE', 1.4, 4.5));
console.log(calculateNumber('DIVIDE', 1.4, 0));
