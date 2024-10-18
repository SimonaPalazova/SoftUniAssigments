// TODO: Require Controllers...
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const animalConroller = require('../controllers/animalController');

module.exports = (app) => {
    app.use(homeController);
    app.use('/users', userController);
    //TODO: ...
    app.use('/animals', animalConroller);
    app.get('*', (req, res) => {
        res.redirect('/404');
    })
}
