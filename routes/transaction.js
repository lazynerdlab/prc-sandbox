const router = require('express').Router();

const {transaction} = require('../Controller/transaction/transaction');
const { transactionHistory } = require('../Controller/transaction/transactionHistoy');
const { balance } = require('../Controller/transaction/balance');
const { userIsActivePermission } = require('../middleware/permissions');
const { verifyLoggedIn } = require('../middleware/verifyLoggedIn');

// router.put('/transact', transaction);
router.put('/transact',verifyLoggedIn, userIsActivePermission, transaction);
router.post('/history/:quantity',verifyLoggedIn, transactionHistory);
router.post('/balance', verifyLoggedIn, balance);


module.exports = router;