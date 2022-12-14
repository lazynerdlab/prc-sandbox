const router = require('express').Router();

const {fund} = require('../Controller/flutter/fund');
const { webHook } = require('../Controller/flutter/webHook');
const { verifyLoggedIn } = require('../middleware/verifyLoggedIn');

router.post('/fund',verifyLoggedIn, fund);
router.post('/webhook', webHook );



module.exports = router;