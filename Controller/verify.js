const User =  require('../models/user');
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');


const verify = async (req,res) => {

      const jwtUser = jwt.verify(req.body.token, process.env.PASS_RESET_KEY);
      if (!jwtUser){
        return res.status(402).json({message: 'Not verify'});
      }

      console.log(jwtUser.id);

      const newUser = await User.findOne({_id: jwtUser.id});
      const userMail = newUser.email
      
      if(userMail == req.body.email){
        try {
          const userVerify = await User.findOneAndUpdate({email: req.body.email},{isverified: true});
          if(!userVerify){return res.status(401).json({message: 'not updated'});}
          res.status(200).json({message: 'User verified'});
        } catch (err) {
          res.status(500).json({message: err});
        }     
      }
}

  module.exports = {verify};