function StopWatch(){

    let contagemTotal = 0
    let inicio = 0
    let final = 0
    let ativo = false

    this.start = function(){
        if(ativo == true){
            throw new Error('cronometro ja está rodando')
        }
        inicio = new Date(); //date object contem um numero que é contado em ms a partir de sua criaçao
        ativo = true;
    }

    this.stop = function(){
        if(ativo == false){
            throw new Error('cronometro ja está parado')
        }
        final = new Date();
        ativo = false;
    }

    this.contaDuraçao = function(){
        const segundosInicio = inicio.getTime() //getTime() returns the number of milliseconds since January 1, 1970 00:00:00.
        const segundosFinal = final.getTime()

        const contaSegundos = ((segundosFinal - segundosInicio)/1000).toFixed(2);
        contagemTotal += contaSegundos
        //return contagemTotal + ' segundos'
    }

    this.reset = function(){
        contagemTotal = 0
        inicio = 0
        final = 0
        ativo = false
    }

    Object.defineProperty(this, 'contagemTotal', {
        get: function(){ //getter para obter a duraçao
            return contagemTotal + ' segundos'
        },
        set: function(){
            throw new Error('Duraçao nao pode ser setada')
        }
    })
}

//const cronometro = new StopWatch()