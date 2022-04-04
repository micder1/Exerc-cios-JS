//write a js program to create a new string from a given string taking the first 3 characters and the last 3 characters
//of a string and adding them together. The string length must be 3 or more, if not, the original string is returned

//metodo substring

const concatString = (str1) => {
     if(str1.length < 3){
         return str1
     }else{
         let newStr = str1.substring(0,3) + str1.substring(str1.length-3, str1.length)
         return newStr
     }

//usando ternário + método slice():
    // let newStr1
    // str1.length < 3 ? newStr1 = str1 : newStr1 = str1.slice(0, 3) + str1.slice(str1.length -3, str1.length)
    // return newStr1
}


console.log(concatString('abobobobobora'))
console.log(concatString('abc'))
console.log(concatString('koo'))
console.log(concatString('ab'))