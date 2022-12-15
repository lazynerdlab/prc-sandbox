const { decreaseBalance } = require('./component/decreaseBalance'),
    { increaseBalance } = require('./component/increaseBalance');

 const { getUserBalance } = require('./transaction/balance'),
    { transaction } = require('./transaction/transaction'),
    { transactionHistory } = require('./transaction/transactionHistory');

const { fundWallet } = require('./flutter/fundWallet');

const {signup, login, logout } = require('./user/auth'),
    { form } = require('./user/form'),
    { forgotPassword, resetPassword } = require('./user/resetpassword')


module.exports = {
    decreaseBalance,
    increaseBalance,
    fundWallet,
    getUserBalance,
    transaction,
    transactionHistory,
    signup,
    login,
    logout,
    form,
    forgotPassword,
    resetPassword,
}