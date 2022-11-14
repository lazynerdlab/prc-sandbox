const User =  require('../models/user');
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');

const Verify = async (req,res) => {
    try{
      const userVerify = await User.findOne({email: req.body.email})
      if (!userVerify){
        res.status(403).json('not verified')
      }else{
        try {
          userVerify.updateOne({isverified: true})
        } catch (err) {
          res.status(403).json(err);
        }
        
      }
      
  
      res.status(200).json({});
  
    } catch(err){
      res.status(500).json(err);
    }
  }

  module.exports = {Verify};