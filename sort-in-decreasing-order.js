let arr = [5, 2, 1, -10, 8];

// Expected result : Sort in decreasing order
// arr = [8, 5, 2, 1, -10]
// arr.sort(compareFn);

// console.log(arr);

// // Compare function
// function compareFn(a, b) {
//     if ((a - b) < 0){
//         return 1;
//     } else if ((a - b) > 0) {
//         return -1;
//     } else {
//         return 0;
//     }
// }

// arr.sort((a, b) => b - a);
// return b - a
// if (b - a) > 0 then sort a after b
// if (b - a) < 0 then sort a before b
// if (b - a) === 0 then keep their pos


arr.sort((a, b) => b - a);
console.log(arr);