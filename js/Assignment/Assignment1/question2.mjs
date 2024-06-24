//make a arrow function named isGreaterThan18 , pass a value , the function must return true if the given age is greater or
// equals to 18 otherwise return false

const isGreaterthan18 = (age) => {
    if(age >= 18){
        return true
    }
    else {
        return false
    }

}

console.log(isGreaterthan18(21)) // output true
console.log(isGreaterthan18(9)) //output false
