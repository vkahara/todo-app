const express = require("express");
const methodOverride = require("method-override");
const noteRouter = require("./routes/noteRoutes");
const generalRouter = require("./routes/router");
const loginRouter = require("./routes/loginRoute");
const session = require('express-session');
const path = require("path");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error(`Error connecting to the database. \n${err}`));

app.use("/", noteRouter);
app.use("/", generalRouter);
app.use("/", loginRouter);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
