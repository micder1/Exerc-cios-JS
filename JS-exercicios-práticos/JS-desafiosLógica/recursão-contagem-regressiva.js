
function countdown(n){
  if(n < 1){
    return []
  } else{
    const contagemArr = countdown(n - 1)
    contagemArr.unshift(n)
    return contagemArr
  }
  return;
}