//write a js program to create a new string adding "New!" in front of a given string.
//If the given string begins with "New!" already the return the original string.

const addString = (str) =>  {
     const strNew = "New!"

     if(str.indexOf(strNew) === 0){
         return str
     }else{
         return `${strNew} ${str}`
     }

    //alternativa:
    //str.indexOf(strNew) === 0 ? str : `New! ${str}`

}

console.log(addString('New!'))
console.log(addString('Offers'))
console.log(addString('New! Offers'))
console.log(addString('shoes'))
console.log(addString('New! shoes')) 

