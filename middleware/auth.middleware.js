const { getWebToken } = require("../utils");
const User = require("../models/user");


const authMiddleware = async (req, res, next) => {
    const info = await getWebToken(req)

    try {
        const userInfo = await User.findOne({ userId: info.id });

        if (userInfo.isLoggeIn === true) {
            next();
        } else {
            return { message: 'not logged in' }
        }

    } catch (error) {
        res.status(501).json({ message: `error ${error}` })
    }
}


module.exports = { authMiddleware }