//Write a js program to get the largest even number from an array of integers

//primeiro metodo:
//usando Math.max e filter

const filterEven = (arr) => Math.max(...arr.filter(num => num%2 == 0)) //passo de parametro para Math.max um array filtrado só com numeros pares

console.log(filterEven([1,2,3,4,5,6,7,8]))
console.log(filterEven([1,2,3,4,5,6,7,31,16]))
console.log(filterEven([1,2,3,4,12,6,7,9]))

//Math.max retorna o maior numero no array
//preciso utilizar o spread operator pois estou passando um array como parametro para Math.max

//segundo metodo:
//usando duas funçoes, uma pra filtrar e outra para ordenar em crescente e retornar o ultimo index do array

const filterEven2 = (arr2) =>
    arr2.filter(num2 => num2%2 == 0)

const filterMax = (arr3) =>{
    arr3.sort(function(a,b){ //sort em ordem numerica: http://www.javascriptkit.com/javatutors/arraysort.shtml
        return a- b
    })
    return arr3.slice(-1) //slice(-1) retorna o ultimo numero do array
}

console.log(filterMax(filterEven2([1,2,3,4,5,6,7,8])))
console.log(filterMax(filterEven2([1,2,3,4,5,6,7,31,16])))
console.log(filterMax(filterEven2([1,2,3,4,12,6,7,9])))
