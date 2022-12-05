const decreaseBalance = require("./component/decreaseBalance");
const increaseBalance = require("./component/increaseBalance");
const createInvoice = require('./invoice/createInvoice'),
    invoiceSchema = require('./invoice/invoiceSchema');


const transaction = (req, res) => {

    if(req.body.type === 'increase' )
    {
        increaseBalance(req, res);

    }else if(req.body.type === 'decrease')
    {

        decreaseBalance(req, res);
        // createInvoice(invoiceSchema, 'invoice.pdf')


    }
}


module.exports = {transaction}