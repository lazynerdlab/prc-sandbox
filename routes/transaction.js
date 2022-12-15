const router = require('express').Router();

const {
    createTransaction,
    transactionHistory,
    getUserBalance
} = require('../Controller');

const {
    permissions, authMiddleware
} = require('../middleware/');


router.put('/new', authMiddleware, permissions.userIsActivePermission, createTransaction)
    .post('/history/:quantity', authMiddleware, transactionHistory)
    .post('/balance', authMiddleware, getUserBalance);


module.exports = router;