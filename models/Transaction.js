const mongoose = require('mongoose')

const Transaction = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Text can not be empty']
    },
    amount: {
        type: Number,
        required: [true, 'Amount can not be empty']
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Transaction', Transaction)