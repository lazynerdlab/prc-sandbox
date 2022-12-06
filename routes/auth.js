
const {Register, Login} = require('../Controller/user');
const {forgotPassword, resetPassword} = require('../Controller/resetpassword');
const { logout } = require('../Controller/logout');
const router = require('express').Router();


router.post('/register', Register);
router.post('/login', Login);
router.put('/forgotpassword', forgotPassword);
router.put('/resetpassword', resetPassword);
router.post('/logout', logout);


module.exports = router;