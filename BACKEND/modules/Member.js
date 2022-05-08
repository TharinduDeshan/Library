const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const  MemberSchema = new Schema({
    MemberID : {
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

    RegistredDate : {
        type : String,
        required : true,
    },
})

const  Member = mongoose.model(" Member", MemberSchema);
module.exports =  Member;