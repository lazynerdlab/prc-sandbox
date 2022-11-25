const Transaction = require('../models/transaction');
const dotenv = require('dotenv');



const transactionHistory = async (req,res) =>{
    quanitiy = parseInt(req.param.quantity);

    const history = await Transaction.find({transactionUserEmail: req.body.email}).limit(req.param.quantity);
    
    res.status(200).json(history);
}

module.exports={transactionHistory}