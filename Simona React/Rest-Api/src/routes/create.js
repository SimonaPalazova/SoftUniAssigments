const router = require('express').Router();
const { auth } = require('../utils/auth');
const { createCocktail } = require('../controllers/cocktailsController')

router.post('/cocktail', auth,createCocktail);

module.exports = router;