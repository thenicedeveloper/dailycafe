const mongoose = require("mongoose");
const {Schema} = mongoose;

const productsSchema = new Schema({
    productId: String,
    name: String,
    description: String,
    price: string
});

mongoose.model("products", productSchema);