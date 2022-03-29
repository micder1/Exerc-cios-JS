/*
======================================================================================
sort(fn)
The call to arr.sort() sorts the array in place, changing its element order.

It also returns the sorted array, but the returned value is usually ignored, as arr 
itself is modified.

For instance:
======================================================================================
*/

    let arr = [ 1, 2, 15 ];

    // the method reorders the content of arr
    arr.sort();

    alert( arr );  // 1, 15, 2

/*
Did you notice anything strange in the outcome?

The order became 1, 15, 2. Incorrect. But why?

The items are sorted as strings by default.

Literally, all elements are converted to strings for comparisons. For strings, 
lexicographic ordering is applied and indeed "2" > "15".

To use our own sorting order, we need to supply a function as the argument 
of arr.sort().

The function should compare two arbitrary values and return:
*/

    function compare(a, b) {
        if (a > b) return 1; // if the first value is greater than the second
        if (a == b) return 0; // if values are equal
        if (a < b) return -1; // if the first value is less than the second
    }

//For instance, to sort as numbers:

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }
    
    let arr2 = [ 1, 2, 15 ];
    
    arr2.sort(compareNumeric);
    
    alert(arr2);  // 1, 2, 15

/*
Now it works as intended.

Let’s step aside and think what’s happening. The arr can be array of anything, 
right? It may contain numbers or strings or objects or whatever. We have a set 
of some items. To sort it, we need an ordering function that knows how to compare 
its elements. The default is a string order.

The arr.sort(fn) method implements a generic sorting algorithm. We don’t need to 
care how it internally works (an optimized quicksort or Timsort most of the time).
 It will walk the array, compare its elements using the provided function and 
 reorder them, all we need is to provide the fn which does the comparison.

By the way, if we ever want to know which elements are compared – nothing prevents
 from alerting them:
*/

    [1, -2, 15, 2, 0, 8].sort(function(a, b) {
        alert( a + " <> " + b );
        return a - b;
    });

/*
The algorithm may compare an element with multiple others in the process, 
but it tries to make as few comparisons as possible.
*/