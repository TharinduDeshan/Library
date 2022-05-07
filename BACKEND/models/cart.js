const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    customerID : {
        type : String,
        required : true
    },

    itemIDs : [{

        type:String
    }],

    orderDate : {
        type : Date,
        required : true,
        default : new Date()
    },


})

const Cart = mongoose.model("Cart",CartSchema);
module.exports = Cart;