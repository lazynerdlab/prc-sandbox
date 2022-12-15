const router = require('express').Router();

const { 
    getUserBalance, 
    transaction, 
    transactionHistory 
} = require('../controller');

const { permissions } = require('../middleware')


router.put('/', permissions.userIsActivePermission, transaction)
.post('/history/:quantity', transactionHistory)
.get('/balance', getUserBalance);


module.exports = router;