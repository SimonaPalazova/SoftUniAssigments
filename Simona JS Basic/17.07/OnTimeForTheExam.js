function OnTimeForTheExam(input){
    let examHour = Number(input[0])
    let examMin = Number(input[1])
    let arrivalHour = Number(input[2])
    let arrivalMin = Number(input[3])

    let totalExamMin = examHour*60 + examMin;
    let totalArrivalMin = arrivalHour*60 +arrivalMin;

    let totalMinsDiff = Math.abs(totalExamMin - totalArrivalMin);
    let hoursDiff = Math.floor(totalMinsDiff/60);
    let minDiff = totalMinsDiff % 60;

    let timeDiff = 0;

    if(hoursDiff > 0){
        if(minDiff < 10){
            timeDiff = `${hoursDiff}:0${minDiff}`
        }else{
            timeDiff = `${hoursDiff}:${minDiff}`
        }
    }else{
        timeDiff = minDiff
    }

    if(totalArrivalMin < totalExamMin){
       if(totalMinsDiff <= 30) {
        console.log('On time');
        console.log(`${timeDiff} minutes before the start`);
       }else{
        console.log('Early');
        if(totalMinsDiff < 60){
            console.log(`${timeDiff} minutes before the start`);
        }else{
            console.log(`${timeDiff} hours before the start`);
        }
       }
    }else if(totalArrivalMin > totalExamMin){
        console.log('Late');
        if(totalMinsDiff < 60){
            console.log(`${timeDiff} minutes after the start`);
        }else{
            console.log(`${timeDiff} hours after the start`);
        }
    }else{
        console.log('On time');
    }

    
}
OnTimeForTheExam(["9",

"00",

"8",

"30"])