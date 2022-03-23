//hide the details, show the essentials

function Circle(raio){
    this.radius = raio

    this.defaultLocation = {x: 0, y: 0} 

     this.computeOptimumLocation = function(fator){
        //blablabla
     }

    this.draw = function(){
        this.computeOptimumLocation(0.1)

        console.log('circulo desenhado')
    }
}

//posso precisar esconder alguns métodos e atributos do usuário,
//para isso, em JS, devo declarar os métodos/atributos que devem ser
//setados como private da seguinte forma:

function Circle(raio){
    this.radius = raio //atributo publico

    let defaultLocation = {x: 0, y: 0} //dessa forma, o atributo é privado

    let computeOptimumLocation = function(fator){ //dessa forma a funçao(método) é privada
       //blablabla
     }

    this.draw = function(){
        computeOptimumLocation(0.1)

        console.log('circulo desenhado')
    }
}

const circle = new Circle(10)

//dessa forma, apenas o atributo raio e o método draw ficam disponíveis
//para o usuário