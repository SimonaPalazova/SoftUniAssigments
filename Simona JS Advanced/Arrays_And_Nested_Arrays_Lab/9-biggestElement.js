function biggestElement(nestedArr) {
    let biggestElement = nestedArr[0][0];
  
    for (let row of nestedArr) {
      let currentBiggestElement = Math.max(...row);
      if (biggestElement <= currentBiggestElement) {
        biggestElement = currentBiggestElement;
      }
    }
  
    return biggestElement;
}
  
console.log(biggestElement([[20, 50, 10], [8, 33, 145]])); 
console.log(biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]])); 