
let arr = [1, 2, 3, 4, 5]

//length : retorna o tamanho do array

    console.log(arr.length)

//push() : introduz o argumento no final do array

    arr.push("adicionei no final com push") //adiciona o 6 no final
    console.log(arr)

//pop() : remove o ultimo elemento do array

    arr.pop() 
    console.log(arr)

//unshift() : adiciona um elemento no começo do array

    arr.unshift("adicionei no começo com unshift") //adiciona o 0 no começo
    console.log(arr)

//shift() : remove um elemento do começo do array

    arr.shift()//remove o 0
    console.log(arr)

//splice(indice, elementos a serem deletados, elemento a ser adicionado) : adiciona um elemento no indice indicado

    arr.splice(2, 0, "adicionei com o splice")
    console.log(arr)

    arr.splice(2, 1) //removi o elemento de indice 2
    console.log(arr)

//slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.

    arr.slice(0, 2)
    console.log(arr)

//acessar ultimo elemento do array

    console.log(arr[arr.length - 1]) //retorna o ultimo elemento do array

//isArray : checa se é um array

    console.log(Array.isArray(arr)) // retorna true

//indexOf

    console.log(arr.indexOf(2)) // retorna 1, que é o index do elemento 2

//join() : transforma um array em uma string, recebe como parametro o separador 

    let arr2 = ["eu", "fui", "jogar", "tenis"]
    let arr3 = [11, 02, 1957]

    console.log(arr2)
    console.log(arr2.join(" ")) //transforma o array em uma string separando cada elemento por um espaço
    
    console.log(arr3)
    console.log(arr3.join("/"))

//reverse() : inverte a ordem dos elementos do array

    let arr4 = ["um", "dois", "tres", "quatro", "cinco"]

    console.log(arr4)
    console.log(arr4.reverse()) //[5, 4, 3, 2, 1]




