function fishTank(input){
    let a = Number(input[0])
    let b = Number(input[1])
    let h = Number(input[2])
    let procent = Number(input[3] / 100)

    let V = a*b*h
    let vLitri = V/1000
    let zaetos = vLitri * procent

    console.log(vLitri - zaetos)

}
fishTank(["85","75","47","17"])