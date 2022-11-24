const Transaction = require('../../models/transaction');
const User =  require('../../models/user');
const { transactionMail } = require('./mailer');




const increaseBalance = async (req, res) =>{


   const user = await User.findOne({email: req.body.email} )
   if(!user) { return res.status(401).json({message: 'no account with this email'});}

   if(typeof req.body.value !== "number"){
    return res.status(401).json({message: "not a number"});
   }
    

    if (req.body.type === "increase"){

        try {
            
       
        const newBalance = user.balance += req.body.value
        
        const transact = await User.findOneAndUpdate({email: req.body.email}, {balance: newBalance, lastRecieve: req.body.value} );
            

        const newtransaction =  new Transaction(
            {
                transactionUserEmail: req.body.email,
                balance: newBalance,
                Recieve: req.body.value,
                Sent: null
            }

        )

        const savetransaction = await newtransaction.save();
        transactionMail(req, res, newBalance);
        res.status(201).json(savetransaction);


    } catch (err) {
         res.status(500).json({message: err});   
    }


    }

}

module.exports = increaseBalance;