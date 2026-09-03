let prompt = require("prompt-sync")();

let age = parseInt(prompt("enter the age : "));

if(age >= 18){
    console.log("you are eligible for the vote");
} else {
    console.log("you are not eligible for the vote");
}