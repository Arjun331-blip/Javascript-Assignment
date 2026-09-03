let prompt = require("prompt-sync")();

let number = parseInt(prompt("Enter the number : "));

if(number%2 === 0){
    console.log("the number is Even.");
} else{
    console.log("the number is Odd.");
}