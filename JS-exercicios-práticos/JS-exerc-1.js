//fazer uma funçao que retorna true se um dos numeros for 100 ou a soma dos 2 for 100

function checkNum(num1, num2){
    if((num1 === 100 && num2 !== 100) || (num1 !== 100 && num2 === 100)){
        return true
    }else if(num1 + num2 == 100){
        return true
    }else{
        return false
    }
}

const arrowCheckNum = (num3, num4) => num3 === 100 || num4 === 100 || (num3 + num4) === 100; //melhor prática, com arrow function

checkNum(50, 50)
checkNum(100, 30)
checkNum(25, 100)
checkNum(25, 33)