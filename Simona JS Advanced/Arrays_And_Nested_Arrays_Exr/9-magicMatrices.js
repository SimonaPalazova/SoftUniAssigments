function magicMatrices(matrix) {
    let sumGoal = 0;
    let flag = true;
  
    for (let i = 0; i < matrix.length; i++) {
      sumGoal += matrix[0][i];
    }
  
    for (let row = 0; row < matrix.length; row++) {
      let rowSum = 0;
      let collumnSum = 0;
      for (let collumn = 0; collumn < matrix.length; collumn++) {
        rowSum += matrix[row][collumn];
        collumnSum += matrix[collumn][row];
      }
  
      if (rowSum != sumGoal || collumnSum != sumGoal) {
        flag = false;
      }
    }
  
    return flag;
  }
  
console.log(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]))