let prompt = require("prompt-sync")();

let experinence = parseInt(prompt("enter your year of experience : "));
let salary = parseInt(prompt("enter your salary : "));

let originalSalary = salary;
let bonus = 0;
let finalSalary = salary;

if(experinence >= 10){
    bonus = (salary/100)*20;
    finalSalary += bonus;
    console.log("based on experience " + experinence);
    console.log("your salary is " + salary);
    console.log("your bonus is " + bonus);
    console.log("final your salary and bonus : " + finalSalary);
}
else if(experinence < 10 && experinence >= 5){
    bonus = (salary/100)*10;
    finalSalary += bonus;
    console.log("based on experience " + experinence);
    console.log("your salary is " + salary);
    console.log("your bonus is " + bonus);
    console.log("final your salary and bonus : " + finalSalary);
}
else if(experinence < 5 && experinence >= 2){
    bonus = (salary/100)*5;
    finalSalary += bonus;
    console.log("based on experience " + experinence);
    console.log("your salary is " + salary);
    console.log("your bonus is " + bonus);
    console.log("final your salary and bonus : " + finalSalary);
}
else if(experinence < 2){
    console.log("based on experience " + experinence);
    console.log("your salary is " + salary);
    console.log("your bonus is " + bonus);
    console.log("final your salary and bonus : " + finalSalary);
}