let prompt = require("prompt-sync")();

let number = parseInt(prompt("enter the number : "));

if(0 < number){
    console.log("the number is positive");
} else if(0 > number){
    console.log("the number is negative");
} else {
    console.log("the number is zero");
}