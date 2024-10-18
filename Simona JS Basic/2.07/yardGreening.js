function yardGreening(input){
    let ozelenqvane = Number(input[0] * 7.61)
    let otstypka = 0.18 * ozelenqvane
    let krcena = ozelenqvane - otstypka
    console.log(`The final price is: ${krcena} lv.`)
    console.log(`The discount is: ${otstypka} lv.`)

}
yardGreening(["150"])