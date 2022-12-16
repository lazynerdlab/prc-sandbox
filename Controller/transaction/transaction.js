// const {increaseBalance, decreaseBalance } = require('../../controller')
const { increaseBalance } = require("../component/increaseBalance");
const { decreaseBalance } = require("../component/decreaseBalance");
const createInvoice = require('../../services');

const createTransaction = (req, res) => {
    if (req.body.type === 'inflow') {
        
        increaseBalance(req, res);

    } else if (req.body.type === 'outflow') {

        try {
            //console.log(req.body)
            decreaseBalance(req, res);
            // createInvoice(invoiceSchema, 'invoice.pdf')
        } catch (error) {
            res.status(500).json({message: `${error}`})   
        }

    }
}


module.exports = { createTransaction }