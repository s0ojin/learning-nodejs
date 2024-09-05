"use strict";

// module
const express = require("express");
const app = express();

const PORT = 3000;

// routing
const home = require("./routes/home");

// app setting
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); //use -> middleware 등록

app.listen(PORT, () => {
  console.log("서버가동");
});
