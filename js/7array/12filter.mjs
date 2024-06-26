/*we can use filter when we have output from the same array input 
eg [1, 2, 3] = [2, 3]
[1, 3, 10] = [1]
[1, 3, 10] = [1, 9] // we cannot use filter here 
*/
// only can return true or false

let input = [1, 2, 3,4,5];

let output = input.filter((value, i) => {
  if (value >= 3) {
    return true;
  } else {
    return false;
  }
}); 
console.log(output);
