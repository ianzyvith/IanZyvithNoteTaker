const fs = require("fs");
const path = require("path");

// function to create a new note
function newNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: noteArray}, null, 2))
    return note;
}

// function to delete notes
function deleteNote(noteArray, id) {
    let deleteID = parseInt(id);
    noteArray.splice(deleteID, 1);

    // rewrite id of existing notes
    for (let i = deleteID; i < noteArray.length; i++) {
        noteArray[i].id = i.toString();
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: noteArray}, null, 2))
}


module.exports = {
    newNote,
    deleteNote
};