//Write a JavaScript program to check whether a given array of integers is sorted in ascending
//order
const checkOrder = (arr) =>{
    let count = 0

    for(let i=0 ; i<arr.length ; i++){
        arr[i] > arr[i+1] ? count++ : count = count + 0
    }   
    //return count
    count > 0 ? console.log('array nao está em ordem crescente') : console.log('array está em ordem crescente')
}

console.log(checkOrder([1, 2, 3, 4]))
console.log(checkOrder([1, 3, 2, 4]))
console.log(checkOrder([1, 2, 3, 6, 10]))
