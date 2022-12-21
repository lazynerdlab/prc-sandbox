const router = require('express').Router();

const { vtuAirtime, verifyCustomer, cableTV } = require('../Controller/vtu/vtuTransactions');
const { vtubalance } = require('../Controller/vtu/vtuBalance');
const { authMiddleware } = require('../middleware');
const { adminPermission } = require('../middleware/permissions.middleware');


router.post('/balance', adminPermission, vtubalance);
router.post('/purchaseairtime', authMiddleware, vtuAirtime);
router.post('/verifycustomer', authMiddleware, verifyCustomer);
router.post('/cabletv', authMiddleware, cableTV);


module.exports = router;