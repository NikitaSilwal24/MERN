/*
"my name is nikita silwal"
reverse whole word such that
output must be "ym eman si atikin lawlis"
*/

const reverseWord = (input) => {

    return input.split("").reverse().join("")

}
console.log(reverseWord("name"))

let Input = ["my", "name", "is", "nikita", "silwal"];

let Output = Input.map((value, i) => {
  return reverseWord(value)
});
console.log(Output);