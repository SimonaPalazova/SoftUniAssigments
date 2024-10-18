function vegetableMarket(input){
    let priceVegetables = Number(input[0])
    let priceFruts = Number(input[1])
    let kilVedetables = Number(input[2])
    let kilFruts = Number(input[3])

    let sum = priceVegetables*kilVedetables + priceFruts*kilFruts
    sum /= 1.94

    console.log(sum.toFixed(2))
}
vegetableMarket([0.194,
    19.4,
    10,
    10
    ])