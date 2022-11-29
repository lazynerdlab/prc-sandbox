


module.exports{

    let randomDigits = 0;

    const userIdDigit = async () =>{
       randomDigits = digitGenerator.randomDigits(11).join("");
      const checkId = await Transaction.findOne({transactionId: randomDigits});
      if(checkId){
        userIdDigit();
         }
         return randomDigits;
      }
}