const { errorHandling } = require('./error.middleware'),
    { authMiddleware } = require('./auth.middleware'),
    permissions  = require('./permissions.middleware');


module.exports = { errorHandling, permissions, authMiddleware }