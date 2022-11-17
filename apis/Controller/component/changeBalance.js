const Transaction = require('../../models/transaction');
const User =  require('../../models/user');
const { transactionMail } = require('./mailer');




const changeBalance = async (req, res) =>{

    const user = await User.findOne({email: req.body.email})
   if(!user) { return res.status(401).json({message: 'Cannot find user'});}

   
    

    if (req.body.type === "increase"){

        try {
            
       
        const newBalance = user.balance += req.body.value
        
        const transact = await User.findOneAndUpdate({email: req.body.email}, {balance: newBalance} );


        const newtransaction =  new Transaction(
            {
                transactionUserEmail: req.body.email,
                transactionUsername: req.body.username,
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


    }else if( req.body.type === "decrease" ){

        try {
            
       
            const newBalance = user.balance -= req.body.value
            
            const transact = await User.findOneAndUpdate({email: req.body.email}, {balance: newBalance} );
    
    
            const newtransaction =  new Transaction(
                {
                    transactionUserEmail: req.body.email,
                    transactionUsername: req.body.username,
                    balance: newBalance,
                    Recieve: null,
                    Sent: req.body.value
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

module.exports = changeBalance;