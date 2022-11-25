const digitGenerator = require('crypto-secure-random-digit');
const User =  require('../../models/user');
const dotenv = require('dotenv');



  let randomDigits = 0;

  exports.userIdDigit = async () =>{
     randomDigits = digitGenerator.randomDigits(10).join("");
    const checkId = await User.findOne({userId: randomDigits});
    if(checkId){
      userIdDigit();
       }
       return randomDigits;
    }

  