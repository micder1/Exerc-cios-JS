/*
======================================================================================
Reduce():

When we need to iterate over an array – we can use forEach, for or for..of.
When we need to iterate and return the data for each element – we can use map.
The methods arr.reduce and arr.reduceRight also belong to that breed, but are a 
little bit more intricate. They are used to calculate a single value based on 
the array.

The syntax is:
======================================================================================
*/
//     let arr = [1, 2, 3, 4, 5];

//     let value = arr.reduce(function(accumulator, item, index, array) {
//         // ...
//     }, [initial]);

/*
======================================================================================
The function is applied to all array elements one after another and “carries on” 
its result to the next call.

Arguments:

accumulator – is the result of the previous function call, equals initial the 
first time (if initial is provided).
item – is the current array item.
index – is its position.
array – is the array.
As function is applied, the result of the previous function call is passed to
 the next one as the first argument.

So, the first argument is essentially the accumulator that stores the combined
 result of all previous executions. And at the end it becomes the result of reduce.

Sounds complicated?

The easiest way to grasp that is by example.

Here we get a sum of an array in one line:
======================================================================================
*/

    let arr2 = [1, 2, 3, 4, 5];

    let result = arr2.reduce((sum, current) => sum + current, 0);

    alert(result); // 15
    console.log(`Soma dos elementos do array: ${result}`)

/*
======================================================================================
The function passed to reduce uses only 2 arguments, that’s typically enough.

Let’s see the details of what’s going on.

On the first run, sum is the initial value (the last argument of reduce), 
equals 0, and current is the first array element, equals 1. So the function result is 1.

On the second run, sum = 1, we add the second array element (2) to it and return.

On the 3rd run, sum = 3 and we add one more element to it, and so on…

Or in the form of a table, where each row represents a function call on the next array element:

                    sum	       current    result
the first call	    0	       1	      1
the second call	    1	       2	      3
the third call	    3	       3	      6
the fourth call	    6	       4	      10
the fifth call	    10	       5	      15

Here we can clearly see how the result of the previous call becomes the first argument
 of the next one.

We also can omit the initial value:
======================================================================================
*/

    let arr3 = [1, 2, 3, 4, 5];

    // removed initial value from reduce (no 0)
    let result2 = arr3.reduce((sum, current) => sum + current);

    alert( result2 ); // 15

/*
======================================================================================
The result is the same. That’s because if there’s no initial, then reduce takes the 
first element of the array as the initial value and starts the iteration from the 2nd
 element.

The calculation table is the same as above, minus the first row.

But such use requires an extreme care. If the array is empty, then reduce call without
 initial value gives an error.

Here’s an example:
======================================================================================
*/

    //let arr4 = [];

    // Error: Reduce of empty array with no initial value
    // if the initial value existed, reduce would return it for the empty arr.
    //arr4.reduce((sum, current) => sum + current);

/*
======================================================================================
Exemplo prático:
    soma de lançamentos de foguetes orbitais no período de 1 ano.
======================================================================================
*/

    const foguetes = [
        {país: "Rússia", lançamentos: 23},
        {país: "EUA", lançamentos: 45},
        {país: "China", lançamentos: 32},
        {país: "Alemanha", lançamentos: 4},
        {país: "India", lançamentos: 9},
        {país: "Japao", lançamentos: 14},
        {país: "Brasil", lançamentos: 1},

    ]

    let somaLançamentos = foguetes.reduce((soma, elem) => soma + elem.lançamentos, 0)

    console.log(`Total de lançamentos: ${somaLançamentos}`)

    

