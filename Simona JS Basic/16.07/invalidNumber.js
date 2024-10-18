function invalidNumber(input){
    let num = Number(input[0])

    let validNum = num >= 100 && num <= 200 || num === 0
    if(!validNum){
        console.log("invalid")
    }
}
invalidNumber([0])