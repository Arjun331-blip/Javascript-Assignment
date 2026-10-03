const email = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"];
console.log(email);

const valid = email.filter(e => {
    if(e.includes("@gmail.com")){
        return e;
    }
})
console.log(valid);