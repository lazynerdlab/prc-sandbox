const Flutterwave = require('flutterwave-node-v3');
const { flutterDeductor } = require('./flutterDeductor');

const bankTransfer = async (req, res) => {


const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);
const details = {
    account_bank: req.body.bankCode,
    account_number: req.body.accountNumber,
    amount: req.body.value,
    narration: req.body.narration,
    currency: "NGN",
    reference: generateTransactionReference(),
    callback_url: "https://webhook.site/b3e505b0-fe02-430e-a538-22bbbce8ce0d",
    debit_currency: "NGN"
};

const response = await flw.Transfer.initiate(details)

if(response.status === "success"){

const transfer = await flutterDeductor(req, response);

res.status(200).json(transfer);

        
}else{
    res.status(400).json(response);
}

}


module.exports = {bankTransfer}