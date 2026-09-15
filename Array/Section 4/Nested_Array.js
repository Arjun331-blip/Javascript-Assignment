let arr = [1, 2, [3, 4]];
console.log(arr);
let arr1 = arr.flat();
console.log(arr1);


//  17. Flatten a Multi-Level Array

let arr2 = [1, [2, [3, 4]]];
console.log(arr2);
let arr4 = arr2.flat(2);
console.log(arr4)