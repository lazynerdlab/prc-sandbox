
const {Register, Login, Update} = require('./controller');
const router = require('express').Router();


router.post('/register', Register);
router.get('/login', Login);
router.put('/passwordreset', Update);




module.exports = router;