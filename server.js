// Server
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// DB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernp-auth-thursday-12202018");
const db = require("./models");

// API routes - in serve.js for simplicity of demo
app.get("/allusers", function(req, res) {
  console.log("All Users route hit");
  db.User
    .find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
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
