/*
Conta Letras
Implemente a função ao lado que recebe como parâmetros uma string e uma letra e deve retornar a quantidade de ocorrências da letra passada na string passada.

Exemplo: se for passado “carreira” e a letra “r”, a função deve retornar 3

Exemplo: se for passado “ovo” e a letra “s”, a função deve retornar 0

Dica: Strings se comportam parecido com arrays. Então, podemos obter o número de caracteres de uma string utilizando a propriedade length como se segue:
*/

function contaLetras(string, letra) {
	let cont = 0
	let tamanho = string.length
	for(let i = 0 ; i < tamanho ; i++){
		if(string[i] == letra){
			cont++
		}
	}
	return cont
		// Escreva aqui seu código
}