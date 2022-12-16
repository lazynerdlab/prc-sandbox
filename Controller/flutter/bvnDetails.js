const Flutterwave = require('flutterwave-node-v3');
const flw = new Flutterwave(FLW_PUBLIC_KEY, FLW_SECRET_KEY);
const CryptoJS = require('crypto-js');
const { getWebToken } = require('../../utils');
const flutterWave = require('../../models');


const bvnDetails = async (req, res) => {
    const verifyJWT = await getWebToken(req);
    const userId = verifyJWT.id;
    BVN = CryptoJS.AES.decrypt(req.body.bvn, process.env.PASSSEC).toString();
    const payload = { "bvn": BVN };
    const response = await flw.Misc.bvn(payload);

    if (response.status === "success" && response.data.bvn === BVN) {

        try {
            const newFlutterWave = new flutterWave({
                BVNFirstName: response.data.first_name,
                BVNLastName: response.data.last_name,
                BVNMiddleName: response.data.middle_name,
                BVNBVN: response.data.bvn,
                BVNGender: response.data.gender,
                BVNNationality: response.data.nationality,
                BVNNumber: response.data.phone_number,
                BVNMaritalStatus: response.data.marital_status,
                BVNStateOfResidence: response.data.state_of_residence,
                BVNLGAOfResidence: response.data.lga_of_residence,
                BVNImage: response.data.image,
                BVNNImageBase64: response.data.image_base_64,
                BVNDateOfBirth: response.data.date_of_birth,
                userId: userId
            });

            res.status(200).json({
                message: `${response.data.first_name} info verified`
            });

        } catch (error) {
            res.status(500).json({
                message: `${error}`
            });
        }
    } else {
        res.status(400).json(
            {
                message: `BVN not verified`
            });
    }
}


module.exports = { bvnDetails };