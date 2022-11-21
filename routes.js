
const {Register, Login} = require('./Controller/user');
const {forgotPassword, resetPassword} = require('./Controller/resetpassword');
const {verify} = require('./Controller/verify');
const {transaction} = require('./Controller/transaction');
const router = require('express').Router();


router.post('/register', Register);
router.post('/login', Login);
router.put('/forgotpassword', forgotPassword);
router.put('/resetpassword', resetPassword);
router.put('/verify', verify);
router.put('/transaction', transaction);




module.exports = router;