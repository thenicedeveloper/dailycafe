const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const config = require("../config/config");
const User = require("../models/user");

// user.id is the shortcut to the auto generated mongodb _id
// The reason why we use mongodb is because we might use facebook, github, twitter ....
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.auth.google_id,
      clientSecret: config.auth.google_secret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      // Search database to see if user exists
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // User already exists no need to save to database
        console.log(`User already exists in database`);
        done(null, existingUser);
      } else {
        // Save new user to database
        console.log(`Save Record: ${profile.id} ${profile.displayName} ${profile.emails[0].value}`);
        
        const user = await User.create({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value
        });
        done(null, user);
      }
    }
  )
);

