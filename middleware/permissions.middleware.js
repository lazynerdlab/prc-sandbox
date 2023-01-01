const jwt = require('jsonwebtoken');
const { User } = require('../models')
const { getWebToken } = require('../utils')
const { userService } = require('../services')


const adminPermission = async (req, res, next) => {
    const token = await getWebToken(req)
    // req.user = token
    const user = await userService.getUserByEmail(token.email)

    if (user.isAdmin === false) {
        return res.status(401).json(
            'You are not authorized to perform this action'
        )
    }
    next()
}


const userIsActivePermission = async (req, res, next) => {
    const token = await getWebToken(req)
    const user = await userService.getUserByEmail(token.email)

    if (user.isActive === false) {
        return res.status(400).json({
            response: `You have been banned from performing this action. Please contact the admin if you think this was a mistake`
        })
    }
    next()
}


module.exports = { adminPermission, userIsActivePermission };