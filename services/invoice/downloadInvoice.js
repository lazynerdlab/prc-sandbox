const path = require('path')

const downloadInvoice = (req, res) => {
    const transactionId = req.params.transactionid
    let filepath = path.join(
        `services/invoice/saveInvoice/invoice${transactionId}.pdf`
    );
    res.download(filepath)
}

module.exports = { downloadInvoice }