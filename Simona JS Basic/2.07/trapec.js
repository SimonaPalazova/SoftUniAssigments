function trapec(input){
    let b1 = Number(input[0])
    let b2 = Number(input[1])
    let h = Number(input[2])

    let result =( (b1 + b2)*h/2).toFixed(2)
    console.log(result)
}
trapec([8, 13, 7])