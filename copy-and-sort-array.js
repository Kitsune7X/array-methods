// An array of strings `arr`. Make a sorted copy but keep `arr` 
// unmodified

let arr = ["HTML", "JavaScript", "CSS"];
// Expected result: sorted = ["CSS", "HTML", "JavaScript"]
//                  arr = ["HTML", "JavaScript", "CSS"] 

// Create a function that copy the original arr
// Sort it

function copySorted(arr) {
    return arr.toSorted();
    // console.log(arr);
}

// console.log(copySorted(arr));
sorted = copySorted(arr);

console.log(sorted);
console.log(arr);