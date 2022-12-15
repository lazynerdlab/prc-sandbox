const router = require('express').Router();

const {signup, login, logout} = require('../controller');
const {forgotPassword, resetPassword} = require('../controller');



router.post('/signup', signup),
router.post('/login', login),
router.post('/logout', logout),
router.put('/forgotpassword', forgotPassword),
router.put('/resetpassword', resetPassword);


module.exports = router;