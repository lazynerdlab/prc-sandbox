

const {verify} = require('../Controller/verify');

const router = require('express').Router();


router.put('/verify', verify);




module.exports = router;