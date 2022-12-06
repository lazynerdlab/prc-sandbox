
const {Register, Login} = require('./Controller/user');
const {forgotPassword, resetPassword} = require('./Controller/resetpassword');
const {verify} = require('./Controller/verify');
const {transaction} = require('./Controller/transaction');
const {Fund} = require('./Controller/fund');
const { transactionHistory } = require('./Controller/transactionHistoy');
const { balance } = require('./Controller/balance');
const { downloadTransactionInvoice } = require('./Controller/invoice/downloadTransaction')
const router = require('express').Router();


router.post('/register', Register);
router.post('/login', Login);
router.put('/forgotpassword', forgotPassword);
router.put('/resetpassword', resetPassword);
router.put('/verify', verify);
router.put('/transaction', transaction);
router.post('/history/:quantity', transactionHistory);
router.post('/fund', Fund);
router.post('/balance', balance);
router.get('/transaction/download', downloadTransactionInvoice)



module.exports = router;