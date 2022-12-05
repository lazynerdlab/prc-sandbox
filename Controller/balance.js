const User =  require('../models/user');
const jwt = require('jsonwebtoken');


const balance = async (req,res) =>{

    const webToken = req.headers.authorization;
    const webTokenResult = webToken.split(' ');
    const tokenResult = webTokenResult[1];

    const info = jwt.verify(tokenResult, process.env.JWT_SEC);
    const checkerEmail = info.email;

    try{
    const userBalance = await User.findOne({email: checkerEmail});
    const viewBalance = userBalance.balance

    res.status(200).json(viewBalance);
    }catch{
        res.status(401).json(err);
    }
}

module.exports = {balance}