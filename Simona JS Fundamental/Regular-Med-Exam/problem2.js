function coffeeLover(input) {
    let coffeList = input
        .shift()
        .split(' ');

    let number = Number(input.shift())

    let currentLine = input
        .slice()
        .shift();
     
    for (let i = 0; i < number; i++) {
        
        let lineArr = currentLine.split(' ');
        let command = lineArr[0]
        let firstArgument = lineArr[1];
        let secondArgument = lineArr[2];

        if(i === 0){
            currentLine = input.shift();
        }
        switch (command) {
            case 'Include':
                coffeList.push(firstArgument);
                break;

            case 'Remove':
                let position = 0;
                if(firstArgument === 'first'){
                    position = 0;
                }else{
                    position = -secondArgument;
                }
                if(coffeList.length > secondArgument){
                    coffeList.splice(position, secondArgument);
                }
                break;

            case 'Prefer':
                if(coffeList[firstArgument] && coffeList[secondArgument]){
                    
                    let coffe =coffeList[firstArgument]
                    let coffe2 = coffeList[secondArgument]
                    coffeList.splice(secondArgument, 1, coffe)
                    coffeList.splice(firstArgument, 1, coffe2);

                    
                }
                break;

            case 'Reverse':
                coffeList.reverse();
            break;

                
        }
        
        currentLine = input.shift()
    }
    console.log("Coffees:");
    console.log(coffeList.join(' '));
}
coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",

    "5",

    "Include TurkishCoffee",

    "Remove first 2",

    "Remove last 1",

    "Prefer 3 1",

    "Reverse"])