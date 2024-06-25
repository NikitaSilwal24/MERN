// ["n", "i", "K", "i", "T", "a"] => ["N", "i", "k", "i", "t", "a"]

let input = ["n", "i", "K", "i", "T", "a"]

let output = input.map((value, i) => {
    if(i===0){
        return (value.toUpperCase()) 
    }
    else {
        return (value.toLowerCase())
    }


})
console.log(output)

