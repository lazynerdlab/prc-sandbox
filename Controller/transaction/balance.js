const User =  require('../../models');
const jwt = require('jsonwebtoken');
const { webToken } = require('../../utils');


const getUserBalance = async (req,res) =>{

    const verifyJWT = await webToken(req);

    const checkerEmail = verifyJWT.email;

    try{
    const userBalance = await User.findOne({email: checkerEmail});
    const viewBalance = userBalance.balance

    res.status(200).json(viewBalance);
    }catch(error){
        res.status(401).json(error);
    }
}

module.exports = { getUserBalance }