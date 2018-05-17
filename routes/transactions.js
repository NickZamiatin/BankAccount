const express = require('express');
const router = express.Router();
const transactionController = require('../controller/transactions');

router.get('/accounts/:account_id/transactions', transactionController.index);
router.post('/accounts/:account_id/transactions', transactionController.create);



module.exports = router;