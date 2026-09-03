let prompt = require("prompt-sync")();

let a = parseInt(prompt("enter the number of a : "));
let b = parseInt(prompt("enter the number of b : "));

if(a > b) {
    console.log("a is greater than b");
} else {
    console.log("b is greater than a");
}