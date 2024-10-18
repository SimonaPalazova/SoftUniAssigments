function toyShop(input){
let price = Number(input[0])
let puzel =  Number(input[1])
let gKukla = Number(input[2])
let meche = Number(input[3])
let minion = Number(input[4])
let kamion = Number(input[5])

let broiIgrachki = puzel + gKukla + meche + minion + kamion
let oborot = 2.6 * puzel + 3 * gKukla + 4.1 * meche + 8.2 * minion + 2 * kamion

if(broiIgrachki >= 50){
    let otstupka = oborot* 0.25  
    oborot = oborot - otstupka
}
let naem = oborot * 0.1
oborot = oborot - naem

if(oborot >= price){
    let ostavashtiPari = (oborot - price).toFixed(2)
    console.log(`Yes! ${ostavashtiPari} lv left.`)
}else{
    let nedostigashtiPari =( price - oborot).toFixed(2)
    console.log(`Not enough money! ${nedostigashtiPari} lv needed.`)
}

}
toyShop(["320", "8", "2", "5", "5", "1"])