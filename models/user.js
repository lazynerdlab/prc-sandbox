const mongoose = require('mongoose');
const CryptoJS = require('crypto-js');


const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true},
        firstName: { type: String},
        lastName: { type: String},
        middleName: { type: String},
        adress: { type: String},
        userId: { type: Number,  unique: true},
        phoneNo: { type: Number, default: 0},
        BVN: { type: Number, default: 01010101010},
        email: { type: String, required:true, unique:true},
        password: { type: String, required:true},
        isverified: { type: Boolean, default: false},
        balance: {type: Number, default: 500},
        DOB: {type: Date},
        transactionCount: {type: Number, default: 0},
        isAdmin: { type: Boolean, default: false},
        isSuperAdmin: { type: Boolean, default: false},
        isActive: { type: Boolean, default: true},
        isLoggeIn: { type: Boolean, default: false},
        isApproved: { type: Boolean, default: false}
    },
    {timestamps: true}
)

UserSchema.statics.getUserById = function(userId, selectFields) {
    return new Promise(( resolve, reject) => {
        console.log({userId})
        this.findOne({userId},(err, docs) => {
            if(err) {
                console.log({err})
                return reject(err)
            }
            resolve(docs)
        })
        .lean()
        .select(selectFields)
    })
}

UserSchema.pre('save', async function (next) {
    let user = this;
    user.password = CryptoJS.AES.encrypt(user.password, process.env.PASSSEC).toString()
    next()
})

UserSchema.methods.comparePassword = function (inputPassword) {
    const decryptPassword = CryptoJS.AES.decrypt(this.password, process.env.PASSSEC)
    const plainPassword = decryptPassword.toString(CryptoJS.enc.Utf8);

    return plainPassword === inputPassword
}


module.exports = mongoose.model('User', UserSchema);