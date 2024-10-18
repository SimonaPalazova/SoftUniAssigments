function addAstra(input) {
    let nutritionInfo = input.shift();
    let bestBuyInfo = nutritionInfo;
    let filter = /(?<separator>[\#\|])(?<itemName>[A-Za-z\ ]*)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d*)\1/;
    let totalCalories = 0;

    while (filter.test(nutritionInfo)) {
        let foodFound = nutritionInfo.match(filter);

        if (foodFound[4] >= 0 && foodFound[4] <= 10000) {
            totalCalories += Number(foodFound[4]);
        }
        
        nutritionInfo = nutritionInfo.replace(filter, "empty");
    }

    let days = totalCalories / 2000;
    console.log(`You have food to last you for: ${Math.floor(days)} days!`);

    while (filter.test(bestBuyInfo)) {
        let foodFound = bestBuyInfo.match(filter);

        if (foodFound[4] >= 0 && foodFound[4] <= 10000) {
            console.log(`Item: ${foodFound[2]}, Best before: ${foodFound[3]}, Nutrition: ${foodFound[4]}`)
        }

        bestBuyInfo = bestBuyInfo.replace(filter, "empty");
    }
}
addAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    );