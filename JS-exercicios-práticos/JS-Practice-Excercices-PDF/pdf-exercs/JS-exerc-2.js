//write a javascript program to get the extension of a filename

//uso a funçao slice : https://www.w3schools.com/jsref/jsref_slice_string.asp
//e a funçao lastInexOf: https://www.w3schools.com/jsref/jsref_lastindexof.asp

const obtemExtensão = (str) => 'a extensão do arquivo é: ' + str.slice(str.lastIndexOf('.')) //a funçao irá retornar o conteúdo da string após a ultima ocorrencia de '.'

console.log(obtemExtensão('teste.js'))
console.log(obtemExtensão('teste.txt'))
console.log(obtemExtensão('teste.wav'))


