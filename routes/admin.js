const router = require('express').Router();

const { toggleAdminStatus } = require('../Controller/admin/toggleAdminStatus'),
    { toggleUserActiveStatus } = require('../Controller/admin/toggleUserActiveStatus')


router.patch('/user/:userId/changeadmin', toggleAdminStatus)
.patch('/user/:userId/changeactivestatus', toggleUserActiveStatus)

module.exports = router