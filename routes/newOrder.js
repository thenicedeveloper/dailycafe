const mongoose = require("mongoose");
const User = require("../models/user");
const Order = require("../models/order")


var myFunc = async function(){

    console.log("Starting")

    var newOrder = await Order.create({
        orderId: new mongoose.Types.ObjectId()
    })    

    console.log(newOrder)

}


myFunc();






    








