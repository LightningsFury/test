// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html

// http://expressjs.com/en/starter/basic-routing.html

app.use(express.static("views"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
const listener = app.listen("3000", function() {
  console.log("Your app is listening on port " + listener.address().port);
});
