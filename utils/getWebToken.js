const jwt = require('jsonwebtoken');


const getWebToken = (req) => {
    const webToken = req.headers.authorization;
    const webTokenResult = webToken.split(' ');
    const tokenResult = webTokenResult[1];

    if (!req.headers.authorization) {
        return res.status(401).json({ message: 'Incorrect' })
    }
    const info = jwt.verify(tokenResult, process.env.JWT_SEC);

    if (!info) {
        return res.status(403).json({ message: `error: ${err}` })
    }
    return info;
}


module.exports = { getWebToken };