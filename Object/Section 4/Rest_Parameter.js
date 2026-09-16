const showSkills = ["Rahul", "HTML", "CSS", "JavaScript"];

console.log(showSkills);
const display = function (name, ...skills) {
    console.log(`name : ${name}`);
    console.log(`Skills : ${skills}`);
}

display("Rahul", "HTML", "CSS", "JavaScript");