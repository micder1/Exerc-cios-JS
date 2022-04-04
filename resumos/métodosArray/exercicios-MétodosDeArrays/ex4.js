/*
Sort in decreasing order
importance: 4
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10
*/

let sortDecreasing = (arr) =>{
    let comparaNum = (a, b) =>{
        if (a > b) return -1;
        if (a == b) return 0;
        if (a < b) return 1;
    }
    arr.sort(comparaNum)
}