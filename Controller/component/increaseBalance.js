const digitGenerator = require('crypto-secure-random-digit');

const Transaction = require('../../models'),
    User =  require('../../models');

const increaseBalance = async (response, res) =>{

   const user = await User.findOne({email: response.data.customer.email} )
   if (!user) { return res.status(401).json({message: 'no account with this email'});}

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
       
        const newBalance = user.balance += response.data.amount
        
        const transact = await User.findOneAndUpdate(
            {email: response.data.customer.email}, 
            {balance: newBalance, lastRecieve: response.data.value}, 
            {$inc: {transactionCount: 1}} 
        );
            
        if (user.transactionCount % 3 == 0){
            mtCharge = 10;
        }

        const newtransaction =  new Transaction(
            {
                transactionUserEmail: response.data.customer.email,
                balance: newBalance,
                Recieve: response.data.amount,
                Sent: null,
                transactionId: randomDigits,
                senderUserEmail: 'Flutter Wave Payment',
                acccountCharge: 5,
                managmentCharge: 5,
                maintenanceCharge: mtCharge
            }
        )

        const savetransaction = await newtransaction.save();
        res.status(201).json(balance)
    }   catch (err) {
            res.status(500).json({message: err});   
    }
}


module.exports = { increaseBalance };