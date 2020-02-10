const mongoose = require("mongoose");
const {Schema} = mongoose;

const orderSchema = new Schema({
    orderId: String,
    totalItems: String,
    totalPrice: String,
    date:{ type: Date, default: Date.now }
});

module.exports = mongoose.model("Orders", orderSchema);