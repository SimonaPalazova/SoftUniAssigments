const router = require('express').Router();
const animalManager = require('../managers/animalManager');

router.get('/' , async (req, res) => {

    const animal = await animalManager.getAll(); 
    res.render('home', { animal });
    
});
/*
router.get('/search', async(req, res) => {
 const { need } = req.query;

 const animal = await animalManager.getAllNeed(need);
})
*/
router.get('/404', (req, res) => {
    res.render('404');
})
module.exports = router;