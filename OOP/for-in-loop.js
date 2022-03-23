function Circle(raio){
    this.radius = raio
    this.draw = function(){
        console.log('circulo desenhado')
    }
}

const circle = new Circle(10)

for(let key in circle){ //enumera os membros de um objeto (atributos e metodos)
    if(typeof circle[key] !== 'function'){ //condiciona p/ mostrar apenas o q nao é método(funçao)
        console.log(key, circle[key])
    }
}

const keys = Object.keys(circle) //passa todas as keys de um objeto para um array
console.log(keys)

if('radius' in circle){ //checa a existencia de um atributo ou metodo em um objeto
    console.log('circle has a radius')
}