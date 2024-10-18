function lunchBreak(input){
let serial = input[0]
let epizod = Number(input[1])
let breakk = Number(input[2])

let lunchTime = breakk * 1/8
let freeTime = breakk * 1/4
let filmTime = breakk - lunchTime - freeTime

if(epizod <= filmTime){
    console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(filmTime - epizod)} minutes free time.`)
}else{
    console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(epizod - filmTime)} more minutes.`)
}
}

lunchBreak(["Game of Thrones",

"60",

"96"])