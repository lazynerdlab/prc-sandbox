const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true},
        firstName: { type: String},
        lastName: { type: String},
        middleName: { type: String},
        userId: { type: Number, required: true, unique: true},
        phoneNo: { type: Number, unique: true},
        BVN: { type: Number},
        email: { type: String, required:true, unique:true},
        password: { type: String, required:true, unique:true},
        isverified: { type: Boolean, default: false},
        balance: {type: Number, default: 500},
        DOB: {type: Date},
        BVN: {type: String},
        transactionCount: {type: Number, default: 0},
        isAdmin: { type: Boolean, default: false},
        isSuperAdmin: { type: Boolean, default: false},
        isActive: { type: Boolean, default: true},
        isLoggeIn: { type: Boolean, default: false},
        isApproved: { type: Boolean, default: false}
    },
    {timestamps: true}
)

module.exports = mongoose.model('User', UserSchema);

