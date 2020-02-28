const express = require('express')
const router = express.Router();
const TransactionController = require('../controllers/TransactionController')

router.get('/', TransactionController.getTransactions)

router
    .route('/')
    .get(TransactionController.getTransactions)
    .post(TransactionController.addTransaction)

router
    .route('/:id')
    .delete(TransactionController.deleteTransaction)


module.exports = router