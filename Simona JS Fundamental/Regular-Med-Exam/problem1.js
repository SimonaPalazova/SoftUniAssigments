function experienceGaining(input){
let neededExperience = input.shift();
let countOfBattles = input.shift();

let sum = 0;
let count = 0;

for(let i = 1; i <= countOfBattles; i++){
    let points = Number(input[i -1])
    sum += points;
    count++;
    if(i % 3 === 0){
        sum += points*0.15
    }
    if(i % 5 === 0){
        sum -= points*0.1
    }
    if(i % 15 === 0){
        sum += points*0.05;
    }

    if(sum >= neededExperience){
        break;
    }
}

if(sum >= neededExperience){
    console.log(`Player successfully collected his needed experience for ${count} battles.`);
}else{
    let nedostigashti = neededExperience - sum;
    console.log(`Player was not able to collect the needed experience, ${nedostigashti.toFixed(2)} more needed.`);
}
}
experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    20])	//Player was not able to collect the needed experience, 2.00 more needed.
    
//console.log( '=============' );

   // experienceGaining([400,
     //   5,
      //  50,
      //  100,
      //  200,
       // 100,
      //  20])
 // Player successfully collected his needed experience for 4 battles.        