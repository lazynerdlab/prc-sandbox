
const User =  require('../models/user');
const {verifyPasswordMail} = require('./component/mailer');
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');



const forgotPassword = async (req,res)=>{
 
    verifyPasswordMail();
}

const resetPassword = async (req,res)=>{
 
 try {
    
 } catch (error) {
    
 }
      

  }
  
  
  
  
  module.exports = { forgotPassword, resetPassword};