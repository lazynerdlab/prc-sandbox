const router = require('express').Router();

const { getUserBalance, transaction, transactionHistory } = require('../controller');
const  { permissions } = require('../middleware')


router.put('/', permissions.userIsActivePermission, transaction);
router.post('/history/:quantity', transactionHistory);
router.get('/balance', getUserBalance);


module.exports = router;