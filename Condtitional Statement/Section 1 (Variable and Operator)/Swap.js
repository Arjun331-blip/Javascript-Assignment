let prompt = require('prompt-sync')();
let a = parseInt(prompt("enter number of a : "));
let b = parseInt(prompt("enter number of b : "));

console.log("a = " + a + "  b = " + b);

// swap  using temp variable
// let temp = a;
// a = b;
// b = temp;
// console.log("a = " + a + "  b = " + b);

// swap without third variable
a = a - b;
b = b + a;
a = b - a;
console.log("a = " + a + "  b = " + b);