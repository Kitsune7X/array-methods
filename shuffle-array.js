// Write the function shuffle(array) that shuffles elements
// of the array
// Multiple runs of `shuffle` may lead to different orders of elements

let arr = [1, 2, 3, 4, 5];

// Expected result: shuffle(arr);
// arr = [3, 2, 1];
// arr = [2, 1, 3];
// arr = [3, 1, 2];


// function shuffle(arr) {

//     // Copy to new array
//     const cloneArray = [...arr]; // Copy to a clone array using spread syntax

//     // Iterate over the clone array starting from the last index
//     for (let i = cloneArray.length - 1; i >= 0; i--) {
//         // Assign random index to a variable
//         // i + 1 for the total remaining items
//         let rand = Math.floor(Math.random() * (i + 1)); 
//         // Assign current array element to a temp variable
//         let tempStorage = cloneArray[i];
//         // Assign random array element to current array element
//         cloneArray[i] = cloneArray[rand];
//         // Assign back the temp variable to the random array element
//         cloneArray[rand] = tempStorage;        
//     }
//     // Return shuffled array
//     return cloneArray

// }

// No copy ver
// function shuffle(arr) {     
//     // Iterate over the  array starting from the last index
//     for (let i = arr.length - 1; i >= 0; i--) {
//         // Assign random index to a variable
//         // i + 1 for the total remaining items
//         let rand = Math.floor(Math.random() * (i + 1)); 
//         // Assign current array element to a temp variable
//         let tempStorage = arr[i];
//         // Assign random array element to current array element
//         arr[i] = arr[rand];
//         // Assign back the temp variable to the random array element
//         arr[rand] = tempStorage;        
//     }
//     // Return shuffled array
//     return arr;    
// }

function shuffle(arr) {
    // 🔁 Loop through the array from the last index down to the first
    for (let i = arr.length - 1; i >= 0; i--) {

        // 🎲 Pick a random index between 0 and i (inclusive)
        // 👉 (i + 1) represents the total remaining items to shuffle
        let rand = Math.floor(Math.random() * (i + 1));

        // 📦 Temporarily store the current element
        let tempStorage = arr[i];

        // 🔄 Swap: put the random element in the current position
        arr[i] = arr[rand];

        // ♻️ Then move the stored element into the random position
        arr[rand] = tempStorage;
    }

    // ✅ Return the now fully shuffled array
    return arr;
}

// 📝 Comments and emojis added by ChatGPT
// Fisher-Yates Algorithm


console.log(shuffle(arr));
