//write a js program to check a given string contains 2 to 4 occurences of a specified character

//método 1: usando loops para comparar cada ocorrencia

let containsChar = (str, char) => {
    let contador = 0

    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === char){
            contador++
        }
    }
    return `"${char}" ocorre em ${str} ${contador} vezes`
}

console.log(containsChar('banana', 'a'))
console.log(containsChar('coco', 'o'))

//segundo método utilizando split e filter:

let containsChar2 = (str2, char2) => 
    str2.split('').filter(ch => ch === char2).length
    
const contains2To4 = (str2, char2) => 
    containsChar2(str2, char2) >= 2 && containsChar2(str2, char2) <= 4 //retorna true caso o valor esteja entre 2 e 4
    
console.log(contains2To4('ah', 'a'))
console.log(contains2To4('aah', 'a'))
console.log(contains2To4('aaah', 'a'))
console.log(contains2To4('aaaah', 'a'))
console.log(contains2To4('aaaaah', 'a'))


//o método split('') separa cada letra em um array: ex, str = teste, str.split('') retorna o array [t,e,s,t,e]
/*o método filter irá manter apenas os argumentos ch que sao iguais a char: ex, na arrow function interna de filter(ch => ch === char2), 
caso ch seja diferente de char, ela será retirada do array*/
/* str2.split('')'.filter(ch => ch === char2).length retorna a quantidade de char contida em str2*/