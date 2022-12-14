 
    const Flutterwave = require('flutterwave-node-v3');
    const flutterWave = require('../../models/flutterWave');
const flutterWebHook = require('../../models/flutterWebHook');
    const Transaction = require('../../models/transaction');
    const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);


const flutterCharges = async (payload) =>{

       
      const response = flw.Transaction.verify({ id: payload.data.id })
            
            if ( response.data.status === "successful" && response.data.amount === payload.data.amount && response.data.currency === expectedCurrency) {
                
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
            

            {
                "event": "charge.completed",
                "data": {
                  "id": 285959875,
                  "tx_ref": "Links-616626414629",
                  "flw_ref": "PeterEkene/FLW270177170",
                  "device_fingerprint": "a42937f4a73ce8bb8b8df14e63a2df31",
                  "amount": 100,
                  "currency": "NGN",
                  "charged_amount": 100,
                  "app_fee": 1.4,
                  "merchant_fee": 0,
                  "processor_response": "Approved by Financial Institution",
                  "auth_model": "PIN",
                  "ip": "197.210.64.96",
                  "narration": "CARD Transaction ",
                  "status": "successful",
                  "payment_type": "card",
                  "created_at": "2020-07-06T19:17:04.000Z",
                  "account_id": 17321,
                  "customer": {
                    "id": 215604089,
                    "name": "Yemi Desola",
                    "phone_number": null,
                    "email": "user@gmail.com",
                    "created_at": "2020-07-06T19:17:04.000Z"
                  },
                  "card": {
                    "first_6digits": "123456",
                    "last_4digits": "7889",
                    "issuer": "VERVE FIRST CITY MONUMENT BANK PLC",
                    "country": "NG",
                    "type": "VERVE",
                    "expiry": "02/23"
                  }
                }
              }


            }
            const newFlutterWebHook =  new flutterWebHook(
                {
                    event:response.event              
                    id: response.data.id
                    tx_ref: { type: String, required: true, unique: true},
                    flw_ref: { type: String, required: true, unique: true},
                    device_fingerprint: { type: String, required: true},
                    amount: { type: Number, required: true},
                    currency: { type: String, required: true},
                    charged_amount: { type: String, required: true},
                    app_fee: { type: String, required: true},
                    merchant_fee: { type: String, required: true},
                    processor_response: { type: String, required: true},
                    auth_model: { type: Number, required: true},
                    ip: { type: String, required: true},
                    narration: { type: String, required: true},
                    status: { type: String, required: true},
                    payment_type: { type: String, required: true},
                    created_at: { type: String, required: true},
                    account_id: { type: Number, required: true},
                    id: { type: String, required: true},
                    name: { type: String, required: true},
                    phone_number: { type: Number, required: true},
                    email: { type: String, required: true},
                    created_at: { type: String, required: true},
                    first_6digits: { type: Number, required: true},
                    last_4digits: { type: String, required: true},
                    issuer: { type: String, required: true},
                    country: { type: String, required: true},
                    type: { type: String, required: true},
                    expiry: { type: String, required: true}
            
                }
    
            )

            const savetransaction = await newFlutterWebHook.save();
          
               
             
                } else {
                    // Inform the customer their payment was unsuccessful
                }

           


}

module.exports = {flutterCharges};