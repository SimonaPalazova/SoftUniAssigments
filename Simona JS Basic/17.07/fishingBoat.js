function fishBoat(input){
    let budget = Number(input[0])
    let season = input[1]
    let fishermans = Number(input[2])

    let sum = 0

    switch(season){
        case "Spring": sum = 3000;
        if(fishermans <= 6){
            sum*= 0.9;
        }else if(fishermans >= 7 && fishermans <= 11){
            sum *= 0.85;
        }else{
            sum *= 0.75;
        }
        if(fishermans % 2 === 0){
            sum *= 0.95;
        }
        break;

        case "Summer": sum = 4200;
        if(fishermans <= 6){
            sum*= 0.9;
        }else if(fishermans >= 7 && fishermans <= 11){
            sum *= 0.85;
        }else{
            sum *= 0.75;
        }
        if(fishermans % 2 === 0){
            sum *= 0.95;
        }
        break;

        case "Autumn": sum = 4200;
        if(fishermans <= 6){
            sum*= 0.9;
        }else if(fishermans >= 7 && fishermans <= 11){
            sum *= 0.85;
        }else{
            sum *= 0.75;
        }
        break;

        case "Winter": sum = 2600;
        if(fishermans <= 6){
            sum*= 0.9;
        }else if(fishermans >= 7 && fishermans <= 11){
            sum *= 0.85;
        }else{
            sum *= 0.75;
        }
        if(fishermans % 2 === 0){
            sum *= 0.95;
        }
        break;
    }

    if(budget >= sum){
        console.log(`Yes! You have ${(budget - sum).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva.`)
    }
}
fishBoat(["3600",

"Autumn",

"6"])