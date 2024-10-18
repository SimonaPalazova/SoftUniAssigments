const router = require('express').Router();

const animalManager = require('../managers/animalManager');

const { getErrorMessage } = require('../untils/errorHelpers');

const { isAuth } = require('../middlewares/authMiddleware');

router.get('/create', isAuth ,(req, res) => {
    res.render('animals/create')
});
router.post('/create', isAuth ,async(req, res) => {
    const animalData = {
        ...req.body,
        owner: req.user._id,
    }
    try{
        await animalManager.create(animalData);
        res.redirect('/animals/dashboard');
    } catch(err){
        res.render('animals/create', {error: getErrorMessage(err)});
    }
});
router.get('/dashboard', async(req, res) => {
    const animal = await animalManager.getAll(); 
    res.render('animals/dashboard', { animal })
});
router.get('/:animalId/details', async(req, res) => {
    const animalId = req.params.animalId;

    try{
        const animal = await animalManager.getOne(animalId);
        const isOwner = req.user?._id == animal.owner._id;

        res.render('animals/details', { animal, isOwner});
    }catch(err){
        res.render('animals/dashboard', {error: getErrorMessage(err)});
    }
});
router.get('/:animalId/delete', isAuth ,async(req, res) => {
    const animalId = req.params.animalId;
    try{
        await animalManager.delete(animalId);
        res.redirect('/animals/dashboard');

    }catch (err){
        res.render('animals/details', {error: 'Unsuccessful animal deletion'});
    }
});

router.get('/:animalId/edit', isAuth,async(req, res) => {
    const animal = await animalManager.getOne(req.params.animalId);

    res.render('animals/edit', { animal });
});

router.post('/:animalId/edit', isAuth,async(req, res) =>{
    const animalId = req.params.animalId;
    const animalData = req.body;

    try{
        await animalManager.edit(animalId, animalData);
        res.redirect(`/animals/${animalId}/details`);
    }catch(err){
        res.render('animals/edit', {error: getErrorMessage(err)});
    }
});

router.get('/:animalId/donate', async(req, res) => {
    const animalId = req.params.animalId;
    const userId = req.user._id;
    let flag = true;

    try{
       const donate = await animalManager.donate(animalId, userId);
       if(this.donate.includes(userId)){
        flag = false
       }
        res.render('animals/details', flag)
    }catch(err){
        res.render('animals/details', {error: 'Unsuccessful animal donation'});
    }
})

module.exports = router;