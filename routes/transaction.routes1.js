const router = require('express').Router();

const { 
    getUserBalance, 
    createTransaction, 
    transactionHistory 
} = require('../Controller');

const { permissions } = require('../middleware')


router.put('/new', permissions.userIsActivePermission, createTransaction)
.post('/history/:quantity', transactionHistory)
.get('/balance', getUserBalance);


module.exports = router;