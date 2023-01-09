const router = require('express').Router()

// const  downloadInvoice  = require('../services/invoice/downloadInvoice')
const { downloadInvoice } = require('../services')

router.get('/:transactionid/download', downloadInvoice)


module.exports = router;