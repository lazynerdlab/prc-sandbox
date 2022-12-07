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
    const token  = req.header('access-token')

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

module.exports = {authPermission, adminPermission};