const user = {
  name: "Rahul",
  email: "rahul@gmail.com",
  role: "developer",
};

console.log(user);
let { name, email, role } = user;

console.log(name);
console.log(email);
console.log(role);

let { name: userName, email: userEmail, role: userRole } = user;
// console.log(name);
console.log(userName);
// console.log(email);
console.log(userEmail);
// console.log(role);
console.log(userRole);
