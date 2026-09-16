const user = {
  name: "Rahul",
  email: "rahul@example.com",
  role: "developer",
};

function displayUser({ name, email }) {
  console.log(name);
  console.log(email);
}

displayUser(user);
