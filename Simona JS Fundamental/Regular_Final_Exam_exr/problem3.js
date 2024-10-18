function solve(input) {
    let plantsCount = Number(input.shift());
    let plants = {}

    for (let i = 0; i < plantsCount; i++) {
        let plant = input.shift()
        let [plantName, rarity] = plant.split('<->');

        plants[plantName] = {
            rarity: Number(rarity),
            rating: []
        };
    }

    let command = input.shift();

    while (command !== 'Exhibition') {

        let [commandName, args] = command.split(': ');
        let [plantName, argument] = args.split(' - ');

        let plant = plants[plantName]
        if (plant) {
        switch (commandName) {
            case 'Rate':
                let rating =Number(argument)
                plants[plantName].rating.push(rating);

                break;

            case 'Update':

                let rarity = Number(argument)
                plants[plantName].rarity = rarity;

                break;

            case 'Reset':

                plants[plantName].rating = [];

                break;
        }

        }else{
            console.log('error');
        }
        command = input.shift();

    }
    console.log('Plants for the exhibition:');

    for (const plant in plants) {
        let sum = 0;
        let ratingArray = plants[plant].rating
        let countRating = ratingArray.length;
        
        for (const el of ratingArray) {

            sum += el;
        }

        let averageSum = sum / countRating;
        if(!averageSum){
            averageSum = 0;
        }
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Raiting: ${averageSum.toFixed(2)}`);
    }
    


}
solve(["3",

    "Arnoldii<->4",

    "Woodii<->7",

    "Welwitschia<->2",

    "Rate: Woodii - 10",

    "Rate: Welwitschia - 7",

    "Rate: Arnoldii - 3",

    "Rate: Woodii - 5",

    "Update: Woodii - 5",

    "Reset: Arnoldii",

    "Exhibition"])