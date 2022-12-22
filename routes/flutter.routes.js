const router = require('express').Router();

const { fundWallet, webHook, accountDetails } = require('../controller');
const { bvnDetails } = require('../Controller/flutter/bvnDetails');
const { authMiddleware } = require('../middleware');


router.post('/fund', authMiddleware, fundWallet);
router.post('/webhook', webHook );
router.post('/accountdetails', accountDetails );
router.post('/bvndetails', bvnDetails );


module.exports = router;