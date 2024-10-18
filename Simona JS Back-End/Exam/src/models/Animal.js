const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name should be at least 2 characters'],
    },
    years:{
        type: Number,
        required: [true, 'Age is required!'],
        min: [1,'The years should be a number between 1 and 100.'],
        max: [100, 'The years should be a number between 1 and 100.']
    },
    kind:{
        type: String,
        required: [true, 'Kind is required!'],
        minLength: [3, 'Kind should be at least 3 characters'],
    },
    image:{
        type: String,
        required: [true, 'Image is required!'],
        match: [/^https?:\/\//, 'Invalid URL'],
        /*
        validate: {
            validator: function (v) {
              const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
              return urlRegex.test(v);
            },
            message: (props) => `${props.value} is not a valid URL`,
        },
    */
    },
    need:{
        type: String,
        required: [true, 'Need is required!'],
        minLength: [2, 'The need  should be at least 3 and no longer than 20 characters.'],
        maxLength: [20, 'The need should be at least 3 and no longer than 20 characters.']
    },
    location :{
        type: String,
        required: [true, 'Location is required!'],
        minLength: [5, 'Location must be at least 10 characters long!'],
        maxLength: [15, 'Location must be at max 50 characters long'],
    },
    description:{
        type: String,
        required: [true,'Description is required!'],
        minLength: [5, 'Description must be at least 10 characters long!'],
        maxLength: [50, 'Description must be at max 50 characters long'],
    },
    
    owner:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    donation: [
        {
            userId: {
                type: mongoose.Types.ObjectId,
                required: true,
                ref: 'User',
            },
        }
    ]
});

const Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;