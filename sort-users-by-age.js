/*
Write the function sortByAge(users) that take an array of object with `age`
property and sort them by `age`
*/

// 🦊
const kitsune = {
  name: "Kitsune",
  age: 33,
};

// 🐰
const usagi = {
  name: "Usagi",
  age: 25,
};

// 🐻
const kuma = {
  name: "Kuma",
  age: 40,
};

let arr = [kitsune, usagi, kuma];

/* 
Expected result:
sortByAge(arr);
arr = [usage, kitsune, kuma]
*/

// ---------- Implementation ----------

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

console.log(sortByAge(arr));
