const mongoose = require('mongoose');

const cocktailSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true],
    },
    image:{
        type: String,
        required: [true],
      
    },
    ingredients:{
        type: String,
        required: [true],
    },
    methodOfPreparation:{
        type: String,
        required: [true],
    },
   
    owner:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    
});
const Cocktail = mongoose.model('Cocktail', cocktailSchema);
module.exports = Cocktail;
