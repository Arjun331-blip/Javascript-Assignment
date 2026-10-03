const product = ["Laptop", "Mouse", "Keyboard"];
console.log(product);

const total = product.reduce((accu, curr) => {
    return accu + 1;
},0)
console.log(total);