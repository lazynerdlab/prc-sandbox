const router = require('express').Router();

const { permissions } = require('../middleware')

const { 
    compareUserInfo, 
    toggleAdminStatus, 
    toggleUserActiveStatus 
} = require('../Controller')


router.patch('/user/:userId/changeadmin', toggleAdminStatus)
    .patch('/user/:userId/changeactivestatus', permissions.adminPermission, toggleUserActiveStatus)
    .get('/user/:userId/compare', compareUserInfo)

module.exports = router