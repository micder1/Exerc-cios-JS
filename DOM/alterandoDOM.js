//inserindo uma lista no html com javascript

let insereArrayUL = (arr) => {
    let criaUL = document.createElement('ul') //cria o elemento html ul

    //agora preciso inserir a ul no body:
    let elementoBody = document.getElementsByTagName('body')

    elementoBody[0].appendChild(criaUL)

    let elementoUL = document.getElementsByTagName('ul')

    //agora vou inserir cada elemento do array passado como argumento em uma li dentro da ul
    for(let i = 0 ; i < arr.length ; i++){
        let criaLI = document.createElement('li') //crio uma li pra cada elemento no array
    
        let insereTexto = document.createTextNode(arr[i]) //armazeno o texto do indice i do array em 'insereTexto'
    
        criaLI.appendChild(insereTexto) //insiro o conteúdo de 'insereTexto' na li criada
        
        elementoUL[0].appendChild(criaLI) //insiro a li criada na ul
    }

    return criaUL
}