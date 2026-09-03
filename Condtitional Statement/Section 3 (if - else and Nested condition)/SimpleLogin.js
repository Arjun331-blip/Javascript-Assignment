let prompt = require("prompt-sync")();

let username = prompt("enter your username : ");
let password = parseInt(prompt("enter your password : "));

if(String(username) === String("admin") && password === 12345){
    console.log("your are logged in succesful");
} else {
    console.log("invalid your password or username");
    console.log("please enter your valid username or password");
}