function diagonalSum(nestedArray){
let mainDiagonal = 0;
let secondaryDiagonal = 0;

for (let i = 0; i < nestedArray.length; i++) {
    mainDiagonal += nestedArray[i][i];
    secondaryDiagonal +=  nestedArray[i][nestedArray.length - i - 1]
}
console.log(`${mainDiagonal} ${secondaryDiagonal}`);
}
diagonalSum([[20, 40], [10, 60]])