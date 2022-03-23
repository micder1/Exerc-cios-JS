function Circle(radius){
    this.radius = radius

    let defaultLocation = {x: 2, y: 2} // atributo privado

    this.draw = function(){
        console.log('draw')
    }

    Object.defineProperty(this, 'defaultLocation', { //getter do atributo defaultLocation
        get: function() { //get é uma key especial para criar um getter
            return defaultLocation
        },
        set: function(valor){
            if (!valor.x || !valor.y){ //error catch, caso valor de x ou y sejam falsos
                throw new Error('invalid location')
            }
            dafaultLocation = valor
        }
        
    })
}

const circle = new Circle(10) //criaçao do objeto

//caso eu queira apenas acessar o atributo defaultLocation, posso usar um getter
//que é um método(funçao) que retorna o conteúdo de um atributo

//como o atributo defaultLocation é privado, não posso acessá-lo diretamente,
//mas posso acessá-lo com o método getter:

circle.defaultLocation // getter: como esse método é publico, posso acessá-lo fora do escopo do
//objeto Circle

console.log(circle)

//criaçao dos getters/setters:
//o getter é read-only, o setter pode mudar o atributo
//
//  Object.defineProperty(this, 'nomeDoAtributo', {
//      get: function(){
//          return nomeDoAtributo
//      },
//      set: function(valor){
//          nomeDoAtributo = valor
//      }
//
//  })

