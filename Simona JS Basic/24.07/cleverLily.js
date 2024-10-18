function cleverLily(input) {
    let n = Number(input[0]);
    let priceWashingMashine = Number(input[1])
    let priceToy = Number(input[2])

    let countMoney = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            countMoney += 10*(i/2);
            countMoney -= 1;
        }else{
            countMoney += priceToy
        }
    }
    if(countMoney >= priceWashingMashine){
        console.log(`Yes! ${(countMoney - priceWashingMashine).toFixed(2)}`);
    }else{
        console.log(`No! ${(priceWashingMashine - countMoney).toFixed(2)}`);
    }


}

cleverLily(["10",

    "170.00",

    "6"])