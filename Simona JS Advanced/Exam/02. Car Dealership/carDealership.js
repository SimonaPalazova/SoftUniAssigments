class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (!this._validateModel(model) || !this._validateHorsepower(horsepower) || !this._validatePrice(price) || !this._validateMileage(mileage)) {
             throw new TypeError('Invalid input!')
        }

        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
        

    }

    sellCar(model, desiredMileage){

         const index= this.availableCars.findIndex(c => c.model == model);
         const match = this.availableCars[index]

        if(match == undefined){
            throw new ReferenceError(`${model} was not found!`);
        }

        const mileageDelta = match.mileage - desiredMileage;
         
        const sold = {
            model: match.mode,
            horsepower: match.horsepower
        }
        if(mileageDelta <= 0){
            sold.soldPrice = match.price
        }else if(mileageDelta <= 40000){
            sold.soldPrice = match.price*0.95;
        }else{
            sold.soldPrice = match.price*0.9
        }

        this.soldCars.push(sold);
        this.availableCars.splice(index, 1);

        this.totalIncome += sold.soldPrice;

        return `${model} was sold for ${sold.soldPrice.toFixed(2)}$`;

    }

    currentCar(){
        if(this.availableCars.length == 0){
            return `There are no available cars`
        }

        const result =  this.availableCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`)
       result.unshift(`-Available cars:`);

       return result.join('\n');
        
    }

    salesReport(criteria){
        if(criteria == 'horsepower'){
            this.soldCars.sort((a,b) => b.horsepower - a.horsepower)
        }else if(criteria == 'model'){
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
        }else{
            throw new Error("Invalid criteria!")
        }
        const result = this.soldCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.price.toFixed(2)}$`)
        result.unshift(`-${this.soldCars.length} cars sold:`);
        result.unshift(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);

        return result.join('\n')
    }



        _validateModel(model) {
            return typeof model == 'string' && model != '';
        }

        _validateHorsepower(horsepower) {
            return Number.isInteger(horsepower) && horsepower >= 0;
        }

        _validatePrice(price) {
            return typeof price == 'number' && price >= 0;
        }

        _validateMileage(mileage) {
            return typeof mileage == 'number' && mileage >= 0;
        }
    

}
