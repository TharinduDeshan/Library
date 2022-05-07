const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    CustomerID : {
        type : String,
        required : true
    },

    Name : {
        type : String,
        required : true
    },

    NIC : {
        type : String,
        required : true
    },

    PhoneNumber : {
        type : String,
        required : true,
    },

    Address : {
        type : String,
        required : true
    },

    Email : {
            type : String,
            required : true,
    },

    Occupcation : {
        type : String,
        required : true,
    },

    Gender : {
        type : String,
        required :true,
        default : "Others"
    },

    Member : {
        type : String,
        required : true,
        default : "YES"
    },

})

const Customer = mongoose.model("Customer",CustomerSchema);
module.exports = Customer;