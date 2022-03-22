//lógica: somando todos os numeros entre um range de um array
function sumAll(arr) {
  let count = 0; //variavel deve ser iniciada fora dos loops

  if(arr[0] < arr[1]){
    for(let i = arr[0]; i <= arr[1]; i++){   
      count += i
    }
    return count //contagem retornada fora do loop for
  }
   else if(arr[1] < arr[0]){
     for(let i = arr[1]; i <= arr[0]; i++){
     count += i
   }
   return count
 }
    else{
      return "wrong";
    }
  
}

sumAll([1, 4]);