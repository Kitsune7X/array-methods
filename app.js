
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Write a function that take in an array
// For every even number, it will triple it
// Then it will sum all those even numbers

// function sumOfTripledEvens(array) {
//     // Filter even number
//     const even = array.filter((num) => num % 2 === 0);
//     // console.log(even);
//     // Tripple even number
//     const tripledEven = even.map((num) => num * 3);
//     // console.log(tripledEven);
//     // Sum all the tripled even numbers
//     const sum = tripledEven.reduce((accumulator, currentValue) => accumulator + currentValue);
//     console.log(sum);
// }

sumOfTripledEvens(arr);

// Shorter way

function sumOfTripledEvens(array) {
    return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}

console.log(sumOfTripledEvens(arr));