/*
make a arrow function named isEven , pass a value, that return true if the given number is even else return false
*/

const isEven = (number) =>{

    if(number % 2 === 0 ){
        return true
    }
    else {
        return false
    }
}
  
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false
