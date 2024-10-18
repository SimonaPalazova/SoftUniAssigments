const mongoose = require('mongoose');

//TODO: change db name
const uri = 'mongodb://127.0.0.1:27017/animals'

async function dbConnect(){
    await mongoose.connect(uri);
}

module.exports = dbConnect;