function JavaScriptBasics(input){
    let record = Number(input[0])
    let distance = Number(input[1])
    let timeInSeconds = Number(input[2])

    let neededSeconds = distance * timeInSeconds;

    let bonusTime = Math.floor(distance / 15)
    bonusTime = bonusTime * 12.5

    let sumTime = neededSeconds + bonusTime;
    let neededTime = sumTime - record;

    if (record <= sumTime)
    {
        console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`)
    }
    else
    {       
        console.log(`Yes, he succeeded! The new world record is ${(sumTime).toFixed(2)} seconds.`)
    }
}