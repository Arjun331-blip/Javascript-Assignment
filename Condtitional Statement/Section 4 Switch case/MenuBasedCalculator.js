let prompt = require("prompt-sync")();

console.log("Addtion for 1");
console.log("Subtraction for 2");
console.log("Multiplication for 3");
console.log("Division for 4");
console.log("Remainde for 5");

let operator = parseInt(prompt("Choose the operation : "));
let firstNumber = parseInt(prompt("enter the first number : "));
let secondNumber = parseInt(prompt("enter the second number : "));

switch(operator){
    case 1 : console.log("Addition : " + (firstNumber+secondNumber));
        break;
    case 2 : console.log("Subtraction : " + (firstNumber-secondNumber));
        break;
    case 3 : console.log("Multiplication : " + (firstNumber*secondNumber));
        break;
    case 4 : console.log("Division : " + (firstNumber/secondNumber));
        break;
    case 5 : console.log("Remainder : " + (firstNumber%secondNumber));
        break;
}