//write a js program to replace the first digit(number) in a string (should contain at least one digit)
//with $ character

//usando regEx

const replaceDigit = (str) => str.replace(/0-9/, '$')

/*str.replace: primeiro argumento -> string que será substituida
               segundo argumento  -> string que substituirá 
               nesse caso, o primeiro digito de 0 a 9 encontrado será substituido por '$'
*/