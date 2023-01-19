const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/demo1", function (req, res) {
  res.sendFile(path.join(__dirname, "/demo/demo1.html"));
});

app.get("/demo2", function (req, res) {
  res.sendFile(path.join(__dirname, "/demo/demo2.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
