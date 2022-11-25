const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
    {
        transactionUserEmail: { type: String, required: true },
        recieverUserEmail: { type: String, default: "" },
        senderUserEmail: { type: String, default: "" },
        balance: {type: Number, default: 0},
        Recieve: {type: Number, default: null},
        Sent: {type: Number, default: null},
        transactId: {type: Number, default: null}

    },
    {timestamps: true}
)

module.exports = mongoose.model('Transaction', transactionSchema);