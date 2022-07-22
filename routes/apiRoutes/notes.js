const router = require("express").Router();
const { notes } = require('../../db/db');
const { newNote, deleteNote } = require('../../lib/notes');

// GET request of exising data
router.get('/notes', (req, res) => {
    let existingNotes = notes;
    res.json(existingNotes);
});

// POST request to add new note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = newNote(req.body, notes);
    res.json(note);
});


// DELETE request to remove note from data
router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
 });


module.exports = router;
