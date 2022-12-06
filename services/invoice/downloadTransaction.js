const path = require('path')

const downloadTransactionInvoice = (req, res) => {
    let filepath = path.join('transanctionInvoice.pdf');
    res.download(filepath)
}

module.exports = {downloadTransactionInvoice}