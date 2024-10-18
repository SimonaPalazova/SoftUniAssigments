const Animal = require('../models/Animal')

exports.create = async(animalData) => {
    try{
      const isValidAnimalData = await Animal.create(animalData);

      return isValidAnimalData

    } catch(err){
        throw err
    }
    
};

exports.getAll = () => Animal.find().populate('owner').lean();

exports.getOne = (animalId) => Animal.findById(animalId).populate('owner').lean();

exports.delete = (animalId) => Animal.findByIdAndDelete(animalId);

exports.edit = async (animalId, animalData) => {
    try{
       const isValidAnimal = await Animal.findByIdAndUpdate(animalId, animalData).lean();
       return isValidAnimal;

    }catch(err){
        throw err
    }
    
};

exports.donate = async (animalId, userId) => {
    const animal = await Animal.findById(animalId).populate('userId').lean();

    if(!(this.donate.includes(userId))){
        this.donate.push(userId);
        
        return animal.save();
    }
}


exports.getAllNeed = async(need) => {
    let result =  await Animal.find(need);

}
