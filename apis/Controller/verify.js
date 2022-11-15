const User =  require('../models/user');
const CryptoJS = require('crypto-js');

const Verify = async (req,res) => {
    
      const userVerify = await User.findOne({email: req.body.email})
      if (!userVerify){
        res.status(403).json({message: 'not verified'})
      }else{
        try {
          userVerify.updateOne({isverified: true})
          res.status(200).json({message: 'User verified'});
        } catch (err) {
          res.status(403).json({message: err});
        }     
      }
}

  module.exports = {Verify};