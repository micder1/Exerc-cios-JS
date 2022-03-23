function Circle(raio){
    this.radius = raio
    this.draw = function(){
        console.log('circulo desenhado')
    }
}

const circle = new Circle(10)

//notaçao de ponto
circle.location = { x: 1} //novo atributo, location

//notaçao de parenteses
circle['location'] = {x: 1}

//notaçao de parenteses é util para acessar dinamicamente 
//o nome de um atributo

const nomeAtributo = 'location'
circle[nomeAtributo] = {x: 1} 

//também é util para acessar atributos com caracteres especiais/espaços
const nomeAtributo2 = 'center-location'
circle['center-location'] = {y: 2}

//console.log(circle['center-location'])

//para deletar um atributo:

delete circle.location
//ou
delete circle['location']
//console.log(circle)