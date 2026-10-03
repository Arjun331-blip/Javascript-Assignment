const product = [{ amount: 500 }, { amount: 1000 }, { amount: 750 }];

console.log(product);

const total = product.reduce((accu, curr) => {
  return accu + curr.amount;
},0);
console.log(total);
