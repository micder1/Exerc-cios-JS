//write a js program to extract the first half of a string of even length

const extractHalf = (str) =>{
    let newStr

    str.length % 2 === 0 ? newStr = str.slice(0, str.length/2) : 'string nao tem tamanho par'
    console.log(str.length)
    return newStr
}

console.log(extractHalf("tamanhopar"))
console.log(extractHalf("impar"))
console.log(extractHalf("quatro"))

