const express = require("express");
const methodOverride = require("method-override");
const noteRouter = require("./routes/noteRoutes");
const router = require("./routes/router");
const path = require("path");


//app
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//router
app.use("/", noteRouter);
app.use("/", router);


//server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});