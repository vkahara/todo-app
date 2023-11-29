const express = require("express");
const methodOverride = require("method-override");
const noteRouter = require("./routes/noteRoutes");
const router = require("./routes/router");
const path = require("path");
const mongoose = require("mongoose");

//database
const url = "mongodb+srv://1:1@cluster0.mh1o3kp.mongodb.net/?retryWrites=true&w=majority";

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
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, 'public')));

//router
app.use("/", noteRouter);
app.use("/", router);


//server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});