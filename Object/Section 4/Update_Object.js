const user = {
  name: "Rahul",
  role: "student",
};

console.log(user);
let { ...userRole } = user;
userRole.role = "developer";
console.log(userRole);
