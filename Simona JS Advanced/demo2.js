function sortingNumbers(arr) {
    const newArr = [];
  
    while (arr.length > 0) {
      let smallest = Math.min(...arr);
      arr.splice(arr.indexOf(smallest), 1);
      newArr.push(smallest);
  
      if (arr.length == 0) {
        break;
      }
  
      let biggest = Math.max(...arr);
      arr.splice(arr.indexOf(biggest), 1);
      newArr.push(biggest);
    }
  
    return newArr;
  }
  
  console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18]));