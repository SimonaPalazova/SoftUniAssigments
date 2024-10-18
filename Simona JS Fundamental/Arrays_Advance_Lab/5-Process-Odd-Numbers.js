function processOddNumbers(numbers){

    let result = numbers.filter((_,i) => i % 2 !== 0)
    .map(x => x * 2)
    .reverse()
    console.log(result.join(' '));
}
processOddNumbers([10, 15, 20, 25])