let s = "HTML,CSS,JavaScript";
console.log(typeof s);  // string
let splitJoint = s.split(",");
console.log(typeof splitJoint);  // Object
console.log(splitJoint); // [ 'HTML', 'CSS', 'JavaScript' ]
for(value of splitJoint){
    console.log(value);  // HTML CSS JavaScript
}