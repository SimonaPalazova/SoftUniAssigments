function sumOfNumbers(input){
    let numToString = String(input[0])
    let sum = 0;

    for(let i = 0; i < numToString.length; i++){
        let num = Number(numToString[i]);
        sum += num
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(["1234"])