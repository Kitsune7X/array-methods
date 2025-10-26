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

const users = [kitsune, usagi, kuma];

const names = users.map((user) => user.name);

console.log(names);
