const { User, Transaction } = require("../../models")
const { getWebToken, transferIdDigit } = require("../../utils")



const vtudeductor = async (req, data) =>{

    const userinfo = await getWebToken(req)
    const transactId = await transferIdDigit()

    const userId = userinfo.id
    const vutamount = data.data.amount

    
    const findUserBalance = await User.findOne({userId: userId})
    const newUserBalance = findUserBalance.balance - vutamount;

    const updateUserBalance = await User.findOneAndUpdate({userId: userId}, {balance: newUserBalance})

    const newtransaction = new Transaction({

        transactionUserEmail: userinfo.email,
        senderbalance: updateUserBalance.balance,
        Sent: vutamount,
        transactId: data.data.order_id,
        vtu_credit_phone: data.data.phone
    })

    const transaction = await newtransaction.save()

    return transaction

}


module.exports = {vtudeductor}