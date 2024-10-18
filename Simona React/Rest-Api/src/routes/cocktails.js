const router = require('express').Router();
const { auth } = require('../utils/auth');
const { getCocktails, getCocktail, editCocktail, deleteCocktail, getCocktailsByOwner} = require('../controllers/cocktailsController');

// middleware that is specific to this router

router.get('/',getCocktails);

router.get('/:userId/cocktails', auth , getCocktailsByOwner);

router.get('/:cocktailId', getCocktail);
router.post('/:cocktailId/edit', auth, editCocktail);
router.put('/cocktailId/edit', editCocktail)
router.delete('/:cocktailId/delete', auth, deleteCocktail);

module.exports = router;