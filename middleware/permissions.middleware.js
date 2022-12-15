const jwt = require('jsonwebtoken');
const User = require('../models')

const authPermission = (req, res, next) => {
    const token = req.header('access-token')
    const user = req.user

    if (!token) {
        return res.status(401).json('You are not authorized to access this page')
    }
    next()
}


const adminPermission = (req, res, next) => {
    const token = req.header('access-token')

    try {
        const verified = jwt.verify(token, process.env.JWT_SEC)
        req.user = verified
        console.log(req.user)

    } catch (error) {

    }
    if (!req.user.isAdmin == true) {
        return res.status(401).json('You are not an admin')
    }

    next()
}


const userIsActivePermission = async (req, res, next) => {
    const token = req.headers.authorization;
    const tokenResult = token.split(' ')[1];

    try {
        const verified = jwt.verify(tokenResult, process.env.JWT_SEC)
        req.user = verified

    } catch (error) {
        res.status(400).json({ error })
    }

    const user = await User.findOne(req.user)

    if (user.isActive == false) {
        return res.status(400).json({
            response: `You have been banned from performing this action. Please contact the admin if you think this is a mistake`
        })
    }
    next()
}


module.exports = { authPermission, adminPermission, userIsActivePermission };