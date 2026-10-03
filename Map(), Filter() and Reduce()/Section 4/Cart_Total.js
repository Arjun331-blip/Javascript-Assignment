let cart = [
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1000, quantity: 1 },
];

console.log(cart);

let total = cart.reduce((accu, curr) => {
    return accu + curr.price * curr.quantity;
}, 0);
console.log(total);