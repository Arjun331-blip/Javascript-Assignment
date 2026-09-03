let prompt = require("prompt-sync")();

let age = parseInt(prompt("enter the age : "));
let hasLicense = parseInt(prompt("enter the zero and one : "));

if(age > 18 && Boolean(hasLicence) === true){
    console.log("you are eligible for the Driving License");
} else {
    console.log("you are not eligible for the Driving License");
}