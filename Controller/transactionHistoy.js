const Transaction = require('../models/transaction');



const transactionHistory = async (req,res) =>{
    quanitiy = parseInt(req.param.quanitiy);

    const history = await Transaction.find({transactionUserEmail: req.body.email},quanitiy);
    console.log([history]);
    res.status(200).json([history]);
}

module.exports={transactionHistory}