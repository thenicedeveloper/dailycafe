const mongoose = require("mongoose");
const {Schema} = mongoose;

const orderSchema = new Schema({
    orderId: String,
    userId:{type: Schema.Types.ObjectId, ref:'User'},
    date:{ type: Date, default: Date.now }
});

module.exports = mongoose.model("Orders", orderSchema);