const { User, Transaction } = require("../../models")
const { getWebToken } = require("../../utils")



const flutterDeductor = async (req, response) =>{

    const userinfo = await getWebToken(req)

    const userId = userinfo.id
    const flutterAmount = response.data.amount
    const flutterCharges = response.data.fee

    const totalCharges = flutterAmount + flutterCharges
    
    const findUserBalance = await User.findOne({userId: userId})

    const newUserBalance = findUserBalance.balance - totalCharges;

    const updateUserBalance = await User.findOneAndUpdate({userId: userId}, {balance: newUserBalance})

    const newtransaction = new Transaction({

        transactionUserEmail: userinfo.email,
        senderbalance: updateUserBalance.balance,
        Sent: totalCharges,
        transactId: response.data.id,
        bank_name: response.data.bank_name,
        account_number: response.data.account_number,
        full_name: response.data.full_name,
        amount: response.data.amount,
        fee: response.data.fee,
        reference: response.data.reference

    })

    const transaction = await newtransaction.save()

    return transaction

}


module.exports = {flutterDeductor}