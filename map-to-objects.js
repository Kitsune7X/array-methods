// ---------- 目的 ----------
// Objective: Write the code to create another array, made of objects
// with `id` and `fullName` where `fullName` is generated from
// `name` and `surname`

// 🦊
const kitsune = {
  name: "Kitsune",
  surname: "Hayabusa",
  id: 1,
};

// 🐰
const usagi = {
  name: "Usagi",
  surname: "Chan",
  id: 2,
};

// 🐻
const kuma = {
  name: "Kuma",
  surname: "San",
  id: 3,
};

const users = [kitsune, usagi, kuma];

// ---------- ほしい結果 ----------
// Expected results
/*  
userMapped = [
 {fullName: "Kitsune Hayabusa", id: 1},
 {fullName: "Usagi Chan", id: 2},
 {fullName: "Kuma San", id: 3}
] 
 */

// ---------- 実装 ----------
// Implementation

// Deconstructing object ver
const userMapped = users.map(({ name, surname, id }) => ({
  fullName: `${name} ${surname}`,
  id,
}));

console.log(userMapped);

// Dot notation ver
const userMapped2 = users.map((object) => ({
  fullName: `${object.name} ${object.surname}`,
  id: object.id,
}));

console.log(userMapped2);
