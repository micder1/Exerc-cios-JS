//notaçoes de funçoes para criar objetos (convençao)
//Camel Notation : umDoisTresQuatro - factory functions
//Pascal Notation: UmDoisTresQuatro - constructor functions

//factory function para criar um objeto
function createCircle(raio){ //lógica de todos os objetos localizada no mesmo local
    return{
        raio,
        desenhaCirculo() {
            console.log(`circulo de raio ${raio} foi desenhado`)
        }
    }
}

const circulo1 = createCircle(1) 
console.log(circulo1)

const circulo2 = createCircle(2)
console.log(circulo2)


//constructor function para criar um objeto
function Circle(raio){
    this.raio = raio //keyword this faz referencia a um objeto está sendo criado no construtor
    this.draw = function(){
        console.log(`cicrulo de raio ${raio} foi desenhado`)
    }
}

const circulo = new Circle(1) 
console.log(circulo)
//o operador new cria um objeto vazio e nesse caso, Cria um objeto Circle com parametro 1,
//e faz com que a keyword "this" aponte para esse novo objeto e finalmente retorna o objeto
//criado na constructor function Circle.