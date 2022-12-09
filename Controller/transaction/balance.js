const User =  require('../../models/user');
const jwt = require('jsonwebtoken');
const { webToken } = require('../component/webToken');


const balance = async (req,res) =>{

    const verifyJWT = await webToken(req);

    const checkerEmail = verifyJWT.email;

    try{
    const userBalance = await User.findOne({email: checkerEmail});
    const viewBalance = userBalance.balance

    res.status(200).json(viewBalance);
    }catch{
        res.status(401).json(err);
    }
}

module.exports = {balance}