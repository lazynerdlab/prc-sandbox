const Transaction = require('../../models/transaction');
const User =  require('../../models/user');
const { transactionMail } = require('./mailer');
const digitGenerator = require('crypto-secure-random-digit');




const decreaseBalance = async (req, res) =>{

    const user = await User.findOne({email: req.body.senderEmail} )
   if(!user) { return res.status(401).json({message: 'Cannot find user'});}
    
   const receiveruser = await User.findOne({email: req.body.receiverEmail} )
   if(!receiveruser) { return res.status(401).json({message: 'no account with this email'});}
    
   

   if(typeof req.body.value !== "number"){
    return res.status(401).json({message: "not a number"});
   }
    

 if( req.body.type === "decrease" ){

        try {
            
            let randomDigits = 0;

            const userIdDigit = async () =>{
               randomDigits = digitGenerator.randomDigits(11).join("");
              const checkId = await Transaction.findOne({transactionId: randomDigits});
              if(checkId){
                userIdDigit();
                 }
                 return randomDigits;
              }
          
          
            userIdDigit();
       
            const newBalance = user.balance -= req.body.value

            const newreceiveBalance = receiveruser.balance += req.body.value

            if(newBalance < 1){
                return res.status(401).json({message:"You have exceeded account limit"});
            }

            const transact = await User.findOneAndUpdate({email: req.body.senderEmail}, {balance: newBalance} );
            
            const recievetransact = await User.findOneAndUpdate({email: req.body.receiverEmail}, {balance: newreceiveBalance} );
    
            const newtransaction =  new Transaction(
                {
                    transactionUserEmail: req.body.senderEmail,
                    balance: newBalance,
                    Recieve: null,
                    Sent: req.body.value,
                    recieverUserEmail: req.body.receiverEmail
                }
    
            )

            const newrecievetransact =  new Transaction(
                {
                    transactionUserEmail: req.body.receiverEmail,
                    balance: newreceiveBalance,
                    Recieve: null,
                    Sent: req.body.value,
                    senderUserEmail: req.body.senderEmail,
                    transactId: randomDigits
                }
    
            )

            const savetransaction = await newtransaction.save();
            transactionMail(req, res, newBalance);
            
           
           
            const saverecievetransaction = await newrecievetransact.save();
            res.status(201).json({savetransaction,saverecievetransaction}); 
           
    
    
        } catch (err) {
             res.status(500).json({message: err});   
        }

    }

}

module.exports = decreaseBalance;