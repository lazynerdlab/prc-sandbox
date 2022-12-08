

const { Form } = require('../Controller/user/form');
const {verify} = require('../Controller/verify');
const {test} = require('../Controller/test');

const router = require('express').Router();


router.put('/verify', verify);
router.put('/form', Form);
router.post('/test', test);






module.exports = router;