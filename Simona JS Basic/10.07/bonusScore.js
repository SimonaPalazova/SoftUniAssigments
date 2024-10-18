function bonusScore(input){
let a = Number(input[0])
let bonusScore = 0

if(a <= 100){
    bonusScore = 5
}else if(a > 100 && a <= 1000){
    bonusScore = a * 0.2
}else{
    bonusScore = a * 0.1
}

if(a % 2 === 0){
    bonusScore += 1
}else if(a % 10 === 5){
    bonusScore += 2
}

console.log(bonusScore)
console.log(a+bonusScore)

}

bonusScore(["15875"])