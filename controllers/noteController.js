const Note = require("../models/noteModel");

exports.list = async (req, res) => {
  if (!req.session.loggedin) {
      return res.redirect('/login');
  }

  try {
      const notes = await Note.find({ user: req.session.userId });
      res.render("notes", { 
          title: "Your Notes", 
          notes, 
          username: req.session.username
      });
  } catch (err) {
      res.status(500).send(err);
  }
};


exports.create = async (req, res) => {
  if (!req.session.loggedin) {
      return res.redirect('/login');
  }

  try {
      const newNote = new Note({
          text: req.body.noteText,
          user: req.session.userId // Store the user's ID with the note
      });
      await newNote.save();
      res.redirect("/notes");
  } catch (err) {
      res.status(500).send(err);
  }
};


exports.update = async (req, res) => {
  try {
    const noteId = req.params.id;
    const doneStatus = req.body.done ? true : false;
    await Note.findByIdAndUpdate(noteId, { done: doneStatus });
    res.redirect("/notes");
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const noteId = req.params.id;
    await Note.findByIdAndDelete(noteId);
    res.redirect("/notes");
  } catch (err) {
    res.status(500).send(err);
  }
};
