const express       = require('express');
const app           = express();
const cors          = require('cors');
const bodyParser    = require('body-parser');
const path          = require('path');
const db            = require('./config/config');
const PORT          = process.env.PORT || 5000;
const passport      = require("passport");



//Init Middleware
app.use(express.json({ extended: false }));
app.use(express.static('client/build'));

//passport
app.use(passport.initialize());
require("./config/passport");



//Define routes
app.use('/', require('./routes/'))



app.listen(PORT, ()=>  console.log(`Server started on ${PORT}`))