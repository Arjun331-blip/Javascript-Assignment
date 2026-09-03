let prompt = require("prompt-sync")();

let studentName = "Rahul";
let rollNumber = 101;
let mathMarks = 85;
let scienceMarks = 78;
let englishMarks = 92;
let percentage = ((mathMarks+scienceMarks+englishMarks)/300)*100;
let totalMark = mathMarks+scienceMarks+englishMarks;

console.log(`___________________________________________________`);
console.log(`                   Student Result                  `)
console.log(`___________________________________________________`);

console.log(`Name : ${studentName}`);
console.log(`Roll No : ${rollNumber}`);
console.log(`Math : ${mathMarks}`);
console.log(`Science : ${scienceMarks}`);
console.log(`English : ${englishMarks}`);
console.log(`Total : ${totalMark}`);
console.log(`Percentage : ${percentage}%`);


if((percentage < 100 && percentage > 90)){
    console.log(`Grade : E`);
    console.log(`Result : PASS`)
} else if((percentage < 90 && percentage > 80)){
    console.log(`Grade : E`);
    console.log(`Result : PASS`)
}  else if((percentage < 80 && percentage > 70)){
    console.log(`Grade : E`);
    console.log(`Result : PASS`)
} else if((percentage < 70 && percentage > 60)){
    console.log(`Grade : E`);
    console.log(`Result : PASS`)
} else if((percentage < 60 && percentage > 40)){
    console.log(`Grade : E`);
    console.log(`Result : PASS`);
} else {
   console.log(`Grade : F`);
    console.log(`Result : Fail`)
}


