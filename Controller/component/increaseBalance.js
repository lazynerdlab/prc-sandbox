const Transaction = require('../../models/transaction');
const User =  require('../../models/user');
const dotenv = require('dotenv');




const increaseBalance = async (response, res) =>{

    

   const user = await User.findOne({email: response.data.customer.email} )
   if(!user) { return res.status(401).json({message: 'no account with this email'});}


        try {
            
       
        const newBalance = user.balance += response.data.amount
        
        const transact = await User.findOneAndUpdate({email: response.data.customer.email}, {balance: newBalance, lastRecieve: response.data.value} );
            

        const newtransaction =  new Transaction(
            {
                transactionUserEmail: response.data.customer.email,
                balance: newBalance,
                Recieve: response.data.amount,
                Sent: null
            }

        )

        const savetransaction = await newtransaction.save();
        res.status(201).json(balance)


    } catch (err) {
         res.status(500).json({message: err});   
    }


    }



module.exports = increaseBalance;