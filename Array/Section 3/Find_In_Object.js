let obj = [
{ name: "Rahul", age: 20 },
{ name: "Priya", age: 22 }
];
console.log(obj);
let fi = obj.find((obj1)=> obj1.name);
console.log(fi);


/// Question 15 Find an Index Using findIndex()
let index = obj.findIndex((value) => value.name);
console.log(index);