let prompt = require("prompt-sync")();

let age = parseInt(prompt("enter your age : "));

if(age > 0 && age <= 12){
    console.log("you are a child");
} else if(age >= 13 && age <= 19){
    console.log("you are a Teenager");
} else if(age >= 20 && age <= 59){
    console.log("you are a Adult");
} else {
    console.log("you are a senior citizen");
}