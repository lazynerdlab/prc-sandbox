const mongoose = require('mongoose');

const sentSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true, unique: true},
        senderUsername: { type: String, required: true },
        balance: {type: Number, default: 0},
        lastSent: {type: Number, default: 0}
    },
    {timestamps: true}
)

module.exports = mongoose.model('sent', sentSchema);

