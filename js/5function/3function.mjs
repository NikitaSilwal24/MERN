//default value
let sum = (a = 10, b= 11, c= 12) =>{
console.log(a)
console.log(b)
console.log(c)
}
sum(1) // the default value is printed for b and c
sum(1,2,3)