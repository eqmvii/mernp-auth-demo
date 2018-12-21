// Server
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
// Handle post requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Passport
var session = require("express-session");
var passport = require("./config/passport");

// DB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernp-auth-thursday-12202018");
const db = require("./models");

// Activate Passport
app.use(session({ secret: "preclassdemo", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// API routes - in serve.js for simplicity of demo
app.get("/allusers", function(req, res) {
  console.log("All Users route hit");
  db.User
    .find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

app.post("/login", passport.authenticate("local"), function(req, res) {
  console.log("Post request to login route hit!");
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  res.json("YOU ARE LOGGED IN");
});


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  console.log("Doing app.use express.static");
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  console.log("Catch All route hit");
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
