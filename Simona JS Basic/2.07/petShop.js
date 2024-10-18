function petShop(input){
    let dogf = Number(input[0] * 2.5)
    let catf = Number(input[1] * 4)
    let sum = dogf + catf
    let res = `${sum} lv.`
    console.log(res)
}
petShop(["13","9"])