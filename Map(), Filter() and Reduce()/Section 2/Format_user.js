const user = ["Rahul", "Priya", "Aman"];
console.log(user);
const newUser = user.map(u => {
    return "user: "+u;
})
console.log(newUser);