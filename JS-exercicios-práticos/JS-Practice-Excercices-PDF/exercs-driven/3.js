/*
Remover os Números
Implemente a função ao lado que recebe como parâmetro uma string, misturando letras e números, e deve retornar uma string contendo apenas as letras da string passada na mesma ordem

Exemplo: se for passada a string “ab2c4d”, a função deve retornar “abcd”

Exemplo: se for passada a string “1234”, a função deve retornar “”
*/

function tiraNumeros(string) {

    let arrStr = string.split('')
    let arrNum = []
  
    for(let n = 0 ; n < 10 ; n++){
      arrNum.push(n)
    }
    console.log(arrNum)
  
    for(let i = 0 ; i< arrStr.length ; i++){
      for(let j = 0 ; j < arrNum.length ; j++){
        if(arrStr[i] == arrNum[j]){
          arrStr.splice(i, 1)
        }
      }
    }
    return arrStr.join('')
  }