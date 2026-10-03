const user = [
  { name: "Rahul", isActive: true },
  { name: "Priya", isActive: false },
];
console.log(user);

const activeUser = user.filter(u => {
    if(u.isActive === true){
        return u;
    }
})

console.log(activeUser)