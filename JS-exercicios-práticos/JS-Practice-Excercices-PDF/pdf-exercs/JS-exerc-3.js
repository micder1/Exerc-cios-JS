//write a javascript program to replace every character in a given string with the character following it in the alphabet

const shiftProximaLetra = (str) => {
    const alfabeto = "abcdefghijklmnopqrstuwxyz"

    //let newStr = ""
    let newStrArr = [] //só consegui fazer o shift guardando a string alterada em um array, não consegui guardar em uma nova string

    if (typeof str != 'string'){
        throw new Error ('formato inválido')
    } else{
        str.toLowerCase();

        for(let i = 0; i < str.length; i++){
            for(let j = 0; j < alfabeto.length; j++){
                if(str[i] == alfabeto[j]){
                    //console.log("o index de numero "+ i + " da string: " + str[i] + " é igual ao index de numero "+ j + ": "+ alfabeto[j] + " do alfabeto") // debug
                    newStrArr[i] = alfabeto[j + 1]
                }
            }
        }

        return newStrArr.join('')
    }
}

console.log(shiftProximaLetra("abc"))
console.log(shiftProximaLetra("ace"))