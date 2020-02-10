const passport = require("passport");

module.exports = app => {
  // The googlestrategy looks for the "google" string
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // The "google" identifies google to use the googlestrategy
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      console.log("DZ login " + req.user);
      // res.send(req.user);
        res.redirect("/home");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    console.log("DZ log out" + req.user);
    // res.send(req.user);
    res.redirect("/landingpage");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
