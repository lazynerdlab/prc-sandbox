const router = require('express').Router();

const { toggleAdminStatus } = require('../Controller/admin/toggleAdminStatus')


router.patch('/user/:userId/changeadmin', toggleAdminStatus)

module.exports = router