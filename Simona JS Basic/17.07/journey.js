function journey(input){
    let budget = Number(input[0])
    let season = input[1]
    
    let destination = " ";
    let typeOfJourney = " "; 

    if(budget <= 100){
        destination = "Bulgaria" 
        if(season === "summer"){
            budget *= 0.3
            typeOfJourney = "Camp"
        }else{
            budget *= 0.7
            typeOfJourney = "Hotel"
        }
    }else if(budget <= 1000){
        destination = "Balkans" 
        if(season === "summer"){
            budget *= 0.4
            typeOfJourney = "Camp"
        }else{
            budget *= 0.8
            typeOfJourney = "Hotel"
        }
    }else{
        destination = "Europe"
        typeOfJourney = "Hotel"
        budget *= 0.9
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfJourney} - ${budget.toFixed(2)}`);
}
journey(["50", "summer"])