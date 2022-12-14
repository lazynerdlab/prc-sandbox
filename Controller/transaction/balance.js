const User =  require('../../models');
const jwt = require('jsonwebtoken');


const getUserBalance = async (req,res) =>{

    const webToken = req.headers.authorization;
    const webTokenResult = webToken.split(' ');
    const tokenResult = webTokenResult[1];

    const info = jwt.verify(tokenResult, process.env.JWT_SEC);
    const checkerEmail = info.email;

    try{
    const userBalance = await User.findOne({email: checkerEmail});
    const viewBalance = userBalance.balance

    res.status(200).json(viewBalance);
    }catch(error){
        res.status(401).json(error);
    }
}

module.exports = { getUserBalance }