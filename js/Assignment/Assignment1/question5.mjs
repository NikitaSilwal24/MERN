/*
make a arrow function that takes 3 input as number and return average of given number
*/

const calculateAverage = (num1, num2, num3) =>{

    const sum = num1+ num2 + num3;

    const average = sum/3

    return average
}

console.log(calculateAverage(1,3,5)) //output 3
console.log(calculateAverage(2,7,9)) //output 6
console.log(calculateAverage(9,1,8)) //output 6