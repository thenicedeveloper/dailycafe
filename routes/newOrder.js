const mongoose = require("mongoose");
const User = require("../models/user");
const Order = require("../models/order")


var myFunc = async function(){

    console.log("Starting")

    var newOrder = await Order.create({
        orderId: new mongoose.Types.ObjectId(),
        totalItems: 5,
        totalPrice: 20
    }, function(err, createdOrder){
        if (err) throw err;
        User.findOne({email: "thenicedeveloper@gmail.com"}, function(err, user){
            if (err) throw err;
            user.orders.push(createdOrder)            
            user.save(function(err, data){
                if(err) throw err;
                console.log("Order Saved Succesfully!")
            })
        })
    })  

    

    

}


myFunc();






    








