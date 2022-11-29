const Transaction = require('../models/transaction');
const dotenv = require('dotenv');



const transactionHistory = async (req,res) =>{
    
    
    const skipContent = req.params.quantity * 10
    quantitySend = 10;
        
    const history = await Transaction.find({transactionUserEmail: req.body.email}).skip(skipContent).limit(quantitySend);
    
    res.status(200).json(history);
}

module.exports={transactionHistory}