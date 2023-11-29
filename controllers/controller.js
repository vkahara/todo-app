const Note = require("../models/noteModel");

exports.index = (req, res) => {
  res.render("index", { title: "Notes Application" });
};

exports.about = (req, res) => {
  res.render("about", { title: "About Page" });
};