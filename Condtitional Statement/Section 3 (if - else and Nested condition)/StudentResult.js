let prompt = require("prompt-sync")();

let marks1 = parseInt(prompt("enter the first marks : "));
let marks2 = parseInt(prompt("enter the second marks : "));
let marks3 = parseInt(prompt("enter the third marks : "));

let average = (marks1+marks2+marks3)/3;

if(average >= 75){
    console.log("you are get Destination  " + average);
} else if(average >= 60 && average < 75){
    console.log("you are get first Division  " + average);
} else if(average >= 50 && average < 60){
    console.log("you are get second Division  " + average);
} else if(average >= 40 && average < 50){
    console.log("you have passed  " + average);
} else {
    console.log("you are Fail  " + average);
}