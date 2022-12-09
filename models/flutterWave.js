const mongoose = require('mongoose');

const flutterWaveSchema = new mongoose.Schema(
    {
            BVNFirstName: { type: String, required: true},
            BVNLastName: { type: String, required: true},
            BVNMiddleName: { type: String, required: true},
            BVNBVN: { type: String, unique: true, required: true},
            BVNGender: { type: String, required: true},
            BVNNationality: { type: String, required: true},
            BVNNumber: { type: String, unique: true, required: true},
            BVNMaritalStatus: { type: String, required: true},
            BVNStateOfResidence: { type: String, required: true},           
            BVNLGAOfResidence: { type: String, required: true},
            BVNImage: { type: String, required: true},
            BVNNImageBase64: { type: String, required: true},
            BVNDateOfBirth: { type: Date, required: true},
            userId: { type: String, unique: true, required: true} 

    },
    {timestamps: true}
)

module.exports = mongoose.model('flutterWave', flutterWaveSchema);
