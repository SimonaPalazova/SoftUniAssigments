function oddAndEvenSum(num) {
    let sumOdd = 0;
    let sumEven = 0;
    let stringNum = num + "";

    for (let i = 0; i < stringNum.length; i++) {
        if (Number(stringNum[i]) % 2 == 0) {
            sumEven += Number(stringNum[i]);
        } else {
            sumOdd += Number(stringNum[i]);
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
oddAndEvenSum(1000435); //Odd sum = 9, Even sum = 4
oddAndEvenSum(3495892137259234); // Odd sum = 54, Even sum = 22