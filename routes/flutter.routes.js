const router = require('express').Router();

const { fundWallet } = require('../controller');

router.post('/fund', fundWallet);


module.exports = router;