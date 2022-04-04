//length : retorna o tamanho da string

    let nome = "Tulio"
    let sobrenome = "Palacine"

    console.log(nome.length) // 5
    console.log(sobrenome.length) // 8

//indexOf(string) : retorna qual o indice da primeira apariçao da string indicada 

    let fraseFirst = "teste, primeira apariçao de teste"

    console.log(fraseFirst.indexOf("teste")) // 0

//indexOf(string) : retorna qual o indice da ultima apariçao da string indicada 

    let fraseLast = "teste, ultima apariçao de teste"

    console.log(fraseFirst.lastIndexOf("teste")) // 28

//slice(inicio, fim) : extrai uma parte de uma string (inicio, fim)

    let frase = "Eu fui ao mercado"

    let mercado = frase.slice(10, 17) 

    console.log(mercado) //mercado

//replace(string que será substituida, string que irá substituir) : troca uma parte de uma string por outra string indicada 

    let novaFrase = frase.replace("ao mercado", "a padaria")

    console.log(novaFrase) //eu fui a padaria

//toLowerCase() / toUpperCase() : altera para letra minuscula/maiuscula

    let frase2 = "Um DoIs TrEs QuAtRo"

    console.log(frase2.toLowerCase()) //um dois tres quatro
    console.log(frase2.toUpperCase()) //UM DOIS TRES QUATRO

//trim() : remove espaços

    let frase3 = "      ola       "

    console.log(frase3.trim())

//split() : separa cada palavra da string em um array, recebe como argumento o que separa as palavras

    let frase4 = "hoje eu fui ao shopping"

    console.log(frase4.split(" ")) // ['hoje', 'eu', 'fui', 'ao', 'shopping'] 

    let tags = "JavaScript, REACT, Java, PHP"

    console.log(tags.split(", ")) //['JavaScript', 'REACT', 'Java', 'PHP']

//outros : https://medium.com/@luke_smaki/javascript-es6-template-literals-and-new-string-methods-2ed479670de9