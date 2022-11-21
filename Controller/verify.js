const User =  require('../models/user');
const CryptoJS = require('crypto-js');

const verify = async (req,res) => {
    
      const userVerify = await User.findOne({email: req.body.email})
      if (!userVerify){
        return res.status(403).json({message: 'not a user'})
      }else{
        try {
          userVerify.updateOne({isverified: true})
          res.status(200).json({message: 'User verified'});
        } catch (err) {
          res.status(403).json({message: err});
        }     
      }
}

  module.exports = {verify};