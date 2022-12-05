const jwt = require('jsonwebtoken');


const webToken = (req) =>{
const webToken = req.headers.authorization;
const webTokenResult = webToken.split(' ');
const tokenResult = webTokenResult[1];

const info = jwt.verify(tokenResult, process.env.JWT_SEC);
const senderEmail = info.email;

return senderEmail
}

module.exports = {webToken};