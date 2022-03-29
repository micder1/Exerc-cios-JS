//write a javascript program to replace every character in a given string with the character following it in the alphabet

//usando os métodos nativos:
//String.fromCharCode
//charCodeAt

const moveCharsFoward = (str) => {
    str
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
        .join('')
}
    
console.log(moveCharsFoward('abcd'))
