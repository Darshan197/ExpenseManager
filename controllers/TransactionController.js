const Transaction = require('../models/Transaction')
const getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find()
        return res.status(200).json({transactions})
    } catch (error) {
        res.status(500).json({err: 'Server err'})
    }
}

const addTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.create(req.body)
        return res.status(201).json({transaction})
    } catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message)
            return res.status(400).json({err: messages})
        } else {
            res.status(500).json({err: 'Server err'})
        }
    }
}

const deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id)
        if(!transaction) {
            return res.status(404).json({err: 'Data not found !'})
        } else {
            await transaction.remove()
            return res.status(200).json({
                success: true,
                data: {}
            })
        }
    } catch (error) {
        res.status(500).json({err: 'Server err'})
    }
}


module.exports = { getTransactions, addTransaction, deleteTransaction }