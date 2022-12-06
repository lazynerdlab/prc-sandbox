const jwt = require('jsonwebtoken');

const authPermission = (req, res, next) => {
    const token  = req.header('access-token')
    const user = req.user

    if (!token) {
        return res.status(401).json('You are not authorized to access this page')
    }

    next()
}

const adminPermission = (req, res, next) => {
    const user = req.user

    if (!user.isAdmin) {
        return res.status(401).json('You are not authorized to access this page')
    }

    next()
}

module.exports = {authPermission, adminPermission};