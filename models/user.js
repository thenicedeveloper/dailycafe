const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new Schema({
    googleId: String,
    name: String,
    email: String,
    orders: [
        {
            type: Schema.Types.ObjectId, 
            ref: "Orders"
        }
    ]
});

module.exports = mongoose.model("Users", userSchema);