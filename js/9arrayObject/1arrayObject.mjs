let product = [
  {
    name: "laptop",
    price: 100000,
  },
  {
    name: "mobile",
    price: 30000,
  },
  {
    name: "Tv",
    price: 200000,
  },
];

//["laptop", "mobile", "Tv", ] -> map
//[100000, 200000, 300000] -> map
//[200000, 400000, 600000] -> map
// [{name: "laptop", price: "10000"}, {name:"TV", price: 200000}] -> filter
// ["laptop", "TV"]

let output = product.map((value, i) => {
  return value.name;
});
console.log(output);

let output1 = product.map((value, index) => {
  return value.price;
});
console.log(output1)

let output2 = product.map((value, index) => {
    return value.price * 2

})
console.log(output2)

let output3 = product.map((value, index) => {
    return `${value.name} costs ${value.price}`
})
console.log(output3)


let output4 = product.filter((value, index) => {
 if(value.price >50000)
    {
        return true
    }
})
console.log(output4)

let output5 = product.filter((value, index) => {
    if( value.price > 50000)
        {
            return true
        }
})

let output6 = output5.map((value, i) => {
return value.name
})
console.log(output6)