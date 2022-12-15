// const Transaction = require('../../models');


const transactionHistory = async (req,res) =>{
    
    const skipMultiplier = req.params.quantity - 1;
    const skipContent = skipMultiplier * 10;
    quantitySend = 10;
        
    const history = await Transaction.find({transactionUserEmail: req.body.email}).skip(skipContent).limit(quantitySend);
    
    const totalHistoryNumber = await Transaction.find({transactionUserEmail: req.body.email}).countDocuments();

    
    res.status(200).json({history, totalHistoryNumber});
}

module.exports = { transactionHistory }