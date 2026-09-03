let prompt = require('prompt-sync')();
let a = parseInt(prompt("enter number of a : "));
let b = parseInt(prompt("enter number of b : "));

let add = a+b;
let subtract = a-b;
let multiply = a*b;
let division = a/b;
let remainder = a%b;

console.log("Addtion of two number : " + add);
console.log("subtraction of two number : " + subtract);
console.log("multiplication of two number : " + multiply);
console.log("division of two number : " + division);
console.log("remainder of two number : " + remainder);
