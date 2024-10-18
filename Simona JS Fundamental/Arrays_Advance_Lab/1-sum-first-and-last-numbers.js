function sumFirstAndLast(numbers){
    let firstNumber = Number(numbers[0]);
    let lastNum = Number(numbers.pop());
    console.log(firstNumber + lastNum);
}
sumFirstAndLast(['20', '30', '40'])