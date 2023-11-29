const mongoose = require('mongoose');

// Define the schema for a note
const noteSchema = new mongoose.Schema({
    text: String,  // The content of the note
    createdAt: {   // The date and time when the note was created
        type: Date,
        default: Date.now
    },
    done: {        // Whether the note is marked as done
        type: Boolean,
        default: false
    },

    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' }

});

// Create the model from the schema
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;

