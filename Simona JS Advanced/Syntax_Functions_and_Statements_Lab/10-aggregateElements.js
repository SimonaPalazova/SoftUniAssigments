function aggregateElements(input){
    let sum = 0;
    let inverseValuesSum = 0;
    let concate = '';

for (const num of input) {
    sum += num

    let inversedNum = 1/num;
    inverseValuesSum += inversedNum

    concate += num;
}

console.log(sum);
console.log(inverseValuesSum);
console.log(concate);
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16])
