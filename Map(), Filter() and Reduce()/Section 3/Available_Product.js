const product = [
  { name: "Laptop", inStock: true },
  { name: "Mouse", inStock: false },
];

console.log(product);

const stock = product.filter(p => {
    if(p.name === "Laptop"){
        return p;
    }
})

console.log(stock)