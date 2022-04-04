/*
Troca as Vogais
Implemente a função ao lado que recebe uma string como parâmetro e retorna a string original, mas com o número 1 no lugar das vogais

Exemplo: se for passada a palavra “uva”, a função deve retornar “1v1”

Exemplo: se for passada a palavra “carro”, a função deve retornar “c1rr1”

Dica: para realizar essa questão você vai precisar de uma ferramenta nova. Talvez seja útil construir um array vazio.
*/

function trocaVogais(string) {
    let tamanho = string.length
    let arr = []
    
    for(let i = 0 ; i < tamanho ; i++){
      if(string[i] === ('a' || 'e' || 'i' || 'o' || 'u')){
        arr.push('1')
      }else{
        arr.push(string[i])
      }
    }
    return arr.join('')
    }