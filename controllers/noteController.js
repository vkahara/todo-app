const Note = require("../models/noteModel");

exports.list = async (req, res) => {
  try {
    const notes = await Note.find();  // Fetch all notes
    res.render("notes", { title: "Your Notes", notes });  // Render them on notes.ejs
  } catch (err) {
    res.status(500).send(err);
  }
};


exports.create = async (req, res) => {
  try {
    const newNote = new Note({
      text: req.body.noteText,  // Get note text from the form
    });
    await newNote.save();  // Save the new note
    res.redirect("/notes");  // Redirect back to the notes page
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
