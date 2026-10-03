const price = [500, 1200, 300];
console.log(price);

const totalPrice = price.reduce((accu, curr) => {
    return accu + curr;
}, 0);
console.log(totalPrice);