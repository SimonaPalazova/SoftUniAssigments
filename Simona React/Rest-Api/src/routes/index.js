const router = require('express').Router();

const users = require('./users');
const cocktails = require('./cocktails');
const test = require('./test');
const create = require('./create')


router.use('/users', users);
router.use('/create', create)
router.use('/cocktails', cocktails);
router.use('/test', test);


module.exports = router;
