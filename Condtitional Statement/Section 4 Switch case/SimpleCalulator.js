let prompt = require("prompt-sync")();

let operator = prompt("enter the Operator like(+, %, -, *, /, **) : ");

let firstNumber = parseInt(prompt("enter the first number : "));
let secondNumber = parseInt(prompt("enter the second number : "));

switch(operator){
    case "+" : console.log("Addition : " + (firstNumber+secondNumber));
        break;
    case "-" : console.log("Subtraction : " + (firstNumber-secondNumber));
        break;
    case "*" : console.log("Multiplication : " + (firstNumber*secondNumber));
        break;
    case "/" : console.log("Division : " + (firstNumber/secondNumber));
        break;
    case "%" : console.log("Remainder : " + (firstNumber%secondNumber));
        break;
}