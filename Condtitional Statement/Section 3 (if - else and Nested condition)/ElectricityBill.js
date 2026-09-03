let prompt = require("prompt-sync")();

let number = parseInt(prompt("enter the number of unit : "));
let finalElectricityBill = null;
let discount = 0;
if(0 < number && number <= 100){
    finalElectricityBill = number * 5;
    console.log("consumed your elsectricity units : " + number);
    console.log("your Original electricity bill is " + finalElectricityBill);
    console.log("your discount electricity bill is " + discount);
    console.log("you electricity bill is " + Number(finalElectricityBill - discount));
} else if(101 <= number && number <= 200){
    let n1 = (number - 100)
    finalElectricityBill = n1 * 7;
    number = number - n1;
    finalElectricityBill += number * 5;
    console.log("consumed your elsectricity units : " + number);
    console.log("your Original electricity bill is " + finalElectricityBill);
    console.log("your discount electricity bill is " + discount);
    console.log("you electricity bill is " + Number(finalElectricityBill - discount));
}
 else if(200 < number){
    console.log("consumed your elsectricity units : " + number);
    let n1 = number - 200;
    finalElectricityBill = n1 * 10;
    let n2 = number - n1 - 100;
    finalElectricityBill += n2 * 7;
    number = number - n1 - n2;
    finalElectricityBill += number * 5;
    console.log("your Original electricity bill is " + finalElectricityBill);
    if(finalElectricityBill >= 2000){
        discount = (finalElectricityBill/100)*10;
    }
    console.log("your discount electricity bill is " + discount);
    console.log("your final electricity bill is " + Number(finalElectricityBill - discount));
}
