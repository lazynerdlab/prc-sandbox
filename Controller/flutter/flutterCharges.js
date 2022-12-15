 
    const Flutterwave = require('flutterwave-node-v3');
    const flutterWebHook = require('../../models/flutterWebHook');
    const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);


const flutterCharges = async (payload) =>{

       
      const response = flw.Transaction.verify({ id: payload.data.id })
            
            if ( response.data.status === "successful" && response.data.amount === payload.data.amount && response.data.currency === payload.data.currency) {

         
            const newFlutterWebHook =  new flutterWebHook(
                {
                    event:response.event,              
                    id: response.data.id,
                    tx_ref: response.data.tx_ref,
                    flw_ref: response.data.flw_ref,
                    device_fingerprint: response.data.device_fingerprint,
                    amount: response.data.amount,
                    currency: response.data.currency,
                    charged_amount: response.data.charged_amount,
                    app_fee: response.data.app_fee,
                    merchant_fee: response.data.merchant_fee,
                    processor_response: response.data.processor_response,
                    auth_model: response.data.auth_model,
                    ip: response.data.ip,
                    narration: response.data.narration,
                    status: response.data.status,
                    payment_type: response.data.payment_type,
                    created_at: response.data.created_at,
                    account_id: response.data.account_id,
                    id: response.data.id,
                    name: response.data.name,
                    phone_number: response.data.phone_number,
                    email: response.data.email,
                    created_at: response.data.created_at,
                    first_6digits: response.data.first_6digits,
                    last_4digits: response.data.last_4digits,
                    issuer: response.data.issuer,
                    country: response.data.country,
                    type: response.data.type,
                    expiry: response.data.expiry
            
                }
    
            )

            const savetransaction = await newFlutterWebHook.save();
                res.status(200).json(savetransaction);
               
             
                } else {
                    return res.status(400).json('Payment unsuccessful')
                }

           


}

module.exports = {flutterCharges};