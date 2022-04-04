/*  
Searching in array
Now let’s cover methods that search in an array.

indexOf/lastIndexOf and includes
The methods arr.indexOf, arr.lastIndexOf and arr.includes have the same syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
arr.lastIndexOf(item, from) – same, but looks for from right to left.
arr.includes(item, from) – looks for item starting from index from, returns true if found.
For instance:
*/

    let arr = [1, 0, false];

    alert( arr.indexOf(0) ); // 1
    alert( arr.indexOf(false) ); // 2
    alert( arr.indexOf(null) ); // -1

    alert( arr.includes(1) ); // true


/*
Note that the methods use === comparison. So, if we look for false, it finds exactly false and not the zero.

If we want to check for inclusion, and don’t want to know the exact index, then arr.includes is preferred.

Also, a very minor difference of includes is that it correctly handles NaN, unlike indexOf/lastIndexOf:
*/

    const arr2 = [NaN];
    alert( arr.indexOf(NaN) ); // -1 (should be 0, but === equality doesn't work for NaN)
    alert( arr.includes(NaN) );// true (correct)

