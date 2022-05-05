const mongoose = require('mongoose')

const customerDetailsSchema = new mongoose.Schema({
    
    customerName: {
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('CustomerDetails', customerDetailsSchema)