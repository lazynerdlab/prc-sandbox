const router = require('express').Router();

const { form, verify } = require('../controller');


router.put('/verify', verify);
router.post('/setupkyc', form);


module.exports = router;