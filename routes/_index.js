const router = require('express').Router();

const adminRoutes = require('./admin'),
    authRoutes = require('./auth'),
    verifyRoutes = require('./verify'),
    transactionRoutes = require('./transaction'),
    downloadInvoice = require('./invoice');


router.use('/', adminRoutes)
.use('/auth', authRoutes)
.use('/verify', verifyRoutes)
.use('/transaction', transactionRoutes)
.use('/invoice', downloadInvoice);


module.exports = router;