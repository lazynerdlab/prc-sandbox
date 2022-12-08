const router = require('express').Router();

const {transaction} = require('../Controller/transaction/transaction');
const { transactionHistory } = require('../Controller/transaction/transactionHistoy');
const { balance } = require('../Controller/transaction/balance');
const { userIsActivePermission } = require('../middleware/permissions')

// router.put('/transact', transaction);
router.put('/transact',userIsActivePermission, transaction);
router.post('/history/:quantity', transactionHistory);
router.post('/balance', balance);


module.exports = router;