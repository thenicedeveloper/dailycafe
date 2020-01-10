const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

module.exports = mongoose.model("User", userSchema);