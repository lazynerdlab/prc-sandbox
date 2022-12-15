const router = require('express').Router();

const { fundWallet, webHook, accountDetails } = require('../controller');

router.post('/fund', fundWallet)
.post('/webhook', webHook )
.post('/accountdetails', accountDetails );

module.exports = router;