function processOddPositions(arr){
    return arr.filter((el, i) => i % 2 == 1)
    .map(el => el * 2)
    .reverse()
}
console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));