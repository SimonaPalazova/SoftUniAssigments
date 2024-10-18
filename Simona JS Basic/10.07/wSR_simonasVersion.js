function worldSwimmingRecord(input){
let record = Number(input[0])
let metres = Number(input[1])
let timeFor1Meter = Number(input[2])

let result = metres*timeFor1Meter

let zabavqne = Math.floor(metres / 15)
zabavqne *= 12.5

let sumTime = result + zabavqne
let nedostigastoVreme = result - record


if(record >= sumTime){
   console.log(`Yes, he succeeded! The new world record is ${sumTime.toFixed(2)} seconds.`)
    
}else{
   
    console.log(`No, he failed! He was ${nedostigastoVreme.toFixed(2)} seconds slower.`)
}

}

worldSwimmingRecord(["10464", "1500", "20"])