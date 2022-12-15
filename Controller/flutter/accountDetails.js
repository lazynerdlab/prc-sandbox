const Flutterwave = require('flutterwave-node-v3');
const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);

const accountDetails = async (req, res) => {
    const payload = {
        "account_number": req.body.accountNumber,
        "account_bank": req.body.bankCode
    };

    try {
        const response = await flw.Misc.verify_Account(payload);

        if (response.status === "success") {
            accountNumber = response.data.account_number;
            accountName = response.data.account_name;

            res.status(200).json(accountNumber, accountName)
        } else {
            res.status(400).json('Cannot resolve account details')
        }

    } catch (error) {
        res.status(500).json({
            message: `${error}`
        })
    }
}


module.exports = { accountDetails };