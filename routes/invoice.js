const router = require('express').Router()

const { downloadInvoice } = require('../services/invoice/downloadInvoice')

router.get('/download', downloadInvoice)


module.exports = router;