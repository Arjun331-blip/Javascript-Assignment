let tech = ["HTML", "CSS", "JavaScript"];

// console.log(tech.join(", "));

let techString = tech.reduce((accu, curr) => {
    return accu + ", " + curr;
},)

console.log(techString);