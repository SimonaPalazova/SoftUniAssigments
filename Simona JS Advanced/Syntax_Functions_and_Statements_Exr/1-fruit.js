function fruit(fruit, grams, price) {
    grams /= 1000
    let neededMoney = grams * price;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${grams.toFixed(2)} kilograms ${fruit}.`);
}
fruit('apple', 1563, 2.35)
fruit('orange', 2500, 1.80)