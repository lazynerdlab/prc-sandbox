const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
    {
        transactionUserEmail: { type: String, required: true },
        transactionUsername: { type: String, required: true },
        balance: {type: Number, default: 0},
        Recieve: {type: Number, default: null},
        Sent: {type: Number, default: null}

    },
    {timestamps: true}
)

module.exports = mongoose.model('Transaction', transactionSchema);