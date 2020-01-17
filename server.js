const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const config = require("./config/config");

// Mongodb schema for users
require("./models/user");
// since we are not returning anything from passport we can condence it to just require.
require("./config/passport");
// Connect to mongo database
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const app = express();

app.use(
    cookieSession( {
        // expires in 30 days 
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [config.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authroutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server starting in port ${PORT}`));
