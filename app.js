const express = require("express");
const path = require("path");

//for .env
require("dotenv").config();

const mongoose = require("mongoose");

const app = express();
// My Routes
const homeRoute = require("./routes/home-routes");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use(homeRoute);
app.use((req, res, next) => {
  res.status(404);
  res.render("404");
});
app.listen(3000);


mongoose.connect('mongodb+srv://harsh:${process.env.DB_PASSWORD}@cluster0-lfbed.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true} )