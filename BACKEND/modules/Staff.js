const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    Username: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true
    },

    FirstName: {
        type: String,
        required: true
    },

    LastName: {
        type: String,
        required: true
    },

    NIC: {
        type: String,
        required: true
    },

    Telephone: {
        type: String,
        required: false
    },

    Password: {
        type: String,
        required: false,
    },
    AccountStatus: {
        type: String,
        required: false,
        default: "Active"
    },
    AddedDate: {
        type: Date,
        required: true,
        default: new Date()
    },

    LastUpdated: {
        type: Date,
        required: true,
        default: new Date()
    }


})

const Staff = mongoose.model("Staff", ItemSchema);
module.exports = Staff;