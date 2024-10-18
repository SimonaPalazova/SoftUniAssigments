function solve(input) {

    let list = {};
    let unLikedMeals = [];
    let line = input.shift();

    while (line !== 'Stop') {
        let currentLine = line.split('-');
        let command = currentLine.shift()

        switch (command) {
            case 'Like': {
                let guest = currentLine[0];
                let meal = currentLine[1];

                if (!(list.hasOwnProperty(guest))) {
                    list[guest] = [];
                } if (!(list.hasOwnProperty(meal))) {
                    list[guest].push(meal)
                }

            }
                break;

            case 'Dislike': {
                let guest = currentLine[0];
                let meal = currentLine[1];

                if ((list.hasOwnProperty(guest)) && (list.hasOwnProperty(meal))) {
                    let dissLikeMeal = list[guest].indexOf(meal);
                    unLikedMeals.push(dissLikeMeal)
                    list[guest].splice(dissLikeMeal, 1);
                    console.log(`${guest} doesn't like the ${meal}.`);

                }

                if (!(list.hasOwnProperty(guest))) {
                    console.log(`${guest} is not at the party.`);
                    break;
                }


                if (!(list.hasOwnProperty(meal))) {

                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                }



            }
                break;
        }

        line = input.shift();

    }
    for (const guest in list) {
        console.log(`${guest}: ${list[guest].join(', ')}`);
    }

    console.log(`Unliked meals: ${unLikedMeals.length}`);
}


solve(['Like-Katy-fish',
'Dislike-Katy-fish',
'Stop'])