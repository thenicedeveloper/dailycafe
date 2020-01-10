const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const config = require("../config/config");
let user = require("../models/user")

// let user = {}

// user.id is the shortcut to the auto generated mongodb _id
// The reason why we use mongodb is because we might use facebook, github, twitter ....
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.auth.google_id,
      clientSecret: config.auth.google_secret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      //Save to database
    //   console.log("access token: ", accessToken);
    //   console.log("refresh token: ", refreshToken);
      // console.log("Profile: ", profile);
      // done(null, user);
      // Search database to see if user exists
      const existingUser = await user.findOne({ googleId: profile.id });
      if (existingUser) {
        // User already exists no need to save to database
        done(null, existingUser);
        
      } else {
        // Save new user to database
        console.log("saved record")
        user = await new user({ googleId: profile.id })
        console.log("Last user: ")
        console.log(user)
        done(null, user);
      }
    }
  )
);

