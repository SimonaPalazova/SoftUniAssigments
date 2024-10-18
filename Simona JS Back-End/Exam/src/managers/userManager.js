const User = require('../models/User');

const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');

const { isAuth } = require('../middlewares/authMiddleware');

const { SECRET, TOKEN_KEY } = require('../config/config');

exports.login = async (email, password) => {
    //find user by email
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password!');
    }
    //check password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error('Invalid email or password!');
    }

    const token = await generationToken(user);

    return token
};

exports.register = async (userData) => {
    const user = await User.findOne({ email: userData.email });
    if (user) {
        throw new Error('Email already exists')
    }
    const createdUser = await User.create(userData);
    const token = await generationToken(createdUser);

    return token;
};

async function generationToken(user){
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
    };

    const token = await jwt.sign(payload, SECRET, {expiresIn: '2d'});

    return token
}