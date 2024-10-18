function foodDelivery(input){
    let pMenq = 10.35* Number(input[0])
    let rMenq = 12.4 * Number(input[1])
    let vMenq = 8.15 * Number(input[2])
    let obMenq = pMenq+rMenq+vMenq
    let desaert = 0.2*obMenq
    let sum = obMenq+desaert+2.5

    console.log(sum)
}
foodDelivery(["2","4","3"])