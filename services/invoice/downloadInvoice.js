const path = require('path')

const downloadInvoice = (req, res) => {
    let filepath = path.join('transanctionInvoice.pdf');
    res.download(filepath)
}

module.exports = { downloadInvoice }