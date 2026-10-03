const product = [
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
];
console.log(product);

const expensive = product.filter(p => {
    if(p.price > 1000){
        return p;
    }
})

console.log(expensive);