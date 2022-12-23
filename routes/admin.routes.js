const router = require('express').Router();

const { 
    compareUserInfo, 
    toggleAdminStatus, 
    toggleUserActiveStatus 
} = require('../Controller')


router.patch('/user/:userId/changeadmin', toggleAdminStatus)
    .patch('/user/:userId/changeactivestatus', toggleUserActiveStatus)
    .get('/user/:userId/compare', compareUserInfo)

module.exports = router