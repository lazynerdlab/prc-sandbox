const router = require('express').Router();

const { 
    signup, login, logout,
    forgotPassword, resetPassword
} = require('../Controller');


router.post('/signup', signup)
    .post('/login', login)
    .post('/logout', logout)
    .put('/forgotpassword', forgotPassword)
    .put('/resetpassword', resetPassword)


module.exports = router;