const digitGenerator = require('crypto-secure-random-digit');
const User =  require('../models/user');
const Transaction =  require('../models/transaction');

  let randomDigits = 0;

  const userIdDigit = async () =>{
     randomDigits = digitGenerator.randomDigits(16).join("");
    const checkId = await User.findOne({userId: randomDigits});
    if(checkId){
      userIdDigit();
       }
       
      return randomDigits;
    }



    const transferIdDigit = async () =>{
       randomDigits = digitGenerator.randomDigits(11).join("");
      const checkId = await Transaction.findOne({transactionId: randomDigits});
      if(checkId){
        userIdDigit();
         }
         return randomDigits;
    }

  module.exports = {userIdDigit, transferIdDigit}
