// Write a function filterRangeInPlace(arr, a, b) that gets
// an aray `arr` and removes from it all values except those
// that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not
// return anything.

const arr = [5, 3, 8, 1];  // 🧮 Original array

// Function: remove elements outside the range [a, b]
function filterRangeInPlace(arr, a, b) {
    // 🔁 Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // ❌ If the element is less than a or greater than b
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);  // ✂️ Remove the element
            i--; // ⚠️ Decrement i because the array shrank
        }
    }
}

filterRangeInPlace(arr, 1, 4);  // 🎯 Keep only numbers between 1 and 4
console.log(arr);  // 🖨️ Output: [3, 1]