// https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/

/*
    Use map() quando: é preciso traduzir/mapear todos os elementos em um array para 
    outro conjunto de valores.

    O que o map faz?
    percorre o array da esquerda para a direita invocando uma função de retorno em cada 
    elemento com parâmetros. Para cada chamada de retorno, o valor devolvido se torna 
    o elemento do novo array. Depois que todos os elementos foram percorridos, map() 
    retorna o novo array com todos os elementos “traduzidos”.
*/

/*========================================================================================*/
/*primeiro exemplo: multiplicar os elementos de um array por 2
========================================================================================*/

    const numeros = [1, 3, 6, 4, 7, 10] //array base

    let numerosDobrados = numeros.map(function(elem) {return elem * 2}) 

    console.log(numerosDobrados) //retorna [1, 6, 12, 8, 14, 20]

/*map recebe como arg uma callback function, que substitui 
  cada elemento do array por ele mesmo vezes 2 */


/*========================================================================================
segundo exemplo: numeros ao quadrado, dessa vez usando arrow function
  e recebendo um array como parametro
==========================================================================================*/

    let numerosAoQuadrado = (arr) =>{ //array arr passado como parametro
        let quadrado = arr.map(function(elem) {return elem * elem})
        return quadrado
    }

    console.log(numerosAoQuadrado([2, 3, 4, 5]))

//ou tb:
    let numerosAoQuadrado2 = (arr) => {
        const quadrado2 = arr.map( elem => elem*elem)
        return quadrado2
    }

    console.log(numerosAoQuadrado2([2, 3, 4, 5]))


/*========================================================================================*/
//terceiro exemplo: converter fahrenheit para celcius
//Conversao de F para C:
// C = (F - 32) / 1.8
/*========================================================================================*/

    let convertFahrenheitParaCelcius = (arrFahrenheit) => {
        const celcius = arrFahrenheit.map(elem => ((elem - 32)/1.8).toFixed(1) + "°C")
        return celcius
    }

    console.log(convertFahrenheitParaCelcius([89.6, 114, 157, 76]))

//para cada elemento do array, troco o elemento por = (elem - 32)/1.8\


/*========================================================================================
Complemento de explicaçao e exemplos:
The arr.map method is one of the most useful and often used.

It calls the function for each element of the array and returns the array of results.

The syntax is:
==========================================================================================*/

    let result = arr.map(function(item, index, array) {
        // returns the new value instead of item
    });

//For instance, here we transform each element into its length:

    let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
    alert(lengths); // 5,7,6


