const router = require('express').Router();

const { toggleAdminStatus } = require('../controller/admin/toggleAdminStatus'),
    { toggleUserActiveStatus } = require('../controller/admin/toggleUserActiveStatus'),
    {compareUserInfo } = require('../controller')


router.patch('/user/:userId/changeadmin', toggleAdminStatus)
    .patch('/user/:userId/changeactivestatus', toggleUserActiveStatus)
    .get('/user/:userId/compare', compareUserInfo)

module.exports = router