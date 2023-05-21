const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // console.log(req);
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("home page");
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));

  // res.send('home page')
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
