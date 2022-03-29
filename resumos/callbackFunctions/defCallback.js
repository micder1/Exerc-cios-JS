/*
    Callback Functions in JavaScript:

    A callback function is a function that is performed after another function has completed its execution. It is typically supplied as an input into another function.
    Callbacks are critical to understand since they are used in array methods (such as map(), filter(), and so on), setTimeout(), event listeners (such as click, scroll, 
    and so on), and many other places.

    Here's an example of a "click" event listener with a callback function that will be run whenever the button is clicked:
*/

//HTML
<button class="btn">Click Me</button>

//JavaScript
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => { //arrow function funciona como callback, pois ela é executada quando o botao é clicado, ou seja, ela espera um evento
  let name = 'John doe';
  console.log(name.toUpperCase())
})

//NB: A callback function can be either an ordinary function or an arrow function.