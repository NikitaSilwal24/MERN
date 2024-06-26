// filter positive number
let input = [ 1, -2, 6, -3, 110, -100, 0, 49]
let output = input.filter((value, i ) => {
if (value > 0) {
    return true
}
else{
    return false
}
})
console.log(output)