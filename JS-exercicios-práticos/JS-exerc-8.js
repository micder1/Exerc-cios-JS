//write a js program to concatenate 2 strings except for their first character

const concatTwoStrings = (str1, str2) =>{
    let stringFinal = `${str1.slice(1)}${str2.slice(1)}` //nesse caso nao precisa do segundo argumento do slice, vai do index 1 ao ultimo
    return stringFinal
}

console.log(concatTwoStrings('orgulho', 'cetim'))
console.log(concatTwoStrings('pista', 'rodoviaria'))