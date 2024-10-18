function sumFirstAndLastNumber(arr) {

    const firstNum = Number(arr[0]);
    const lastNum = Number(arr[arr.length - 1]);

    return firstNum + lastNum;
}
console.log(sumFirstAndLastNumber(['20', '30', '40']));
console.log(sumFirstAndLastNumber(['5', '10']));