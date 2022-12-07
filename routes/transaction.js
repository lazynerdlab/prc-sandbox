const router = require('express').Router();

const {transaction} = require('../Controller/transaction');
const {Fund} = require('../Controller/fund');
const { transactionHistory } = require('../Controller/transactionHistoy');
const { balance } = require('../Controller/balance');

router.put('/transaction', transaction);
router.post('/history/:quantity', transactionHistory);
router.post('/fund', Fund);
router.post('/balance', balance);


module.exports = router;