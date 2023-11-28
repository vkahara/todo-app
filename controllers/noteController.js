const Note = require("../models/noteModel");

exports.list = async (req, res) => {
  try {
    const notes = await Note.find();
    res.render("index", { notes });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.create = async (req, res) => {
  try {
    const note = new Note({
      text: req.body.text,
    });
    await note.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    await Note.findByIdAndRemove(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.status(500).send(err);
  }
};
