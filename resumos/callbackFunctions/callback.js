//passar uma funçao como argumento para outra funçao executa-la durante o código

//exemplo de forma síncrona:

function exibir(num){
    console.log('A operaçao resultou em' + num)
}

function soma(x, y, cb) { //cb é a funçao callback (argumento)
    let result = x + y
    cb(result) //cb é uma funçao passada como argumento para a funçao soma, ela é executada após uma resposta ser recebida, nesse caso : result
}

function multiplicaçao(x, y, cb){
    let result = x * y
    cb(result)
}

soma(2, 2, exibir) //passei a funçao exibir como argumento, ela se comportará como callback

multiplicaçao(4, 4, exibir)