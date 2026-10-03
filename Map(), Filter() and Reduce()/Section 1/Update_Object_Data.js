const obj = [
  { name: "Rahul", role: "student" },
  { name: "Priya", role: "student" },
];

const newobj = obj.map(r => {
    return {...r, role: "developer"};
})

console.log(obj);
console.log(newobj);