/*
array stores collection of value
where as
object store collection of value with information
*/

// let info = ["nikita", 30, false]
let info = {
  name: "nikita",
  //key: "value"-> as a whole name it is property
  age: 22, // age is key, 22 is value , whole name is property
  isMarried: false,
};

console.log(info);




console.log(info.name);
console.log(info.age);
console.log(info.isMarried);

info.age = 20;
console.log(info);
