const { json } = require("body-parser");
const express = require("express");
const teams = require("./teams");

const app = express();

app.get("/", function (req, res) {
  res.send(JSON.stringify(teams));
});
app.listen(3000, function () {
  console.log("Server is running on localhost3000");
});
