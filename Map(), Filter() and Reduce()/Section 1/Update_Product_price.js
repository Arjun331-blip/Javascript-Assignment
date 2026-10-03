const original = [100, 200, 300];
const newPrice = original.map(p => {
    return p+p*0.10;
})

console.log(original);
console.log(newPrice);