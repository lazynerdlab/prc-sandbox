const { errorHandling } = require('./error.middleware'),
    permissions = require('./permissions.middleware'),
    verifyLoggedIn = require('./auth.middleware')

module.exports = { errorHandling, permissions, verifyLoggedIn }