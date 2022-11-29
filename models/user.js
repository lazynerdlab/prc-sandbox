const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true},
        userId: { type: Number, required: true, unique: true},
        email: { type: String, required:true, unique:true},
        password: { type: String, required:true, unique:true},
        isverified: { type: Boolean, default: false},
        balance: {type: Number, default: 500},
        lastSent: {type: Number, default: 0},
        lastRecieve: {type: Number, default: 0},
        transactionCount: {type: Number, default: 0}
    },
    {timestamps: true}
)

module.exports = mongoose.model('user', UserSchema);

