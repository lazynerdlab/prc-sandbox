const jwt = require('jsonwebtoken');


const getWebToken = (req) =>{
const webToken = req.headers.authorization;
const webTokenResult = webToken.split(' ');
const tokenResult = webTokenResult[1];

const info = jwt.verify(tokenResult, process.env.JWT_SEC);

    if(!info){
        return res.status(403).json({message:  `error: ${err}`})
    }
    return info;
}

module.exports = {getWebToken};