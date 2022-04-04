//write a js program to find the number of even digits in an array of integers

//metodo 1 utilizando filter

const numPar = (arr) => arr.filter(numero => numero % 2 === 0).length //return implicito

console.log(numPar([1, 2, 3, 4, 5, 6]))

//metodo 2 utilizando loop

const numPar2 = (arr) =>{
    let count = 0
     for(let i = 0 ; i < arr.length ; i++){
         arr[i] % 2 == 0 ? count++ : 'nao é par'
    }
    return count
}

console.log(numPar2([1, 2, 3, 4, 5, 6]))