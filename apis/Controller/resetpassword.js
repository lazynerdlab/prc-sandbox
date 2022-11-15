
const User =  require('../models/user');
const {verifyPasswordMail} = require('./component/mailer');
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');



const forgotPassword = async (req, res)=>{
 try {
    verifyPasswordMail(req, res);
    res.status(200).json('message sent')
 } catch (err) {
  res.status(500).json(err);  
 }
    
}

const resetPassword = async (req,res)=>{
 
    const usermail = await User.findOne({email: req.body.email});
    
    req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASSSEC).toString();

    try {
        const userUpate = await User.findByIdAndUpdate(usermail._id, {$set: req.body}, {new: true});
        
    } catch (err) {
        res.status(500).json(err);
    }    
  }
  
  
  
  
  module.exports = { forgotPassword, resetPassword};