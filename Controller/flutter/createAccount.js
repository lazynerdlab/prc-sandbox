const axios = require('axios');

const flutterWave = require('../../models/flutterWave'),
  User = require('../../models');
const { getWebToken } = require('../../utils');


const creatAccount = async (req, res) => {
  userInfo = await getWebToken(req);
  const userid = userInfo.id;
  const user = await User.findOne({ userId: userid })

  var data = JSON.stringify({
    "email": user.email,
    "is_permanent": true,
    "bvn": user.BVN,
    "tx_ref": "VA12",
    "phonenumber": user.phoneNo,
    "firstname": user.firstName,
    "lastname": user.lastName,
    "narration": `${user.firstName} ${user.lastName}`
  });

  var config = {
    method: 'post',
    url: 'https://api.flutterwave.com/v3/virtual-account-numbers',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer FLWSECK_TEST-SANDBOXDEMOKEY-X'
    },
    data: data
  };

  try {
    const response = await axios(config)
    const responseInfo = JSON.stringify(response.data);

    if (responseInfo.status === "success") {
      const flutterOrderRef = response.data.order_ref,
        flutterFlwRef = response.data.flw_ref,
        flutterAccountNumber = response.account_number,
        flutterBankName = response.data.bank_name,
        flutterCreatedAt = response.data.created_at,
        flutterAmount = response.data.amount

      await user.update({ accountNo: flutterAccountNumber });

      const userFlutterWave = new flutterWave({
        flutterFlwRef: flutterFlwRef,
        flutterOrderRef: flutterOrderRef,
        flutterAccountNumber: flutterAccountNumber,
        flutterBankName: flutterBankName,
        flutterCreatedAt: flutterCreatedAt,
        amount: flutterAmount

      })

      const savedFlutterWave = await userFlutterWave.save();
      res.status(201).json(savedFlutterWave);

    } else {
      return res.status(400).json({ message: `${error}` })
    }

  } catch (error) {
    res.status(500).json({ message: `${error}` })
  }
}
<<<<<<< HEAD
    
module.exports = {creatAccount}
=======
>>>>>>> refactor
