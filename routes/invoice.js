const router = require('express').Router()

const { downloadInvoice } = require('../services/invoice/downloadInvoice')

router.get('/:transactionid/download', downloadInvoice)


module.exports = router;