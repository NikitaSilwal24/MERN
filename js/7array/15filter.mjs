// filter string ["a", 1, "b", 3,"nikita"] = ["a", "b","nikita"] 

let input = ["a", 1, "b", 3,"nikita"]
let output = input.filter ((value , i) => {
if(typeof value === "string"){
    return true
}
else{
    return false
}
    
})
console.log(output)

