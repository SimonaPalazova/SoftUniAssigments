const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        minLength: [10, 'The email should be at least 10 characters long.']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [4, 'The password should be at least 10 characters long.']
    }
});

userSchema.virtual('repeatPasswor')
.set(function(value){
    if(this.password !== value){
        throw new Error('Password missmatch!')
    }
})

userSchema.pre('save', async function(){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash; 
});

const User = mongoose.model('User', userSchema);

module.exports = User;