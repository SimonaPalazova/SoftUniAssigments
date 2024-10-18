function timePlus15Minutes(input){
let hour = Number(input[0])
let hourinmin = hour*60
let min = Number(input[1])
let minPlus15 = min + 15
let tTime = hourinmin + minPlus15

hour = Math.floor(tTime / 60)
min = tTime % 60

if( hour>23){
    hour=0
}

if(min < 10){
    console.log(`${hour}:0${min}`)
}else{
    console.log(`${hour}:${min}`)
}
}

timePlus15Minutes(["1", "46"])