const stock = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
];

const newStock = stock.map(s => {
    return {...s, inStock: true}
})

console.log(stock);
console.log(newStock);