// ---------- Objective ----------
/* 
Write the function getAverageAge(users) that take an arry of objects with the
property of `age` and returns the average age.
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

// Expected result
// getAverageAge(arr);
// => 32.6

// ---------- Implementation ----------
function getAverageAge(arr) {
  return arr.reduce((acc, curr) => acc + curr.age, 0) / arr.length;
}

console.log(getAverageAge(arr));
