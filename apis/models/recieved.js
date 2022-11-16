const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true, unique: true},
        balance: {type: Number, default: 0},
        lastRecieve: {type: Number, default: 0}
    },
    {timestamps: true}
)

module.exports = mongoose.model('user', UserSchema);