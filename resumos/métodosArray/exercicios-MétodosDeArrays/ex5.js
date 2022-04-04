/*
Copy and sort array
importance: 5
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/

let copySorted = (arr) =>{
    let copy = arr.slice(0, arr.length) //copia o array passado do inicio ao fim
    return copy.sort() //faz o sort e retorn a cópia, array original nao foi modificado

}

