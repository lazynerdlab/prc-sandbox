const mongoose = require('mongoose');

const flutterWebHookSchema = new mongoose.Schema({
    event: { type: String, required: true },
    id: { type: Number, required: true },
    tx_ref: { type: String, required: true, unique: true },
    flw_ref: { type: String, required: true, unique: true },
    device_fingerprint: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    charged_amount: { type: String, required: true },
    app_fee: { type: String, required: true },
    merchant_fee: { type: String, required: true },
    processor_response: { type: String, required: true },
    auth_model: { type: Number, required: true },
    ip: { type: String, required: true },
    narration: { type: String, required: true },
    status: { type: String, required: true },
    payment_type: { type: String, required: true },
    created_at: { type: String, required: true },
    account_id: { type: Number, required: true },
    id: { type: String, required: true },
    name: { type: String, required: true },
    phone_number: { type: Number, required: true },
    email: { type: String, required: true },
    created_at: { type: String, required: true },
    first_6digits: { type: Number, required: true },
    last_4digits: { type: String, required: true },
    issuer: { type: String, required: true },
    country: { type: String, required: true },
    type: { type: String, required: true },
    expiry: { type: String, required: true }
}, {
    timestamps: true
})


module.exports = mongoose.model('flutterWebHook', flutterWebHookSchema);
