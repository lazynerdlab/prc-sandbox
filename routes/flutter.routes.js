const router = require('express').Router();

const { fundWallet, webHook, accountDetails } = require('../Controller');
const { bankTransfer } = require('../Controller/flutter/banktransfer');
const { bvnDetails } = require('../Controller/flutter/bvnDetails');
const { authMiddleware } = require('../middleware');


router.post('/fund', authMiddleware, fundWallet);
router.post('/webhook', webHook );
router.post('/accountdetails', accountDetails );
router.post('/bvndetails', bvnDetails );
router.post('/banktransfer', bankTransfer );


module.exports = router;