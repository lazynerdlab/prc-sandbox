const router = require('express').Router();

const {transaction} = require('../Controller/transaction/transaction');
const { transactionHistory } = require('../Controller/transaction/transactionHistoy');
const { balance } = require('../Controller/transaction/balance');

router.put('/transact', transaction);
router.post('/history/:quantity', transactionHistory);
router.post('/balance', balance);


module.exports = router;