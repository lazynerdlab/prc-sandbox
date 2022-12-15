const { errorHandling } = require('./error.middleware'),
    permissions = require('./permissions.middleware'),
    authMiddleware = require('./auth.middleware')

module.exports = { errorHandling, permissions, authMiddleware }