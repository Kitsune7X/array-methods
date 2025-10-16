// Write a function filterRange(arr, a, b) that gets an array `arr`,
// looks for elements with values higher or equal to a
// and lower or equal to b and return a result as an array

const arr = [5, 3, 8, 1];

// Expected result newArr = [3, 1];

// Filter Range function
function filterRange(arr, a, b) {
    // Look for elements with value higher or equal to a and lower or equal to b
    return arr.filter((num) => num >= a && num <= b);
}

console.log(filterRange(arr, 1, 4));