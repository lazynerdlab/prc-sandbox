const Transaction = require('../../models/transaction');
const User =  require('../../models/user');
const { transactionMail } = require('./mailer');




const changeBalance = async (req, res) =>{

    let mailSearch = req.body.senderEmail || req.body.receiverEmail

    const user = await User.findOne({email: req.body.senderEmail} )
   if(!user) { return res.status(401).json({message: 'Cannot find user'});}
    
   

   if(typeof req.body.value !== "number"){
    return res.status(401).json({message: "not a number"});
   }
    

    if (req.body.type === "increase"){

        try {
            
       
        const newBalance = user.balance += req.body.value
        
        const transact = await User.findOneAndUpdate({email: req.body.receiverEmail}, {balance: newBalance, lastRecieve: req.body.value} );
            

        const newtransaction =  new Transaction(
            {
                transactionUserEmail: req.body.receiverEmail,
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

            const newreceiveBalance = user.balance += req.body.value

            if(newBalance < 1){
                return res.status(401).json({message:"You have exceeded account limit"});
            }

            const transact = await User.findOneAndUpdate({email: req.body.senderEmail}, {balance: newBalance, lastSent: req.body.value} );
            
            const recievetransact = await User.findOneAndUpdate({email: req.body.receiverEmail}, {balance: newreceiveBalance, lastRecieve: req.body.value} );
    
            const newtransaction =  new Transaction(
                {
                    transactionUserEmail: req.body.senderEmail,
                    balance: newBalance,
                    Recieve: req.body.value,
                    Sent: req.body.value
                }
    
            )

            const newrecievetransact =  new Transaction(
                {
                    transactionUserEmail: req.body.receiverEmail,
                    balance: newreceiveBalance,
                    Recieve: null,
                    Sent: req.body.value
                }
    
            )

            const savetransaction = await newtransaction.save();
            transactionMail(req, res, newBalance);
            
           
           
            const saverecievetransaction = await newrecievetransact.save();
            res.status(201).json(savetransaction); 
           
    
    
        } catch (err) {
             res.status(500).json({message: err});   
        }

    }

}

module.exports = changeBalance;