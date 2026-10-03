const product = [
  { name: "Laptop", quantity: 1 },
  { name: "Mouse", quantity: 2 },
];
console.log(product);

const totalQ = product.reduce((accu, curr) =>{
    return accu + curr.quantity;
}, 0);
console.log(totalQ);