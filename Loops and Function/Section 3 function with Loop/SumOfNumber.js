function table(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i;
    }
    console.log(`Sum : ${sum} `);
}

table(10);  // 55
table(5);  // 15