function godzillaVsKong(input){
let budgetForTheFilm = Number(input[0])
let supernumerary = Number(input[1])
let priceForClothing = Number(input[2])
let neededmoney = supernumerary*priceForClothing

let decor = 0.1 * budgetForTheFilm

if(supernumerary > 150){
    neededmoney *= 0.9
}

let sumMoney = neededmoney + decor

if(sumMoney > budgetForTheFilm){
    let nedostigashtiPari = sumMoney - budgetForTheFilm
    console.log("Not enough money!")
    console.log(`Wingard needs ${nedostigashtiPari.toFixed(2)} leva more.`)
}else{
    let ostavashtiPari = budgetForTheFilm - sumMoney
    console.log("Action!")
    console.log(`Wingard starts filming with ${ostavashtiPari.toFixed(2)} leva left.`)
}
}

godzillaVsKong(["9587.88", "222", "55.68"])