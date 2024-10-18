const Cocktail  = require('../models/Cocktail');
const User  = require('../models/User');

exports.getCocktails = async (req, res, next) => {
    try {
        const cocktails = await Cocktail.find().populate('owner')
        res.json(cocktails)
    } catch (err) {
        console.log(err);
        next();
    }

}

exports.getCocktail = async (req, res, next) => {
    const cocktailId = req.params.cocktailId;
    try {
        const cocktail = await Cocktail.findById(cocktailId)
            .populate({
                path: 'cocktails',
                populate: {
                    path: 'owner'
                }
            })
        res.json(cocktail);
    } catch (err) {
        console.log(err);
        next();
    }

}

exports.createCocktail = async (req, res, next) => {
    const { name, image, ingredients, methodOfPreparation } = req.body;
    const userId = req.user._id;
    try {
        const createdCocktail = await Cocktail.create({ name, image, ingredients, methodOfPreparation, owner: userId})
        res.status(201).json({ message: "Created!", createdCocktail})
    } catch (err) {
        console.log(err);
        next();
    }

}
exports.editCocktail = async(req, res, next) => {
    const cocktailId = req.params.cocktailId
    const { name, image, ingredients, methodOfPreparation } = req.body;
    const userId = req.user._id;
    // if the userId is not the same as this one of the post, the post will not be updated
    try{
        const editedCocktail = await Cocktail.findOneAndUpdate({ _id: cocktailId, userId }, { name, image, ingredients, methodOfPreparation }, { new: true }) 
        if (editedCocktail) {
                res.status(200).json(editedCocktail);
            }
            else {
                res.status(401).json({ message: `Not allowed!` });
            }
    }catch (err) {
        console.log(err);
        next();
    }
}

exports.deleteCocktail= async(req, res, next) => {
    const cocktailId = req.params.cocktailId
    const userId = req.user._id;

    try{
        const deletedCocktail = await Cocktail.findOneAndDelete({ _id: cocktailId, userId })
        const udate = await User.findOneAndUpdate({ _id: userId }, { $pull: { cocktails: cocktailId } })

            if (deletedCocktail) {
                res.status(200).json(deletedCocktail)
                res.json(udate);
            } else {
                res.status(401).json({ message: `Not allowed!` });
            }
        
    }catch (err) {
        console.log(err);
        next();
    }
    
}

exports.getCocktailsByOwner = async(req, res,next) => {
    const userId = req.user._id;
    
    try{
        const cocktails = await Cocktail.find({owner: userId})
        res.json(cocktails)

    }catch (err) {
        console.log(err);
        next();
    }
}


