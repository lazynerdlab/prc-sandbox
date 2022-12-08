const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
    {
        transactionUserEmail: { type: String, required: true },
        recieverUserEmail: { type: String, default: "" },
        senderUserEmail: { type: String, default: "" },
        senderbalance: {type: Number},
        recieverbalance: {type: Number },
        Recieve: {type: Number, default: null},
        Sent: {type: Number, default: null},
        transactId: {type: Number, default: null},
        acccountCharge: {type: Number, default: 0},
        managmentCharge: {type: Number, default: 0},
        maintenanceCharge: {type: Number, default: 0}
        

    },
    {timestamps: true}
)

module.exports = mongoose.model('Transaction', transactionSchema);