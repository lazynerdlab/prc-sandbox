const jwt = require('jsonwebtoken');
const decreaseBalance = require("../component/decreaseBalance");
const increaseBalance = require("../component/increaseBalance");
const createInvoice = require('../../services/invoice/createInvoice'),
    invoiceSchema = require('../../services/invoice/invoiceSchema');


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