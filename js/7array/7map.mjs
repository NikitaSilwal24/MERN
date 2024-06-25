//["my", "name", "is"] => ["MYN", "NAMEN", "ISN"]

let input = ["my", "name", "is"];

let output = input.map((value, i) => {
  return `${value.toUpperCase()}N`;
});
console.log(output);
