
const user = [
  { name: "Rahul", role: "developer" },
  { name: "Priya", role: "student" },
];

console.log(user);

const developer = user.filter((u) => {
  if (u.role === "developer") {
    return u;
  }
//   return u;
});

console.log(developer);
