// let randomNumber = Math.random();
// console.log(randomNumber);
let max = 10;
let min = 5;
// let randomNumber = Math.floor(Math.random() * max); // number generate 0 to 9
// let randomNumber = Math.floor(Math.random() * (max - min)); // number generate 0 to 4
// let randomNumber = Math.floor(Math.random() * (max - min)) + min; // number generate 5 to 9
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // number generate 5 to 10

console.log(randomNumber)