const router = require('express').Router();
const { fundWallet } = require('../controller');
const { accountDetails } = require('../Controller/flutter/accountDetails');
const { webHook } = require('../Controller/flutter/webHook');
const { authMiddleware } = require('../middleware/auth.middleware');


router.post('/fund', authMiddleware, fundWallet);
router.post('/webhook', webHook );
router.post('/accountdetails', accountDetails );



module.exports = router;