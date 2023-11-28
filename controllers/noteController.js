const Note = require("../models/noteModel");

exports.list = async (req, res) => {
  try {
    const notes = await Note.find();
    res.render("index", { notes });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.create = (req, res) => {
  const note = new Note({
    text: req.body.text,
  });
  note.save((err, note) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.redirect("/");
    }
  });
};

exports.delete = (req, res) => {
  Note.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.redirect("/");
    }
  });
};