
const {Register, Login} = require('./Controller/user');
const {forgotPassword, resetPassword} = require('./Controller/resetpassword');
const {Verify} = require('./Controller/verify');
const router = require('express').Router();


router.post('/register', Register);
router.get('/login', Login);
router.put('/forgotpassword', forgotPassword);
router.put('/resetpassword', resetPassword);
router.put('/verify', Verify);




module.exports = router;