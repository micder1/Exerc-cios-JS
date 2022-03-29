//given two values, write a js program to find out which one is nearest to 100

const nearestTo100 = (val1, val2) => Math.abs(val1 - 100) > Math.abs(val2 - 100) ? `${val2} é mais proximo de 100` : `${val1} é mais proximo de 100` //arrow function com ternário
//o return ja é implicito após a =>

console.log(nearestTo100(95, 110))
console.log(nearestTo100(90, 102))
console.log(nearestTo100(55, 232))

// const nearestTo100 = (val1, val2) =>{

//     Math.abs(val1 - 100) > Math.abs(val2 - 100) ? `${val2} é mais proximo de 100` : `${val1} é mais proximo de 100`

//     if(Math.abs(val1 - 100) > Math.abs(val2 - 100)){
//         return `${val2} é mais proximo de 100`
//     }else{
//         return `${val1} é mais proximo de 100`
//     }
// }