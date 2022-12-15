const Flutterwave = require('flutterwave-node-v3');
const increaseBalance = require('../component/increaseBalance');




const fund = (req,res) =>{
    
    const transactionRef = req.body.trx_ref;
    const amount = req.body.value;
    const mail = req.body.email;
    const transtionId = req.body.id

    console.log(transactionRef, amount, mail, transtionId);
  

    const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY  );



const verify = async () => {

    try {
        const payload = {"id": transtionId}
        const response = await flw.Transaction.verify(payload)
        console.log(response);
        const verifyStatus = response.status === 'success';
        const veryEmail = mail === response.data.customer.email;
        const verifyTransactionRef = transactionRef === response.data.tx_ref;
        const verifyAmount = amount === response.data.amount;


        if(verifyStatus && veryEmail && verifyTransactionRef && verifyAmount){
            increaseBalance(response, res);
        }else{
            res.status(407).json('account not funded')
        
        }
    } catch (error) {
        return res.status(500).json(`${error}`)
    }

}


verify();

}



module.exports = {fund};