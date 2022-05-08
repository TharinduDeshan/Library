const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tbl_userSchema = new Schema({
    Username : {
        type : String,
        required : true
    },

    Password : {
        type : String,
        required : true
    },

    
})

const  Login = mongoose.model(" Login", LoginSchema);
module.exports =  Login;