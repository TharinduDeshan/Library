const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    
    customerName: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Customer', customerSchema)