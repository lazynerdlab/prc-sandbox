

const { form } = require('../controller');
const {verify} = require('../controller/verify');


const router = require('express').Router();


router.put('/verify', verify);
router.put('/form', form);







module.exports = router;