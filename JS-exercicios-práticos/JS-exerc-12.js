//write a js program to find the number of even values up to a given number

const numPar = (num) => {
    let arr = []
    for(let i = 0; i <= num ; i++){
        arr.push(i)
    }
    return arr.filter(numero => numero % 2 === 0).length // filtra o vetor criado só com os numeros pares e retorna o tamanho desse vetor
}