const router = require('express').Router();

const {fund} = require('../Controller/flutter/fund');

router.post('/fund', fund);



module.exports = router;