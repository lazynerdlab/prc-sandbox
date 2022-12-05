const Transaction = require('../../models/transaction');
const User =  require('../../models/user');
const { transactionMail } = require('./mailer');
const digitGenerator = require('crypto-secure-random-digit');
const jwt = require('jsonwebtoken');



const decreaseBalance = async (req, res) =>{
    
    const webToken = req.headers.authorization;
    const webTokenResult = webToken.split(' ');
    const tokenResult = webTokenResult[1];

    const info = jwt.verify(tokenResult, process.env.JWT_SEC);
    const senderEmail = info.email;

   
    if(senderEmail === req.body.receiverEmail){
        return res.status(401).json({message: 'cannot send send money to your self'});

    }

    const user = await User.findOne({email: senderEmail} )
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

            const transact = await User.findOneAndUpdate({email: senderEmail}, {balance: newBalance}, {$inc: {transactionCount: 1}} );
            

            if (user.transactionCount % 3 == 0){
                mtCharge = 10;
            }
            
            const recievetransact = await User.findOneAndUpdate({email: req.body.receiverEmail}, {balance: newreceiveBalance} );
    
            const newtransaction =  new Transaction(
                {
                    transactionUserEmail: senderEmail,
                    senderBalance: newBalance,
                    senderBalance: newreceiveBalance,
                    senderUserEmail: senderEmail,
                    Recieve: req.body.value,
                    Sent: req.body.value,
                    recieverUserEmail: req.body.receiverEmail,
                    transactId: randomDigits,
                    acccountCharge: 5,
                    managmentCharge: 5,
                    maintenanceCharge: mtCharge,
            
                }
    
            )

            const savetransaction = await newtransaction.save();
            // transactionMail(req, res, newBalance);
            res.status(201).json(savetransaction); 
           
    
    
        } catch (err) {
             res.status(500).json({message: err});   
        }

    }

}

module.exports = decreaseBalance;