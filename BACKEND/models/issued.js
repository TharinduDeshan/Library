const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IssuedSchema = new Schema({
    
    customerID : {
        type : String,
        required : true
    },

    itemIDs : [{

        type:String
    }],

    issuedDate : {
        type : Date,
        required : true,
        default : new Date()
    },

    totalPrice : {
        type : String,
        required : true
    },


})

const Issued = mongoose.model("Issued",IssuedSchema);
module.exports = Issued;