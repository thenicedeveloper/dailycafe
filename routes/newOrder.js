const mongoose = require("mongoose");
const User = require("../models/user");
const Order = require("../models/order")


const myFunction = async function(){
    var newOrder = await Order.create({
        orderId: new mongoose.Types.ObjectId(),
        userId: User._id
    })    

    console.log(newOrder)

}

myFunction();














    








