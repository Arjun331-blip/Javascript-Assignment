let prompt = require("prompt-sync")();

let length = parseInt(prompt("enter the length : "));
let width = parseInt(prompt("enter the width : "));

let areaRectangle = length*width;
let perimeter = 2*(length+width);

console.log("Area of Rectangle : " + areaRectangle);
console.log("perimeter of Rectangle : " + perimeter);
