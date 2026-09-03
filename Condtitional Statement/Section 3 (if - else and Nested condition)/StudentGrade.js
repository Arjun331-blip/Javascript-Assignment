let prompt = require("prompt-sync")();

let marks1 = parseInt(prompt("enter the first marks : "));
let marks2 = parseInt(prompt("enter the second marks : "));
let marks3 = parseInt(prompt("enter the third marks : "));

let percentage = ((marks1+marks2+marks3)/300)*100;

if(percentage < 100 && 90 <= percentage){
    console.log("student has grade A " + percentage);
} else if(percentage < 90 && 80 <= percentage){
    console.log("student has grade B " + percentage);
} else if(percentage < 80 && 70 <= percentage){
    console.log("student has grade C " + percentage);
} else if(percentage < 70 && 60 <= percentage){
    console.log("student has grade D " + percentage);
} else if(percentage < 60 && 40 <= percentage){
    console.log("student has grade E " + percentage);
} else {
    console.log("Fail " + percentage);
} 
