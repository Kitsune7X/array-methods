// Create a function `unique(arr)` that should return an array
// with unique items of `arr`

let animals = [
    "🦊", "🐶", "🐱", "🐻", "🐶",
    "🐰", "🦊", "🐼", "🐸", "🐱",
    "🐯", "🐻", "🐧", "🦊", "🐰",
    "🐶", "🐼", "🦁", "🐸", "🐧",
    "🐶", "🐶", "🦊", "🐰"
];
// Expected results: animals = ["🦊", "🐶", "🐱", "🐻", "🐰", "🐼", "🐸", "🐯", "🐧", "🦁"];


// function unique(arr) {
//     // filter() method goes through each element of the array 
//     // arr.indexOf(item) always return the first occured index of the element
//     // arr.indexOf(item) === index is to check whether the current index is the same as
//     // the first occurence of the item index. In turn, it will filter out any duplicate items
//     const uniqueArray = arr.filter((item, index) => arr.indexOf(item) === index);
//     return uniqueArray;
// }

// Same function with comment touched up by ChatGPT
function unique(arr) {
    // 🧩 The filter() method loops through each element in the array.
    // 🔍 arr.indexOf(item) returns the index of the first occurrence of that element.
    // ✅ By checking if arr.indexOf(item) === index, we ensure that
    //    only the first occurrence of each element is kept,
    //    effectively filtering out all duplicates.
    const uniqueArray = arr.filter((item, index) => arr.indexOf(item) === index);
    return uniqueArray;
}

// ✍️ Comments polished by ChatGPT

console.log(unique(animals));

// Testing filter method
// filter(callbackFn)
// callbackFn is called with the following arguments:
// (element, index, array)
console.log(animals.filter((item, index) => (item === "🐰" && index < 23))); // The filter method filtered out the element with the desired index
