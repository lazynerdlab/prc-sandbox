const router = require('express').Router();

const { fundWallet, webHook, accountDetails } = require('../controller');
const { authMiddleware } = require('../middleware');


router.post('/fund', authMiddleware, fundWallet);
router.post('/webhook', webHook );
router.post('/accountdetails', accountDetails );


module.exports = router;