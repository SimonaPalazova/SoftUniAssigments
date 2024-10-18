function fishland(input){
    let skumriq = Number(input[0])
    let caca = Number(input[1])
    let kilPalamud = Number(input[2])
    let kilSafrit = Number(input[3])
    let midi = 7.5 * Number(input[4])

    let palamud = skumriq + skumriq*0.6
    palamud = kilPalamud*palamud

    let safrit = caca + caca*0.8
    safrit = safrit*kilSafrit

    let sum = safrit + palamud + midi

    console.log(sum.toFixed(2))
}
fishland([6.90,
    4.20,
    1.5,
    2.5,
    1
    ])