const User =  require('../models/user');



const balance = async (req,req) =>{
    try{
    const userBalance = await User.findOne({email: req.body.email});
    const viewBalance = userBalance.balance

    res.status(200).json(viewBalance);
    }catch{

    }
}

module.exports = {balance}