function rangeOfNumbers(startNum, endNum) {
  if(startNum > endNum){
    return [];
  } else if(startNum == endNum){
    return[startNum]
  } else{
    const rangeArr = rangeOfNumbers(startNum, endNum - 1)
    rangeArr.push(endNum)
    return rangeArr
  }
   
};