

const { Form } = require('../Controller/user/form');
const {verify} = require('../Controller/verify');

const router = require('express').Router();


router.put('/verify', verify);
router.put('/form', Form);





module.exports = router;