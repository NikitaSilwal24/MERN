/*
"my name is nikita silwal"
reverse whole word such that
output must be "ym eman si atikin lawlis"
*/
let input = "My name is Nikita Silwal";
const reverseWord = (value) => {
  return value.split("").reverse().join("");
};

let variable = input.split(" ");

let outputArr1 = variable.map((value, i) => {
  let outputAnswer = reverseWord(value);
  return outputAnswer;
});
let answer = outputArr1.join(" ");
console.log(answer);
