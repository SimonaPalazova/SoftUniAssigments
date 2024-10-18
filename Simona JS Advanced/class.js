class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length == this.space) {
            throw new Error('Not enough space in the cellar.')
        }
        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false
        })
        return (`You reserved a bottle of ${wineName} ${wineType} wine.`)
    }

    payWineBottle(wineName, price) {
        for (const wine of this.wines) {
            if (wine.wineName == wineName) {
                if (wine.paid == true) {
                    throw new Error(`${wineName} has already been paid.`)
                } else {
                    wine.paid = true
                    this.bill += Number(price);

                    return (`You bought a ${wineName} for a ${price}$.`);
                }

            }
  
        }
        throw new Error(`${wineName} is not in the cellar.`)
    }
    openBottle(wineName) {
        for (let index = 0; index < this.wines.length; index++) {
            const element = this.wines[index];
            if (element.wineName == wineName){
                if (element.paid == false) {
                    throw new Error(`${wineName} need to be paid before open the bottle.`)
                } else {
                  this.wines.splice(index, 1);
                   
                  return (`You drank a bottle of ${wineName}.`)
                }
            }
        }
        throw new Error(`The wine, you're looking for, is not found.`)
           
    }
    cellarRevision(wineType) {
        if(wineType === undefined){
            let result = `You have space for ${this.space - this.wines.length} bottles more.\nYou paid ${this.bill}$ for the wine.`
            let sortedWines = this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName));

            for (const wine of sortedWines) {
              result += (`\n${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`); 
            }

            return result;
        }

        let result = [];
        for (const wine of this.wines) {
            if(wine.wineType === wineType){
                result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`); 
            }

            return result.join('\n');
        }
        throw new Error(`There is no ${wineType} in the cellar.`);
    }
}
const selection = new WineSelection(2)

selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
selection.payWineBottle('Sauvignon Blanc Marlborough', 50);


