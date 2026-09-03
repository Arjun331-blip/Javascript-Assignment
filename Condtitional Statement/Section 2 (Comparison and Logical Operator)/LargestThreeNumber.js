let prompt = require("prompt-sync")();

let a = parseInt(prompt("enter the number of a : "));
let b = parseInt(prompt("enter the number of b : "));
let c = parseInt(prompt("enter the number of c : "));

if(a > b && a > c){
    console.log("a is greater than b and c");
} else if(a < b && b > c){
    console.log("b is greater than a and c");
}else {
    console.log("c is greater than a and b");
}