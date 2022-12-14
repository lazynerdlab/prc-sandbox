const mongoose = require('mongoose');

const flutterWaveSchema = new mongoose.Schema(
    {
            BVNFirstName: { type: String},
            BVNLastName: { type: String},
            BVNMiddleName: { type: String},
            BVNBVN: { type: Number},
            BVNGender: { type: String},
            BVNNationality: { type: String},
            BVNNumber: { type: String},
            BVNMaritalStatus: { type: String},
            BVNStateOfResidence: { type: String},           
            BVNLGAOfResidence: { type: String},
            BVNImage: { type: String},
            BVNNImageBase64: { type: String},
            BVNDateOfBirth: { type: Date},
            userId: { type: String},
            flutterFlwRef: { type: String},
            flutterOrderRef: { type: String},
            flutterAccountNumber: { type: Number},
            flutterBankName: { type: String},
            flutterCreatedAt: { type: Number},
            amount: { type: Number}


    },
    {timestamps: true}
)

module.exports = mongoose.model('flutterWave', flutterWaveSchema);
