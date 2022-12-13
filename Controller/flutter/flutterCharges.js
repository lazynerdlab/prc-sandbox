 
    const Flutterwave = require('flutterwave-node-v3');
    const Transaction = require('../../models/transaction');
    const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);


const flutterCharges = async (payload) =>{




    
    if(payload.data.status === "successful"){

       
        flw.Transaction.verify({ id: payload.data.id })
            .then((response) => {
                if (   response.data.status === "successful" && response.data.amount === payload.data.amount && response.data.currency === expectedCurrency) {
                   
                const transactionId =response.data.id,
                tx_ref = response.data.tx_ref,
                chargeAmount =response.data.amount,
                currency = response.data.currency,
                narration= response.data.narration,
                paymentType=response.data.payment_type,
                createdAt=response.data.created_at,
                customerId=response.data.customer.id,
                customerName=response.data.customer.name,
                customerEmail=response.data.customer.email,
                customerPhoneNumber=response.data.customer.phone_number,
                cardFirst6Digit=response.data.card.first_6digits,
                cardLast4Digit=response.data.card.last_4digits,
                cardIssue=response.data.card.issuer,
                cardtype=response.data.card.type
                


                const newtransaction =  new Transaction(
                    {
                        transactionUserEmail: customerEmail,
                        senderUserEmail: customerEmail,
                        Sent: chargeAmount,
                        transactId: transactionId,
                        acccountCharge: 20,
                        managmentCharge: chargeAmount,
                        maintenanceCharge: mtCharge,
                
                    }
        
                )
    
                const savetransaction = await newtransaction.save();
                // transactionMail(req, res, newBalance);
                res.status(201).json(savetransaction); 


                } else {
                    // Inform the customer their payment was unsuccessful
                }
            })
            .catch(console.log);
           
        }else if(payload.data.status === "failed"){

    }

}

module.exports = {flutterCharges};