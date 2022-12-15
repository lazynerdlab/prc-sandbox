const router = require('express').Router();

const { toggleAdminStatus } = require('../controller/admin/toggleAdminStatus'),
    { toggleUserActiveStatus } = require('../controller/admin/toggleUserActiveStatus')


router.patch('/user/:userId/changeadmin', toggleAdminStatus)
    .patch('/user/:userId/changeactivestatus', toggleUserActiveStatus)

module.exports = router