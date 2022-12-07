const router = require('express').Router();

const adminRoutes = require('./admin'),
    authRoutes = require('./auth'),
    verifyRoutes = require('./verify'),
    transactionRoutes = require('./transaction'),
    downloadInvoice = require('./invoice'),
    flutter = require('./flutter');


router.use('/', adminRoutes)
.use('/auth', authRoutes)
.use('/verify', verifyRoutes)
.use('/transaction', transactionRoutes)
.use('/invoice', downloadInvoice)
.use('/flutter', flutter)


module.exports = router;