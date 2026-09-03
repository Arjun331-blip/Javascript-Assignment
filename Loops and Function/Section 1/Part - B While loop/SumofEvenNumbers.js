let number = 20;
let i = 1;
let sum = 0;
while(i <= number){
    if(i%2 == 0){
        sum += i;
    }
    i++;
}
console.log(`Sum : ${sum}`)