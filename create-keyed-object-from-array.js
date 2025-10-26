// ---------- Objective ---------- 😺

/* 
Create a function `groupById(arr)` that creates an object from it 🌐
with `id` as the key, and array items as values 🧩
*/

const users = [
  { id: "kitsune", name: "Kitsune Hayabusa", age: 33 },
  { id: "usagi", name: "Usagi Chan", age: 25 },
  { id: "kuma", name: "Kuma San", age: 40 },
];

// Expecting results
/* 
usersById = groupById(users);
usersById = {
    kitsune: {id: "kitsune", name: "Kitsune Hayabusa", age: 33},
    usagi: {id: "usagi", name: "Usagi Chan", age: 25},
    kuma: {id: "kuma", name: "Kuma San", age: 40},
}
*/

// ---------- Implementation ----------

// Use `reduce()` ⚙️
/*
The reducer walks through `users`, keeping an accumulator object that
starts as `{}`. For each user, it stores the original object under a
property named after that user's `id`, and then hands the accumulator
back to the next iteration. When all users are processed, the populated
object is returned.
*/
function groupById(users) {
  // Reduce the array to a single object
  return users.reduce((acc, curr) => {
    // Create property with key is the value
    // of `id` and value is the object
    acc[curr.id] = curr;
    return acc;
  }, {});
}

// groupById(users);
console.log(groupById(users));
