let user = [
    {name: "Rahul", email: "rahul@gmail.com"},
    {name: "Priya", email: "priya@email.com"},
]

const userName = user.map(value => {
    return value.name;
});
const useremail = user.map(value => {
    return value.email;
});
console.log(userName);
console.log(useremail);