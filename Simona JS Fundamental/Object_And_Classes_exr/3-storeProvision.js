function storeProvision(localStock, orderedStock) {

    let output = {};
    const localStockLength = localStock.length;
    const orderedStockLength = orderedStock.length;

    for (let i = 0; i < localStockLength; i += 2) {
        let currentProduct = localStock[i];
        output[currentProduct] = Number(localStock[i + 1])
    }
    for (let i = 0; i < orderedStockLength; i += 2) {
        const currentProduct = orderedStock[i];
        if (!(output.hasOwnProperty(currentProduct))) {
            output[currentProduct] = 0;
        }
        output[currentProduct] += Number(orderedStock[i + 1])
    }
    for (const product in output) {
        console.log(`${product} -> ${output[product]}`);
    }

}


storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',

    '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ]);

