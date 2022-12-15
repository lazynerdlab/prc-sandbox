const Transaction = require('../../models');
const User =  require('../../models');
const { transactionMail } = require('../../services/emailServices/email.service');
const createInvoice = require('../../services');
const { transferIdDigit } = require('../../utils');
const { getWebToken } = require('../../utils');




const decreaseBalance = async (req, res) =>{
    
    const verifyJWT = await getWebToken(req)

    const senderEmail = verifyJWT.email

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


            const newDigit = await transferIdDigit()
       
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

            const savetransaction = await newtransaction.save();
            // transactionMail(req, res, newBalance);
            res.status(201).json(savetransaction); 
            

            const invoiceSchema = {
                senderDetails: {
                    senderEmail: savetransaction.transactionUserEmail
                },
                receiverDetails: {
                    receiverEmail: savetransaction.recieverUserEmail
                },
                transactionDetails: {
                    amountSent: savetransaction.Sent,
                    accountCharge: savetransaction.acccountCharge,
                    transactId: savetransaction.transactId,

                }
            }
            createInvoice(invoiceSchema, 'transanctionInvoice.pdf')

            transactionMail(req, res, newBalance);
            
           
           
            // const saverecievetransaction = await newrecievetransact.save();
            // res.status(201).json({savetransaction,saverecievetransaction}); 
           
        }

module.exports = { decreaseBalance };