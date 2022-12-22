const {Transaction, User} = require('../../models');
const { transactionSuccessEmail, createInvoice } = require('../../services');
const { transferIdDigit, getWebToken } = require('../../utils');


const decreaseBalance = async (req, res) => {
  
    console.log(req.body.receiverEmail)
    /* Getting sender email from header token*/
    const verifyJWT = await getWebToken(req)
    const senderEmail = verifyJWT.email
    const  userId = verify.id
   // console.log(senderEmail)

    /* Check if user is sending to himself*/
    if (senderEmail === req.body.receiverEmail){
        return res.status(401).json({message: 'Cannot send money to your self'});

    }

    /* Checking for sender info from the DB through email*/
    const user = await User.findOne({userId: userId} )
    if (!user) { return res.status(401).json({message: 'Cannot find user'});}

     /* Checking for receiver info from the DB through email*/
    const receiveruser = await User.findOne({email: req.body.receiverEmail} )
    if (!receiveruser) { return res.status(401).json({message: 'no account with this email'});}
    
    /* Check if the amount send is a number*/
   if (typeof req.body.value !== "number") {
        return res.status(401).json({message: "not a number"});
   }      

   /* Generating userId through random number*/
    const newDigit = await transferIdDigit()

    /*adjusting sender and receiver balance*/ 
    const newBalance = user.balance -= req.body.value
    const newreceiveBalance = receiveruser.balance += req.body.value


   /* Check if sender has enough money to send*/
    if (newBalance < 1){
        return res.status(401).json({message:"You have exceeded account limit"});
    }
    
    /*updating the sender info with new balance and transaction count*/
   
     User.findOneAndUpdate(    {userId: userId}, {balance: newBalance}, {$inc: {transactionCount: 1}} );

 
    /*logic for maintainance charge after two transaction*/
    if (user.transactionCount % 3 == 0){
        mtCharge = 10;
    }
    
     /*updating the receiver info with new balance and transaction count*/
    User.findOneAndUpdate(
        {email: req.body.receiverEmail}, {balance: newreceiveBalance} 
    );

    /*Creating new transtion info*/
    const newtransaction =  new Transaction(
        {
            transactionUserEmail: senderEmail,
            senderbalance: newBalance,
            recieverbalance: newreceiveBalance,
            senderUserEmail: senderEmail,
            Recieve: req.body.value,
            Sent: req.body.value,
            recieverUserEmail: req.body.receiverEmail,
            transactId: newDigit,
            acccountCharge: 5,
            managmentCharge: 5,
            maintenanceCharge: mtCharge,
        }
    )

    /*saving the new transaction info*/
    const savetransaction = await newtransaction.save();
    res.status(201).json(savetransaction); 

    // const invoiceSchema = {
    //     senderDetails: {
    //         senderEmail: savetransaction.transactionUserEmail
    //     },
    //     receiverDetails: {
    //         receiverEmail: savetransaction.recieverUserEmail
    //     },
    //     transactionDetails: {
    //         amountSent: savetransaction.Sent,
    //         accountCharge: savetransaction.acccountCharge,
    //         transactId: savetransaction.transactId,

    //     }
    // }

    // createInvoice(invoiceSchema, 'transanctionInvoice.pdf')
    // transactionSuccessEmail(req, res, newBalance);
}


module.exports = { decreaseBalance };