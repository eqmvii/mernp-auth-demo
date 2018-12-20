// Server
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// DB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernp-auth-thursday-12202018");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes - in serve.js for simplicity of demo
app.get("/allusers", function(req, res) {
  res.send("You hit the all users route!");
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
