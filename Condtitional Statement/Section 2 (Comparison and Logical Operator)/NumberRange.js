let prompt = require("prompt-sync")();

let number = parseInt(prompt("enter the number : "));

if(10 < number && number < 100){
    console.log("number is between 10 and 100");
} else {
    console.log("numbet is not between 10 and 100");
}