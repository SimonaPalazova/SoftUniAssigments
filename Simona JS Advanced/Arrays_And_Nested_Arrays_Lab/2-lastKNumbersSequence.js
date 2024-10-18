function solve(n, k) {
    const arr = [1];
  
    while (arr.length < n) {
      let newElement = 0;
      for (let i = arr.length - 1; i > arr.length - 1 - k && i >= 0; i--) {
        newElement += arr[i];
      }
      arr.push(newElement);
    }
  
    return arr;
  }
console.log(solve(6, 3)); 
console.log(solve(8, 2)); 