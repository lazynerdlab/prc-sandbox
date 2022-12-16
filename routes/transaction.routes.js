const router = require('express').Router();

const {
    createTransaction,
    transactionHistory,
    getUserBalance
} = require('../Controller');

const {
    authMiddleware
} = require('../middleware');


router.put('/internal/transfer', authMiddleware, createTransaction)
    .post('/history/:quantity', authMiddleware, transactionHistory)
    .post('/balance', authMiddleware, getUserBalance);


module.exports = router;