// const {increaseBalance, decreaseBalance } = require('../../controller')
const { increaseBalance } = require("../component/increaseBalance");
const { decreaseBalance } = require("../component/decreaseBalance");
const createInvoice = require('../../services');

const transaction = (req, res) => {

  

    if(req.body.type === 'inflow' )
    {
        
        increaseBalance(req, res);

    }else if(req.body.type === 'outflow')
    {
        decreaseBalance(req, res);
        // createInvoice(invoiceSchema, 'invoice.pdf')
    }
}


module.exports = {transaction}