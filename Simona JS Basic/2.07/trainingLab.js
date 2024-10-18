function trainingLab(input){
    let w = 100 * Number(input[0])
    let h = 100 * Number(input[1]) - 100

    let horiont = Math.trunc(h / 70)
    let vertikal = Math.trunc(w / 120)

    let sum = horiont * vertikal - 3

    console.log(sum)
}
trainingLab([15,
    8.9
    ])