function sumSeconds(input){
let t1 = Number(input[0])
let t2 = Number(input[1])
let t3 = Number(input[2])

let totalT = t1 +  t2 + t3
let min = Math.floor(totalT / 60)
let sec = totalT % 60

if(sec < 10){
    console.log(`${min}:0${sec}`)
}else{
    console.log(`${min}:${sec}`)
}

}

sumSeconds(["35", "45", "44"])