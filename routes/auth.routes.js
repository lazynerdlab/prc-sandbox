const router = require('express').Router();

const { signup, login, logout } = require('../controller');
const { forgotPassword, resetPassword } = require('../controller');


router.post('/signup', signup)
    .post('/login', login)
    .post('/logout', logout)
    .put('/forgotpassword', forgotPassword)
    .put('/resetpassword', resetPassword)


module.exports = router;