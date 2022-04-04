/*
    Use filter() quando: é preciso remover elementos indesejados com base em alguma(s) condição(ões).

    O que filter() faz: como map(), filter() percorre o array da esquerda para a direita 
    invocando uma função de retorno em cada elemento. O valor retornado deve ser um 
    booleano que indica se o elemento será mantido ou descartado. Depois de todos os 
    elementos terem sido analisados, filter() retorna um novo array com todos os 
    elementos que retornaram como verdadeiro.

*/


/*========================================================================================
    primeiro exemplo: filtrando apenas os numeros pares de um array
========================================================================================*/

    const numbers = [2, 3, 4, 5, 12, 19, 20, 21];

    function Pair(elem) {
        return elem % 2 === 0;
    }

    const pairNumbers = numbers.filter(Pair);
    console.log(pairNumbers);

//ou também: 

    let retornaPar = (arr) => {
        let arrPar = arr.filter(elem => elem % 2 === 0)
        return arrPar
    }

/*========================================================================================
    segundo exemplo: remover elementos duplicados de um array 
========================================================================================*/

let removeDuplicados = (arr) => {
    let arrFiltrado = arr.filter((elem, index, arr) => arr.indexOf(elem) === index)
    return arrFiltrado
}

//[2, 2, 3, 3, 4, 5, 6]


/*========================================================================================
    Outra explicaçao:
    The find method looks for a single (first) element that makes the function return true.

    If there may be many, we can use arr.filter(fn).

    The syntax is similar to find, but filter returns an array of all matching elements:
========================================================================================*/

    let results = arr.filter(function(item, index, array) {
        // if true item is pushed to results and the iteration continues
        // returns empty array if nothing found
    });

//For instance:

    let users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"}
    ];
    
    // returns array of the first two users
    let someUsers = users.filter(item => item.id < 3);
    
    alert(someUsers.length); // 2



