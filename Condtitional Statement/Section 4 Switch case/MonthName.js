let prompt = require("prompt-sync")();

let month = parseInt(prompt("enter the month : "));

switch(month){
    case 1 : console.log("January");
        break;
    case 2 : console.log("Fabruary");
        break;
    case 3 : console.log("March");
        break;
    case 4 : console.log("April");
        break;
    case 5 : console.log("May");
        break;
    case 6 : console.log("June");
        break;
    case 7 : console.log("July");
        break;
    case 8 : console.log("August");
        break;
    case 9 : console.log("Septemper");
        break;
    case 10 : console.log("October");
        break;
    case 11 : console.log("November");
        break;
    case 12 : console.log("December");
        break;
    default : console.log("invalid Month")
        break;
}
