
const {Register, Login, Update, Verify} = require('./controller');
const router = require('express').Router();


router.post('/register', Register);
router.get('/login', Login);
router.put('/passwordreset', Update);
router.put('/verify', Verify);




module.exports = router;