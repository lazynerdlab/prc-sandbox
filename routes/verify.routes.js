const router = require('express').Router();

const { form, verify } = require('../controller');


router.put('/verify', verify);
router.put('/form', form);


module.exports = router;