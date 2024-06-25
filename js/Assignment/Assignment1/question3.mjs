/* make a arrow function that take a number and return you can enter room only if the enter number is less than 18 else
 you can not enter */


 const canEnterRoom = (age) => {
    if(age < 18){
        return "you can enter room"
    }
    else{
        return "you cannot enter room"
    }
 }


 console.log(canEnterRoom(15)) //output can enter room
 console.log(canEnterRoom(18)) // output cannot enter room
 console.log(canEnterRoom(23)) // cannot enter room
 