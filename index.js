const express = require("express");
const methodOverride = require("method-override");
const noteRouter = require("./routes/noteRoutes");
const router = require("./routes/router");
const path = require("path");
const mongoose = require("mongoose");
require('dotenv').config();


//database
const url = process.env.MONGODB_URI;

mongoose.connect(url)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

//app
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, 'public')));

//router
app.use("/", noteRouter);
app.use("/", router);

// Login
app.get("/login", (req, res) => {
    res.render("login");
  });



//server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});

module.exports = app;